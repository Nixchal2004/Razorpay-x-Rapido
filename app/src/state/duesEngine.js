// Rapido Dues state engine — a lightweight local/simulated backend for the
// prototype. Not a production backend, database, auth system, or payment
// gateway: it's a single in-memory + localStorage-backed store that models
// the Detect -> Diagnose -> Decide -> Act -> Escalate -> Audit lifecycle
// described in the PRD (chats/*.md + the project/*.dc.html source files),
// so Captain and Rider screens read and mutate the SAME case records
// instead of each hardcoding its own copy.
//
// This module has no React/DOM dependency — see DuesContext.jsx for the
// React binding. Screens never touch this file's internals directly; they
// call the action functions returned by useDuesEngine().
//
// --- PRD grounding (see chats/chat1..5.md and project/*.dc.html) ---
// - Floor limit: ₹200 ("Floor limit ₹200" ruler, chat1/chat2/chat3, and
//   the same value baked into C. Final Emergency.dc.html). The PRD frames
//   this as INFORMATIONAL context for the captain ("this is informational,
//   not alarming yet") — the system "pre-qualifies" the trip but "the
//   captain makes the final call." So DIAGNOSE computes and stores the
//   floor-limit comparison, but never uses it to auto-block either
//   decision button — matching the existing EmergencySheet UI, which
//   always offers both "Mark as due" and "Request alternate payment"
//   regardless of amount.
// - Confirmation code: a persistent 6-character alphanumeric "Emergency
//   Code" the rider sets up once (chat2: "This is not an OTP, it's a
//   Lifetime code"), NOT a per-trip pickup OTP. Final value across every
//   source file is "ABC123" (case-insensitive) — see C. Final
//   Emergency.dc.html's `static CODE = "ABC123"` and R. Final
//   Emergency.dc.html's `emergencyCode` default "abc123". This is what
//   the existing app's EmergencySheet.jsx already implements; the current
//   task's "pickup OTP re-verification" is honored by requiring this same
//   existing code-entry step, not by renaming anything.
// - Rider trust signals used at DECIDE time: rider rating, "N rides
//   together," and dues history ("N settled, N escalated") — all shown in
//   Step A's trust panel (chat1/chat2/chat3).
// - Account-wide flag limit: 3 (chat2: "the block triggers off the total
//   flag count reaching 3, regardless of how many separate dues
//   contributed to those flags").
// - Reactivation fee: ₹29, charged once per reactivation event, not once
//   per flagged due (chat2).
// - Reminder limit: 3/day per due (chat1 Screen 5 spec; the existing
//   DuesLedger.jsx implements this as a running per-due counter, which
//   this engine matches exactly rather than inventing a calendar-day
//   reset the existing UI never modeled).
// - Flag-eligibility window: a due only becomes flaggable/escalates after
//   72 hours unresolved (chat1 Screen 5: "appears after 72 hours").
// - Retry deadline flavor text is always "today, 6:15 PM" — the PRD never
//   gives a precise duration (e.g. "N hours after the trip"). See the
//   AMBIGUITY note by RETRY_WINDOW_MS below.
//
// --- Explicit ambiguities (per the task's instruction: report, don't
// guess) are called out inline below, each tagged AMBIGUITY. ---

const STORAGE_KEY = 'rapido-dues-engine-v1'
const SCHEMA_VERSION = 1

export const FLOOR_LIMIT = 200
export const FLAG_LIMIT = 3
export const RETRIEVAL_FEE = 29
export const REMINDER_LIMIT = 3
export const EMERGENCY_CODE = 'ABC123'
export const FLAG_ELIGIBLE_HOURS = 72

