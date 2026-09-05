import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, CreditCard, Flag, Info, Landmark, Lock, Smartphone } from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import { FLAG_LIMIT, RETRIEVAL_FEE } from '../../state/duesEngine'
import './RiderAccountRestricted.css'

// This screen demonstrates the 3-flag hard gate and is independently
// reachable from the Launcher, not reached by genuinely accumulating
// three flags through the interactive Emergency + escalation flow (the
// shared case store rarely has exactly three flagged at once — today it
// has one). Rather than read the live account status and show whatever
// that happens to be, this screen presents a fixed, isolated Rider-only
// fixture of exactly three flagged dues, reusing real vehicle/route/
// amount combinations already used elsewhere in the project's seed data
// (see duesEngine.js's seedCases) rather than inventing new figures.
// FLAG_LIMIT/RETRIEVAL_FEE are read-only imports of the engine's own
// constants — this screen never reads or writes any live case/account
// state, and paying here never calls a real Dues action (see confirmPay):
// it is a self-contained presentation of this one gate scenario, so nothing
// it does can ever contradict what the shared engine shows elsewhere.
const FIXTURE_FLAGGED_DUES = [
  { id: 'fixture-1', vehicle: 'Bike', route: 'BTM Layout → Jayanagar 4th Block', amount: 95, flaggedAt: Date.now() - 4 * 24 * 60 * 60 * 1000, reason: "Wasn't settled within the review window." },
  { id: 'fixture-2', vehicle: 'Auto', route: 'Indiranagar → MG Road Metro', amount: 220, flaggedAt: Date.now() - 2 * 24 * 60 * 60 * 1000, reason: "Wasn't settled within the review window." },
  { id: 'fixture-3', vehicle: 'Auto', route: 'Jayanagar → Koramangala 8th Block', amount: 180, flaggedAt: Date.now() - 1 * 24 * 60 * 60 * 1000, reason: "Wasn't settled within the review window." },
]

const METHODS = [
  { id: 'upi', label: 'UPI · 9845* * *210', Icon: Smartphone },
  { id: 'card', label: 'Card ending 3467', Icon: CreditCard },
  { id: 'netbanking', label: 'Net banking', Icon: Landmark },
]

// "3. Rider Home Dues Popup.dc.html", implemented as part of the Home flow.
const HOME_ROUTE = '/rider/home'

// Rider Account Restricted — port of `R. Final Account Restricted.dc.html`.
// A full-screen hard gate (no back, no dismiss, matching the source
// exactly) listing every flagged due and an itemized "what you pay"
// breakdown, with a single CTA into a payment-method sheet. As with the
// sibling Flag Warning flow, the source's success panel ("Booking is back
// on") is fully authored in this same file but wired to a hard navigation
// to a separate out-of-scope file rather than ever setting its own "done"
// state — wired here to show in place instead, so the flow is complete.
function relativeDays(ts) {
  if (!ts) return 'Just now'
  const days = Math.round((Date.now() - ts) / (24 * 60 * 60 * 1000))
  if (days < 1) return 'Flagged today'
  return `Flagged ${days} ${days === 1 ? 'day' : 'days'} ago`
}

