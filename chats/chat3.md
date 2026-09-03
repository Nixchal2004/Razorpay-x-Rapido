# Trip screen emergency design

_Started 2026-09-02 06:08 UTC_

---

## User

Continuing from "Account restricted hard gate".

## Assistant

We're finishing the Rapido Captain Dues feature across both captain and rider surfaces. We've built twelve screens covering the full lifecycle: captain splash and home, captain dues ledger with split banner (pending vs. covered), verdict moment with emergency-code entry, rider splash, dues tab, home popup, dashboard, flag warning, account restricted with itemized fee breakdown, and dues cleared confirmation.

Key decisions made:
- Captain is an active trust participant — Step A reviews floor limit and rider history, Step B confirms with a 6-digit alphanumeric emergency code (permanent, rider-set, not per-payment).
- Rider sees "Under review" first (info-light) before captain confirms, then "Pending" (warning-light) once official.
- Account restriction triggers on 3 flags account-wide; a one-time ₹29 retrieval fee applies to reactivation, shown itemized so it doesn't feel hidden.
- Flag warning (Screen 8) is dismissible; account restricted (Screen 9) is a full-screen hard gate with no secondary escape.
- Banner on captain dues ledger now separates pending (alternate payment, primary) from covered (secondary, informational).
- Haptics wired to button taps, keypresses, errors, and success states.
- "Request alternate payment" also goes through the emergency-code sheet before landing on the alternate-payment screen.
- Covered dues rows no longer show reminder, rating, or flag options — only trip card, explanation, and payout note.

Current state: Both captain and rider flows are built and wired. Fork verifier cleared a stale tweak default on the banner note line. All navigation between screens (home ↔ dues, bottom nav to home, go back flows) is live.

Next: final review pass on all screens, confirm deep-linking end-to-end, and test payment sheet integrations (alternate payment and account reactivation both route through payment sheet and land on appropriate success states).

Files: 0. Captain Splash.dc.html · 0. Captain Home.dc.html · 1. Captain Dues Verdict.dc.html · 2. Captain Dues flow.dc.html · Rider Dues.dc.html · Rider Home Dues Popup.dc.html · 4. Rider Dues Dashboard.dc.html · 5. Rider Flag Warning.dc.html · 6. Rider Account Restricted.dc.html · 7. Rider Dues Cleared.dc.html

## User

Recreate this Trip complete screen, on clicking emergency button appears the bottom sheet 1. captain Verdict screen.
Make the suitable changes in the background of bottom sheet

## User

Recreate this Trip complete screen, on clicking emergency button appears the bottom sheet 1. captain Verdict screen.
Make the suitable changes in the background of bottom sheet

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Built `8. Captain Trip Complete.dc.html` — the Rider Details screen from your screenshot (rider card, pickup/drop with Navigate, map, fare card, Payment Confirmed / Emergency). Tapping Emergency slides up the Captain Verdict sheet over a 44% dark scrim with a slight blur, so the screen behind reads as backgrounded but still visible; tapping the scrim or the grabber dismisses it. All four verdict steps (review → code → covered / alternate) work inside the sheet. Scrim strength and blur are tweakable.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Fixed — the `sheetOpen` prop now only seeds the initial state, so tapping Emergency opens the sheet and the scrim dismisses it.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Route markers now sit level with their Pickup/Drop labels, with the dashed connector spanning between them and Navigate bottom-aligned independently.

## User

Recreate this splash screen, next appears the 3. Rider home dues popup screen

## Assistant

_[tool: read_file]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

`Rider Splash.dc.html` — deep amber field, yellow pill wordmark with a short scale-in, dark status bar. It auto-advances to the Rider Home Dues Popup after 2.2s (tweakable, 0 disables) and tapping anywhere goes there immediately.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Swapped the hand-drawn status bar for the design system's `StatusBar` component.

## User

Make the popup appear from top with suitable animation

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

The popup now drops in from above the screen edge with a slight settle, after a 260ms beat so it reads as arriving rather than being already there.

## User

Recreate, this screen, add  emergency code section.
Use Eye icon for showing and hiding the code.
Except the Eye icon, nothing has to be interactive on that screen

## User

Recreate, this screen, add  emergency code section.
Use Eye icon for showing and hiding the code.
Except the Eye icon, nothing has to be interactive on that screen

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

`Rider Trip Details.dc.html` — recreated the screen with the Emergency Code card placed right under the Payment Pending banner, so it's reachable the moment the Captain asks. Code shows as six dots by default; the eye toggle is the only interactive element on the screen (everything else is static as asked).

## User

Address these comments from my teammates:

**Verma Ji** (on `Rider Trip Details.dc.html` at `[data-comment-anchor="1af76bd887-div"]`):
<commented-element>react:    Rider Trip Details
dom:      body › div#dc-root › div.sc-host › div › div › div › div › div › div[1/2]
text:     "Waiting for payment Please confirm once you receive the pay…"
children: div, span
selector: [data-om-id="86021a84:73"]</commented-element>
<teammate-comment>Remove</teammate-comment>

**Verma Ji** (on `Rider Trip Details.dc.html` at `[data-comment-anchor="28b91b0c10-div"]`):
<commented-element>react:    Rider Trip Details
dom:      body › div#dc-root › div.sc-host › div › div › div[2/7]
text:     "EMERGENCY CODE Share only with your Captain • • • • • • Tap…"
children: div, div, span
selector: [data-om-id="86021a84:36"]</commented-element>
<teammate-comment>Place at the bottom most</teammate-comment>

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Removed the "Waiting for payment" tile and moved the Emergency Code card to the very bottom of the screen, below the safety strip.

## User

Asked Claude to improve

## Assistant

_[tool: show_html]_

_[tool: show_html]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: multi_screenshot]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: run_script]_

_[tool: multi_screenshot]_

_[tool: eval_js]_

_[tool: grep]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: ready_for_verification]_

Found the break: my earlier edit removing the "Waiting for payment" tile left an orphaned `</div>`, which unbalanced the card nesting — that's what collapsed the layout. Repaired the structure, and also stopped the Fare Details card from collapsing to zero height (it was shrinking inside the scroll column). All seven cards now measure correctly.

If anything else looked off in your view, tell me which card and I'll fix it directly rather than guessing.

## User

Screen 2 — The verdict moment (captain reviews, then confirms)

This is no longer a single auto-generated reassurance card. The captain is now an active participant in the trust decision — the system pre-qualifies the trip (floor limit + rider history) but the captain makes the final call and confirms it. Design this as a sequence of bottom-sheets appearing the instant a trip's payment doesn't settle, before the captain does anything else.

Step A — Trust review
Bottom-sheet over the map/trip-summary screen (keep context visible behind it)
Header, H4: "Payment didn't go through — here's what we know"
A "floor limit" reference element: a simple horizontal bar or ruler labeled "Floor limit ₹200" with a marker showing where this trip sits, e.g. "This trip · ₹120." Use info-light tone — this is informational, not alarming yet.
A rider trust panel below it: rider's first name, star rating, and a compact history summary as a small chip or badge row — e.g. "12 rides together," "Dues history: 4 settled, 0 escalated." Reuse the visual weight of the Profile Header / Status Badge components, don't invent a new card style.
Two actions at the bottom:
Primary (yellow): "Mark as due"
Secondary (outline): "Request alternate payment"
Design for a 2–3 second read — the captain is glancing at this stationary, not while driving.
Step B — Confirm with rider's code (only after "Mark as due")
Replaces Step A in the same bottom-sheet (don't stack sheets)
Header, H4: "Ask your rider for their code"
One line of plain copy explaining what's happening: "Your rider has a code on their screen for this payment. Enter it below to confirm the due."
A standard OTP-entry field: 4–6 individual digit boxes, numeric keypad, auto-advance between boxes
Small caption under the field: "This code is only for this payment — not the one used at pickup."
Single primary button: "Confirm & mark as due" — stays disabled until all digits are entered
Error state: if the code doesn't match, show inline (not a separate screen): "That code doesn't match. Ask your rider to check their screen." with the field cleared for retry — don't lock the captain out after one mismatch, this is a normal typo case
Quiet back link: "Go back" → returns to Step A without losing the review state
On a correct match, go to Step C.
Step C — Confirmation (added to Dues)
Replaces Step B in the same bottom-sheet
Icon: checkmark in success color, centered
Headline, H3: "Added to Dues"
A trip-reference line directly under the headline, Body Default, gray-700: "₹120 · Bike ride · Koramangala 5th Block → HSR Layout" — confirms exactly which trip and amount just got logged, since the captain shouldn't have to guess or double back to the ledger to check
Reassurance line, Body Default: "You're covered — go ahead. Your payout isn't affected while this is pending." (this is where the original "you're covered" messaging now lives, folded into the confirmation rather than shown as its own separate card)
Single primary button: "Continue" → dismisses back to the map/next-ride flow
Small secondary text link, bottom: "Report an issue" → one-tap flag action, doesn't require justification up front
This same trip now appears in Screen 1's Pending list the next time the captain opens the Dues tab — this screen is the moment it's created, Screen 1 is where it lives afterward
Declined path
Tapping "Request alternate payment" in Step A skips Step B entirely and goes straight to the warning-light "Ask for another payment method" screen — same layout skeleton as the reassurance card, no OTP step, primary button "Request alternate payment."

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

Screen 2 rebuilt to the new spec in `1. Captain Dues Verdict.dc.html` — one sheet, three steps that replace each other in place:

- **A Trust review** — floor-limit bar (info-light) with the ₹120 marker, rider trust panel with rating + chip row, Mark as due / Request alternate payment.
- **B Confirm with code** — "Ask your rider for their code", 6 numeric boxes with auto-advance and numeric keypad, per-payment caption, inline mismatch error that clears the field for retry (no lockout), quiet Go back that keeps review state. Code is `418902`.
- **C Added to Dues** — centered success check, trip-reference line, payout reassurance, Continue → Dues flow, plus a Report an issue text link.

"Request alternate payment" now skips B entirely and lands straight on the warning-light card.

Two notes: the old standalone "You're covered" card is gone, folded into C as you specified. The verdict sheet embedded in `8. Captain Trip Complete.dc.html` still runs the older permanent-emergency-code copy — want me to bring it in line with this?

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Continue now dismisses the sheet in place — the captain lands back on the trip/map screen with a short confirmation toast — and the Step C headline is 24/32, back on the type scale.

## User

Add Emergency code verificatoin for both Due and alternate payment buttons.
Code is abc123

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Both actions now pass through the emergency-code step: "Mark as due" → code → Added to Dues, and "Request alternate payment" → code → alternate-payment card. Code is `abc123` (case-insensitive, six alphanumeric boxes), with the same inline mismatch error and Go back link on either path.

## User

Replace Continue button with Find new rides. this will  redirect to the Rider home screen. Implement this thing for both the ways, after Dues and alternate payment is confirmed

## Assistant

_[tool: list_files]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Both confirmations now end on **Find new rides** → `0. Captain Home.dc.html`: on the Added to Dues step it replaces Continue, and on the alternate-payment step it replaces the request button once the request is sent. I read "rider home" as the captain's home screen since this is the captain flow — say the word if you meant a rider-side screen.

## User

Before this screen we have to put the Rider detail screen, where the pilot can either make Payment confirm or Emergency mode. tapping on Emergency mode will bring the bottom sheet continuing the flow 1. Captain Dues verdict.

Make sure that the Emergency code is abc123 all over the flows

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: list_files]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: ready_for_verification]_