// AMBIGUITY: the PRD never states a precise retry-window duration (only
// the flavor text "Retrying until 6:15 PM today"). A real backend would
// derive this from a business rule (e.g. "same-day cutoff"). For this
// simulated layer we use a short, demo-appropriate window for newly
// created cases so the FLAGGED escalation is actually reachable in a QA
// session without waiting hours, and a long window for seed data so the
// pre-existing "already pending" demo case doesn't auto-flag on an
// ordinary page load. Both are clearly synthetic, not PRD-sourced.
const RETRY_WINDOW_MS_NEW_CASE = 90 * 1000 // 90s — lets QA observe PENDING->FLAGGED
const RETRY_WINDOW_MS_SEEDED = 6 * 60 * 60 * 1000 // 6h — keeps seed data stable on load

// Case lifecycle. AMBIGUITY: the task's brief lifecycle
// (PENDING -> UNDER REVIEW -> CONFIRMED/FLAGGED/BLOCKED -> RESOLVED) omits
// the "alternate payment requested" outcome, which is a fully-designed,
// already-implemented PRD path (EmergencySheet's "declined" step / the
// warning-light "Ask for another payment method" screen). Removing it
// would mean the state engine doesn't drive that existing screen at all,
// so it's kept as its own terminal-ish state alongside CONFIRMED rather
// than folded into or omitted from the five given names. BLOCKED is
// modeled as an ACCOUNT-level derived status (see getAccountStatus), not
// a per-case state — the PRD is explicit that blocking "triggers off the
// total flag count... account-wide, not per-due," so no single case is
// ever literally "BLOCKED"; its cases are FLAGGED and the account as a
// whole is blocked once three of them accumulate.
export const CaseState = {
  PENDING: 'PENDING', // DETECT done, not yet diagnosed
  UNDER_REVIEW: 'UNDER_REVIEW', // diagnosed + eligible, awaiting captain decision
  CONFIRMED: 'CONFIRMED', // captain marked as due + code verified; retrying
  ALT_PAYMENT_REQUESTED: 'ALT_PAYMENT_REQUESTED', // captain requested alt payment + code verified
  FLAGGED: 'FLAGGED', // confirmed due not settled within the retry window
  RESOLVED: 'RESOLVED', // paid, either directly or after being flagged
  INELIGIBLE: 'INELIGIBLE', // DETECT rejected it (e.g. a payment decline) — never enters the flow
}

function nowIso() {
  return new Date().toISOString()
}

function loadRaw() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed.schemaVersion !== SCHEMA_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

function saveRaw(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — the engine
    // still works for the current tab, it just won't survive a refresh.
  }
}

function seedCase({
  id,
  riderName,
  vehicle,
  route,
  amount,
  captainMeta,
  riderMeta,
  state,
  flaggedReason,
  paidVia,
  ageMs,
}) {
  const createdAt = Date.now() - ageMs
  // For a case seeded directly into CONFIRMED, the retry deadline must be
  // measured from engine startup (now), not from the artificially
  // backdated `createdAt` — otherwise an "aged" seed case (e.g. created
  // 21 hours ago) would compute a deadline already hours in the past and
  // auto-flag itself on the very first escalation sweep, before anyone
  // has done anything. A FLAGGED seed case's deadline has already been
  // "used" by definition, so it's fine (and more representative) to keep
  // it in the past, backdated from createdAt like everything else about it.
  const retryDeadline =
    state === CaseState.CONFIRMED
      ? Date.now() + RETRY_WINDOW_MS_SEEDED
      : state === CaseState.FLAGGED
        ? createdAt + RETRY_WINDOW_MS_SEEDED
        : null
  return {
    id,
    riderName,
    trip: { vehicle, route },
    amount,
    floorLimit: FLOOR_LIMIT,
    withinFloorLimit: amount <= FLOOR_LIMIT,
    failureType: 'connectivity',
    eligible: true,
    diagnosisReason: 'A connection issue on the rider’s side prevented the payment from completing at drop-off.',
    trust: {
      rating: 4.8,
      ridesTogether: captainMeta?.ridesTogether ?? 12,
      duesSettled: captainMeta?.duesSettled ?? 4,
      duesEscalated: captainMeta?.duesEscalated ?? 0,
    },
    state,
    captainDecision: state === CaseState.ALT_PAYMENT_REQUESTED ? 'alt-payment' : 'due',
    otpVerifiedAt: createdAt + 1000,
    retryDeadline,
    flaggedAt: state === CaseState.FLAGGED ? createdAt + RETRY_WINDOW_MS_SEEDED : null,
    flaggedReason: flaggedReason ?? null,
    captainFlag: { flagged: false, flaggedAt: null },
    reminders: { count: 0 },
    thanked: false,
    rating: 0,
    reviewTags: [],
    paidVia: state === CaseState.RESOLVED ? paidVia : null,
    paidAt: state === CaseState.RESOLVED ? createdAt + ageMs / 2 : null,
    createdAt,
    updatedAt: createdAt,
    riderCaption: riderMeta?.caption ?? null,
  }
}

