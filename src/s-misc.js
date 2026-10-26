/* Open departures, Apply for access, Application received. */
Object.assign(T, {
  depH: ['Open departures', 'Départs ouverts', 'الرحلات المفتوحة'], depSub: ['Shared trucks and containers you can join. The fill meter shows how many pallets are taken.', 'Camions et conteneurs partagés que vous pouvez rejoindre. La jauge montre les palettes prises.', 'شاحنات وحاويات مشتركة يمكنك الانضمام إليها. يوضح المؤشر عدد الباليتات المحجوزة.'],
  allOrig: ['All origins', 'Toutes les origines', 'كل بلدان المنشأ'], depCount: [(n) => `${n} ${n === 1 ? 'departure' : 'departures'}`, (n) => `${n} départ${n > 1 ? 's' : ''}`, (n) => `${n} رحلات`],
  stOpen: ['Open', 'Ouvert', 'مفتوحة'], stClosing: ['Closing soon', 'Bientôt clos', 'تُغلق قريباً'],
  freeN: [(n) => `${n} pallets left`, (n) => `${n} palettes restantes`, (n) => `تبقّى ${n} باليت`], reservedN: [(a, b) => `${a} of ${b} pallets reserved`, (a, b) => `${a} palettes sur ${b} réservées`, (a, b) => `${a} من ${b} باليت محجوز`],
  frPerPal: ['Freight per pallet', 'Fret par palette', 'الشحن لكل باليت'], chooseP: ['Choose products', 'Choisir des produits', 'اختر المنتجات'],
  /* Apply */
  appH: ['Apply for access', "Demander l'accès", 'اطلب الوصول'], appSub: ['Business accounts only. Trade prices, departures and ordering open after approval.', 'Comptes professionnels uniquement. Prix de gros, départs et commande s\'ouvrent après approbation.', 'حسابات الأعمال فقط. تُفتح أسعار الجملة والرحلات والطلب بعد الموافقة.'],
  aCo: ['Company name', "Nom de l'entreprise", 'اسم الشركة'], aReg: { fr: ['SIRET number', 'Numéro SIRET', 'رقم SIRET'], dz: ['Commercial register (RC) number', 'Numéro de registre du commerce (RC)', 'رقم السجل التجاري'] },
  aTax: { fr: ['VAT number', 'Numéro de TVA', 'رقم ضريبة القيمة المضافة'], dz: ['Tax ID (NIF)', 'Identifiant fiscal (NIF)', 'الرقم الجبائي (NIF)'] },
  aName: ['Your name', 'Votre nom', 'اسمك'], aMail: ['Work email', 'E-mail professionnel', 'البريد الإلكتروني للعمل'], aTel: ['Phone number', 'Numéro de téléphone', 'رقم الهاتف'],
  aDocs: ['Documents', 'Documents', 'المستندات'], aDocsP: ['Add both files. They are used to check the company and the legal representative only.', 'Ajoutez les deux fichiers. Ils servent uniquement à vérifier l\'entreprise et le représentant légal.', 'أضف الملفين. يُستخدمان فقط للتحقق من الشركة والممثل القانوني.'],
  dReg: { fr: ['Kbis extract', 'Extrait Kbis', 'مستخرج Kbis'], dz: ['Commercial register extract', 'Extrait du registre du commerce', 'مستخرج السجل التجاري'] }, dRegH: ['PDF, issued in the last 3 months', 'PDF, de moins de 3 mois', 'PDF صادر خلال آخر 3 أشهر'],
  dPass: ['Passport of the legal representative', 'Passeport du représentant légal', 'جواز سفر الممثل القانوني'], dPassH: ['PDF or photo. Used for the identity check only.', 'PDF ou photo. Utilisé uniquement pour la vérification d\'identité.', 'PDF أو صورة. للتحقق من الهوية فقط.'],
  addFile: ['Add file', 'Ajouter un fichier', 'أضف ملفاً'], removeF: ['Remove', 'Retirer', 'إزالة'], missing: ['Missing', 'Manquant', 'مفقود'], added2: ['Added (sample)', 'Ajouté (exemple)', 'أُضيف (نموذج)'],
  aAgree: ['I confirm these details are correct and I can legally represent the company.', 'Je confirme que ces informations sont exactes et que je peux représenter légalement l\'entreprise.', 'أؤكد أن هذه البيانات صحيحة وأنني أمثّل الشركة قانونياً.'],
  aSend: ['Send application', 'Envoyer la demande', 'أرسل الطلب'], aFill: ['Fill sample details', 'Remplir avec des données d\'exemple', 'املأ ببيانات تجريبية'],
  aNeed: [(x) => `To send: ${x}.`, (x) => `Pour envoyer : ${x}.`, (x) => `للإرسال: ${x}.`],
  errCo: ['Enter your company name.', 'Saisissez le nom de votre entreprise.', 'أدخل اسم شركتك.'], errReg: ['Enter your registration number.', 'Saisissez votre numéro d\'immatriculation.', 'أدخل رقم تسجيل شركتك.'], errTax: ['Enter your tax or VAT number.', 'Saisissez votre numéro fiscal ou de TVA.', 'أدخل رقمك الضريبي.'],
  errName: ['Enter your full name.', 'Saisissez votre nom complet.', 'أدخل اسمك الكامل.'], errMail: ['Enter a work email like name@company.com.', 'Saisissez un e-mail professionnel du type nom@entreprise.com.', 'أدخل بريداً مثل name@company.com.'],
  bizOnly: ['Business accounts only. Personal accounts are not offered.', 'Comptes professionnels uniquement. Les comptes particuliers ne sont pas proposés.', 'حسابات الأعمال فقط. لا تتوفر حسابات شخصية.'],
  afterH: ['After you apply', 'Après votre demande', 'بعد التقديم'], af1: ['We check the documents, usually within one business day.', 'Nous vérifions les documents, en général sous un jour ouvré.', 'نتحقق من المستندات عادةً خلال يوم عمل.'], af2: ['You see indicative prices while you wait.', 'Vous voyez des prix indicatifs en attendant.', 'ترى أسعاراً إرشادية أثناء الانتظار.'], af3: ['Once approved, wholesale prices, departures and ordering open.', 'Une fois approuvé, les prix de gros, les départs et la commande s\'ouvrent.', 'بعد الموافقة تُفتح أسعار الجملة والرحلات والطلب.'],
  /* Pending */
  penH: ['Application received', 'Demande reçue', 'استلمنا طلب التقديم'], penP: ['We are checking your documents. You can browse indicative prices while you wait.', 'Nous vérifions vos documents. Vous pouvez consulter les prix indicatifs en attendant.', 'نتحقق من مستنداتك. يمكنك تصفح الأسعار الإرشادية أثناء الانتظار.'],
  tk: [['Application received', 'Demande reçue', 'استلمنا الطلب'], ['Documents checked', 'Documents vérifiés', 'فحص المستندات'], ['Account approved', 'Compte approuvé', 'اعتماد الحساب'], ['Prices unlocked', 'Prix débloqués', 'فتح الأسعار']],
  tkP: [['We have your application and documents.', 'Nous avons votre demande et vos documents.', 'لدينا طلبك ومستنداتك.'], ['A person reads the company and identity files. Usually one business day.', 'Une personne lit les pièces de l\'entreprise et d\'identité. En général un jour ouvré.', 'يقرأ موظف ملفات الشركة والهوية. عادةً يوم عمل.'], ['You get an email as soon as the account is approved.', 'Vous recevez un e-mail dès l\'approbation du compte.', 'تصلك رسالة بريدية فور اعتماد الحساب.'], ['Wholesale prices, departures and ordering open.', 'Prix de gros, départs et commande s\'ouvrent.', 'تُفتح أسعار الجملة والرحلات والطلب.']],
  meanwhile: ['While you wait', 'En attendant', 'أثناء الانتظار'], simApprove: ['Preview the approved account', 'Aperçu du compte approuvé', 'معاينة الحساب المعتمد'], protoOnly: ['Prototype shortcut', 'Raccourci du prototype', 'اختصار النموذج']
});

