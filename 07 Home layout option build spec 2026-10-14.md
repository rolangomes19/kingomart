# Home layout option: build spec for Claude Code

As of 2026-10-14. Owner: Rolan. Status: spec only. Nothing is built. F2 is unchanged (version 1791873482-88c3).

## 0. Answer

Add a "Home layout" switch (Current | Proposed) to the dark prototype bar. It shows on Home only. Default is Current, so nothing changes until you press Proposed.

Proposed puts a 400 px promo first. The Deals row follows at about 720 px. Image and name of each product card show above the fold at 950 px. Every current feature stays.

Size of the build: 3 files (`Main.dc.html`, `Header.dc.html`, `canvas.json`). No new copy in Main. No new data.

## 1. Final approach

| Item | Current | Proposed |
|---|---|---|
| Promo (hero) height | about 395 px | 400 px (allowed 400 to 420) |
| Block under promo | Identity card, about 145 px | One strip, about 84 px: legal name, phone, 5 origin chips with flags |
| First section after promo | Shop by origin, from about 810 px | Deals ending soon |
| First product card top | about 2,200 px | about 720 px |
| Card seen at the 950 px fold | none | image, name and pack size (about 55 to 60% of the card). Price or lock line is just below |
| Section gap | 88 px | 64 px (Deals: 20 px) |
| Order | hero + identity, origin, how, deals, new, apply | promo, strip, deals, new, origin, how, apply, identity card, footer |

All px are CSS estimates, plus or minus 150 px. The canvas was not rendered. Step 1 below measures them.

### Defaults chosen for the 3 open questions

| Question | Default | Reason |
|---|---|---|
| Promo height | 400 px | Low end of your 400 to 420 range |
| Where "How an order works" goes | Full section, 6th. The "See how ordering works" link for approved buyers stays | All features kept. Edit only what is asked, so no new guest link |
| Identity block | Strip carries legal name and phone. Full card (address, phone, licence, TRN) moves above the footer | Fraud fear is a first-order barrier (index lookup: F4 4.1). Seller and phone stay in view |

The first wireframe showed "Dubai, TRN" in the strip. The build shows legal name and phone. Licence and TRN are still "[to confirm]" placeholders, so they stay in the full card only.

## 2. Scope

| In | Out |
|---|---|
| Home (`Main.dc.html`) | All other screens |
| Toggle in `Header.dc.html`, shown only when a screen passes a layout prop | Category (F10 rules 1 to 5 still undecided) |
| Change log sticky in `canvas.json` | New copy, new data, ad slots, "Sponsorisé" label |
| FR and AR labels for the toggle only (draft) | Board resize. Home board stays 1440 x 4000 |

## 3. Build steps (in order)

1. Baseline. Open Home at 1440 x 950, guest, EN, EUR, Plum. Save screenshots. Measure: promo bottom, first deal card top. Repeat for pending and approved.
2. Spike. Check what `sc-if` and `sc-for` leave in the DOM. If a wrapper element stays, the CSS in section 5 (`display:contents`) fixes it.
3. Header: add the toggle (section 4).
4. Main: state, wrappers, classes, CSS, proposed markup (section 5).
5. Tune padding until section 6 check 4 passes.
6. Run all checks in section 6.
7. Read the artifact, then publish to the same URL. Update logs (section 8).

## 4. Header.dc.html

Same pattern as "View as". The group shows only when a screen passes `setLayout`.

Markup. Put it in the dark bar, before the `hasSwitch` block:

```html
<sc-if value="{{hasLayout}}" hint-placeholder-val="{{true}}">
  <span style="display:flex;align-items:center;gap:6px" role="group" aria-label="{{t.layout}}">
    <sc-for list="{{lays}}" as="l" hint-placeholder-count="2"><button type="button" class="hs" aria-pressed="{{l.pressed}}" aria-label="{{l.aria}}" title="{{l.aria}}" onClick="{{l.pick}}" style="{{l.style}}"><span>{{l.text}}</span></button></sc-for>
  </span>
</sc-if>
```

