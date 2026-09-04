import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, CreditCard, Flag, Info, Landmark, Lock, Smartphone } from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import './RiderAccountRestricted.css'

const FLAG_LIMIT = 3
const RETRIEVAL_FEE = 29

const DUES = [
  {
    trip: 'Bike · 27 Aug, 9:20 PM',
    route: 'BTM Layout → Jayanagar 4th Block',
    amount: '₹95',
    value: 95,
    caption: 'Flagged 5 days ago',
    reason: "Wasn't settled within the review window.",
  },
  {
    trip: 'Auto · 24 Aug, 7:40 PM',
    route: 'HSR Layout → Silk Board Junction',
    amount: '₹150',
    value: 150,
    caption: 'Flagged 8 days ago',
    reason: 'Payment retries failed and the due stayed open.',
  },
  {
    trip: 'Bike · 20 Aug, 10:05 AM',
    route: 'Koramangala → Indiranagar 100ft Road',
    amount: '₹80',
    value: 80,
    caption: 'Flagged 12 days ago',
    reason: 'No payment method could be charged.',
  },
]

const DUES_VALUE = DUES.reduce((n, d) => n + d.value, 0)
const DUES_TOTAL = `₹${DUES_VALUE}`
const FEE = `₹${RETRIEVAL_FEE}`
const TOTAL = `₹${DUES_VALUE + RETRIEVAL_FEE}`

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
export default function RiderAccountRestricted() {
  const navigate = useNavigate()
  const [step, setStep] = useState('gate')
  const [method, setMethod] = useState('upi')

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
              {DUES.map((due, i) => (
                <div key={due.route} className={`due-row${i < DUES.length - 1 ? ' due-row--divider' : ''}`}>
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
                <span>{DUES_TOTAL}</span>
              </div>
              <div className="pay-summary__row pay-summary__row--divider">
                <span>Account retrieval fee (one-time)</span>
                <span>{FEE}</span>
              </div>
              <div className="pay-summary__row pay-summary__row--total">
                <span>Total</span>
                <span>{TOTAL}</span>
              </div>
            </div>
            <span className="rar__fee-note">A one-time {FEE} fee applies to reactivate a paused account.</span>
          </div>

          <div className="rar__info-row">
            <Info size={15} color="#888888" />
            <span>Booking resumes as soon as the payment goes through. Your ride history and saved places are untouched.</span>
          </div>
        </div>

        <div className="rar__footer">
          <button type="button" className="btn btn--primary" onClick={() => setStep('pay')}>
            Pay {TOTAL} and continue
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
                <span className="pay-sheet__total">{TOTAL}</span>
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
              <button type="button" className="btn btn--primary" onClick={() => setStep('done')}>
                Pay {TOTAL}
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
                {TOTAL} paid and all flags cleared. You can book rides again right away.
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