// The six trip IDs/amounts/routes were already identical, independently,
// across the Captain ledger and Rider dashboard's separate hardcoded mock
// data — clearly meant to represent the same six trips. RD1748392045
// (Ramesh Kumar, ₹120, Koramangala 5th Block -> HSR Layout) is deliberately
// NOT seeded here: it's the live case the Captain Emergency flow creates
// on demand when "Emergency" is tapped, so DETECT actually runs instead of
// the case pre-existing in a predetermined state.
function seedCases() {
  const list = [
    seedCase({
      id: 'RD1748391884',
      riderName: 'Anjali Shetty',
      vehicle: 'Auto',
      route: 'Indiranagar → MG Road Metro',
      amount: 220,
      captainMeta: { ridesTogether: 21, duesSettled: 6, duesEscalated: 0 },
      state: CaseState.CONFIRMED,
      ageMs: 21 * 60 * 60 * 1000,
    }),
    seedCase({
      id: 'RD1748390977',
      riderName: 'Kavya Iyer',
      vehicle: 'Bike',
      route: 'BTM Layout → Jayanagar 4th Block',
      amount: 95,
      captainMeta: { ridesTogether: 5, duesSettled: 1, duesEscalated: 1 },
      state: CaseState.FLAGGED,
      flaggedReason: "Wasn't settled within the review window.",
      ageMs: 98 * 60 * 60 * 1000,
    }),
    seedCase({
      id: 'RD1748390211',
      riderName: 'Vikram Rao',
      vehicle: 'Bike',
      route: 'BTM Layout → Silk Board Junction',
      amount: 95,
      state: CaseState.RESOLVED,
      paidVia: 'upi',
      ageMs: 52 * 60 * 60 * 1000,
    }),
    seedCase({
      id: 'RD1748388760',
      riderName: 'Priya Menon',
      vehicle: 'Auto',
      route: 'Jayanagar → Koramangala 8th Block',
      amount: 180,
      state: CaseState.RESOLVED,
      paidVia: 'upi',
      ageMs: 76 * 60 * 60 * 1000,
    }),
    seedCase({
      id: 'RD1748386402',
      riderName: 'Suresh Babu',
      vehicle: 'Bike',
      route: 'MG Road → Indiranagar 100ft Road',
      amount: 60,
      state: CaseState.RESOLVED,
      paidVia: 'auto-retry',
      ageMs: 124 * 60 * 60 * 1000,
    }),
  ]
  const cases = {}
  for (const c of list) cases[c.id] = c
  return cases
}

function initialData() {
  return {
    schemaVersion: SCHEMA_VERSION,
    cases: seedCases(),
    audit: [],
  }
}

function audit(data, { caseId, eventType, previousState, newState, reason }) {
  data.audit.push({
    timestamp: nowIso(),
    caseId,
    eventType,
    previousState: previousState ?? null,
    newState: newState ?? null,
    reason: reason ?? null,
  })
}

function touch(c) {
  c.updatedAt = Date.now()
  return c
}

