/* Sample data. Everything here is invented for the prototype except where noted in the research file. */
const T = {}; // i18n table, filled by each screen module: T.key = [en, fr, ar]

/* ---- Flags (origin of goods only). Drawn as simple SVG, injected as CSS classes at start. ---- */
const FLAGS = {
  FR: '<rect width="10" height="20" fill="#0055A4"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#EF4135"/>',
  BE: '<rect width="10" height="20" fill="#000"/><rect x="10" width="10" height="20" fill="#FAE042"/><rect x="20" width="10" height="20" fill="#ED2939"/>',
  DZ: '<rect width="15" height="20" fill="#006233"/><rect x="15" width="15" height="20" fill="#fff"/><circle cx="15.2" cy="10" r="5.4" fill="#D21034"/><circle cx="16.6" cy="10" r="4.4" fill="#fff"/><polygon points="18.2,7.4 18.85,9.11 20.67,9.2 19.25,10.34 19.73,12.1 18.2,11.1 16.67,12.1 17.15,10.34 15.73,9.2 17.55,9.11" fill="#D21034"/>',
  US: '<rect width="30" height="20" fill="#fff"/><g fill="#B22234"><rect y="0" width="30" height="2.86"/><rect y="5.71" width="30" height="2.86"/><rect y="11.43" width="30" height="2.86"/><rect y="17.14" width="30" height="2.86"/></g><rect width="13" height="10.9" fill="#3C3B6E"/>',
  VN: '<rect width="30" height="20" fill="#DA251D"/><polygon points="15,4.2 16.47,8.58 21.09,8.62 17.38,11.37 18.76,15.78 15,13.1 11.24,15.78 12.62,11.37 8.91,8.62 13.53,8.58" fill="#FF0"/>',
  BR: '<rect width="30" height="20" fill="#009C3B"/><polygon points="15,2.4 27.4,10 15,17.6 2.6,10" fill="#FFDF00"/><circle cx="15" cy="10" r="4.6" fill="#002776"/>'
};
const COUNTRY = {
  DZ: ['Algeria', 'Algérie', 'الجزائر'], US: ['USA', 'États-Unis', 'الولايات المتحدة'], BE: ['Belgium', 'Belgique', 'بلجيكا'],
  VN: ['Vietnam', 'Viêt Nam', 'فيتنام'], BR: ['Brazil', 'Brésil', 'البرازيل'], FR: ['France', 'France', 'فرنسا']
};
const PLACE = {
  ALG: ['Algiers', 'Alger', 'الجزائر العاصمة'], MRS: ['Marseille', 'Marseille', 'مرسيليا'], ANR: ['Antwerp', 'Anvers', 'أنتويرب'],
  PAR: ['Paris region', 'Région parisienne', 'منطقة باريس'], EWR: ['Newark', 'Newark', 'نيوارك'], LEH: ['Le Havre', 'Le Havre', 'لوهافر'],
  SGN: ['Ho Chi Minh City', 'Hô Chi Minh-Ville', 'مدينة هو تشي منه'], SSZ: ['Santos', 'Santos', 'سانتوس'], LYS: ['Lyon area', 'Région lyonnaise', 'منطقة ليون']
};
const MODE = {
  ts: ['Truck, shared', 'Camion, partagé', 'شاحنة، مشتركة'], td: ['Truck, dedicated', 'Camion, dédié', 'شاحنة، مخصصة'],
  tc: ['Truck, chilled', 'Camion, réfrigéré', 'شاحنة، مبرّدة'], cs: ['Container, shared', 'Conteneur, partagé', 'حاوية، مشتركة'],
  cf: ['Container, full', 'Conteneur complet', 'حاوية كاملة']
};

