/* Your order, Request order, Order received, My orders. */
Object.assign(T, {
  cartH: ['Your order', 'Votre commande', 'طلبك'], cartCount: [(a, b) => `${a} ${a === 1 ? 'product' : 'products'} on ${b} ${b === 1 ? 'departure' : 'departures'}`, (a, b) => `${a} produit${a > 1 ? 's' : ''} sur ${b} départ${b > 1 ? 's' : ''}`, (a, b) => `${a} منتجات على ${b} رحلات`],
  held: [(n) => `Space held for ${n}`, (n) => `Place réservée pour ${n}`, (n) => `تم حجز مساحة لـ ${n}`], over: [(n) => `Over by ${n}`, (n) => `Dépassement de ${n}`, (n) => `تجاوز بمقدار ${n}`],
  fillTxt: [(a, b, n) => `${a} of ${b} pallets reserved, including your ${n}`, (a, b, n) => `${a} palettes sur ${b} réservées, dont ${n} à vous`, (a, b, n) => `${a} من ${b} باليت محجوز، منها ${n} لك`],
  sum: ['Order summary', 'Récapitulatif', 'ملخص الطلب'], goodsT: ['Goods', 'Marchandise', 'البضاعة'], freightT: ['Freight', 'Fret', 'الشحن'], invT: ['Invoice estimate, ex VAT', 'Facture estimée, HT', 'تقدير الفاتورة، بدون ضريبة'],
  palTot: ['Total quantity', 'Quantité totale', 'الكمية الإجمالية'], reqBtn: ['Request order', 'Demander la commande', 'اطلب الآن'], noCharge: ['Nothing is charged when you send a request.', "Rien n'est débité à l'envoi de la demande.", 'لا يُخصم أي مبلغ عند إرسال الطلب.'],
  blocked: ['A departure is over capacity. Remove pallets or choose another departure.', 'Un départ dépasse sa capacité. Retirez des palettes ou choisissez un autre départ.', 'إحدى الرحلات تجاوزت سعتها. أزل باليتات أو اختر رحلة أخرى.'],
  removeL: ['Remove', 'Retirer', 'إزالة'],
  emptyH: ['Your order is empty', 'Votre commande est vide', 'طلبك فارغ'], emptyP: ['Pick products from the catalogue and a departure to see goods, freight and your landed cost.', 'Choisissez des produits et un départ pour voir marchandise, fret et coût rendu.', 'اختر منتجات ورحلة لترى البضاعة والشحن والتكلفة عند الوصول.'], restore: ['Restore sample order', 'Rétablir la commande d\'exemple', 'استعادة الطلب التجريبي'],
  /* request */
  reqH: ['Request order', 'Demande de commande', 'طلب الشراء'], reqSub: ['Check the details below. You pay nothing now.', 'Vérifiez les détails ci-dessous. Vous ne payez rien maintenant.', 'راجع التفاصيل أدناه. لا تدفع شيئاً الآن.'],
  s1h: ['Delivery', 'Livraison', 'التسليم'], s2h: ['Customs and import', 'Douane et import', 'الجمارك والاستيراد'], s3h: ['How you will pay', 'Comment vous paierez', 'كيف ستدفع'], s4h: ['Review and send', 'Vérifier et envoyer', 'المراجعة والإرسال'],
  fCo: ['Company', 'Entreprise', 'الشركة'], fAddr: ['Delivery address', 'Adresse de livraison', 'عنوان التسليم'], fNote: ['Note for the driver (optional)', 'Note pour le chauffeur (facultatif)', 'ملاحظة للسائق (اختياري)'], fId: ['VAT or tax number', 'Numéro de TVA ou fiscal', 'الرقم الضريبي'],
  impSelf: ['I clear customs myself', 'Je dédouane moi-même', 'أتولى التخليص الجمركي بنفسي'], impSelfP: ['You are the importer of record. You pay duty and import taxes at clearance. We send the documents customs asks for.', "Vous êtes l'importateur. Vous payez droits et taxes au dédouanement. Nous envoyons les documents demandés par la douane.", 'أنت المستورد المسجل. تدفع الرسوم والضرائب عند التخليص. نرسل المستندات التي تطلبها الجمارك.'],
  impKm: ['KingoMart arranges customs', 'KingoMart organise la douane', 'تتولى KingoMart الإجراءات الجمركية'], impKmP: ['We clear customs and add the costs to your invoice. We confirm the amount before you pay.', 'Nous dédouanons et ajoutons les frais à votre facture. Nous confirmons le montant avant votre paiement.', 'نتولى التخليص ونضيف التكاليف إلى فاتورتك. نؤكد المبلغ قبل الدفع.'],
  payFr: ['After KingoMart confirms your request, you receive an invoice. Pay by card or bank transfer. Your order moves on when the payment is matched.', 'Après confirmation de KingoMart, vous recevez une facture. Payez par carte ou par virement. Votre commande avance dès que le paiement est rapproché.', 'بعد تأكيد KingoMart تصلك فاتورة. ادفع بالبطاقة أو بالتحويل المصرفي. يتقدم طلبك عند مطابقة الدفع.'],
  payDz: ['After KingoMart confirms your request, you receive an invoice with bank details. Pay by bank transfer, then upload the transfer proof here. Staff review the proof and the status shows Under review until it is matched.', 'Après confirmation de KingoMart, vous recevez une facture avec les coordonnées bancaires. Payez par virement, puis téléversez la preuve ici. Notre équipe la vérifie et le statut reste « En vérification » jusqu\'au rapprochement.', 'بعد تأكيد KingoMart تصلك فاتورة مع البيانات المصرفية. ادفع بالتحويل المصرفي ثم ارفع إثبات التحويل هنا. يراجعه فريقنا وتبقى الحالة قيد المراجعة حتى المطابقة.'],
  agreeT: ['I confirm the address and customs choice above.', "Je confirme l'adresse et le choix douanier ci-dessus.", 'أؤكد العنوان وخيار الجمارك أعلاه.'],
  toSend: ['To send: tick the confirmation box.', 'Pour envoyer : cochez la case de confirmation.', 'للإرسال: حدّد خانة التأكيد.'], sending: ['Sending', 'Envoi en cours', 'جارٍ الإرسال'], sendBtn: ['Send request', 'Envoyer la demande', 'أرسل الطلب'],
  nextH: ['What happens next', 'Et ensuite', 'ما الذي يحدث بعد ذلك'],
  n1: ['Now: you get an order number on screen and by email.', 'Maintenant : vous recevez un numéro de commande à l\'écran et par e-mail.', 'الآن: تحصل على رقم الطلب على الشاشة وبالبريد.'], n2: ['Within one business day: we check stock and space, then send final costs and payment details.', 'Sous un jour ouvré : nous vérifions stock et espace, puis envoyons coûts finaux et coordonnées de paiement.', 'خلال يوم عمل: نتحقق من المخزون والمساحة ثم نرسل التكاليف النهائية وتفاصيل الدفع.'], n3: ['If we cannot confirm, we tell you why and nothing is charged.', 'Si nous ne pouvons pas confirmer, nous vous disons pourquoi et rien n\'est débité.', 'إن تعذّر التأكيد نخبرك بالسبب ولا يُخصم شيء.'],
  /* received */
  recvH: [(r) => `Request ${r} received`, (r) => `Demande ${r} reçue`, (r) => `استلمنا الطلب ${r}`], recvP: ['We sent the same confirmation to your email. Nothing has been charged. A named contact is on your order.', 'Nous avons envoyé la même confirmation par e-mail. Rien n\'a été débité. Un contact nommé suit votre commande.', 'أرسلنا التأكيد نفسه إلى بريدك. لم يُخصم أي مبلغ. لديك جهة اتصال مسماة على طلبك.'],
  viewStatus: ['View order status', 'Voir le statut', 'عرض حالة الطلب'], contShop: ['Continue shopping', 'Continuer vos achats', 'تابع التسوق'],
  emailPrev: ['Email we just sent', 'E-mail que nous venons d\'envoyer', 'البريد الذي أرسلناه للتو'], emailSubj: [(r) => `Request ${r} received`, (r) => `Demande ${r} reçue`, (r) => `استلمنا الطلب ${r}`],
  emailBody: [(n, w) => `Hello, we received your request for ${w}. We will check stock and space and send final costs within one business day. Nothing is charged yet. Your contact is ${n}.`, (n, w) => `Bonjour, nous avons reçu votre demande pour ${w}. Nous vérifions stock et espace et envoyons les coûts finaux sous un jour ouvré. Rien n'est débité. Votre contact est ${n}.`, (n, w) => `مرحباً، استلمنا طلبك لـ ${w}. سنتحقق من المخزون والمساحة ونرسل التكاليف النهائية خلال يوم عمل. لم يُخصم أي مبلغ. جهة اتصالك هي ${n}.`],
  /* orders */
  ordH: ['My orders', 'Mes commandes', 'طلباتي'], requested: ['Requested', 'Demandée le', 'طُلبت في'], ofProd: [(p, n) => `${p} ${p === 1 ? 'product' : 'products'}, ${n} ${n === 1 ? 'pallet' : 'pallets'}`, (p, n) => `${p} produit${p > 1 ? 's' : ''}, ${n} palette${n > 1 ? 's' : ''}`, (p, n) => `${p} منتجات، ${n} باليت`],
  stReq: ['Request sent', 'Demande envoyée', 'أُرسل الطلب'], stTransit: ['In transit', 'En transit', 'في الطريق'], stDone: ['Delivered', 'Livrée', 'سُلّمت'], stDec: ['Not confirmed', 'Non confirmée', 'لم تؤكَّد'],
  ttReq: ['Request sent', 'Demande envoyée', 'أُرسل الطلب'], ttTransit: ['On its way to Marseille', 'En route vers Marseille', 'في الطريق إلى مرسيليا'], ttDone: ['Delivered', 'Livrée', 'سُلّمت'], ttDec: ['We could not confirm this request', 'Nous n\'avons pas pu confirmer cette demande', 'تعذّر علينا تأكيد هذا الطلب'],
  sbReq: ['We check stock and space, then confirm final costs and payment details. Usually one business day. Nothing is charged yet.', 'Nous vérifions stock et espace, puis confirmons coûts finaux et paiement. En général un jour ouvré. Rien n\'est débité.', 'نتحقق من المخزون والمساحة ثم نؤكد التكاليف وتفاصيل الدفع. عادةً يوم عمل. لم يُخصم شيء.'],
  sbTransit: ['Your goods left on Fri 9 Oct. The ferry crossing takes 30 to 36 hours. We update this page at each step.', 'Vos marchandises sont parties le ven. 9 oct. La traversée dure 30 à 36 heures. Nous mettons cette page à jour à chaque étape.', 'غادرت بضاعتك الجمعة 9 أكتوبر. تستغرق العبّارة 30 إلى 36 ساعة. نحدّث هذه الصفحة عند كل خطوة.'],
  sbDone: ['Delivered to your dock on Fri 25 Sep. The claims window closed on Fri 2 Oct.', 'Livrée à votre quai le ven. 25 sept. Le délai de réclamation a pris fin le ven. 2 oct.', 'سُلّمت إلى رصيفك الجمعة 25 سبتمبر. انتهت مهلة المطالبات الجمعة 2 أكتوبر.'],
  sbDec: ['The supplier sold the last pallets of Dr Pepper 12oz before we could confirm. Nothing was charged. If you had paid, the money returns to the original payment method, usually within 5 to 7 business days.', 'Le fournisseur a vendu les dernières palettes de Dr Pepper 12oz avant notre confirmation. Rien n\'a été débité. Si vous aviez payé, le montant revient sur le moyen de paiement d\'origine, en général sous 5 à 7 jours ouvrés.', 'باع المورد آخر باليتات Dr Pepper 12oz قبل أن نؤكد. لم يُخصم شيء. إن كنت قد دفعت يعود المبلغ إلى وسيلة الدفع الأصلية عادةً خلال 5 إلى 7 أيام عمل.'],
  decBox: ['What you can do now', 'Que faire maintenant', 'ما يمكنك فعله الآن'], decA: ['Request the same products on the next departure.', 'Redemander les mêmes produits sur le prochain départ.', 'اطلب المنتجات نفسها على الرحلة القادمة.'],
  segs: [['Request and payment', 'Demande et paiement', 'الطلب والدفع'], ['Loading', 'Chargement', 'التحميل'], ['In transit', 'Transit', 'العبور'], ['Delivery', 'Livraison', 'التسليم']],
  headArr: ['First arrival at port (est.)', 'Première arrivée au port (est.)', 'أول وصول إلى الميناء (تقديري)'], goodsL2: ['Goods', 'Marchandise', 'البضاعة'], shipT: ['Shipments', 'Expéditions', 'الشحنات'], payT: ['Payment', 'Paiement', 'الدفع'], docsT2: ['Documents', 'Documents', 'المستندات'],
  notDue: ['Not due yet', 'Pas encore dû', 'غير مستحق بعد'], paidL: [(v) => `Paid ${v}`, (v) => `Payé ${v}`, (v) => `مدفوع ${v}`], underRev: ['Under review', 'En vérification', 'قيد المراجعة'],
  payTxt: ['You pay after we confirm your request.', 'Vous payez après notre confirmation.', 'تدفع بعد تأكيد طلبك.'], payPaid: ['Paid by bank transfer and matched to this order.', 'Payé par virement et rapproché de cette commande.', 'دُفع بالتحويل المصرفي وتمت مطابقته مع هذا الطلب.'],
  proofH: ['Transfer proof', 'Preuve de virement', 'إثبات التحويل'], proofP: ['After you pay, upload the transfer receipt. Staff match it to this order.', 'Après paiement, téléversez le reçu. Notre équipe le rapproche de cette commande.', 'بعد الدفع ارفع إيصال التحويل. يطابقه فريقنا مع هذا الطلب.'], upload: ['Upload proof', 'Téléverser la preuve', 'ارفع الإثبات'], uploaded: ['Proof received', 'Preuve reçue', 'تم استلام الإثبات'],
  ibanL: ['Bank details', 'Coordonnées bancaires', 'البيانات المصرفية'], copyIban: ['Copy IBAN', 'Copier l\'IBAN', 'انسخ IBAN'], copied: ['IBAN copied.', 'IBAN copié.', 'تم نسخ IBAN.'],
  reorder: ['Reorder', 'Recommander', 'أعد الطلب'], saveTpl: ['Save as template', 'Enregistrer comme modèle', 'احفظ كقالب'], saved: ['Saved as template', 'Modèle enregistré', 'تم الحفظ كقالب'], reAdded: ['Lines added to your order.', 'Lignes ajoutées à votre commande.', 'أُضيفت البنود إلى طلبك.'],
  ready: ['Ready', 'Prêt', 'جاهز'], afterConf: ['After confirmation', 'Après confirmation', 'بعد التأكيد'], later: ['Later', 'Plus tard', 'لاحقاً'],
  dlNo: ['Sample document. Download is not part of the prototype.', 'Document d\'exemple. Le téléchargement ne fait pas partie du prototype.', 'مستند تجريبي. التنزيل ليس جزءاً من النموذج.']
});
const LAD_N = [['Request sent', 'Demande envoyée', 'أُرسل الطلب'], ['KingoMart confirms', 'KingoMart confirme', 'تؤكد KingoMart'], ['Invoice paid', 'Facture payée', 'دُفعت الفاتورة'], ['Packed and loaded', 'Emballé et chargé', 'عُبّئت وحُمّلت'], ['Departed', 'Parti', 'غادرت'], ['In transit', 'En transit', 'في الطريق'], ['Arrived at port', 'Arrivé au port', 'وصلت إلى الميناء'], ['Customs clearance', 'Dédouanement', 'التخليص الجمركي'], ['Delivered to your dock', 'Livré à votre quai', 'سُلّمت إلى رصيفك']];
const LAD_P = [['Request sent. Nothing is charged at this step.', 'Demande envoyée. Rien n\'est débité à cette étape.', 'أُرسل الطلب. لا يُخصم شيء في هذه الخطوة.'], ['Stock and space checked. Final costs and payment details sent.', 'Stock et espace vérifiés. Coûts finaux et coordonnées de paiement envoyés.', 'تم التحقق من المخزون والمساحة. أُرسلت التكاليف النهائية وتفاصيل الدفع.'], ['Invoice paid, as agreed in the confirmation.', 'Facture payée, comme convenu dans la confirmation.', 'دُفعت الفاتورة كما اتُّفق في التأكيد.'], ['Pallets packed and loaded. Packing list issued.', 'Palettes emballées et chargées. Liste de colisage émise.', 'عُبّئت الباليتات وحُمّلت. صدرت قائمة التعبئة.'], ['Truck or container leaves. Transport document issued.', 'Le camion ou conteneur part. Document de transport émis.', 'تغادر الشاحنة أو الحاوية. صدر مستند النقل.'], ['On the road or at sea. If a date moves, we tell you what changed.', 'Sur la route ou en mer. Si une date change, nous vous disons ce qui a changé.', 'على الطريق أو في البحر. إن تغيّر موعد نخبرك بما تغيّر.'], ['Goods reach the port. Arrival is the port, not your dock.', 'Les marchandises arrivent au port, pas à votre quai.', 'تصل البضاعة إلى الميناء وليس إلى رصيفك.'], ['The importer of record clears customs. We send the documents customs asks for.', 'L\'importateur dédouane. Nous envoyons les documents demandés par la douane.', 'يتولى المستورد المسجل التخليص. نرسل المستندات المطلوبة.'], ['Check the goods on arrival. Claims window: 7 days.', 'Vérifiez les marchandises à l\'arrivée. Délai de réclamation : 7 jours.', 'افحص البضاعة عند الوصول. مهلة المطالبات: 7 أيام.']];

