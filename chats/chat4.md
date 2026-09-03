# Rider's Dues Tab Design

_Started 2026-09-02 10:58 UTC_

---

## User

Screen 3 — Rider's Dues tab

Entry point: 3rd icon in the rider bottom nav (Dues). Now has two states in sequence, since the due isn't official until the captain confirms it.

State 0 — Share your code (new, appears first):

Card tone: info-light, not warning — there's no verdict yet, so don't alarm the rider before there is one
Headline: "Share this code with your captain"
A large, prominent code display (reuse the visual weight of a pickup-OTP display, but this is a distinct, freshly generated code — not the pickup one)
Small caption under the code: "This confirms ₹[amount] as a due. It's separate from your pickup code."
A countdown/expiry line: "Expires in [mm:ss]" — this code shouldn't stay valid indefinitely
Primary button, full width: "Pay ₹[amount] now instead" — the rider is never forced to wait on this exchange; they can exit into direct payment at any time
If the code expires before the captain enters it, replace the display with: "Code expired — generate a new one" plus a button to regenerate, rather than silently failing

State 1 — Confirmed due (after the captain enters the matching code):

Top App Bar: hamburger, "rapido" wordmark (no CAPTAIN tag), header bell
Page title "Dues," H2
Pending-amount card, warning-light background: amount in H2/bold, one supporting line making clear this is not waived (e.g. "Your ride is complete — this isn't waived. We're retrying automatically, or you can settle it now."), plus a small caption underneath in gray-600: "Verified with your due confirmation code" — this gives the rider provenance for why this is trusted, not just an automatic hold
Below the card, a vertical timeline (dot + connecting line + label + timestamp), 4 steps: trip completed → payment attempted (what went wrong, plain terms, e.g. "connection issue") → captain confirmed as due (code verified) → currently retrying (with an end time for the retry window, not open-ended "processing")
Primary button, full width, yellow: "Pay ₹[amount] now" — always available, never disabled while waiting on auto-retry
Text-only secondary link below the button: "Why is this pending?" (opens a short explainer, not a technical log)
Below the fold: "Dues history" section, simple two-line rows (trip + date, amount + "Settled") for past resolved dues

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now the logic.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

State 0 is now "Share this code with your captain" — info-light card, 6-digit code display, `Expires in m:ss` countdown, caption naming it separate from the pickup code, and a full-width "Pay ₹120 now instead". At zero it swaps to "Code expired — generate a new one" with a regenerate button (new code, timer resets).

State 1 keeps its structure; provenance caption and timeline step 3 now cite the due confirmation code. Tweaks: `screenState` (review / expired / confirmed), `amount`, `codeSeconds`.

## User

After this screen has to be a screen showing next state that the trip fare has moved to Dues. Add a psychological copy for this screen which builds trust. Like Your pilot trusted you to pay later. Don't forget to say thank you.
Also add a button which redirects to the Dues tab where the user can see the pending requests.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

New screen: **Rider Fare Moved to Dues.dc.html**

- Handshake mark, "Thank you — your captain trusted you to pay later", then a line naming the captain and that ₹120 has moved to Dues.
- Yellow "MOVED TO DUES" card with amount, route, trip ID.
- Three reassurance points: nothing owed to the captain directly, deadline of 6:15 PM with auto-retry, account stays active.
- Footer note: clearing on time keeps pay-later available.
- Primary yellow "View pending dues" → Rider Dues Dashboard; text link "Pay ₹120 now" → Rider Dues.

Tweaks: amount, captainName.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Fixed both: trust-point icons now use lucide glyphs, and the secondary link renders "Pay ₹120 now" as one string.

## User

Too much text, make it clean and minimal  and mention only important details required at that moment.

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Stripped to the essentials: handshake mark, "Thank you — Ramesh trusted you to pay later", "Your fare has moved to Dues.", the amount, "Due by 6:15 PM today", and the two CTAs. The reassurance list, trip card, and footer note are gone.

## User

After this screen appears the Rider fares moved to dues. this transition takes 5 seconds to happen

## Assistant

_[tool: grep]_

_[tool: dc_js_str_replace]_

_[tool: read_file]_

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

Trip Details now auto-advances to the "fare moved to Dues" screen after 5 seconds (tweakable via `advanceSeconds`, 0 disables).

## User

The transition from Trip details to Fare moved to Due will happen only when the Captain Enters the emergency code to verify.

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

Removed the timed auto-advance. Trip Details now waits for verification: when the captain enters ABC123 on the emergency screen, it records the verification, and the rider screen picks that up (checks twice a second) and moves to "fare moved to Dues".

## User

On tapping the Pay button, appears the bottom sheet showing UPI, Card and Bank transfer option.
When  chosen one and amount pay is done success screen appears

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

"Pay ₹120 now" now opens a bottom sheet with UPI, Card and Bank transfer (tap to select), then "Pay ₹120" goes to the success screen (7. Rider Dues Cleared). Tapping the scrim or "Go back" dismisses it.

The Dues Dashboard already had its own equivalent sheet; say the word if you want Bank transfer swapped in there too (it currently says "Net banking").

## User

Found issues — fixing…

## Assistant

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Re-applied the payment sheet (the undo had reverted it) and switched the sheet's icons and tick to CSS-mask spans, so selecting a method no longer collides with the lucide icon refresh. Flow: Pay ₹120 now → sheet with UPI / Card / Bank transfer → Pay ₹120 → success screen.

## User

On this screen when tapped on the  Pay button, appears the bottom sheet showing UPI, Card and Bank transfer option.
When  chosen one and amount pay is done success screen appears

## Assistant

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Applied to **Rider Fare Moved to Dues** (the last turn's undo had reverted it): Pay ₹120 now → bottom sheet with UPI / Card / Bank transfer → Pay ₹120 → success screen.

If "this screen" meant a different one (e.g. Rider Dues or the Dues Dashboard), tell me which and I'll move it.

## User

Make this a pending state card

## Assistant



## User

Make this a pending state card

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The first card (Bike · Today, 9:34 AM · ₹120) is now a pending-state card — yellow "Pending" badge, clock icon, "Retrying until 6:15 PM today" — instead of under review.