/* ---- Products. msrp = suggested shelf price per unit. price = wholesale per case (or carton). ---- */
const PRODUCTS = [
  { id: 'p1', name: 'Hamoud La Blanche', org: 'DZ', pt: 'glass', pk: ['1L glass, case of 12', 'Bouteille verre 1 L, caisse de 12', 'زجاجة 1 لتر، صندوق 12'], msrp: 1.69, uw: 'unit', pc: 45, moq: 1, tiers: [{ min: 1, price: 11.4 }, { min: 2, price: 10.9 }, { min: 4, price: 10.45 }, { min: 9, price: 10.05 }], tag: 'new', added: 3 },
  { id: 'p2', name: 'Hamoud Selecto', org: 'DZ', pt: 'can', pk: ['24cl can, case of 24', 'Canette 24 cl, caisse de 24', 'علبة 24 سل، صندوق 24'], msrp: 0.79, uw: 'unit', pc: 70, moq: 1, tiers: [{ min: 1, price: 9.1 }], tag: 'new', added: 5 },
  { id: 'p3', name: 'Hamoud Slim Lychee', org: 'DZ', pt: 'can', pk: ['33cl can, case of 24', 'Canette 33 cl, caisse de 24', 'علبة 33 سل، صندوق 24'], msrp: 0.89, uw: 'unit', pc: 100, moq: 1, tiers: [{ min: 1, price: 9.1 }], low: 9.6, ends: [10, 19], left: [380, 'case'], added: 3 },
  { id: 'p4', name: 'Dr Pepper 12oz', org: 'US', pt: 'can', pk: ['355ml can, case of 24', 'Canette 355 ml, caisse de 24', 'علبة 355 مل، صندوق 24'], msrp: 1.49, uw: 'unit', pc: 80, moq: 1, tiers: [{ min: 1, price: 16.9 }], low: 17.8, ends: [10, 16, '18:00'], left: [640, 'case'] },
  { id: 'p5', name: 'Sunkist Orange 12oz', org: 'US', pt: 'can', pk: ['355ml can, case of 24', 'Canette 355 ml, caisse de 24', 'علبة 355 مل، صندوق 24'], msrp: 1.29, uw: 'unit', pc: 80, moq: 1, tiers: [{ min: 1, price: 10.6 }], low: 11.3, ends: [10, 21], left: [210, 'case'] },
  { id: 'p6', name: 'Hamoud Cola', org: 'DZ', pt: 'pet', pk: ['1L PET, case of 6', 'PET 1 L, caisse de 6', 'PET 1 لتر، صندوق 6'], msrp: 1.99, uw: 'unit', pc: 120, moq: 1, tiers: [{ min: 1, price: 7.2 }], low: 7.8, ends: [10, 20], left: [520, 'case'] },
  { id: 'p7', name: 'Hamoud Slim Apple', org: 'DZ', pt: 'glass', pk: ['1L glass, case of 12', 'Bouteille verre 1 L, caisse de 12', 'زجاجة 1 لتر، صندوق 12'], msrp: 1.69, uw: 'unit', pc: 45, moq: 1, tiers: [{ min: 1, price: 11.2 }], tag: 'stock', added: 5 },
  { id: 'p8', name: 'Citrus soda', org: 'BE', pt: 'can', pk: ['33cl can, case of 24', 'Canette 33 cl, caisse de 24', 'علبة 33 سل، صندوق 24'], msrp: 0.79, uw: 'unit', pc: 100, moq: 1, tiers: [{ min: 1, price: 8.4 }], tag: 'stock' },
  { id: 'p9', name: 'Monster Energy Original', org: 'US', pt: 'can', pk: ['500ml can, case of 24', 'Canette 500 ml, caisse de 24', 'علبة 500 مل، صندوق 24'], msrp: 2.19, uw: 'unit', pc: 60, moq: 1, tiers: [{ min: 1, price: 26.4 }], tag: 'stock' },
  { id: 'p10', name: 'Hamoud Slim Orange', org: 'DZ', pt: 'pet', pk: ['25cl PET, case of 24', 'PET 25 cl, caisse de 24', 'PET 25 سل، صندوق 24'], msrp: 0.89, uw: 'unit', pc: 120, moq: 1, tiers: [{ min: 1, price: 7.6 }], low: 8.55, ends: [10, 17], left: [300, 'case'] },
  { id: 'p11', name: 'Deglet Nour dates', org: 'DZ', pt: 'carton', pk: ['5kg carton', 'Carton de 5 kg', 'كرتونة 5 كغ'], msrp: 9.9, uw: 'kg', pc: 90, moq: 1, tiers: [{ min: 1, price: 38.5 }], low: 41.2, ends: [10, 18], left: [420, 'carton'] },
  { id: 'p12', name: 'Hamoud Syrup Grenadine', org: 'DZ', pt: 'glass', pk: ['75cl, case of 6', '75 cl, caisse de 6', '75 سل، صندوق 6'], msrp: 4.9, uw: 'unit', pc: 120, moq: 1, tiers: [{ min: 1, price: 17.4 }], added: 6 },
  { id: 'p13', name: 'Vannamei shrimp', org: 'VN', pt: 'bag', pk: ['2kg pack, carton of 5, frozen', 'Colis 2 kg, carton de 5, surgelé', 'عبوة 2 كغ، كرتونة 5، مجمّد'], msrp: 19.9, uw: 'pack', pc: 80, moq: 1, tiers: [{ min: 1, price: 64 }], added: 6, dry: false },
  { id: 'p15', name: 'Vietnam Robusta, green coffee', org: 'VN', shape: 'lot', pt: 'lot', pk: ['40FT container, 19 t net', 'Conteneur 40 pieds, 19 t net', 'حاوية 40 قدماً، 19 طناً صافياً'], tonnes: 19, ppt: 3420, moq: 1, inco: 'CIF Le Havre', tag: 'stock' }
];
/* Packshot backdrop hue per product (OKLCH hue angle), picked from each pack's own colors. */
const HUE = { p1: 112, p2: 40, p3: 350, p4: 15, p5: 62, p6: 25, p7: 135, p8: 98, p9: 145, p10: 70, p11: 58, p12: 8, p13: 32, p15: 52 };
/* Litres per unit, for drinks. Lets the cart compare similar products per litre, not just per case. */
const VOL = { p1: 1, p2: 0.24, p3: 0.33, p4: 0.355, p5: 0.355, p6: 1, p7: 1, p8: 0.33, p9: 0.5, p10: 0.25, p12: 0.75 };
/* How each supplied packshot sits on its backdrop: mul = shot on white (white drops out), full = a scene photo that fills the tile. */
const SHOT = { p11: 'mul', p15: 'full' };
const SOON = [
  { name: 'Hamoud Slim Orange', org: 'DZ', pk: PRODUCTS[9].pk, when: [11, 2] },
  { name: 'Brazilian beef cuts', org: 'BR', pk: ['15kg carton, frozen', 'Carton de 15 kg, surgelé', 'كرتونة 15 كغ، مجمّدة'], when: [11, 9] },
  { name: 'Vannamei shrimp, peeled', org: 'VN', pk: ['1kg pack, carton of 10, frozen', 'Colis 1 kg, carton de 10, surgelé', 'عبوة 1 كغ، كرتونة 10، مجمّدة'], when: [11, 16] },
  { name: 'Citrus soda', org: 'BE', pk: PRODUCTS[7].pk, when: [11, 23] }
];
const ORIGINS = [
  { code: 'DZ', n: 131 }, { code: 'US', n: 112 }, { code: 'VN', n: 46 }, { code: 'BR', n: 30 }, { code: 'BE', n: 22 }
];

