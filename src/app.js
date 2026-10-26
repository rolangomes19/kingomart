/* Core: state, i18n, helpers, shell, strip, layers, router. Screens live in s-*.js and register into SCR. */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const SCR = {}; // screen render functions: SCR.home = () => html
const A = {};   // click actions: A.name = (el, ev) => void

const DEFAULT = {
  screen: 'home', stage: 'approved', device: 'web', market: 'fr', pal: 'ocean', lang: 'en', cur: 'EUR', layout: 'current', marks: false, rat: false
};
const S = Object.assign({}, DEFAULT, {
  qo: {}, cart: [{ pid: 'p1', off: 'o1', dep: 'KM-0412', qty: 3 }, { pid: 'p2', off: 'o1', dep: 'KM-0412', qty: 1 }, { pid: 'p4', off: 'o1', dep: 'KM-C0207', qty: 2 }],
  order: null, orders: [], sel: { pid: 'p1', off: 'o1', dep: null, qty: 3, img: 0, lotInco: 'cif' },
  flt: { orig: {}, pack: {}, deals: false, sort: 'new', q: '' }, dtab: 'deals', htab: 'all', osel: 'req', notified: {}, tmpl: {},
  lane: 'all', story: -1, toast: null, sheet: null, card: null, just: false, tick: false, sent: false,
  apply: { kbis: false, pass: false, agree: false, err: false }, co: { imp: 'self', agree: false, sending: false }
});
const VALID = { stage: ['guest', 'pending', 'approved'], device: ['web', 'phone'], market: ['fr', 'dz'], pal: ['ocean', 'cobalt', 'forest', 'plum'], lang: ['en', 'fr', 'ar'], cur: ['EUR', 'USD'], layout: ['current', 'proposed'] };

/* ---------- persistence (preferences only) ---------- */
const store = {
  get(k) { try { return localStorage.getItem('km_' + k); } catch (e) { return null; } },
  put(k, v) { try { localStorage.setItem('km_' + k, v); } catch (e) { /* storage blocked: keep in memory */ } }
};

/* ---------- i18n and format ---------- */
const IXN = () => KM.IX[S.lang];
const t = (k, ...a) => {
  const r = T[k];
  if (!r) return k;
  const v = r[IXN()] !== undefined ? r[IXN()] : r[0];
  return typeof v === 'function' ? v(...a) : v;
};
const L3 = (arr) => (arr[IXN()] !== undefined ? arr[IXN()] : arr[0]);
const m = (n) => KM.money(n, S.lang, S.cur);
const D = (a) => KM.date(a[0], a[1], S.lang);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const dirOf = () => (S.lang === 'ar' ? 'rtl' : 'ltr');
const pl = (n) => (S.lang === 'fr' ? n + (n > 1 ? ' palettes' : ' palette') : S.lang === 'ar' ? (n === 1 ? 'باليت واحد' : n + ' باليت') : n + (n === 1 ? ' pallet' : ' pallets'));
const ctr = (n) => (S.lang === 'fr' ? n + (n > 1 ? ' conteneurs' : ' conteneur') : S.lang === 'ar' ? (n === 1 ? 'حاوية واحدة' : n + ' حاويات') : n + (n === 1 ? ' container' : ' containers'));
const qtyL = (pr, n) => (pr.shape === 'lot' ? ctr(n) : pl(n));
const cs = (n) => (S.lang === 'fr' ? n + ' caisses' : S.lang === 'ar' ? n + ' صندوقاً' : n + ' cases');
const sm = () => '<span class="smp">Sample</span>';
const hoursTxt = () => { const [a, b] = KM.hours(MARKETS[S.market].tz, S.lang); return t('hrs', a, b, L3(MARKETS[S.market].city)); };

/* ---------- graphics ---------- */
const ic = (n, cls = '') => `<svg class="i ${cls}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const flag = (c, big) => `<span class="org f-${c}" role="img" aria-label="${esc(L3(COUNTRY[c] || [c]))}"></span>`;
const pk = (pt) => `<svg class="pk" viewBox="0 0 256 256" aria-hidden="true"><use href="#pk-${pt}"/></svg>`;
/* Photos: img/<key>.<ext> if the build found one (see build.mjs), else ''. */
const im = (k) => HAVE_IMG[k] || '';
const imgTag = (k, cls, alt = '') => (im(k) ? `<img class="${cls}" src="${im(k)}" alt="${esc(alt)}" loading="lazy" decoding="async">` : '');
/* Product art: packshot photo if supplied, else the pack pictogram, on the product's colored backdrop. */
const art = (pr, view = '') => imgTag('p/' + pr.id + (view ? '-' + view : ''), view ? 'cover' : 'shot ' + (SHOT[pr.id] || '')) || pk(view === 'case' ? (isLot(pr) ? 'lot' : 'carton') : view === 'pallet' ? 'pallet' : view === 'label' ? 'label' : pr.pt);
const hueOf = (pr) => `--h:${HUE[pr.id] || 230}`;
function injectFlags() {
  const css = Object.keys(FLAGS).map((c) => `.f-${c}{background-image:url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20' preserveAspectRatio='xMidYMid slice'>${FLAGS[c]}</svg>`)}")}`).join('');
  document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);
}

