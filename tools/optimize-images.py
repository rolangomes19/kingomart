"""Make light WebP copies of the photos in img/ for the prototype. Originals are never changed.

Run from the project root:  python tools/optimize-images.py
Output goes to img/_web/<same path>.webp. build.mjs uses a copy when one exists, else the original.
Re-run after adding or replacing photos (a copy is rebuilt when its original is newer).
"""
import os
import sys
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'img')
OUT = os.path.join(ROOT, '_web')
EXTS = ('.png', '.jpg', '.jpeg', '.webp')
# Longest side in px and WebP quality. Product cut-outs show at most ~600px wide (product page gallery at 2x is the largest).
RULES = {'p': (900, 82), 'team': (400, 80), 'default': (1800, 78)}


def rule(rel):
    return RULES.get(rel.split(os.sep)[0], RULES['default'])


def main():
    before = after = 0
    for dirpath, dirnames, files in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d != '_web']
        for name in files:
            if not name.lower().endswith(EXTS):
                continue
            src = os.path.join(dirpath, name)
            rel = os.path.relpath(src, ROOT)
            dst = os.path.join(OUT, os.path.splitext(rel)[0] + '.webp')
            if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
                before += os.path.getsize(src); after += os.path.getsize(dst)
                continue
            size, q = rule(rel)
            im = Image.open(src)
            im = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB')
            im.thumbnail((size, size), Image.LANCZOS)  # never upscales
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            im.save(dst, 'WEBP', quality=q, method=6)
            b, a = os.path.getsize(src), os.path.getsize(dst)
            if a >= b:  # already lighter than any copy: drop the copy, the build uses the original
                os.remove(dst)
                before += b; after += b
                print(f'{rel:28} {b // 1024:6} KB    kept original')
                continue
            before += b; after += a
            print(f'{rel:28} {b // 1024:6} KB -> {a // 1024:5} KB  {im.size[0]}x{im.size[1]}')
    if before:
        print(f'total {before // 1024} KB -> {after // 1024} KB ({100 - after * 100 // before}% smaller)')


if __name__ == '__main__':
    sys.exit(main())
