import { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AlertTriangle,
  Bike,
  Check,
  CreditCard,
  LayoutGrid,
  Plane,
  ReceiptText,
  Search,
  Smartphone,
  UserRound,
  Wallet,
  X,
} from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import mapImage from '../../assets/map-bangalore.png'
import './RiderFlagWarning.css'

const FLAG_COUNT = 1
const FLAG_LIMIT = 3
const WORDS = { 0: 'No', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five' }

const DUES = [{ route: 'BTM Layout → Jayanagar 4th Block', date: '27 Aug, 9:20 PM', amount: '₹95', value: 95 }]
const TOTAL = '₹' + DUES.reduce((n, d) => n + d.value, 0)

const METHODS = [
  { id: 'upi', label: 'UPI · 9845* * *210', Icon: Smartphone },
  { id: 'card', label: 'Card ending 3467', Icon: CreditCard },
  { id: 'wallet', label: 'Rapido wallet · ₹40', Icon: Wallet },
]

const NAV_ITEMS = [
  { key: 'ride', label: 'Ride', Icon: Bike, active: true },
  { key: 'dues', label: 'Dues', Icon: ReceiptText },
  { key: 'services', label: 'All Services', Icon: LayoutGrid },
  { key: 'travel', label: 'Travel', Icon: Plane },
  { key: 'profile', label: 'Profile', Icon: UserRound },
]

// "4. Rider Dues Dashboard.dc.html", implemented as part of the Home flow.
const DUES_DASHBOARD_ROUTE = '/rider/dues-dashboard'

// Rider Flag Warning popup — port of `5. Rider Flag Warning.dc.html`. Sits
// over a self-contained home-screen shell (map, search bar, bottom nav)
// authored directly in that same source file, not shared with any other
// screen. Four states: the warning modal (default), the payment method
// sheet, a success panel, and dismissed. In the source, paying does a hard
// navigation to a separate "Dues Cleared" file rather than ever setting its
// own fully-authored "done" state — that state's markup lives right there
// in the same file, unreachable only because of how the source wires the
// button. Wired here to actually show it in place instead, so the flow is
// self-contained and the success panel is reachable. Its "Book a ride" CTA
// gets its own handler (navigate to Rider Home) rather than reusing
// `dismiss` — reusing it originally meant this button fired the "remind you
// later, flag still active" toast right after showing "flag removed".
export default function RiderFlagWarning() {
  const navigate = useNavigate()
  const [step, setStep] = useState('warning')
  const [method, setMethod] = useState('upi')
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  const say = useCallback((msg) => {
    clearTimeout(toastTimer.current)
    setToast(msg)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  const remaining = Math.max(0, FLAG_LIMIT - FLAG_COUNT)
  const hardGated = remaining === 0

  const dismiss = () => {
    setStep('none')
    say("We'll remind you later. Your flag is still active.")
  }

  const bookRide = () => navigate('/rider/home')

  return (
    <PhoneFrame background="#FFFFFF">
      <div className="rfw">
        <div className="rfw__statusbar">
          <StatusBar />
        </div>

        <div className="rfw__body">
          <div className="rfw__map" style={{ backgroundImage: `url(${mapImage})` }} />

          <div className="rfw__search-row">
            <div className="rfw__search-bar">
              <Search size={18} color="#888888" />
              <span>Where do you want to go?</span>
            </div>
          </div>

          {step === 'warning' && (
            <div className="rfw__overlay">
              <div className="warning-card">
                {!hardGated && (
                  <button type="button" className="warning-card__close" onClick={dismiss} aria-label="Remind me later">
                    <X size={16} color="#AAAAAA" />
                  </button>
                )}

                <div className="warning-card__icon">
                  <AlertTriangle size={28} color="#B98A00" />
                </div>

                <span className="warning-card__headline">
                  {FLAG_COUNT} {FLAG_COUNT === 1 ? 'flag on your account' : 'flags on your account'}
                </span>
                <span className="warning-card__supporting">
                  {hardGated
                    ? "Your account is blocked — you can't book rides until your pending dues are cleared."
                    : `${WORDS[remaining]} ${remaining === 1 ? 'more flag' : 'more flags'} will block your account — you won't be able to book rides until it's cleared.`}
                </span>
                <span className="warning-card__instruction">Clear your pending dues to keep riding.</span>

                <div className="warning-card__dues">
                  {DUES.map((due) => (
                    <div key={due.route} className="warning-card__due-row">
                      <div className="warning-card__due-text">
                        <span className="warning-card__due-route">{due.route}</span>
                        <span className="warning-card__due-date">{due.date}</span>
                      </div>
                      <span className="warning-card__due-amount">{due.amount}</span>
                    </div>
                  ))}
                </div>

                <div className="warning-card__actions">
                  <button type="button" className="btn btn--primary" onClick={() => setStep('pay')}>
                    Clear {TOTAL} now
                  </button>
                  <button type="button" className="btn btn--link" onClick={() => navigate(`${DUES_DASHBOARD_ROUTE}#flagged`)}>
                    View flagged dues
                  </button>
                  {!hardGated && (
                    <button type="button" className="btn btn--later" onClick={dismiss}>
                      Remind me later
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 'pay' && (
            <div className="rfw__pay-overlay">
              <div className="pay-sheet">
                <div className="pay-sheet__grabber" />
                <div className="pay-sheet__row">
                  <span className="pay-sheet__title">Clear your dues</span>
                  <span className="pay-sheet__total">{TOTAL}</span>
                </div>
                <span className="pay-sheet__note">
                  Paying clears the flag on your account. You can book rides right after.
                </span>
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
                <button type="button" className="btn btn--link" onClick={() => setStep('warning')}>
                  Go back
                </button>
              </div>
            </div>
          )}

          {step === 'done' && (
            <div className="rfw__overlay">
              <div className="done-card">
                <div className="done-card__icon">
                  <Check size={26} color="#34A853" />
                </div>
                <span className="done-card__headline">Dues cleared — flag removed</span>
                <span className="done-card__note">
                  You're all clear. Nothing is pending on your account and you can book rides as usual.
                </span>
                <button type="button" className="btn btn--primary" onClick={bookRide}>
                  Book a ride
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="rfw__nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className="rfw__nav-item"
              onClick={item.key === 'dues' ? () => navigate(DUES_DASHBOARD_ROUTE) : undefined}
            >
              <item.Icon size={21} color={item.active ? '#E5A800' : '#888888'} />
              <span className="rfw__nav-label" style={{ color: item.active ? '#E5A800' : '#888888', fontWeight: item.active ? 700 : 400 }}>
                {item.label}
              </span>
              {item.key === 'dues' && <span className="rfw__nav-dot" />}
            </button>
          ))}
        </div>
        <div className="rfw__home-indicator">
          <div className="rfw__home-indicator-bar" />
        </div>

        {toast && (
          <div className="rfw__toast" key={toast}>
            <span>{toast}</span>
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}