// --- Escalation sweep ------------------------------------------------
// A real backend would run this on a schedule; this simulated layer runs
// it lazily every time cases are read, which is sufficient for a
// prototype and keeps the engine dependency-free (no timers/workers
// needed to observe the effect — it's visible the next time any screen
// reads state, exactly like an event arriving from a backend poll).
// Returns true if it mutated anything, so the caller can bump the read
// cache's version — the sweep can run as a side effect of any getter
// (see DuesEngine's _sweep), and getters must not hand out a "changed but
// still says nothing changed" snapshot.
function runEscalationSweep(data) {
  const now = Date.now()
  let changed = false
  for (const c of Object.values(data.cases)) {
    if (c.state === CaseState.CONFIRMED && c.retryDeadline && now > c.retryDeadline) {
      const prev = c.state
      c.state = CaseState.FLAGGED
      c.flaggedAt = now
      c.flaggedReason = "Wasn't settled within the review window."
      touch(c)
      audit(data, {
        caseId: c.id,
        eventType: 'auto_flagged_retry_window_missed',
        previousState: prev,
        newState: c.state,
        reason: 'Retry window elapsed without payment.',
      })
      changed = true
    }
  }
  return changed
}

// --- The engine class --------------------------------------------------
// Deliberately framework-agnostic: a plain class with a subscribe/emit
// pair, so DuesContext.jsx can bind it to React without this file knowing
// React exists. Keeping this separation is what the task asks for
// ("keep the state engine separate from presentation/UI components...
// modular so a real API/backend can replace this layer later").
export class DuesEngine {
  constructor() {
    this._data = loadRaw() || initialData()
    runEscalationSweep(this._data)
    this._listeners = new Set()
    this._version = 0
    this._memoCache = new Map()
    this._emitScheduled = false
    this._persist()
  }

  _persist() {
    saveRaw(this._data)
  }

  _emit() {
    this._version += 1
    this._persist()
    for (const l of this._listeners) l()
  }

  subscribe(listener) {
    this._listeners.add(listener)
    return () => this._listeners.delete(listener)
  }

  // Escalation can flip a case's state as a side effect of a plain read
  // (there's no cron in a prototype — see runEscalationSweep's comment).
  // Mutating state and notifying subscribers *during* a React render
  // (which is when getters run) isn't safe, so a sweep-driven change just
  // bumps the version counter to invalidate the memoized snapshots below,
  // and defers the actual listener notification + persist to a microtask
  // so React re-renders right after with the now-current data instead of
  // this read handing back a snapshot that's already stale.
  _sweep() {
    if (runEscalationSweep(this._data)) {
      this._version += 1
      if (!this._emitScheduled) {
        this._emitScheduled = true
        Promise.resolve().then(() => {
          this._emitScheduled = false
          this._persist()
          for (const l of this._listeners) l()
        })
      }
    }
  }

  // useSyncExternalStore requires getSnapshot to return a stable
  // reference when nothing has changed — Object.values()/.filter() build
  // a new array every call, which without this memoization causes an
  // infinite render loop. Cached per version, recomputed only when a
  // mutation (or a sweep-driven change) actually happened.
  _memo(key, compute) {
    const cached = this._memoCache.get(key)
    if (cached && cached.version === this._version) return cached.value
    const value = compute()
    this._memoCache.set(key, { version: this._version, value })
    return value
  }

  // ---- Read-side selectors ----

  getCases() {
    this._sweep()
    return this._memo('cases', () => Object.values(this._data.cases).sort((a, b) => b.createdAt - a.createdAt))
  }

  getCase(caseId) {
    this._sweep()
    // Cases are mutated in place (see `touch`), so the raw reference never
    // changes even when fields do — useSyncExternalStore needs a *new*
    // reference exactly when something changed, so this hands back a
    // fresh shallow copy whenever the version has moved, and the same
    // cached copy otherwise.
    return this._memo(`case:${caseId}`, () => {
      const c = this._data.cases[caseId]
      return c ? { ...c } : null
    })
  }

  getAuditLog(caseId) {
    return this._memo(`audit:${caseId ?? ''}`, () =>
      caseId ? this._data.audit.filter((e) => e.caseId === caseId) : this._data.audit.slice(),
    )
  }

