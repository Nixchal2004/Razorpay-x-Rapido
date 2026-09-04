import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  Bike,
  ChevronRight,
  Flag,
  Lock,
  ReceiptText,
  UserRound,
} from 'lucide-react'
import './Launcher.css'

const CAPTAIN_FLOWS = [
  {
    Icon: AlertTriangle,
    title: 'Emergency flow',
    note: 'Trip details → Emergency sheet → outcome',
    to: '/captain/emergency',
  },
  {
    Icon: ReceiptText,
    title: 'Dues ledger flow',
    note: 'Splash → Pending/Resolved ledger → trip detail',
    to: '/dues/splash',
  },
  {
    Icon: Bike,
    title: 'Captain Home',
    note: 'Splash → Home',
    to: '/splash',
  },
]

const RIDER_FLOWS = [
  {
    Icon: AlertTriangle,
    title: 'Emergency flow',
    note: 'Trip details → Fare moved to Dues',
    to: '/rider/emergency',
  },
  {
    Icon: Flag,
    title: 'Flag Warning flow',
    note: 'Splash → warning → pay → cleared',
    to: '/rider/flag-warning-splash',
  },
  {
    Icon: Lock,
    title: 'Account Restricted flow',
    note: 'Splash → hard gate → pay → cleared',
    to: '/rider/restricted-splash',
  },
  {
    Icon: UserRound,
    title: 'Home + Dues Dashboard flow',
    note: 'Splash → Home → Dues Dashboard → Dues → Cleared',
    to: '/rider/home-splash',
  },
]

function FlowSection({ label, flows }) {
  return (
    <div className="launcher__section">
      <span className="launcher__section-label">{label}</span>
      <div className="launcher__list">
        {flows.map((flow, i) => (
          <Link
            key={flow.title}
            to={flow.to}
            className={`launcher-row${i < flows.length - 1 ? ' launcher-row--divider' : ''}`}
          >
            <div className="launcher-row__icon">
              <flow.Icon size={18} color="#1A1A1A" />
            </div>
            <div className="launcher-row__text">
              <span className="launcher-row__title">{flow.title}</span>
              <span className="launcher-row__note">{flow.note}</span>
            </div>
            <ChevronRight size={18} color="#AAAAAA" />
          </Link>
        ))}
      </div>
    </div>
  )
}

// Launcher — the app's single top-level entry point, connecting the 7
// otherwise-isolated flow entry points (each Captain/Rider use case is its
// own standalone .dc.html prototype with no link into it from anywhere
// else in the app) into one navigable demo. Not itself part of any
// prototype — a plain page, not a phone-frame screen, so it reads clearly
// as "pick a flow to preview" rather than as one more prototype screen.
export default function Launcher() {
  return (
    <div className="launcher">
      <div className="launcher__header">
        <div className="launcher__wordmark">
          <span className="launcher__wordmark-text">rapido</span>
          <span className="launcher__wordmark-dot" />
        </div>
        <span className="launcher__title">Setu — prototype flows</span>
        <span className="launcher__subtitle">Pick a flow below to preview it end to end.</span>
      </div>

      <FlowSection label="CAPTAIN" flows={CAPTAIN_FLOWS} />
      <FlowSection label="RIDER" flows={RIDER_FLOWS} />
    </div>
  )
}