/* ---------- cart maths ---------- */
function lineInfo(l) {
  const pr = PBY[l.pid], offs = offersFor(pr), off = offs.find((o) => o.id === l.off) || offs[0];
  const prod = { shape: pr.shape, pc: pr.pc, tiers: off.tiers, tonnes: pr.tonnes, ppt: pr.ppt };
  return { l, pr, off, d: DEPS[l.dep], prod, c: KM.calc(prod, l.qty, DEPS[l.dep]) };
}
const palIn = (dep) => S.cart.filter((l) => l.dep === dep).reduce((a, l) => a + l.qty, 0);
const room = (dep) => DEPS[dep].cap - DEPS[dep].filled;
function cartTotals() {
  const li = S.cart.map(lineInfo);
  const goods = KM.r2(li.reduce((a, x) => a + x.c.goods, 0)), freight = KM.r2(li.reduce((a, x) => a + x.c.freight, 0));
  return { li, goods, freight, invoice: KM.r2(goods + freight), qty: S.cart.reduce((a, l) => a + l.qty, 0), over: [...new Set(S.cart.map((l) => l.dep))].some((id) => palIn(id) > room(id)) };
}
function importBlock(li) {
  const nonEU = li.some((x) => x.pr.org !== 'FR' && x.pr.org !== 'BE');
  const rows = importRows({ org: nonEU ? 'DZ' : 'BE' });
  return `<div class="imp"><b class="t-2">${t('ownImp')}</b>${rows.map((r) => `<div><span class="mut">${L3(r[0])}</span><span>${L3(r[1])}</span></div>`).join('')}</div>`;
}
function summary(tt, withBtn) {
  return `<div class="card pad hasp">${pin('est')}<h2 class="t-6 mb-3">${t('sum')}</h2><div class="rowb"><span>${t('goodsT')}</span><span class="mono">${m(tt.goods)}</span></div><div class="rowb"><span>${t('freightT')}</span><span class="mono">${m(tt.freight)}</span></div><div class="rowb tot"><span>${t('invT')}</span><span class="mono t-7">${m(tt.invoice)}</span></div><div class="mut t-2">${t('palTot')}: ${tt.qty}</div>${importBlock(tt.li)}${withBtn || ''}</div>`;
}

