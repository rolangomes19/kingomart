/* Shared strings + Home. FR and AR copy still needs native review. */
Object.assign(T, {
  ratLbl: ['Rationale', 'Justification', 'المبرر'],
  seePrice: ['See the wholesale price', 'Voir le prix de gros', 'اطّلع على سعر الجملة'],
  msrp: ['MSRP', 'PVC', 'السعر المقترح'],
  per_unit: ['per unit', 'par unité', 'للوحدة'], per_kg: ['per kg', 'par kg', 'للكغ'], per_pack: ['per pack', 'par colis', 'للعبوة'],
  from: ['from', 'dès', 'ابتداءً من'],
  perPallet: ['per pallet', 'par palette', 'للباليت'], perCase: ['per case', 'par caisse', 'للصندوق'], perT: ['per tonne', 'par tonne', 'للطن'],
  vsLow: ['vs 30-day low', 'vs plus bas 30 jours', 'عن أدنى سعر خلال 30 يوماً'],
  new: ['New', 'Nouveau', 'جديد'], inStock: ['In stock', 'En stock', 'متوفر'],
  orderBy: ['Order by', 'Commander avant le', 'اطلب قبل'], arrives: ['Arrives (est.)', 'Arrivée (est.)', 'الوصول (تقديري)'],
  departs: ['Departs', 'Départ', 'المغادرة'],
  to: ['to', 'vers', 'إلى'],
  yourContact: ['Your KingoMart contact', 'Votre contact KingoMart', 'جهة اتصالك في KingoMart'],
  hrs: [(a, b, c) => `Support Mon to Fri, ${a} to ${b} ${c} time`, (a, b, c) => `Assistance du lundi au vendredi, ${a} à ${b}, heure de ${c}`, (a, b, c) => `الدعم من الاثنين إلى الجمعة، ${a} إلى ${b} بتوقيت ${c}`],
  navOrigin: ['Shop by origin', 'Acheter par origine', 'تسوّق حسب المنشأ'], navCat: ['All categories', 'Toutes les catégories', 'كل الفئات'],
  navDeals: ['Deals', 'Offres', 'العروض'], navNew: ['New arrivals', 'Nouveautés', 'وصل حديثاً'],
  navShip: ['Open departures', 'Départs ouverts', 'الرحلات المفتوحة'], navOrders: ['My orders', 'Mes commandes', 'طلباتي'],
  signin: ['Sign in', 'Se connecter', 'تسجيل الدخول'], apply: ['Apply for access', "Demander l'accès", 'اطلب الوصول'],
  review: ['Account under review', 'Compte en cours de vérification', 'الحساب قيد المراجعة'],
  order: ['Order', 'Commande', 'الطلب'],
  search: ['Search products, brands or origins', 'Produit, marque ou origine', 'منتج أو علامة أو منشأ'],
  licFt: ['Trade licence and UAE TRN are shown on every invoice.', 'Licence commerciale et TRN des Émirats figurent sur chaque facture.', 'الرخصة التجارية والرقم الضريبي مدرجان في كل فاتورة.'],
  ordering: ['Ordering', 'Commander', 'الطلب'], dealsNew: ['Deals and new products', 'Offres et nouveautés', 'العروض والمنتجات الجديدة'], help: ['Help', 'Aide', 'المساعدة'],
  h1: ['How shipments work', 'Comment fonctionnent les expéditions', 'كيف تعمل الشحنات'], h2: ['Customs and import VAT', "Douane et TVA à l'importation", 'الجمارك وضريبة الاستيراد'],
  h3: ['Claims', 'Réclamations', 'المطالبات'], h4: ['Payment terms', 'Conditions de paiement', 'شروط الدفع'],
  legal: ['Legal', 'Mentions légales', 'القانونية'], g1: ['Terms and conditions', 'Conditions générales', 'الشروط والأحكام'], g2: ['Privacy', 'Confidentialité', 'الخصوصية'],
  g3: ['Cookie settings', 'Gestion des cookies', 'إعدادات ملفات الارتباط'], g4: ['Accessibility statement', "Déclaration d'accessibilité", 'بيان إمكانية الوصول'], g5: ['Delete my account', 'Supprimer mon compte', 'حذف حسابي'],
  copy: ['© 2026 KingoMart General Trading L.L.C. Design prototype with sample data.', '© 2026 KingoMart General Trading L.L.C. Prototype de conception avec données d\'exemple.', '© 2026 KingoMart General Trading L.L.C. نموذج تصميم ببيانات تجريبية.'],
  skip: ['Skip to content', 'Aller au contenu', 'انتقل إلى المحتوى'],
  home: ['Home', 'Accueil', 'الرئيسية'], shop: ['Shop', 'Catalogue', 'التسوق'], departures: ['Departures', 'Départs', 'الرحلات'], status: ['Status', 'Statut', 'الحالة'], apply2: ['Apply', 'Accès', 'التقديم'],
  gated: ['Ordering opens after approval. Switch the stage to Approved to continue.', "La commande ouvre après approbation. Passez l'étape sur Approuvé pour continuer.", 'يُفتح الطلب بعد الموافقة. بدّل المرحلة إلى معتمد للمتابعة.'],
  close: ['Close', 'Fermer', 'إغلاق'], signedIn: ['Signed in as a sample approved buyer.', 'Connecté en tant qu\'acheteur approuvé d\'exemple.', 'تم تسجيل الدخول كمشترٍ معتمد تجريبي.'],
  seeAll: [(n) => `See all ${n} results`, (n) => `Voir les ${n} résultats`, (n) => `عرض كل النتائج (${n})`],
  noRes: [(q) => `No results for "${q}"`, (q) => `Aucun résultat pour « ${q} »`, (q) => `لا نتائج لـ «${q}»`],
  noResHelp: ['Try a brand, a product or an origin such as Hamoud or Algeria.', 'Essayez une marque, un produit ou une origine, par exemple Hamoud ou Algérie.', 'جرّب علامة أو منتجاً أو بلد منشأ مثل Hamoud أو الجزائر.'],
  browseAll: ['Browse all products', 'Parcourir tous les produits', 'تصفّح كل المنتجات'],
  /* Home */
  heroT: ['Import by the pallet. See every cost first.', 'Importez à la palette. Voyez chaque coût avant de commander.', 'استورد بالباليت. وشاهد كل تكلفة أولاً.'],
  heroP: ['Compare supplier offers, join a shared truck or container and see the landed cost before you send a request.', "Comparez les offres des fournisseurs, rejoignez un camion ou un conteneur partagé et voyez le coût rendu avant d'envoyer une demande.", 'قارن عروض الموردين، وانضم إلى شاحنة أو حاوية مشتركة، واطّلع على التكلفة عند الوصول قبل إرسال الطلب.'],
  browse: ['Browse the catalogue', 'Parcourir le catalogue', 'تصفّح الكتالوج'], seeHow: ['See how ordering works', 'Voir comment commander', 'كيف يتم الطلب'],
  browsePrices: ['Browse indicative prices', 'Voir les prix indicatifs', 'تصفّح الأسعار الإرشادية'],
  nextDep: ['Next departure to France', 'Prochain départ vers la France', 'الرحلة القادمة إلى فرنسا'],
  shared: ['Truck, shared', 'Camion, partagé', 'شاحنة، مشتركة'],
  reserved: [(a, b) => `${a} of ${b} pallets reserved`, (a, b) => `${a} palettes sur ${b} réservées`, (a, b) => `${a} من ${b} باليت محجوز`],
  left: [(n) => `${n} left`, (n) => `${n} restantes`, (n) => `تبقّى ${n}`],
  freightPp: ['Freight per pallet', 'Fret par palette', 'الشحن لكل باليت'], choose: ['Choose products', 'Choisir des produits', 'اختر المنتجات'],
  cutoff: ['Order by', 'Commander avant', 'اطلب قبل'],
  whoTitle: ['Who you buy from', 'Votre vendeur', 'الجهة التي تشتري منها'], whoLine: ['KingoMart General Trading L.L.C. is the seller of record on every invoice.', 'KingoMart General Trading L.L.C. est le vendeur sur chaque facture.', 'KingoMart General Trading L.L.C. هي البائع المسجل في كل فاتورة.'],
  callTitle: ['Call before you pay', 'Appelez avant de payer', 'اتصل قبل الدفع'], regTitle: ['Registration', 'Immatriculation', 'التسجيل'],
  regLine: ['Dubai-registered. Licence and TRN on every invoice.', 'Société enregistrée à Dubaï. Licence et TRN sur chaque facture.', 'مسجلة في دبي. الرخصة والرقم الضريبي في كل فاتورة.'],
  shopOrigin: ['Shop by origin', 'Acheter par origine', 'تسوّق حسب المنشأ'], originP: ['Five sourcing lanes, each with its own departures and import notes.', "Cinq filières d'approvisionnement, chacune avec ses départs et ses notes d'import.", 'خمسة مسارات توريد، لكل منها رحلاتها وملاحظات الاستيراد.'],
  allOrigins: ['All origins', 'Toutes les origines', 'كل بلدان المنشأ'],
  items: [(n) => `${n} listed items`, (n) => `${n} références`, (n) => `${n} صنفاً`],
  oDZ: ['Hamoud Boualem, Deglet Nour dates, fresh produce and fish.', 'Hamoud Boualem, dattes Deglet Nour, produits frais et poisson.', 'Hamoud Boualem وتمور دقلة نور والمنتجات الطازجة والأسماك.'],
  oUS: ['Soft drinks, energy drinks and candy.', 'Sodas, boissons énergisantes et confiserie.', 'مشروبات غازية ومشروبات طاقة وحلويات.'],
  oVN: ['Vannamei shrimp, coffee lots and more.', 'Crevettes vannamei, lots de café et plus.', 'روبيان الفانامي ولوطات القهوة وغيرها.'],
  oBR: ['Beef and more.', 'Bœuf et plus.', 'لحم البقر وغيره.'], oBE: ['Soft drinks by truck, no customs.', 'Sodas par camion, sans douane.', 'مشروبات غازية بالشاحنة، بلا جمارك.'],
  howT: ['How an order works', 'Comment fonctionne une commande', 'كيف يتم الطلب'], howP: ['You pay nothing when you send a request. KingoMart checks it, confirms it and sends an invoice.', 'Vous ne payez rien en envoyant une demande. KingoMart la vérifie, la confirme et envoie une facture.', 'لا تدفع شيئاً عند إرسال الطلب. تراجعه KingoMart وتؤكده وترسل فاتورة.'],
  s1: ['Pick an offer', 'Choisir une offre', 'اختر عرضاً'], s1p: ['Suppliers, origin, minimum order and price side by side.', 'Fournisseurs, origine, minimum et prix côte à côte.', 'الموردون والمنشأ والحد الأدنى والسعر جنباً إلى جنب.'],
  s2: ['Pick a departure', 'Choisir un départ', 'اختر رحلة'], s2p: ['A truck or container. The fill meter shows pallets taken.', 'Un camion ou un conteneur. La jauge montre les palettes prises.', 'شاحنة أو حاوية. يوضح المؤشر الباليتات المحجوزة.'],
  s3: ['Send a request', 'Envoyer une demande', 'أرسل طلباً'], s3p: ['No payment now. See goods, freight and your own import costs first.', "Aucun paiement maintenant. Voyez marchandise, fret et vos frais d'import.", 'لا دفع الآن. شاهد البضاعة والشحن وتكاليف الاستيراد أولاً.'],
  s4: ['Pay the invoice', 'Payer la facture', 'ادفع الفاتورة'], s4p: ['KingoMart confirms and sends an invoice. You pay by transfer.', 'KingoMart confirme et envoie une facture. Vous payez par virement.', 'تؤكد KingoMart وترسل فاتورة. تدفع بالتحويل.'],
  s5: ['Track it', 'Suivre la commande', 'تابع الطلب'], s5p: ['Status, dates and documents in your account.', 'Statut, dates et documents dans votre compte.', 'الحالة والتواريخ والمستندات في حسابك.'],
  dealsT: ['Deals ending soon', 'Offres bientôt terminées', 'عروض تنتهي قريباً'], dealsP: ['Real stock, real end dates. The cut is measured against the lowest price of the last 30 days.', 'Stocks et dates de fin réels. La remise se mesure par rapport au prix le plus bas des 30 derniers jours.', 'مخزون حقيقي وتواريخ انتهاء حقيقية. يُقاس الخصم على أدنى سعر خلال آخر 30 يوماً.'],
  allDeals: ['All deals', 'Toutes les offres', 'كل العروض'],
  gEb: ['Wholesale prices', 'Prix de gros', 'أسعار الجملة'], gH: ['Apply to see wholesale prices', "Demandez l'accès pour voir les prix de gros", 'اطلب الوصول لرؤية أسعار الجملة'],
  gP: ['Registered businesses see prices per case and per pallet. Review usually takes one business day.', "Les entreprises enregistrées voient les prix par caisse et par palette. La vérification prend en général un jour ouvré.", 'ترى الشركات المسجلة الأسعار للصندوق وللباليت. تستغرق المراجعة عادةً يوم عمل.'],
  dEb: ['Open departure KM-0412', 'Départ ouvert KM-0412', 'رحلة مفتوحة KM-0412'], dBtn: ['Choose a departure', 'Choisir un départ', 'اختر رحلة'],
  fresh: ['Fresh picks this week', 'Sélection de la semaine', 'مختارات الأسبوع'], freshP: ['A mix of brands and origins, pallets and container lots.', 'Un mélange de marques et d\'origines, palettes et lots conteneur.', 'تشكيلة من العلامات والمنشأ، باليتات ولوطات حاويات.'],
  tAll: ['All', 'Tout', 'الكل'], tNew: ['New', 'Nouveautés', 'جديد'], tBest: ['Best sellers', 'Meilleures ventes', 'الأكثر مبيعاً'],
  whoCan: ['Who can order', 'Qui peut commander', 'من يمكنه الطلب'],
  whoCanP: ['Registered businesses can order. Review usually takes one business day, and you see indicative prices while you wait.', 'Les entreprises immatriculées peuvent commander. La vérification prend en général un jour ouvré, et vous voyez des prix indicatifs en attendant.', 'يمكن للشركات المسجلة الطلب. تستغرق المراجعة عادةً يوم عمل، وترى أسعاراً إرشادية أثناء الانتظار.'],
  yours: ['Your pallets', 'Vos palettes', 'باليتاتك'],
  perBox: [(n) => `Each box is ${n} pallets`, (n) => `Chaque carton = ${n} palettes`, (n) => `كل صندوق = ${n} باليت`],
  docsT: ['Documents to have ready', 'Documents à préparer', 'المستندات الواجب تجهيزها']
});
const DOCS_BY_MARKET = {
  fr: [['Company name and SIRET number', "Nom de l'entreprise et numéro SIRET", 'اسم الشركة ورقم SIRET'], ['VAT number', 'Numéro de TVA', 'رقم ضريبة القيمة المضافة'], ['Kbis extract (PDF)', 'Extrait Kbis (PDF)', 'مستخرج Kbis (PDF)'], ['Passport of the legal representative', 'Passeport du représentant légal', 'جواز سفر الممثل القانوني'], ['Phone number', 'Numéro de téléphone', 'رقم الهاتف']],
  dz: [['Company name and RC number', "Nom de l'entreprise et numéro RC", 'اسم الشركة ورقم السجل التجاري'], ['Tax ID (NIF)', 'Identifiant fiscal (NIF)', 'الرقم الجبائي (NIF)'], ['Commercial register extract (PDF)', 'Extrait du registre du commerce (PDF)', 'مستخرج السجل التجاري (PDF)'], ['Passport of the legal representative', 'Passeport du représentant légal', 'جواز سفر الممثل القانوني'], ['Phone number', 'Numéro de téléphone', 'رقم الهاتف']]
};