Both labels always show. This breaks the icon-only rule of F9 4a on purpose. With two options, a label beats an icon.

Strings. Add to `S` (FR and AR are drafts, need native review):

```js
layout: ['Home layout', "Mise en page de l'accueil", 'تخطيط الصفحة الرئيسية'],
lcur: ['Current', 'Actuelle', 'الحالي'],
lprop: ['Proposed', 'Proposée', 'المقترح'],
```

Logic. In `renderVals`:

```js
const setLayout = this.props.setLayout;
const layout = this.props.layout === 'proposed' ? 'proposed' : 'current';
// in the returned object:
hasLayout: typeof setLayout === 'function',
lays: [['current', t.lcur], ['proposed', t.lprop]].map(([k, l]) => ({ aria: l, text: l, pressed: layout === k ? 'true' : 'false', style: layout === k ? onS : offS, pick: () => setLayout(k) })),
```

Props. Add to `data-props`: `"layout":{"editor":null,"default":"current"},"setLayout":{"editor":null}`.

## 5. Main.dc.html

### 5.1 Logic

```js
// KM: add
layout() { return KM.get('km_layout', 'current', ['current', 'proposed']); },
// state:
state = { account: 'guest', lang: KM.lang(), cur: KM.cur(), layout: KM.layout() };
// renderVals: const lay = st.layout || 'current';
layout: lay, isCur: lay === 'current', isProp: lay === 'proposed',
setLayout: (k) => { KM.put('km_layout', k); this.setState({ layout: k }); },
chips: ['DZ', 'US', 'VN', 'BR', 'BE'].map((c) => ({ code: c, name: KM.cn(c, lang) })),
```

### 5.2 Markup

| Change | Where |
|---|---|
| Add `layout="{{layout}}" set-layout="{{setLayout}}"` | `<dc-import name="Header">` |
| Add `data-layout="{{layout}}"` | `<div class="kp" dir="{{dir}}">` |
| Wrap everything between Header and Footer in `<div class="hm">` | Footer stays outside, last |
| Wrap the existing gradient hero block (hero + identity card) in `<sc-if value="{{isCur}}" hint-placeholder-val="{{true}}">` | No other edit to that block |
| Add class `s-bento` | "Shop by origin" `div.wrap.sec` |
| Add class `s-how` | `div.wrap.sec#how` |
| Add class `s-deals` | Deals `div.wrap.sec` |
| Add class `s-new` | "New this week" `div.wrap.sec` |
| Add class `s-apply` | `div.wrap.sec#apply` (inside the `notApproved` `sc-if`) |
| Add `<p class="mut dn" style="font-size:13px;margin-top:12px">{{t.dealsText}}</p>` after the Deals grid | Inside `.s-deals` |
| Move `aspect-ratio:4/3` from the inline style of `.ph` in deal cards to the class `.dc .ph` | Same look in Current |

Then add one `<sc-if value="{{isProp}}" hint-placeholder-val="{{false}}">` block with three parts.

Part A, promo (class `p-promo`):
- Same gradient wrapper as the current hero.
- `.wrap` with `padding-top:32px;padding-bottom:28px`. Grid gap 40 (was 56).
- Left column: copy the current one. Change h1 48 to 44 px (margin-bottom 22 to 16). Change p 18 to 17 px (margin-bottom 32 to 24). Keep both `sc-if` CTA sets.
- Right column: copy the current departure card. Change `.core` padding 26 to 20 and gap 20 to 14. Route font 32 to 26 px (arrow 28 to 24). KM line `margin-top:-10px` to `-6px`. All 6 data rows stay.

Part B, strip (class `wrap p-strip`, `padding-top:16px`):

```html
<div class="card" style="padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px 24px;flex-wrap:wrap">
  <div style="font-size:14px;line-height:1.5"><b dir="ltr">KingoMart General Trading L.L.C.</b> · {{t.callTitle}} <span class="mono" dir="ltr">+971 4 834 2279</span></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap">
    <sc-for list="{{chips}}" as="c" hint-placeholder-count="5"><a class="fc" href="Category.dc.html" style="display:inline-flex;align-items:center;gap:8px"><span class="org f-{{c.code}}" role="img" aria-label="{{c.name}}"></span>{{c.name}}</a></sc-for>
  </div>
</div>
```