/* ---------- Your order ---------- */
SCR.cart = () => {
  if (!S.cart.length) return `<div class="wrap sec first">${emptyState(t('emptyH'), t('emptyP'), `<div class="row c g-3"><a class="btn" href="#/category">${t('browse')}${arrow}</a><button class="btn ghost" data-a="restore">${ic('repeat')}${t('restore')}</button></div>`, 'cart')}</div>`;
  const tt = cartTotals(), deps = [...new Set(S.cart.map((l) => l.dep))];
  const groups = deps.map((id, gi) => {
    const d = DEPS[id], mine = palIn(id), over = mine > room(id), filled = Math.min(d.cap, d.filled + mine);
    const lines = tt.li.filter((x) => x.l.dep === id).map((x) => {
      const lot = isLot(x.pr);
      const k = S.cart.indexOf(x.l);
      return `<div class="line"><div class="ph" style="${hueOf(x.pr)}">${flag(x.pr.org)}${art(x.pr)}</div><div><a href="#/product?pid=${x.pr.id}"><b class="t-5">${esc(x.pr.name)}</b></a><div class="mut t-2">${esc(L3(x.pr.pk))}${lot ? '' : ', ' + cs(x.pr.pc) + ' ' + t('perPallet')}</div><div class="row mt-3 g-4"><div class="stepper" role="group"><button data-a="cq" data-k="${k}" data-d="-1" aria-label="${esc(t('remove1'))}">${ic('minus')}</button><output aria-live="polite" class="${S.roll && S.roll.k === k ? S.roll.d : ''}"><span>${x.l.qty}</span></output><button data-a="cq" data-k="${k}" data-d="1" aria-label="${esc(t('add1'))}" ${x.l.qty >= 12 ? 'disabled' : ''}>${ic('plus')}</button></div><span class="mut t-3">${qtyL(x.pr, x.l.qty)} · ${m(x.c.unit)} ${lot ? t('perT') : t('perCase')}</span>${over ? `<button class="chgdep" data-a="mvopen" data-k="${k}" aria-expanded="${S.mv === k}">${ic('edit')}${t('chgDep')}</button>` : ''}</div>${over && S.mv === k ? movePicker(x, k) : ''}</div><div class="tot"><b class="mono t-5">${m(x.c.goods)}</b><button class="lnk mut" data-a="crm" data-k="${k}">${ic('trash')}${t('removeL')}</button></div></div>`;
    }).join('');
    return `<section class="card grp hasp">${gi === 0 ? pin('fill') : ''}<div class="grp-h"><div class="t"><div><b class="t-5">${depTitle(id)}</b><div class="mut t-3">${route(d)}, ${L3(MODE[d.mode])}</div></div>${chip(over ? t('over', pl(mine - room(id))) : t('held', pl(mine)), over ? 'bad' : 'ok')}</div>${meter(filled, d.cap, filled - d.filled)}<div class="k3"><div><span class="lab">${t('orderBy')}</span><b class="mono">${D(d.cut)}</b></div><div><span class="lab">${t('departs')}</span><b class="mono">${D(d.dep)}</b></div><div><span class="lab">${t('arrives')}</span><b class="mono">${D(d.eta)}</b></div></div><div class="mut t-2">${t('fillTxt', filled, d.cap, mine)} · ${m(d.rate)} ${t('perPallet')}</div>${over ? `<div class="notice bad hasp">${pin('move')}${ic('alert')}<span>${t('overNote', pl(room(id)), pl(mine))}</span></div>` : ''}</div>${lines}</section>`;
  }).join('');
  const btn = tt.over ? `<div class="notice bad mt-4">${ic('alert')}<span>${t('blocked')}</span></div><button class="btn block off mt-4" disabled>${ic('lock')}${t('reqBtn')}</button>` : `<a class="btn block mt-5" href="#/request">${t('reqBtn')}${arrow}</a><p class="mut t-2 mt-3">${t('noCharge')}</p>`;
  return `<div class="wrap sec first"><div class="rise"><h1 class="pgh">${t('cartH')}</h1><p class="mut mt-2">${t('cartCount', S.cart.length, deps.length)}</p></div><div class="two mt-7"><div>${saveCard(tt)}${groups}</div><div class="side">${summary(tt, btn)}</div></div></div>`;
};
/* ---------- Over capacity: move a line to another departure, right on the line ---------- */
Object.assign(T, {
  overNote: [(r, n) => `This truck has ${r} of space left and you have ${n}. Move a line to another departure, or remove pallets.`, (r, n) => `Il reste ${r} de place dans ce camion et vous en avez ${n}. Déplacez une ligne vers un autre départ ou retirez des palettes.`, (r, n) => `تبقى مساحة ${r} في هذه الشاحنة ولديك ${n}. انقل بنداً إلى رحلة أخرى أو أزل باليتات.`],
  chgDep: ['Change departure', 'Changer de départ', 'تغيير الرحلة'],
  roomFor: [(n) => `Room for ${n}`, (n) => `Place pour ${n}`, (n) => `مساحة لـ ${n}`],
  noRoom: ['Not enough room', 'Pas assez de place', 'لا توجد مساحة كافية'],
  moved: [(a, b) => `${a} moved to ${b}.`, (a, b) => `${a} déplacé vers ${b}.`, (a, b) => `نُقل ${a} إلى ${b}.`],
  cancel: ['Cancel', 'Annuler', 'إلغاء']
});
/* Free pallets on a departure for this cart, not counting the line being moved. */
const freeFor = (id, l) => DEPS[id].cap - DEPS[id].filled - S.cart.filter((c) => c.dep === id && c !== l).reduce((a, c) => a + c.qty, 0);
function movePicker(x, k) {
  const off = offersFor(x.pr).find((o) => o.id === x.l.off) || offersFor(x.pr)[0];
  const tiles = off.deps.filter((id) => id !== x.l.dep).map((id) => {
    const d = DEPS[id], free = freeFor(id, x.l), ok = free >= x.l.qty;
    return `<button class="mvt" data-a="mv" data-k="${k}" data-id="${id}" ${ok ? '' : 'disabled'}><b>${depTitle(id)}</b><span class="mut">${t('departs')} <span class="mono">${D(d.dep)}</span> · ${t('arrives')} <span class="mono">${D(d.eta)}</span></span><span class="row btw g-2"><span class="chip ${ok ? 'ok' : 'bad'}">${ok ? t('roomFor', pl(free)) : t('noRoom')}</span><span class="mono t-2">${m(d.rate)} ${t('perPallet')}</span></span></button>`;
  }).join('');
  return `<div class="mvpick ${S.mvJust ? 'open' : ''}" role="group" aria-label="${esc(t('chgDep'))}">${tiles}<button class="lnk mut" data-a="mvopen" data-k="${k}">${ic('x')}${t('cancel')}</button></div>`;
}
A.mvopen = (el) => { const k = +el.dataset.k; S.mv = S.mv === k ? null : k; S.mvJust = S.mv !== null; render(false); };
A.mv = (el) => {
  const l = S.cart[+el.dataset.k], to = el.dataset.id; if (!l) return;
  S.cartUndo = JSON.stringify(S.cart);
  const into = S.cart.find((c) => c !== l && c.pid === l.pid && c.off === l.off && c.dep === to);
  if (into) { into.qty = Math.min(12, into.qty + l.qty); S.cart.splice(S.cart.indexOf(l), 1); } else l.dep = to;
  S.mv = null; render(false);
  toast(t('moved', '⁨' + PBY[l.pid].name + '⁩', '⁨' + depTitle(to) + '⁩'), t('undo'), '', 'undocart');
};
A.undocart = () => { if (!S.cartUndo) return; S.cart = JSON.parse(S.cartUndo); S.cartUndo = null; S.toast = null; render(false); };

