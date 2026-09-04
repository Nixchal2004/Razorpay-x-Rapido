import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, ChevronLeft, ChevronRight, Flag, Info, MapPin, ShieldCheck } from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import { NAV_ITEMS } from '../CaptainHome/navItems'
import './DuesLedger.css'

const REMINDER_LIMIT = 3

const TRIPS = [
  { id: 'RD1748392045', name: 'Ramesh Kumar', amount: '₹120', state: 'requested', tab: 'pending',
    drop: 'HSR Layout, Sector 2', pickup: 'Koramangala 5th Block, 560095', dropFull: 'HSR Layout Sector 2, 560102',
    caption: '10 min ago', rideMeta: 'Bike · 5.2 km · Today, 6:12 PM', hours: 0.2 },
  { id: 'RD1748391884', name: 'Anjali Shetty', amount: '₹220', state: 'covered', tab: 'pending',
    drop: 'MG Road Metro', pickup: 'Indiranagar 12th Main, 560038', dropFull: 'MG Road Metro Station, 560001',
    caption: 'Yesterday, 8:30 PM', rideMeta: 'Auto · 7.8 km · Yesterday, 8:30 PM', hours: 21 },
  { id: 'RD1748390977', name: 'Kavya Iyer', amount: '₹95', state: 'requested', tab: 'pending',
    drop: 'Jayanagar 4th Block', pickup: 'BTM Layout 2nd Stage, 560076', dropFull: 'Jayanagar 4th Block, 560011',
    caption: '4 days ago', rideMeta: 'Bike · 4.1 km · 27 Aug, 9:20 PM', hours: 98 },
  { id: 'RD1748390211', name: 'Vikram Rao', amount: '₹95', state: 'recovered', tab: 'resolved',
    drop: 'Silk Board Junction', pickup: 'BTM Layout 1st Stage, 560029', dropFull: 'Silk Board Junction, 560068',
    caption: 'Recovered · 2 days ago', rideMeta: 'Bike · 3.4 km · 29 Aug, 7:05 PM', hours: 52 },
  { id: 'RD1748388760', name: 'Priya Menon', amount: '₹180', state: 'recovered', tab: 'resolved',
    drop: 'Koramangala 8th Block', pickup: 'Jayanagar 4th Block, 560011', dropFull: 'Koramangala 8th Block, 560095',
    caption: 'Recovered · 3 days ago', rideMeta: 'Auto · 6.6 km · 28 Aug, 1:40 PM', hours: 76 },
  { id: 'RD1748386402', name: 'Suresh Babu', amount: '₹60', state: 'recovered', tab: 'resolved',
    drop: 'Indiranagar 100ft Road', pickup: 'MG Road, 560001', dropFull: 'Indiranagar 100ft Road, 560038',
    caption: 'Recovered · 5 days ago', rideMeta: 'Bike · 2.8 km · 26 Aug, 10:15 AM', hours: 124 },
]

const BADGES = {
  covered: { label: 'Covered', className: 'badge--covered' },
  requested: { label: 'Alternate payment', className: 'badge--requested' },
  recovered: { label: 'Recovered', className: 'badge--recovered' },
}

const BUBBLES = {
  covered: 'bubble--covered',
  requested: 'bubble--requested',
  recovered: 'bubble--recovered',
}

const EXPLAIN = {
  covered: {
    title: "What's happening",
    body: "This payment didn't go through because of a network issue on the rider's end. The amount is small and this rider has a strong payment history, so Rapido is covering it while the payment is retried.",
    className: 'explain--covered',
  },
  requested: {
    title: 'This one needs a different payment method',
    body: "The rider's payment failed twice, and this amount is above what Rapido settles on its own. They have been asked to pay by UPI or cash instead, and the request is open in their app.",
    className: 'explain--requested',
  },
  recovered: {
    title: 'What happened',
    body: 'The rider cleared this due from their app. Nothing is outstanding on this trip.',
    className: 'explain--recovered',
  },
}

const RATING_WORDS = { 1: 'Poor', 2: 'Fair', 3: 'Okay', 4: 'Good', 5: 'Excellent' }
const REVIEW_TAGS = ['Paid quickly', 'Kept in touch', 'Polite', 'Hard to reach']

function initialsOf(name) {
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2)
}