Part C, full identity card (class `wrap p-who`): copy the 3-column card from the current hero (`t.whoTitle`, address, `t.callTitle`, `t.hours`, `t.regTitle`, `t.lic`, `t.trn`). Keep the "[to confirm]" text.

### 5.3 CSS

Put it in the `<style>` block, outside the `/*KMTHEME*/` markers (those are generated).

```css
.hm{display:flex;flex-direction:column}
.hm>.wrap{width:100%}
.hm sc-if,.hm sc-for{display:contents}
.dn{display:none}
.dc .ph{aspect-ratio:4/3}
.kp[data-layout=proposed] .sec{padding-top:64px}
.kp[data-layout=proposed] .p-promo{order:1}
.kp[data-layout=proposed] .p-strip{order:2}
.kp[data-layout=proposed] .s-deals{order:3;padding-top:20px}
.kp[data-layout=proposed] .s-new{order:4}
.kp[data-layout=proposed] .s-bento{order:5}
.kp[data-layout=proposed] .s-how{order:6}
.kp[data-layout=proposed] .s-apply{order:7}
.kp[data-layout=proposed] .p-who{order:8}
.kp[data-layout=proposed] .s-deals .sh{margin-bottom:12px}
.kp[data-layout=proposed] .s-deals .sh h2{font-size:26px}
.kp[data-layout=proposed] .s-deals .sh p{display:none}
.kp[data-layout=proposed] .dn{display:block}
.kp[data-layout=proposed] .dc .ph{aspect-ratio:16/10}
```

Why each rule:
- `.hm>.wrap{width:100%}`: `.wrap` has `margin:0 auto`. In a column flex box that shrinks it to its content width.
- `display:contents`: makes `sc-if` children real flex items, so `order` works.
- The `.sec` rule comes before the `.s-deals` rule on purpose. Equal specificity, last wins.

### 5.4 canvas.json

Add one row to the sticky note `changelog`: date, "Home layout switch (Current | Proposed) added", by.

## 6. Checks

| # | Check | Pass rule |
|---|---|---|
| 1 | Current unchanged | Screenshot diff vs step 1 baseline is 0 for guest, pending, approved at 1440 px. Wait 1 s for the `rise` animation |
| 2 | Default and storage | Fresh load shows Current. With storage blocked it still shows Current and the toggle still works |
| 3 | Toggle scope | Shows on Home only. Other screens look the same |
| 4 | Proposed numbers | Promo bottom minus header bottom is 400 to 420 px. First deal card top is 700 to 740 px. At 1440 x 950, image, name and pack size of the 4 deal slots are visible |
| 5 | Features present | Bar and header. Headline, text, 2 CTAs by state. Departure card with 6 data points. Legal name and phone in strip. Full identity card. 5 origin chips. Origin bento. Offer tile and 3 deal cards. 3 new rows. 5 order steps. Who can order and 5 documents (guest, pending). Footer |
| 6 | Account states | Guest and pending: "Apply for access" and "Browse prices" CTAs. Guest: lock label and MSRP on cards. Pending: pallet price on cards. Approved: case price on cards, "Browse the catalogue" and "See how ordering works" CTAs. Offer tile text per state. "Choose products" button in the departure card in all states |
| 7 | Language | EN, FR, AR (right-to-left): no overflow, chips wrap, strip stays one card. Promo at most 440 px in FR and AR |
| 8 | Currency | EUR and USD both render |
| 9 | Palettes | Plum, Ocean, Forest, Cobalt |
| 10 | Widths | 1280, 1024, 390: no horizontal scroll. The 400 px target applies from 1280 |
| 11 | Keyboard | Toggle reachable by Tab. Focus ring visible. `aria-pressed` correct |
| 12 | Reduced motion | No animation with the OS setting on |
| 13 | Labels | Sample-data bar and every "[to confirm]" still visible |

