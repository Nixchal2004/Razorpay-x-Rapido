import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import { useHaptics } from '../../hooks/useHaptics'
import './RiderHomeSplash.css'

// How long the splash holds before auto-advancing (ms). Matches the
// prototype's `autoAdvanceSeconds` default of 2.2.
const AUTO_ADVANCE_MS = 2200

const NEXT_ROUTE = '/rider/home'

// Entry point for the Rider Home flow — port of `R. Final Splash.dc.html`.
// Same amber-splash structure as the other Rider splashes, kept as its own
// component since each is a distinct file in the source with its own
// destination.
export default function RiderHomeSplash() {
  const navigate = useNavigate()
  const buzz = useHaptics()

  useEffect(() => {
    const timer = setTimeout(() => navigate(NEXT_ROUTE), AUTO_ADVANCE_MS)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <PhoneFrame background="#E0A70B">
      <button
        type="button"
        className="rhs"
        aria-label="Continue"
        onClick={() => {
          buzz('tap')
          navigate(NEXT_ROUTE)
        }}
      >
        <div className="rhs__statusbar">
          <StatusBar />
        </div>

        <div className="rhs__body">
          <div className="rhs__mark">
            <span>rapido</span>
          </div>
          <div className="rhs__loader" role="status" aria-label="Loading">
            <span className="rhs__dot" style={{ animationDelay: '0ms' }} />
            <span className="rhs__dot" style={{ animationDelay: '140ms' }} />
            <span className="rhs__dot" style={{ animationDelay: '280ms' }} />
          </div>
        </div>

        <div className="rhs__spacer" />
      </button>
    </PhoneFrame>
  )
}