/* ---------- Get more value: what a rep would point out, each with its effect in euros ---------- */
Object.assign(T, {
  saveT: ['Get more value for your order', 'Tirez plus de valeur de votre commande', 'احصل على قيمة أكبر لطلبك'],
  saveUp: ['Suggestions a sales rep would make. Nothing changes until you choose.', "Les conseils d'un commercial. Rien ne change sans votre accord.", 'اقتراحات كما يقدمها مندوب المبيعات. لا يتغير شيء حتى تختار.'],
  tierRow: [(p, v) => `Add 1 pallet of ${p} and pay ${v} per case on all of it.`, (p, v) => `Ajoutez 1 palette de ${p} et payez ${v} la caisse sur l'ensemble.`, (p, v) => `أضف باليت واحداً من ${p} وادفع ${v} للصندوق على الكل.`],
  swapRow: [(a, b, x, y) => `Swap ${a} for ${b}, a similar pack: ${x} a litre instead of ${y}.`, (a, b, x, y) => `Remplacez ${a} par ${b}, un format proche : ${x} le litre au lieu de ${y}.`, (a, b, x, y) => `استبدل ${a} بـ ${b}، عبوة مشابهة: ${x} لليتر بدلاً من ${y}.`],
  swapBtn: ['Swap', 'Remplacer', 'استبدال'], addPal: ['Add 1 pallet', 'Ajouter 1 palette', 'أضف باليت'],
  saveL: [(v) => `${v} less per case`, (v) => `${v} de moins par caisse`, (v) => `أقل بـ ${v} للصندوق`], saveTot: [(v) => `${v} less in total`, (v) => `${v} de moins au total`, (v) => `أقل بـ ${v} إجمالاً`],
  swapped: [(a, b) => `${a} swapped for ${b}.`, (a, b) => `${a} remplacé par ${b}.`, (a, b) => `تم استبدال ${a} بـ ${b}.`],
  undo: ['Undo', 'Annuler', 'تراجع'],
  saveNote: ['Swaps keep the same departure and pallet count, so your space on the truck does not change.', 'Un remplacement garde le même départ et le même nombre de palettes : votre place dans le camion ne change pas.', 'يحافظ الاستبدال على الرحلة نفسها وعدد الباليتات نفسه، فلا يتغير مكانك في الشاحنة.']
});
function savings(tt) {
  const out = [];
  tt.li.forEach((x) => {
    if (isLot(x.pr)) return;
    const k = S.cart.indexOf(x.l), cur = KM.tierFor(x.off.tiers, x.l.qty).price, nx = x.off.tiers.find((y) => y.min > x.l.qty);
    if (nx && nx.min - x.l.qty === 1 && palIn(x.l.dep) + 1 <= room(x.l.dep)) out.push({ kind: 'tier', k, x, nx, cur, save: KM.r2(x.c.cases * (cur - nx.price)) });
    const alt = altFor(x.pr, x.l.dep);
    if (alt && !S.cart.some((l) => l.pid === alt.p.id && l.dep === x.l.dep)) {
      const ac = KM.calc({ pc: alt.p.pc, tiers: offersFor(alt.p)[0].tiers }, x.l.qty, DEPS[x.l.dep]);
      out.push({ kind: 'swap', k, x, alt, save: KM.r2(x.c.goods - ac.goods), myL: perL(x.pr, cur) });
    }
  });
  return out;
}
function saveCard(tt) {
  const sv = savings(tt);
  if (!sv.length) return '';
  const rows = sv.map((r) => r.kind === 'tier'
    ? `<div class="save-r"><span class="ico">${ic('box')}</span><p>${t('tierRow', `<bdi>${esc(r.x.pr.name)}</bdi>`, m(r.nx.price))}</p><div class="save-a"><b class="amt">${t('saveL', m(KM.r2(r.cur - r.nx.price)))}</b><button class="btn ghost sm" data-a="cq" data-k="${r.k}" data-d="1">${ic('plus')}${t('addPal')}</button></div></div>`
    : `<div class="save-r"><a class="ph" style="${hueOf(r.alt.p)}" href="#/product?pid=${r.alt.p.id}" aria-label="${esc(r.alt.p.name)}">${art(r.alt.p)}</a><p>${t('swapRow', `<bdi>${esc(r.x.pr.name)}</bdi>`, `<bdi>${esc(r.alt.p.name)}</bdi>`, m(r.alt.l), m(r.myL))}</p><div class="save-a"><b class="amt">${t('saveTot', m(r.save))}</b><button class="btn ghost sm" data-a="swap" data-k="${r.k}" data-pid="${r.alt.p.id}">${ic('repeat')}${t('swapBtn')}</button></div></div>`).join('');
  return `<section class="save hasp">${pin('save')}<div class="save-h"><h2>${ic('tag')}${t('saveT')}</h2><p class="note">${t('saveUp')}</p></div>${rows}${sv.some((r) => r.kind === 'swap') ? `<p class="note">${t('saveNote')}</p>` : ''}</section>`;
}
A.swap = (el) => {
  const l = S.cart[+el.dataset.k]; if (!l) return;
  const from = l.pid; S.lastSwap = { k: +el.dataset.k, pid: from };
  l.pid = el.dataset.pid; l.off = 'o1'; S.tick = true; render(false);
  toast(t('swapped', '⁨' + PBY[from].name + '⁩', '⁨' + PBY[l.pid].name + '⁩'), t('undo'), '', 'undoswap');
};
A.undoswap = () => { const u = S.lastSwap, l = u && S.cart[u.k]; if (!l) return; l.pid = u.pid; S.lastSwap = null; S.toast = null; render(false); };
A.cq = (el) => { const l = S.cart[+el.dataset.k]; if (!l) return; S.mv = null; l.qty += +el.dataset.d; S.roll = { k: +el.dataset.k, d: +el.dataset.d > 0 ? 'up' : 'down' }; if (l.qty < 1) S.cart.splice(+el.dataset.k, 1); l.qty = Math.min(12, l.qty); render(false); };
A.crm = (el) => { S.cart.splice(+el.dataset.k, 1); S.mv = null; render(false); };
A.restore = () => { S.cart = DEFAULT_CART(); render(false); };