/* ---- Departures. Dates are [month, day] in 2026. rate = freight per pallet (per container for container lots). ---- */
const DEPS = {
  'KM-0412': { from: 'ALG', to: 'MRS', mode: 'ts', cut: [10, 21], dep: [10, 23], eta: [10, 28], rate: 84, filled: 17, cap: 24, lane: 'DZ', temp: 'Ambient', note: 'Glass and cans', st: 'closing', wt: 'Weight 16.1 of 24.0 t' },
  'KM-0415': { from: 'ALG', to: 'MRS', mode: 'ts', cut: [11, 4], dep: [11, 6], eta: [11, 11], rate: 84, filled: 9, cap: 24, lane: 'DZ', temp: 'Ambient', note: 'Glass and cans', st: 'open' },
  'KM-DED': { from: 'ALG', to: 'MRS', mode: 'td', cut: [10, 15], dep: [10, 20], eta: [10, 26], rate: 126, filled: 0, cap: 24, lane: 'DZ', temp: 'Ambient', note: 'Your pallets only', st: 'open', hidden: true },
  'KM-0431': { from: 'ALG', to: 'MRS', mode: 'tc', cut: [10, 19], dep: [10, 21], eta: [10, 26], rate: 168, filled: 5, cap: 12, lane: 'DZ', temp: 'Chilled, 0 to 4 °C', note: 'Fresh produce and fish', st: 'closing' },
  'KM-0507': { from: 'ANR', to: 'PAR', mode: 'ts', cut: [10, 16], dep: [10, 19], eta: [10, 20], rate: 62, filled: 11, cap: 33, lane: 'BE', temp: 'Ambient', note: 'Inside the EU, no customs', st: 'open' },
  'KM-0509': { from: 'LYS', to: 'MRS', mode: 'ts', cut: [10, 16], dep: [10, 19], eta: [10, 20], rate: 38, filled: 6, cap: 33, lane: 'FR', temp: 'Ambient', note: 'Inside the EU, no customs', st: 'open', hidden: true },
  'KM-C0207': { from: 'EWR', to: 'LEH', mode: 'cs', cut: [10, 21], dep: [10, 29], eta: [11, 13], rate: 196, filled: 11, cap: 20, lane: 'US', temp: 'Ambient', note: 'Drinks and candy', st: 'open' },
  'KM-V0318': { from: 'SGN', to: 'LEH', mode: 'cs', cut: [11, 6], dep: [11, 12], eta: [12, 18], rate: 2900, filled: 3, cap: 8, lane: 'VN', temp: 'Ambient and frozen lots', note: 'Container lots and frozen seafood', st: 'open' }
};
const DEPMAP = { DZ: ['KM-0412', 'KM-0415', 'KM-DED'], US: ['KM-C0207'], BE: ['KM-0507'], FR: ['KM-0509'], VN: ['KM-V0318'], BR: ['KM-V0318'] };

