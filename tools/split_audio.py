#!/usr/bin/env python3
"""Split a batch TTS mp3 on silences into per-item clips.
usage: split_audio.py batch.mp3 outdir items.txt
items.txt: one item per line, optionally "name<TAB>units" where units is the
number of sentence-final pauses the item's audio contains (default 1).
Finds a threshold where segment count == total units, else merges via the
widest-gaps heuristic; then joins consecutive units per item."""
import subprocess, sys, re, os

src, outdir, itemsfile = sys.argv[1], sys.argv[2], sys.argv[3]
items = []
for l in open(itemsfile, encoding="utf-8"):
    l = l.strip()
    if not l: continue
    if "\t" in l:
        n, u = l.split("\t"); items.append((n, int(u)))
    else:
        items.append((l, 1))
total = sum(u for _, u in items)
os.makedirs(outdir, exist_ok=True)

def detect(noise, d):
    p = subprocess.run(["ffmpeg", "-i", src, "-af",
                        f"silencedetect=noise={noise}dB:d={d}", "-f", "null", "-"],
                       capture_output=True, text=True)
    log = p.stderr
    m = re.search(r"Duration: (\d+):(\d+):([\d.]+)", log)
    dur = int(m.group(1))*3600 + int(m.group(2))*60 + float(m.group(3)) if m else None
    sils = []
    for m in re.finditer(r"silence_start: ([\d.]+)|silence_end: ([\d.]+)", log):
        if m.group(1): sils.append(("s", float(m.group(1))))
        else: sils.append(("e", float(m.group(2))))
    segs, cur, i = [], 0.0, 0
    while i < len(sils):
        if sils[i][0] == "s":
            if sils[i][1] - cur > 0.05: segs.append((cur, sils[i][1]))
            if i+1 < len(sils) and sils[i+1][0] == "e": cur = sils[i+1][1]; i += 2
            else: cur = None; i += 1
        else: i += 1
    if cur is not None and dur and dur - cur > 0.05: segs.append((cur, dur))
    return segs, dur

best = None
for d in (0.30, 0.26, 0.22, 0.18, 0.15, 0.12, 0.10):
    for noise in (-35, -32, -38, -30, -40):
        segs, dur = detect(noise, d)
        if len(segs) == total: best = (segs, dur); break
    if best: break
if not best:
    segs, dur = detect(-35, 0.10)
    if len(segs) >= total:
        gaps = [(segs[i+1][0] - segs[i][1], i) for i in range(len(segs)-1)]
        cuts = sorted(sorted(gaps, reverse=True)[:total-1], key=lambda g: g[1])
        merged, start, ci = [], segs[0][0], [c[1] for c in cuts]
        for i in range(len(segs)):
            if i in ci: merged.append((start, segs[i][1])); start = segs[i+1][0]
        merged.append((start, segs[-1][1]))
        best = (merged, dur)
    else:
        print(f"MISMATCH {os.path.basename(src)}: {len(segs)} segs vs {total} units")
        sys.exit(2)

segs, dur = best
idx = 0
for name, units in items:
    a = max(0, segs[idx][0] - 0.06)
    b = min(dur or segs[idx+units-1][1] + 0.12, segs[idx+units-1][1] + 0.12)
    subprocess.run(["ffmpeg", "-y", "-i", src, "-ss", f"{a:.3f}", "-to", f"{b:.3f}",
                    "-c:a", "libmp3lame", "-b:a", "64k",
                    os.path.join(outdir, name + ".mp3")], capture_output=True)
    idx += units
print(f"OK {os.path.basename(src)}: {len(items)} clips / {total} units")
