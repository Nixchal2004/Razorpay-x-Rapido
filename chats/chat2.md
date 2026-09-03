# Account restricted hard gate

_Started 2026-08-31 13:27 UTC_

---

## User

Continuing from "Rapido Captain Dues Ledger".

## Assistant

We're wrapping the Rapido Dues feature across captain and rider surfaces. We've now built nine screens covering the full lifecycle: captain's ledger (Screen 1), the verdict moment (Screen 2), rider's dues tab (Screen 3), captain detail (Screen 5), rider home popup (Screen 6), rider dashboard (Screen 7), flag warning (Screen 8), and account restricted (Screen 9).

The core design language stayed consistent: reusing Transaction Rows and Status Badges from the design system, underline-active tabs, semantic color tinting (success-light for covered, warning-light for pending, error-light for flagged), and plain-language explanations replacing reason codes everywhere.

Key decisions made:
- Captain is an active trust participant (Step A reviews floor limit + rider history, Step B confirms with pickup OTP) rather than a passive observer.
- Rider sees "Under review" first (info-light, no alarm) before captain confirms, then "Pending" (warning-light) once official.
- Flagged dues get inline "Pay now" buttons on the row itself, no drill-in required — highest priority gets fastest path.
- Flag warning (Screen 8) is dismissible until the hard limit hits; account restricted (Screen 9) is not.
- Payment flows terminate with clear success states ("Dues cleared — flag removed") rather than dumping users back to dashboards.

Current state: Screen 9 is built (`5. Rider Flag Warning.dc.html` also serves as the template). The fork_verifier_agent caught and we're fixing conditional rendering issues across the row list components so state toggles (under review / pending / flagged / settled) don't cause glyphs to drift or remount incorrectly.

Next: finalize the conditional logic on all dashboard rows, wire the payment sheet outcome, and confirm deep-linking between screens (dashboard ↔ detail, popup ↔ dashboard, flag warning ↔ flagged tab).

Files: Captain Dues.dc.html · Captain Dues Verdict.dc.html · Rider Dues.dc.html · Rider Home Dues Popup.dc.html · 4. Rider Dues Dashboard.dc.html · 5. Rider Flag Warning.dc.html

## User

Screen 9 — Account restricted (hard gate) (recommended addition)

The warning in Screen 8 implies a consequence; this is that consequence actually landing. Needed so "will block your account" isn't just a threat that's never designed. Appears in place of the normal booking flow once the flag limit is reached and the rider tries to book a ride.