/* ---------- derived product helpers ---------- */
const PBY = {}; PRODUCTS.forEach((p) => { PBY[p.id] = p; });
const isLot = (pr) => pr.shape === 'lot';
const cut = (pr) => (pr.low ? Math.floor(((pr.low - pr.tiers[0].price) / pr.low) * 100) : 0);
const nUnits = (pr) => { const s = pr.pk[0]; const a = s.match(/(?:case|carton) of (\d+)/) || s.match(/^(\d+)kg carton/); return a ? +a[1] : 1; };
const unitN = (pr) => (isLot(pr) ? pr.ppt : pr.tiers[0].price / nUnits(pr));
const arrOf = (org) => { const d = DEPS[DEPMAP[org][0]]; return d; };
const fromPallet = (pr) => (isLot(pr) ? pr.ppt : KM.r2(pr.tiers[0].price * pr.pc));
const depTitle = (id) => { const d = DEPS[id]; return id === 'KM-DED' ? L3(['Dedicated truck', 'Camion dédié', 'شاحنة مخصصة']) : L3(MODE[d.mode]).split(',')[0] + ' ' + id; };
const route = (d) => L3(PLACE[d.from]) + ' ' + t('to') + ' ' + L3(PLACE[d.to]);

/* ---------- shared UI builders ---------- */
let pinN = 0;
const pin = (k) => (S.rat ? `<button class="pin" data-a="pin" data-k="${k}" aria-label="${esc(t('ratLbl'))} ${++pinN}">${pinN}</button>` : '');
const lockedLbl = () => `<span class="lockl ${S.just ? 'pxu' : ''}">${ic('lock')}${t('seePrice')}</span>`;
function priceBlock(pr) {
  const u = S.just ? 'pxu' : '';
  if (isLot(pr)) {
    if (S.stage === 'guest') return `${lockedLbl()}<span class="msrp mut">${esc(L3(pr.pk))}</span>`;
    return `<span class="pr ${u}">${m(pr.ppt)}</span><span class="mut">${t('perT')} · ${esc(pr.inco)}</span>`;
  }
  const c = pr.tiers[0].price;
  if (S.stage === 'guest') return `${lockedLbl()}<span class="mut">${t('msrp')} ${m(pr.msrp)} ${t('per_' + pr.uw)}</span>`;
  if (S.stage === 'pending') return `<span class="pr ${u}"><small>${t('from')} </small>${m(KM.r2(c * pr.pc))}</span><span class="mut">${t('perPallet')}</span>`;
  const un = KM.r2(c / nUnits(pr));
  return `<span class="pr ${u}">${m(c)}</span><span class="mut">${t('perCase')} · ${m(un)} ${t('per_' + pr.uw)}, ${t('msrp')} ${m(pr.msrp)}</span><span class="mut">${cs(pr.pc)} ${t('perPallet')}</span>`;
}
function badge(pr) {
  if (pr.low) return `<span class="bdg cut">-${cut(pr)}% ${t('vsLow')}</span>`;
  if (pr.tag === 'new') return `<span class="bdg new">${t('new')}</span>`;
  if (pr.tag === 'stock') return `<span class="bdg">${t('inStock')}</span>`;
  return '';
}
function tile(pr, extra = '') { return `<div class="ph" style="${hueOf(pr)}">${flag(pr.org)}${art(pr)}${badge(pr)}${extra}</div>`; }
function pcard(pr, arrive) {
  const d = arrOf(pr.org);
  return `<a class="pc" href="#/product?pid=${pr.id}" aria-label="${esc(pr.name)}">${tile(pr)}<div class="bd"><h3>${esc(pr.name)}</h3><span class="pk-l">${esc(L3(pr.pk))}</span><div class="px">${priceBlock(pr)}</div>${arrive ? `<div class="arr"><span>${ic('cal')}${t('orderBy')} ${D(d.cut)}</span><span>${ic('truck')}${t('arrives')} ${D(d.eta)}</span></div>` : ''}</div></a>`;
}
const chip = (txt, c = '') => `<span class="chip ${c}">${txt}</span>`;
const sh = (title, sub, link) => `<div class="sh"><div><h2>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</div>${link || ''}</div>`;
const arrow = '<svg class="i flip" aria-hidden="true"><use href="#i-arrow"/></svg>';
const lnk = (href, txt) => `<a class="lnk" href="${href}">${txt}${arrow}</a>`;
const contactCard = () => {
  const mk = MARKETS[S.market];
  return `<div class="person"><span class="avatar">${mk.init}${imgTag('team/' + S.market, '', mk.contact)}</span><div><b>${mk.contact}</b><div class="mut t-2">${t('yourContact')}</div></div></div><div class="reach"><span>${ic('phone')}<span dir="ltr">${mk.phone}</span></span><span>${ic('clock')}${hoursTxt()}${sm()}</span></div>`;
};
/* Pallet meter: boxes instead of a bar, one per pallet group, filled as space is taken.
   mine = the buyer's own pallets on this departure, drawn in the urgency accent. */
