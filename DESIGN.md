# KingoMart design system

The storefront prototype is built from one set of tokens in [src/styles.css](src/styles.css) (`:root`). Screen code in `src/s-*.js` uses classes only. It never writes a size, space, color or duration inline. The only inline styles left carry data: a fill percentage (`--p`), a product hue (`--h`) or a stagger index (`--d`, `--i`).

**Rule:** if you need a value that isn't a token, add the token first, then use it.

## World

The Mediterranean crossing, Algiers to Marseille. A sea-ink "night" stage, a gradient from sea blue to lagoon that follows the palette, and coloured backdrops behind packshots. Light page, dark accents: the hero, the cost estimate, the offer card, the footer and toasts.

## Color

| Token | Use |
| --- | --- |
| `--acc`, `--acc2` | Brand pair, set per palette (`ocean`, `cobalt`, `forest`, `plum`). Never hard-code a brand color. |
| `--grad`, `--grad-soft` | Primary buttons, counters, fill bars / tinted panels |
| `--acc-t`, `--acc-t2`, `--acc-l`, `--acc-h`, `--acc-sh` | Tints, selected rows, focus halo, hover, colored shadow |
| `--sun`, `--sun-ink`, `--sun-b` | Urgency only: cut-off dates, the "add 1 pallet" tip, rationale pins |
| `--night`, `--night2` | Dark surfaces |
| `--on-night`, `--on-night-2`, `--on-night-3` | Text on dark: primary, secondary, tertiary |
| `--bg`, `--card`, `--well` | Page, raised surface, inset surface |
| `--ink`, `--ink2`, `--mut`, `--mut2` | Text hierarchy on light |
| `--line`, `--line2` | Hairlines and control outlines |
| `--veil-1` to `--veil-4` | White overlays on dark or photo surfaces |
| `--ok`, `--warn`, `--bad` (+ `-b` background, `-l` border) | Status only |

## Type

Display: **Bricolage Grotesque** (French grotesque, optical sizes, embedded). Body: Geist. Numbers and codes: Geist Mono.

| Token | Size | Use |
| --- | --- | --- |
| `--fs-0` | 11px | Counters, compact badges |
| `--fs-1` | 12px | Labels, meta |
| `--fs-2` | 13px | Secondary text |
| `--fs-3` | 14px | Controls, small body |
| `--fs-4` | 15px | Body |
| `--fs-5` | 17px | Lead text, card titles |
| `--fs-6` | 20px | h3, prices |
| `--fs-7` | 24px | Block h2, routes |
| `--fs-8` | 28px | Big numbers |
| `--fs-sec` | 28 to 40px | Section titles |
| `--fs-page` | 32 to 48px | Page titles |
| `--fs-hero` | 40 to 68px | Home headline |

Utilities `.t-1` to `.t-7` map to these sizes. Weights: `--fw-reg` 400, `--fw-med` 500, `--fw-semi` 600, `--fw-display` 650, `--fw-bold` 700. Tracking: `--tr-display` -0.035em, `--tr-head` -0.025em, `--tr-num` -0.02em.

## Space

4px base: `--sp-1` 4, `--sp-2` 8, `--sp-3` 12, `--sp-4` 16, `--sp-5` 20, `--sp-6` 24, `--sp-7` 32, `--sp-8` 40, `--sp-9` 48, `--sp-10` 56, `--sp-11` 64, `--sp-12` 72, `--sp-13` 104 (between sections), `--sp-14` 120.

Utilities: `.mt-1` to `.mt-8`, `.mb-2` to `.mb-6`, `.g-1` to `.g-8` (gap), `.row` (flex), `.stack` (grid).

## Shape

| Token | Value | Use |
| --- | --- | --- |
| `--r-xs` | 6px | Flags, sample marks |
| `--r-sm` | 10px | Rows inside cards |
| `--r-md` | 12px | Inputs, image tiles, date boxes |
| `--r-lg` | 16px | Cards, notices, selectable rows |
| `--r-xl` | 20px | Feature panels: product card, departure card, bento tiles, estimate |
| `--r-2xl` | 28px | Hero stage, "How it works" panel |
| `--r-pill` | 999px | Buttons, chips, filter pills, search |

Nested corners are concentric: a 12px image tile inside an 8px-padded product card makes the card 20px.

## Elevation

`--ring` / `--ring-2` (1px outline drawn as a shadow), `--ring-acc` (selected), `--sh-1` (rest), `--sh-2` (hover, tinted with the brand color), `--sh-3` (floating: trust band, dropdown, rationale card). Declare a ring or a shadow stack once per element.

## Motion

Curves follow Emil Kowalski's guidelines:

| Token | Value | Use |
| --- | --- | --- |
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | Everything that enters or responds |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` | On-screen movement (truck on the route, glows) |
| `--ease-drawer` | `cubic-bezier(0.32, 0.72, 0, 1)` | Sheet, toast |
| `--dur-press` | 140ms | Press feedback (`scale(var(--press))`, 0.97) |
| `--dur-fast` | 200ms | Hover, color, label swap, quantity roll |
| `--dur-base` | 280ms | Cards, dropdowns, toasts, page entrance |
| `--dur-slow` | 420ms | Sheet, panels, success ring |
| `--dur-reveal` | 800ms | One-time reveals: fill bars, hero settle |
| `--dur-draw` | 1400ms | Route line and step line drawing |
| `--stagger`, `--stagger-lg`, `--stagger-step` | 50, 80, 260ms | Cascades |

Motion rules:

1. **Hover motion is gated** behind `@media (hover: hover) and (pointer: fine)`, so touch taps never stick.
2. **Every pressable control scales on press.** Buttons and chips use 0.97. Large cards use 0.99.
3. **Reveals play once, on page entry.** A re-render after a click lands in the settled state (`.settled`), so quantity changes don't refill every bar.
4. **Toasts and the rationale card** enter and leave through the same edge with transitions, not keyframes, so a second toast retargets smoothly.
5. **State changes keep a static cue.** "Add to order" swaps to a check and "Added" (blur crossfade), and the cart count ticks. Quantity digits roll in the direction of the change.
6. **The hero is the one authored moment:** a blurred settle, the route drawing, a truck crossing, slow drifting glows.
7. **Reduced motion** removes movement and keeps short opacity changes.

## Components

| Component | Variants | States |
| --- | --- | --- |
| `.btn` | default (gradient), `.ghost`, `.light` and `.glass` (on dark), `.sm`, `.block` | hover, press, `.off` / `[disabled]`, `.done` (label swap), sending (spinner) |
| `.fc` filter pill | — | hover, press, `[aria-pressed=true]` |
| `.chip` | `.ok`, `.warn`, `.bad`, `.acc`, `.sun` | — |
| `.pc` product card | — | hover lift and art tilt, press |
| `.ph` product art | photo modes in `SHOT` (`data.js`): default cut-out, `mul` (shot on white), `full` (scene photo) | pictogram fallback |
| `.dcard`, `.orow2`, `.rad`, `.ob` selectable rows | — | hover, press, selected ring |
| `.route` | — | draws on entry; truck loop |
| `.notice` | default, `.warn`, `.bad`, `.ok` | — |
| `.empty` | icon, title, text, action | — |
| `.qo` quick-order card | Order again (history line), similar deal (reason chip, end date, struck 30-day low) | departure tile selected, quantity roll, Add → Added swap, toast with View order |
| `.save` get more value (cart) | tier row (add 1 pallet), swap row (similar product on the same departure) | Swap with an Undo toast; rows disappear once applied |
| `.chgdep` + `.mvpick` change departure (cart) | shown only on lines of an over-capacity departure | picker lists the offer's other departures with the space left; too-small ones are disabled; moving shows a toast with Undo |
| Buy again (orders) | link on each order line | opens the quick-order card (`.qo`) in a sheet with that line's quantity; closes after Added |

Personalisation rules (logic in `app.js`):
- `buyHist()` counts past orders per product (declined orders excluded).
- `similarDeals()` matches deals to that history by brand, origin and pack.
- `altFor()` only suggests a swap that rides the same departure and is cheaper both per pallet and at least 10% per litre (`VOL` in `data.js`), so a swap really lowers the bill. Each row states its own effect ("€0.45 less per case", "€1,008 less in total"); rows are never added into one total, because the tier row comes with buying more.

## Icons

[Phosphor Icons](https://phosphoricons.com) 2.1.1, MIT licence, inlined as a sprite in [src/index.tpl.html](src/index.tpl.html). Icons render in `currentColor`.

| Prefix | Weight | Use |
| --- | --- | --- |
| `i-*` | Regular | All interface icons |
| `if-*` | Fill | Active tab, reserved boxes in the pallet meter |
| `pk-*` | Light | Product placeholders when there is no photo |

Phosphor has no PET bottle or pallet, so `pk-pet` and `pk-pallet` are drawn on Phosphor's 256 grid with its Light stroke (12). `i-checkdraw` is a stroked check (20) so the success ring can draw it in.

Every primary action has a leading verb icon or a trailing arrow. The arrow nudges 3px on hover.

## Pallet meter

`meter(filled, cap, mine)` in `app.js` replaces progress bars on departures:
- **Boxes:** one box per pallet group. The box count is a divisor of capacity between 8 and 12, so each box holds a whole number of pallets (24 → 12 boxes of 2, 33 → 11 of 3).
- **Fill:** reserved boxes fill in the brand color, and a part-filled box is clipped to its share. The buyer's own pallets (cart) fill in `--sun`, and a key explains both.
- **Motion:** boxes fill left to right with a `--stagger` cascade the first time the card is seen.
