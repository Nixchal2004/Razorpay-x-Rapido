import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame'
import StatusBar from '../components/StatusBar'
import './Splash.css'

// How long the splash holds before auto-advancing (ms). Matches the
// prototype's `holdMs` default of 1800.
const HOLD_MS = 1800

// Standalone entry point for the Splash flow (`C. Final Splash.dc.html`).
// `to`/`continueLabel` are additive — every existing caller (the `/splash`
// route) omits them and gets the exact prior behaviour (-> Captain Home).
// The Dues ledger flow reuses this same screen with `to="/dues"`, since the
// prototype's splash design has no destination baked into its markup.
export default function Splash({ to = '/home', continueLabel = 'Continue to home' }) {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate(to), HOLD_MS)
    return () => clearTimeout(timer)
  }, [navigate, to])

  return (
    <PhoneFrame background="#E0A50B">
      <div className="splash">
        <div className="splash__statusbar">
          <StatusBar />
        </div>

        <div className="splash__body">
          <div className="splash__mark">
            <span>rapido</span>
          </div>
          <div className="splash__loader" role="status" aria-label="Loading">
            <span className="splash__dot" style={{ animationDelay: '0ms' }} />
            <span className="splash__dot" style={{ animationDelay: '140ms' }} />
            <span className="splash__dot" style={{ animationDelay: '280ms' }} />
          </div>
        </div>

        <button
          type="button"
          className="splash__tap-target"
          aria-label={continueLabel}
          onClick={() => navigate(to)}
        />
      </div>
    </PhoneFrame>
  )
}
