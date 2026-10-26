/* Deals, Category, Product. */
Object.assign(T, {
  dealsHead: ['Deals and new arrivals', 'Offres et nouveautés', 'العروض والوصولات الجديدة'],
  tDeals: ['Deals ending soon', 'Offres bientôt terminées', 'عروض تنتهي قريباً'], tNew2: ['New arrivals', 'Nouveautés', 'وصل حديثاً'], tSoon: ['Coming soon', 'Bientôt disponible', 'قريباً'],
  leadDeals: ['Real stock and real end dates. The cut is measured against the lowest price of the last 30 days.', 'Stocks et dates de fin réels. La remise se mesure par rapport au prix le plus bas des 30 derniers jours.', 'مخزون حقيقي وتواريخ انتهاء حقيقية. يُقاس الخصم على أدنى سعر خلال آخر 30 يوماً.'],
  leadNew: ['Added by KingoMart in the last 7 days. Newest first.', 'Ajoutés par KingoMart ces 7 derniers jours. Les plus récents d\'abord.', 'أضافتها KingoMart خلال آخر 7 أيام. الأحدث أولاً.'],
  leadSoon: ['Tell us you are interested. We email you the day it can be ordered.', 'Dites-nous que cela vous intéresse. Nous vous écrivons le jour où vous pourrez commander.', 'أخبرنا باهتمامك. نراسلك يوم يصبح الطلب متاحاً.'],
  low30: [(v) => `30-day low ${v} per case`, (v) => `Plus bas sur 30 jours : ${v} par caisse`, (v) => `أدنى سعر خلال 30 يوماً: ${v} للصندوق`],
  ends: [(d, tm) => `Ends ${d}${tm ? ', ' + tm : ''}`, (d, tm) => `Jusqu'au ${d}${tm ? ', ' + tm : ''}`, (d, tm) => `ينتهي ${d}${tm ? ', ' + tm : ''}`],
  leftN: [(n, u) => `${n} ${u === 'carton' ? 'cartons' : 'cases'} left`, (n, u) => `${n} ${u === 'carton' ? 'cartons' : 'caisses'} restants`, (n, u) => `متبقّي ${n}`],
  added: [(n) => `Added ${n} days ago`, (n) => `Ajouté il y a ${n} jours`, (n) => `أُضيف قبل ${n} أيام`],
  notify: ['Notify me', 'Me prévenir', 'أبلغني'], notified: ['We will email you', 'Nous vous écrirons', 'سنراسلك'],
  /* Category */
  catHead: ['All products', 'Tous les produits', 'كل المنتجات'], filters: ['Filters', 'Filtres', 'عوامل التصفية'], fOrigin: ['Origin', 'Origine', 'المنشأ'], fPack: ['Pack type', 'Type de conditionnement', 'نوع التعبئة'], fDeals: ['Deals only', 'Offres seulement', 'العروض فقط'],
  sortBy: ['Sort by', 'Trier par', 'ترتيب حسب'], sNew: ['Newest', 'Nouveautés', 'الأحدث'], sPrice: ['Price per unit', 'Prix par unité', 'السعر للوحدة'], sArr: ['Arrives soonest', 'Arrivée la plus proche', 'الأقرب وصولاً'],
  count: [(n, tot) => `${n} of ${tot} sample products shown. Prices ex VAT.`, (n, tot) => `${n} produits sur ${tot} affichés. Prix HT.`, (n, tot) => `عرض ${n} من ${tot} منتجاً. الأسعار بدون ضريبة.`],
  clear: ['Clear filters', 'Effacer les filtres', 'مسح عوامل التصفية'], none: ['No products match these filters', 'Aucun produit ne correspond à ces filtres', 'لا توجد منتجات مطابقة'], noneP: ['Remove a filter or clear them all to see the full catalogue.', 'Retirez un filtre ou effacez-les tous pour voir tout le catalogue.', 'أزل عامل تصفية أو امسحها كلها لعرض الكتالوج كاملاً.'],
  pCan: ['Can', 'Canette', 'علبة'], pGlass: ['Glass bottle', 'Bouteille verre', 'زجاجة زجاج'], pPet: ['PET bottle', 'Bouteille PET', 'زجاجة PET'], pCarton: ['Carton', 'Carton', 'كرتونة'], pBag: ['Frozen pack', 'Colis surgelé', 'عبوة مجمّدة'], pLot: ['Container lot', 'Lot conteneur', 'لوط حاوية'],
  searchF: ['Search', 'Recherche', 'بحث'],
  inOrder: [(n) => `${n} ${n === 1 ? 'line' : 'lines'} in your order`, (n) => `${n} ligne${n > 1 ? 's' : ''} dans votre commande`, (n) => `${n} بنود في طلبك`],
  showN: [(n) => `Show ${n} products`, (n) => `Afficher ${n} produits`, (n) => `عرض ${n} منتجاً`],
  availFrom: ['Available from', 'Disponible dès le', 'متاح من'],
  /* Product */
  home2: ['Home', 'Accueil', 'الرئيسية'], bev: ['Beverages', 'Boissons', 'المشروبات'], soft: ['Soft drinks', 'Sodas', 'المشروبات الغازية'], dry: ['Dry goods', 'Épicerie', 'مواد جافة'], frozen: ['Frozen', 'Surgelés', 'مجمّدات'], coffee: ['Commodities', 'Matières premières', 'سلع'],
  photoT: [['Bottle', 'Bouteille', 'زجاجة'], ['Case', 'Caisse', 'صندوق'], ['Pallet', 'Palette', 'باليت'], ['Label', 'Étiquette', 'ملصق']],
  factPack: ['Pack', 'Conditionnement', 'التعبئة'], factPal: ['Per pallet', 'Par palette', 'للباليت'], factMoq: ['Minimum order', 'Commande minimale', 'الحد الأدنى للطلب'], factOrg: ['Origin', 'Origine', 'المنشأ'], factLife: ['Shelf life', 'Durée de conservation', 'مدة الصلاحية'],
  lifeV: ['12 months from production', '12 mois à partir de la production', '12 شهراً من تاريخ الإنتاج'],
  askQ: ['Ask about this product', 'Poser une question sur ce produit', 'اسأل عن هذا المنتج'],
  askTo: [(n) => `${n} answers within one business day.`, (n) => `${n} répond sous un jour ouvré.`, (n) => `يردّ ${n} خلال يوم عمل.`],
  offers: ['Supplier offers', 'Offres des fournisseurs', 'عروض الموردين'], colSup: ['Supplier and origin', 'Fournisseur et origine', 'المورد وبلد المنشأ'], colMin: ['Minimum', 'Minimum', 'الحد الأدنى'],
  colA: ['Per case', 'Par caisse', 'للصندوق'], colB: ['Per pallet', 'Par palette', 'للباليت'], colAg: ['MSRP per unit', 'PVC par unité', 'السعر المقترح للوحدة'], colBg: ['Wholesale price', 'Prix de gros', 'سعر الجملة'], locked1: ['Locked', 'Verrouillé', 'مقفل'],
  colAl: ['Per tonne', 'Par tonne', 'للطن'], colBl: ['Per container', 'Par conteneur', 'للحاوية'],
  offNote: ['Sample offers. Prices are per case, ex VAT, at your quantity.', "Offres d'exemple. Prix par caisse, HT, pour votre quantité.", 'عروض تجريبية. الأسعار للصندوق، بدون ضريبة، حسب كميتك.'],
  offNoteG: ['MSRP is the suggested shelf price. Wholesale prices show after approval.', 'Le PVC est le prix de vente conseillé. Les prix de gros s\'affichent après approbation.', 'السعر المقترح هو سعر البيع المقترح. تظهر أسعار الجملة بعد الموافقة.'],
  guestH: ['See wholesale prices, dates and your landed cost', 'Voyez les prix de gros, les dates et votre coût rendu', 'اطّلع على أسعار الجملة والتواريخ وتكلفتك عند الوصول'],
  guestP: ['Registered businesses see wholesale prices, dates, freight and import costs for each offer. Review usually takes one business day.', "Les entreprises enregistrées voient les prix de gros, les dates, le fret et les frais d'import de chaque offre. La vérification prend en général un jour ouvré.", 'ترى الشركات المسجلة أسعار الجملة والتواريخ والشحن وتكاليف الاستيراد لكل عرض. تستغرق المراجعة عادةً يوم عمل.'],
  qtyT: ['Quantity', 'Quantité', 'الكمية'], qtyLotT: ['Containers', 'Conteneurs', 'الحاويات'], remove1: ['Remove one', 'En retirer un', 'إزالة واحد'], add1: ['Add one', 'En ajouter un', 'إضافة واحد'],
  moqT: [(n) => `Minimum order: ${n}.`, (n) => `Commande minimale : ${n}.`, (n) => `الحد الأدنى للطلب: ${n}.`],
  tierUp: [(k, v) => `Add ${k} to unlock ${v} per case.`, (k, v) => `Ajoutez ${k} pour obtenir ${v} par caisse.`, (k, v) => `أضف ${k} للحصول على ${v} للصندوق.`],
  tierTop: ['You are on the best price tier.', 'Vous êtes sur le meilleur palier de prix.', 'أنت على أفضل شريحة سعرية.'], tierFlat: ['Flat price per case.', 'Prix unique par caisse.', 'سعر ثابت للصندوق.'],
  depT: ['Departure', 'Départ', 'الرحلة'], pallets: ['pallets reserved', 'palettes réservées', 'باليت محجوز'],
  depNote: ['Arrival is the port. Delivery from the port to your dock is arranged after confirmation. Dates and freight are estimates.', "L'arrivée correspond au port. La livraison du port à votre quai est organisée après confirmation. Dates et fret sont des estimations.", 'الوصول يعني الميناء. يُرتَّب التوصيل من الميناء إلى رصيفك بعد التأكيد. التواريخ والشحن تقديرية.'],
  estT: ['Estimate for your request', 'Estimation de votre demande', 'تقدير طلبك'], invLbl: ['Invoice estimate, ex VAT', 'Facture estimée, HT', 'تقدير الفاتورة، بدون ضريبة'],
  goodsL: [(c, u) => `Goods, ${c} at ${u}`, (c, u) => `Marchandise, ${c} à ${u}`, (c, u) => `البضاعة، ${c} بسعر ${u}`], goodsLot: [(c, u) => `Goods, ${c} at ${u} per tonne`, (c, u) => `Marchandise, ${c} à ${u} la tonne`, (c, u) => `البضاعة، ${c} بسعر ${u} للطن`],
  freightL: [(c, u) => `Freight, ${c} at ${u} each`, (c, u) => `Fret, ${c} à ${u} chacune`, (c, u) => `الشحن، ${c} بسعر ${u} للواحد`],
  landed: [(v) => `Goods plus freight: ${v} per case.`, (v) => `Marchandise plus fret : ${v} par caisse.`, (v) => `البضاعة مع الشحن: ${v} للصندوق.`],
  landedLot: [(v) => `Goods plus freight: ${v} per tonne.`, (v) => `Marchandise plus fret : ${v} la tonne.`, (v) => `البضاعة مع الشحن: ${v} للطن.`],
  ownImp: ['Your own import costs. Not on the KingoMart invoice.', "Vos propres frais d'import. Ils ne figurent pas sur la facture KingoMart.", 'تكاليف الاستيراد الخاصة بك. ليست ضمن فاتورة KingoMart.'],
  addOrder: ['Add to order', 'Ajouter à la commande', 'أضف إلى الطلب'], lockedT: ['Ordering opens after approval', 'La commande ouvre après approbation', 'يُفتح الطلب بعد الموافقة'],
  lockedP: ['Your account is under review, usually one business day. You can keep this estimate.', 'Votre compte est en cours de vérification, en général un jour ouvré. Vous pouvez garder cette estimation.', 'حسابك قيد المراجعة، عادةً يوم عمل. يمكنك الاحتفاظ بهذا التقدير.'],
  detT: ['Product details', 'Détails du produit', 'تفاصيل المنتج'], packT: ['Pack and storage', 'Conditionnement et stockage', 'التعبئة والتخزين'], labelT: ['Label data (EU food information)', "Données d'étiquette (information alimentaire UE)", 'بيانات الملصق (معلومات الغذاء في الاتحاد الأوروبي)'],
  docsH: ['Documents', 'Documents', 'المستندات'], specT: ['Specification', 'Spécification', 'المواصفات'], claimsT: ['Importer and claims', 'Importateur et réclamations', 'المستورد والمطالبات'],
  claims1: ['Importer of record: you, unless KingoMart arranges customs. We confirm this before you send a request.', "Importateur : vous, sauf si KingoMart organise la douane. Nous le confirmons avant l'envoi de votre demande.", 'المستورد المسجل: أنت، ما لم تتولَّ KingoMart الإجراءات الجمركية. نؤكد ذلك قبل إرسال الطلب.'],
  claims2: ['Claims: report damage with photos within 7 days of delivery. We reply within one business day.', 'Réclamations : signalez les dommages avec photos dans les 7 jours suivant la livraison. Nous répondons sous un jour ouvré.', 'المطالبات: بلّغ عن التلف مع صور خلال 7 أيام من التسليم. نردّ خلال يوم عمل.'],
  addedH: ['Added to your order', 'Ajouté à votre commande', 'تمت الإضافة إلى طلبك'], viewOrder: ['View order', 'Voir la commande', 'عرض الطلب'], keep: ['Keep shopping', 'Continuer vos achats', 'تابع التسوق'],
  incoT: ['Incoterms', 'Incoterms', 'شروط التسليم'], incoFob: ['FOB Ho Chi Minh City', 'FOB Hô Chi Minh-Ville', 'FOB مدينة هو تشي منه'], incoCif: ['CIF Le Havre', 'CIF Le Havre', 'CIF لوهافر']
});
const CATN = { glass: ['bev', 'soft'], can: ['bev', 'soft'], pet: ['bev', 'soft'], carton: ['dry', 'dry'], bag: ['frozen', 'frozen'], lot: ['coffee', 'coffee'] };
const PTL = { can: 'pCan', glass: 'pGlass', pet: 'pPet', carton: 'pCarton', bag: 'pBag', lot: 'pLot' };

