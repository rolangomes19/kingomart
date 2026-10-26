// Tiny static server for previewing the built file (hash routing needs a real URL). Also serves img/.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const TYPES = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.svg': 'image/svg+xml' };
http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  if (p.startsWith('/img/')) {
    const f = path.join(root, path.normalize(p).replace(/^[\\/]+/, ''));
    if (!f.startsWith(path.join(root, 'img')) || !fs.existsSync(f)) { res.writeHead(404); res.end(); return; } // no path escapes
    res.writeHead(200, { 'content-type': TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
    return;
  }
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(path.join(root, 'kingomart-prototype.html')));
}).listen(process.env.PORT || 5173, () => console.log("http://localhost:" + (process.env.PORT || 5173)));