function meter(filled, cap, mine = 0) {
  const n = cap <= 12 ? cap : [12, 11, 10, 9, 8].find((k) => cap % k === 0) || 12;
  const per = cap / n, cl = (v) => Math.max(0, Math.min(1, v)).toFixed(2);
  const cells = Array.from({ length: n }, (_, i) => `<span class="pm" style="--i:${i};--f:${cl(filled / per - i)};--o:${cl((filled - mine) / per - i)}"><svg class="i"><use href="#i-box"/></svg>${mine ? '<svg class="i m"><use href="#if-box"/></svg>' : ''}<svg class="i a"><use href="#if-box"/></svg></span>`).join('');
  return `<div class="meter reveal-in" role="img" aria-label="${esc(t('reservedN', filled, cap))}" style="--n:${n}">${cells}</div>${per > 1 || mine ? `<div class="meter-key">${per > 1 ? `<span>${ic('box')}${t('perBox', per)}</span>` : ''}${mine ? `<span><i class="sw"></i>${t('yours')}</span>` : ''}</div>` : ''}`;
}
/* ---------- buyer history: what a rep would remember ---------- */
const DAYN = (d) => d[0] * 100 + d[1];
function buyHist() {
  const h = {};
  Object.values(ORDERS).filter((o) => !o.declined).concat(S.orders).forEach((o) => o.lines.forEach((l) => {
    const pr = PRODUCTS.find((p) => p.name === l[0]); if (!pr) return;
    const x = h[pr.id] || (h[pr.id] = { pr, n: 0, pal: 0, last: [0, 0] });
    x.n++; x.pal += l[1]; if (DAYN(o.placed) > DAYN(x.last)) x.last = o.placed;
  }));
  return Object.values(h).map((x) => Object.assign(x, { usual: Math.max(1, Math.round(x.pal / x.n)) })).sort((a, b) => b.n - a.n || b.pal - a.pal);
}
/* Deals the buyer hasn't ordered, scored against what they have: brand 2, origin 1, pack 1. */
function similarDeals(hist) {
  const own = new Set(hist.map((x) => x.pr.id)), brand = (p) => p.name.split(' ')[0];
  return PRODUCTS.filter((p) => p.low && !own.has(p.id)).map((p) => {
    let like = null, sc = 0;
    hist.forEach((x) => { const v = (brand(x.pr) === brand(p) ? 2 : 0) + (x.pr.org === p.org ? 1 : 0) + (x.pr.pt === p.pt ? 1 : 0); if (v > sc) { sc = v; like = x.pr; } });
    return { p, sc, like };
  }).filter((x) => x.sc >= 2).sort((a, b) => b.sc - a.sc || cut(b.p) - cut(a.p)).slice(0, 3);
}
/* Per litre for drinks (VOL in data.js). */
const perL = (pr, price) => (VOL[pr.id] ? price / (nUnits(pr) * VOL[pr.id]) : null);
/* A similar product that rides the same departure and is cheaper per pallet AND at least 10% per litre. */
function altFor(pr, dep) {
  if (isLot(pr) || !VOL[pr.id]) return null;
  const me = offersFor(pr)[0].tiers[0].price, myL = perL(pr, me), myPal = me * pr.pc;
  return PRODUCTS.filter((p) => p.id !== pr.id && p.pt === pr.pt && VOL[p.id] && offersFor(p)[0].deps.includes(dep))
    .map((p) => ({ p, l: perL(p, p.tiers[0].price), pal: p.tiers[0].price * p.pc }))
    .filter((x) => x.pal < myPal && x.l <= myL * 0.9).sort((a, b) => a.l - b.l)[0] || null;
}
/* Quick-order state for a product card on the home page. */
function qoState(pr, qty) {
  const offs = offersFor(pr)[0], deps = offs.deps.filter((id) => !DEPS[id].hidden && DEPS[id].cap > DEPS[id].filled);
  const st = S.qo[pr.id] || (S.qo[pr.id] = { dep: deps[0], qty: Math.max(offs.moq, qty || 1) });
  const c = KM.calc({ shape: pr.shape, pc: pr.pc, tiers: offs.tiers, tonnes: pr.tonnes, ppt: pr.ppt }, st.qty, DEPS[st.dep]);
  return { st, deps, c };
}
function addLine(pid, dep, qty) {
  const ln = S.cart.find((l) => l.pid === pid && l.off === 'o1' && l.dep === dep);
  if (ln) ln.qty = Math.min(12, ln.qty + qty); else S.cart.push({ pid, off: 'o1', dep, qty });
}
/* After a re-render, run the label swap on the button that was pressed. */
function flashDone(sel) {
  setTimeout(() => $$(sel).forEach((b) => b.classList.add('done')), 60);
  setTimeout(() => $$(sel + '.done').forEach((b) => b.classList.remove('done')), 1700);
}

function emptyState(h, p, btn, icon = 'search') { return `<div class="empty"><span class="ico">${ic(icon)}</span><h3>${h}</h3><p>${p}</p>${btn || ''}</div>`; }