/* ---------- Deals ---------- */
function dcard(pr) {
  const d = pr.ends;
  const un = `${t('msrp')} ${m(pr.msrp)} ${t('per_' + pr.uw)}`;
  const px = S.stage === 'guest' ? `${lockedLbl()}<span class="mut">${un}</span>` : `<span class="pr ${S.just ? 'pxu' : ''}">${S.stage === 'pending' ? `<small>${t('from')} </small>${m(KM.r2(pr.tiers[0].price * pr.pc))}` : m(pr.tiers[0].price)}</span><span class="mut">${S.stage === 'pending' ? t('perPallet') : t('perCase')}. ${un}</span><span class="mut">${t('low30', m(pr.low))}</span>`;
  return `<a class="pc" href="#/product?pid=${pr.id}">${tile(pr)}<div class="bd"><h3>${esc(pr.name)}</h3><span class="mut t-2">${esc(L3(pr.pk))}</span><div class="px">${px}</div><div class="arr"><span>${t('ends', D(d), d[2])}</span><span>${t('leftN', pr.left[0], pr.left[1])}</span></div></div></a>`;
}
SCR.deals = () => {
  const tabs = [['deals', 'tDeals'], ['new', 'tNew2'], ['soon', 'tSoon']];
  let body = '';
  if (S.dtab === 'deals') body = `<div class="pgrid">${PRODUCTS.filter((p) => p.low).map(dcard).join('')}</div>`;
  else if (S.dtab === 'new') body = `<div class="card">${PRODUCTS.filter((p) => p.added).sort((a, b) => a.added - b.added).map((p) => `<a class="lrow" href="#/product?pid=${p.id}">${tile(p)}<div><b class="t-5">${esc(p.name)}</b><div class="mut t-3">${esc(L3(p.pk))}</div><div class="mut t-2 mt-1">${t('added', p.added)}</div></div><div class="px">${priceBlock(p)}</div></a>`).join('')}</div>`;
  else body = `<div class="card">${SOON.map((x, i) => `<div class="lrow"><div class="ph" style="--h:${[70, 18, 32, 98][i]}">${flag(x.org)}${pk(['pet', 'carton', 'bag', 'can'][i])}</div><div><b class="t-5">${esc(x.name)}</b><div class="mut t-3">${esc(L3(x.pk))} · ${L3(COUNTRY[x.org])}</div><div class="mut t-2 mt-1">${t('availFrom')} ${D(x.when)}</div></div><button class="btn ghost sm ${S.notified[i] ? 'off' : ''}" data-a="notify" data-i="${i}" ${S.notified[i] ? 'disabled' : ''}>${S.notified[i] ? ic('check') + t('notified') : ic('bell') + t('notify')}</button></div>`).join('')}</div>`;
  return `<div class="wrap sec first"><div class="rise"><h1 class="pgh">${t('dealsHead')}</h1><div class="tabs mt-6" role="group">${tabs.map(([k, l]) => `<button class="fc" data-a="dtab" data-v="${k}" aria-pressed="${S.dtab === k}">${t(l)}</button>`).join('')}</div><p class="mut mt-5 mb-7 measure">${t({ deals: 'leadDeals', new: 'leadNew', soon: 'leadSoon' }[S.dtab])}</p></div>${body}</div>`;
};
A.dtab = (el) => { S.dtab = el.dataset.v; render(false); };
A.notify = (el) => { S.notified[el.dataset.i] = true; render(false); };

