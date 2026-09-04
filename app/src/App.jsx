import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TripDetails from './screens/TripDetails/TripDetails'
import Splash from './screens/Splash'
import CaptainHome from './screens/CaptainHome/CaptainHome'
import DuesLedger from './screens/DuesLedger/DuesLedger'

// Two independent captain-facing use cases from the handoff, each with its
// own entry point — neither one runs through the other:
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
      </Routes>
    </BrowserRouter>
  )
}
