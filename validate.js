// node validate.js — data integrity check (run after editing data.js/quests.js)
const fs = require("fs"), vm = require("vm");
const ctx = { window:{}, document:null };
vm.createContext(ctx);
for (const f of ["data.js","quests.js"])
  vm.runInContext(fs.readFileSync(__dirname+"/"+f,"utf8"), ctx, {filename:f});
const {KANA,VOCAB,KANJI,GRAMMAR,UI,NPCS,MAPS,QUESTS,GQUIZ,CHAPTERS,CHAPTER_MAP} =
  vm.runInContext("({KANA,VOCAB,KANJI,GRAMMAR,UI,NPCS,MAPS,QUESTS,GQUIZ,CHAPTERS,CHAPTER_MAP})", ctx);

let errs=[], warns=[];
const has = id => KANA[id]||VOCAB[id]||KANJI[id]||GRAMMAR[id];

// 1. quest step items exist
for (const q of QUESTS){
  if (!NPCS[q.npc]) errs.push(`${q.id}: unknown npc ${q.npc}`);
  for (const s of q.steps){
    if (s.t==="learn") for (const it of s.items){
      const tbl = {kana:KANA,vocab:VOCAB,kanji:KANJI,grammar:GRAMMAR}[s.kind];
      if (!tbl[it]) errs.push(`${q.id}: unknown ${s.kind} item ${JSON.stringify(it)}`);
    }
    if (s.t==="quiz" && s.items) for (const it of s.items)
      if (!has(it)) errs.push(`${q.id}: unknown quiz item ${it}`);
  }
  // ch>=6: no English allowed anywhere
  if (q.ch>=6){
    for (const lines of [q.intro||[], q.outro||[]])
      for (const [sp,en,jp] of lines)
        if (en!=null && jp==null) errs.push(`${q.id}: ch${q.ch} line has English only: ${String(en).slice(0,30)}`);
    if (q.title[0]!=null) warns.push(`${q.id}: ch${q.ch} has an English title (never shown at stage 3, ok)`);
  }
}
// 2. kanji example words exist
for (const [c,kj] of Object.entries(KANJI))
  if (kj.ex && !VOCAB[kj.ex]) errs.push(`KANJI ${c}: example vocab ${kj.ex} missing`);
// 3. {tokens} in all dialogue reference vocab
const tokRe = /\{([^}]+)\}/g;
for (const q of QUESTS)
  for (const lines of [q.intro||[], q.outro||[]])
    for (const [sp,en,jp] of lines)
      for (const txt of [en,jp]) if (txt)
        for (const m of String(txt).matchAll(tokRe))
          if (!VOCAB[m[1]]) errs.push(`${q.id}: token {${m[1]}} not in VOCAB`);
// 4. GQUIZ refs + every grammar has quiz items
for (const gq of GQUIZ){
  if (!GRAMMAR[gq.g]) errs.push(`GQUIZ: unknown grammar ${gq.g}`);
  if (gq.a<0 || gq.a>=gq.opts.length) errs.push(`GQUIZ ${gq.g}: bad answer index`);
}
for (const g of Object.keys(GRAMMAR))
  if (!GQUIZ.some(x=>x.g===g)) errs.push(`GRAMMAR ${g}: no GQUIZ entries`);
// 5. all grammar & vocab taught by some quest
const taught = new Set();
for (const q of QUESTS) for (const s of q.steps) if (s.t==="learn") s.items.forEach(i=>taught.add(i));
for (const g of Object.keys(GRAMMAR)) if (!taught.has(g)) errs.push(`GRAMMAR ${g}: never taught`);
const untaughtV = Object.keys(VOCAB).filter(v=>!taught.has(v));
if (untaughtV.length) warns.push(`vocab never taught by quests (${untaughtV.length}): ${untaughtV.join("、")}`);
const untaughtK = Object.keys(KANJI).filter(k=>!taught.has(k));
if (untaughtK.length) warns.push(`kanji never taught (${untaughtK.length}): ${untaughtK.join("")}`);
// 6. maps: rows consistent, legend valid, start walkable, npcs of chapter present
for (const [mid,m] of Object.entries(MAPS)){
  const w = Array.from(m.grid[0]).length;
  m.grid.forEach((r,y)=>{ if (Array.from(r).length!==w) errs.push(`MAP ${mid} row ${y}: width ${Array.from(r).length} != ${w}`); });
  for (const [c,leg] of Object.entries(m.legend)){
    if (typeof leg==="string" && !NPCS[leg]) errs.push(`MAP ${mid}: legend ${c} -> unknown npc ${leg}`);
    if (leg.door && !MAPS[leg.door]) errs.push(`MAP ${mid}: door ${c} -> unknown map ${leg.door}`);
    if (!m.grid.some(r=>Array.from(r).includes(c))) errs.push(`MAP ${mid}: legend char ${c} not in grid`);
  }
  const sc = Array.from(m.grid[m.start[1]])[m.start[0]];
  if (sc!=="."&&sc!==",") errs.push(`MAP ${mid}: start [${m.start}] is on '${sc}'`);
}
// 7. each quest's npc stands on that chapter's map
for (const q of QUESTS){
  const mid = CHAPTER_MAP[q.ch]; const m = MAPS[mid];
  const chars = Object.entries(m.legend).filter(([c,l])=>l===q.npc).map(([c])=>c);
  if (!chars.length) errs.push(`${q.id}: npc ${q.npc} not on map ${mid}`);
}
// 8. door chain: each chapter's map reachable
for (let ch=2; ch<=8; ch++){
  const prev=CHAPTER_MAP[ch-1], cur=CHAPTER_MAP[ch];
  if (prev===cur) continue;
  const found = Object.values(MAPS[prev].legend).some(l=>l.door===cur);
  if (!found) errs.push(`no door from ${prev} to ${cur} (ch${ch})`);
}
// 9. no romaji leak: kana/vocab jp fields, GQUIZ, jp dialogue must not contain a-z
const latin = /[A-Za-z]/;
for (const v of Object.values(VOCAB)) if (latin.test(v.jp)) errs.push(`VOCAB ${v.jp}: latin in jp`);
for (const gq of GQUIZ) if (latin.test(gq.q)||gq.opts.some(o=>latin.test(o))) errs.push(`GQUIZ ${gq.g}: latin chars in question`);
for (const q of QUESTS) if (q.ch>=6)
  for (const lines of [q.intro||[], q.outro||[]])
    for (const [sp,en,jp] of lines){
      const t = jp ?? en;
      if (t && latin.test(String(t).replace(/<[^>]+>/g,""))) errs.push(`${q.id}: latin chars in ch${q.ch} dialogue: ${String(t).slice(0,40)}`);
    }

console.log(`vocab: ${Object.keys(VOCAB).length}  kanji: ${Object.keys(KANJI).length}  grammar: ${Object.keys(GRAMMAR).length}  kana: ${Object.keys(KANA).length}  quests: ${QUESTS.length}  gquiz: ${GQUIZ.length}`);
warns.forEach(w=>console.log("WARN:", w));
errs.forEach(e=>console.log("ERR: ", e));
console.log(errs.length ? `\n${errs.length} ERRORS` : "\nOK ✅");
process.exit(errs.length?1:0);