The Rider Details screen (`1. Final Captain Trip Complete.dc.html`) now carries the full verdict flow: Emergency → Step A trust review → emergency-code step (both Mark as due and Request alternate payment) → Added to Dues / alternate-payment card, each ending on Find new rides → Captain Home.

Code is `abc123` everywhere now — the captain-side sheets accept it case-insensitively, and the rider's Emergency Code card on `Rider Trip Details.dc.html` defaults to it.

## User

add a small suitable loading on the splash screen with contenius movement so it does not look like a static which is stuck.

Loading must be at close bottom of the central logo.

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Three-dot loader added just under the logo pill, staggered bounce on a continuous 1s loop.

## User

Splash screen has to be the first and then the 3. Rider homes dues popup.
Add splash screen loading similar to what we did in Captain flow.

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Same three-dot loader added under the rider splash logo. `Rider Splash.dc.html` already auto-advances (2.2s, tweakable) and taps through to `3. Rider Home Dues Popup.dc.html`, so the rider flow starts on the splash.

## User

Add a bottom sheet appear whenever user taps on Pay button. The sheet appear should be same as in 6. Rider account restricted flow. Then after a success screen similar as in that flow only.

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: grep]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: ready_for_verification]_

Tapping a flagged due's **Pay ₹95 now** on the Dues dashboard now opens the same payment sheet as the Account Restricted flow — amount header, UPI / card / net banking selection, Pay confirm, Go back — and confirming lands on `7. Rider Dues Cleared.dc.html`, the same success screen that flow uses.

I applied it to the Dues dashboard's Pay buttons. If you meant the Pay button on `Rider Dues.dc.html` instead (or as well), say so and I'll wire that one the same way.

## User

Found issues — fixing…

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: eval_js]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: ready_for_verification]_

All three fixed: the sheet is now gated by `sc-if` with literal scrim styles (no load flash), the copy reads "…the flag on your 27 Aug, 9:20 PM trip…", and the paid amount is passed through to `7. Rider Dues Cleared.dc.html`, which now reads it from the URL so it shows ₹95 rather than ₹325.

Heads up: I'm at 91% of the usage quota. This is a clean stopping point — everything is wired and verified. Tell me if you want to keep going.

