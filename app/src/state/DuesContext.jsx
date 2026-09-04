import { createContext, useCallback, useContext, useSyncExternalStore } from 'react'
import { getDuesEngine } from './duesEngine'

const DuesEngineContext = createContext(null)

// Wraps the app once (see App.jsx) so every screen shares the same engine
// instance — this is what makes Captain and Rider surfaces read the same
// underlying case instead of maintaining separate copies.
export function DuesProvider({ children }) {
  const engine = getDuesEngine()
  return <DuesEngineContext.Provider value={engine}>{children}</DuesEngineContext.Provider>
}

function useEngine() {
  const engine = useContext(DuesEngineContext)
  if (!engine) throw new Error('useDuesEngine must be used within a DuesProvider')
  return engine
}

// Re-renders whenever the engine's data changes (any action call), and on
// the escalation sweep's account/cases anytime a screen reads them — this
// is the "the state engine must drive the UI" wiring: components read
// derived values via `select`, not local component state.
function useEngineSnapshot(select) {
  const engine = useEngine()
  return useSyncExternalStore(
    engine.subscribe.bind(engine),
    () => select(engine),
    () => select(engine),
  )
}

export function useCases() {
  return useEngineSnapshot((engine) => engine.getCases())
}

export function useCase(caseId) {
  return useEngineSnapshot((engine) => (caseId ? engine.getCase(caseId) : null))
}

export function useAccountStatus() {
  return useEngineSnapshot((engine) => engine.getAccountStatus())
}

export function useAuditLog(caseId) {
  return useEngineSnapshot((engine) => engine.getAuditLog(caseId))
}

// Action hook — components call these instead of manipulating
// screen-local state directly, matching the "call actions such as..."
// requirement. Wrapped in useCallback against the engine singleton, which
// never changes identity, so these are stable across renders.
export function useDuesActions() {
  const engine = useEngine()
  return {
    detectPaymentFailure: useCallback((args) => engine.detectPaymentFailure(args), [engine]),
    diagnoseCase: useCallback((caseId) => engine.diagnoseCase(caseId), [engine]),
    submitCaptainDecision: useCallback((caseId, decision) => engine.submitCaptainDecision(caseId, decision), [engine]),
    verifyOtp: useCallback((caseId, code) => engine.verifyOtp(caseId, code), [engine]),
    createDue: useCallback((caseId) => engine.createDue(caseId), [engine]),
    payDue: useCallback((caseId, method) => engine.payDue(caseId, method), [engine]),
    payBlockedAccount: useCallback((method) => engine.payBlockedAccount(method), [engine]),
    sendReminder: useCallback((caseId) => engine.sendReminder(caseId), [engine]),
    toggleCaptainFlag: useCallback((caseId) => engine.toggleCaptainFlag(caseId), [engine]),
    rateAndThank: useCallback((caseId, args) => engine.rateAndThank(caseId, args), [engine]),
  }
}