  // The rider's account-wide flag standing. BLOCKED is derived here, not
  // stored as a per-case state — see the CaseState comment above.
  getAccountStatus() {
    this._sweep()
    return this._memo('accountStatus', () => {
      const flaggedCases = Object.values(this._data.cases).filter((c) => c.state === CaseState.FLAGGED)
      const flagCount = flaggedCases.length
      const blocked = flagCount >= FLAG_LIMIT
      const totalFlaggedAmount = flaggedCases.reduce((sum, c) => sum + c.amount, 0)
      return {
        flagCount,
        flagLimit: FLAG_LIMIT,
        blocked,
        flaggedCases,
        totalFlaggedAmount,
        retrievalFee: RETRIEVAL_FEE,
        totalToClear: blocked ? totalFlaggedAmount + RETRIEVAL_FEE : totalFlaggedAmount,
      }
    })
  }

  // ---- 1. DETECT ----
  // Distinguishes connectivity failure from payment decline. Only a
  // connectivity failure is PRD-eligible for the Dues flow — a decline is
  // recorded (for audit/QA visibility) but never diagnosed or decided.
  detectPaymentFailure({ id, riderName, trip, amount, failureType }) {
    const existing = this._data.cases[id]
    const eligible = failureType === 'connectivity'
    const c = existing ?? {
      id,
      riderName,
      trip,
      amount,
      captainFlag: { flagged: false, flaggedAt: null },
      reminders: { count: 0 },
      thanked: false,
      rating: 0,
      reviewTags: [],
      createdAt: Date.now(),
    }
    c.failureType = failureType
    c.eligible = eligible
    c.state = eligible ? CaseState.PENDING : CaseState.INELIGIBLE
    c.trust = c.trust ?? { rating: 4.8, ridesTogether: 12, duesSettled: 4, duesEscalated: 0 }
    touch(c)
    this._data.cases[id] = c
    audit(this._data, {
      caseId: id,
      eventType: 'payment_failure_detected',
      previousState: null,
      newState: c.state,
      reason: eligible
        ? `Connectivity failure detected for ₹${amount}.`
        : `Payment decline detected for ₹${amount} — not eligible for the Dues flow.`,
    })
    this._emit()
    return c
  }

  // ---- 2. DIAGNOSE ----
  // Applies the floor-limit rule and stores amount/failureType/floorLimit/
  // eligibility/reason, exactly as the task specifies. The floor-limit
  // comparison is informational (per the PRD's own "not alarming yet"
  // framing) — it does not itself gate which decision buttons the
  // captain sees; it's surfaced to the captain as context.
  diagnoseCase(caseId) {
    const c = this._data.cases[caseId]
    if (!c) return null
    if (!c.eligible) return c // ineligible cases are never diagnosed further
    const prev = c.state
    c.withinFloorLimit = c.amount <= FLOOR_LIMIT
    c.floorLimit = FLOOR_LIMIT
    c.diagnosisReason = c.withinFloorLimit
      ? `A connection issue on the rider's side prevented the payment from completing. ₹${c.amount} is within the ₹${FLOOR_LIMIT} floor limit Rapido can cover while it retries.`
      : `A connection issue on the rider's side prevented the payment from completing. ₹${c.amount} is above the ₹${FLOOR_LIMIT} floor limit — an alternate payment method may be more appropriate.`
    c.state = CaseState.UNDER_REVIEW
    touch(c)
    audit(this._data, {
      caseId,
      eventType: 'case_diagnosed',
      previousState: prev,
      newState: c.state,
      reason: c.diagnosisReason,
    })
    this._emit()
    return c
  }

  // ---- 3. DECIDE (part 1: captain's choice, pending OTP) ----
  submitCaptainDecision(caseId, decision) {
    const c = this._data.cases[caseId]
    if (!c || c.state !== CaseState.UNDER_REVIEW) return c ?? null
    c.pendingDecision = decision // 'due' | 'alt-payment' — awaiting verifyOtp
    touch(c)
    audit(this._data, {
      caseId,
      eventType: 'captain_decision_submitted',
      previousState: c.state,
      newState: c.state,
      reason: decision === 'due' ? 'Captain chose: Mark as due (pending code verification).' : 'Captain chose: Request alternate payment (pending code verification).',
    })
    this._emit()
    return c
  }

