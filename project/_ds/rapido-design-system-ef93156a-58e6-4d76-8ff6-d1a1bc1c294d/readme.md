# Rapido Design System

The design system for **Rapido Captain**, the rider-side (driver) mobile app of the
Indian bike-taxi and auto ride-hailing service. Everything here is extracted from
the sources listed below — nothing is inferred from the public brand.

The system covers one product surface: a **390 × 844 iOS phone app** used by
Captains to go online, accept and run rides, track earnings, and manage their
account. There is no marketing site, no admin console and no rider-passenger app
in the sources, so none are recreated here.

---

## Sources

| Source | What it gave us |
| --- | --- |
| **`Rapido design system.fig`** (attached Figma file, mounted read-only) | The whole system. Page **1. Screen reference** → frame *Rapido rider app UI* — five full-screen PNG reference shots. Page **2. Rapido Design System** → three specimen frames (*Colors*, *Typography*, *Spacing & Radius*). Page **3. Rapido Components** → frame *rapido-components*, the component showcase. Plus 3 Figma Variable collections (54 variables) and an iOS device-chrome library. |
| **`uploads/Rapido rider app UI.pdf`** | Same five rider screens as page 1, in print form. Used only as a cross-check. |
| **`uploads/Rapido Logo PNG SVG Vecrtor.svg`** | ⚠️ **Not present in the project.** The upload did not land — see *Open questions*. |

Figma node ids are preserved in a `// figma node: <id>` header at the top of every
generated component file, so any value here can be traced back to the file.

---

## Index

| Path | What it is |
| --- | --- |
| `readme.md` | This file — brand guide and manifest |
| `SKILL.md` | Agent-Skills front matter for use outside this project |
| `styles.css` | **The one file consumers link.** `@import`s only |
| `base.css` | Minimal body/link defaults |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css` |
| `components/_generated/` | `fig-tokens.css` (raw Figma Variables incl. dark mode), `fig-typography.css`, `fig-assets.css` + the bitmap it references |
| `components/buttons/` · `badges/` · `forms/` · `cards/` · `lists/` · `navigation/` · `chrome/` · `messaging/` | The 32 components covering all 26 source families |
| `guidelines/` | 18 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `templates/rider-app-screen/` | `RiderAppScreen.dc.html` — starting template for a new Captain screen |
| `ui_kits/rider-app/` | Click-through recreation of all five Captain screens — start at `index.html` |
| `assets/brand/` | `logo-rapido-captain.png` — the wordmark, cropped from the source screens |
| `assets/imagery/` | `map-bangalore.png`, `avatar-captain.png`, `illustration-refer-earn.png`, `badge-incentive-helmet.png` |
| `assets/reference/` | `screen-1…5.png` — the original reference shots, kept for comparison |

### Components

**Buttons** — `ButtonPrimary`, `ButtonSecondary`, `ButtonSmall`, `ButtonText`
**Badges** — `BadgeOngoing`, `BadgeCompleted`, `BadgeCancelled`
**Forms** — `InputSearch`
**Cards** — `CardEarnings`, `CardStat`, `CardBooking`, `CardProfileHeader`
**Lists** — `ListItemNotification`, `ListItemTransaction`
**Navigation** — `NavigationTopAppBar`, `NavigationTabBar`, `NavigationBottomNavBar`
**Device chrome** (iOS library, not Rapido brand) — `StatusBar`, `StatusBarTime`, `StatusBarBattery`, `StatusBarDynamicIsland`, `HomeIndicatorDark`
**Messaging** (iOS library, not Rapido brand) — `Profile`, `UITitleBarAccount`, `UIBottomBar`, `ChatBackground`, `IconPlus`, `IconCamera`, `IconMicrophone`, `IconAttachment`, `IconAudioCall`, `IconVideoCall`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what &
when, usage example, variants). Each directory has one `@dsCard`-tagged HTML card
showing its states.

**All 26 source component families are built.** Note that 15 of them are *not*
Rapido brand UI: the `StatusBar*` / `HomeIndicatorDark` device chrome and the
whole `components/messaging/` group (`Profile`, `UITitleBarAccount`,
`UIBottomBar`, `ChatBackground` and six 24px composer icons) come from an iOS
messaging template that sits unused in the same .fig — dark bars, SF Pro, iOS
blue, sample content "Alena · typing…". They are shipped for completeness against
the source inventory. **Do not reach for them when designing Rapido screens**; the
device chrome is useful for framing a phone mockup, the messaging group is not.

Their geometry needed hand repair: `Profile`'s verified badge was restored from
the identical path data that survived inside `UITitleBarAccount`; the 0.5px
hairlines in both bars became real 0.5px rules; `IconPlus` was rebuilt from its
layers' exact 1.5×18 bar frames; and the five remaining composer icons
(`IconCamera`, `IconMicrophone`, `IconAttachment`, `IconAudioCall`,
`IconVideoCall`) carry **Lucide 0.469 path data as a flagged substitution** —
their source layers are boolean operations the extractor could not decode.

### Intentional additions

- **`Icon`** (in `ui_kits/rider-app/kit.jsx`, not a DS component) — a thin Lucide
  wrapper. Needed because the source has no icon assets, only pixels.
- The rider-app kit adds screen-level surfaces the component library doesn't
  define: `BrandHeader`, `TitleHeader`, `Tabs`, `BottomNav`, `RouteRail`,
  `IconBubble`, `Toggle`, `PhoneShell`. These are UI-kit scaffolding, not
  primitives; see `ui_kits/rider-app/README.md` for why the kit's bottom nav
  differs from `NavigationBottomNavBar`.

---

## Content fundamentals

**Voice.** Plain, functional, second person. The app talks to the Captain about
their money and their next ride, and it never editorializes. "Your total earnings
for this week are displayed here." "You will receive ride requests." "New bookings
will appear here."

**Person.** Always *you* / *your*, never *I* or *we*. There is no first-person
voice anywhere in the source — no "We've credited your wallet", just "₹560.50 has
been added to your Rapido wallet."

**Casing.** Title Case for screen titles, section headings and button labels
("Earnings", "Recent Transactions", "Ongoing Bookings", "Start Ride", "View
details" — note the lowercase *d*: two-word actions are mixed, so copy the source
string rather than normalising). Sentence case for body copy. ALL CAPS only for
the 10px Overline style and the small route labels PICKUP / DROP.

**Sentence shape.** One sentence per notification body, always ending in a period.
Labels and metrics never take a period. Timestamps are relative when recent
("2 min ago", "10 min ago", "35 min ago"), then absolute ("Yesterday, 8:30 PM",
"23 May, 9:20 PM").

**Numbers.** ₹ prefix, thousands comma, two decimals — `₹2,340.50`, `₹26,430.50`,
`₹0.00`. Never blank, never "—". Credits carry a leading `+ ` in green, debits a
leading `- ` in red. Distances get one decimal and a lowercase unit set one step
lighter than the figure: **5.2** km. Durations are compact: "14 min", "12h 45m".
Progress reads "1 / 5" with spaces.

**Enthusiasm, rationed.** Exactly three exclamation marks exist in the source, all
in notifications, all rewards: "Incentive unlocked!", "Stay safe!", "Great job!",
"Your performance is great!" Never in a button, a heading or a form.

**Emoji: none.** Not one, anywhere. The only non-Latin glyphs are ₹ and a filled
★ next to the Captain's rating.

**IDs.** Shown verbatim and copyable: "Captain ID: RP1234567", "ID: RD1748392045",
"Order #RD-4523". Bank accounts mask with asterisks: `*******3467`.

**Locality.** Real Bangalore place names throughout — Koramangala, Indiranagar,
HSR Layout, BTM Layout, Silk Board, MG Road, Jayanagar — with six-digit PIN codes.
Names are Indian ("Ramesh Kumar"). Keep this specificity; generic "123 Main St"
placeholders read as a different product.

---

## Visual foundations

**The palette is one colour plus black.** `#FDC830` yellow is the entire brand.
It appears as filled primary buttons, the active tab underline, the active bottom-nav
item, badge pills, map pins and the wordmark dot — and nowhere else. Black `#1A1A1A`
carries all emphasis: headings, amounts, button labels on yellow. There is **no
secondary brand colour**, no purple, no teal, and no gradient anywhere in the file.