/* ---------- shell ---------- */
const NAV = [['origin', 'category', 'navOrigin'], ['cat', 'category', 'navCat'], ['deals', 'deals', 'navDeals'], ['new', 'deals', 'navNew'], ['ship', 'departures', 'navShip'], ['orders', 'orders', 'navOrders']];
function activeNav() {
  if (S.screen === 'deals') return S.dtab === 'new' ? 'new' : 'deals';
  return { category: 'cat', departures: 'ship', orders: 'orders' }[S.screen] || '';
}
const logo = (v = 'logo') => `<a class="logo" href="#/home" dir="ltr" aria-label="KingoMart">${im(v) ? `<img src="${im(v)}" alt="">` : '<i>K</i><span>Kingo<em>Mart</em></span>'}</a>`;
function header() {
  const mk = MARKETS[S.market];
  const act = activeNav();
  const items = NAV.filter((x) => x[0] !== 'orders' || S.stage === 'approved').map((x) => `<a href="#/${x[1]}${x[0] === 'new' ? '?tab=new' : x[0] === 'deals' ? '?tab=deals' : ''}" ${act === x[0] ? 'aria-current="page"' : ''}>${t(x[2])}</a>`).join('');
  let who = '';
  if (S.stage === 'guest') who = `<a class="btn ghost sm hide-n" href="#/home" data-a="signin">${ic('user')}${t('signin')}</a><a class="btn sm" href="#/apply">${t('apply')}${arrow}</a>`;
  else if (S.stage === 'pending') who = `<a class="pill warn" href="#/pending">${ic('clock')}${t('review')}</a>`;
  else who = `<b class="hide-n">${esc(mk.co)}</b><a class="ordl" href="#/cart" aria-label="${esc(t('order'))}">${ic('cart')}${t('order')}${S.cart.length ? `<span class="cnt ${S.tick ? 'tick' : ''}" aria-live="polite">${S.cart.length}</span>` : ''}</a>`;
  return `<header class="hd" id="hd"><div class="wrap"><div class="hd-top">${logo()}<div class="srch" role="search"><label>${ic('search')}<input id="q" type="search" autocomplete="off" aria-label="${esc(t('search'))}" placeholder="${esc(t('search'))}" value="${esc(S.q || '')}" data-search></label><div class="sdd" id="sdd" hidden></div></div><div class="acct">${who}</div></div><nav class="mainnav" aria-label="Main">${items}</nav></div></header>`;
}
function footer() {
  const mk = MARKETS[S.market];
  return `<footer class="ft"><div class="wrap"><div class="ft-g"><div>${logo('logo-white')}<p><b class="strong" dir="ltr">KingoMart General Trading L.L.C.</b></p><p class="cl">${ic('pinmap')}<span dir="ltr">Office 805, Yes Business Tower, Al Barsha, Dubai</span></p><p class="cl">${ic('phone')}<a class="mono" dir="ltr" href="tel:+97148342279">+971 4 834 2279</a></p><p class="cl">${ic('mail')}<a dir="ltr" href="mailto:info@kingomart.com">info@kingomart.com</a></p><p class="cl">${ic('clock')}<span>${hoursTxt()}</span></p><p class="cl">${ic('shield')}<span>${t('licFt')}${sm()}</span></p></div><div><h4>${t('ordering')}</h4><ul><li><a href="#/category">${t('navOrigin')}</a></li><li><a href="#/deals">${t('dealsNew')}</a></li><li><a href="#/departures">${t('navShip')}</a></li>${S.stage === 'approved' ? `<li><a href="#/orders">${t('navOrders')}</a></li>` : ''}</ul></div><div><h4>${t('help')}</h4><ul><li>${t('h1')}</li><li>${t('h2')}</li><li>${t('h3')}</li><li>${t('h4')}</li></ul></div><div><h4>${t('legal')}</h4><ul><li>${t('g1')}</li><li>${t('g2')}</li><li>${t('g3')}</li><li>${t('g4')}</li><li>${t('g5')}</li></ul></div></div><div class="legal">${t('copy')}</div><div class="wm" aria-hidden="true" dir="ltr">KingoMart</div></div></footer>`;
}
function tabbar() {
  const act = { home: 'home', category: 'shop', deals: 'deals', product: 'shop', departures: 'ship', cart: 'ord', request: 'ord', received: 'ord', orders: 'ord', apply: 'ord', pending: 'ord' }[S.screen];
  const ord = S.stage === 'approved' ? ['#/cart', t('order'), 'cart'] : S.stage === 'pending' ? ['#/pending', t('status'), 'clock'] : ['#/apply', t('apply2'), 'user'];
  const tabs = [['home', '#/home', t('home'), 'home'], ['shop', '#/category', t('shop'), 'grid'], ['deals', '#/deals', t('navDeals'), 'tag'], ['ship', '#/departures', t('departures'), 'truck'], ['ord', ord[0], ord[1], ord[2]]];
  return `<nav class="tabbar" aria-label="Tabs">${tabs.map((x) => `<a href="${x[1]}" ${act === x[0] ? 'aria-current="page"' : ''}>${act === x[0] ? `<svg class="i" aria-hidden="true"><use href="#if-${x[3]}"/></svg>` : ic(x[3])}<span>${x[2]}</span>${x[0] === 'ord' && S.stage === 'approved' && S.cart.length ? `<span class="cnt">${S.cart.length}</span>` : ''}</a>`).join('')}</nav>`;
}
function shell() {
  pinN = 0;
  const fn = SCR[S.screen] || SCR.home;
  const main = fn();
  return `<a class="skip" href="#main-c" data-a="skip">${t('skip')}</a>${header()}<main id="main-c">${main}</main>${footer()}${tabbar()}`;
}

