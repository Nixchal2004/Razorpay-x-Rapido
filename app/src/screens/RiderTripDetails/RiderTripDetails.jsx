import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleHelp,
  Eye,
  EyeOff,
  Phone,
  ShieldCheck,
  User,
} from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import mapImage from '../../assets/map-bangalore.png'
import './RiderTripDetails.css'

const EMERGENCY_CODE = 'ABC123'

// How long the screen holds before auto-advancing (ms). Matches the
// prototype's fixed 5000ms timer.
const AUTO_ADVANCE_MS = 5000

// Where this screen leads once the trip's payment fails to settle.
// "C. Final Fare Moved to Dues.dc.html", implemented as RiderFareMovedToDues.
const NEXT_ROUTE = '/rider/fare-moved-to-dues'

// Rider-flow trip-details screen — port of `R. Final Emergency.dc.html`.
// Everything on this screen is static except the eye toggle on the
// Emergency Code card, exactly as the source specifies; it auto-advances
// on a fixed timer, with no other navigation available.
export default function RiderTripDetails() {
  const navigate = useNavigate()
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => navigate(NEXT_ROUTE), AUTO_ADVANCE_MS)
    return () => clearTimeout(timer)
  }, [navigate])

  const toggleCode = () => {
    if (navigator.vibrate) navigator.vibrate(8)
    setRevealed((v) => !v)
  }

  return (
    <PhoneFrame background="#FAFAFA">
      <div className="rtd">
        <div className="rtd__statusbar">
          <StatusBar />
        </div>

        <div className="rtd__appbar">
          <span className="rtd__icon-slot">
            <ChevronLeft size={24} color="#1A1A1A" />
          </span>
          <span className="rtd__title">Trip Details</span>
          <span className="rtd__help">
            <CircleHelp size={21} color="#1A1A1A" />
            <span>Help</span>
          </span>
        </div>

        <div className="rtd__scroll">
          <div className="payment-banner">
            <div className="payment-banner__icon">
              <CircleAlert size={21} color="#1A1A1A" />
            </div>
            <div className="payment-banner__text">
              <span className="payment-banner__title">Payment Pending</span>
              <span className="payment-banner__body">
                Payment is not completed yet. Please make payment to your pilot.
              </span>
            </div>
          </div>

          <div className="trip-card">
            <div className="trip-card__top">
              <div className="trip-card__meta">
                <span className="trip-card__type">
                  Bike Ride · <span className="trip-card__status">Reached Destination</span>
                </span>
                <span className="trip-card__time">Today, 10:32 AM</span>
              </div>
              <span className="trip-card__id">Ride ID : RD1748392045</span>
            </div>
            <div className="route-rail">
              <span className="route-rail__line" />
              <div className="route-rail__stop">
                <span className="route-rail__dot route-rail__dot--pickup" />
                <div className="route-rail__text">
                  <span className="route-rail__label route-rail__label--pickup">Pickup</span>
                  <span className="route-rail__value">Koramangala, Bangalore - 560034</span>
                </div>
              </div>
              <div className="route-rail__stop">
                <span className="route-rail__dot route-rail__dot--drop" />
                <div className="route-rail__text">
                  <span className="route-rail__label route-rail__label--drop">Drop</span>
                  <span className="route-rail__value">
                    HSR Sector 2,
                    <br />
                    Bangalore - 560102
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="trip-map" style={{ backgroundImage: `url(${mapImage})` }}>
            <span className="trip-map__pin-label">You are here</span>
          </div>

          <div className="pilot-card">
            <span className="pilot-card__heading">Pilot Details</span>
            <div className="pilot-card__row">
              <div className="pilot-card__avatar">
                <User size={28} color="#888888" />
              </div>
              <div className="pilot-card__info">
                <span className="pilot-card__name">Ramesh Kumar</span>
                <div className="pilot-card__rating">
                  <span className="pilot-card__star">★</span>
                  <span className="pilot-card__rating-value">4.8</span>
                  <span className="pilot-card__dot">·</span>
                  <span className="pilot-card__rides">1257 rides</span>
                </div>
                <span className="pilot-card__vehicle">KA05LM1234 · Hero Splendor Plus</span>
              </div>
              <span className="pilot-card__phone-btn">
                <Phone size={19} color="#1A1A1A" />
              </span>
            </div>
          </div>

          <div className="fare-card">
            <div className="fare-card__body">
              <span className="fare-card__heading">Fare Details</span>
              <div className="fare-card__lines">
                <div className="fare-card__line">
                  <span>Base Fare</span>
                  <span>₹85.00</span>
                </div>
                <div className="fare-card__line">
                  <span>Time Fare (12 min)</span>
                  <span>₹18.00</span>
                </div>
                <div className="fare-card__line">
                  <span>Distance Fare (5.2 km)</span>
                  <span>₹17.00</span>
                </div>
              </div>
              <div className="fare-card__hairline" />
              <div className="fare-card__total">
                <span>Total Fare</span>
                <span>₹120.00</span>
              </div>
            </div>
            <div className="fare-card__status">
              <span>Payment Status</span>
              <span>Payment Pending</span>
            </div>
          </div>

          <div className="safety-strip">
            <div className="safety-strip__icon">
              <ShieldCheck size={19} color="#4285F4" />
            </div>
            <div className="safety-strip__text">
              <span className="safety-strip__title">Your safety is our priority</span>
              <span className="safety-strip__body">
                We've verified your trip for a safe and reliable experience.
              </span>
            </div>
            <ChevronRight size={19} color="#4285F4" />
          </div>

          <div className="emergency-card">
            <div className="emergency-card__row">
              <div className="emergency-card__lead">
                <div className="emergency-card__icon">
                  <ShieldCheck size={17} color="#FAFAFA" />
                </div>
                <div className="emergency-card__lead-text">
                  <span className="emergency-card__heading">EMERGENCY CODE</span>
                  <span className="emergency-card__caption">
                    Share only with your Captain only when payment fails.
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="emergency-card__eye-btn"
                onClick={toggleCode}
                aria-label={revealed ? 'Hide emergency code' : 'Show emergency code'}
                aria-pressed={revealed}
              >
                {revealed ? <EyeOff size={20} color="#1A1A1A" /> : <Eye size={20} color="#1A1A1A" />}
              </button>
            </div>
            <div className="emergency-card__cells">
              {EMERGENCY_CODE.split('').map((ch, i) => (
                <span key={i} className={`emergency-card__cell${revealed ? ' emergency-card__cell--revealed' : ''}`}>
                  {revealed ? ch : '•'}
                </span>
              ))}
            </div>
            <span className="emergency-card__note">
              {revealed
                ? 'Read this out to your Captain only when they ask to confirm a due.'
                : 'Tap the eye to reveal your code when your Captain asks for it.'}
            </span>
          </div>
        </div>

        <div className="rtd__home-indicator">
          <div className="rtd__home-indicator-bar" />
        </div>
      </div>
    </PhoneFrame>
  )
}
