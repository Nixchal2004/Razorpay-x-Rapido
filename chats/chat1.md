# Rapido Captain Dues Ledger

_Started 2026-08-31 07:16 UTC_

---

## User

Design a mobile scree for Rapido, Screen 1 — Captain's Dues tab (ledger list)

Entry point: 4th icon in the captain bottom nav (Dues).

Build a ledger screen reusing the Transaction Row and Status Badge components from the design system.

Top App Bar: hamburger, "rapido CAPTAIN" wordmark, header bell (unrelated general alerts, untouched by this feature)
Page title "Dues," H2
Tab Bar directly under the title: "Pending" (default active) / "Resolved" — same underline-active style as the existing Bookings screen
Below the tabs, a compact stat card (reuse Earnings/Stat Card style, success-light background) showing total pending amount and a one-line reassurance, e.g. "₹340 pending across 2 trips — your payout isn't affected"
The ledger itself: a vertical list of Transaction Rows, one per trip with an unresolved payment. Each row: trip type + short route, amount (right-aligned, bold), a Status Badge (success-light "Covered" / warning-light "Alternate payment requested"), and a muted timestamp/caption line ("Retrying automatically · 2 min ago"). Entire row is tappable → leads to Screen 5 (detail).
"Resolved" tab: same Transaction Row style, badge swaps to a neutral gray "Recovered" badge with a short duration caption ("Recovered · 40 min")
Keep row density tight (12–16px vertical padding) since this is a working ledger, not a marketing surface

## Assistant

I'll explore the design system components first.

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: run_script]_

_[tool: read_file]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: ready_for_verification]_