/* ---- Offers: Hamoud La Blanche has two, everything else one. ---- */
function offersFor(pr) {
  if (pr.id === 'p1') return [
    { id: 'o1', sup: ['Supplier A (sample)', 'Fournisseur A (exemple)', 'المورد A (نموذج)'], org: 'DZ', moq: 1, tiers: pr.tiers, deps: DEPMAP.DZ },
    { id: 'o2', sup: ['Supplier B (sample)', 'Fournisseur B (exemple)', 'المورد B (نموذج)'], org: 'FR', moq: 2, tiers: [{ min: 2, price: 11.9 }], deps: DEPMAP.FR }
  ];
  return [{ id: 'o1', sup: ['Supplier A (sample)', 'Fournisseur A (exemple)', 'المورد A (نموذج)'], org: pr.org, moq: pr.moq || 1, tiers: pr.tiers || [], deps: DEPMAP[pr.org] }];
}

/* ---- Buyer markets (sample buyers) ---- */
const MARKETS = {
  fr: { city: ['Paris', 'Paris', 'باريس'], tz: 'Europe/Paris', co: 'Épicerie Orient (sample)', contact: 'Camille Laurent', init: 'CL', phone: '+33 1 84 00 00 00', pay: 'both', vat: 'FR' },
  dz: { city: ['Algiers', 'Alger', 'الجزائر العاصمة'], tz: 'Africa/Algiers', co: 'Supermarché El Djazair (sample)', contact: 'Yasmine Haddad', init: 'YH', phone: '+213 21 00 00 00', pay: 'transfer', vat: 'DZ' }
};

