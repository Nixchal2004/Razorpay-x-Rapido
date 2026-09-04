import { useNavigate } from 'react-router-dom'
import { Bike, Briefcase, ChevronRight, Clock, LayoutGrid, Plane, ReceiptText, Search, UserRound } from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import mapImage from '../../assets/map-bangalore.png'
import { useCases } from '../../state/DuesContext'
import { CaseState } from '../../state/duesEngine'
import './RiderHome.css'

const OUTSTANDING_STATES = [CaseState.CONFIRMED, CaseState.FLAGGED, CaseState.ALT_PAYMENT_REQUESTED]

const PLACES = [
  { Icon: Clock, name: 'HSR Layout Sector 2', detail: '27th Main Road, Bangalore 560102' },
  { Icon: Clock, name: 'MG Road Metro Station', detail: 'Mahatma Gandhi Road, Bangalore 560001' },
  { Icon: Briefcase, name: 'Work', detail: 'Embassy Tech Village, Devarabisanahalli' },
]

const NAV_ITEMS = [
  { key: 'ride', label: 'Ride', Icon: Bike, active: true },
  { key: 'dues', label: 'Dues', Icon: ReceiptText },
  { key: 'services', label: 'All Services', Icon: LayoutGrid },
  { key: 'travel', label: 'Travel', Icon: Plane },
  { key: 'profile', label: 'Profile', Icon: UserRound },
]

// "4. Rider Dues Dashboard.dc.html" — the same destination the Flag
// Warning flow's "View flagged dues" and Dues nav item also target.
const DUES_DASHBOARD_ROUTE = '/rider/dues-dashboard'

// Rider Home — port of `3. Rider Home Dues Popup.dc.html`. The real rider
// home screen (map, pickup point, search, recent places, bottom nav) with
// the dues popup card added on top, per the source's own instruction to
// leave the rest of the screen untouched. The card has no dismiss control
// in the source markup — a `dismiss` handler is computed in its script but
// never wired to anything rendered — so it's always visible here too, and
// the whole card is the one tap target (matching the source's `onClick` on
// the card itself, not a separate close button).
//
// Count/amount now come from the shared Rapido Dues case store instead of
// being hardcoded — the source never designed a zero-dues state for this
// card (its count prop was never zero), so it's only rendered when there
// is at least one outstanding case, rather than showing "0 dues pending".
export default function RiderHome() {
  const navigate = useNavigate()
  const cases = useCases()
  const outstanding = cases.filter((c) => OUTSTANDING_STATES.includes(c.state))
  const duesCount = outstanding.length
  const duesAmount = outstanding.reduce((sum, c) => sum + c.amount, 0)

  return (
    <PhoneFrame background="#FFFFFF">
      <div className="rh">
        <div className="rh__statusbar">
          <StatusBar />
        </div>

        <div className="rh__card-row">
          {duesCount > 0 && (
            <button type="button" className="dues-card" onClick={() => navigate(DUES_DASHBOARD_ROUTE)}>
              <div className="dues-card__stripe" />
              <div className="dues-card__row">
                <div className="dues-card__icon">
                  <span>₹</span>
                </div>
                <div className="dues-card__text">
                  <span className="dues-card__headline">
                    {duesCount} {duesCount === 1 ? 'due' : 'dues'} pending · ₹{duesAmount}
                  </span>
                  <span className="dues-card__subtext">Tap to view your Dues dashboard</span>
                </div>
                <ChevronRight size={18} color="#888888" />
              </div>
            </button>
          )}
        </div>

        <div className="rh__map" style={{ backgroundImage: `url(${mapImage})` }}>
          <div className="rh__pickup-label">
            <div className="rh__pickup-pill">
              <span>Pickup Point</span>
            </div>
            <span className="rh__pickup-dot" />
          </div>
          <div className="rh__pickup-bar">
            <span className="rh__pickup-bar-dot" />
            <div className="rh__pickup-bar-text">
              <span className="rh__pickup-bar-label">PICKUP POINT</span>
              <span className="rh__pickup-bar-value">80 Feet Road, Koramangala 5th Block</span>
            </div>
            <span className="rh__pickup-bar-change">Change</span>
          </div>
        </div>

        <div className="rh__search-section">
          <div className="rh__search-bar">
            <Search size={18} color="#888888" />
            <span>Where do you want to go?</span>
          </div>
          <div className="rh__places">
            {PLACES.map((place, i) => (
              <div key={place.name} className={`place-row${i < PLACES.length - 1 ? ' place-row--divider' : ''}`}>
                <div className="place-row__icon">
                  <place.Icon size={16} color="#888888" />
                </div>
                <div className="place-row__text">
                  <span className="place-row__name">{place.name}</span>
                  <span className="place-row__detail">{place.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rh__nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className="rh__nav-item"
              onClick={item.key === 'dues' ? () => navigate(DUES_DASHBOARD_ROUTE) : undefined}
            >
              <item.Icon size={21} color={item.active ? '#E5A800' : '#888888'} />
              <span className="rh__nav-label" style={{ color: item.active ? '#E5A800' : '#888888', fontWeight: item.active ? 700 : 400 }}>
                {item.label}
              </span>
              {item.key === 'dues' && <span className="rh__nav-dot" />}
            </button>
          ))}
        </div>
        <div className="rh__home-indicator">
          <div className="rh__home-indicator-bar" />
        </div>
      </div>
    </PhoneFrame>
  )
}