Screen 1 is up — Pending/Resolved tabs switch live, rows are tappable (they open a placeholder sheet since Screen 5 doesn't exist yet).

Two notes: the DS badge components are solid-fill only, so the light-tint "Covered" / "Alternate payment requested" / "Recovered" pills are built in the same badge geometry with the tinted semantic surfaces from the palette; and the DS bottom nav hardcodes Home as active, so I rebuilt it to its own spec with Dues active. Tweaks: row density, reassurance copy, footer note toggle.

## User

Instead of bike/auto ride. I want to use the Name of the rider so it becomes easy for pilot to identify each due rider.
Redesign the cards and include essential information only on the card.

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Rows now lead with the rider's name (initials avatar in place of the vehicle icon) and carry only what's needed to act: name, amount, status badge, short timestamp. Route line and the long captions are gone — those belong on the detail screen. Also fixed the name truncating.

## User

Also include the Drop location and the date(2 days ago/ 10min ago)  in each cards so it becomes easy for the pilot to identify.

## Assistant

I'll add a drop-location line and put the relative date on its own line with the badge.

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Each row now shows drop location (pin + place) and a relative date beside the badge — "10 min ago", "Yesterday, 8:30 PM", "Recovered · 2 days ago".

## User

Screen 5 — Dues detail screen

Entry point: tapping any row in Screen 1's ledger (captain-facing; rider can optionally get a lighter version of the same pattern from their history rows).

Top App Bar: back chevron, page title "Trip details" or the trip ID
Trip summary block at top: route (pickup/drop dots, reused from Booking Card), amount, timestamp, Status Badge matching its current state
A "What's happening" section in plain language: state the classification outcome without jargon — e.g. "This payment didn't go through because of a network issue on the rider's end. Because the amount is small and this rider has a strong payment history, we're covering it while we retry." This is the one place the reasoning is shown — translate the system's connectivity/decline + trust-threshold logic into a one- or two-sentence plain explanation, never expose raw reason codes or scores.
A "What happens next" section: bulleted or timeline-style, same visual language as Screen 3's timeline — auto-retry window, what happens if it resolves, what happens if it escalates
If escalated: swap the explanation tone accordingly ("This one needs a different payment method — here's why") and show the alternate-payment request status instead
Bottom: the same "Flag this" secondary action as Screen 1's row, plus (captain-facing only) a note confirming payout is unaffected regardless of outcome.
Additional: 1. a section/option where the pilot can push notification(max 3 a day) to the rider as a reminder.
2. A flag option which appears after 72hours if the rider has not cleared the due. 
3. On covered screen: a small "Thank you" which captain may or may not wish to send upon completion of due.

## Assistant

_[tool: read_file]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Screen 5 is now wired into the same file — tapping any ledger row pushes the detail screen; back chevron returns.

What's there, per state:
- Summary card: badge + amount, rider identity, pickup/drop rail from the Booking Card pattern.
- "What's happening" — plain-language explanation, tinted green when covered, warning-tinted when escalated ("This one needs a different payment method"), gray when recovered. No reason codes or scores.
- "What happens next" — three-step timeline (done / current / upcoming), copy differs per state.
- Remind the rider — sends up to 3/day, counter and disabled state at the limit.
- Flag this — locked with a countdown until the due is 72h old (Ramesh, 10 min), unlocked for Kavya Iyer at 4 days. Toggles to "Flagged for review".
- Say thanks — optional, on covered and recovered dues only.
- Footer note confirming payout is unaffected.

I added a third pending trip (Kavya Iyer, 4 days) so the 72h flag state is demonstrable; the stat card now reads ₹435 across 3 trips.

## User

add a "rate & review" section with thank you

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The "Say thanks" block is now "Rate & review" (on covered and recovered dues): five ★ in brand yellow with a word label, optional review chips that appear once rated, and the thank-you action that folds the rating in — button reads "Send rating and thank you", then locks to "Rating and thank you sent". Rating stays optional; the thank-you can still be sent alone.

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
Step B — OTP confirmation (only after "Mark as due")
Replaces Step A in the same bottom-sheet (don't stack sheets)
Header, H4: "Confirm with pickup OTP"
Large, read-only OTP display plus its timestamp: "4821 · verified at pickup, 9:20 AM"
One line of plain copy explaining why: "Confirming ties this due to the same rider you picked up."
Single primary button: "Confirm & mark as due"
Quiet back link: "Go back" → returns to Step A without losing the review state
On confirm, transition into the reassurance state: reuse the original success-light "You're covered — go ahead" card as the closing screen of this flow — it's now earned through a decision, not shown automatically. Trip amount stays small/secondary here, same as before.
Declined path
Tapping "Request alternate payment" in Step A skips Step B entirely and goes straight to the warning-light "Ask for another payment method" screen — same layout skeleton as the reassurance card, no OTP step, primary button "Request alternate payment."

## Assistant

_[tool: copy_files]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Screen 2 is a new file, `Captain Dues Verdict.dc.html` — one bottom sheet that swaps content in place over the completed-trip screen (map + trip summary stay visible behind a scrim).

Flow: Trust review (info-light floor-limit ruler with the ₹120 marker under ₹200, rider trust panel with rating and history chips) → "Mark as due" → OTP confirmation (read-only 4821, verified 9:20 AM, "Go back" preserves the review) → success-light "You're covered — go ahead". "Request alternate payment" jumps straight to the warning-light screen, no OTP.

The `startStep` tweak jumps directly to any of the four states for review.

## User

Screen 3 — Rider's Dues tab

Entry point: 3rd icon in the rider bottom nav (Dues). Now has two states in sequence, since the due isn't official until the captain confirms it.

State 0 — Under review (new, appears first):

Card tone: info-light, not warning — there's no verdict yet, so don't alarm the rider before there is one
Headline: "Your captain is reviewing your payment"
Supporting line: "This usually takes a moment. You don't have to wait — you can pay now instead."
No timeline yet (nothing is confirmed to plot), just the review message
Primary button, full width: "Pay ₹[amount] now" stays available here too — the rider is never blocked from just paying while the captain reviews

State 1 — Confirmed due (after the captain's OTP confirmation):

Top App Bar: hamburger, "rapido" wordmark (no CAPTAIN tag), header bell
Page title "Dues," H2
Pending-amount card, warning-light background: amount in H2/bold, one supporting line making clear this is not waived (e.g. "Your ride is complete — this isn't waived. We're retrying automatically, or you can settle it now."), plus a small caption underneath in gray-600: "Verified with your pickup OTP" — this gives the rider provenance for why this is trusted, not just an automatic hold
Below the card, a vertical timeline (dot + connecting line + label + timestamp), 4 steps: trip completed → payment attempted (what went wrong, plain terms, e.g. "connection issue") → captain confirmed as due (OTP verified) → currently retrying (with an end time for the retry window, not open-ended "processing")
Primary button, full width, yellow: "Pay ₹[amount] now" — always available, never disabled while waiting on auto-retry
Text-only secondary link below the button: "Why is this pending?" (opens a short explainer, not a technical log)
Below the fold: "Dues history" section, simple two-line rows (trip + date, amount + "Settled") for past resolved dues

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

Screen 3 is `Rider Dues.dc.html` — rider shell (wordmark without the CAPTAIN tag, Dues as 3rd nav item).

State 0 is info-light "Your captain is reviewing your payment" with the pay button already available and no timeline. It advances to State 1 after ~7s to show the sequence; the `screenState` tweak pins either state.

State 1: warning-light pending card (₹120, "isn't waived" line, "Verified with your pickup OTP" caption), the 4-step timeline ending in a bounded "Retrying until 6:15 PM", full-width pay button, "Why is this pending?" opening a plain-language sheet, then Dues history rows with Settled badges.

## User

Screen 6 — Rider home screen with Dues popup

This uses the real, current Rapido rider home screen as its base — status bar, map with the green "Pickup Point" pin, the frosted-glass address strip, the "Where do you want to go?" search bar, the recent-places list, and the bottom nav (Ride · All Services · Travel · Profile). Don't redesign any of that — only add the popup.

Popup card sits in the one open stretch of white space on this screen: below the status bar, above the map. It should read as something the app surfaced on load, not something blocking the primary "book a ride" task.
Card: white background, thin yellow accent strip along the top edge, rounded corners (xl/2xl radius), soft drop shadow
Left: a yellow circular icon with a bold ₹ mark
Headline, bold: "[N] dues pending · ₹[amount]" — count and amount together, so the rider doesn't have to tap in just to see the number
Subtext, gray-600: "Tap to view your Dues dashboard"
Right: a chevron, signaling the whole card is tappable
Top-right corner of the card: a small, quiet "×" dismiss control — a rider mid-booking should be able to wave it off without being forced into the dashboard
Tapping anywhere on the card except the × goes to Screen 7

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

Screen 6 is `Rider Home Dues Popup.dc.html` — home screen untouched (map with green Pickup Point pin, frosted address strip, "Where do you want to go?", recent places, Ride · All Services · Travel · Profile nav), with the dues card in the white gap between status bar and map.

Card: yellow top strip, yellow ₹ circle, "2 dues pending · ₹340" plus the tap-to-view subline, chevron, quiet × in the corner. Tapping the card navigates to the rider Dues dashboard (`Rider Dues.dc.html`) since Screen 7 isn't built yet; × dismisses without leaving the booking flow. Count and amount are tweakable.

## User

Add the Dues option in the bottom navbar. The Dues option should aligned closed to Ride option as both of them are part of one. Then lock the Bottom navbar for the Rider app with the five options. Ride, Dues, All services, Travel and profile.

Upon clicking the pop up notification, the user will be redirected to the Dues dashboard (screen 7)

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

Now locking the same five-item nav on the rider Dues screen.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Rider bottom nav is now locked to five items in this order on both rider screens: Ride · Dues · All Services · Travel · Profile — Dues sits second, right beside Ride, and carries a red dot while a due is open.

The popup card (and the Dues nav item) both go to the rider Dues dashboard; Ride from that screen comes back here.

## User

Screen 7 — Dues dashboard (all cases: pending, flagged, settled)

This is where Screen 6's popup leads. It has to represent every state a due can be in, not just the pending one.

Top App Bar: back chevron (or hamburger if this is reachable from more than one place), title "Dues"
If the rider currently has any flags, show a compact warning-light strip directly under the title, above the tabs: "1 flag on your account · 2 more will pause your ability to book rides" — tapping it goes to Screen 8. If there are zero flags, this strip is simply absent, not shown empty.
Tab Bar (underline-active, same style as the captain's Bookings/Dues tabs): Pending (default) · Flagged · Settled
Pending tab: Transaction Rows, one per unresolved due. Each row: trip + short route, amount (bold, right-aligned), a Status Badge in either info-light ("Under review" — captain hasn't confirmed yet) or warning-light ("Pending" — confirmed, retrying), and a muted caption line. Tapping a row opens the rider-facing detail state described in Screen 5.
Flagged tab: same Transaction Row pattern, but the Status Badge is error-light "Flagged," and each row carries a one-line plain-language reason directly beneath it (e.g. "Wasn't settled within the review window") plus its own inline "Pay now" button on the row itself — flagged dues are the highest-priority items, so don't make the rider drill into detail just to clear one.
Settled tab: neutral gray "Settled" badge, trip + date, amount — identical pattern to the captain's Resolved tab for visual consistency across both apps.
If a tab has nothing in it, use the Screen 4 empty-state pattern scoped to that tab (e.g. "Nothing flagged" under a calm, non-alarming treatment) rather than a blank list.

## User

Screen 7 — Dues dashboard (all cases: pending, flagged, settled)

This is where Screen 6's popup leads. It has to represent every state a due can be in, not just the pending one.

Top App Bar: back chevron (or hamburger if this is reachable from more than one place), title "Dues"
If the rider currently has any flags, show a compact warning-light strip directly under the title, above the tabs: "1 flag on your account · 2 more will pause your ability to book rides" — tapping it goes to Screen 8. If there are zero flags, this strip is simply absent, not shown empty.
Tab Bar (underline-active, same style as the captain's Bookings/Dues tabs): Pending (default) · Flagged · Settled
Pending tab: Transaction Rows, one per unresolved due. Each row: trip + short route, amount (bold, right-aligned), a Status Badge in either info-light ("Under review" — captain hasn't confirmed yet) or warning-light ("Pending" — confirmed, retrying), and a muted caption line. Tapping a row opens the rider-facing detail state described in Screen 5.
Flagged tab: same Transaction Row pattern, but the Status Badge is error-light "Flagged," and each row carries a one-line plain-language reason directly beneath it (e.g. "Wasn't settled within the review window") plus its own inline "Pay now" button on the row itself — flagged dues are the highest-priority items, so don't make the rider drill into detail just to clear one.
Settled tab: neutral gray "Settled" badge, trip + date, amount — identical pattern to the captain's Resolved tab for visual consistency across both apps.
If a tab has nothing in it, use the Screen 4 empty-state pattern scoped to that tab (e.g. "Nothing flagged" under a calm, non-alarming treatment) rather than a blank list.

## Assistant

_[tool: list_files]_

_[tool: dc_write]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Screen 7 is `4. Rider Dues Dashboard.dc.html`, wired as the popup's destination (and the Dues nav item).

- Back chevron + "Dues" title, then the warning-light flag strip ("1 flag on your account · 2 more will pause your ability to book rides") — set the `flagCount` tweak to 0 and the strip disappears entirely.
- Tabs Pending · Flagged · Settled, same yellow underline as the captain screens.
- Pending rows carry info-light "Under review" or warning-light "Pending"; tapping opens the rider detail view.
- Flagged rows show the error-light badge, a plain reason line, and an inline "Pay ₹95 now" button that clears the row without drilling in.
- Settled rows match the captain's Resolved pattern.
- Each empty tab gets its own calm empty state (icon in a sunken circle, title, one line) — switch to Flagged after paying to see it.

The flag strip taps to a toast noting Screen 8 isn't built yet.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Fixed — the per-row conditionals no longer mount/unmount nodes inside the list; the reason line, chevron, and inline Pay button are now style toggles, so switching to Flagged reconciles cleanly.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Row bubble glyphs now render as CSS masks over the same Lucide 0.469 icons, so the icon follows the row's state instead of sticking to whatever was first drawn at that list index — the flagged row shows a flag, settled rows a check.

## User

Screen 8 — Flag warning (soft gate)

This is a proactive, harder-to-ignore interruption — not a spot inside the dashboard — because the stakes (losing the ability to book rides) are higher than anything else in this flow. Appears when the rider opens the app or attempts to book a ride while they're carrying a flag, until it's resolved.

Full-screen or large centered modal, warning-toned (not full error-red — this is a warning about a future consequence, not a statement that something has already failed)
Icon: a single warning-triangle treatment in the warning color, not repeated or animated aggressively
Headline, H3: "[N] flag[s] on your account"
Supporting line, Body Large, gray-700: "Two more flags will block your account — you won't be able to book rides until it's cleared." (Match the exact threshold dynamically; don't hardcode "two" in the component, drive it from the actual flags-remaining count.)
A clear statement of what to do, not just the warning: "Clear your pending dues to keep riding."
Primary button, full width, yellow: "Clear ₹[amount] now" → takes the rider straight into payment for the flagged due(s), not just to the dashboard
Secondary text link: "View flagged dues" → Screen 7, Flagged tab
This screen is dismissible (small "×" or "Remind me later") as long as the rider hasn't hit the hard limit yet — it's a warning, not yet an enforcement action

## Assistant

_[tool: dc_write]_

Now making the dashboard honor the `#flagged` deep link.

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Screen 8 is `5. Rider Flag Warning.dc.html` — a centered warning modal over the home screen (booking task visible but gated behind it).

- Warning-toned, single triangle in `#FFF8E1`, no animation. H3 "1 flag on your account", body-large supporting line, then the action statement.
- The threshold is computed: `flagLimit − flagCount` spelled out ("Two more flags…"), so setting flagCount to 2 reads "One more flag…" and at 3 it switches to the blocked wording and the × plus "Remind me later" both disappear — enforcement, not warning.
- "Clear ₹95 now" opens a payment sheet (UPI / card / wallet) and ends in a "Dues cleared — flag removed" state, rather than dumping the rider on the dashboard.
- "View flagged dues" deep-links to the dashboard's Flagged tab (the dashboard now reads `#flagged`).

## User

Screen 9 — Account restricted (hard gate) (recommended addition)

The warning in Screen 8 implies a consequence; this is that consequence actually landing. Needed so "will block your account" isn't just a threat that's never designed. Appears in place of the normal booking flow once the flag limit is reached and the rider tries to book a ride.

Full-screen, not dismissible — no "×," no back-swipe-and-ignore. This is the one screen in the whole flow allowed to fully block the primary task.
Icon: a locked/paused treatment, error-toned but calm — this should feel like a clear stop, not a punishment
Headline, H3: "Booking is paused"
Supporting line: plainly state why, in the rider's own history, not as an accusation: "You've reached the flag limit on unresolved dues. Clear them to keep booking rides."
Show the outstanding flagged amount(s) directly on this screen (reuse the Flagged tab's row style) so the rider doesn't have to navigate elsewhere to see what's owed
Single primary action: "Clear ₹[amount] and continue" — this is the only way off this screen
No secondary "skip" or "later" option here — that's the entire point of the hard gate

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