/* ---- Sample orders (the 9-step ladder from the prototype) ---- */
const ORDERS = {
  req: { ref: 'KR-26-1042', cur: 1, placed: [10, 13], what: [3, 6], st: 'warn', dates: ['Tue 13 Oct', 'By Wed 14 Oct', 'After confirmation', 'By Wed 21 Oct', 'Fri 23 Oct', 'Fri 23 to Wed 28 Oct', 'Wed 28 Oct (est.)', 'Wed 28 to Thu 29 Oct (est.)', 'Fri 30 Oct (est.)'], lines: [['Hamoud La Blanche', 3, 1471.5], ['Hamoud Selecto', 1, 637], ['Dr Pepper 12oz', 2, 2704]], freight: 728, ships: [['KM-0412', '4 pallets'], ['KM-C0207', '2 pallets']], paid: 0, docs: 1 },
  transit: { ref: 'KR-26-0987', cur: 5, placed: [9, 29], what: [1, 4], st: 'acc', dates: ['Tue 29 Sep', 'Wed 30 Sep', 'Fri 2 Oct', 'Thu 8 Oct', 'Fri 9 Oct', 'Now. Boarded Mon 12 Oct', 'Wed 14 Oct (est.)', 'Wed 14 to Thu 15 Oct (est.)', 'Fri 16 Oct (est.)'], lines: [['Hamoud La Blanche', 4, 1881]], freight: 336, ships: [['KM-0398', '4 pallets']], paid: 2217, docs: 5 },
  done: { ref: 'KR-26-0951', cur: 9, placed: [9, 8], what: [1, 2], st: 'ok', dates: ['Tue 8 Sep', 'Wed 9 Sep', 'Fri 11 Sep', 'Thu 17 Sep', 'Fri 18 Sep', 'Fri 18 to Wed 23 Sep', 'Wed 23 Sep', 'Wed 23 to Thu 24 Sep', 'Fri 25 Sep'], lines: [['Hamoud Selecto', 2, 1274]], freight: 168, ships: [['KM-0361', '2 pallets']], paid: 1442, docs: 6 },
  dec: { ref: 'KR-26-0932', cur: 1, declined: true, placed: [9, 21], what: [1, 3], st: 'bad', dates: ['Mon 21 Sep', 'Tue 22 Sep'], lines: [['Dr Pepper 12oz', 3, 4056]], freight: 588, ships: [], paid: 0, docs: 0 }
};

/* ---- Rationale pins: the buyer doubt, the design move, the source, the metric. ---- */
const RAT = {
  dep: ['"Will my goods actually ship, and when?"', 'One card shows route, fill level, cut-off date and freight per pallet, above the fold.', 'Research: gated shipments hide the core differentiator', 'Share of orders placed without a call'],
  ident: ['"Is this a real company I can reach?"', 'Legal entity, Dubai address, phone and support hours in the buyer\'s own time zone, on the home page and every footer.', 'Research: no trust signals on public pages; 9am to 5pm Dubai is 6am to 2pm in Algiers', 'Support contacts per order'],
  lock: ['"Why can\'t I see a price?"', 'The lock says what unlocks it. MSRP stays visible so a guest can still judge the product.', 'Research: every card says sign in', 'Guest to application rate'],
  lot: ['"Pallet card or container lot? They are not the same purchase."', 'Container lots show price per tonne, Incoterms and documents instead of price per case.', 'Research: two buyer types, one card design', 'Quote requests on container lots'],
  facts: ['"Can I qualify this product without calling?"', 'Pack, units per pallet, minimum order, origin and shelf life in one block, plus a named person to ask.', 'Research: thin public product data', 'Calls asking for product facts'],
  est: ['"What will this really cost me?"', 'Goods plus freight in one estimate, labelled as an estimate, with the buyer\'s own import costs shown separately.', 'Research: prices and freight live in separate concepts', 'Orders abandoned at the estimate'],
  fill: ['"What if the truck does not fill?"', 'Fill level and cut-off sit next to the choice, so the risk is visible before the request.', 'Research: truck fill is the main business risk', 'Departures closing under 70% full'],
  review: ['"Am I about to commit to something I misread?"', 'A review step states address, who clears customs and what is charged now (nothing) in plain words.', 'NN/g: prevent errors with a confirmation step', 'Corrections after submit'],
  pay: ['"How do I pay a company in Dubai?"', 'Payment steps differ by market: card or transfer for France, transfer with proof for Algeria.', 'Research: Algerian cards may not work on international platforms', 'Payment proof rejection rate'],
  recv: ['"Did my order go through?"', 'A received screen and an email, both with the order number, arrive within seconds and say the same thing.', 'Baymard: users struggle to verify the purchase', 'Time from submit to confirmed'],
  lad: ['"Where is my order now, and what happens next?"', 'A nine-step ladder with dates, plain notes and a named contact replaces the phone update.', 'Research: the order ladder', 'Support contacts per order'],
  dec: ['"What if you say no?"', 'A decline states the reason in plain words and the refund route, so a no still feels handled.', 'Research: any state before 3 can end in a decline', 'Repeat orders after a decline'],
  apply: ['"How long until I can order?"', 'Business-only form, documents listed up front, a tracker after submit.', 'Research: account approval is a silent wait', 'Time from apply to approved'],
  reorder: ['"I order the same thing every month."', 'Reorder and saved templates on every past order.', 'Research: reorder is the real scale lever', 'Repeat orders per buyer'],
  again: ['"I order the same pallets every few weeks."', 'Usual products sit on the home page with the past quantity and the next departures, added in one step.', 'Research: reorder is the real scale lever', 'Repeat orders per buyer'],
  similar: ['"Is anything I usually buy on offer right now?"', 'Deals matched to past orders, with the 30-day low, end date and stock left, plus a quick add.', 'EU price-reduction rule: a cut is measured against the lowest price of the last 30 days', 'Deal views that become orders'],
  save: ['"Am I getting the best deal on this order?"', 'One card lists what improves the deal, the next price tier and a similar product for less, each with its effect in euros. Nothing changes until the buyer chooses.', 'On a call, a rep points out the better deal', 'Suggestions accepted per order'],
  move: ['"Too many pallets for this truck. Now what?"', 'The fix sits where the problem is: a Change departure control on each line opens the other departures with the room left, including a dedicated truck.', 'NN/g: help users recognise, diagnose and recover from errors', 'Blocked carts that still send a request'],
  buyagain: ['"I want this product again, not the whole order."', 'Buy again on each order line opens the quick-order card with the same quantity and the next departures.', 'Research: reorder is the real scale lever', 'Line reorders per buyer'],
  search: ['"The search returned nothing. Is the site broken?"', 'Results show a loading state, and an empty search points to what to do next.', 'Research: search delay and the empty kingo search', 'Search exits without a click']
};

