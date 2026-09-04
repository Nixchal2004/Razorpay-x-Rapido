import { Check } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import PhoneFrame from '../../components/PhoneFrame'
import StatusBar from '../../components/StatusBar'
import { useCase } from '../../state/DuesContext'
import { CaseState } from '../../state/duesEngine'
import './RiderDuesCleared.css'

const DEFAULT_AMOUNT = '₹325'

// Rider Dues Cleared — port of `7. Rider Dues Cleared.dc.html`. Reached
// from paying off a flagged due in the Dashboard's inline pay sheet, and
// from paying off the confirmed due in Rider Dues.
//
// The source's `hardBlock` prop (which chooses between "flag removed" and
// plain "payment settled" copy) had no query-string equivalent either
// caller passed, so it always fell back to the source's own default of
// `true` — this screen used to always show "Flag removed" copy, even for
// an ordinary non-flagged due. Now that the case store records which
// state a due was resolved FROM (`resolvedFrom`), this reads the real
// case via `?caseId=` and shows the correct copy: "Flag removed" only
// when the resolved case had actually been FLAGGED, "Payment settled"
// for an ordinary confirmed due — the state engine driving this screen
// instead of a query-string artifact that always picked one branch.
export default function RiderDuesCleared() {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const caseId = searchParams.get('caseId')
  const resolvedCase = useCase(caseId)

  const amountQuery = searchParams.get('amount')
  const amount = resolvedCase ? `₹${resolvedCase.amount}` : amountQuery ? `₹${amountQuery.replace(/[^0-9]/g, '')}` : DEFAULT_AMOUNT
  const hardBlock = resolvedCase ? resolvedCase.resolvedFrom === CaseState.FLAGGED : true

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
            <span className="rdc__supporting">
              {hardBlock ? 'Your flag has been removed. You can book rides again.' : 'Payment settled. Nothing is pending on your account.'}
            </span>
          </div>

          <div className="rdc__pill">
            <span className="rdc__pill-label">{hardBlock ? 'Flag removed · Paid' : 'Paid'}</span>
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