SCR.departures = () => {
  const lanes = [['all', 'allOrig'], ['DZ', null], ['BE', null], ['US', null], ['VN', null]];
  const list = Object.keys(DEPS).filter((k) => !DEPS[k].hidden && (S.lane === 'all' || DEPS[k].lane === S.lane));
  const cards = list.map((id, i) => {
    const d = DEPS[id], free = d.cap - d.filled, pct = Math.round((d.filled / d.cap) * 100);
    return `<article class="card dc reveal-in hasp">${i === 0 ? pin('fill') : ''}${im('mode/' + d.mode) ? `<div class="mode">${imgTag('mode/' + d.mode, '')}</div>` : ''}<div class="row btw g-3"><b class="mono">${id}</b><span class="row g-2">${chip(d.temp === 'Ambient' ? L3(['Ambient', 'Ambiant', 'محيطي']) : d.temp)}${chip(d.st === 'closing' ? t('stClosing') : t('stOpen'), d.st === 'closing' ? 'warn' : 'ok')}</span></div>
    <div class="route"><span>${L3(PLACE[d.from])}</span>${routeLine()}<span>${L3(PLACE[d.to])}</span></div>
    <div class="mut dep-sub t-3">${L3(MODE[d.mode])} · ${esc(d.note)}</div>
    <div class="k3"><div><span class="lab">${t('orderBy')}</span><b class="mono">${D(d.cut)}</b></div><div><span class="lab">${t('departs')}</span><b class="mono">${D(d.dep)}</b></div><div><span class="lab">${t('arrives')}</span><b class="mono">${D(d.eta)}</b></div></div>
    <div><div class="row btw t-3 mb-2 g-2"><span>${t('reservedN', d.filled, d.cap)}</span><b>${pct}%</b></div>${meter(d.filled, d.cap)}<div class="mut t-2 mt-2">${t('freeN', free)}${d.wt ? ' · ' + d.wt : ''}</div></div>
    <div class="dep-foot"><div><span class="lab">${t('frPerPal')}</span><b class="mono t-6">${m(d.rate)}</b></div><a class="btn sm" href="#/category?o=${d.lane}">${t('chooseP')}${arrow}</a></div></article>`;
  }).join('');
  return `<div class="wrap sec first"><div class="rise"><h1 class="pgh">${t('depH')}</h1><p class="mut mt-3 mb-6 measure">${t('depSub')}</p></div><div class="tabs mb-6" role="group">${lanes.map(([k, l]) => `<button class="fc" data-a="lane" data-v="${k}" aria-pressed="${S.lane === k}">${l ? t(l) : (k === 'US' ? L3(COUNTRY.US) : L3(COUNTRY[k]))}</button>`).join('')}<span class="mut as-c ms-2">${t('depCount', list.length)}</span></div><div class="dgrid">${cards}</div></div>`;
};
A.lane = (el) => { S.lane = el.dataset.v; render(false); };

