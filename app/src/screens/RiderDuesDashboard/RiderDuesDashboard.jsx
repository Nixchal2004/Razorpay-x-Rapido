import { useMemo, useState } from 'react'
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
import { useAccountStatus, useCases, useDuesActions } from '../../state/DuesContext'
import { CaseState } from '../../state/duesEngine'
import './RiderDuesDashboard.css'

// Maps the shared engine case state onto this screen's Pending/Flagged/
// Settled tabs. UNDER_REVIEW cases live in the Pending tab alongside
// CONFIRMED/ALT_PAYMENT_REQUESTED ones (per chat1's Screen 7 spec: "a
// Status Badge in either info-light 'Under review' ... or warning-light
// 'Pending'" — both badge variants belong to the same tab), distinguished
// only by badge style, restoring the "Under review" badge the original
// source authored but never had live data to show (its DUES fixture never
// included a `state:"review"` row).
const TAB_OF = {
  [CaseState.UNDER_REVIEW]: 'pending',
  [CaseState.CONFIRMED]: 'pending',
  [CaseState.ALT_PAYMENT_REQUESTED]: 'pending',
  [CaseState.FLAGGED]: 'flagged',
  [CaseState.RESOLVED]: 'settled',
}

const STATE_STYLE = {
  review: { Icon: Clock, bubbleBg: '#E3F2FD', bubbleFg: '#4285F4', badgeBg: '#E3F2FD', badgeFg: '#1A5FB8', badge: 'Under review' },
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

// "Rider Dues.dc.html" — tapping a confirmed pending row. The source never
// passed the tapped row's id/amount along (every row led to the same
// fixed screen); now that a real case store exists, the row's id is
// passed as `?caseId=` so the detail screen shows that specific case
// instead of always the same predetermined example — see RiderDues.jsx.
// Rows still awaiting a captain decision (Under review) aren't clickable
// — there's no PRD-designed screen for that state (chat5 explicitly
// removed the one that used to show it), so surfacing them here as a
// distinct badge is as far as this state goes without inventing a screen.
const DUES_DETAIL_ROUTE = '/rider/dues'

function relativeCaption(ts, prefix) {
  const diffMin = Math.max(0, Math.round((Date.now() - ts) / 60000))
  const text =
    diffMin < 60
      ? `${diffMin} min ago`
      : diffMin < 24 * 60
        ? `${Math.round(diffMin / 60)}h ago`
        : `${Math.round(diffMin / (24 * 60))}d ago`
  return prefix ? `${prefix} ${text}` : text
}

function toRow(c) {
  const tab = TAB_OF[c.state]
  if (!tab) return null
  const styleKey = c.state === CaseState.UNDER_REVIEW ? 'review' : tab
  let caption
  if (tab === 'flagged') caption = relativeCaption(c.flaggedAt, 'Flagged')
  else if (tab === 'settled') caption = c.paidVia === 'auto-retry' ? 'Auto-retry succeeded' : `Paid by ${c.paidVia?.toUpperCase() ?? 'UPI'}`
  else if (styleKey === 'review') caption = 'Waiting on your captain to confirm'
  else caption = c.retryDeadline ? 'Retrying until the review window closes' : ''
  return {
    id: c.id,
    tab,
    styleKey,
    trip: `${c.trip.vehicle} · ${relativeCaption(c.createdAt)}`,
    route: c.trip.route,
    amount: `₹${c.amount}`,
    caption,
    reason: c.flaggedReason,
    clickable: c.state === CaseState.CONFIRMED || c.state === CaseState.ALT_PAYMENT_REQUESTED,
  }
}

// Rider Dues Dashboard — port of `4. Rider Dues Dashboard.dc.html`, reached
// from both the Home dues-popup card and the Dues nav item across the Home
// and Flag Warning flows. Pending/Flagged/Settled tabs, an itemized due
// list, and a payment sheet for flagged dues. The flag strip (the source's
// stub "Screen 8 — flags and account status") now switches this screen's
// own tab to Flagged instead of showing a toast — the destination the
// source's own copy ("2 more will pause your ability to book rides")
// already implies, using the tab this same screen already has rather
// than inventing a new one.
//
// Rows and the account flag count now come from the shared Rapido Dues
// case store — this and the Captain ledger read the exact same cases.
// Paying a flagged due here calls the engine's payDue action (ACT step)
// instead of just navigating with a query string, so the case is
// genuinely resolved before Dues Cleared ever renders.
export default function RiderDuesDashboard() {
  const navigate = useNavigate()
  const location = useLocation()
  const initialTab = TABS.includes(location.hash.replace('#', '')) ? location.hash.replace('#', '') : 'pending'
  const [tab, setTab] = useState(initialTab)
  const [payRowId, setPayRowId] = useState(null)
  const [method, setMethod] = useState('upi')
  const cases = useCases()
  const account = useAccountStatus()
  const { payDue } = useDuesActions()

  const allRows = useMemo(() => cases.map(toRow).filter(Boolean), [cases])
  const rows = allRows.filter((r) => r.tab === tab)
  const payRow = allRows.find((r) => r.id === payRowId) ?? null
  const remaining = Math.max(0, account.flagLimit - account.flagCount)

  const confirmPay = () => {
    if (!payRow) return
    payDue(payRow.id, method)
    setPayRowId(null)
    navigate(`/rider/dues-cleared?caseId=${payRow.id}`)
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

        {account.flagCount > 0 && (
          <button type="button" className="rdd__flag-strip" onClick={() => setTab('flagged')}>
            <AlertTriangle size={16} color="#B98A00" />
            <div className="rdd__flag-strip-text">
              <span className="rdd__flag-strip-title">
                {account.flagCount} {account.flagCount === 1 ? 'flag on your account' : 'flags on your account'}
              </span>
              <span className="rdd__flag-strip-note">{remaining} more will pause your ability to book rides</span>
            </div>
            <ChevronRight size={17} color="#B98A00" />
          </button>
        )}

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
              const style = STATE_STYLE[row.styleKey]
              return (
                <div
                  key={row.id}
                  role="button"
                  className={`rdd-row${i < rows.length - 1 ? ' rdd-row--divider' : ''}${row.clickable ? ' rdd-row--clickable' : ''}`}
                  onClick={row.clickable ? () => navigate(`${DUES_DETAIL_ROUTE}?caseId=${row.id}`) : undefined}
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
                          setPayRowId(row.id)
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
              <button type="button" className="btn btn--link-muted" onClick={() => setPayRowId(null)}>
                Go back
              </button>
            </div>
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}