/* The live departure card: the first thing a buyer sees. */
/* CSS-drawn so the end dots stay round however wide the line gets. */
const routeLine = () => `<span class="ln" aria-hidden="true"><i class="tr"></i><i class="fl"></i><i class="nd"></i><i class="nd e"></i><span class="trk"><span class="boat">${ic('truck')}</span></span></span>`;
function depCard(id, withBtn) {
  const d = DEPS[id], free = d.cap - d.filled;
  return `<div class="dep hasp reveal-in">${pin('dep')}<div class="dep-top"><b><span class="live" aria-hidden="true"></span>${t('nextDep')}</b>${chip(t('cutoff') + ' ' + D(d.cut), 'sun')}</div>
    <div class="route"><span>${L3(PLACE[d.from])}</span>${routeLine()}<span>${L3(PLACE[d.to])}</span></div>
    <div class="mut dep-sub t-3"><span class="mono">${id}</span> · ${L3(MODE[d.mode])}</div>
    <div><div class="row btw t-3 mb-2 g-3"><span>${t('reserved', d.filled, d.cap)}</span><b>${t('left', free)}</b></div>${meter(d.filled, d.cap)}</div>
    <div class="k3"><div><span class="lab">${t('orderBy')}</span><b class="mono">${D(d.cut)}</b></div><div><span class="lab">${t('departs')}</span><b class="mono">${D(d.dep)}</b></div><div><span class="lab">${t('arrives')}</span><b class="mono">${D(d.eta)}</b></div></div>
    <div class="dep-foot"><div><span class="lab">${t('freightPp')}</span><div class="big">${m(d.rate)}</div></div>${withBtn ? `<a class="btn" href="#/product?pid=p1">${t('choose')}${arrow}</a>` : ''}</div></div>`;
}
SCR.home = () => {
  const ap = S.stage === 'approved', dealsL = PRODUCTS.filter((p) => p.low).slice(0, 3);
  const fresh = (S.htab === 'new' ? PRODUCTS.filter((p) => p.tag === 'new' || p.added) : S.htab === 'best' ? ['p4', 'p9', 'p1', 'p15'].map((i) => PBY[i]) : ['p1', 'p13', 'p4', 'p15', 'p8', 'p11', 'p9', 'p7'].map((i) => PBY[i])).slice(0, 8);
  const offer = S.stage === 'guest'
    ? `<a class="offer" href="#/apply"><div><span class="eb">${ic('lock')}${t('gEb')}</span><h3 class="mt-3">${t('gH')}</h3><p class="mt-3">${t('gP')}</p></div><span class="lnk">${t('apply')}${arrow}</span></a>`
    : `<a class="offer" href="#/departures"><div><span class="eb">${ic('truck')}${t('dEb')}</span><h3 class="mt-3">${t('orderBy')} ${D(DEPS['KM-0412'].cut)}</h3><p class="mt-3">${route(DEPS['KM-0412'])}. ${t('left', 7)}. ${t('arrives')} ${D(DEPS['KM-0412'].eta)}.</p></div><span class="lnk">${t('dBtn')}${arrow}</span></a>`;
  const steps = [1, 2, 3, 4, 5].map((i) => `<li class="step" style="--d:${i - 1}"><span class="n">${ic(['tag', 'truck', 'send', 'file', 'pinmap'][i - 1])}</span><b><span class="sr">${i}. </span>${t('s' + i)}</b><p>${t('s' + i + 'p')}</p></li>`).join('');
  const docs = DOCS_BY_MARKET[S.market].map((d) => `<li class="doc"><span>${ic('file')}${L3(d)}</span>${ic('check')}</li>`).join('');
  const brands = Object.keys(HAVE_IMG).filter((k) => k.startsWith('brands/'));
  const tiles = ORIGINS.map((o) => `<a class="ot ot-${o.code}" href="#/category?o=${o.code}">${o.code === 'DZ' ? imgTag('origin/dz', '') : imgTag('illus/' + o.code.toLowerCase(), 'illus')}${flag(o.code)}<b>${L3(COUNTRY[o.code])}</b><p>${t('o' + o.code)}</p><span class="ct">${t('items', o.n)}${arrow}</span></a>`).join('');
  const heroSec = `<section class="stagehero" aria-labelledby="hero-h">${imgTag('hero', 'photo')}<div class="aur" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="hero"><div class="rise"><h1 id="hero-h">${t('heroT')}</h1><p class="lead">${t('heroP')}</p><div class="cta">${ap ? `<a class="btn light" href="#/category">${t('browse')}${arrow}</a><a class="btn glass" href="#/home" data-a="how">${ic('down')}${t('seeHow')}</a>` : `<a class="btn light" href="#/apply">${t('apply')}${arrow}</a><a class="btn glass" href="#/category">${ic('tag')}${t('browsePrices')}</a>`}</div></div><div class="rise" style="--d:3">${depCard('KM-0412', true)}</div></div>
  </section>`;
  const ident = `<div class="ident hasp rise" style="--d:5">${pin('ident')}<div><span class="ico">${ic('building')}</span><div><b>${t('whoTitle')}</b><p><span dir="ltr">KingoMart General Trading L.L.C.</span><br><span dir="ltr">Office 805, Yes Business Tower, Al Barsha, Dubai</span></p></div></div><div><span class="ico">${ic('phone')}</span><div><b>${t('callTitle')}</b><p><a class="mono tel" dir="ltr" href="tel:+97148342279">+971 4 834 2279</a><br>${hoursTxt()}</p></div></div><div><span class="ico">${ic('shield')}</span><div><b>${t('regTitle')}</b><p>${t('regLine')}${sm()}</p></div></div></div>`;
  const brandsSec = brands.length ? `<div class="wrap sec tight"><div class="brands">${brands.map((k) => `<img src="${HAVE_IMG[k]}" alt="${esc(k.slice(7))}" loading="lazy">`).join('')}</div></div>` : '';
  const originSec = `<section class="wrap sec sv"><div class="ohead"><div><h2 class="h2">${t('shopOrigin')}</h2><p>${t('originP')}</p></div>${lnk('#/category', t('allOrigins'))}</div><div class="obento">${tiles}</div></section>`;
  const howSec = `<section class="wrap sec sv" id="how"><div class="how"><div class="how-h"><h2 class="h2">${t('howT')}</h2><p>${t('howP')}</p></div><ol class="steps reveal-in">${steps}</ol></div></section>`;
  const dealsSec = ap ? similarSec() : `<section class="wrap sec sv">${sh(t('dealsT'), t('dealsP'), lnk('#/deals?tab=deals', t('allDeals')))}<div class="pgrid">${offer}${dealsL.map((p) => pcard(p)).join('')}</div></section>`;
  const freshSec = `<section class="wrap sec sv">${sh(t('fresh'), t('freshP'), `<div class="tabs" role="group" aria-label="${esc(t('fresh'))}">${[['all', 'tAll'], ['new', 'tNew'], ['best', 'tBest']].map(([k, l]) => `<button class="fc" data-a="htab" data-v="${k}" aria-pressed="${S.htab === k}">${t(l)}</button>`).join('')}</div>`)}<div class="pgrid hasp">${pin('lot')}${fresh.map((p) => pcard(p)).join('')}</div></section>`;
  const applySec = ap ? '' : `<section class="wrap sec sv"><div class="cta-panel"><div class="split2 hasp">${pin('apply')}<div><h2 class="h2">${t('whoCan')}</h2><p class="mut mt-4 measure-s t-5">${t('whoCanP')}</p><div class="mt-6"><a class="btn" href="#/apply">${t('apply')}${arrow}</a></div></div><div class="card pad soft"><h3 class="t-6 mb-2">${t('docsT')}</h3><ul>${docs}</ul></div></div></div></section>`;
  if (S.layout === 'proposed') {
    // Product-first: slim promo, one seller strip, deals at the fold. Same sections, same copy; the full seller card moves down.
    const chips = ORIGINS.map((o) => `<a class="fc" href="#/category?o=${o.code}">${flag(o.code)}${L3(COUNTRY[o.code])}</a>`).join('');
    const strip = `<div class="wrap p-strip"><div class="card"><div><b dir="ltr">KingoMart General Trading L.L.C.</b> · ${t('callTitle')} <a class="mono tel" dir="ltr" href="tel:+97148342279">+971 4 834 2279</a></div><div class="p-chips">${chips}</div></div></div>`;
    const dealsP = `<div class="p-deals">${dealsSec}<p class="wrap mut p-dealsp">${t(ap ? 'simP' : 'dealsP')}</p></div>`;
    return `
  <div class="wrap p-promo">${heroSec}</div>
  ${strip}
  ${ap ? againSec() : ''}
  ${dealsP}
  ${freshSec}
  ${brandsSec}
  ${originSec}
  ${howSec}
  ${applySec}
  <div class="wrap p-who">${ident}</div>`;
  }
  return `
  <div class="wrap">${heroSec}
  ${ident}</div>
  ${brandsSec}
  ${ap ? againSec() : ''}
  ${originSec}
  ${howSec}
  ${dealsSec}
  ${freshSec}
  ${applySec}`;
};
/* ---------- Approved buyers: order again, and deals close to what they buy ---------- */
Object.assign(T, {
  againT: ['Order again', 'Commander à nouveau', 'اطلب مجدداً'],
  againP: ['Your usual pallets with the next departures. Pick a date and a quantity, then add.', 'Vos palettes habituelles et les prochains départs. Choisissez une date et une quantité, puis ajoutez.', 'باليتاتك المعتادة مع الرحلات القادمة. اختر الموعد والكمية ثم أضف.'],
  ordered: [(n, d) => (n === 1 ? `Ordered once, on ${d}` : `Ordered ${n} times, last on ${d}`), (n, d) => (n === 1 ? `Commandé une fois, le ${d}` : `Commandé ${n} fois, dernière fois le ${d}`), (n, d) => (n === 1 ? `طُلب مرة واحدة في ${d}` : `طُلب ${n} مرات، آخرها ${d}`)],
  usual: [(q) => `Usually ${q}`, (q) => `En général ${q}`, (q) => `عادةً ${q}`],
  lastQ: [(q) => `Last time ${q}`, (q) => `La dernière fois ${q}`, (q) => `آخر مرة ${q}`],
  qTot: ['with freight, ex VAT', 'fret inclus, HT', 'مع الشحن، بدون ضريبة'],
  simT: ['On offer, close to what you buy', 'En promotion, proche de vos achats', 'عروض قريبة مما تشتريه'],
  simP: ['Deals on products like your past orders. Each cut is measured against the lowest price of the last 30 days.', 'Des offres sur des produits proches de vos commandes. Chaque remise se mesure au prix le plus bas des 30 derniers jours.', 'عروض على منتجات تشبه طلباتك السابقة. يُقاس كل خصم على أدنى سعر خلال آخر 30 يوماً.'],
  likeX: [(n) => `Like your ${n}`, (n) => `Comme votre ${n}`, (n) => `يشبه ${n} الذي تطلبه`],
  leftShort: [(n) => `${n} left`, (n) => `${n} restants`, (n) => `متبقٍّ ${n}`]
});
/* One quick-order card: art, why it is here, departure, quantity, total, add. Used by both sections. */
function qcard(pr, head, qty) {
  const { st, deps, c } = qoState(pr, qty), k = 'q' + pr.id;
  const depTiles = deps.slice(0, 2).map((id) => { const d = DEPS[id]; return `<button class="qdep" data-a="qdep" data-pid="${pr.id}" data-id="${id}" aria-pressed="${st.dep === id}"><span class="lab">${t('departs')}</span><b class="mono">${D(d.dep)}</b><span class="lab">${t('left', d.cap - d.filled)}</span></button>`; }).join('');
  return `<article class="qo"><a class="qo-h" href="#/product?pid=${pr.id}"><div class="ph" style="${hueOf(pr)}">${art(pr)}</div><div><h3>${esc(pr.name)}</h3><div class="pk-l">${esc(L3(pr.pk))}</div></div></a><div class="qo-x">${head}</div>
  <div><span class="lab mb-2">${t('depT')}</span><div class="qdeps">${depTiles}</div></div>
  <div class="qo-f"><div class="stepper" role="group" aria-label="${esc(t('qtyT'))}"><button data-a="qq" data-pid="${pr.id}" data-d="-1" aria-label="${esc(t('remove1'))}" ${st.qty <= 1 ? 'disabled' : ''}>${ic('minus')}</button><output aria-live="polite" class="${S.roll && S.roll.k === k ? S.roll.d : ''}"><span>${st.qty}</span></output><button data-a="qq" data-pid="${pr.id}" data-d="1" aria-label="${esc(t('add1'))}" ${st.qty >= 12 ? 'disabled' : ''}>${ic('plus')}</button></div><div class="qo-tot"><b class="mono">${m(c.invoice)}</b><span class="lab">${qtyL(pr, st.qty)}, ${t('qTot')}</span></div></div>
  <button class="btn block" data-a="qadd" data-pid="${pr.id}"><span class="swap"><span>${ic('plus')}${t('addOrder')}</span><span aria-hidden="true">${ic('check')}${t('addedH')}</span></span></button></article>`;
}
function againSec() {
  const hist = buyHist().slice(0, 3);
  if (!hist.length) return '';
  const cards = hist.map((x) => qcard(x.pr, `<p class="hist">${ic('repeat')}<span>${t('ordered', x.n, D(x.last))}. ${t(x.n > 1 ? 'usual' : 'lastQ', pl(x.usual))}.</span></p>`, x.usual)).join('');
  return `<section class="wrap sec sv" id="again">${sh(t('againT'), t('againP'), lnk('#/orders', t('navOrders')))}<div class="qgrid hasp">${pin('again')}${cards}</div></section>`;
}
function similarSec() {
  const list = similarDeals(buyHist());
  if (!list.length) return '';
  const cards = list.map(({ p, like }) => qcard(p, `<div class="qo-why"><span class="chip acc">${ic('repeat')}${t('likeX', `<bdi>${esc(like.name)}</bdi>`)}</span><span class="chip sun">${ic('clock')}${t('ends', D(p.ends), p.ends[2])}</span></div><div class="qo-px"><b class="pr">${m(p.tiers[0].price)}</b><s class="was">${m(p.low)}</s><span class="lab">${t('perCase')} · ${t('leftShort', p.left[0])} · -${cut(p)}% ${t('vsLow')}</span></div>`, 1)).join('');
  return `<section class="wrap sec sv">${sh(t('simT'), t('simP'), lnk('#/deals?tab=deals', t('allDeals')))}<div class="qgrid hasp">${pin('similar')}${cards}</div></section>`;
}
A.qdep = (el) => { S.qo[el.dataset.pid].dep = el.dataset.id; render(false); };
A.qq = (el) => { const q = S.qo[el.dataset.pid]; q.qty = Math.min(12, Math.max(1, q.qty + +el.dataset.d)); S.roll = { k: 'q' + el.dataset.pid, d: +el.dataset.d > 0 ? 'up' : 'down' }; render(false); };
A.qadd = (el) => {
  const pid = el.dataset.pid, q = S.qo[pid], inSheet = !!el.closest('#sheet'); // read before the re-render replaces el
  addLine(pid, q.dep, q.qty); S.tick = true; render(false);
  flashDone(`[data-a="qadd"][data-pid="${pid}"]`);
  toast(t('addedH') + ': ⁨' + PBY[pid].name + '⁩', t('viewOrder'), '#/cart');
  if (inSheet) setTimeout(closeSheet, 1100); // in Buy again: let the Added state register, then close
};
A.htab = (el) => { S.htab = el.dataset.v; render(false); };
A.how = (el, e) => { e.preventDefault(); $('#how').scrollIntoView({ behavior: 'smooth', block: 'start' }); };