Full-screen, not dismissible — no "×," no back-swipe-and-ignore. This is the one screen in the whole flow allowed to fully block the primary task.
Icon: a locked/paused treatment, error-toned but calm — this should feel like a clear stop, not a punishment
Headline, H3: "Booking is paused"
Supporting line: plainly state why, in the rider's own history, not as an accusation: "You've reached the flag limit on unresolved dues. Clear them to keep booking rides."
Show the outstanding flagged amount(s) directly on this screen (reuse the Flagged tab's row style) so the rider doesn't have to navigate elsewhere to see what's owed
Single primary action: "Clear ₹[amount] and continue" — this is the only way off this screen
No secondary "skip" or "later" option here — that's the entire point of the hard gate

## Assistant

_[tool: read_file]_

_[tool: read_file]_

Screen 9 is already built and matches the spec. Cleaning up two loose ends: an unused `lockGlyph` value and a no-op ternary that put a hairline under the last row.

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Screen 9 (`6. Rider Account Restricted.dc.html`) is out for review — full-screen hard gate, no dismiss affordance, flagged rows plus total on-screen, single "Clear ₹325 and continue" action into the payment sheet and a "Booking is back on" success state.

## User

Screen 10 — Dues cleared confirmation (recommended addition)

A payment-recovery flow that only ever shows warnings and gates will feel punitive. This closes the loop with a positive state after the rider actually clears a flagged due, whether they arrived here from Screen 8 or Screen 9.

Success-light background treatment, checkmark icon
Headline, H3: "You're all cleared"
Supporting line: confirm plainly what changed — "Your flag has been removed. You can book rides again." if this resolved a hard block, or "Payment settled" if it was a softer pending/flagged clear without a booking restriction attached
Primary button: "Continue" → returns to the home screen (Screen 6), popup now absent since nothing is pending
No further friction here — this should be the fastest, lightest screen in the whole set

## Assistant

_[tool: dc_write]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Screen 10 built as `7. Rider Dues Cleared.dc.html` — success-light canvas, checkmark, "You're all cleared", paid-amount pill, single "Continue" to the home screen. A `hardBlock` tweak switches the supporting line between flag-removed and plain "Payment settled". Payment confirmation in Screens 8 and 9 now routes here instead of ending in its own inline overlay.

## User

Two error.1. What is the purpose of the "Rider is Reviewing "
2. Back button missing when the user clicks on the popup

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

Fixing #2 — the hamburger becomes a back arrow that returns to the home screen.

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

**2. Back button** — fixed. The screen the popup opens (`Rider Dues.dc.html`) had a hamburger where a back arrow belonged; it's now a back chevron returning to the home screen. (`4. Rider Dues Dashboard.dc.html` already had one.)

**1. "Your captain is reviewing"** — that's the interim state between the failed payment and the due becoming official. The captain has to confirm the due happened (Screen 2, the verdict screen) before the rider is formally charged. During that gap the rider sees "Under review" in info-blue rather than "Pending" in warning-yellow, so they aren't alarmed about something not yet decided — and they can pay immediately without waiting.

If you'd rather the rider never see the captain's review at all — due appears only once confirmed — I can drop that state and start riders at "Pending". Say which.

## User

Screen 2 — The verdict moment (captain reviews, then confirms)

This is no longer a single auto-generated reassurance card. The captain is now an active participant in the trust decision — the system pre-qualifies the trip (floor limit + rider history) but the captain makes the final call and confirms it. Design this as a sequence of bottom-sheets appearing the instant a trip's payment doesn't settle, before the captain does anything else.

Step A — Trust review
Bottom-sheet over the map/trip-summary screen (keep context visible behind it)
Header, H4: "Payment didn't go through — here's what we know"
A "floor limit" reference element: a simple horizontal bar or ruler labeled "Floor limit ₹200" with a marker showing where this trip sits, e.g. "This trip · ₹120." Use info-light tone — this is informational, not alarming yet.
A rider trust panel below it: rider's first name, star rating, and a compact history summary as a small chip or badge row — e.g. "12 rides together," "Dues history: 4 settled, 0 escalated." Reuse the visual weight of the Profile Header / Status Badge components, don't invent a new card style.
Two actions at the bottom:
Primary (yellow): "Mark as due"
Secondary (outline): "Request alternate payment"
Design for a 2–3 second read — the captain is glancing at this stationary, not while driving.
Step B — Confirm with rider's code (only after "Mark as due")
Replaces Step A in the same bottom-sheet (don't stack sheets)
Header, H4: "Ask your rider for their code"
One line of plain copy explaining what's happening: "Your rider has a code on their screen for this payment. Enter it below to confirm the due."
A standard OTP-entry field: 4–6 individual digit boxes, numeric keypad, auto-advance between boxes
Small caption under the field: "This code is only for this payment — not the one used at pickup."
Single primary button: "Confirm & mark as due" — stays disabled until all digits are entered
Error state: if the code doesn't match, show inline (not a separate screen): "That code doesn't match. Ask your rider to check their screen." with the field cleared for retry — don't lock the captain out after one mismatch, this is a normal typo case
Quiet back link: "Go back" → returns to Step A without losing the review state
On a correct match, transition into the reassurance state: reuse the original success-light "You're covered — go ahead" card as the closing screen of this flow — it's now earned through a decision both people made, not shown automatically. Trip amount stays small/secondary here, same as before.
Declined path
Tapping "Request alternate payment" in Step A skips Step B entirely and goes straight to the warning-light "Ask for another payment method" screen — same layout skeleton as the reassurance card, no OTP step, primary button "Request alternate payment."

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Step B rebuilt as a real code entry. Step A (floor-limit bar, rider trust panel, two actions), the covered card and the declined path were already to spec and untouched.

- Header now "Ask your rider for their code" with the plain explanation line
- Four digit boxes, numeric keypad, auto-advance forward and backspace-back; active box takes a black border
- Confirm button greys out until all four digits are in
- Wrong code shows the inline error, clears the field and refocuses box 1 — no lockout (correct code is **4821**)
- Caption clarifies it isn't the pickup code; "Go back" returns to Step A with the review state intact

## User

Screen 9 — Account restricted (hard gate) (recommended addition)

The warning in Screen 8 implies a consequence; this is that consequence actually landing. Needed so "will block your account" isn't just a threat that's never designed. Appears in place of the normal booking flow once the 3rd flag is reached and the rider tries to book a ride.

Confirmed: this is account-wide, not per-due. The block triggers off the total flag count reaching 3, regardless of how many separate dues contributed to those flags. The ₹29 retrieval fee is charged once per reactivation event, not once per flagged due — so if two small dues pushed the count to 3, the rider pays both dues plus a single ₹29, not ₹29 twice.

Full-screen, not dismissible — no "×," no back-swipe-and-ignore. This is the one screen in the whole flow allowed to fully block the primary task.
Icon: a locked/paused treatment, error-toned but calm — this should feel like a clear stop, not a punishment
Headline, H3: "Booking is paused"
Supporting line: plainly state why, in the rider's own history, not as an accusation: "You've reached 3 flags on unresolved dues. Clear them to keep booking rides."
Show every outstanding flagged due on this screen, not just one — reuse the Flagged tab's row style, listed individually, since the rider needs to see what actually contributed to the block
Below that, an itemized cost breakdown — don't fold the fee silently into one number, show it as clear lines so it doesn't read as a hidden charge:
"Outstanding dues (all flagged) · ₹[sum of every flagged due]"
"Account retrieval fee (one-time) · ₹29"
"Total · ₹[sum + 29]"
One line explaining the fee plainly, not defensively: "A one-time ₹29 fee applies to reactivate a paused account."
Single primary action: "Pay ₹[total] and continue" — clears every listed due plus the fee in one action, since this is account-wide, not one due at a time
No secondary "skip" or "later" option here — that's the entire point of the hard gate

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

Screen 9 updated:

- Supporting line now reads "You've reached 3 flags on unresolved dues."
- All three flagged dues still listed individually (unchanged)
- New itemized "What you pay" block: dues ₹325 · one-time fee ₹29 · total ₹354, with the plain fee explanation under it
- Primary action is "Pay ₹354 and continue"; the payment sheet carries the same ₹354
- `retrievalFee` added as a tweak so the ₹29 can be changed in one place

Fee is charged once per reactivation, not per due — one line, one total, one action.

## User

This code is going to be a 6-digit  code with a combination of letters and numbers. This not an OTP, Its a Lifetime code that each Rider can set up when they login to the Rapido app.

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Now six alphanumeric boxes — text keypad, auto-uppercase, letters and digits accepted. Test code is **R7K92M**.

Two copy lines still call it a payment code rather than the rider's permanent code:

- Explanation: "Your rider has a code on their screen for this payment."
- Caption: "This code is only for this payment — not the one used at pickup."

Want me to rewrite those to describe a lifetime code the rider set up (e.g. "Ask your rider for their Rapido code — the one they set up on their account")?

## User

Change headline to Ask your rider for their 6-digit emergency code.
Remove  the text copy between the OTP input field and the Confirm button.

Also Add subtle Heptics if possible whenever a button is tapped, error occured or etc.

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Done — headline is "Ask your rider for their 6-digit emergency code", the caption between the field and the button is gone, and the sub-line now says the rider set the code up on their account (it's permanent, not per-payment).

Haptics wired to button taps, keypress, error (short double-buzz) and success. They fire on real devices; desktop browsers ignore the vibration call silently.

## User

This button redirects the Pilot to the home screen

## Assistant

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

"Go online" now links to the captain's home screen (`2. Captain Dues flow.dc.html`) with a tap haptic.

The overlap findings are the bottom-sheet sitting over the trip-summary screen behind it — intended layering, not a defect.

## User

Recreate similar screens, Use the Nav bar and app bar as we have locke. Screen with the Yellow color is the splash screen so it has to be exactly as the attached image.

## User

Recreate similar screens, Use the Nav bar and app bar as we have locke. Screen with the Yellow color is the splash screen so it has to be exactly as the attached image.

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: copy_files]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: ready_for_verification]_

Two new screens:

- **`0. Captain Splash.dc.html`** — deep amber field, lighter yellow pill wordmark, iOS bar with dark glyphs; auto-advances to home after 1.8s (tweakable, or tap anywhere).
- **`0. Captain Home.dc.html`** — earnings strip, incentive progress banner, full-bleed Bangalore map with bike pins and floating safety button, working online toggle, target/time-left tiles, Refer & Earn.

Used the locked app bar and bottom nav from the dues screens, so the nav keeps the Dues item (with its badge) rather than the reference shot's Notifications/More — the Dues tab links straight into the flow.

## User

Found issues — fixing…

## User

Redirects to the 0. Captain home screen.

## User

Redirects to the 0. Captain home screen.

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Bottom nav on the dues screen now navigates — Home (and Earnings/Bookings/Account) go to `0. Captain Home.dc.html`, Dues stays put as the active tab.

## User

add the Exactly similar Emergency code bottom sheet for this button too.

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

"Request alternate payment" now goes through the same emergency-code sheet — identical layout, digits, error handling and "Go back" — then lands on the warning-light alternate-payment screen. Only the intro line and confirm label change ("Confirm & request payment").

Overlap flags are the bottom sheet over the trip screen behind it, as before.

## User

Remove reminder, Rating and Flag option from the covered as they solves no purpose of the captain

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Covered dues now show only the trip card, explanation, next steps and the payout note — reminder, rating and flag are gone. They stay on alternate-payment dues (still open, still actionable); rating remains on recovered ones.

## User

The banner needs to separate the two categories instead of summing them blindly:

"₹215 pending across 2 trips" — this is the number that should be bold/primary, because this is what's actually on the captain
"₹220 already covered by Rapido" — shown as a secondary, calmer line — informational, not a "you're owed this" framing

So instead of one green banner with one big number, you likely need something like:

Primary stat: ₹215 pending (Alternate payment cases only)
Secondary stat/line: "+ ₹220 already covered — nothing owed to you"

## Assistant

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Banner split. Primary is now **₹215** with "Alternate payment · 2 trips" and "Pending with the rider. Your payout isn't affected."; a hairline below carries the calmer "+ ₹220 already covered — nothing owed to you".

Both figures compute from the trip list, so they stay correct if states change. Surface also moved from success-light green to warning-light — green was reading as money coming to the captain.

## User

Found issues — fixing…

## Assistant

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

Stale tweak default cleared — the note line no longer hardcodes an amount, so it reads "Pending with the rider. Your payout isn't affected." under the computed ₹215.

