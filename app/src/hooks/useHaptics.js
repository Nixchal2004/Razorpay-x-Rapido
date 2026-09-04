// Matches the prototype's `buzz(kind)` — short vibration patterns per interaction type.
// navigator.vibrate is silently a no-op on desktop browsers and iOS Safari.
const PATTERNS = {
  tap: 8,
  key: 4,
  error: [18, 60, 18],
  success: [12, 40, 24],
}

export function useHaptics() {
  return function buzz(kind) {
    const pattern = PATTERNS[kind] ?? PATTERNS.tap
    if (navigator.vibrate) navigator.vibrate(pattern)
  }
}