/* ---------- Request order ---------- */
const ADDR = { fr: ['Épicerie Orient (sample)', '12 rue des Écluses, 75010 Paris, France', 'FR12 345 678 901'], dz: ['Supermarché El Djazair (sample)', 'Zone industrielle, Rouiba, Alger 16012, Algérie', 'NIF 000 000 000 000 000'] };
SCR.request = () => {
  if (!S.cart.length) return SCR.cart();
  const tt = cartTotals(), a = ADDR[S.market], co = S.co;
  const rad = (k, h, p) => `<button class="rad" role="radio" aria-checked="${co.imp === k}" data-a="imp" data-v="${k}"><span class="dot"></span><span><b>${t(h)}</b><br><span class="mut t-3">${t(p)}</span></span></button>`;
  const ready = co.agree;
  const send = `<button class="btn block ${ready ? '' : 'off'}" data-a="send" ${ready ? '' : 'aria-disabled="true"'} ${co.sending ? 'disabled' : ''}>${co.sending ? `<span class="spin"></span>${t('sending')}` : ic('send') + t('sendBtn')}</button>${ready ? '' : `<p class="mut t-2 mt-3">${S.co.err ? `<span class="c-bad">${t('toSend')}</span>` : t('toSend')}</p>`}`;
  const lines = tt.li.map((x) => `<div class="rowb"><span>${esc(x.pr.name)} <span class="mut">· ${qtyL(x.pr, x.l.qty)}</span></span><span class="mono">${m(x.c.goods)}</span></div>`).join('');
  return `<div class="wrap sec first"><nav class="crumb flat" aria-label="Breadcrumb"><a href="#/cart">${t('cartH')}</a>${ic('chev', 'rr')}<span aria-current="page">${t('reqH')}</span></nav><div class="rise mt-4"><h1 class="pgh">${t('reqH')}</h1><p class="mut mt-2">${t('reqSub')}</p></div>
  <div class="two mt-7"><div class="stack g-7">
  <section class="fs"><div class="fs-h"><span class="num">1</span><h2 class="t-7">${t('s1h')}</h2></div><div class="frm"><label class="field"><span>${t('fCo')}</span><input value="${esc(a[0])}" autocomplete="organization"></label><label class="field span-all"><span>${t('fAddr')}</span><input value="${esc(a[1])}" autocomplete="street-address"></label><label class="field span-all"><span>${t('fNote')}</span><input placeholder="Dock 3, call 30 minutes before"></label></div></section>
  <section class="fs"><div class="fs-h"><span class="num">2</span><h2 class="t-7">${t('s2h')}</h2></div><div role="radiogroup" aria-label="${esc(t('s2h'))}" class="stack g-3">${rad('self', 'impSelf', 'impSelfP')}${rad('km', 'impKm', 'impKmP')}</div>${co.imp === 'self' ? `<label class="field"><span>${t('fId')}</span><input value="${esc(a[2])}"></label>` : ''}</section>
  <section class="fs hasp">${pin('pay')}<div class="fs-h"><span class="num">3</span><h2 class="t-7">${t('s3h')}</h2></div><div class="notice">${ic('info')}<span>${t(MARKETS[S.market].pay === 'transfer' ? 'payDz' : 'payFr')}</span></div></section>
  <section class="fs hasp">${pin('review')}<div class="fs-h"><span class="num">4</span><h2 class="t-7">${t('s4h')}</h2></div><div class="card pad">${lines}<div class="rowb"><span>${t('freightT')}</span><span class="mono">${m(tt.freight)}</span></div><div class="rowb tot"><span>${t('invT')}</span><span class="mono">${m(tt.invoice)}</span></div>${importBlock(tt.li)}</div><label class="chk"><input type="checkbox" data-a="agree" ${co.agree ? 'checked' : ''}><span>${t('agreeT')}</span></label></section></div>
  <div class="side"><div class="card pad">${send}</div><div class="card pad"><h3 class="t-5 mb-3">${t('nextH')}</h3><ol class="stack t-3 g-3"><li>${t('n1')}</li><li>${t('n2')}</li><li>${t('n3')}</li></ol></div></div></div></div>`;
};
A.imp = (el) => { S.co.imp = el.dataset.v; render(false); };
A['agree:change'] = (el) => { S.co.agree = el.checked; S.co.err = false; render(false); };
A.send = () => {
  if (!S.co.agree) { S.co.err = true; render(false); return; }
  S.co.sending = true; render(false);
  setTimeout(() => { S.co.sending = false; S.co.agree = false; ensureOrder(true); S.cart = []; S.osel = 'new'; location.hash = '#/received'; }, 900);
};

