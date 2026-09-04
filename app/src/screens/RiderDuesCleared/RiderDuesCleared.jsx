import { useMemo } from 'react'
import { Check } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import './RiderDuesCleared.css'

const DEFAULT_AMOUNT = '₹325'

// Rider Dues Cleared — port of `7. Rider Dues Cleared.dc.html`. Reached
// from paying off a flagged due in the Dashboard's inline pay sheet, and
// from paying off the pending due in Rider Dues. Both call sites pass only
// an `?amount=` query param — `hardBlock` (which the source uses to choose
// between "flag removed" and plain "payment settled" copy) is a component
// prop with no query-string equivalent, so it's never actually overridden
// by either caller and always falls back to the source's own default of
// `true`. That means this screen always shows "Flag removed" copy here,
// even when reached from clearing an ordinary (non-flagged) pending due —
// reproduced literally as an oddity in the source rather than corrected.
export default function RiderDuesCleared() {
  const navigate = useNavigate()
  const location = useLocation()

  const amount = useMemo(() => {
    const q = new URLSearchParams(location.search).get('amount')
    return q ? `₹${q.replace(/[^0-9]/g, '')}` : DEFAULT_AMOUNT
  }, [location.search])

  return (
    <PhoneFrame background="#E8F5E9">
      <div className="rdc">
        <div className="rdc__statusbar">
          <StatusBar />
        </div>

        <div className="rdc__body">
          <div className="rdc__ring">
            <div className="rdc__circle">
              <Check size={32} color="#FFFFFF" />
            </div>
          </div>

          <div className="rdc__text-group">
            <span className="rdc__headline">You're all cleared</span>
            <span className="rdc__supporting">Your flag has been removed. You can book rides again.</span>
          </div>

          <div className="rdc__pill">
            <span className="rdc__pill-label">Flag removed · Paid</span>
            <span className="rdc__pill-amount">{amount}</span>
          </div>
        </div>

        <div className="rdc__footer">
          <button type="button" className="btn btn--primary" onClick={() => navigate('/rider/home')}>
            Book ride
          </button>
        </div>
        <div className="rdc__home-indicator">
          <div className="rdc__home-indicator-bar" />
        </div>
      </div>
    </PhoneFrame>
  )
}