  // ---- 3. DECIDE (part 2: pickup/emergency code re-verification) ----
  // Matches the existing EmergencySheet code-entry step. Returns
  // {success, case}. On success, folds in the ACT step (createDue) for
  // the 'due' path so the due record exists the instant it's confirmed.
  verifyOtp(caseId, code) {
    const c = this._data.cases[caseId]
    if (!c || c.state !== CaseState.UNDER_REVIEW || !c.pendingDecision) {
      return { success: false, case: c ?? null }
    }
    const match = String(code ?? '').toUpperCase() === EMERGENCY_CODE
    if (!match) {
      return { success: false, case: c }
    }
    c.otpVerifiedAt = Date.now()
    const prev = c.state
    if (c.pendingDecision === 'due') {
      this._createDue(c)
      audit(this._data, {
        caseId,
        eventType: 'otp_verified',
        previousState: prev,
        newState: c.state,
        reason: 'Emergency code verified — due confirmed and created.',
      })
    } else {
      c.state = CaseState.ALT_PAYMENT_REQUESTED
      c.captainDecision = 'alt-payment'
      touch(c)
      audit(this._data, {
        caseId,
        eventType: 'otp_verified',
        previousState: prev,
        newState: c.state,
        reason: 'Emergency code verified — alternate payment requested.',
      })
    }
    c.pendingDecision = null
    this._emit()
    return { success: true, case: c }
  }

  // ---- 4. ACT (create the due record) ----
  // Exposed standalone too (per the task's requested action list) even
  // though verifyOtp is the only current caller — a future integration
  // (e.g. a real backend confirming a due some other way) can call it
  // directly without going through the OTP step.
  createDue(caseId) {
    const c = this._data.cases[caseId]
    if (!c) return null
    this._createDue(c)
    this._emit()
    return c
  }

  _createDue(c) {
    const prev = c.state
    c.state = CaseState.CONFIRMED
    c.captainDecision = 'due'
    c.retryDeadline = Date.now() + RETRY_WINDOW_MS_NEW_CASE
    touch(c)
    if (prev !== CaseState.CONFIRMED) {
      audit(this._data, {
        caseId: c.id,
        eventType: 'due_created',
        previousState: prev,
        newState: c.state,
        reason: `₹${c.amount} added to Dues — payout unaffected while pending.`,
      })
    }
  }

  // ---- 4. ACT (rider pays a due) ----
  // Resolves the case, updates both ledgers (they read the same store, so
  // there's nothing separate to "update") and records the resolution in
  // the audit history.
  payDue(caseId, method) {
    const c = this._data.cases[caseId]
    if (!c) return null
    if (c.state !== CaseState.CONFIRMED && c.state !== CaseState.FLAGGED) return c
    const prev = c.state
    c.state = CaseState.RESOLVED
    c.resolvedFrom = prev
    c.paidVia = method
    c.paidAt = Date.now()
    touch(c)
    audit(this._data, {
      caseId,
      eventType: 'due_paid',
      previousState: prev,
      newState: c.state,
      reason: prev === CaseState.FLAGGED ? `Flagged due cleared via ${method}.` : `Due settled via ${method}.`,
    })
    this._emit()
    return c
  }

