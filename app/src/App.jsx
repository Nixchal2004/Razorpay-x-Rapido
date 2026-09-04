import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TripDetails from './screens/TripDetails/TripDetails'
import Splash from './screens/Splash'
import CaptainHome from './screens/CaptainHome/CaptainHome'
import DuesLedger from './screens/DuesLedger/DuesLedger'
import RiderTripDetails from './screens/RiderTripDetails/RiderTripDetails'
import RiderFareMovedToDues from './screens/RiderFareMovedToDues/RiderFareMovedToDues'
import RiderFlagWarningSplash from './screens/RiderFlagWarningSplash/RiderFlagWarningSplash'
import RiderFlagWarning from './screens/RiderFlagWarning/RiderFlagWarning'

// --- Captain side: two independent use cases from the handoff, each with
// its own entry point — neither one runs through the other:
//
//   Use case 1 — Emergency flow:
//     "C. Final Emergency.dc.html":  /       -> Trip Details -> Emergency sheet -> outcome
//     "C. Final Splash.dc.html":     /splash -> Splash (auto-advances)
//
//   Use case 2 — Dues ledger flow:
//     /dues/splash                    -> Splash (auto-advances into the ledger)
//     "2. Captain Dues flow.dc.html": /dues -> ledger (Pending/Resolved) -> trip detail
//
// Both use cases terminate at Captain Home ("0. Captain Home.dc.html" in the
// bundle) — a shared destination, not a link between the two use cases. The
// bottom nav on Captain Home and the Dues ledger cross-links the two. Splash
// is one reusable screen (its prototype has no destination baked into its
// markup) parameterized per entry point via the `to` prop.
//
// --- Rider side: first use case being added, frozen Captain routes above
// are untouched.
//
//   "R. Final Emergency.dc.html":            /rider/emergency -> RiderTripDetails
//     (auto-advances after 5s; the only interactive element on the screen
//     is the Emergency Code eye toggle, matching the source exactly)
//   "C. Final Fare Moved to Dues.dc.html":   /rider/fare-moved-to-dues -> RiderFareMovedToDues
//     (the "C." prefix is a naming artifact in the source bundle — the
//     content and the auto-advance link into it from RiderTripDetails make
//     it unambiguously part of this Rider flow, not a Captain screen)
//
// RiderFareMovedToDues' own CTA ("Find new rides") links to Captain Home in
// the source — reproduced literally rather than corrected.
//
//   Use case 2 — Flag Warning flow:
//     "R. Final Flag Warning Splash.dc.html": /rider/flag-warning-splash -> RiderFlagWarningSplash
//     "5. Rider Flag Warning.dc.html":        /rider/flag-warning -> RiderFlagWarning
//       (warning modal -> payment-method sheet -> success panel, all in one
//       component. "View flagged dues" and the Dues nav item target
//       "4. Rider Dues Dashboard.dc.html", out of scope for this flow, so
//       /rider/dues-dashboard is reserved but unimplemented, same treatment
//       as other out-of-scope targets)
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TripDetails />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/home" element={<CaptainHome />} />
        <Route
          path="/dues/splash"
          element={<Splash to="/dues" continueLabel="Continue to Dues" />}
        />
        <Route path="/dues" element={<DuesLedger />} />
        <Route path="/rider/emergency" element={<RiderTripDetails />} />
        <Route path="/rider/fare-moved-to-dues" element={<RiderFareMovedToDues />} />
        <Route path="/rider/flag-warning-splash" element={<RiderFlagWarningSplash />} />
        <Route path="/rider/flag-warning" element={<RiderFlagWarning />} />
      </Routes>
    </BrowserRouter>
  )
}