/* ---------- render ---------- */
let enterTimer;
function render(enter) {
  const sc = $('#sc'), app = $('#app');
  const top = sc.scrollTop;
  app.setAttribute('dir', dirOf());
  document.documentElement.lang = S.lang;
  document.documentElement.setAttribute('data-pal', S.pal);
  document.documentElement.setAttribute('data-layout', S.layout);
  document.body.classList.toggle('marks', S.marks);
  $('#stage').className = 'stage ' + (S.device === 'phone' ? 'phone' : '');
  app.classList.toggle('enter', !!enter);
  const f = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.f : null;
  app.innerHTML = shell();
  sc.scrollTo({ top: enter ? 0 : top, behavior: 'instant' });
  S.just = false; S.tick = false; S.roll = null; S.galIn = false; S.mvJust = false;
  if (f) { const el = $(`[data-f="${f}"]`, app); if (el) el.focus({ preventScroll: true }); }
  clearTimeout(enterTimer); if (enter) enterTimer = setTimeout(() => app.classList.remove('enter'), 1200);
  observe(enter);
  renderLayer();
  syncStrip();
  syncHash();
}
/* View transition wrapper: crossfade for state that changes a lot at once. */
function vt(fn) {
  if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) { const v = document.startViewTransition(fn); [v.ready, v.finished, v.updateCallbackDone].forEach((p) => p.catch(() => {})); } // aborts when the page is hidden or interrupted; the DOM update still runs
  else fn();
}
/* Scroll-linked effects without scroll listeners. */
let io, sIo;
function observe(enter) {
  const sc = $('#sc');
  if (io) io.disconnect(); if (sIo) sIo.disconnect();
  io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { root: sc, threshold: 0.25 });
  const revs = $$('.bar, .route, .lad, .reveal-in');
  if (enter) revs.forEach((el) => io.observe(el));
  else { // a re-render after a click: show the settled state, no replay
    const app = $('#app'); app.classList.add('settled'); revs.forEach((el) => el.classList.add('in'));
    setTimeout(() => app.classList.remove('settled'), 34); // two frames; a timer still fires in a throttled tab
  }
  const hd = $('#hd');
  if (hd) {
    const sent = document.createElement('div'); sent.style.cssText = 'position:absolute;top:0;height:8px;width:1px;pointer-events:none'; $('#app').prepend(sent);
    sIo = new IntersectionObserver((es) => hd.classList.toggle('stuck', !es[0].isIntersecting), { root: sc });
    sIo.observe(sent);
  }
}