/* ---------- Category ---------- */
const OFILT = ['DZ', 'US', 'BE', 'VN'], PFILT = ['can', 'glass', 'pet', 'carton', 'bag', 'lot'];
function listCat() {
  const f = S.flt;
  const anyO = OFILT.some((k) => f.orig[k]), anyP = PFILT.some((k) => f.pack[k]);
  let l = PRODUCTS.filter((p) => (!anyO || f.orig[p.org]) && (!anyP || f.pack[p.pt]) && (!f.deals || p.low) && (!f.q || matches(f.q).includes(p)));
  if (f.sort === 'price') l = l.slice().sort((a, b) => unitN(a) - unitN(b));
  if (f.sort === 'arrive') l = l.slice().sort((a, b) => arrOf(a.org).eta[0] * 100 + arrOf(a.org).eta[1] - (arrOf(b.org).eta[0] * 100 + arrOf(b.org).eta[1]));
  return l;
}
const filterBody = () => `<div class="fil"><div><h4>${t('fOrigin')}</h4>${OFILT.map((k) => `<label><input type="checkbox" data-a="fo" data-v="${k}" ${S.flt.orig[k] ? 'checked' : ''}>${flag(k)}${L3(COUNTRY[k])}</label>`).join('')}</div><div><h4>${t('fPack')}</h4>${PFILT.map((k) => `<label><input type="checkbox" data-a="fp" data-v="${k}" ${S.flt.pack[k] ? 'checked' : ''}>${t(PTL[k])}</label>`).join('')}</div><div><label><input type="checkbox" data-a="fd" ${S.flt.deals ? 'checked' : ''}><b class="fw-semi">${t('fDeals')}</b></label></div></div>`;
SHEETS.filters = () => `<h3 class="t-6 mb-4">${t('filters')}</h3>${filterBody()}<button class="btn block mt-5" data-a="sheet-x">${t('showN', listCat().length)}</button>`;
SCR.category = () => {
  const f = S.flt, l = listCat();
  const act = [].concat(OFILT.filter((k) => f.orig[k]).map((k) => [L3(COUNTRY[k]), 'fo', k])).concat(PFILT.filter((k) => f.pack[k]).map((k) => [t(PTL[k]), 'fp', k])).concat(f.deals ? [[t('fDeals'), 'fd', '']] : []).concat(f.q ? [[t('searchF') + ': ' + esc(f.q), 'fq', '']] : []);
  const sorts = [['new', 'sNew'], ['price', 'sPrice'], ['arrive', 'sArr']];
  return `<div class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="#/home">${t('home2')}</a>${ic('chev', 'rr')}<span aria-current="page">${t('catHead')}</span></nav>
  <div class="sec first"><h1 class="pgh rise">${t('catHead')}</h1><div class="cat mt-7"><aside class="fil desk" aria-label="${esc(t('filters'))}">${filterBody().replace('class="fil"', 'class="fil st"')}</aside><div>
  <div class="tools"><p class="mut t-3 measure-s">${t('count', l.length, PRODUCTS.length)}</p><div class="row g-2"><button class="fc fbtn" data-a="open-filters">${ic('sliders')}${t('filters')}</button><div class="tabs" role="group" aria-label="${esc(t('sortBy'))}">${sorts.map(([k, lb]) => `<button class="fc" data-a="sort" data-v="${k}" aria-pressed="${f.sort === k}">${t(lb)}</button>`).join('')}</div></div></div>
  ${act.length ? `<div class="tabs mb-5">${act.map((x) => `<button class="fc" data-a="${x[1]}" data-v="${x[2]}" data-rm="1" aria-label="Remove ${x[0]}">${x[0]}${ic('x')}</button>`).join('')}<button class="lnk mut ms-2" data-a="fclear">${ic('x')}${t('clear')}</button></div>` : ''}
  ${l.length ? `<div class="pgrid hasp">${pin('lock')}${l.map((p) => pcard(p, true)).join('')}</div>` : emptyState(t('none'), t('noneP'), `<button class="btn ghost" data-a="fclear">${ic('x')}${t('clear')}</button>`)}</div></div></div></div>`;
};
const tog = (o, k) => { o[k] = !o[k]; };
A.fo = (el) => { if (el.dataset.rm) tog(S.flt.orig, el.dataset.v); render(false); }; A['fo:change'] = (el) => { tog(S.flt.orig, el.dataset.v); render(false); };
A.fp = (el) => { if (el.dataset.rm) tog(S.flt.pack, el.dataset.v); render(false); }; A['fp:change'] = (el) => { tog(S.flt.pack, el.dataset.v); render(false); };
A.fd = (el) => { if (el.dataset.rm) S.flt.deals = false; render(false); }; A['fd:change'] = () => { S.flt.deals = !S.flt.deals; render(false); };
A.fq = () => { S.flt.q = ''; render(false); };
A.fclear = () => { S.flt = { orig: {}, pack: {}, deals: false, sort: S.flt.sort, q: '' }; render(false); };
A.sort = (el) => { S.flt.sort = el.dataset.v; render(false); };
A['open-filters'] = () => openSheet({ type: 'filters', label: 'Filters' });

