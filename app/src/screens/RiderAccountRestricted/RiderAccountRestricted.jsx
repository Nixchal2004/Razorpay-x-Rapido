import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, CreditCard, Flag, Info, Landmark, Lock, Smartphone } from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import { useAccountStatus, useDuesActions } from '../../state/DuesContext'
import { FLAG_LIMIT } from '../../state/duesEngine'
import './RiderAccountRestricted.css'

// AMBIGUITY / behavior note: this screen demonstrates the 3-flag hard
// gate and is independently reachable from the Launcher without first
// building up three real flagged cases through the interactive Emergency
// + escalation flow. Rather than fabricate dues to always show exactly
// three, it lists whatever is genuinely flagged right now on the shared
// case store (often fewer than three when visited this way) — the
// headline still cites the fixed FLAG_LIMIT rule itself (accurate
// regardless of the live count), but the dues list, total, and the actual
// payBlockedAccount action always reflect real data, never invented rows.
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
  const [paidTotal, setPaidTotal] = useState(null)
  const account = useAccountStatus()
  const { payBlockedAccount } = useDuesActions()

  const dues = account.flaggedCases.map((c) => ({
    id: c.id,
    trip: `${c.trip.vehicle} · ${new Date(c.flaggedAt ?? c.createdAt).toLocaleDateString([], { day: 'numeric', month: 'short' })}, ${new Date(c.flaggedAt ?? c.createdAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`,
    route: c.trip.route,
    amount: `₹${c.amount}`,
    caption: relativeDays(c.flaggedAt),
    reason: c.flaggedReason,
  }))
  const duesTotal = `₹${account.totalFlaggedAmount}`
  // The retrieval fee only actually applies when the account is genuinely
  // blocked (matching account.totalToClear's own logic) — shown as ₹0
  // rather than hiding the line, so the breakdown's arithmetic stays
  // visibly consistent (dues + fee = total) without restructuring the
  // screen for the standalone-demo case where this fee doesn't apply yet.
  const fee = `₹${account.blocked ? account.retrievalFee : 0}`
  const total = `₹${account.totalToClear}`

  // account.totalToClear goes to 0 the instant payBlockedAccount clears
  // every flagged case, so the "done" success copy captures what was
  // actually paid *before* the action runs rather than re-reading the
  // now-empty live total afterward.
  const confirmPay = () => {
    setPaidTotal(account.totalToClear)
    payBlockedAccount(method)
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
                ₹{paidTotal} paid and all flags cleared. You can book rides again right away.
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
