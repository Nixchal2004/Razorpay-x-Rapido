import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, ChevronRight, Bike, ShieldCheck, MapPin, Flag } from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import mapImage from '../../assets/map-bangalore.png'
import incentiveBadge from '../../assets/badge-incentive-helmet.png'
import referIllustration from '../../assets/illustration-refer-earn.png'
import { NAV_ITEMS } from './navItems'
import { useCase, useDuesActions } from '../../state/DuesContext'
import './CaptainHome.css'

const PINS = [
  { top: 58, left: 36 },
  { top: 152, left: 268 },
  { top: 210, left: 108 },
]

// The existing alternate-payment due (Kavya Iyer, ₹95, 4 days old) that
// the Captain can flag for review — same case id/data DuesLedger.jsx
// already tracks, read live from the shared engine (not a second Dues
// implementation). Drop location is display-only enrichment, matching
// the same value DuesLedger.jsx's own local TRIP_DETAILS map uses for
// this case.
const FLAG_CASE_ID = 'RD1748390977'
const FLAG_CASE_LOCATION = 'Jayanagar 4th Block'

function initialsOf(name) {
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2)
}

function relativeTime(ts) {
  if (!ts) return ''
  const diffMin = Math.max(0, Math.round((Date.now() - ts) / 60000))
  if (diffMin < 1) return 'Just now'
  if (diffMin < 60) return `${diffMin} min ago`
  const diffHr = Math.round(diffMin / 60)
  if (diffHr < 24) return `${diffHr} ${diffHr === 1 ? 'hour' : 'hours'} ago`
  const diffDay = Math.round(diffHr / 24)
  return `${diffDay} ${diffDay === 1 ? 'day' : 'days'} ago`
}