/* ---------- Product ---------- */
function importRows(pr) {
  const nonEU = pr.org !== 'FR' && pr.org !== 'BE';
  if (S.market === 'dz') return [[['Customs duty and import taxes in Algeria', 'Droits et taxes à l\'importation en Algérie', 'الرسوم والضرائب الجمركية في الجزائر'], ['To confirm. Paid at customs clearance', 'À confirmer. Payés lors du dédouanement', 'قيد التأكيد. تُدفع عند التخليص الجمركي']], [['Origin proof', "Preuve d'origine", 'إثبات المنشأ'], ['Requested from supplier', 'Demandée au fournisseur', 'يُطلب من المورد']]];
  return nonEU
    ? [[['Customs duty', 'Droits de douane', 'الرسوم الجمركية'], ['To confirm. Paid at customs clearance', 'À confirmer. Payés lors du dédouanement', 'قيد التأكيد. تُدفع عند التخليص الجمركي']], [['Import VAT', "TVA à l'importation", 'ضريبة الاستيراد'], ['Self-assessed on your VAT return (CA3). Rate to confirm', 'Autoliquidée sur votre déclaration de TVA (CA3). Taux à confirmer', 'تُحتسب ذاتياً في إقرارك الضريبي (CA3). النسبة قيد التأكيد']], [['Origin proof', "Preuve d'origine", 'إثبات المنشأ'], ['Requested from supplier', 'Demandée au fournisseur', 'يُطلب من المورد']]]
    : [[['Customs duty', 'Droits de douane', 'الرسوم الجمركية'], ['None. EU origin', 'Aucun. Origine UE', 'لا يوجد. منشأ أوروبي']], [['VAT', 'TVA', 'ضريبة القيمة المضافة'], ['French VAT on the invoice', 'TVA française sur la facture', 'ضريبة فرنسية على الفاتورة']]];
}
const selState = () => {
  const pr = PBY[S.sel.pid], offs = offersFor(pr), off = offs.find((o) => o.id === S.sel.off) || offs[0];
  const depId = off.deps.includes(S.sel.dep) ? S.sel.dep : off.deps[0];
  const qty = Math.min(12, Math.max(off.moq, S.sel.qty || 1)), d = DEPS[depId];
  const prod = { shape: pr.shape, pc: pr.pc, tiers: off.tiers, tonnes: pr.tonnes, ppt: pr.ppt };
  return { pr, offs, off, depId, d, qty, c: KM.calc(prod, qty, d), prod };
};
function estimate(x) {
  const { pr, c, qty, d } = x, lot = isLot(pr);
  const rows = importRows(pr).map((r) => `<div><span class="mut">${L3(r[0])}</span><span>${L3(r[1])}</span></div>`).join('');
  return `<div class="est hasp">${pin('est')}<h2>${t('estT')}</h2>
  <div class="rowb"><span>${lot ? t('goodsLot', ctr(qty) + ' · ' + (qty * pr.tonnes) + ' t', m(pr.ppt)) : t('goodsL', cs(c.cases), m(c.unit))}</span><b class="mono">${m(c.goods)}</b></div>
  <div class="rowb"><span>${t('freightL', qtyL(pr, qty), m(d.rate))}</span><b class="mono">${m(c.freight)}</b></div>
  <div class="rowb tot"><span>${t('invLbl')}</span><span class="big mono">${m(c.invoice)}</span></div>
  <p class="mut t-2 mt-2">${lot ? t('landedLot', m(KM.r2(c.invoice / (qty * pr.tonnes)))) : t('landed', m(KM.r2(c.invoice / c.cases)))}</p>
  <div class="imp"><b class="t-2">${t('ownImp')}</b>${rows}</div></div>`;
}
function tierHint(x) {
  const { off, qty, pr } = x; if (isLot(pr)) return '';
  if (off.tiers.length === 1) return t('tierFlat');
  const nx = off.tiers.find((y) => y.min > qty);
  return nx ? t('tierUp', pl(nx.min - qty), m(nx.price)) : t('tierTop');
}
SCR.product = () => {
  const x = selState(), { pr, offs, off, depId, d, qty, c } = x, lot = isLot(pr), g = S.stage === 'guest', ap = S.stage === 'approved';
  const cat = CATN[pr.pt];
  const views = ['', 'case', 'pallet', 'label'];
  const thumbs = [0, 1, 2, 3].map((i) => `<button data-a="img" data-i="${i}" aria-pressed="${S.sel.img === i}" aria-label="${esc(L3(T.photoT[i]))}"><div class="ph" style="${hueOf(pr)}">${art(pr, views[i])}</div></button>`).join('');
  const mk = MARKETS[S.market];
  const colA = lot ? (g ? 'colAg' : 'colAl') : g ? 'colAg' : 'colA', colB = lot ? 'colBl' : g ? 'colBg' : 'colB';
  const offRows = offs.map((o) => {
    const tr = KM.tierFor(o.tiers.length ? o.tiers : [{ price: 0 }], g ? o.moq : Math.max(qty, o.moq));
    const a = lot ? m(pr.ppt) : g ? m(pr.msrp) : m(tr.price), b = lot ? m(pr.ppt * pr.tonnes) : g ? `<span class="lockl">${ic('lock')}${t('locked1')}</span>` : m(KM.r2(tr.price * pr.pc));
    return `<button class="orow2" data-a="offer" data-id="${o.id}" aria-pressed="${o.id === off.id}"><span class="dot"></span><span><b class="fw-semi">${L3(o.sup)}</b><br><span class="mut t-2">${flag(o.org)} ${L3(COUNTRY[o.org])}</span></span><span class="hn">${qtyL(pr, o.moq)}</span><span class="mono">${a}</span><span class="mono">${b}</span></button>`;
  }).join('');
  const depCards = off.deps.map((id) => {
    const q = DEPS[id], free = q.cap - q.filled;
    return `<button class="dcard" data-a="dep" data-id="${id}" aria-pressed="${id === depId}"><div class="hd2"><span class="dot"></span><div><b>${depTitle(id)}</b><div class="mut t-2">${route(q)}, ${L3(MODE[q.mode])}</div></div><span class="mono ms-auto">${m(q.rate)} <span class="unit">${lot ? '/ ctr' : t('perPallet')}</span></span></div>
    <div class="k3"><div><span class="lab">${t('orderBy')}</span><b class="mono">${D(q.cut)}</b></div><div><span class="lab">${t('departs')}</span><b class="mono">${D(q.dep)}</b></div><div><span class="lab">${t('arrives')}</span><b class="mono">${D(q.eta)}</b></div></div>
    ${id === 'KM-DED' ? '' : `<div>${meter(q.filled, q.cap)}<div class="mut t-2 mt-2">${q.filled} / ${q.cap} ${t('pallets')} · ${t('left', free)}</div></div>`}</button>`;
  }).join('');
  const facts = `<div class="facts hasp">${pin('facts')}<div><span>${t('factPack')}</span><b>${esc(L3(pr.pk))}</b></div>${lot ? `<div><span>${t('incoT')}</span><b>${esc(L3(T[S.sel.lotInco === 'fob' ? 'incoFob' : 'incoCif']))}</b></div>` : `<div><span>${t('factPal')}</span><b>${cs(pr.pc)}</b></div>`}<div><span>${t('factMoq')}</span><b>${qtyL(pr, off.moq)}</b></div><div><span>${t('factOrg')}</span><b>${flag(off.org)} ${L3(COUNTRY[off.org])}</b></div><div><span>${t('factLife')}</span><b>${lot ? '12 months' : t('lifeV')}</b></div></div>
    <div class="notice mt-4">${ic('user')}<div><b>${t('askQ')}</b><br><span class="mut">${t('askTo', mk.contact)}</span></div></div>`;
  const control = g
    ? `<div class="card pad hasp mt-7">${pin('lock')}<h2 class="t-6">${t('guestH')}</h2><p class="mut mt-3 mb-5 measure">${t('guestP')}</p><a class="btn" href="#/apply">${t('apply')}${arrow}</a></div>`
    : `<div class="blk"><h2>${lot ? t('qtyLotT') : t('qtyT')}</h2><div class="row g-4"><div class="stepper" role="group" aria-label="${esc(t('qtyT'))}"><button data-a="qty" data-d="-1" aria-label="${esc(t('remove1'))}" ${qty <= off.moq ? 'disabled' : ''}>${ic('minus')}</button><output aria-live="polite" class="${S.roll && S.roll.k === 'sel' ? S.roll.d : ''}"><span>${qty}</span></output><button data-a="qty" data-d="1" aria-label="${esc(t('add1'))}" ${qty >= 12 ? 'disabled' : ''}>${ic('plus')}</button></div><span>${qtyL(pr, qty)}${lot ? ` · ${qty * pr.tonnes} t` : ` · ${cs(c.cases)}`}</span></div><p class="mut mt-3 t-3">${t('moqT', qtyL(pr, off.moq))} ${tierHint(x)}</p></div>
    <div class="blk hasp">${pin('fill')}<h2>${t('depT')}</h2><div class="depc">${depCards}</div><p class="mut t-2 mt-3">${t('depNote')}</p></div>
    <div class="blk">${estimate(x)}</div>
    <div class="blk">${ap ? `<div class="row g-3"><button class="btn" data-a="add"><span class="swap"><span>${ic('plus')}${t('addOrder')}</span><span aria-hidden="true">${ic('check')}${t('addedH')}</span></span></button></div>` : `<div class="notice warn">${ic('clock')}<div><b>${t('lockedT')}</b><br>${t('lockedP')}</div></div>`}</div>`;
  const lotDetails = `<details class="acc-d" open><summary>${t('specT')}${ic('chev')}</summary><div class="in-b"><dl class="dl"><div><dt>${t('factOrg')}</dt><dd>${L3(COUNTRY[pr.org])}</dd></div><div><dt>${t('factPack')}</dt><dd>${L3(pr.pk)}</dd></div><div><dt>${t('incoT')}</dt><dd><span class="tabs" role="group">${['cif', 'fob'].map((k) => `<button class="fc" data-a="inco" data-v="${k}" aria-pressed="${S.sel.lotInco === k}">${L3(T[k === 'fob' ? 'incoFob' : 'incoCif'])}</button>`).join('')}</span></dd></div><div><dt>${t('docsH')}</dt><dd>Commercial invoice, packing list, bill of lading, certificate of origin, phytosanitary certificate${sm()}</dd></div></dl></div></details>`;
  const foodDetails = `<details class="acc-d" open><summary>${t('packT')}${ic('chev')}</summary><div class="in-b"><dl class="dl"><div><dt>${t('factPack')}</dt><dd>${esc(L3(pr.pk))}</dd></div><div><dt>${t('factPal')}</dt><dd>${cs(pr.pc)}</dd></div><div><dt>Storage</dt><dd>Cool and dry, away from sunlight</dd></div><div><dt>${t('factLife')}</dt><dd>${t('lifeV')}${sm()}</dd></div></dl></div></details>
  <details class="acc-d"><summary>${t('docsH')}${ic('chev')}</summary><div class="in-b"><ul>${['Product specification', 'Food safety certificate', 'Pallet and packing plan', 'Origin proof, per shipment'].map((n) => `<li class="doc"><span>${n}</span>${ic('download')}</li>`).join('')}</ul></div></details>
  <details class="acc-d"><summary>${t('claimsT')}${ic('chev')}</summary><div class="in-b"><p>${t('claims1')}</p><p class="mt-2">${t('claims2')}${sm()}</p></div></details>`;
  const bar = ap ? `<div class="pbar"><div><span class="pr">${m(c.invoice)}</span><div class="mut t-1">${t('invLbl')}</div></div><button class="btn" data-a="add"><span class="swap"><span>${ic('plus')}${t('addOrder')}</span><span aria-hidden="true">${ic('check')}${t('addedH')}</span></span></button></div>` : g ? `<div class="pbar"><div class="lockl">${ic('lock')}${t('seePrice')}</div><a class="btn" href="#/apply">${t('apply')}${arrow}</a></div>` : '';
  return `<div class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="#/home">${t('home2')}</a>${ic('chev', 'rr')}<a href="#/category">${t(cat[0])}</a>${ic('chev', 'rr')}<span aria-current="page">${t(cat[1])}</span></nav>
  <div class="pdp"><div class="gal rise"><div class="ph ${S.galIn ? 'swapin' : ''}" style="${hueOf(pr)}">${art(pr, views[S.sel.img])}${flag(pr.org)}${badge(pr)}</div><div class="thumbs">${thumbs}</div></div>
  <div class="rise" style="--d:1"><h1>${esc(pr.name)}</h1><div class="row mt-4 g-2">${pr.tag === 'new' ? chip(t('new'), 'acc') : ''}${chip(t('inStock') + ': ' + (lot ? '4 ctr' : cs(1840)))}${lot ? chip(t('pLot')) : ''}</div>
  <p class="mut mt-4 measure">${esc(L3(pr.pk))}</p>${facts}
  <div class="blk hasp">${pin(lot ? 'lot' : 'lock')}<h2>${t('offers')}</h2><div class="otbl"><div class="orow2 th"><span></span><span>${t('colSup')}</span><span class="hn">${t('colMin')}</span><span>${t(colA)}</span><span>${t(colB)}</span></div>${offRows}</div><p class="mut t-2 mt-3">${g ? t('offNoteG') : t('offNote')}${sm()}</p></div>
  ${control}
  <div class="blk"><h2>${t('detT')}</h2>${lot ? lotDetails : foodDetails}</div></div></div></div>${bar}`;
};
A.img = (el) => { S.sel.img = +el.dataset.i; S.galIn = true; render(false); };
A.offer = (el) => { const o = offersFor(PBY[S.sel.pid]).find((x) => x.id === el.dataset.id); S.sel.off = o.id; S.sel.qty = Math.max(o.moq, S.sel.qty); if (!o.deps.includes(S.sel.dep)) S.sel.dep = o.deps[0]; render(false); };
A.dep = (el) => { S.sel.dep = el.dataset.id; render(false); };
A.qty = (el) => { const x = selState(); S.sel.qty = Math.min(12, Math.max(x.off.moq, x.qty + +el.dataset.d)); S.roll = { k: 'sel', d: +el.dataset.d > 0 ? 'up' : 'down' }; render(false); };
A.inco = (el) => { S.sel.lotInco = el.dataset.v; render(false); };
A.add = () => {
  const x = selState();
  const ln = S.cart.find((l) => l.pid === x.pr.id && l.off === x.off.id && l.dep === x.depId);
  if (ln) ln.qty = Math.min(12, ln.qty + x.qty); else S.cart.push({ pid: x.pr.id, off: x.off.id, dep: x.depId, qty: x.qty });
  S.tick = true; render(false);
  // after the settled frames, so the label swap transitions instead of jumping
  setTimeout(() => $$('[data-a="add"]').forEach((b) => b.classList.add('done')), 60);
  setTimeout(() => $$('[data-a="add"].done').forEach((b) => b.classList.remove('done')), 1700); // label returns once the confirmation has been seen
  openSheet({ type: 'added', label: t('addedH'), pid: x.pr.id, qty: x.qty, dep: x.depId });
};
SHEETS.added = (sp) => {
  const pr = PBY[sp.pid];
  const tot = S.cart.reduce((a, l) => { const p = PBY[l.pid], o = offersFor(p).find((z) => z.id === l.off) || offersFor(p)[0]; return a + KM.calc({ shape: p.shape, pc: p.pc, tiers: o.tiers, tonnes: p.tonnes, ppt: p.ppt }, l.qty, DEPS[l.dep]).invoice; }, 0);
  return `<div class="row mb-4 g-3"><span class="ok-ring sm">${ic('checkdraw')}</span><h3 class="t-6">${t('addedH')}</h3></div><div class="rowb"><span><b>${esc(pr.name)}</b><br><span class="mut t-2">${qtyL(pr, sp.qty)} · ${depTitle(sp.dep)}</span></span></div><div class="rowb tot"><span>${t('inOrder', S.cart.length)}</span><span class="mono">${m(tot)}</span></div><div class="stack mt-5 g-3"><a class="btn" href="#/cart" data-a="sheet-x">${ic('cart')}${t('viewOrder')}</a><button class="btn ghost" data-a="sheet-x">${t('keep')}</button></div>`;
};
