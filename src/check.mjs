// Assert self-check for the pure logic. Run by build.mjs; the build fails if anything here fails.
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
const KM = createRequire(import.meta.url)('./logic.js');

const tiers = [{ min: 1, price: 11.4 }, { min: 2, price: 10.9 }, { min: 4, price: 10.45 }, { min: 9, price: 10.05 }];
assert.equal(KM.tierFor(tiers, 1).price, 11.4);
assert.equal(KM.tierFor(tiers, 3).price, 10.9);
assert.equal(KM.tierFor(tiers, 4).price, 10.45);
assert.equal(KM.tierFor(tiers, 12).price, 10.05);

// Landed estimate: invoice must equal goods plus freight (3 pallets of La Blanche on KM-0412).
const c = KM.calc({ shape: 'pallet', pc: 45, tiers }, 3, { rate: 84 });
assert.equal(c.cases, 135);
assert.equal(c.goods, 1471.5);
assert.equal(c.freight, 252);
assert.equal(c.invoice, c.goods + c.freight);

// Container lot: 2 x 19 t at 3420 per tonne plus 2 x 2900 freight.
const l = KM.calc({ shape: 'lot', tonnes: 19, ppt: 3420 }, 2, { rate: 2900 });
assert.equal(l.goods, 129960);
assert.equal(l.invoice, 129960 + 5800);

// Support hours: 09:00-17:00 Dubai is 06:00-14:00 in Algiers (UTC+1).
assert.deepEqual(KM.hours('Africa/Algiers', 'en'), ['06:00', '14:00']);
assert.deepEqual(KM.hours('Europe/Paris', 'fr'), ['07:00', '15:00']);

// Formatting in all three languages, both currencies.
assert.match(KM.money(11.4, 'en', 'EUR'), /11\.40/);
assert.match(KM.money(11.4, 'fr', 'EUR'), /11,40/);
assert.match(KM.money(100, 'ar', 'USD'), /108\.00/);
assert.match(KM.date(10, 21, 'en'), /21/);

console.log('check.mjs: all asserts passed');