// "0. Captain Home.dc.html" — the captain's home screen. Terminal
// destination for both the Emergency and Splash flows.
export default function CaptainHome() {
  const [online, setOnline] = useState(true)
  const flagCase = useCase(FLAG_CASE_ID)
  const { toggleCaptainFlag } = useDuesActions()
  const isFlagged = flagCase?.captainFlag?.flagged ?? false

  const toggleOnline = () => {
    if (navigator.vibrate) navigator.vibrate(8)
    setOnline((v) => !v)
  }

  return (
    <PhoneFrame background="#FAFAFA">
      <div className="home">
        <div className="home__statusbar">
          <StatusBar />
        </div>

        <div className="home__appbar">
          <button type="button" className="home__menu-btn" aria-label="Menu">
            <span className="home__hamburger">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div className="home__wordmark">
            <span className="home__wordmark-text">rapido</span>
            <span className="home__wordmark-dot" />
            <span className="home__wordmark-tag">CAPTAIN</span>
          </div>
          <button type="button" className="home__notif-btn" aria-label="Notifications">
            <Bell size={21} color="#1A1A1A" />
            <span className="home__notif-badge">3</span>
          </button>
        </div>

        <div className="home__scroll">
          <div className="earnings-card">
            <div className="earnings-card__main">
              <span className="earnings-card__label">Earnings</span>
              <span className="earnings-card__value">₹2,340.50</span>
              <div className="earnings-card__link">
                <span>Today</span>
                <ChevronRight size={14} color="#888888" />
              </div>
            </div>
            <div className="earnings-card__divider" />
            <div className="earnings-card__stat">
              <span className="earnings-card__stat-value" style={{ color: '#34A853' }}>
                ₹120.50
              </span>
              <span className="earnings-card__stat-label">Incentives</span>
              <ChevronRight size={14} color="#888888" />
            </div>
            <div className="earnings-card__divider" />
            <div className="earnings-card__stat earnings-card__stat--narrow">
              <span className="earnings-card__stat-value" style={{ color: '#4285F4' }}>
                4
              </span>
              <span className="earnings-card__stat-label">Rides</span>
              <ChevronRight size={14} color="#888888" />
            </div>
          </div>

          <div className="incentive-banner">
            <div className="incentive-banner__icon">
              <img src={incentiveBadge} alt="" />
            </div>
            <div className="incentive-banner__body">
              <span className="incentive-banner__title">Complete 5 more rides to get ₹250</span>
              <div className="incentive-banner__track">
                <div className="incentive-banner__fill" />
              </div>
            </div>
            <div className="incentive-banner__count">
              <span>1 / 5</span>
              <ChevronRight size={17} color="#888888" />
            </div>
          </div>

          <div className="home-map">
            <img src={mapImage} alt="Live map, Koramangala" />
            <div className="home-map__location">
              <span className="home-map__location-ring">
                <span className="home-map__location-dot" />
              </span>
            </div>
            {PINS.map((pin, i) => (
              <div
                key={i}
                className="home-map__pin"
                style={{ top: pin.top, left: pin.left }}
              >
                <Bike size={17} color="#1A1A1A" />
              </div>
            ))}
            <button type="button" className="home-map__safety-btn" aria-label="Safety">
              <ShieldCheck size={23} color="#1A1A1A" />
            </button>
          </div>

          <div className="status-card">
            <span
              className="status-card__dot"
              style={{ background: online ? '#34A853' : '#AAAAAA' }}
            />
            <div className="status-card__text">
              <span className="status-card__title">
                {online ? 'You are Online' : 'You are Offline'}
              </span>
              <span className="status-card__note">
                {online ? 'You will receive ride requests' : 'Go online to receive ride requests'}
              </span>
            </div>
            <button
              type="button"
              className="status-card__toggle"
              aria-label="Toggle online"
              onClick={toggleOnline}
              style={{
                background: online ? '#34A853' : '#E8E8E8',
                justifyContent: online ? 'flex-end' : 'flex-start',
              }}
            >
              <span className="status-card__toggle-knob" />
            </button>
          </div>

          {flagCase && (
            <>
              <span className="dues__section-label" style={{ padding: '0 16px' }}>
                CURRENT TRIP
              </span>
              <div className="dues-list" style={{ margin: '0 16px', flexShrink: 0 }}>
                <div className="dues-row">
                  <div className="dues-row__top">
                    <div className="dues-row__bubble bubble--requested">
                      <span>{initialsOf(flagCase.riderName)}</span>
                    </div>
                    <Link to="/dues" className="dues-row__body" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="dues-row__head">
                        <span className="dues-row__name">{flagCase.riderName}</span>
                        <span className="dues-row__amount">₹{flagCase.amount}</span>
                      </div>
                      <div className="dues-row__drop">
                        <MapPin size={13} color="#AAAAAA" />
                        <span>{FLAG_CASE_LOCATION}</span>
                      </div>
                      <div className="dues-row__meta">
                        <span className="badge badge--requested">Alternate payment</span>
                        <span className="dues-row__caption">{relativeTime(flagCase.createdAt)}</span>
                      </div>
                    </Link>
                    <button
                      type="button"
                      aria-label={isFlagged ? 'Remove flag' : 'Flag this rider'}
                      onClick={() => toggleCaptainFlag(FLAG_CASE_ID)}
                      style={{
                        border: 0,
                        background: 'transparent',
                        padding: 8,
                        marginRight: -8,
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <Flag size={17} color={isFlagged ? '#EA4335' : '#1A1A1A'} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="tile-row">
            <div className="tile">
              <div className="tile__text">
                <span className="tile__label">Today's target</span>
                <span className="tile__value" style={{ color: '#34A853' }}>
                  ₹500
                </span>
              </div>
              <ChevronRight size={17} color="#888888" />
            </div>
            <div className="tile">
              <div className="tile__text">
                <span className="tile__label">Time left</span>
                <span className="tile__value" style={{ color: '#4285F4' }}>
                  12h 45m
                </span>
              </div>
              <ChevronRight size={17} color="#888888" />
            </div>
          </div>

          <div className="refer-card">
            <div className="refer-card__text">
              <span className="refer-card__title">Refer &amp; Earn</span>
              <span className="refer-card__note">Refer a friend and earn ₹750</span>
            </div>
            <img className="refer-card__illustration" src={referIllustration} alt="" />
            <ChevronRight size={17} color="#888888" />
          </div>
        </div>

        <div className="home__nav">
          {NAV_ITEMS.map(({ key, Icon, label, href }) => {
            const active = key === 'home'
            return (
              <Link key={key} to={href} className="home__nav-item">
                <Icon size={21} color={active ? '#E5A800' : '#888888'} />
                <span
                  className="home__nav-label"
                  style={{ color: active ? '#E5A800' : '#888888', fontWeight: active ? 700 : 400 }}
                >
                  {label}
                </span>
                {key === 'dues' && <span className="home__nav-badge">3</span>}
              </Link>
            )
          })}
        </div>
        <div className="home__home-indicator">
          <div className="home__home-indicator-bar" />
        </div>
      </div>
    </PhoneFrame>
  )
}
