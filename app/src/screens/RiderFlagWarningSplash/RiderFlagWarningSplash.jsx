import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import { useHaptics } from '../../hooks/useHaptics'
import './RiderFlagWarningSplash.css'

// How long the splash holds before auto-advancing (ms). Matches the
// prototype's `autoAdvanceSeconds` default of 2.2.
const AUTO_ADVANCE_MS = 2200

const NEXT_ROUTE = '/rider/flag-warning'

// Entry point for the Rider Flag Warning flow — port of
// `R. Final Flag Warning Splash.dc.html`. Visually identical in structure
// to the other Rider splash (amber field, wordmark, dot loader), but a
// distinct self-contained component since the two splashes in the source
// bundle are separate files with their own destinations, not one reused
// screen.
export default function RiderFlagWarningSplash() {
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
        className="rfws"
        aria-label="Continue"
        onClick={() => {
          buzz('tap')
          navigate(NEXT_ROUTE)
        }}
      >
        <div className="rfws__statusbar">
          <StatusBar />
        </div>

        <div className="rfws__body">
          <div className="rfws__mark">
            <span>rapido</span>
          </div>
          <div className="rfws__loader" role="status" aria-label="Loading">
            <span className="rfws__dot" style={{ animationDelay: '0ms' }} />
            <span className="rfws__dot" style={{ animationDelay: '140ms' }} />
            <span className="rfws__dot" style={{ animationDelay: '280ms' }} />
          </div>
        </div>

        <div className="rfws__spacer" />
      </button>
    </PhoneFrame>
  )
}