export default function RiderAccountRestricted() {
  const navigate = useNavigate()
  const [step, setStep] = useState('gate')
  const [method, setMethod] = useState('upi')

  const dues = FIXTURE_FLAGGED_DUES.map((d) => ({
    id: d.id,
    trip: `${d.vehicle} · ${new Date(d.flaggedAt).toLocaleDateString([], { day: 'numeric', month: 'short' })}, ${new Date(d.flaggedAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`,
    route: d.route,
    amount: `₹${d.amount}`,
    caption: relativeDays(d.flaggedAt),
    reason: d.reason,
  }))
  const duesTotalAmount = FIXTURE_FLAGGED_DUES.reduce((sum, d) => sum + d.amount, 0)
  const duesTotal = `₹${duesTotalAmount}`
  const fee = `₹${RETRIEVAL_FEE}`
  const totalAmount = duesTotalAmount + RETRIEVAL_FEE
  const total = `₹${totalAmount}`

  // Paying here never touches the shared Dues engine — see the top-of-file
  // note. This screen's three dues are a fixed local fixture, not real
  // cases, so there is nothing genuine for a real payDue/payBlockedAccount
  // call to resolve; showing the same fixture total back on the success
  // panel keeps this screen internally consistent instead of clearing an
  // unrelated real case elsewhere.
  const confirmPay = () => {
    setStep('done')
  }

  return (
    <PhoneFrame background="#FFFFFF">
      <div className="rar">
        <div className="rar__statusbar">
          <StatusBar />
        </div>

        <div className="rar__scroll">
          <div className="rar__lock">
            <Lock size={30} color="#EA4335" />
          </div>

          <div className="rar__heading-group">
            <span className="rar__headline">Booking is paused</span>
            <span className="rar__supporting">
              You've reached {FLAG_LIMIT} flags on unresolved dues. Clear them to keep booking rides.
            </span>
          </div>

          <div className="rar__section">
            <span className="rar__section-label">FLAGGED DUES</span>
            <div className="rar__dues-list">
              {dues.map((due, i) => (
                <div key={due.id} className={`due-row${i < dues.length - 1 ? ' due-row--divider' : ''}`}>
                  <div className="due-row__top">
                    <div className="due-row__icon">
                      <Flag size={16} color="#EA4335" />
                    </div>
                    <div className="due-row__body">
                      <div className="due-row__head">
                        <span className="due-row__trip">{due.trip}</span>
                        <span className="due-row__amount">{due.amount}</span>
                      </div>
                      <span className="due-row__route">{due.route}</span>
                      <div className="due-row__meta">
                        <span className="due-row__badge">Flagged</span>
                        <span className="due-row__caption">{due.caption}</span>
                      </div>
                      <span className="due-row__reason">{due.reason}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rar__section">
            <span className="rar__section-label">WHAT YOU PAY</span>
            <div className="pay-summary">
              <div className="pay-summary__row pay-summary__row--divider">
                <span>Outstanding dues (all flagged)</span>
                <span>{duesTotal}</span>
              </div>
              <div className="pay-summary__row pay-summary__row--divider">
                <span>Account retrieval fee (one-time)</span>
                <span>{fee}</span>
              </div>
              <div className="pay-summary__row pay-summary__row--total">
                <span>Total</span>
                <span>{total}</span>
              </div>
            </div>
            <span className="rar__fee-note">A one-time {fee} fee applies to reactivate a paused account.</span>
          </div>

          <div className="rar__info-row">
            <Info size={15} color="#888888" />
            <span>Booking resumes as soon as the payment goes through. Your ride history and saved places are untouched.</span>
          </div>
        </div>

        <div className="rar__footer">
          <button type="button" className="btn btn--primary" onClick={() => setStep('pay')}>
            Pay {total} and continue
          </button>
        </div>
        <div className="rar__home-indicator">
          <div className="rar__home-indicator-bar" />
        </div>

        {step === 'pay' && (
          <div className="rar__pay-overlay">
            <div className="pay-sheet">
              <div className="pay-sheet__grabber" />
              <div className="pay-sheet__row">
                <span className="pay-sheet__title">Clear your dues</span>
                <span className="pay-sheet__total">{total}</span>
              </div>
              <span className="pay-sheet__note">This clears all flags and re-enables booking immediately.</span>
              <div className="pay-sheet__methods">
                {METHODS.map((m) => {
                  const on = m.id === method
                  return (
                    <button
                      key={m.id}
                      type="button"
                      className={`method-row${on ? ' method-row--selected' : ''}`}
                      onClick={() => setMethod(m.id)}
                    >
                      <m.Icon size={18} color={on ? '#1A1A1A' : '#888888'} />
                      <span className="method-row__label">{m.label}</span>
                      {on && <Check size={16} color="#1A1A1A" />}
                    </button>
                  )
                })}
              </div>
              <button type="button" className="btn btn--primary" onClick={confirmPay}>
                Pay {total}
              </button>
            </div>
          </div>
        )}

        {step === 'done' && (
          <div className="rar__done-overlay">
            <div className="done-card">
              <div className="done-card__icon">
                <Check size={26} color="#34A853" />
              </div>
              <span className="done-card__headline">Booking is back on</span>
              <span className="done-card__note">
                {total} paid and all flags cleared. You can book rides again right away.
              </span>
              <button type="button" className="btn btn--primary" onClick={() => navigate(HOME_ROUTE)}>
                Book a ride
              </button>
            </div>
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}
