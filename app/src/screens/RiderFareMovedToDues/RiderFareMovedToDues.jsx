import { Link } from 'react-router-dom'
import { Handshake } from 'lucide-react'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import { useHaptics } from '../../hooks/useHaptics'
import './RiderFareMovedToDues.css'

const AMOUNT = '₹120'
const CAPTAIN_NAME = 'Ramesh'

// Rider "thank you" screen — port of `C. Final Fare Moved to Dues.dc.html`
// (misnamed with a "C." prefix in the source bundle, but its content and
// the link into it from `R. Final Emergency.dc.html`'s auto-advance make it
// unambiguously the next screen in the Rider Emergency flow). No auto-
// advance of its own; it waits on the CTA tap.
//
// The CTA reads "Find new rides" and links to "0. Captain Home.dc.html" in
// the source — captain-flavored copy on what is otherwise a rider screen,
// most likely reused/copy-pasted while authoring the prototype. Reproduced
// literally per instructions rather than corrected, routed to the existing
// Captain Home screen at /home since that's the prototype's literal target.
export default function RiderFareMovedToDues() {
  const buzz = useHaptics()

  return (
    <PhoneFrame background="#FAFAFA">
      <div className="fmd">
        <div className="fmd__statusbar">
          <StatusBar />
        </div>

        <div className="fmd__body">
          <div className="fmd__mark">
            <Handshake size={34} color="#B98A00" />
          </div>

          <div className="fmd__heading-group">
            <span className="fmd__headline">Say thanks — {CAPTAIN_NAME} trusted you to pay later</span>
            <span className="fmd__subline">Your fare has moved to Dues.</span>
          </div>

          <div className="fmd__amount-group">
            <span className="fmd__amount">{AMOUNT}</span>
            <span className="fmd__amount-note">
              You're covered — your payout isn't affected while this is pending
            </span>
          </div>
        </div>

        <div className="fmd__footer">
          <Link to="/home" className="fmd__cta" onClick={() => buzz('tap')}>
            Find new rides
          </Link>
        </div>

        <div className="fmd__home-indicator">
          <div className="fmd__home-indicator-bar" />
        </div>
      </div>
    </PhoneFrame>
  )
}
