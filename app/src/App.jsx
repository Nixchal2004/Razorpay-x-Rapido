import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DuesProvider } from './state/DuesContext'
import Launcher from './screens/Launcher/Launcher'
import TripDetails from './screens/TripDetails/TripDetails'
import Splash from './screens/Splash'
import CaptainHome from './screens/CaptainHome/CaptainHome'
import DuesLedger from './screens/DuesLedger/DuesLedger'
import RiderTripDetails from './screens/RiderTripDetails/RiderTripDetails'
import RiderFareMovedToDues from './screens/RiderFareMovedToDues/RiderFareMovedToDues'
import RiderFlagWarningSplash from './screens/RiderFlagWarningSplash/RiderFlagWarningSplash'
import RiderFlagWarning from './screens/RiderFlagWarning/RiderFlagWarning'
import RiderRestrictedSplash from './screens/RiderRestrictedSplash/RiderRestrictedSplash'
import RiderAccountRestricted from './screens/RiderAccountRestricted/RiderAccountRestricted'
import RiderHomeSplash from './screens/RiderHomeSplash/RiderHomeSplash'
import RiderHome from './screens/RiderHome/RiderHome'
import RiderDuesDashboard from './screens/RiderDuesDashboard/RiderDuesDashboard'
import RiderDues from './screens/RiderDues/RiderDues'
import RiderDuesCleared from './screens/RiderDuesCleared/RiderDuesCleared'

// --- Launcher: the app's single top-level entry point (/). Not part of
// any prototype — connects the 7 otherwise-isolated flow entry points
// below (nothing in the app links into any of them) so the whole bundle
// is reachable as one navigable demo instead of only by typing a URL.
//
// --- Captain side: two independent use cases from the handoff, each with
// its own entry point — neither one runs through the other:
//
//   Use case 1 — Emergency flow:
//     "C. Final Emergency.dc.html":  /captain/emergency -> Trip Details -> Emergency sheet -> outcome
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
//       "4. Rider Dues Dashboard.dc.html", implemented as part of the Home
//       flow below at /rider/dues-dashboard)
//
//   Use case 3 — Account Restricted flow:
//     "R. Final Restricted Splash.dc.html":  /rider/restricted-splash -> RiderRestrictedSplash
//     "R. Final Account Restricted.dc.html": /rider/account-restricted -> RiderAccountRestricted
//       (full-screen hard gate, no dismiss -> payment-method sheet ->
//       success panel, same in-place treatment as Flag Warning's success
//       panel. Its own "Book a ride" targets
//       "3. Rider Home Dues Popup.dc.html", out of scope for this flow, so
//       /rider/home-dues-popup is reserved but unimplemented)
//
//   Use case 4 — Home flow:
//     "R. Final Splash.dc.html":            /rider/home-splash -> RiderHomeSplash
//     "3. Rider Home Dues Popup.dc.html":   /rider/home -> RiderHome
//       (the actual rider home screen — map, pickup point, search, recent
//       places, bottom nav — with the dues popup card added on top, per the
//       source's own instruction to leave the rest of the screen untouched.
//       The card has no dismiss control in the source markup, so it's
//       always visible here too. Tapping the card or the Dues nav item
//       targets the Dues Dashboard below — the same destination the Flag
//       Warning flow's "View flagged dues" and Dues nav item also target)
//     "4. Rider Dues Dashboard.dc.html":    /rider/dues-dashboard -> RiderDuesDashboard
//       (Pending/Flagged/Settled tabs over the full due list. The flag
//       strip's "Screen 8" destination is a stub in the source itself — a
//       toast, not a real screen — reproduced literally)
//     "Rider Dues.dc.html":                 /rider/dues -> RiderDues
//       (a confirmed pending row's target; now carries `?caseId=` so it
//       shows that specific case's real timeline/amount instead of the
//       source's original always-the-same-fixed-screen behavior — see
//       state/duesEngine.js)
//     "7. Rider Dues Cleared.dc.html":      /rider/dues-cleared -> RiderDuesCleared
//       (reached from paying a due in either RiderDuesDashboard or
//       RiderDues; both now pass `?caseId=`, so the "Flag removed" vs
//       "Payment settled" copy is driven by whether that case was
//       actually FLAGGED before being paid, replacing the source's
//       always-true `hardBlock` default)
export default function App() {
  return (
    <DuesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Launcher />} />
          <Route path="/captain/emergency" element={<TripDetails />} />
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
          <Route path="/rider/restricted-splash" element={<RiderRestrictedSplash />} />
          <Route path="/rider/account-restricted" element={<RiderAccountRestricted />} />
          <Route path="/rider/home-splash" element={<RiderHomeSplash />} />
          <Route path="/rider/home" element={<RiderHome />} />
          <Route path="/rider/dues-dashboard" element={<RiderDuesDashboard />} />
          <Route path="/rider/dues" element={<RiderDues />} />
          <Route path="/rider/dues-cleared" element={<RiderDuesCleared />} />
        </Routes>
      </BrowserRouter>
    </DuesProvider>
  )
}
