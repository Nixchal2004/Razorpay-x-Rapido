import { useCallback, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  AlertTriangle,
  Bike,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  Flag,
  Landmark,
  LayoutGrid,
  Plane,
  ReceiptText,
  Smartphone,
  UserRound,
} from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import './RiderDuesDashboard.css'

const FLAG_COUNT = 1
const FLAG_LIMIT = 3

const DUES = [
  { id: 'RD1748392045', tab: 'pending', trip: 'Bike · Today, 9:34 AM', route: 'Koramangala 5th Block → HSR Layout', amount: '₹120', caption: 'Retrying until 6:15 PM today' },
  { id: 'RD1748391884', tab: 'pending', trip: 'Auto · Yesterday, 8:30 PM', route: 'Indiranagar → MG Road Metro', amount: '₹220', caption: 'Retrying until 6:15 PM today' },
  { id: 'RD1748390977', tab: 'flagged', trip: 'Bike · 27 Aug, 9:20 PM', route: 'BTM Layout → Jayanagar 4th Block', amount: '₹95', caption: 'Flagged 2 days ago', reason: "Wasn't settled within the review window." },
  { id: 'RD1748390211', tab: 'settled', trip: 'Bike · 29 Aug, 7:05 PM', route: 'BTM Layout → Silk Board Junction', amount: '₹95', caption: 'Paid by UPI' },
  { id: 'RD1748388760', tab: 'settled', trip: 'Auto · 28 Aug, 1:40 PM', route: 'Jayanagar → Koramangala 8th Block', amount: '₹180', caption: 'Paid by UPI' },
  { id: 'RD1748386402', tab: 'settled', trip: 'Bike · 26 Aug, 10:15 AM', route: 'MG Road → Indiranagar 100ft Road', amount: '₹60', caption: 'Auto-retry succeeded' },
]

const STATE_STYLE = {
  pending: { Icon: Clock, bubbleBg: '#FFF8E1', bubbleFg: '#B98A00', badgeBg: '#FFF8E1', badgeFg: '#8A6400', badge: 'Pending' },
  flagged: { Icon: Flag, bubbleBg: '#FDECEA', bubbleFg: '#EA4335', badgeBg: '#FDECEA', badgeFg: '#B0342A', badge: 'Flagged' },
  settled: { Icon: Check, bubbleBg: '#F5F5F5', bubbleFg: '#888888', badgeBg: '#F5F5F5', badgeFg: '#666666', badge: 'Settled' },
}

const LABELS = { pending: 'UNRESOLVED DUES', flagged: 'NEEDS YOUR ATTENTION', settled: 'LAST 30 DAYS' }
const TABS = ['pending', 'flagged', 'settled']

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

// "Rider Dues.dc.html" — tapping any pending row. The source never passes
// the tapped row's id/amount along, so this is the same fixed destination
// regardless of which pending row was tapped, reproduced literally.
const DUES_DETAIL_ROUTE = '/rider/dues'