/* ---------- Order model ---------- */
function ensureOrder(fresh) {
  if (S.order && !fresh) return;
  if (!S.cart.length) S.cart = DEFAULT_CART();
  const tt = cartTotals(), first = DEPS[S.cart[0].dep], deps = [...new Set(S.cart.map((l) => l.dep))];
  const ref = 'KR-26-' + (1043 + S.orders.length);
  S.order = {
    ref, cur: 1, placed: [10, 13], st: 'warn', lines: tt.li.map((x) => [x.pr.name, x.l.qty, x.c.goods, x.pr.id]), freight: tt.freight, goods: tt.goods, invoice: tt.invoice,
    what: [tt.li.length, tt.qty], ships: deps.map((id) => [id, pl(palIn(id))]), paid: 0, docs: 1, fresh: true,
    dates: ['Tue 13 Oct', 'By Wed 14 Oct', 'After confirmation', 'By ' + KM.date(first.cut[0], first.cut[1], 'en'), KM.date(first.dep[0], first.dep[1], 'en'), KM.date(first.dep[0], first.dep[1], 'en') + ' to ' + KM.date(first.eta[0], first.eta[1], 'en'), KM.date(first.eta[0], first.eta[1], 'en') + ' (est.)', 'After arrival (est.)', 'After clearance (est.)'],
    cart: S.cart.map((l) => Object.assign({}, l))
  };
  S.orders = [S.order].concat(S.orders.filter((o) => o !== S.order));
}
const ordKey = { req: 'ttReq', transit: 'ttTransit', done: 'ttDone', dec: 'ttDec' };
const ordSub = { req: 'sbReq', transit: 'sbTransit', done: 'sbDone', dec: 'sbDec' };
const ordChip = { req: 'stReq', transit: 'stTransit', done: 'stDone', dec: 'stDec' };
function ladder(o) {
  const n = o.declined ? 2 : 9;
  return `<ol class="lad reveal-in">${LAD_N.slice(0, n).map((nm, i) => {
    const cls = o.declined ? (i === 0 ? 'done' : 'bad') : i < o.cur ? 'done' : i === o.cur ? 'now' : 'nx';
    const name = o.declined && i === 1 ? t('stDec') : L3(nm), note = o.declined && i === 1 ? t('sbDec').split('. ')[0] + '.' : L3(LAD_P[i]);
    return `<li class="${cls}" style="--i:${i}"><span class="dt">${cls === 'done' ? ic('check') : cls === 'bad' ? ic('x') : ''}</span><div><b>${name}</b><p>${note}</p></div><time>${o.dates[i] || ''}</time></li>`;
  }).join('')}</ol>`;
}
const allOrders = () => [].concat(S.orders.map((o, i) => Object.assign({}, o, { key: i === 0 ? 'new' : 'new' + i })), ['req', 'transit', 'done', 'dec'].map((k) => Object.assign({ key: k }, ORDERS[k])));
const kindOf = (o) => (o.key.startsWith('new') ? 'req' : o.key);

