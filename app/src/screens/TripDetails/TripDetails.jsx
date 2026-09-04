import { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  CircleHelp,
  User,
  Phone,
  MessageSquare,
  Navigation,
  ChevronDown,
} from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import EmergencySheet from './EmergencySheet'
import { useHaptics } from '../../hooks/useHaptics'
import mapImage from '../../assets/map-bangalore.png'
import './TripDetails.css'

const RIDER = {
  name: 'Ramesh Kumar',
  rating: '4.8',
  rides: 32,
  phone: '+91 98765 43210',
  pickup: 'Koramangala,\nBangalore - 560034',
  drop: 'HSR Sector 2,\nBangalore - 560102',
  fare: '₹120.00',
}

export default function TripDetails() {
  const navigate = useNavigate()
  const buzz = useHaptics()
  const [sheetOpen, setSheetOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  const notify = useCallback((message) => {
    clearTimeout(toastTimer.current)
    setToast(message)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  const tapBuzz = () => buzz('tap')

  return (
    <PhoneFrame background="#FAFAFA">
      <div className="trip">
        <div className="trip__statusbar">
          <StatusBar />
        </div>

        <div className="trip__appbar">
          <button
            type="button"
            className="trip__icon-btn"
            aria-label="Go back"
            onClick={() => {
              tapBuzz()
              navigate(-1)
            }}
          >
            <ChevronLeft size={24} color="#1A1A1A" />
          </button>
          <span className="trip__title">Rider Details</span>
          <button type="button" className="trip__help-btn" onClick={tapBuzz}>
            <CircleHelp size={21} color="#1A1A1A" />
            <span>Help</span>
          </button>
        </div>

        <div className="trip__scroll">
          <div className="rider-card">
            <div className="rider-card__top">
              <div className="rider-card__avatar">
                <User size={28} color="#888888" />
              </div>
              <div className="rider-card__info">
                <span className="rider-card__name">{RIDER.name}</span>
                <div className="rider-card__meta">
                  <span className="rider-card__star">★</span>
                  <span className="rider-card__rating">{RIDER.rating}</span>
                  <span className="rider-card__dot">·</span>
                  <span className="rider-card__rides">{RIDER.rides} rides</span>
                </div>
                <div className="rider-card__contact">
                  <Phone size={15} color="#1A1A1A" />
                  <span className="rider-card__phone">{RIDER.phone}</span>
                  <span className="rider-card__divider" />
                  <button
                    type="button"
                    className="rider-card__msg-btn"
                    aria-label="Message rider"
                    onClick={tapBuzz}
                  >
                    <MessageSquare size={14} color="#1A1A1A" />
                  </button>
                </div>
              </div>
            </div>

            <div className="rider-card__hairline" />

            <div className="rider-card__route">
              <div className="route-rail">
                <span className="route-rail__line" />
                <div className="route-rail__stop">
                  <span className="route-rail__dot route-rail__dot--pickup" />
                  <div className="route-rail__text">
                    <span className="route-rail__label route-rail__label--pickup">Pickup</span>
                    <span className="route-rail__address">
                      {RIDER.pickup.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i === 0 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="route-rail__stop">
                  <span className="route-rail__dot route-rail__dot--drop" />
                  <div className="route-rail__text">
                    <span className="route-rail__label route-rail__label--drop">Drop</span>
                    <span className="route-rail__address">
                      {RIDER.drop.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i === 0 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
              <button type="button" className="navigate-btn" onClick={tapBuzz}>
                <Navigation size={16} color="#1A1A1A" />
                <span>Navigate</span>
              </button>
            </div>
          </div>

          <div className="trip-map" style={{ backgroundImage: `url(${mapImage})` }} />

          <div className="fare-card">
            <div className="fare-card__amount">
              <span className="fare-card__label">Total Fare</span>
              <span className="fare-card__value">{RIDER.fare}</span>
            </div>
            <button type="button" className="fare-card__details-btn" onClick={tapBuzz}>
              <span>Fare details</span>
              <ChevronDown size={17} color="#4285F4" />
            </button>
          </div>

          <div className="trip__actions">
            <button type="button" className="btn btn--primary" onClick={tapBuzz}>
              Payment Confirmed
            </button>
            <button
              type="button"
              className="btn btn--emergency"
              onClick={() => {
                buzz('tap')
                setSheetOpen(true)
              }}
            >
              Emergency
            </button>
          </div>
        </div>

        <div className="trip__home-indicator">
          <div className="trip__home-indicator-bar" />
        </div>

        <EmergencySheet
          open={sheetOpen}
          onOpenChange={setSheetOpen}
          onNotify={notify}
          onFindNewRides={() => navigate('/home')}
        />

        {toast && (
          <div className="trip__toast" key={toast}>
            <span>{toast}</span>
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}