**Neutrals do the structural work.** A 10-step scale (`#212121` → `#FAFAFA`).
Body text `#1A1A1A`, secondary `#666666`, tertiary/metadata `#888888`, borders
`#E8E8E8` with card hairlines a step lighter at `#F0F0F0`, app canvas `#FAFAFA`,
sunken/empty states `#F5F5F5`.

**Semantics are the Google palette**, unmodified: success `#34A853`, error
`#EA4335`, warning `#FBBC04`, info `#4285F4`, each with a very light tint for
row and badge backgrounds. Blue is *only* for navigational/informational text —
"View details", "View all", "12h 45m", the progress bar. It is never a button fill.
Yellow-light `#FFF3CC` is the one branded surface tint: the wallet card and the
performance banner.

**Type: Inter, and only Inter.** Six weights (300–800). No serif, no mono, no
display face. 16 named styles from Overline 10px to H1 28/36. Sizes are 10, 11, 12,
13, 14, 15, 16, 18, 20, 24, 28, 32 — note **13px and 15px are real steps**, not
rounding errors: 13px is the standard metadata size, 15px the standard row-title
size. Line heights are absolute pixels, not ratios. Tabular numerals for all
money. The wordmark is Extra Bold 32px lowercase at −1px tracking.

**Layout.** Fixed 16px screen gutter. 16px card padding. 12px between cards, 24px
between sections. Cards are full-bleed to the gutter and stack vertically; the only
horizontal splits are 2-up tiles (target / time left) and 2–3-up divided cards
(earnings strip, wallet). Headers and the bottom nav are fixed; content scrolls
between them. Minimum tap target 44px.

