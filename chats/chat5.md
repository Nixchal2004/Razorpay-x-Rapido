# Rider screen and payments option

_Started 2026-09-02 17:18 UTC_

---

## User

Continuing from "Rider's Dues Tab Design".

## Assistant

We were building out the Dues flow for riders. The goal: capture when a captain confirms a due (via code), show the rider trust-focused messaging, enable payment via UPI/Card/Bank transfer, and track the due through to settlement.

We made these decisions along the way:

- State 0 (Share code) uses info-light tone to avoid alarming before verdict; State 1 (Confirmed due) adds provenance text citing the code verification
- The transition from Trip Details to "Fare moved to Dues" screen only fires when the captain enters the emergency code to verify — not on a timer
- Payment entry point is consistent: Pay button → bottom sheet with three methods → success screen
- The Dues Dashboard pending card now shows "Pending" badge with retry window, not "under review"

Current state:

We have six files in the flow: C. Final Emergency.dc.html (captain verification), Rider Trip Details.dc.html (waits for that verification, then advances), Rider Fare Moved to Dues.dc.html (trust messaging + payment sheet entry), Rider Dues.dc.html (the code-share and confirmed-due states), 4. Rider Dues Dashboard.dc.html (history and pending card), and 7. Rider Dues Cleared.dc.html (success). The payment sheet is now active on the "Fare moved to Dues" screen.

Last change: converted the first card on the Dues Dashboard to a pending-state card with yellow badge and retry timeline.

No open blockers — the flow is end-to-end. Let me know if you want to refine any messaging or adjust the retry window display.

## User

The rider reviewing screen is not supposed to be here, remove it and add payments option on clicking the Pay button

## Assistant

_[tool: grep]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Removed the "captain is reviewing your payment" state (and its 7s auto-advance) — the Dues screen now opens directly on the confirmed pending due. The Pay button opens a bottom sheet with UPI / Card / Net banking, matching the dashboard's sheet, and confirming goes to the Dues Cleared screen.

## User

make the all three cards in settled section unresponsive. No screen is supposed to show up after tapping on them.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Settled cards no longer navigate — chevron, pointer cursor, and hover/press states removed too, so they read as static history rows.

## User

Address these comments from my teammates:

**Verma Ji** (on `Rider Splash.dc.html` at `div:nth-child(2) >div >svg`):
<commented-element>react:    4. Rider Dues Dashboard
dom:      body › div#dc-root › div.sc-host › div › div › div › div › div.scp1.scp2 › div › svg[3/3]
children: path
selector: div:nth-child(2) &gt;div &gt;svg</commented-element>
<teammate-comment>Remove arrow</teammate-comment>

**Verma Ji** (on `Rider Splash.dc.html` at `[data-dc-tpl="37"] >div:nth-child(1) [fill]`):
<commented-element>react:    4. Rider Dues Dashboard
dom:      body › div#dc-root › div.sc-host › div › div › div › div › div.scp1.scp2 › div › svg[3/3]
children: path
selector: [data-dc-tpl="37"] &gt;div:nth-child(1) [fill]</commented-element>
<teammate-comment>Remove arrow</teammate-comment>

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Removed the chevron arrow from the dues rows. Both comments pointed at the same element (the row's trailing arrow on the Dues Dashboard, despite being filed on Rider Splash), so one change covers them.

Worth noting: pending rows are still tappable, they just no longer show an affordance arrow. Say the word if you want a different cue there.

## User

change to book ride

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

Button on the Dues Cleared screen now reads "Book ride" (still links to the rider home screen).

## User

This screen is supposed to appear after the splash screen. Add splash screen for this flow. with loading animation.

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Added `R. Final Restricted Splash.dc.html` — same yellow rapido splash as the existing rider splash, with the bouncing-dot loader plus a "Checking your account" line, auto-advancing (2.2s, tweakable) into the Account Restricted screen. Tapping skips ahead.

## User

This screen is supposed to appear after the splash screen. Add splash screen for this flow. with loading animation.

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Added `R. Final Flag Warning Splash.dc.html` — matching the restricted splash (logo + bouncing dots, no status line, since you removed that one), auto-advancing into `5. Rider Flag Warning` after 2.2s; tap to skip.