// Rider Dues Dashboard — port of `4. Rider Dues Dashboard.dc.html`, reached
// from both the Home dues-popup card and the Dues nav item across the Home
// and Flag Warning flows. Pending/Flagged/Settled tabs, an itemized due
// list, and a payment sheet for flagged dues. The flag strip's "Screen 8 —
// flags and account status" is authored as a stub in the source itself
// (it shows a toast instead of navigating anywhere) — reproduced literally
// rather than invented. `state.paid` in the source is set nowhere (paying
// always hard-navigates away), so a "Paid" row state and the empty-tab
// panels are genuinely unreachable and are skipped here, matching how
// other unreachable dead code has been treated throughout this app.
export default function RiderDuesDashboard() {
  const navigate = useNavigate()
  const location = useLocation()
  const initialTab = TABS.includes(location.hash.replace('#', '')) ? location.hash.replace('#', '') : 'pending'
  const [tab, setTab] = useState(initialTab)
  const [payRow, setPayRow] = useState(null)
  const [method, setMethod] = useState('upi')
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  const say = useCallback((msg) => {
    clearTimeout(toastTimer.current)
    setToast(msg)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  const rows = useMemo(() => DUES.filter((d) => d.tab === tab), [tab])
  const remaining = Math.max(0, FLAG_LIMIT - FLAG_COUNT)

  const confirmPay = () => {
    if (!payRow) return
    const digits = payRow.amount.replace(/[^0-9]/g, '')
    navigate(`/rider/dues-cleared?amount=${digits}`)
  }

  return (
    <PhoneFrame background="#FAFAFA">
      <div className="rdd">
        <div className="rdd__statusbar">
          <StatusBar />
        </div>

        <div className="rdd__appbar">
          <button type="button" className="rdd__back" aria-label="Back" onClick={() => navigate('/rider/home')}>
            <ChevronLeft size={24} color="#1A1A1A" />
          </button>
          <span className="rdd__title">Dues</span>
        </div>

        <button type="button" className="rdd__flag-strip" onClick={() => say('Screen 8 — flags and account status — is not built yet.')}>
          <AlertTriangle size={16} color="#B98A00" />
          <div className="rdd__flag-strip-text">
            <span className="rdd__flag-strip-title">
              {FLAG_COUNT} {FLAG_COUNT === 1 ? 'flag on your account' : 'flags on your account'}
            </span>
            <span className="rdd__flag-strip-note">{remaining} more will pause your ability to book rides</span>
          </div>
          <ChevronRight size={17} color="#B98A00" />
        </button>

        <div className="rdd__tabs">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              className={`rdd__tab${t === tab ? ' rdd__tab--active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div className="rdd__scroll">
          <span className="rdd__section-label">{LABELS[tab]}</span>
          <div className="rdd__list">
            {rows.map((row, i) => {
              const style = STATE_STYLE[row.tab]
              const clickable = row.tab === 'pending'
              return (
                <div
                  key={row.id}
                  role="button"
                  className={`rdd-row${i < rows.length - 1 ? ' rdd-row--divider' : ''}${clickable ? ' rdd-row--clickable' : ''}`}
                  onClick={clickable ? () => navigate(DUES_DETAIL_ROUTE) : undefined}
                >
                  <div className="rdd-row__top">
                    <div className="rdd-row__bubble" style={{ background: style.bubbleBg }}>
                      <style.Icon size={16} color={style.bubbleFg} />
                    </div>
                    <div className="rdd-row__body">
                      <div className="rdd-row__head">
                        <span className="rdd-row__trip">{row.trip}</span>
                        <span className="rdd-row__amount">{row.amount}</span>
                      </div>
                      <span className="rdd-row__route">{row.route}</span>
                      <div className="rdd-row__meta">
                        <span className="rdd-row__badge" style={{ background: style.badgeBg, color: style.badgeFg }}>
                          {style.badge}
                        </span>
                        <span className="rdd-row__caption">{row.caption}</span>
                      </div>
                      {row.tab === 'flagged' && <span className="rdd-row__reason">{row.reason}</span>}
                    </div>
                  </div>
                  {row.tab === 'flagged' && (
                    <div className="rdd-row__pay-wrap">
                      <button
                        type="button"
                        className="rdd-row__pay-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          setPayRow(row)
                          setMethod('upi')
                        }}
                      >
                        Pay {row.amount} now
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="rdd__nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className="rdd__nav-item"
              onClick={item.key === 'ride' ? () => navigate('/rider/home') : undefined}
            >
              <item.Icon size={21} color={item.active ? '#E5A800' : '#888888'} />
              <span className="rdd__nav-label" style={{ color: item.active ? '#E5A800' : '#888888', fontWeight: item.active ? 700 : 400 }}>
                {item.label}
              </span>
              {item.key === 'dues' && <span className="rdd__nav-dot" />}
            </button>
          ))}
        </div>
        <div className="rdd__home-indicator">
          <div className="rdd__home-indicator-bar" />
        </div>

        {payRow && (
          <div className="rdd__pay-overlay">
            <div className="pay-sheet">
              <div className="pay-sheet__grabber" />
              <div className="pay-sheet__row">
                <span className="pay-sheet__title">Clear this due</span>
                <span className="pay-sheet__total">{payRow.amount}</span>
              </div>
              <span className="pay-sheet__note">
                Clearing this removes the flag on your {payRow.trip.replace(/^[A-Za-z]+ · /, '')} trip and keeps your account in good standing.
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
              <button type="button" className="btn btn--primary" onClick={confirmPay}>
                Pay {payRow.amount}
              </button>
              <button type="button" className="btn btn--link-muted" onClick={() => setPayRow(null)}>
                Go back
              </button>
            </div>
          </div>
        )}

        {toast && (
          <div className="rdd__toast" key={toast}>
            <span>{toast}</span>
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}