**Corner radii.** 12px is the workhorse — cards, buttons, inputs. 8px for tinted
banners and inline chips, 4px for the smallest chips, 999px for badges, pills,
avatars and toggles. Nothing is square except the drop marker.

**Elevation: almost none.** The system is flat. Surfaces separate by a 1px
`#F0F0F0` hairline, not a shadow. Exactly one soft shadow exists in the whole
file — `rgba(0,0,0,0.051)` — used for the floating safety button over the map.
Dividers inside cards are inset 16px from the left so they align with text, not
the card edge.

**Backgrounds.** Predominantly flat white with an off-white `#FAFAFA` app canvas.
No patterns, no textures, no gradients, no full-bleed photography. The one
full-bleed element is the live map on Home, which runs edge to edge between two
card stacks. Imagery is a cool, desaturated grey-green map and two flat vector
illustrations (the Refer & Earn couple, the helmet avatar) in a warm limited
palette — yellow, navy, skin tones, no outlines, no grain.

**Borders.** 1px, always. Secondary buttons take a 1px black border; cards a 1px
`#F0F0F0`; the bottom nav a 1px `#EBEBEB` top edge; tab strips a 1px `#F0F0F0`
bottom edge with a 2px yellow active underline sitting on top of it.

**Transparency and blur: none.** No glassmorphism, no scrim overlays, no
protection gradients over imagery. Text never sits on a photo. Where content
needs separation from the map it sits in an opaque white card below it.

**Motion.** The source is static, so the system specifies the minimum: 180ms
ease for state changes (toggle knob, tab underline slide), instant for navigation.
No bounces, no spring, no parallax, no skeleton shimmer beyond a plain fade.

**Interaction states.**
- Hover (web/tablet only): 4% black overlay on cards and rows.
- Press: primary button darkens `#FDC830` → `#E5A800`; secondary and rows take a
  `#F5F5F5` fill. Nothing scales or shrinks.
- Disabled: `#E8E8E8` fill with `#AAAAAA` label.
- Active nav: colour change plus weight change (Regular → Semi Bold / Bold), never
  a pill or a background chip.

---

## Iconography

**No icon assets ship with the source.** The .fig carries screen icons only as
flattened pixels inside the five reference PNGs. The materialised components do
contain real extracted vector paths for the icons that were live Figma vectors —
the bottom-nav glyphs in `NavigationBottomNavBar`, the search magnifier in
`InputSearch`, the chevrons in the list items and the route markers in
`CardBooking`. Use those components rather than redrawing their glyphs.

**Everything else is a flagged substitution: Lucide 0.469, from CDN.**
`https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js`. Lucide matches the
source closely: 24px grid, outline-only, ~1.75–2px stroke, rounded caps and joins,
geometric rather than hand-drawn. Icons render at 20–23px inline and 19–24px
inside a 36–52px tinted circle (`IconBubble`). Active/filled states use
`fill=currentColor`, which approximates but does not exactly match the source's
filled glyphs.

**No icon font. No SVG sprite. No PNG icons. No emoji, ever.** The only unicode
characters used as symbols are **₹** for currency and **★** for the rating.

**The colour rule for icons:** black `#1A1A1A` in headers and menu rows, `#888888`
for inactive/metadata, `#FDC830` for the active nav item, and the matching
semantic colour inside a tinted circle (green icon on `#E8F5E9`, red on `#FDECEA`,
yellow-dark on `#FFF8E1`, blue on `#E3F2FD`).

**Brand mark.** `assets/brand/logo-rapido-captain.png` — the "rapido CAPTAIN"
lockup with the yellow rider glyph, cropped verbatim from the source reference
screens. It is a **raster** crop, not a vector, because the vector logo upload did
not reach the project. Where a raster mark won't do, set the wordmark in type via
`.ds-wordmark` (Inter Extra Bold 32px, −1px tracking, lowercase) with an 8px
yellow dot — which is exactly what the source's own component-page header does.

---

## Open questions

1. **`Rapido Logo PNG SVG Vecrtor.svg` never landed in the project.** Only the PDF
   arrived. Please re-upload it — the wordmark is currently a raster crop from a
   screenshot, which will not hold up above ~44px.
2. **Inter is loaded from Google Fonts**, not from licensed files. If you have
   real Inter binaries, drop them in and I'll swap `tokens/fonts.css` to local
   `@font-face` rules. The device-chrome components ask for SF Pro Text / SF Pro
   Display, which resolve natively on Apple platforms and fall back elsewhere.
3. **Icons are Lucide, not Rapido's own set.** If the real icon set exists as SVGs
   anywhere, it should replace them.
4. **H1 is inferred.** The typography specimen frame names 16 styles but its first
   row's default values weren't recoverable; H1 is recorded as Inter Bold 28/36,
   consistent with the 28px Bold usage counted in the file. Worth a confirm.
5. **Dark mode is declared but not designed.** The Figma variables carry a dark
   mode for two accent colours only (`Accents/Red`, `Accents/Yellow`); no dark
   screen exists. `fig-tokens.css` preserves it under
   `:root[data-theme="dark"]`, but there is no dark theme to build against yet.