/* ---------- Apply ---------- */
const SAMPLE_APPLY = { fr: { co: 'Épicerie Orient SARL', reg: '812 345 678 00019', tax: 'FR12 812345678', name: 'Camille Laurent', mail: 'camille@epicerie-orient.example', tel: '+33 1 84 00 00 00' }, dz: { co: 'Supermarché El Djazair SPA', reg: '16/00-0123456B21', tax: '000 016 012 345 678', name: 'Yasmine Haddad', mail: 'yasmine@eldjazair.example', tel: '+213 21 00 00 00' } };
function applyErrs() {
  const a = S.apply, v = a.v || {}, e = {};
  if (!v.co) e.co = 'errCo'; if (!v.reg) e.reg = 'errReg'; if (!v.tax) e.tax = 'errTax'; if (!v.name) e.name = 'errName';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.mail || '')) e.mail = 'errMail';
  return e;
}
SCR.apply = () => {
  const a = S.apply, v = a.v || (a.v = {}), er = a.err ? applyErrs() : {}, mk = S.market;
  const fld = (k, lbl, ph, type) => `<label class="field ${er[k] ? 'err' : ''}"><span>${lbl}</span><input data-fv="${k}" data-f="a-${k}" type="${type || 'text'}" value="${esc(v[k] || '')}" placeholder="${esc(ph)}" ${er[k] ? 'aria-invalid="true"' : ''} autocomplete="off">${er[k] ? `<span class="em" role="alert">${ic('alert')}${t(er[k])}</span>` : ''}</label>`;
  const need = []; if (!a.kbis) need.push(L3(T.dReg[mk]).toLowerCase()); if (!a.pass) need.push(L3(['the passport', 'le passeport', 'جواز السفر'])); if (!a.agree) need.push(L3(['the confirmation box', 'la case de confirmation', 'خانة التأكيد']));
  const doc = (key, name, hint) => `<div class="docp"><div><b>${name}</b><div class="mut t-2">${hint}</div></div><div class="row g-3">${chip(a[key] ? t('added2') : t('missing'), a[key] ? 'ok' : 'warn')}<button class="btn ghost sm" data-a="adoc" data-k="${key}">${a[key] ? ic('x') + t('removeF') : ic('upload') + t('addFile')}</button></div></div>`;
  return `<div class="wrap sec first"><div class="two"><div><div class="rise"><h1 class="pgh">${t('appH')}</h1><p class="mut mt-3 measure">${t('appSub')}</p></div>
  <div class="notice hasp mt-6">${pin('apply')}${ic('info')}<span>${t('bizOnly')}${sm()}</span></div>
  <form id="apf" class="fs mt-6" novalidate><div class="frm">${fld('co', t('aCo'), mk === 'fr' ? 'Épicerie Orient SARL' : 'Supermarché El Djazair SPA')}${fld('reg', L3(T.aReg[mk]), mk === 'fr' ? '812 345 678 00019' : '16/00-0123456B21')}${fld('tax', L3(T.aTax[mk]), mk === 'fr' ? 'FR12 812345678' : '000 016 012 345 678')}${fld('name', t('aName'), 'Camille Laurent')}${fld('mail', t('aMail'), 'name@company.com', 'email')}${fld('tel', t('aTel'), '+33 1 84 00 00 00', 'tel')}</div>
  <div><h2 class="t-6">${t('aDocs')}</h2><p class="mut mt-1 mb-4 t-3">${t('aDocsP')}</p><div class="stack g-3">${doc('kbis', L3(T.dReg[mk]), t('dRegH'))}${doc('pass', t('dPass'), t('dPassH'))}</div></div>
  <label class="chk"><input type="checkbox" data-a="aagree" ${a.agree ? 'checked' : ''}><span>${t('aAgree')}</span></label>
  <div class="row g-3"><button type="button" class="btn ${need.length ? 'off' : ''}" data-a="asend" ${need.length ? 'aria-disabled="true"' : ''}>${ic('send')}${t('aSend')}</button><button type="button" class="btn ghost" data-a="afill">${ic('edit')}${t('aFill')}</button></div>
  ${need.length ? `<p class="mut t-2">${t('aNeed', need.join(', ').replace(/, ([^,]*)$/, ' / $1'))}</p>` : ''}</form></div>
  <aside class="side"><div class="card pad"><h3 class="t-5 mb-3">${t('afterH')}</h3><ol class="stack t-3 g-3"><li>${t('af1')}${sm()}</li><li>${t('af2')}</li><li>${t('af3')}</li></ol></div><div class="card pad">${contactCard()}</div></aside></div></div>`;
};
A.adoc = (el) => { S.apply[el.dataset.k] = !S.apply[el.dataset.k]; render(false); };
A['aagree:change'] = (el) => { S.apply.agree = el.checked; render(false); };
A.afill = () => { Object.assign(S.apply, { v: Object.assign({}, SAMPLE_APPLY[S.market]), kbis: true, pass: true, agree: true, err: false }); render(false); };
A.asend = () => {
  const a = S.apply, e = applyErrs();
  if (Object.keys(e).length || !a.kbis || !a.pass || !a.agree) { a.err = true; render(false); const first = $('.field.err input'); if (first) first.focus(); return; }
  S.stage = 'pending'; S.just = true; location.hash = '#/pending';
};

