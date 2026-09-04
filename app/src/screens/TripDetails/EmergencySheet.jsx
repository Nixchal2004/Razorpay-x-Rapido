import { useEffect, useRef, useState } from 'react'
import { Check, Wallet, CircleAlert } from 'lucide-react'
import { useHaptics } from '../../hooks/useHaptics'
import { useCase, useDuesActions } from '../../state/DuesContext'
import { CaseState } from '../../state/duesEngine'
import './EmergencySheet.css'

const LEN = 6
const EMPTY_CODE = Array(LEN).fill('')

// Bottom sheet: Trust review → emergency-code confirmation → Added to
// Dues / alternate-payment outcome. Mirrors the `dc.html` prototype's
// step-swap-in-place behaviour (never stacks sheets).
//
// This is the Captain-side Detect -> Diagnose -> Decide moment: opening
// the sheet detects the payment failure and diagnoses it against the
// floor limit; "Mark as due" / "Request alternate payment" submit the
// captain's decision; the code-entry step is the pickup/emergency-code
// re-verification the decision requires before it's applied to the case.
// Which of the four panels is showing is now DERIVED from the underlying
// case's engine state rather than tracked as its own step variable, so
// this sheet can never show an outcome that hasn't actually happened yet.
export default function EmergencySheet({
  open,
  onOpenChange,
  onNotify,
  onFindNewRides,
  dismissible = true,
  scrimOpacity,
  scrimBlur,
  caseId,
  tripMeta,
}) {
  const buzz = useHaptics()
  const dueCase = useCase(caseId)
  const { detectPaymentFailure, diagnoseCase, submitCaptainDecision, verifyOtp } = useDuesActions()
  const [code, setCode] = useState(EMPTY_CODE)
  const [codeError, setCodeError] = useState(false)
  const [altSent, setAltSent] = useState(false)
  const inputRefs = useRef([])

  useEffect(() => {
    if (!open) return
    // Detect + diagnose only when this case doesn't exist yet — reopening
    // the sheet on an in-progress or resolved case resumes where it left
    // off instead of re-running the failure event.
    if (!dueCase) {
      detectPaymentFailure({ id: caseId, riderName: tripMeta.riderName, trip: tripMeta.trip, amount: tripMeta.amount, failureType: 'connectivity' })
      diagnoseCase(caseId)
    }
    setCode(EMPTY_CODE)
    setCodeError(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const isAlt = dueCase?.pendingDecision === 'alt-payment'
  const step = !dueCase
    ? 'review'
    : dueCase.pendingDecision
      ? 'otp'
      : dueCase.state === CaseState.CONFIRMED
        ? 'done'
        : dueCase.state === CaseState.ALT_PAYMENT_REQUESTED
          ? 'declined'
          : 'review'

  const close = () => {
    if (!dismissible) return
    buzz('tap')
    onOpenChange(false)
  }

  const goReview = () => {
    buzz('tap')
    submitCaptainDecision(caseId, null)
    setCode(EMPTY_CODE)
    setCodeError(false)
  }

  const goOtp = (decision) => {
    buzz('tap')
    submitCaptainDecision(caseId, decision)
    setCode(EMPTY_CODE)
    setCodeError(false)
  }

  const setDigit = (i, raw) => {
    const value = (raw || '').replace(/[^A-Za-z0-9]/g, '').slice(-1).toUpperCase()
    setCode((prev) => {
      const next = prev.slice()
      next[i] = value
      return next
    })
    setCodeError(false)
    if (value) {
      buzz('key')
      if (i < LEN - 1) inputRefs.current[i + 1]?.focus()
    }
  }

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !code[i] && i > 0) {
      e.preventDefault()
      setCode((prev) => {
        const next = prev.slice()
        next[i - 1] = ''
        return next
      })
      setCodeError(false)
      inputRefs.current[i - 1]?.focus()
    }
  }

  const submit = () => {
    const { success } = verifyOtp(caseId, code.join(''))
    if (success) {
      buzz('success')
      onNotify(isAlt ? 'Code confirmed · alternate payment requested.' : 'Added to Dues · code confirmed.')
      setCodeError(false)
    } else {
      buzz('error')
      setCode(EMPTY_CODE)
      setCodeError(true)
      inputRefs.current[0]?.focus()
    }
  }

  const requestAlternate = () => {
    if (altSent) return
    setAltSent(true)
    onNotify(`Alternate payment requested from ${dueCase?.riderName?.split(' ')[0] ?? 'the rider'}.`)
  }

  const reportIssue = () => {
    buzz('tap')
    onNotify('Issue reported. Support will follow up on this trip.')
  }

  const codeIncomplete = code.some((d) => !d)

  if (!open) return null

  const scrimStyle = {
    ...(scrimOpacity != null ? { '--sheet-scrim-opacity': scrimOpacity } : null),
    ...(scrimBlur === false ? { '--sheet-scrim-blur': 'none' } : null),
  }

  const amount = dueCase?.amount ?? tripMeta.amount
  const floorLimit = dueCase?.floorLimit ?? tripMeta.floorLimit
  const floorPct = Math.min(100, Math.round((amount / floorLimit) * 100))
  const trust = dueCase?.trust ?? tripMeta.trust
  const riderFirstName = (dueCase?.riderName ?? tripMeta.riderName).split(' ')[0]
  const riderInitials = (dueCase?.riderName ?? tripMeta.riderName)
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="sheet-scrim" onClick={dismissible ? close : undefined} style={scrimStyle}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        {dismissible ? (
          <button type="button" className="sheet__grabber" aria-label="Close" onClick={close} />
        ) : (
          <div className="sheet__grabber sheet__grabber--static" aria-hidden="true" />
        )}

        {step === 'review' && (
          <div className="sheet__step">
            <span className="sheet__heading">Payment didn't go through — here's what we know</span>

            <div className="floor-limit">
              <div className="floor-limit__row">
                <span className="floor-limit__label">Floor limit ₹{floorLimit}</span>
                <span className="floor-limit__value">This trip · ₹{amount}</span>
              </div>
              <div className="floor-limit__bar">
                <div className="floor-limit__track" />
                <div className="floor-limit__fill" style={{ width: `${floorPct}%` }} />
                <div className="floor-limit__marker" style={{ left: `${floorPct}%` }} />
                <div className="floor-limit__ceiling" />
              </div>
              <div className="floor-limit__scale">
                <span>₹0</span>
                <span>Under the limit Rapido can cover</span>
                <span>₹{floorLimit}</span>
              </div>
            </div>

            <div className="rider-trust">
              <div className="rider-trust__top">
                <div className="rider-trust__avatar">{riderInitials}</div>
                <div className="rider-trust__info">
                  <span className="rider-trust__name">{riderFirstName}</span>
                  <div className="rider-trust__rating">
                    <span className="rider-trust__star">★</span>
                    <span className="rider-trust__value">{trust.rating}</span>
                    <span className="rider-trust__caption">rider rating</span>
                  </div>
                </div>
              </div>
              <div className="rider-trust__chips">
                <span className="chip">{trust.ridesTogether} rides together</span>
                <span className="chip chip--success">Dues history: {trust.duesSettled} settled</span>
                <span className="chip">{trust.duesEscalated} escalated</span>
              </div>
            </div>

            <div className="sheet__actions">
              <button type="button" className="btn btn--primary" onClick={() => goOtp('due')}>
                Mark as due
              </button>
              <button type="button" className="btn btn--secondary" onClick={() => goOtp('alt-payment')}>
                Request alternate payment
              </button>
            </div>
          </div>
        )}

        {step === 'otp' && (
          <div className="sheet__step">
            <span className="sheet__heading">Ask your rider for their emergency code</span>
            <span className="sheet__intro">
              {isAlt
                ? 'Your rider keeps an emergency code in their trip details. Enter it below to request another payment method.'
                : 'Your rider keeps an emergency code in their trip details. Enter it below to confirm the due.'}
            </span>

            <div className="code-boxes">
              {code.map((value, i) => (
                <input
                  key={i}
                  type="text"
                  inputMode="text"
                  autoCapitalize="characters"
                  autoComplete="off"
                  spellCheck={false}
                  maxLength={1}
                  aria-label={`Character ${i + 1}`}
                  value={value}
                  onChange={(e) => setDigit(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  ref={(el) => {
                    inputRefs.current[i] = el
                  }}
                  className={
                    'code-box' +
                    (codeError ? ' code-box--error' : value ? ' code-box--filled' : '')
                  }
                />
              ))}
            </div>

            {codeError && (
              <div className="code-error">
                <CircleAlert size={14} color="#EA4335" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>That code doesn't match. Ask your rider to check their screen.</span>
              </div>
            )}

            <span className="sheet__hint">
              Your rider can reveal this code under Emergency code in their trip details.
            </span>

            <div className="sheet__actions sheet__actions--tight">
              <button
                type="button"
                className="btn btn--primary"
                disabled={codeIncomplete}
                onClick={submit}
              >
                {isAlt ? 'Confirm & request payment' : 'Confirm & mark as due'}
              </button>
              <button type="button" className="btn btn--link-muted" onClick={goReview}>
                Go back
              </button>
            </div>
          </div>
        )}

        {step === 'done' && (
          <div className="sheet__step">
            <div className="sheet__result">
              <div className="sheet__result-icon sheet__result-icon--success">
                <Check size={28} color="#34A853" />
              </div>
              <span className="sheet__result-title">Added to Dues</span>
              <span className="sheet__result-line">
                ₹{amount} · {dueCase?.trip?.vehicle ?? tripMeta.trip.vehicle} ride · {dueCase?.trip?.route ?? tripMeta.trip.route}
              </span>
              <span className="sheet__result-line">
                You're covered — go ahead. Your payout isn't affected while this is pending.
              </span>
            </div>
            <div className="sheet__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  buzz('tap')
                  onFindNewRides()
                }}
              >
                Find new rides
              </button>
              <button type="button" className="btn btn--link-muted" onClick={reportIssue}>
                Report an issue
              </button>
            </div>
          </div>
        )}

        {step === 'declined' && (
          <div className="sheet__step">
            <div className="alt-card">
              <div className="alt-card__icon">
                <Wallet size={21} color="#B98A00" />
              </div>
              <span className="alt-card__title">Ask for another payment method</span>
              <span className="alt-card__body">
                {riderFirstName} will be asked to pay by UPI or cash. The request stays open in their app and
                you can follow it in Dues.
              </span>
              <span className="alt-card__trip">
                ₹{amount} · {dueCase?.trip?.shortRoute ?? tripMeta.trip.shortRoute}
              </span>
            </div>
            <div className="sheet__actions">
              {altSent ? (
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => {
                    buzz('tap')
                    onFindNewRides()
                  }}
                >
                  Find new rides
                </button>
              ) : (
                <button type="button" className="btn btn--primary" onClick={requestAlternate}>
                  Request alternate payment
                </button>
              )}
              <button type="button" className="btn btn--link-muted" onClick={goReview}>
                Go back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
