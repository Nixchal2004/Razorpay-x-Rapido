import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  Bell,
  Bike,
  Check,
  ChevronLeft,
  CreditCard,
  Landmark,
  LayoutGrid,
  Plane,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  UserRound,
} from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import { useCase, useCases, useDuesActions } from '../../state/DuesContext'
import { CaseState } from '../../state/duesEngine'
import './RiderDues.css'

const METHODS = [
  { id: 'upi', label: 'UPI · 9845* * *210', Icon: Smartphone },
  { id: 'card', label: 'Card ending 3467', Icon: CreditCard },
  { id: 'netbanking', label: 'Net banking', Icon: Landmark },
]

const NAV_ITEMS = [
  { key: 'ride', label: 'Ride', Icon: Bike },
  { key: 'dues', label: 'Dues', Icon: ReceiptText, active: true },
  { key: 'services', label: 'All Services', Icon: LayoutGrid },
  { key: 'travel', label: 'Travel', Icon: Plane },
  { key: 'profile', label: 'Profile', Icon: UserRound },
]

function formatTime(ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

function formatDate(ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleDateString([], { day: 'numeric', month: 'short' }) + ', ' + formatTime(ts)
}

// Rider Dues — port of `Rider Dues.dc.html`, the pending-due detail screen
// a confirmed pending row in the Dues Dashboard leads to. A trip-status
// timeline, a pay sheet, and a "why is this pending?" explainer sheet.
//
// The source never passed the tapped row's id/amount through — every
// pending row led to the same fixed screen. Now that a real case store
// exists, the Dashboard passes `?caseId=` and this screen shows that
// specific case's real timeline and amount instead of always the same
// hardcoded ₹120 example — the state engine driving the UI rather than
// every tap landing on one predetermined screen. Falls back to the first
// confirmed case if opened without a caseId (e.g. a bare deep link).
//
// The source also authors a toast/`say()` helper that's never actually
// called from anywhere on this screen — skipped here as unreachable dead
// code, matching how other dead code has been treated throughout this app.
export default function RiderDues() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const requestedId = searchParams.get('caseId')
  const requestedCase = useCase(requestedId)
  const cases = useCases()
  const fallbackCase = cases.find((c) => c.state === CaseState.CONFIRMED) ?? null
  const dueCase = requestedCase && requestedCase.state === CaseState.CONFIRMED ? requestedCase : fallbackCase
  const { payDue } = useDuesActions()

  const [paySheetOpen, setPaySheetOpen] = useState(false)
  const [whyOpen, setWhyOpen] = useState(false)
  const [method, setMethod] = useState('upi')

  const goHome = () => navigate('/rider/home')

  if (!dueCase) {
    // No confirmed due exists yet (e.g. opened before the captain has
    // confirmed anything in this session) — nothing to show.
    return (
      <PhoneFrame background="#FAFAFA">
        <div className="rd">
          <div className="rd__statusbar">
            <StatusBar />
          </div>
          <div className="rd__appbar">
            <button type="button" className="rd__back" aria-label="Back" onClick={goHome}>
              <ChevronLeft size={24} color="#1A1A1A" />
            </button>
            <div className="rd__wordmark">
              <span className="rd__wordmark-text">rapido</span>
              <span className="rd__wordmark-dot" />
            </div>
          </div>
          <div className="rd__title-row">
            <span className="rd__title">Dues</span>
          </div>
        </div>
      </PhoneFrame>
    )
  }

  const amount = `₹${dueCase.amount}`
  const history = cases.filter((c) => c.state === CaseState.RESOLVED && c.id !== dueCase.id)

  const steps = [
    { title: 'Trip completed', time: formatTime(dueCase.createdAt), detail: dueCase.trip.route, state: 'done' },
    { title: 'Payment attempted', time: formatTime(dueCase.createdAt), detail: "It didn't go through — a connection issue on your phone.", state: 'done' },
    { title: 'Captain confirmed as due', time: formatTime(dueCase.otpVerifiedAt), detail: 'Verified with the pickup OTP you shared.', state: 'done' },
    { title: 'Retrying until the review window closes', time: 'Now', detail: 'You can pay any time before this. Nothing else is needed from you.', state: 'current' },
  ]

  const confirmPay = () => {
    payDue(dueCase.id, method)
    navigate(`/rider/dues-cleared?caseId=${dueCase.id}`)
  }

  return (
    <PhoneFrame background="#FAFAFA">
      <div className="rd">
        <div className="rd__statusbar">
          <StatusBar />
        </div>

        <div className="rd__appbar">
          <button type="button" className="rd__back" aria-label="Back" onClick={goHome}>
            <ChevronLeft size={24} color="#1A1A1A" />
          </button>
          <div className="rd__wordmark">
            <span className="rd__wordmark-text">rapido</span>
            <span className="rd__wordmark-dot" />
          </div>
          <button type="button" className="rd__notif-btn" aria-label="Notifications">
            <Bell size={21} color="#1A1A1A" />
            <span className="rd__notif-dot" />
          </button>
        </div>

        <div className="rd__title-row">
          <span className="rd__title">Dues</span>
        </div>

        <div className="rd__scroll">
          <div className="pending-card">
            <span className="pending-card__label">PENDING AMOUNT</span>
            <span className="pending-card__amount">{amount}</span>
            <span className="pending-card__note">
              Your ride is complete — this isn't waived. We're retrying automatically, or you can settle it now.
            </span>
            <div className="pending-card__verified">
              <ShieldCheck size={14} color="#666666" />
              <span>Verified with your pickup OTP</span>
            </div>
          </div>

          <div className="trip-status-card">
            <span className="trip-status-card__title">Trip status</span>
            <div className="timeline">
              {steps.map((step, i) => (
                <div key={step.title} className="timeline__row">
                  <div className="timeline__rail">
                    <span className={`timeline__dot timeline__dot--${step.state}`} />
                    {i < steps.length - 1 && <span className="timeline__line" />}
                  </div>
                  <div className="timeline__body" style={{ paddingBottom: i < steps.length - 1 ? 18 : 0 }}>
                    <div className="timeline__head">
                      <span className="timeline__title">{step.title}</span>
                      <span className="timeline__time">{step.time}</span>
                    </div>
                    <span className="timeline__detail">{step.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="btn btn--primary" onClick={() => setPaySheetOpen(true)}>
            Pay {amount} now
          </button>
          <button type="button" className="btn btn--link" onClick={() => setWhyOpen(true)}>
            Why is this pending?
          </button>

          <span className="rd__section-label">DUES HISTORY</span>
          <div className="rd__history">
            {history.map((item, i) => (
              <div key={item.id} className={`rd-history-row${i < history.length - 1 ? ' rd-history-row--divider' : ''}`}>
                <div className="rd-history-row__text">
                  <span className="rd-history-row__trip">{item.trip.route}</span>
                  <span className="rd-history-row__date">{formatDate(item.paidAt)}</span>
                </div>
                <div className="rd-history-row__meta">
                  <span className="rd-history-row__amount">₹{item.amount}</span>
                  <span className="rd-history-row__badge">Settled</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rd__nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className="rd__nav-item"
              onClick={item.key === 'ride' ? goHome : undefined}
            >
              <item.Icon size={21} color={item.active ? '#E5A800' : '#888888'} />
              <span className="rd__nav-label" style={{ color: item.active ? '#E5A800' : '#888888', fontWeight: item.active ? 700 : 400 }}>
                {item.label}
              </span>
              {item.key === 'dues' && <span className="rd__nav-dot" />}
            </button>
          ))}
        </div>
        <div className="rd__home-indicator">
          <div className="rd__home-indicator-bar" />
        </div>

        {whyOpen && (
          <div className="rd__sheet-overlay" onClick={() => setWhyOpen(false)}>
            <div className="why-sheet" onClick={(e) => e.stopPropagation()}>
              <div className="why-sheet__grabber" />
              <span className="why-sheet__title">Why is this pending?</span>
              <span className="why-sheet__body">
                Your payment couldn't be completed at the end of the trip because of a connection issue. The ride
                itself finished normally, so the fare is still owed.
              </span>
              <span className="why-sheet__body">
                Your captain confirmed the due using the OTP you shared at pickup, so it is tied to this trip only.
                Rapido keeps retrying the payment until the review window closes. Paying now closes it right away.
              </span>
              <button type="button" className="btn btn--secondary" onClick={() => setWhyOpen(false)}>
                Got it
              </button>
            </div>
          </div>
        )}

        {paySheetOpen && (
          <div className="rd__pay-overlay">
            <div className="pay-sheet">
              <div className="pay-sheet__grabber" />
              <div className="pay-sheet__row">
                <span className="pay-sheet__title">Clear this due</span>
                <span className="pay-sheet__total">{amount}</span>
              </div>
              <span className="pay-sheet__note">Paying now closes this due right away. Automatic retries stop.</span>
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
                Pay {amount}
              </button>
              <button type="button" className="btn btn--link" onClick={() => setPaySheetOpen(false)}>
                Go back
              </button>
            </div>
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}
