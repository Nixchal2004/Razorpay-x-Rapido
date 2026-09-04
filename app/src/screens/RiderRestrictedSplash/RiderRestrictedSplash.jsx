import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import { useHaptics } from '../../hooks/useHaptics'
import './RiderRestrictedSplash.css'

// How long the splash holds before auto-advancing (ms). Matches the
// prototype's `autoAdvanceSeconds` default of 2.2.
const AUTO_ADVANCE_MS = 2200

const NEXT_ROUTE = '/rider/account-restricted'

// Entry point for the Rider Account Restricted flow — port of
// `R. Final Restricted Splash.dc.html`. Same amber-splash structure as the
// other two Rider splashes, kept as its own component since each is a
// distinct file in the source with its own destination. The source also
// defines a `statusLine` prop ("Checking your account") that's never
// referenced anywhere in its markup — dead, so not rendered here either.
export default function RiderRestrictedSplash() {
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
        className="rrs"
        aria-label="Continue"
        onClick={() => {
          buzz('tap')
          navigate(NEXT_ROUTE)
        }}
      >
        <div className="rrs__statusbar">
          <StatusBar />
        </div>

        <div className="rrs__body">
          <div className="rrs__mark">
            <span>rapido</span>
          </div>
          <div className="rrs__loader" role="status" aria-label="Loading">
            <span className="rrs__dot" style={{ animationDelay: '0ms' }} />
            <span className="rrs__dot" style={{ animationDelay: '140ms' }} />
            <span className="rrs__dot" style={{ animationDelay: '280ms' }} />
          </div>
        </div>

        <div className="rrs__spacer" />
      </button>
    </PhoneFrame>
  )
}