  // ---- 5. ESCALATE: pay every flagged due + the one-time reactivation
  // fee in a single action, per the PRD's "account-wide, not per-due"
  // reactivation rule.
  payBlockedAccount(method) {
    const status = this.getAccountStatus()
    // Guards against a no-op "success" when there's nothing to clear, but
    // deliberately does NOT require status.blocked — RiderAccountRestricted
    // is independently reachable from the Launcher for standalone demo
    // purposes before three real flags have accumulated (see that
    // screen's own comment), and its "Pay ... and continue" button must
    // actually clear whatever's genuinely flagged rather than silently
    // doing nothing while the UI claims success.
    if (status.flaggedCases.length === 0) return status
    for (const c of status.flaggedCases) {
      const prev = c.state
      c.state = CaseState.RESOLVED
      c.resolvedFrom = prev
      c.paidVia = method
      c.paidAt = Date.now()
      touch(c)
      audit(this._data, {
        caseId: c.id,
        eventType: 'due_paid',
        previousState: prev,
        newState: c.state,
        reason: `Cleared as part of account reactivation via ${method}.`,
      })
    }
    audit(this._data, {
      caseId: 'ACCOUNT',
      eventType: status.blocked ? 'account_reactivated' : 'flagged_dues_cleared',
      previousState: status.blocked ? 'BLOCKED' : 'ACTIVE',
      newState: 'ACTIVE',
      reason: status.blocked
        ? `Paid ₹${status.totalFlaggedAmount} in dues + ₹${RETRIEVAL_FEE} retrieval fee via ${method}.`
        : `Paid ₹${status.totalFlaggedAmount} in flagged dues via ${method} (account was not yet at the ${FLAG_LIMIT}-flag block threshold).`,
    })
    this._emit()
    return this.getAccountStatus()
  }

  // ---- Captain-side support actions (unchanged from the existing
  // DuesLedger.jsx behavior — now backed by the shared case store) ----

  sendReminder(caseId) {
    const c = this._data.cases[caseId]
    if (!c || c.reminders.count >= REMINDER_LIMIT) return c ?? null
    c.reminders.count += 1
    c.reminders.lastSentAt = Date.now()
    touch(c)
    audit(this._data, {
      caseId,
      eventType: 'reminder_sent',
      previousState: c.state,
      newState: c.state,
      reason: `Reminder ${c.reminders.count}/${REMINDER_LIMIT} sent to ${c.riderName}.`,
    })
    this._emit()
    return c
  }

  // The captain's own per-due "send to Rapido support" flag. Distinct
  // from the rider account-wide flag count used for BLOCKED — see the
  // AMBIGUITY note in the final report: the PRD never states whether
  // these two flag concepts are the same counter, and the existing UI
  // already implements them as two unrelated mechanisms (this one has no
  // effect on FLAG_LIMIT/blocking), so this engine keeps that separation
  // rather than inventing a merge.
  toggleCaptainFlag(caseId) {
    const c = this._data.cases[caseId]
    if (!c) return null
    const hoursOpen = (Date.now() - c.createdAt) / (60 * 60 * 1000)
    if (!c.captainFlag.flagged && hoursOpen < FLAG_ELIGIBLE_HOURS) return c
    c.captainFlag.flagged = !c.captainFlag.flagged
    c.captainFlag.flaggedAt = c.captainFlag.flagged ? Date.now() : null
    touch(c)
    audit(this._data, {
      caseId,
      eventType: c.captainFlag.flagged ? 'captain_flag_raised' : 'captain_flag_removed',
      previousState: c.state,
      newState: c.state,
      reason: c.captainFlag.flagged ? 'Sent to Rapido support for review.' : 'Flag removed by captain.',
    })
    this._emit()
    return c
  }

  rateAndThank(caseId, { rating, tags, thanked }) {
    const c = this._data.cases[caseId]
    if (!c) return null
    if (rating != null) c.rating = rating
    if (tags != null) c.reviewTags = tags
    if (thanked) c.thanked = true
    touch(c)
    if (thanked) {
      audit(this._data, {
        caseId,
        eventType: 'thanks_sent',
        previousState: c.state,
        newState: c.state,
        reason: c.rating ? `Rated ${c.rating}★ and thanked.` : 'Thank-you sent.',
      })
    }
    this._emit()
    return c
  }
}

let singleton = null
export function getDuesEngine() {
  if (!singleton) singleton = new DuesEngine()
  return singleton
}