/* ---------- Order received ---------- */
SCR.received = () => {
  const o = S.order, mk = MARKETS[S.market];
  const what = `${o.what[0]} ${o.what[0] === 1 ? 'product' : 'products'}, ${o.what[1]} ${o.what[1] === 1 ? 'pallet' : 'pallets'}`;
  return `<div class="wrap sec first"><div class="rise row top g-5"><span class="ok-ring">${ic('checkdraw')}</span><div class="grow"><h1 class="pgh" aria-live="polite">${t('recvH', o.ref)}</h1><p class="mut mt-3 measure">${t('recvP')}</p><div class="row mt-6 g-3"><a class="btn" href="#/orders" data-a="open-new">${ic('truck')}${t('viewStatus')}</a><a class="btn ghost" href="#/category">${t('contShop')}${arrow}</a></div></div></div>
  <div class="two mt-8"><div class="stack g-6"><div class="card pad hasp">${pin('lad')}<h2 class="t-6 mb-5">${t('nextH')}</h2>${ladder(Object.assign({}, o, { cur: 1 }))}</div>
  <div class="card pad"><h3 class="t-5 mb-3">${t('goodsT')}</h3>${o.lines.map((l) => `<div class="rowb"><span>${esc(l[0])} <span class="mut">· ${l[1]}</span></span><span class="mono">${m(l[2])}</span></div>`).join('')}<div class="rowb"><span>${t('freightT')}</span><span class="mono">${m(o.freight)}</span></div><div class="rowb tot"><span>${t('invT')}</span><span class="mono">${m(o.invoice)}</span></div></div></div>
  <div class="side"><div class="card pad">${contactCard()}</div><div class="mail hasp">${pin('recv')}<div class="mh"><b class="ink">${t('emailPrev')}</b><span>To: ${esc(mk.co)}</span><span>${esc(t('emailSubj', o.ref))}</span></div><div class="mb"><p>${t('emailBody', mk.contact, what)}</p><span class="mono ink">${o.ref}</span></div></div></div></div></div>`;
};
A['open-new'] = () => { S.osel = 'new'; };