/* ---------- routing ---------- */
function parseHash() {
  const h = location.hash.replace(/^#\/?/, '');
  const [path, qs] = h.split('?');
  const q = new URLSearchParams(qs || '');
  return { path: path || 'home', q };
}
function applyHash() {
  const { path, q } = parseHash();
  Object.keys(VALID).forEach((k) => { const v = q.get(k); if (v && VALID[k].includes(v)) S[k] = v; });
  if (q.get('marks')) S.marks = q.get('marks') === '1';
  if (q.get('rat')) S.rat = q.get('rat') === '1';
  if (q.get('pid') && PBY[q.get('pid')]) { S.sel = { pid: q.get('pid'), off: 'o1', dep: null, qty: Math.max(1, offersFor(PBY[q.get('pid')])[0].moq), img: 0, lotInco: 'cif' }; }
  if (q.get('tab') && ['deals', 'new', 'soon'].includes(q.get('tab'))) S.dtab = q.get('tab');
  if (q.get('o') && ORIGINS.some((x) => x.code === q.get('o'))) { S.flt.orig = { [q.get('o')]: true }; }
  const scr = SCREENS.some((x) => x[0] === path) ? path : 'home';
  S.screen = guard(scr);
}
function guard(scr) {
  if (GATED[scr] && S.stage !== 'approved') { setTimeout(() => toast(t('gated')), 50); return 'home'; }
  if (scr === 'received' && !S.order) ensureOrder();
  return scr;
}
function syncHash() {
  const q = new URLSearchParams();
  Object.keys(VALID).forEach((k) => { if (S[k] !== DEFAULT[k]) q.set(k, S[k]); });
  if (S.marks) q.set('marks', '1'); if (S.rat) q.set('rat', '1');
  if (S.screen === 'product') q.set('pid', S.sel.pid);
  if (S.screen === 'deals') q.set('tab', S.dtab);
  const next = '#/' + S.screen + (q.toString() ? '?' + q : '');
  if (location.hash !== next) history.replaceState(null, '', next);
}
function go(scr) { location.hash = '#/' + scr; }
window.addEventListener('hashchange', () => { vt(() => { closeSheet(true); S.card = null; applyHash(); render(true); }); });

/* ---------- state changes from the strip ---------- */
function setState(k, v, opts = {}) {
  if (S[k] === v) return;
  const prevStage = S.stage;
  S[k] = v;
  if (['lang', 'cur', 'pal'].includes(k)) store.put(k, v);
  if (k === 'stage') { S.just = prevStage === 'guest' || v !== 'guest'; if (GATED[S.screen] && v !== 'approved') { S.screen = 'home'; setTimeout(() => toast(t('gated')), 80); } }
  if (k === 'pal') { render(false); return; }
  vt(() => render(!!opts.enter || k === 'stage' || k === 'device'));
}
/* act: an A.* action name; when given, the label is a button (used for Undo) instead of a link. */
function toast(msg, label, href, act) {
  S.toast = { msg, label, href, act, n: (S.toast ? S.toast.n : 0) + 1 };
  renderToast();
  clearTimeout(toast.t);
  toast.t = setTimeout(() => { const el = $('#l-toast .toast'); if (el) el.classList.add('out'); setTimeout(() => { S.toast = null; renderToast(); }, 280); }, 5200);
}
function renderToast() {
  const el = $('#l-toast'); if (!el) return;
  const x = S.toast, n = x ? String(x.n) : '';
  if (el.dataset.n === n) return; // same toast: keep it, so a re-render doesn't replay its entrance
  el.dataset.n = n;
  el.innerHTML = x ? `<div class="toast" role="status">${ic('check')}<span>${esc(x.msg)}</span>${x.label ? (x.act ? `<button data-a="${x.act}">${esc(x.label)}</button>` : `<a href="${x.href}">${esc(x.label)}</a>`) : ''}</div>` : '';
}

/* ---------- layers: sheet, rationale card, story caption ---------- */
function renderLayer() { renderToast(); renderCard(); renderCap(); refreshSheet(); }
function renderCard() {
  const el = $('#l-card'); if (!el) return;
  const k = S.card;
  if (!k || !S.rat) { el.innerHTML = ''; return; }
  const r = RAT[k];
  el.innerHTML = `<aside class="ratc" role="dialog" aria-label="Rationale"><button class="x" data-a="card-x" aria-label="${esc(t('close'))}">${ic('x')}</button><h4>${esc(r[0])}</h4><dl><dt>Design move</dt><dd>${esc(r[1])}</dd><dt>Evidence</dt><dd>${esc(r[2])}</dd><dt>Measure</dt><dd>${esc(r[3])}</dd></dl></aside>`;
}
function renderCap() {
  const el = $('#l-cap'); if (!el) return;
  if (S.story < 0) { el.innerHTML = ''; return; }
  const s = STORY[S.story];
  el.innerHTML = `<div role="status"><span>${S.story + 1}/${STORY.length}</span><span>${esc(s.cap)}</span><button data-a="story-next">${S.story === STORY.length - 1 ? 'Finish' + ic('check') : 'Next' + arrow}</button></div>`;
}
function openSheet(spec) {
  S.sheet = spec; renderSheet();
  requestAnimationFrame(() => requestAnimationFrame(() => { const sh = $('#sheet'); if (sh) { sh.style.setProperty('--dy', '0'); $('#scrim').classList.add('on'); } }));
}
function closeSheet(instant) {
  const sh = $('#sheet'); if (!sh || !S.sheet) { S.sheet = null; return; }
  S.sheet = null;
  if (instant) { $('#l-sheet').innerHTML = ''; return; }
  sh.style.setProperty('--dy', '100%'); $('#scrim').classList.remove('on');
  setTimeout(() => { if (!S.sheet) $('#l-sheet').innerHTML = ''; }, 380);
}
function renderSheet() {
  const el = $('#l-sheet'); if (!el) return;
  const sp = S.sheet; if (!sp) { el.innerHTML = ''; return; }
  const body = SHEETS[sp.type](sp);
  el.innerHTML = `<div class="scrim" id="scrim" data-a="sheet-x"></div><section class="sheet" id="sheet" role="dialog" aria-modal="true" aria-label="${esc(sp.label || '')}"><div class="grab" id="grab"></div><div id="sbody">${body}</div></section>`;
  bindSheetDrag();
}
function refreshSheet() { if (S.sheet && $('#sbody')) $('#sbody').innerHTML = SHEETS[S.sheet.type](S.sheet); }
const SHEETS = {};
/* Bottom sheet: 1:1 pointer drag, velocity projection decides dismiss vs snap back. */
function bindSheetDrag() {
  const sh = $('#sheet'), grab = $('#grab'); if (!sh || !grab) return;
  let y0 = 0, dy = 0, t0 = 0, lastY = 0, v = 0, on = false;
  grab.addEventListener('pointerdown', (e) => { on = true; y0 = e.clientY; lastY = y0; t0 = performance.now(); sh.classList.add('drag'); grab.setPointerCapture(e.pointerId); });
  grab.addEventListener('pointermove', (e) => {
    if (!on) return;
    const raw = e.clientY - y0; dy = raw < 0 ? -Math.sqrt(-raw) * 3 : raw; // rubber-band upward
    const now = performance.now(); v = (e.clientY - lastY) / Math.max(1, now - t0); lastY = e.clientY; t0 = now;
    sh.style.setProperty('--dy', dy + 'px');
  });
  const end = () => {
    if (!on) return; on = false; sh.classList.remove('drag');
    const projected = dy + v * 1000 * 0.15; // momentum projection
    if (projected > sh.offsetHeight * 0.4) closeSheet(); else sh.style.setProperty('--dy', '0');
  };
  grab.addEventListener('pointerup', end); grab.addEventListener('pointercancel', end);
}

/* ---------- presenter strip ---------- */
const STAGE_L = { guest: 'Guest', pending: 'Pending', approved: 'Approved' };
function buildStrip() {
  const seg = (name, items) => `<div class="seg init" role="group" aria-label="${name}">${items.map(([k, l, tip]) => `<button type="button" data-a="set" data-k="${name}" data-v="${k}" aria-pressed="false" ${tip ? `title="${tip}"` : ''}>${l}</button>`).join('')}</div>`;
  const opts = SCREENS.map((x, i) => `<option value="${x[0]}">${i + 1}. ${x[1]}</option>`).join('');
  $('#strip').innerHTML = `
    <div class="sg"><select id="scrSel" aria-label="Screen" data-a="screen">${opts}</select><button class="sbtn ico" data-a="prev" aria-label="Previous screen" title="Previous screen ([)">${ic('chev', 'rl')}</button><button class="sbtn ico" data-a="next" aria-label="Next screen" title="Next screen (])">${ic('chev', 'rr')}</button></div>
    <span class="sep"></span>
    <div class="sg"><button class="sbtn" data-a="story" id="storyBtn" aria-pressed="false">${ic('play')}<span>Story</span></button><span class="storyline" id="storyDots" hidden></span></div>
    <span class="sep"></span>
    <div class="sg"><span class="lbl">Stage</span>${seg('stage', [['guest', 'Guest', '1'], ['pending', 'Pending', '2'], ['approved', 'Approved', '3']])}</div>
    <div class="sg"><span class="lbl">Device</span>${seg('device', [['web', 'Web'], ['phone', 'Phone']])}</div>
    <div class="sg" id="layoutSg"><span class="lbl">Home layout</span>${seg('layout', [['current', 'Current'], ['proposed', 'Proposed']])}</div>
    <span class="sep"></span>
    <div class="pal" role="group" aria-label="Palette">${[['ocean', 'oklch(0.47 0.13 245), oklch(0.74 0.12 195)'], ['cobalt', 'oklch(0.46 0.17 266), oklch(0.73 0.12 228)'], ['forest', 'oklch(0.45 0.1 158), oklch(0.8 0.13 122)'], ['plum', 'oklch(0.43 0.14 348), oklch(0.76 0.12 32)']].map(([k, c]) => `<button type="button" data-a="set" data-k="pal" data-v="${k}" aria-pressed="false" aria-label="${k}" title="${k}" style="background:linear-gradient(135deg, ${c})"></button>`).join('')}</div>
    <div class="sg">${seg('lang', [['en', 'EN'], ['fr', 'FR'], ['ar', 'العربية']])}${seg('cur', [['EUR', '€'], ['USD', '$']])}</div>
    <span class="sep"></span>
    <div class="sg"><button class="sbtn" data-a="rat" id="ratBtn" aria-pressed="false" title="Rationale pins (R)">${ic('eye')}<span>Rationale</span></button><button class="sbtn" data-a="marks" id="marksBtn" aria-pressed="false" title="Show sample marks">${ic('info')}<span>Sample marks</span></button><button class="sbtn ico" data-a="strip-min" aria-label="Hide controls" title="Hide controls">${ic('chev', 'ru')}</button></div>`;
}
function syncStrip() {
  $$('#strip [data-a="set"]').forEach((b) => b.setAttribute('aria-pressed', S[b.dataset.k] === b.dataset.v ? 'true' : 'false'));
  const sel = $('#scrSel'); if (sel) sel.value = S.screen;
  $('#layoutSg').hidden = S.screen !== 'home'; // layout switch is for Home only
  $('#ratBtn').setAttribute('aria-pressed', S.rat); $('#marksBtn').setAttribute('aria-pressed', S.marks);
  $('#storyBtn').setAttribute('aria-pressed', S.story >= 0);
  const dots = $('#storyDots'); dots.hidden = S.story < 0;
  dots.innerHTML = S.story < 0 ? '' : STORY.map((_, i) => `<i class="${i <= S.story ? 'on' : ''}"></i>`).join('');
  $$('#strip .seg').forEach(layoutSeg);
}
function layoutSeg(seg) {
  const b = seg.querySelector('[aria-pressed="true"]'); if (!b) return;
  seg.style.setProperty('--x', b.offsetLeft - 2 + 'px'); seg.style.setProperty('--w', b.offsetWidth + 'px');
  if (seg.classList.contains('init')) requestAnimationFrame(() => requestAnimationFrame(() => seg.classList.remove('init')));
}

/* ---------- story ---------- */
function storyGo(i) {
  if (i < 0 || i >= STORY.length) { S.story = -1; render(false); return; }
  S.story = i; const s = STORY[i];
  S.stage = s.stage; S.device = s.device; S.screen = s.s; S.just = true; S.mv = null; S.qo = {}; closeSheet(true); // quick-order cards start from the buyer's usual quantities
  if (s.prep) s.prep();
  if (s.s === 'cart' && !S.cart.length) S.cart = DEFAULT_CART();
  if (s.s === 'received' && !S.order) ensureOrder();
  vt(() => render(true));
  if (s.focus) setTimeout(() => { const el = $(s.focus); if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' }); }, 700);
}
const DEFAULT_CART = () => [{ pid: 'p1', off: 'o1', dep: 'KM-0412', qty: 3 }, { pid: 'p2', off: 'o1', dep: 'KM-0412', qty: 1 }, { pid: 'p4', off: 'o1', dep: 'KM-C0207', qty: 2 }];

/* ---------- events ---------- */
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-a]');
  if (!el) {
    const dd = $('#sdd'); if (dd && !e.target.closest('.srch')) dd.hidden = true;
    return;
  }
  const a = el.dataset.a;
  if (el.matches('input[type=checkbox],input[type=radio],select')) return; // handled by the change event
  if (A[a]) A[a](el, e);
});
document.addEventListener('change', (e) => {
  const el = e.target.closest('[data-a]'); if (el && A[el.dataset.a + ':change']) A[el.dataset.a + ':change'](el, e);
});
document.addEventListener('input', (e) => {
  if (e.target.matches('[data-search]')) onSearch(e.target.value);
  else if (e.target.dataset && e.target.dataset.fv) (S.apply.v || (S.apply.v = {}))[e.target.dataset.fv] = e.target.value; // keep form text across re-renders
});
document.addEventListener('keydown', (e) => {
  const tg = e.target;
  if (e.key === 'Escape') { if (S.sheet) closeSheet(); else if (S.card) closeCard(); const dd = $('#sdd'); if (dd) dd.hidden = true; return; }
  if (tg.matches && tg.matches('input,textarea,select,[contenteditable]')) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key;
  if (k === '1') setState('stage', 'guest'); else if (k === '2') setState('stage', 'pending'); else if (k === '3') setState('stage', 'approved');
  else if (k === '[') A.prev(); else if (k === ']') A.next();
  else if (k === 'r') A.rat(); else if (k === 'R') resetAll();
});
function resetAll() {
  Object.assign(S, DEFAULT, { qo: {}, cart: DEFAULT_CART(), order: null, orders: [], story: -1, sheet: null, card: null, toast: null, sent: false, osel: 'req', tmpl: {}, notified: {} });
  S.flt = { orig: {}, pack: {}, deals: false, sort: 'new', q: '' }; S.apply = { kbis: false, pass: false, agree: false, err: false }; S.co = { imp: 'self', agree: false, sending: false };
  location.hash = '#/home'; vt(() => render(true));
}
A.set = (el) => setState(el.dataset.k, el.dataset.v);
A.screen = () => {};
document.addEventListener('change', (e) => { if (e.target.id === 'scrSel') { S.story = -1; location.hash = '#/' + e.target.value; } });
const stepScr = (d) => { const i = SCREENS.findIndex((x) => x[0] === S.screen); location.hash = '#/' + SCREENS[(i + d + SCREENS.length) % SCREENS.length][0]; };
A.prev = () => { S.story = -1; stepScr(-1); }; A.next = () => { S.story = -1; stepScr(1); };
A.story = () => { if (S.story >= 0) { S.story = -1; render(false); } else storyGo(0); };
A['story-next'] = () => storyGo(S.story + 1);
A.rat = () => { S.rat = !S.rat; if (!S.rat) S.card = null; render(false); };
A.marks = () => { S.marks = !S.marks; render(false); };
A.pin = (el) => { S.card = el.dataset.k; renderCard(); };
A['card-x'] = () => closeCard();
function closeCard() { const el = $('#l-card .ratc'); S.card = null; if (!el) return renderCard(); el.classList.add('out'); setTimeout(() => { if (!S.card) renderCard(); }, 200); }
A['sheet-x'] = () => closeSheet();
A['strip-min'] = () => { $('#strip').classList.add('min'); $('#reveal').classList.add('on'); $('#stage').style.top = '0'; };
A.reveal = () => { $('#strip').classList.remove('min'); $('#reveal').classList.remove('on'); $('#stage').style.top = ''; };
A.signin = (el, e) => { e.preventDefault(); setState('stage', 'approved'); toast(t('signedIn')); };
A.skip = (el, e) => { e.preventDefault(); const mc = $('#main-c'); mc.setAttribute('tabindex', '-1'); mc.focus(); };