// "2. Captain Dues flow.dc.html" — the captain's Dues ledger (Screen 1:
// Pending/Resolved list) and its per-trip detail (Screen 5), toggled by
// internal state rather than a route, exactly as the prototype does.
export default function DuesLedger() {
  const [tab, setTab] = useState('pending')
  const [openId, setOpenId] = useState(null)
  const [reminders, setReminders] = useState({})
  const [thanked, setThanked] = useState({})
  const [flagged, setFlagged] = useState({})
  const [ratings, setRatings] = useState({})
  const [tags, setTags] = useState({})
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  const say = useCallback((msg) => {
    clearTimeout(toastTimer.current)
    setToast(msg)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  const openTrip = TRIPS.find((t) => t.id === openId)
  const pendingCount = TRIPS.filter((t) => t.tab === 'pending').length

  const navItems = NAV_ITEMS.map((n) =>
    n.key === 'dues'
      ? { ...n, active: true, showDot: true, badge: String(pendingCount) }
      : { ...n, href: '/home' },
  )

  if (openTrip) {
    return (
      <DuesDetail
        trip={openTrip}
        reminderCount={reminders[openTrip.id] ?? 0}
        thanked={!!thanked[openTrip.id]}
        flaggedState={!!flagged[openTrip.id]}
        rating={ratings[openTrip.id] ?? 0}
        selectedTags={tags[openTrip.id] || []}
        toast={toast}
        onBack={() => setOpenId(null)}
        onSendReminder={() => {
          setReminders((s) => ({ ...s, [openTrip.id]: (s[openTrip.id] ?? 0) + 1 }))
          say(`Reminder sent to ${openTrip.name.split(' ')[0]}.`)
        }}
        onRate={(n) => setRatings((s) => ({ ...s, [openTrip.id]: n }))}
        onToggleTag={(label) =>
          setTags((s) => {
            const cur = s[openTrip.id] || []
            const on = cur.includes(label)
            return { ...s, [openTrip.id]: on ? cur.filter((x) => x !== label) : cur.concat(label) }
          })
        }
        onSendThanks={() => {
          setThanked((s) => ({ ...s, [openTrip.id]: true }))
          const r = ratings[openTrip.id] ?? 0
          say(r ? `Rated ${r} ★ · thank you sent to ${openTrip.name.split(' ')[0]}.` : `Thank you sent to ${openTrip.name.split(' ')[0]}.`)
        }}
        onToggleFlag={() => {
          const next = !flagged[openTrip.id]
          setFlagged((s) => ({ ...s, [openTrip.id]: next }))
          say(next ? 'Sent to Rapido support for review.' : 'Flag removed.')
        }}
      />
    )
  }

  const src = TRIPS.filter((t) => t.tab === tab)
  const pending = tab === 'pending'
  const openTrips = TRIPS.filter((t) => t.tab === 'pending' && t.state === 'requested')
  const coveredTrips = TRIPS.filter((t) => t.tab === 'pending' && t.state === 'covered')
  const sum = (list) => '₹' + list.reduce((n, t) => n + Number(t.amount.replace(/[^\d]/g, '')), 0)
  const openAmount = sum(openTrips)
  const coveredAmount = sum(coveredTrips)

  return (
    <PhoneFrame background="#FAFAFA">
    <div className="dues">
      <div className="dues__statusbar">
        <StatusBar />
      </div>
      <div className="dues__appbar">
        <button type="button" className="dues__menu-btn" aria-label="Menu">
          <span className="dues__hamburger">
            <span />
            <span />
            <span />
          </span>
        </button>
        <div className="dues__wordmark">
          <span className="dues__wordmark-text">rapido</span>
          <span className="dues__wordmark-dot" />
          <span className="dues__wordmark-tag">CAPTAIN</span>
        </div>
        <button type="button" className="dues__notif-btn" aria-label="Notifications">
          <Bell size={21} color="#1A1A1A" />
          <span className="dues__notif-dot" />
        </button>
      </div>

      <div className="dues__header">
        <div className="dues__title">Dues</div>
        <div className="dues__tabs">
          <button
            type="button"
            className={`dues__tab${pending ? ' dues__tab--active' : ''}`}
            onClick={() => setTab('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className={`dues__tab${!pending ? ' dues__tab--active' : ''}`}
            onClick={() => setTab('resolved')}
          >
            Resolved
          </button>
        </div>
      </div>

      <div className="dues__scroll">
        <div className={`stat-card${pending ? ' stat-card--pending' : ' stat-card--resolved'}`}>
          <div className="stat-card__row">
            <span className="stat-card__amount">{pending ? openAmount : '₹335'}</span>
            <span className="stat-card__count">{pending ? `Alternate payment · ${openTrips.length} trips` : '3 trips'}</span>
          </div>
          <span className="stat-card__note">
            {pending ? "Pending with the rider. Your payout isn't affected." : 'Recovered from ride collections. Nothing outstanding.'}
          </span>
          {pending && coveredTrips.length > 0 && (
            <div className="stat-card__covered">
              <span className="stat-card__covered-amount">+ {coveredAmount}</span>
              <span className="stat-card__covered-note">already covered — nothing owed to you</span>
            </div>
          )}
        </div>

        <span className="dues__section-label">{pending ? 'UNRESOLVED TRIPS' : 'LAST 7 DAYS'}</span>

        <div className="dues-list">
          {src.map((row, i) => (
            <div
              key={row.id}
              role="button"
              className={`dues-row${i < src.length - 1 ? ' dues-row--divider' : ''}`}
              onClick={() => setOpenId(row.id)}
            >
              <div className="dues-row__top">
                <div className={`dues-row__bubble ${BUBBLES[row.state]}`}>
                  <span>{initialsOf(row.name)}</span>
                </div>
                <div className="dues-row__body">
                  <div className="dues-row__head">
                    <span className="dues-row__name">{row.name}</span>
                    <span className="dues-row__amount">{row.amount}</span>
                  </div>
                  <div className="dues-row__drop">
                    <MapPin size={13} color="#AAAAAA" />
                    <span>{row.drop}</span>
                  </div>
                  <div className="dues-row__meta">
                    <span className={`badge ${BADGES[row.state].className}`}>{BADGES[row.state].label}</span>
                    <span className="dues-row__caption">{row.caption}</span>
                  </div>
                </div>
                <ChevronRight size={17} color="#AAAAAA" />
              </div>
            </div>
          ))}
        </div>

        {pending && (
          <div className="dues__footer-note">
            <Info size={15} color="#888888" />
            <span>Dues are settled from future ride collections. Your weekly payout goes out on schedule.</span>
          </div>
        )}
      </div>

      <div className="dues__nav">
        {navItems.map((item) => (
          <Link key={item.label} to={item.href} className="dues__nav-item">
            <item.Icon size={21} color={item.active ? '#E5A800' : '#888888'} />
            <span className="dues__nav-label" style={{ color: item.active ? '#E5A800' : '#888888', fontWeight: item.active ? 700 : 400 }}>
              {item.label}
            </span>
            {item.showDot && <span className="dues__nav-badge">{item.badge}</span>}
          </Link>
        ))}
      </div>
      <div className="dues__home-indicator">
        <div className="dues__home-indicator-bar" />
      </div>

      {toast && (
        <div className="dues__toast" key={toast}>
          <span>{toast}</span>
        </div>
      )}
    </div>
    </PhoneFrame>
  )
}

function DuesDetail({
  trip,
  reminderCount,
  thanked,
  flaggedState,
  rating,
  selectedTags,
  toast,
  onBack,
  onSendReminder,
  onRate,
  onToggleTag,
  onSendThanks,
  onToggleFlag,
}) {
  const unlocked = trip.hours >= 72
  const open = trip.state !== 'recovered'
  const showRemind = open && trip.state !== 'covered'
  const showThanks = trip.state === 'recovered'
  const showFlag = open && trip.state !== 'covered'
  const ex = EXPLAIN[trip.state]
  const badge = BADGES[trip.state]

  const remindNote =
    reminderCount >= REMINDER_LIMIT
      ? `You have sent the maximum of ${REMINDER_LIMIT} reminders today. The limit resets at midnight.`
      : `Sends a payment reminder to the rider's app. Up to ${REMINDER_LIMIT} a day.`
  const remindButtonLabel = reminderCount >= REMINDER_LIMIT ? 'Daily limit reached' : reminderCount > 0 ? 'Send another reminder' : 'Send reminder'

  const showReviewTags = rating > 0 && !thanked
  const thanksButtonLabel = thanked ? (rating ? 'Rating and thank you sent' : 'Thank you sent') : rating ? 'Send rating and thank you' : 'Send a thank you'
  const flagIconColor = flaggedState ? '#EA4335' : unlocked ? '#1A1A1A' : '#AAAAAA'
  const flagNote = flaggedState
    ? 'Rapido support will look into this due and get back to you.'
    : unlocked
      ? 'This due has been open for more than 72 hours. You can send it to Rapido support for review.'
      : `Available once a due stays open for 72 hours. ${Math.max(1, Math.ceil(72 - trip.hours))}h to go.`

  return (
    <PhoneFrame background="#FAFAFA">
    <div className="dues">
      <div className="dues__statusbar">
        <StatusBar />
      </div>
      <div className="dues-detail__appbar">
        <button type="button" className="dues-detail__back" aria-label="Back" onClick={onBack}>
          <ChevronLeft size={24} color="#1A1A1A" />
        </button>
        <div className="dues-detail__title-group">
          <span className="dues-detail__title">Trip details</span>
          <span className="dues-detail__id">ID: {trip.id}</span>
        </div>
      </div>

      <div className="dues-detail__scroll">
        <div className="trip-card">
          <div className="trip-card__top">
            <span className={`badge ${badge.className}`}>{badge.label}</span>
            <span className="trip-card__amount">{trip.amount}</span>
          </div>
          <div className="trip-card__rider">
            <div className={`dues-row__bubble ${BUBBLES[trip.state]}`}>
              <span>{initialsOf(trip.name)}</span>
            </div>
            <div className="trip-card__rider-text">
              <span className="trip-card__rider-name">{trip.name}</span>
              <span className="trip-card__rider-meta">{trip.rideMeta}</span>
            </div>
          </div>
          <div className="trip-card__hairline" />
          <div className="route-rail">
            <div className="route-rail__rule">
              <span className="route-rail__dot route-rail__dot--pickup" />
              <span className="route-rail__line" />
              <span className="route-rail__dot route-rail__dot--drop" />
            </div>
            <div className="route-rail__text">
              <div className="route-rail__stop">
                <span className="route-rail__label">PICKUP</span>
                <span className="route-rail__value">{trip.pickup}</span>
              </div>
              <div className="route-rail__stop">
                <span className="route-rail__label">DROP</span>
                <span className="route-rail__value">{trip.dropFull}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`explain ${ex.className}`}>
          <span className="explain__title">{ex.title}</span>
          <span className="explain__body">{ex.body}</span>
        </div>

        {showRemind && (
          <div className="detail-card">
            <div className="detail-card__row">
              <span className="detail-card__label">Remind the rider</span>
              <span className="detail-card__counter">{reminderCount} / {REMINDER_LIMIT} today</span>
            </div>
            <span className="detail-card__note">{remindNote}</span>
            <button
              type="button"
              className={`dues-btn ${reminderCount >= REMINDER_LIMIT ? 'dues-btn--disabled' : 'dues-btn--primary'}`}
              disabled={reminderCount >= REMINDER_LIMIT}
              onClick={onSendReminder}
            >
              {remindButtonLabel}
            </button>
          </div>
        )}

        {showThanks && (
          <div className="detail-card">
            <span className="detail-card__label">Rate &amp; review</span>
            <span className="detail-card__note">Optional. Rate this rider on how the payment was settled.</span>
            <div className="rating-row">
              <div className="rating-row__stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className="rating-row__star"
                    aria-label={`${n} star`}
                    style={{ color: n <= rating ? '#FDC830' : '#E8E8E8' }}
                    onClick={() => onRate(n)}
                  >
                    ★
                  </button>
                ))}
              </div>
              <span className="rating-row__label">{rating ? RATING_WORDS[rating] : 'Not rated'}</span>
            </div>
            {showReviewTags && (
              <div className="review-tags">
                {REVIEW_TAGS.map((label) => {
                  const on = selectedTags.includes(label)
                  return (
                    <button
                      key={label}
                      type="button"
                      className={`review-tags__tag${on ? ' review-tags__tag--on' : ''}`}
                      onClick={() => onToggleTag(label)}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            )}
            <button
              type="button"
              className={`dues-btn ${thanked ? 'dues-btn--disabled' : 'dues-btn--secondary'}`}
              disabled={thanked}
              onClick={onSendThanks}
            >
              {thanksButtonLabel}
            </button>
          </div>
        )}

        {showFlag && (
          <div className="detail-card">
            <div className="flag-row">
              <Flag size={16} color={flagIconColor} />
              <div className="flag-row__text">
                <span className="detail-card__label">{flaggedState ? 'Flagged for review' : 'Flag this rider'}</span>
                <span className="detail-card__note">{flagNote}</span>
              </div>
            </div>
            {unlocked && (
              <button type="button" className="dues-btn dues-btn--secondary" onClick={onToggleFlag}>
                {flaggedState ? 'Remove flag' : 'Flag this'}
              </button>
            )}
          </div>
        )}

        <div className="dues__footer-note dues__footer-note--tight">
          <ShieldCheck size={15} color="#888888" />
          <span>Your payout is not affected by this due, whichever way it is settled.</span>
        </div>
      </div>

      <div className="dues__home-indicator">
        <div className="dues__home-indicator-bar" />
      </div>

      {toast && (
        <div className="dues__toast" key={toast}>
          <span>{toast}</span>
        </div>
      )}
    </div>
    </PhoneFrame>
  )
}
