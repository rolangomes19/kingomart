// Assembles src/ into one self-contained kingomart-prototype.html (fonts embedded as base64).
// Photos are not embedded: any file under img/ is listed in HAVE_IMG and referenced relatively
// (the compressed copy in img/_web/ when there is one),
// so the page shows designed placeholders until a photo exists, then the photo.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';

const r = spawnSync(process.execPath, ['src/check.mjs'], { stdio: 'inherit' });
if (r.status !== 0) { console.error('check.mjs failed; build stopped.'); process.exit(1); }

const read = (f) => fs.readFileSync(new URL('./src/' + f, import.meta.url), 'utf8');
const b64 = (f) => fs.readFileSync(new URL('./src/fonts/' + f, import.meta.url)).toString('base64');

const imgDir = new URL('./img/', import.meta.url);
const have = {};
const walk = (dir, rel) => {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const r2 = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) { if (e.name !== '_web') walk(new URL(e.name + '/', dir), r2); }
    else if (/\.(png|jpe?g|webp|avif|svg)$/i.test(e.name)) have[r2.replace(/\.[^.]+$/, '')] = 'img/' + r2;
  }
};
walk(imgDir, '');
// Prefer the compressed copy from tools/optimize-images.py (img/_web/<key>.webp) when it exists.
const stale = [];
for (const k of Object.keys(have)) {
  const copy = new URL('./_web/' + k + '.webp', imgDir);
  if (!fs.existsSync(copy)) continue;
  if (fs.statSync(copy).mtimeMs >= fs.statSync(new URL('./' + have[k].slice(4), imgDir)).mtimeMs) have[k] = 'img/_web/' + k + '.webp';
  else stale.push(k); // original replaced since the copy was made: use the original
}
if (stale.length) console.log('Photos newer than their compressed copy (run: python tools/optimize-images.py):', stale.join(', '));

const js = [`const HAVE_IMG = ${JSON.stringify(have)};`, ...['logic.js', 'data.js', 'app.js', 's-home.js', 's-catalogue.js', 's-order.js', 's-misc.js'].map(read)].join('\n');
new vm.Script(js, { filename: 'bundle.js' }); // syntax check
if (js.includes('</script>')) throw new Error('bundle contains </script>');

const fonts = [
  ['Geist', 'Geist.woff2', '400 700', ''],
  ['Geist Mono', 'Geist-Mono.woff2', '400 600', ''],
  ['Bricolage Grotesque', 'Bricolage.woff2', '200 800', 'font-stretch:75% 100%;']
].map(([n, f, w, x]) => `@font-face{font-family:'${n}';font-style:normal;font-weight:${w};${x}font-display:swap;src:url(data:font/woff2;base64,${b64(f)}) format('woff2')}`).join('');

const html = read('index.tpl.html').replace('/*FONTS*/', () => fonts).replace('/*CSS*/', () => read('styles.css')).replace('/*JS*/', () => js);
fs.writeFileSync(new URL('./kingomart-prototype.html', import.meta.url), html);
console.log('kingomart-prototype.html', (Buffer.byteLength(html) / 1024).toFixed(0) + ' KB', '·', Object.keys(have).length, 'photos found in img/');