/* ---------- Application received ---------- */
SCR.pending = () => {
  const mk = MARKETS[S.market];
  const steps = [0, 1, 2, 3].map((i) => `<li class="${i === 0 ? 'done' : i === 1 ? 'now' : 'nx'}" style="--i:${i}"><span class="dt">${i === 0 ? ic('check') : ''}</span><div><b>${L3(T.tk[i])}</b><p>${L3(T.tkP[i])}${i === 1 ? sm() : ''}</p></div><time>${['Tue 13 Oct', 'By Wed 14 Oct', '', ''][i]}</time></li>`).join('');
  return `<div class="wrap sec first"><div class="two"><div><div class="rise row top g-5"><span class="ok-ring">${ic('checkdraw')}</span><div><h1 class="pgh">${t('penH')}</h1><p class="mut mt-3 measure">${t('penP')}</p></div></div>
  <div class="card pad hasp mt-7">${pin('apply')}<ol class="lad reveal-in">${steps}</ol></div>
  <div class="row mt-6 g-3"><a class="btn" href="#/category">${ic('tag')}${t('browsePrices')}</a><button class="btn ghost" data-a="approve">${ic('eye')}${t('simApprove')}</button></div><p class="mut t-2 mt-2">${t('protoOnly')}</p></div>
  <aside class="side"><div class="card pad">${contactCard()}</div><div class="mail"><div class="mh"><b class="ink">${t('emailPrev')}</b><span>To: ${esc(mk.co)}</span><span>${t('penH')}</span></div><div class="mb"><p>${t('penP')}</p></div></div></aside></div></div>`;
};
A.approve = () => { setState('stage', 'approved'); toast(t('signedIn')); };
