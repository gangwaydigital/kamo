#!/usr/bin/env python3
"""White-background -> transparent PNG chroma key + resize.
usage: keyout.py in.png out.png maxsize"""
import sys
from PIL import Image

src, dst, size = sys.argv[1], sys.argv[2], int(sys.argv[3])
im = Image.open(src).convert("RGBA")
px = im.load()
W, H = im.size
for y in range(H):
    for x in range(W):
        r, g, b, a = px[x, y]
        lo = min(r, g, b)
        if lo > 238:
            px[x, y] = (r, g, b, 0)
        elif lo > 210:                     # soft ramp to avoid hard halos
            px[x, y] = (r, g, b, int(255 * (238 - lo) / 28))
im.thumbnail((size, size), Image.LANCZOS)
im.save(dst, "PNG", optimize=True)
print(dst, im.size)