const SCREENS = [
  ['home', 'Home'], ['deals', 'Deals and new arrivals'], ['category', 'Category with filters'], ['product', 'Product page'],
  ['cart', 'Your order'], ['request', 'Request order'], ['received', 'Order received'], ['orders', 'My orders'],
  ['departures', 'Open departures'], ['apply', 'Apply for access'], ['pending', 'Application received']
];
/* Gated screens: need the approved stage. */
const GATED = { cart: 1, request: 1, received: 1, orders: 1 };

/* Story: the five-minute happy path. */
/* Story: the five-minute happy path. prep sets up state for a step; focus scrolls to the part the caption is about. */
const OVER_CART = () => [{ pid: 'p1', off: 'o1', dep: 'KM-0412', qty: 6 }, { pid: 'p2', off: 'o1', dep: 'KM-0412', qty: 2 }, { pid: 'p4', off: 'o1', dep: 'KM-C0207', qty: 2 }];
const STORY = [
  { s: 'home', stage: 'guest', device: 'web', cap: 'A buyer lands on the home page. The next departure is the first thing they see.' },
  { s: 'category', stage: 'guest', device: 'web', cap: 'Prices are locked, MSRP stays visible. The lock says what unlocks it.' },
  { s: 'apply', stage: 'guest', device: 'web', cap: 'Business-only application. Documents are listed before the buyer starts.' },
  { s: 'pending', stage: 'pending', device: 'web', cap: 'After applying: a tracker, a named contact, and indicative prices while they wait.' },
  { s: 'home', stage: 'approved', device: 'web', focus: '#again', cap: 'Approved. Home now opens on Order again, then deals close to what they usually buy.' },
  { s: 'product', stage: 'approved', device: 'web', cap: 'Or pick a new product: an offer, a departure and a quantity. The estimate updates live.' },
  { s: 'cart', stage: 'approved', device: 'web', prep: () => { S.cart = OVER_CART(); }, cap: 'One truck is over by a pallet. The fix sits on the line: change its departure. Above, ways to get more value.' },
  { s: 'request', stage: 'approved', device: 'web', prep: () => { if (cartTotals().over || !S.cart.length) S.cart = DEFAULT_CART(); }, cap: 'A review step in plain words. Nothing is charged at this step.' },
  { s: 'received', stage: 'approved', device: 'web', cap: 'Order received: same number on screen and in the email, with a named contact.' },
  { s: 'orders', stage: 'approved', device: 'web', focus: '.oline', cap: 'The ladder replaces the phone call. Reorder a whole order, or buy one line again.' }
];
