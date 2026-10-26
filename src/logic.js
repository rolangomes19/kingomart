/* Pure helpers shared by the app and check.mjs. No DOM access here. */
const KM = {
  rate: 1.08,
  IX: { en: 0, fr: 1, ar: 2 },
  LOC: { en: 'en-GB', fr: 'fr-FR', ar: 'ar-u-nu-latn' },
  r2: (n) => Math.round(n * 100) / 100,
  conv(n, cur) { return cur === 'USD' ? KM.r2(n * KM.rate) : n; },
  money(n, lang, cur) {
    return new Intl.NumberFormat(KM.LOC[lang], { style: 'currency', currency: cur }).format(KM.conv(n, cur));
  },
  num: (n, lang) => new Intl.NumberFormat(KM.LOC[lang]).format(n),
  date(m, d, lang) {
    const p = new Intl.DateTimeFormat(KM.LOC[lang], { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' })
      .formatToParts(new Date(Date.UTC(2026, m - 1, d, 12)));
    const g = (t) => (p.find((x) => x.type === t) || {}).value || '';
    return g('weekday') + ' ' + g('day') + ' ' + g('month');
  },
  tierFor(tiers, p) { let x = tiers[0]; tiers.forEach((y) => { if (p >= y.min) x = y; }); return x; },
  /* One order line: product + quantity (pallets, or containers for a lot) + departure. */
  calc(pr, qty, dep) {
    if (pr.shape === 'lot') {
      const goods = KM.r2(qty * pr.tonnes * pr.ppt);
      const freight = KM.r2(qty * dep.rate);
      return { goods, freight, invoice: KM.r2(goods + freight), unit: pr.ppt, cases: 0 };
    }
    const tier = KM.tierFor(pr.tiers, qty);
    const cases = qty * pr.pc;
    const goods = KM.r2(cases * tier.price);
    const freight = KM.r2(qty * dep.rate);
    return { goods, freight, invoice: KM.r2(goods + freight), unit: tier.price, cases };
  },
  /* Support runs Mon-Fri 09:00-17:00 Dubai (UTC+4). Returns the same window in the buyer's time zone. */
  hours(tz, lang) {
    const f = (h) => new Intl.DateTimeFormat(KM.LOC[lang], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: tz })
      .format(new Date(Date.UTC(2026, 9, 19, h - 4, 0)));
    return [f(9), f(17)];
  }
};
if (typeof module !== 'undefined') module.exports = KM;