/* ---------- search ---------- */
let sT;
function matches(q) {
  const s = q.trim().toLowerCase();
  return PRODUCTS.filter((p) => (p.name + ' ' + L3(p.pk) + ' ' + L3(COUNTRY[p.org])).toLowerCase().includes(s));
}
function onSearch(v) {
  S.q = v;
  const dd = $('#sdd'); if (!dd) return;
  if (!v.trim()) { dd.hidden = true; return; }
  dd.hidden = false;
  dd.innerHTML = `<div class="stack sk-wrap" aria-busy="true"><div class="sk w1"></div><div class="sk w2"></div><div class="sk w3"></div></div>`;
  clearTimeout(sT);
  sT = setTimeout(() => {
    const r = matches(v);
    dd.innerHTML = r.length
      ? r.slice(0, 5).map((p) => `<a class="sr-row" href="#/product?pid=${p.id}">${flag(p.org)}<span><b class="fw-semi">${esc(p.name)}</b><br><span class="mut t-2">${esc(L3(p.pk))}</span></span></a>`).join('') + (r.length > 5 ? `<a class="sr-row lnk" href="#/category" data-a="search-all">${t('seeAll', r.length)}</a>` : '')
      : `<div class="sr-empty" role="status"><b>${t('noRes', esc(v.trim()))}</b><span class="mut">${t('noResHelp')}</span><a class="lnk" href="#/category" data-a="search-clear">${t('browseAll')}${arrow}</a></div>`;
    if (S.rat) dd.insertAdjacentHTML('beforeend', `<div class="hasp">${pinRaw('search')}</div>`);
  }, 240);
}
const pinRaw = (k) => `<button class="pin raw" data-a="pin" data-k="${k}" aria-label="${esc(t('ratLbl'))}">!</button>`;
A['search-all'] = () => { S.flt.q = S.q; $('#sdd').hidden = true; };
A['search-clear'] = () => { S.flt.q = ''; $('#sdd').hidden = true; };

/* ---------- boot ---------- */
function boot() {
  injectFlags();
  ['lang', 'cur', 'pal'].forEach((k) => { const v = store.get(k); if (v && VALID[k].includes(v)) S[k] = v; });
  buildStrip();
  applyHash();
  render(true);
  addEventListener('resize', () => $$('#strip .seg').forEach(layoutSeg));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => $$('#strip .seg').forEach(layoutSeg));
}
document.addEventListener('DOMContentLoaded', boot);