/* ---------- My orders ---------- */
SCR.orders = () => {
  const list = allOrders();
  let cur = list.find((o) => o.key === S.osel) || list[0];
  const k = kindOf(cur);
  const mk = MARKETS[S.market];
  const items = list.map((o) => { const kk = kindOf(o); const sel = o === cur; return `<button class="ob" data-a="osel" data-v="${o.key}" aria-pressed="${sel}"><span><b class="mono">${o.ref}</b><br><span class="mut t-2">${t('requested')} ${D(o.placed)} · ${t('ofProd', o.what[0], o.what[1])}</span></span>${chip(t(ordChip[kk]), o.st)}</button>`; }).join('');
  const segsOn = [[0, 1, 2], [3, 4], [5, 6], [7, 8]].map((g) => (cur.declined ? '' : cur.cur > g[g.length - 1] ? 'on' : cur.cur >= g[0] ? 'half' : ''));
  const lines = cur.lines.map((l, li) => `<div class="rowb oline ${li === 0 ? 'hasp' : ''}">${li === 0 ? pin('buyagain') : ''}<span>${esc(l[0])} <span class="mut">· ${pl(l[1])}</span><button class="lnk" data-a="buyagain" data-o="${cur.key}" data-i="${li}">${ic('repeat')}${t('buyAgain')}</button></span><span class="mono">${m(l[2])}</span></div>`).join('');
  const inv = cur.lines.reduce((a, l) => a + l[2], 0) + cur.freight;
  const docsN = cur.declined ? [] : [['Request summary', 1], ['Pro forma invoice', 2], ['Commercial invoice', 3], ['Packing list', 3], ['Transport document', 4], ['Customs release note', 7]];
  const docsH = docsN.map(([n, at]) => { const rdy = cur.docs >= (at === 1 ? 1 : at - 1) && cur.cur >= at - 1; return `<div class="doc"><span>${n}</span>${rdy || cur.docs >= at ? `<button class="cp" data-a="dl">${ic('download')}${t('ready')}</button>` : chip(at <= 2 ? t('afterConf') : t('later'))}</div>`; }).join('');
  const pay = cur.declined ? '' : `<div class="card pad hasp">${pin('pay')}<div class="row btw g-3"><h3 class="t-5">${t('payT')}</h3>${cur.paid ? chip(t('paidL', m(cur.paid)), 'ok') : S.proof ? chip(t('underRev'), 'warn') : chip(t('notDue'))}</div><p class="mut mt-2 t-3">${cur.paid ? t('payPaid') : t('payTxt')}</p>${!cur.paid && mk.pay === 'transfer' ? `<div class="stack mt-4 g-3"><div class="iban"><b class="t-2">${t('ibanL')}</b><div class="mono mt-1 t-3">DZ00 0000 0000 0000 0000${sm()}</div><button class="cp mt-2" data-a="copy">${ic('copy')}${t('copyIban')}</button></div><div><b class="t-3">${t('proofH')}</b><p class="mut t-2 mt-1 mb-3">${t('proofP')}</p><button class="btn ghost sm" data-a="proof" ${S.proof ? 'disabled' : ''}>${ic('upload')}${S.proof ? t('uploaded') : t('upload')}</button></div></div>` : ''}</div>`;
  const dec = cur.declined ? `<div class="notice bad hasp">${pin('dec')}${ic('alert')}<div><b>${t('ttDec')}</b><br>${t('sbDec')}<div class="mt-3"><b class="t-3">${t('decBox')}</b><p class="mt-1 mb-3">${t('decA')}</p><button class="btn sm" data-a="reorder" data-v="${cur.key}">${ic('repeat')}${t('reorder')}</button></div></div></div>` : '';
  const ships = cur.ships.map((s) => { const d = DEPS[s[0]]; return `<div class="rowb"><span><b class="mono">${s[0]}</b> <span class="mut">${d ? route(d) + ', ' + L3(MODE[d.mode]) : ''}</span></span><span class="mut">${s[1]}</span></div>`; }).join('');
  const first = cur.ships[0] && DEPS[cur.ships[0][0]];
  return `<div class="wrap sec first"><h1 class="pgh rise">${t('ordH')}</h1>
  <div class="two ord mt-7"><div class="ordl2" role="group" aria-label="${esc(t('ordH'))}">${items}</div>
  <div class="stack g-5"><div class="card pad"><div class="row btw g-3"><span class="mono mut">${cur.ref}</span>${chip(t(ordChip[k]), cur.st)}</div><h2 class="t-8 mt-3">${t(ordKey[k])}</h2><p class="mut mt-2 measure">${t(ordSub[k])}</p>
  ${cur.declined ? '' : `<div class="segs mt-6">${segsOn.map((c) => `<i class="${c}"></i>`).join('')}</div><div class="segs mut mt-2 t-1">${T.segs.map((s) => `<span>${L3(s)}</span>`).join('')}</div>`}
  ${first && !cur.declined ? `<div class="notice mt-5">${ic('truck')}<div><b>${t('headArr')}: <span class="mono">${D(first.eta)}</span></b><br><span class="mut">${cur.ships.map((s) => s[0]).join(', ')}</span></div></div>` : ''}</div>
  ${dec}<div class="card pad hasp">${cur.declined ? '' : pin('lad')}${ladder(cur)}</div>
  <div class="card pad"><h3 class="t-5 mb-2">${t('goodsL2')}</h3>${lines}<div class="rowb"><span>${t('freightT')}</span><span class="mono">${m(cur.freight)}</span></div><div class="rowb tot"><span>${t('invT')}</span><span class="mono">${m(inv)}</span></div>${cur.ships.length ? `<h3 class="t-5 mt-5 mb-2">${t('shipT')}</h3>${ships}` : ''}</div>
  ${pay}${docsH ? `<div class="card pad"><h3 class="t-5 mb-2">${t('docsT2')}</h3>${docsH}</div>` : ''}
  <div class="card pad row btw g-4"><div>${contactCard()}</div><div class="hasp row g-3">${pin('reorder')}${cur.declined ? '' : `<button class="btn sm" data-a="reorder" data-v="${cur.key}">${ic('repeat')}${t('reorder')}</button>`}<button class="btn ghost sm" data-a="tmpl" data-v="${cur.key}" aria-pressed="${!!S.tmpl[cur.key]}">${ic('bookmark')}${S.tmpl[cur.key] ? t('saved') : t('saveTpl')}</button></div></div></div></div></div>`;
};
/* Buy again: one line of a past order, in the quick-order card, same quantity. */
Object.assign(T, {
  buyAgain: ['Buy again', 'Racheter', 'اشترِ مجدداً'],
  buyFrom: [(r, d, q) => `From order ${r}, ${d}: ${q}.`, (r, d, q) => `Commande ${r}, ${d} : ${q}.`, (r, d, q) => `من الطلب ${r}، ${d}: ${q}.`]
});
A.buyagain = (el) => {
  const o = allOrders().find((x) => x.key === el.dataset.o), l = o && o.lines[+el.dataset.i];
  const pr = l && (PBY[l[3]] || PRODUCTS.find((p) => p.name === l[0])); if (!pr) return;
  delete S.qo[pr.id]; qoState(pr, l[1]); // start from this line's quantity
  openSheet({ type: 'buy', label: t('buyAgain'), pid: pr.id, ref: o.ref, placed: o.placed, qty: l[1] });
};
SHEETS.buy = (sp) => `<div class="sheet-h"><span class="ico">${ic('repeat')}</span><h3>${t('buyAgain')}</h3></div>${qcard(PBY[sp.pid], `<p class="hist">${ic('file')}<span>${t('buyFrom', sp.ref, D(sp.placed), pl(sp.qty))}</span></p>`, sp.qty)}`;
A.osel = (el) => { S.osel = el.dataset.v; render(false); };
A.dl = () => toast(t('dlNo'));
A.copy = () => { try { navigator.clipboard.writeText('DZ00 0000 0000 0000 0000'); } catch (e) { /* clipboard blocked */ } toast(t('copied')); };
A.proof = () => { S.proof = true; render(false); };
A.tmpl = (el) => { S.tmpl[el.dataset.v] = !S.tmpl[el.dataset.v]; render(false); };
A.reorder = (el) => {
  const o = allOrders().find((x) => x.key === el.dataset.v) || allOrders()[0];
  o.lines.forEach((l) => { const pr = PRODUCTS.find((p) => p.name === l[0]); if (!pr) return; const dep = o.declined ? DEPMAP[pr.org][0] : (offersFor(pr)[0].deps[0]); const ex = S.cart.find((c) => c.pid === pr.id && c.dep === dep); if (ex) ex.qty = Math.min(12, ex.qty + l[1]); else S.cart.push({ pid: pr.id, off: 'o1', dep, qty: l[1] }); });
  S.tick = true; render(false); toast(t('reAdded'), t('viewOrder'), '#/cart');
};