## 7. How to decide after you toggle

| Question | Where to look |
|---|---|
| Do products show without scrolling? | Proposed, 1440 x 950 |
| Is the promo still strong at 400 px? | Both, hero area |
| Is the seller visible early? | Strip (Proposed) vs identity card (Current) |
| Does the page feel shorter? | Scroll length. Proposed is about 300 px shorter (estimate) |
| Does the guest lock read well so high up? | Deals row, guest view |

The toggle compares looks. It does not show which layout sells more. No audited source proves product-first beats promo-first (F10 sections 4 and 7). Test both with approved buyers before you commit.

## 8. After the build

| File | Update |
|---|---|
| F2 | Sticky note row (section 5.4). Publish to the same URL |
| F12 (this file) | Status line, change log row, measured px in section 1 |
| F0 index | Section 1 F2 row, section 6, section 8 row |

## 9. Risks and limits

| Risk | Effect | Handling |
|---|---|---|
| CSS `order` changes visual order only | Tab and screen-reader order follow the old DOM order in Proposed | Prototype only. A production build must reorder in the DOM |
| `sc-if` may leave a wrapper element | `order` fails | Spike in step 2. The `display:contents` rule is the fix |
| Longer FR and AR text | Promo above 420 px | Accept up to 440 px. Shorten hero text only if you approve |
| Price or lock line is below the fold | Guests see the image and name first | Accepted. A full card needs a promo of about 320 px (F10 rule 1) |
| Prototype bar costs about 46 px of the fold (estimate) | Production cards sit about 46 px higher | Note only |
| Proposed misses F10 rule 1 (banner 320 px or less) and rule 2 (product row top at 620 px or less) | Weaker fit to the research | The Home promo holds the departure card. You chose 400 to 420 px |
| px values are estimates | Targets may need small padding changes | Step 1 and check 4 measure them |
| FR and AR toggle labels are draft | Wrong wording | Native review, as for all FR and AR copy (F9) |

## 10. Kickoff prompt for Claude Code

```
Read "claude/00 KingoMart reference index.md", then "claude/07 Home layout option build spec 2026-10-14.md".
Build the Home layout option in the F2 prototype (https://claude.ai/artifact/LXW1E3jhvhKxt5D7nRpLoH).
Read the artifact first. Edit only Main.dc.html, Header.dc.html and canvas.json.
Follow section 3 in order. Measure before and after. Keep Current pixel-identical.
Run section 6. Publish to the same URL. Then do section 8.
Do not change any other screen. Keep sample-data labels.
```

## Sources

- F2 prototype code, read 2026-10-14: `project/Main.dc.html`, `project/Header.dc.html` (artifact https://claude.ai/artifact/LXW1E3jhvhKxt5D7nRpLoH, version 1791873482-88c3)
- F10 `claude/06 Marketplace banner and product fold patterns 2026-10-14.md` (sections 4, 6, 7)
- F0 `claude/00 KingoMart reference index.md` (lookups, decisions, next steps)
- F9 `claude/05 Prototype rebuild plan 2026-10-13.md` (visual system 4a, known gaps)
- Three-panel wireframe from this session (current, researched average, proposed)

## Change log

| Date | Change | By |
|---|---|---|
| 2026-10-14 | Created build spec. Check 6 corrected: guest and pending both get "Apply for access" and "Browse prices" | Claude |
| 2026-10-14 | Built in the vanilla-JS prototype (src/app.js, s-home.js, styles.css), not Main/Header.dc.html. Switch in presenter strip, Home only. Measured at 1440x950 (promo bottom minus top, first deal card top): baseline hero 624 px, Proposed EN 406 px / FR 441 px / AR 423 px; first deal card top 719 (EN) / 754 (FR). Current output is byte-identical (9 stage x language combos). canvas.json, F2 publish and F0 index not done (not in this repo) | Claude |
