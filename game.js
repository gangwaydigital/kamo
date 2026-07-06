// ============================================================
// カモのことだまクエスト — engine
// ============================================================
"use strict";
const app = document.getElementById("app");

// ---------- tiny helpers ----------
function el(html){ const d=document.createElement("div"); d.innerHTML=html; return d.firstElementChild; }
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function rnd(a){ return a[Math.floor(Math.random()*a.length)]; }
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;"); }

// extra UI strings
Object.assign(UI, {
  whichsound:["🔊 Which kana makes this sound?","🔊 どの かな の おと？"],
  whichhint:["Which kana matches this description?","せつめいに あう かなは？"],
  hintof:["What sound does this kana make?","この かなの おとは？"],
  twinof:["Which hiragana is the twin of this katakana?","この カタカナの ひらがなは？"],
  twinof2:["Which katakana is the twin of this hiragana?","この ひらがなの カタカナは？"],
  whichjp:["Which word means…","この いみの ことばは？"],
  whichmeaning:["What does this word mean?","この ことばの いみは？"],
  readof:["How do you read this?","なんと よみますか？"],
  typeread:["Type the reading!","よみかたを かいてください！"],
  whichreading:["Which is the correct reading?","ただしい よみかたは？"],
  fillblank:["Fill in the blank!","＿＿に なにが はいる？"],
  begin:["Begin!","スタート！"],
  card:["Card","カード"],
  newkanji:["New kanji!","あたらしい【漢字|かんじ】！"],
  newgrammar:["New grammar!","あたらしい【文法|ぶんぽう】！"],
  examples:["Examples","れいぶん"],
  readings:["Readings","よみかた"],
  meaning:["Meaning","いみ"],
  example:["Example word","れいの ことば"],
  masterynote:["Get a word right 3 times and its English vanishes forever — the kotodama way!",
               "3かい せいかいすると、えいごが きえるよ！"],
  bosswarn:["BOSS BATTLE","ボスバトル"],
  smallnote:["small","ちいさい"],
  questdone:["QUEST COMPLETE!","クエスト かんりょう！"],
  chapterup:["CHAPTER CLEAR!","【章|しょう】クリア！"],
  n5note:["N5 PASSED! From now on… にほんごだけ！","N5 ごうかく！これからは にほんごだけ！"],
  wordslearned:["words learned","おぼえた ことば"],
  kanjilearned:["kanji learned","おぼえた【漢字|かんじ】"],
  overwrite:["Overwrite?","うわがきしますか？"],
});

// ---------- audio ----------
let jaVoice = null;
function pickVoice(){
  const vs = speechSynthesis.getVoices();
  jaVoice = vs.find(v=>v.lang.startsWith("ja") && v.name.includes("Kyoko")) ||
            vs.find(v=>v.lang.startsWith("ja")) || null;
}
if (window.speechSynthesis){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
let _clip = null;
function audioFileFor(text){
  // recorded clips exist for all kana sounds, vocab words, kanji readings
  // and grammar example sentences; a miss 404s and falls back to synthesis
  const s = text.trim();
  if (typeof SENT_AUDIO!=="undefined" && SENT_AUDIO[sentKey(s)]) return SENT_AUDIO[sentKey(s)];
  if (s && s!=="っ" && s!=="ー" && /^[ぁ-ゖァ-ヺー]+$/.test(s) && s.length<=8)
    // clips use ASCII hex-codepoint names (kana filenames break many upload tools)
    return "assets/audio/"+[...s].map(c=>c.codePointAt(0).toString(16)).join("-")+".mp3";
  return null;
}
// clip playback: over http(s) use WebAudio through BGM's context — one tap
// unlocks it for the whole session (mobile Safari/Chrome autoplay rules
// block fresh <audio> elements outside gestures). file:// can't fetch, so
// it keeps the <audio> element path.
const CLIP_CACHE = {};
let _clipNode = null;
function playClipBuffer(buf){
  try{ if (_clipNode) _clipNode.stop(); }catch(e){}
  const src = BGM.ctx.createBufferSource(); src.buffer = buf;
  src.connect(BGM.ctx.destination); // full volume, independent of music gain
  _clipNode = src; src.start();
}
function playClip(f, plain){
  if (location.protocol.startsWith("http") && BGM.ensureCtx()){
    if (BGM.ctx.state==="suspended") BGM.ctx.resume();
    if (CLIP_CACHE[f]){ playClipBuffer(CLIP_CACHE[f]); return; }
    fetch(f).then(r=>{ if(!r.ok) throw 0; return r.arrayBuffer(); })
      .then(ab=>BGM.ctx.decodeAudioData(ab))
      .then(buf=>{
        const keys = Object.keys(CLIP_CACHE);
        if (keys.length > 80) delete CLIP_CACHE[keys[0]]; // bound memory
        CLIP_CACHE[f]=buf; playClipBuffer(buf);
      })
      .catch(()=>synthSpeak(plain));
    return;
  }
  if (_clip){ _clip.pause(); }
  const a = new Audio(f); _clip = a;
  a.onerror = ()=>synthSpeak(plain);
  a.play().catch(()=>{});
}
function speak(text){
  if (!G || !G.settings.audio) return;
  const plain = text.replace(/\{([^}]+)\}/g,"$1").replace(/【[^|】]+\|([^】]+)】/g,"$1")
                    .replace(/<[^>]+>/g,"").replace(/[＿_]/g,"　");
  const f = audioFileFor(plain.trim());
  if (f){ playClip(f, plain); return; } // recorded audio first, synth fallback
  synthSpeak(plain);
}
function synthSpeak(plain){
  if (!window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(plain);
  u.lang = "ja-JP"; if (jaVoice) u.voice = jaVoice; u.rate = 0.85;
  _utter = u; // GC guard: Chrome drops utterances that get collected while queued
  speechSynthesis.cancel();
  // Chrome/macOS wedges its speech engine after cancel storms; the
  // pause()/resume() dance un-wedges it, and a watchdog retries once if the
  // utterance is silently dropped anyway.
  setTimeout(()=>{
    speechSynthesis.pause(); speechSynthesis.resume();
    speechSynthesis.speak(u);
    setTimeout(()=>{
      if (_utter===u && !speechSynthesis.speaking && !speechSynthesis.pending){
        speechSynthesis.cancel();
        speechSynthesis.pause(); speechSynthesis.resume();
        speechSynthesis.speak(u);
      }
    }, 450);
  }, 80);
}
let _utter = null;
let actx=null;
function sfx(good){
  try{
    actx = actx || new (window.AudioContext||window.webkitAudioContext)();
    const t=actx.currentTime;
    const freqs = good ? [660,880] : [220,160];
    freqs.forEach((f,i)=>{
      const o=actx.createOscillator(), g=actx.createGain();
      o.frequency.value=f; o.type="triangle";
      g.gain.setValueAtTime(0.12,t+i*0.09); g.gain.exponentialRampToValueAtTime(0.001,t+i*0.09+0.15);
      o.connect(g); g.connect(actx.destination); o.start(t+i*0.09); o.stop(t+i*0.09+0.16);
    });
  }catch(e){}
}

// ---------- state ----------
let G = null;
let sessionStart = Date.now();
function newState(){
  return { hp:30, maxhp:30, xp:0, level:1, gold:0, ch:1,
    map:"shore", x:MAPS.shore.start[0], y:MAPS.shore.start[1],
    mastery:{}, quests:{}, time:0, n5:false, ended:false,
    settings:{furigana:true, audio:true, music:true} };
}
function stage(){ return G ? (CHAPTERS[G.ch]||{stage:3}).stage : 0; }
function introduced(id){ return G && id in G.mastery; }
function mlvl(id){ return (G && G.mastery[id]) || 0; }
function mastered(id){ return mlvl(id) >= 3; }
function bump(id, good){
  if (!(id in G.mastery)) G.mastery[id]=1;
  else G.mastery[id] = Math.max(1, Math.min(5, G.mastery[id] + (good?1:-1)));
}

// ---------- text rendering ----------
function rubyHtml(k,f){
  return "<ruby>"+esc(k)+(G && G.settings.furigana ? "<rt>"+esc(f)+"</rt>" : "<rt></rt>")+"</ruby>";
}
function wordHtml(v){
  if (v.kj && stage()>=1) return mastered(v.jp) && stage()>=3 ? esc(v.kj) : rubyHtml(v.kj, v.jp);
  return esc(v.jp);
}
function T(str){
  if (str==null) return "";
  let s = String(str);
  s = s.replace(/\{([^}]+)\}/g,(m,id)=>{
    const v=VOCAB[id]; if(!v) return esc(id);
    return introduced(id) ? wordHtml(v) : esc(v.en);
  });
  s = s.replace(/【([^|】]+)\|([^】]+)】/g,(m,k,f)=>rubyHtml(k,f));
  return s;
}
function L(key){
  const pair = UI[key]; if(!pair) return key;
  const st = stage();
  if (st<=0) return T(pair[0]);
  if (st===1) return T(pair[1])+' <span class="jp-sub">'+esc(pair[0])+"</span>";
  return T(pair[1]);
}
function Lp(key){ // plain: no sub annotation (for buttons)
  const pair = UI[key]; if(!pair) return key;
  return stage()<=0 ? T(pair[0]) : T(pair[1]);
}
function npcName(id){
  const n=NPCS[id].name;
  return stage()>=2 || n[0]==null ? T(n[1]) : esc(n[0]);
}
function pickLang(en,jp){
  const st=stage();
  if (en==null) return {main:T(jp), sub:null};
  if (st<=0) return {main:T(en), sub:null};
  if (st===1) return {main:T(en), sub: jp? T(jp) : null};
  if (st===2) return {main: jp? T(jp) : T(en), sub: jp? esc(stripTokens(en)) : null};
  return {main: jp? T(jp) : T(en), sub:null};
}
function stripTokens(s){ return String(s).replace(/\{([^}]+)\}/g,(m,id)=>VOCAB[id]?VOCAB[id].en:id).replace(/【([^|】]+)\|[^】]+】/g,"$1"); }

// ---------- save / load ----------
const SLOTKEY = i => "kamoquest_slot"+i;
function saveTo(i){
  G.time += Math.floor((Date.now()-sessionStart)/1000); sessionStart = Date.now();
  localStorage.setItem(SLOTKEY(i), JSON.stringify({g:G, at:Date.now()}));
}
function loadFrom(i){
  const raw = localStorage.getItem(SLOTKEY(i)); if(!raw) return false;
  try{ const d=JSON.parse(raw); G = Object.assign(newState(), d.g);
       G.settings = Object.assign({furigana:true,audio:true}, G.settings);
       activeQuest = null; stepIdx = 0;
       // content updates: if this chapter is fully cleared, roll into the next
       while (CHAPTERS[G.ch+1] && QUESTS.filter(q=>q.ch===G.ch).every(q=>G.quests[q.id])){
         G.ch++; G.ended = false;
         G.map = CHAPTER_MAP[G.ch]; G.x = MAPS[G.map].start[0]; G.y = MAPS[G.map].start[1];
       }
       sessionStart = Date.now(); return true; }
  catch(e){ return false; }
}
function slotInfo(i){
  const raw = localStorage.getItem(SLOTKEY(i)); if(!raw) return null;
  try{ const d=JSON.parse(raw);
    return {ch:d.g.ch, level:d.g.level, words:Object.keys(d.g.mastery).length,
            time:d.g.time, at:new Date(d.at).toLocaleString()}; }
  catch(e){ return null; }
}
function fmtTime(s){ const h=Math.floor(s/3600), m=Math.floor(s%3600/60); return h+":"+String(m).padStart(2,"0"); }

// ---------- HUD ----------
function hudHtml(){
  const need = xpNeed();
  return `<div id="hud">
    <span class="stat">🦆 <b>${Lp("level")} ${G.level}</b></span>
    <span class="stat">❤️ <span class="bar"><div class="hpfill" style="width:${100*G.hp/G.maxhp}%"></div></span></span>
    <span class="stat">✨ <span class="bar"><div class="xpfill" style="width:${100*G.xp/need}%"></div></span></span>
    <span class="stat">🪙 ${G.gold}</span>
    <span class="spacer"></span>
    <span class="stat dim">${T((CHAPTERS[G.ch]||CHAPTERS[8]).title[stage()>=2?1:0] ?? (CHAPTERS[G.ch]||CHAPTERS[8]).title[1])}</span>
    <button id="musicbtn" style="padding:.2em .7em">${G.settings.music!==false?"🎵":"🔇"}</button>
    <button id="pausebtn" style="padding:.2em .7em">☰</button>
  </div>`;
}
function xpNeed(){ return 80 + G.level*40; }
function gainXp(n){
  G.xp += n;
  let leveled=false;
  while (G.xp >= xpNeed()){ G.xp -= xpNeed(); G.level++; G.maxhp += 10; G.hp = G.maxhp; leveled=true; }
  if (leveled) toast("🎉 "+Lp("levelup")+" "+Lp("level")+" "+G.level);
}
function stageBgStyle(dark){
  const bg = G && (LOCBG[G.map] || asset("scenes","ch"+G.ch));
  if (!bg) return "";
  const a = dark||0.9;
  return ` style="background-image:linear-gradient(rgba(13,15,26,${a}),rgba(13,15,26,${a+0.03})),url('${bg}');background-size:cover;background-position:center"`;
}
function toast(html, ms){
  const t = el(`<div class="toast">${html}</div>`);
  // defer one tick: callers re-render app.innerHTML in the same tick,
  // which would wipe the toast before it's ever seen
  setTimeout(()=>{ app.appendChild(t); setTimeout(()=>t.remove(), ms||2200); }, 30);
}

// ---------- scene plumbing ----------
let scene = "title";
let keyHandler = null;
document.addEventListener("keydown", e=>{
  if (keyHandler) keyHandler(e);
});
// scale the fixed 960x680 frame to FILL the viewport — up on big screens,
// down on small ones, always preserving aspect
function fitApp(){
  const s = Math.min(window.innerWidth/966, window.innerHeight/686);
  app.style.transform = `scale(${s})`;
}
window.addEventListener("resize", fitApp); fitApp();
// offline play (https/localhost only — file:// has no service workers)
if ("serviceWorker" in navigator && location.protocol.startsWith("http"))
  navigator.serviceWorker.register("sw.js").catch(()=>{});
// touch d-pad — delegated, present only on the map scene
document.addEventListener("click", e=>{
  const b = e.target.closest(".dpad [data-d]");
  if (!b || scene!=="map") return;
  const [dx,dy] = b.dataset.d.split(",").map(Number);
  if (dx>0) G.face="r"; else if (dx<0) G.face="l";
  tryMove(dx,dy);
}, true);
// music toggle lives in the HUD of every scene — one delegated listener
document.addEventListener("click", e=>{
  const b = e.target.closest("#musicbtn");
  if (!b || !G) return;
  e.stopPropagation();
  G.settings.music = G.settings.music===false;
  BGM.setVol();
  b.textContent = G.settings.music!==false ? "🎵" : "🔇";
}, true);

// ---------- title ----------
function showTitle(){
  scene="title"; keyHandler=null;
  BGM.play("title");
  const has = [1,2,3,0].some(i=>slotInfo(i));
  const bg = asset("scenes","title");
  const vid = asset("scenes","title_video");
  app.innerHTML = `<div class="title-screen" ${bg?`style="background-image:linear-gradient(rgba(10,12,26,.45),rgba(10,12,26,.8)),url('${bg}');background-size:cover;background-position:center"`:""}>
    ${vid?`<video class="title-video" autoplay muted loop playsinline src="${vid}" onerror="this.remove()"></video><div class="title-scrim"></div>`:""}
    ${bg?"":'<div class="title-duck">🦆</div>'}
    <div class="title-main">カモのことだまクエスト</div>
    <div class="title-sub">Kamo's Kotodama Quest — ゼロから N2 への RPG</div>
    <div class="title-menu">
      <button class="primary" id="newbtn">はじめから <span class="jp-sub">New Game</span></button>
      <button id="contbtn" ${has?"":"disabled"}>つづきから <span class="jp-sub">Continue</span></button>
    </div>
    <div class="title-sub" style="margin-top:14px">ことばは、たびの つばさ。</div>
  </div>`;
  document.getElementById("newbtn").onclick = ()=>{
    G = newState(); sessionStart=Date.now();
    runDialogue([
      [null,"A storm. A long fall. Cold, cold water…\nWhen you wake, the island is quiet. Far too quiet.",null],
      [null,"You are カモ — a little duck blown in from a faraway land. You open your beak to quack hello…\n…but nothing comes out.",null],
    ], ()=>runDialogue([
      [null,"On this island, words are living spirits — <b>ことだま</b>. A creeping Silence has stolen every one of them, including yours.",null],
      [null,"To fly home, you must gather the word-spirits back… one sound, one word, one story at a time. 🦆✨",null],
    ], ()=>showMap(), asset("scenes","ch1")), asset("scenes","opening"));
  };
  document.getElementById("contbtn").onclick = ()=>showSlots("load", showTitle);
}

// ---------- map ----------
function mapDef(){ return MAPS[G.map]; }
function cellAt(m,x,y){
  const row = Array.from(m.grid[y]||""); return row[x] || "#";
}
const CELL = 38;
function spriteImg(src, fallback, cls, flip){
  if (!src) return esc(fallback);
  return `<img class="sprite ${cls}${flip?" flip":""}" src="${src}" data-f="${esc(fallback)}" onerror="this.replaceWith(this.dataset.f)">`;
}
function showMap(){
  scene="map";
  BGM.play(BGM.MAPTRACK[G.map]||"field1");
  const m = mapDef();
  const art = MAPART[G.map] || {props:{}};
  const rows = m.grid.map(r=>Array.from(r));
  const mbg = MAP_BG[G.map] ? ` style="background:${MAP_BG[G.map]}"` : "";
  const gstyle = `grid-template-columns:repeat(${rows[0].length},${CELL}px);` +
    (art.ground ? `background-image:url('${art.ground}');background-size:${CELL*4}px;` : "");
  let html = hudHtml() + `<div id="stage"><div class="map-wrap"${mbg}><div class="map-grid" style="${gstyle}">`;
  for (let y=0;y<rows.length;y++){
    for (let x=0;x<rows[y].length;x++){
      const c = rows[y][x];
      let inner = "", extra = "";
      if (x===G.x && y===G.y)
        inner = spriteImg(CHARS.kamo, "🦆", "chr", G.face==="r");
      else if (m.legend[c] && typeof m.legend[c]==="string"){
        const npc = m.legend[c];
        const q = questFor(npc) ? '<span class="q">❗</span>' : "";
        inner = spriteImg(CHARS[npc], NPCS[npc].emoji, "chr") + q;
      }
      else if (m.legend[c])
        inner = spriteImg(m.legend[c].needCh ? DOOR_ART.fwd : DOOR_ART.back, "🚪", "prop");
      else if (c==="~")
        extra = `<div class="wtr" style="background-image:url('${WATER_TEX}');background-position:${-x*CELL}px ${-y*CELL}px;animation-delay:${((x+y)%7)*0.45}s"></div>`;
      else if (art.props[c])
        inner = spriteImg(art.props[c], m.tiles[c]||c, c==="," ? "deco":"prop", (x+y)%2===1);
      else if (c==="."||c===",") inner = m.tiles[c]||"";
      else inner = m.tiles[c]!==undefined ? m.tiles[c] : c;
      html += `<div class="map-cell">${extra}${inner}</div>`;
    }
  }
  html += `</div></div>
    <div class="map-name">${m.name[0] && stage()<2 ? esc(m.name[0]) : T(m.name[1])}</div>
    <div class="map-hint">${L("moves")}</div>
    <div class="dpad"><button data-d="0,-1">▲</button>
      <div class="row"><button data-d="-1,0">◀</button><button data-d="1,0">▶</button></div>
      <button data-d="0,1">▼</button></div></div>`;
  app.innerHTML = html;
  document.getElementById("pausebtn").onclick = showPause;
  keyHandler = mapKeys;
}
function mapKeys(e){
  if (scene!=="map") return;
  const k=e.key.toLowerCase();
  let dx=0, dy=0;
  if (k==="arrowup"||k==="w") dy=-1;
  else if (k==="arrowdown"||k==="s") dy=1;
  else if (k==="arrowleft"||k==="a") dx=-1;
  else if (k==="arrowright"||k==="d") dx=1;
  else if (k==="escape"){ showPause(); return; }
  else return;
  e.preventDefault();
  if (dx>0) G.face="r"; else if (dx<0) G.face="l";
  tryMove(dx,dy);
}
function tryMove(dx,dy){
  const m=mapDef(); const nx=G.x+dx, ny=G.y+dy;
  const c = cellAt(m,nx,ny);
  const leg = m.legend[c];
  if (leg && typeof leg==="string"){ talk(leg); return; }
  if (leg && leg.door){
    if (leg.needCh && G.ch < leg.needCh){ toast(L("needquest")); return; }
    G.map = leg.door; G.x = leg.to[0]; G.y = leg.to[1];
    showMap(); return;
  }
  if (c==="."||c===","){ G.x=nx; G.y=ny; showMap(); }
}

// ---------- quests ----------
function questFor(npc){
  const chQuests = QUESTS.filter(q=>q.ch===G.ch);
  for (const q of chQuests){
    if (G.quests[q.id]) continue;
    const idx = chQuests.indexOf(q);
    const prevDone = chQuests.slice(0,idx).every(p=>G.quests[p.id]);
    if (!prevDone) break;
    return q.npc===npc ? q : null; // only the next quest in order is offered
  }
  return null;
}
const IDLE = {
  0:["Lovely weather on the island today!","Keep practicing — you're doing great!","The Silence feels weaker around you."],
  2:["いい【天気|てんき】ですね！","がんばっていますね！","この【島|しま】は ことばで できています。"],
  3:["いい【天気|てんき】ですね！","ことだまが よろこんでいますよ。","【旅|たび】は つづく……"],
};
function talk(npc){
  const q = questFor(npc);
  if (q){ startQuest(q); return; }
  const pool = stage()<=1 ? IDLE[0] : (stage()===2 ? IDLE[2] : IDLE[3]);
  runDialogue([[npc, stage()<=1 ? rnd(pool) : null, stage()<=1 ? null : rnd(pool)]], ()=>showMap());
}
let activeQuest=null, stepIdx=0, taught=[];
function startQuest(q){
  activeQuest=q;
  taught = q.steps.filter(s=>s.t==="learn").flatMap(s=>s.items);
  if (G.qstep && G.qstep.q===q.id && G.qstep.s>0){ // resume at the failed step
    stepIdx = Math.min(G.qstep.s, q.steps.length-1);
    runStep(); return;
  }
  stepIdx=0;
  runDialogue(q.intro.map(l=>l), ()=>runStep());
}
function runStep(){
  const q=activeQuest;
  G.qstep = {q:q.id, s:stepIdx};
  if (stepIdx >= q.steps.length){ finishQuest(); return; }
  const s = q.steps[stepIdx];
  if (s.t==="learn") showStudy(s.kind, s.items, ()=>{ stepIdx++; runStep(); });
  else if (s.t==="quiz") showQuiz(s.items||taught, s.n, s.pass, {
      onPass:()=>{ stepIdx++; runStep(); },
      onFail:()=>{ toast(L("fail"),2600); activeQuest=null; showMap(); }});
  else if (s.t==="battle") showBattle(s, {
      onWin:()=>{ stepIdx++; runStep(); },
      onLose:()=>{ toast(L("defeat"),2600); G.hp=G.maxhp; activeQuest=null; showMap(); }});
}
function finishQuest(){
  const q=activeQuest; activeQuest=null;
  const after = ()=>{
    delete G.qstep;
    G.quests[q.id]=true;
    gainXp(q.reward.xp); G.gold += q.reward.gold;
    toast("🏅 "+Lp("questdone")+" +"+q.reward.xp+"✨ +"+q.reward.gold+"🪙", 2600);
    const chQuests = QUESTS.filter(x=>x.ch===q.ch);
    let chapterUp = false;
    if (chQuests.every(x=>G.quests[x.id]) && CHAPTERS[q.ch+1]){
      G.ch = q.ch+1; chapterUp = true;
      if (q.ch===5){ G.n5=true; setTimeout(()=>toast("🎓 "+Lp("n5note"),4200), 1300); }
      else setTimeout(()=>toast("📖 "+Lp("chapterup")+" → "+T(CHAPTERS[G.ch].title[1]),3600), 1300);
    }
    saveTo(0); // autosave
    const finish = ()=> q.final ? showEnding() : showMap();
    if (chapterUp){
      const key = "ch"+G.ch;
      const playCh = ()=> CUTSCENE_LINES[key] ? runDialogue(CUTSCENE_LINES[key], finish, asset("scenes",key)) : finish();
      const exam = q.ch===5 ? "n5" : q.ch===12 ? "n3" : null; // level-pass interludes
      if (exam && CUTSCENE_LINES[exam]) runDialogue(CUTSCENE_LINES[exam], playCh, asset("scenes",exam));
      else playCh();
    } else finish();
  };
  if (q.outro) runDialogue(q.outro, after); else after();
}

// ---------- dialogue ----------
function runDialogue(lines, done, bg){
  scene="dialogue";
  if (!bg && G) bg = LOCBG[G.map] || asset("scenes","ch"+G.ch); // never a blank backdrop
  let i=0, built=false;
  const render = ()=>{
    if (i>=lines.length){ done(); return; }
    const [sp,en,jp] = lines[i];
    const {main,sub} = pickLang(en,jp);
    const who = sp ? `${NPCS[sp].emoji} ${npcName(sp)}` : "✨";
    if (!built) { // rebuild per runDialogue call so chained cutscenes get THEIR backdrop
      built = true;
      const bgHtml = bg ? `<div class="cutscene-bg"><img src="${bg}"></div>` : "";
      app.innerHTML = (G? hudHtml():"") + `<div id="stage" style="background:radial-gradient(ellipse at 50% 30%,#16204a,var(--bg))">${bgHtml}<div id="dlgbase"></div></div>`;
      const pb=document.getElementById("pausebtn"); if(pb) pb.onclick=showPause;
    }
    const base = document.getElementById("dlgbase");
    const port = sp && asset("portraits",sp);
    base.innerHTML = `<div class="dlg${port?" has-portrait":""}">
      ${port?`<img class="dlg-portrait" src="${port}" onerror="this.closest('.dlg').classList.remove('has-portrait');this.remove()">`:""}
      <div class="who">${who}</div>
      <div class="line">${main.replace(/\n/g,"<br>")}</div>
      ${sub?`<div class="sub">${sub}</div>`:""}
      <button class="audio-btn" style="position:absolute;top:10px;right:36px">🔊</button>
      <div class="more">▼</div></div>`;
    base.querySelector(".audio-btn").onclick = e=>{ e.stopPropagation(); speak(jp||en||""); };
    base.querySelector(".dlg").onclick = ()=>{ i++; render(); };
    if (stage()>=2 && jp) speak(jp);
  };
  keyHandler = e=>{
    if (e.key==="Enter"||e.key===" "){ e.preventDefault(); i++; render(); }
  };
  render();
}

// ---------- study ----------
function studyCard(kind, id){
  if (kind==="kana"){
    const k = KANA[id];
    let extra = "";
    if (k.twin) extra = `<div class="meaning">＝ ${esc(k.twin)}</div>`;
    return `<div class="glyph">${esc(k.k)}</div>${extra}
      <div class="hint">${esc(k.hint)}</div>
      ${k.mnemo?`<div class="hint">💡 ${esc(k.mnemo)}</div>`:""}`;
  }
  if (kind==="vocab"){
    const v = VOCAB[id];
    const noEn = stage()>=3;
    return `<div class="emoji">${v.e}</div>
      <div class="glyph" style="font-size:3rem">${esc(v.jp)}</div>
      ${v.kj?`<div class="meaning">${rubyHtml(v.kj,v.jp)}</div>`:""}
      ${noEn?"":`<div class="meaning">${esc(v.en)}</div>`}`;
  }
  if (kind==="kanji"){
    const kj = KANJI[id];
    const exv = VOCAB[kj.ex];
    const noEn = stage()>=3;
    return `<div class="glyph">${esc(kj.c)}</div>
      <div class="meaning">${Lp("readings")}: ${esc(kj.yomi)}</div>
      ${noEn?"":`<div class="meaning">${Lp("meaning")}: ${esc(kj.en)}</div>`}
      ${exv?`<div class="hint">${Lp("example")}: ${exv.kj?rubyHtml(exv.kj,exv.jp):esc(exv.jp)} ${exv.e}</div>`:""}`;
  }
  if (kind==="grammar"){
    const g = GRAMMAR[id];
    const noEn = stage()>=3 || !g.en;
    const expl = noEn ? T(g.jp) : esc(g.en);
    const exs = g.ex.map(([j,e])=>`<div>・${T(j)} ${(!noEn&&e)?`<span class="ex-en">— ${esc(e)}</span>`:""}</div>`).join("");
    return `<div class="glyph" style="font-size:2.2rem">${T(g.pat)}</div>
      <div class="hint" style="font-size:1.05rem">${expl}</div>
      <div class="examples">${exs}</div>`;
  }
}
function speakTextFor(kind,id){
  if (kind==="kana") return KANA[id].twin || id;
  if (kind==="vocab") return VOCAB[id].jp;
  if (kind==="kanji") return (KANJI[id].yomi.split("・")[0]);
  if (kind==="grammar") return GRAMMAR[id].ex[0][0];
  return id;
}
function showStudy(kind, items, done){
  scene="study";
  let i=0;
  const render=()=>{
    const id=items[i];
    const dots = items.map((_,j)=>`<span class="${j<i?"on":j===i?"now":""}"></span>`).join("");
    app.innerHTML = hudHtml()+`<div id="stage"${stageBgStyle()}><div class="panel">
      <h2>📖 ${Lp("study")} — ${i+1} / ${items.length}</h2>
      <div class="body">
        <div class="card">
          <button class="audio-btn" style="float:right;font-size:1.8rem" id="sp">🔊</button>
          ${studyCard(kind,id)}
        </div>
        <div class="progress-dots">${dots}</div>
        ${stage()<3 && i===0 && kind==="vocab" ? `<div class="dim center" style="max-width:480px">${L("masterynote")}</div>`:""}
      </div>
      <div class="foot">
        <button id="prev" ${i===0?"disabled":""}>← ${Lp("back")}</button>
        <button class="primary" id="next">${i===items.length-1 ? Lp("toquiz") : Lp("next")+" →"}</button>
      </div></div></div>`;
    document.getElementById("pausebtn").onclick=showPause;
    document.getElementById("sp").onclick=()=>speak(speakTextFor(kind,id));
    document.getElementById("prev").onclick=()=>{ if(i>0){i--;render();} };
    document.getElementById("next").onclick=()=>{
      if (!(id in G.mastery)) G.mastery[id]=1;
      if (i<items.length-1){ i++; render(); } else done();
    };
    speak(speakTextFor(kind,id));
    keyHandler = e=>{
      if (e.key==="Enter"||e.key===" "||e.key==="ArrowRight"){ e.preventDefault(); document.getElementById("next").click(); }
      if (e.key==="ArrowLeft"){ e.preventDefault(); document.getElementById("prev").click(); }
    };
  };
  render();
}

// ---------- question generation ----------
function kindOf(id){
  if (KANA[id]) return "kana";
  if (VOCAB[id]) return "vocab";
  if (KANJI[id]) return "kanji";
  if (GRAMMAR[id]) return "grammar";
  return null;
}
function distractors(pool, correct, n, fmt){
  const opts = new Set([fmt(correct)]);
  const cands = shuffle(pool.filter(p=>p!==correct));
  for (const c of cands){ if (opts.size>=n+1) break; opts.add(fmt(c)); }
  return shuffle([...opts]);
}
function makeQuestion(id){
  const kind = kindOf(id);
  if (kind==="kana") return kanaQ(id);
  if (kind==="vocab") return vocabQ(id);
  if (kind==="kanji") return kanjiQ(id);
  if (kind==="grammar") return grammarQ(id);
  return null;
}
function kanaQ(id){
  const k = KANA[id];
  let sameScript = Object.keys(KANA).filter(x=>KANA[x].type===k.type && x.length===id.length);
  const met = sameScript.filter(x=>introduced(x)||taughtNow(x));
  if (met.length>=4) sameScript = met; // distractors only from kana already met
  // recorded mp3s exist for every hiragana sound, so audio questions no
  // longer depend on a speech-synthesis voice being installed
  const canAudio = G.settings.audio && id!=="っ" && id!=="ー";
  const modes = [];
  if (canAudio) modes.push("audio");
  if (k.twin) modes.push("twin");
  if (!k.twin) modes.push("hint","glyph2hint");
  const mode = rnd(modes);
  if (mode==="audio"){
    // exclude homophones (を=お, ぢ=じ, づ=ず and their katakana twins):
    // the player hears one sound, so two identical-sounding options would both be right
    const HOMO = {"を":"お","ぢ":"じ","づ":"ず","お":"を","じ":"ぢ","ず":"づ"};
    const soundOf = x => { const h = KANA[x].twin||x; return HOMO[h]||h; };
    const pool = sameScript.filter(x=>x===id || soundOf(x)!==soundOf(id));
    const opts = distractors(pool, id, 3, x=>x);
    return {q:`<div class="quiz-q small">${L("whichsound")}</div><div class="quiz-q"><button class="audio-btn" style="font-size:2.4rem" data-say="${esc(k.twin||id)}">🔊</button></div>`,
      opts, a:opts.indexOf(id), id, autosay:k.twin||id};
  }
  if (mode==="twin"){
    const rev = Math.random()<0.5;
    if (rev){
      const kataPool = Object.keys(KANA).filter(x=>KANA[x].twin);
      const twinKata = kataPool.filter(x=>KANA[x].twin===k.twin);
      const opts = distractors(kataPool, twinKata[0]||id, 3, x=>x);
      return {q:`<div class="quiz-q small">${L("twinof2")}</div><div class="quiz-q">${esc(k.twin)}</div>`,
        opts, a:opts.findIndex(o=>KANA[o]&&KANA[o].twin===k.twin), id};
    }
    const hiraPool = Object.keys(KANA).filter(x=>KANA[x].type==="hira"&&KANA[x].row!=="combo");
    const opts = distractors(hiraPool, k.twin, 3, x=>x);
    return {q:`<div class="quiz-q small">${L("twinof")}</div><div class="quiz-q">${esc(id)}</div>`,
      opts, a:opts.indexOf(k.twin), id};
  }
  if (mode==="hint"){
    const opts = distractors(sameScript, id, 3, x=>x);
    return {q:`<div class="quiz-q small">${L("whichhint")}</div><div class="quiz-q small dim">${esc(k.hint)}</div>`,
      opts, a:opts.indexOf(id), id};
  }
  const others = shuffle(sameScript.filter(x=>x!==id&&KANA[x].hint!==k.hint)).slice(0,3);
  const opts = shuffle([k.hint, ...others.map(x=>KANA[x].hint)]);
  return {q:`<div class="quiz-q small">${L("hintof")}</div><div class="quiz-q">${esc(id)}</div>`,
    opts:opts.map(o=>`<span style="font-size:.75em;line-height:1.4;display:inline-block">${esc(o)}</span>`),
    a:opts.indexOf(k.hint), id, rawOpts:opts};
}
function vocabQ(id){
  const v = VOCAB[id];
  const pool = Object.keys(VOCAB).filter(x=>introduced(x)||taughtNow(x));
  const samePool = pool.filter(x=>VOCAB[x].cat===v.cat).length>=4 ? pool.filter(x=>VOCAB[x].cat===v.cat) : pool;
  // typed kanji reading (word is getting strong and has a kanji form)
  if (v.kj && mlvl(id)>=2 && Math.random()<0.35){
    return {q:`<div class="quiz-q small">${L("typeread")}</div><div class="quiz-q">${esc(v.kj)}</div>`,
      typed:v.jp, id};
  }
  if (!mastered(id) && stage()<3){
    const opts = distractors(samePool, id, 3, x=>esc(VOCAB[x].jp));
    return {q:`<div class="quiz-q small">${L("whichjp")}</div><div class="quiz-q small">${v.e} ${esc(v.en)}</div>`,
      opts, a:opts.indexOf(esc(v.jp)), id};
  }
  // post-mastery / immersion 3: Japanese -> emoji meaning
  if (Math.random()<0.5){
    const opts = distractors(samePool, id, 3, x=>VOCAB[x].e);
    return {q:`<div class="quiz-q small">${L("whichmeaning")}</div><div class="quiz-q">${v.kj?rubyHtml(v.kj,"　"):esc(v.jp)}</div>`,
      opts, a:opts.indexOf(v.e), id, autosay:v.jp};
  }
  // emoji -> word: two words sharing the same emoji would both look correct
  const emojiSafe = samePool.filter(x=>x===id || VOCAB[x].e!==v.e);
  const opts = distractors(emojiSafe, id, 3, x=>esc(VOCAB[x].jp));
  return {q:`<div class="quiz-q small">${L("whichjp")}</div><div class="quiz-q">${v.e}</div>`,
    opts, a:opts.indexOf(esc(v.jp)), id};
}
function kanjiQ(id){
  const kj = KANJI[id];
  const allK = Object.keys(KANJI);
  const first = s=>s.split("・")[0];
  if (stage()<3 && Math.random()<0.4){
    const opts = distractors(allK, id, 3, x=>esc(KANJI[x].en));
    return {q:`<div class="quiz-q small">${L("whichmeaning")}</div><div class="quiz-q">${esc(id)}</div>`,
      opts, a:opts.indexOf(esc(kj.en)), id};
  }
  const opts = distractors(allK, id, 3, x=>esc(first(KANJI[x].yomi)));
  return {q:`<div class="quiz-q small">${L("whichreading")}</div><div class="quiz-q">${esc(id)}</div>`,
    opts, a:opts.indexOf(esc(first(kj.yomi))), id};
}
function grammarQ(id){
  const qs = GQUIZ.filter(x=>x.g===id);
  if (!qs.length) return null;
  const gq = rnd(qs);
  const correct = gq.opts[gq.a];
  const opts = shuffle(gq.opts).map(o=>esc(o));
  return {q:`<div class="quiz-q small">${L("fillblank")}</div><div class="quiz-q small" style="font-size:1.6rem">${T(gq.q)}</div>`,
    opts, a:opts.indexOf(esc(correct)), id};
}
let _taughtNow = [];
function taughtNow(id){ return _taughtNow.includes(id); }
function grammarLv(g){ return g.lv || (g.en!=null ? 5 : 4); }
function buildQuestions(items, n, scope){
  let pool = items.slice();
  if (scope==="all"){
    pool = Object.keys(G.mastery);
  } else if (scope){ // "n5" = exactly N5; "lv4"/"lv3"/"lv2" = that level and easier
    const minLv = scope==="n5" ? 5 : parseInt(scope.slice(2),10);
    pool = Object.keys(G.mastery).filter(id=>{
      const k=kindOf(id);
      if (k==="vocab") return scope==="n5" ? VOCAB[id].lv===5 : VOCAB[id].lv>=minLv;
      if (k==="grammar") return scope==="n5" ? GRAMMAR[id].en!=null : grammarLv(GRAMMAR[id])>=minLv;
      return k==="kanji";
    });
  }
  _taughtNow = pool;
  let ids = shuffle(pool);
  while (ids.length < n) ids = ids.concat(shuffle(pool));
  ids = ids.slice(0,n);
  return ids.map(makeQuestion).filter(Boolean);
}

// ---------- kana keypad ----------
const PAD_COLS = [
  ["あ","い","う","え","お"],["か","き","く","け","こ"],["さ","し","す","せ","そ"],
  ["た","ち","つ","て","と"],["な","に","ぬ","ね","の"],["は","ひ","ふ","へ","ほ"],
  ["ま","み","む","め","も"],["や","ゆ","よ","ー",""],["ら","り","る","れ","ろ"],["わ","を","ん","",""],
];
const DAKU_CYCLE = {
  "か":"が","が":"か","き":"ぎ","ぎ":"き","く":"ぐ","ぐ":"く","け":"げ","げ":"け","こ":"ご","ご":"こ",
  "さ":"ざ","ざ":"さ","し":"じ","じ":"し","す":"ず","ず":"す","せ":"ぜ","ぜ":"せ","そ":"ぞ","ぞ":"そ",
  "た":"だ","だ":"た","ち":"ぢ","ぢ":"ち","つ":"づ","づ":"つ","て":"で","で":"て","と":"ど","ど":"と",
  "は":"ば","ば":"ぱ","ぱ":"は","ひ":"び","び":"ぴ","ぴ":"ひ","ふ":"ぶ","ぶ":"ぷ","ぷ":"ふ",
  "へ":"べ","べ":"ぺ","ぺ":"へ","ほ":"ぼ","ぼ":"ぽ","ぽ":"ほ",
};
const SMALL_CYCLE = {"や":"ゃ","ゃ":"や","ゆ":"ゅ","ゅ":"ゆ","よ":"ょ","ょ":"よ","つ":"っ","っ":"つ",
  "あ":"ぁ","ぁ":"あ","い":"ぃ","ぃ":"い","う":"ぅ","ぅ":"う","え":"ぇ","ぇ":"え","お":"ぉ","ぉ":"お"};
function kanaPadHtml(){
  const cols = PAD_COLS.map(col=>
    `<div class="col">${col.map(k=>k?`<button data-k="${k}">${k}</button>`:`<span style="height:34px"></span>`).join("")}</div>`).join("");
  return `<div class="kanapad">
    <div class="typed" id="typed">&nbsp;</div>
    <div class="rows">${cols}</div>
    <div style="display:flex;gap:6px">
      <button class="ctrl" id="dakubtn">゛゜</button>
      <button class="ctrl" id="smallbtn">${Lp("smallnote")}</button>
      <button class="ctrl" id="delbtn">⌫</button>
      <button class="ctrl primary" id="anskey">${Lp("answer")}</button>
    </div></div>`;
}
function wireKanaPad(onAnswer){
  let val="";
  const typed=document.getElementById("typed");
  const upd=()=>{ typed.textContent = val || " "; };
  document.querySelectorAll(".kanapad [data-k]").forEach(b=>{
    b.onclick=()=>{ val+=b.dataset.k; upd(); };
  });
  document.getElementById("dakubtn").onclick=()=>{
    if(!val) return; const last=val.slice(-1);
    if (DAKU_CYCLE[last]) { val=val.slice(0,-1)+DAKU_CYCLE[last]; upd(); }
  };
  document.getElementById("smallbtn").onclick=()=>{
    if(!val) return; const last=val.slice(-1);
    if (SMALL_CYCLE[last]) { val=val.slice(0,-1)+SMALL_CYCLE[last]; upd(); }
  };
  document.getElementById("delbtn").onclick=()=>{ val=val.slice(0,-1); upd(); };
  document.getElementById("anskey").onclick=()=>onAnswer(val);
}

// ---------- quiz ----------
function showQuiz(items, n, pass, cb){
  scene="quiz";
  const qs = buildQuestions(items, n, null);
  runQuestions(qs, pass, null, cb);
}
function runQuestions(qs, pass, battle, cb){
  let i=0, correct=0;
  const render=()=>{
    if (battle && battle.foeHp<=0){ endBattle(true); return; }
    if (battle && G.hp<=0){ endBattle(false); return; }
    if (i>=qs.length){
      if (battle){ // keep going until someone drops
        qs = qs.concat(buildQuestions(battle.pool, 10, battle.scope||null)); render(); return;
      }
      const ok = correct>=pass;
      if (ok){ sfx(true); toast("🎉 "+Lp("pass")); cb.onPass(); } else cb.onFail();
      return;
    }
    const q = qs[i];
    const head = battle ? battleHead(battle) :
      `<h2>❓ ${Lp("question")} ${i+1} / ${qs.length}　<span class="dim">✔ ${correct}${pass?" / "+pass:""}</span></h2>`;
    const body = q.typed ? q.q + kanaPadHtml() :
      q.q + `<div class="quiz-opts">${q.opts.map((o,j)=>`<button data-i="${j}">${o}</button>`).join("")}</div>`;
    app.innerHTML = hudHtml()+`<div id="stage"${battle?stageBgStyle(0.82):stageBgStyle()}><div class="${battle?"battle":"panel"}">
      ${head}<div class="body" style="justify-content:center">${body}
      <div class="feedback" id="fb"></div></div>
      ${battle?`<div class="you"><span class="sprite">🦆</span><span>${Lp("hp")} ${G.hp}/${G.maxhp}</span></div>`:""}
      </div></div>`;
    document.getElementById("pausebtn").onclick=showPause;
    document.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>speak(b.dataset.say));
    if (q.autosay) speak(q.autosay);
    const judge = ok => {
      sfx(ok);
      if (q.id) bump(q.id, ok);
      const fb=document.getElementById("fb");
      fb.className = "feedback "+(ok?"good":"bad");
      fb.innerHTML = ok ? Lp("correct") : Lp("wrong") + (q.typed?` → ${esc(q.typed)}`:"");
      if (ok) correct++;
      if (battle){
        if (ok){ battle.foeHp--; battle.hit=true; }
        else G.hp = Math.max(0, G.hp - battle.dmg);
      }
      setTimeout(()=>{ i++; render(); }, window.QA_FAST ? 50 : (ok?700:1400));
    };
    if (q.typed){
      wireKanaPad(v=>judge(v===q.typed));
    } else {
      document.querySelectorAll(".quiz-opts button").forEach(b=>{
        b.onclick=()=>{
          const j=+b.dataset.i;
          const ok = j===q.a;
          b.classList.add(ok?"correct":"wrong");
          if (!ok) document.querySelectorAll(".quiz-opts button")[q.a].classList.add("correct");
          document.querySelectorAll(".quiz-opts button").forEach(x=>x.disabled=true);
          judge(ok);
        };
      });
    }
    keyHandler = e=>{
      const num = parseInt(e.key,10);
      if (!q.typed && num>=1 && num<=q.opts.length){
        const btn=document.querySelectorAll(".quiz-opts button")[num-1];
        if (btn && !btn.disabled) btn.click();
      }
    };
  };
  const endBattle = win => {
    if (win){ sfx(true); BGM.sting(); toast("⚔️ "+Lp("victory")); G.hp=G.maxhp; cb.onPass ? cb.onPass() : cb.onWin(); }
    else cb.onFail ? cb.onFail() : cb.onLose();
  };
  render();
}
function battleHead(b){
  const pct = Math.max(0,100*b.foeHp/b.maxHp);
  const nm = b.name[0]&&stage()<2 ? esc(b.name[0]) : T(b.name[1]);
  const hitCls = b.hit ? " hit":""; b.hit=false;
  const art = b.img ? `<img class="foe-img${hitCls}" src="${b.img}" onerror="this.remove()">`
                    : `<div class="sprite${hitCls}">${b.sprite}</div>`;
  return `<div class="foe">
    <div class="name">⚔️ ${nm}</div>
    ${art}
    <div class="hpbar"><div style="width:${pct}%"></div></div></div>`;
}
function showBattle(s, cb){
  scene="battle";
  BGM.play("battle");
  const pool = s.items || taught;
  const b = {foeHp:s.hp, maxHp:s.hp, dmg:s.dmg, sprite:s.sprite, name:s.name, pool, scope:s.scope,
             img: activeQuest ? asset("battles", activeQuest.id) : null};
  toast("⚔️ "+Lp("bosswarn"), 1600);
  const qs = buildQuestions(pool, s.hp+4, s.scope||null);
  runQuestions(qs, null, b, cb);
}

// ---------- overlays: pause & friends ----------
let savedKeyHandler = null;
function overlay(html){
  const o = el(`<div class="overlay"><div class="box">${html}</div></div>`);
  o.onclick = e=>{ if (e.target===o) closeOverlay(); };
  savedKeyHandler = keyHandler;             // freeze the scene's keys under the overlay
  keyHandler = e=>{ if (e.key==="Escape") closeOverlay(); };
  app.appendChild(o);
  return o;
}
function closeOverlay(){ document.querySelectorAll(".overlay").forEach(o=>o.remove()); keyHandler = savedKeyHandler; }
function showPause(){
  if (document.querySelector(".overlay")) return;
  const o = overlay(`<h2>⏸ ${Lp("paused")}</h2>
    <div class="menu-list">
      <button id="m_res">▶️ ${L("resume")}</button>
      <button id="m_j">📜 ${L("journal")}</button>
      <button id="m_kana">🔤 ${L("kanachart")}</button>
      <button id="m_kanji">🈷️ ${L("kanjidex")}</button>
      <button id="m_g">🧩 ${L("grammarbook")}</button>
      <button id="m_rev">⛩️ ${L("review")}</button>
      <button id="m_set">⚙️ ${L("settings")}</button>
      <button id="m_save">💾 ${L("save")}</button>
      <button id="m_load">📂 ${L("load")}</button>
      <button id="m_title">🚪 ${L("totitle")}</button>
    </div>`);
  o.querySelector("#m_res").onclick=closeOverlay;
  o.querySelector("#m_j").onclick=()=>{closeOverlay();showJournal();};
  o.querySelector("#m_kana").onclick=()=>{closeOverlay();showKanaChart();};
  o.querySelector("#m_kanji").onclick=()=>{closeOverlay();showKanjiDex();};
  o.querySelector("#m_g").onclick=()=>{closeOverlay();showGrammarBook();};
  o.querySelector("#m_rev").onclick=()=>{closeOverlay();startReview();};
  o.querySelector("#m_set").onclick=()=>{closeOverlay();showSettings();};
  o.querySelector("#m_save").onclick=()=>{closeOverlay();showSlots("save",()=>{});};
  o.querySelector("#m_load").onclick=()=>{closeOverlay();showSlots("load",()=>{});};
  o.querySelector("#m_title").onclick=()=>{
    // don't clobber a previous run's autosave with a fresh throwaway run
    if (Object.keys(G.quests).length) saveTo(0);
    closeOverlay(); showTitle();
  };
}
function backBtn(fn){ return `<div class="foot"><button id="backb">← ${Lp("back")}</button></div>`; }
function wireBack(o){ o.querySelector("#backb").onclick=closeOverlay; }
function showJournal(){
  const rows = QUESTS.filter(q=>q.ch<=G.ch).map(q=>{
    const st = G.quests[q.id] ? "done" : (questFor(q.npc)&&questFor(q.npc).id===q.id ? "avail":"future");
    if (st==="future" && !G.quests[q.id]) return "";
    const tag = st==="done" ? "✅ "+Lp("done") : "❗ "+Lp("available");
    const title = q.title[0]&&stage()<2 ? esc(q.title[0]) : T(q.title[1]);
    return `<div class="quest-item ${st==="done"?"done":""}">
      <div class="qt">${title} <span class="dim" style="font-weight:normal">— ${tag}</span></div>
      <div class="qs">${NPCS[q.npc].emoji} ${npcName(q.npc)} ・ ${Lp("chapter")} ${q.ch}</div></div>`;
  }).join("");
  const o=overlay(`<h2>📜 ${L("journal")}</h2>${rows||`<div class="dim center">…</div>`}${backBtn()}`);
  wireBack(o);
}
function dexCls(id){ const l=mlvl(id); return l>=5?"m5":l>=3?"m3":l>=1?"m1":""; }
function showKanaChart(){
  const mk = list => `<div class="dex-grid">`+list.map(k=>{
    const known = introduced(k);
    return `<div class="cell ${known?dexCls(k):"locked"}" data-k="${k}">${k}</div>`;
  }).join("")+`</div>`;
  const hira = Object.keys(KANA).filter(k=>KANA[k].type==="hira");
  const kata = Object.keys(KANA).filter(k=>KANA[k].type==="kata");
  const o=overlay(`<h2>🔤 ${L("kanachart")}</h2>
    <div>ひらがな</div>${mk(hira)}<div style="margin-top:8px">カタカナ</div>${mk(kata)}${backBtn()}`);
  o.querySelectorAll(".cell").forEach(c=>c.onclick=()=>{
    const k=c.dataset.k;
    if (introduced(k)){ speak(KANA[k].twin||k); toast(esc(k)+" — "+esc(KANA[k].hint),3200); }
  });
  wireBack(o);
}
function showKanjiDex(){
  const known = Object.keys(KANJI).filter(introduced);
  const all = Object.keys(KANJI);
  const grid = all.map(c=>`<div class="cell ${introduced(c)?dexCls(c):"locked"}" data-k="${c}">${c}</div>`).join("");
  const o=overlay(`<h2>🈷️ ${L("kanjidex")} <span class="dim" style="font-size:.8rem">${known.length} / ${all.length}</span></h2>
    <div class="dex-grid">${grid}</div>${backBtn()}`);
  o.querySelectorAll(".cell").forEach(c=>c.onclick=()=>{
    const k=c.dataset.k; if(!introduced(k)) return;
    const kj=KANJI[k]; const exv=VOCAB[kj.ex];
    speak(kj.yomi.split("・")[0]);
    toast(`${k}　${esc(kj.yomi)}${stage()<3?"　"+esc(kj.en):""}${exv?"　"+(exv.kj||exv.jp)+" "+exv.e:""}`,3600);
  });
  wireBack(o);
}
function showGrammarBook(){
  const known = Object.keys(GRAMMAR).filter(introduced);
  const rows = known.map(id=>{
    const g=GRAMMAR[id];
    const noEn = stage()>=3 || !g.en;
    return `<div class="grammar-item"><div class="gp">${T(g.pat)}</div>
      <div>${noEn?T(g.jp):esc(g.en)}</div>
      ${g.ex.map(([j,e])=>`<div class="gex">${T(j)}${(!noEn&&e)?` <span class="gen">— ${esc(e)}</span>`:""}</div>`).join("")}</div>`;
  }).join("");
  const o=overlay(`<h2>🧩 ${L("grammarbook")}</h2>${rows||`<div class="dim center">…</div>`}${backBtn()}`);
  wireBack(o);
}
function startReview(){
  const weak = Object.keys(G.mastery).sort((a,b)=>mlvl(a)-mlvl(b)).slice(0,12);
  if (!weak.length){ toast(L("noreview")); return; }
  showQuiz(weak, Math.min(10,weak.length*2), 0, {
    onPass:()=>{ gainXp(15); toast("⛩️ +15✨"); showMap(); },
    onFail:()=>showMap()});
}
function showSettings(){
  const o=overlay(`<h2>⚙️ ${L("settings")}</h2>
    <div class="menu-list">
      <button id="s_furi">${L("furigana")}: ${G.settings.furigana?Lp("on"):Lp("off")}</button>
      <button id="s_aud">🔊 ${L("audio")}: ${G.settings.audio?Lp("on"):Lp("off")}</button>
      <button id="s_mus">🎵 ${G.settings.music!==false?Lp("on"):Lp("off")}</button>
    </div>${backBtn()}`);
  o.querySelector("#s_furi").onclick=()=>{ G.settings.furigana=!G.settings.furigana; closeOverlay(); showSettings(); };
  o.querySelector("#s_aud").onclick=()=>{ G.settings.audio=!G.settings.audio; closeOverlay(); showSettings(); };
  o.querySelector("#s_mus").onclick=()=>{ G.settings.music=!(G.settings.music!==false); BGM.setVol(); closeOverlay(); showSettings(); };
  wireBack(o);
}
function showSlots(mode, after){
  const inTitle = scene==="title";
  const mk = i=>{
    const inf = slotInfo(i);
    const label = i===0 ? "🔄 AUTO" : `💾 ${Lp("slot")} ${i}`;
    const info = inf ? `${Lp("level")} ${inf.level}・${Lp("chapter")} ${inf.ch}・${inf.words} 🈷️・${fmtTime(inf.time)}<br><span class="dim">${inf.at}</span>`
                     : `<span class="empty">${Lp("empty")}</span>`;
    const dis = (mode==="load"&&!inf) || (mode==="save"&&i===0);
    return `<div class="slot"><div class="info"><b>${label}</b><br>${info}</div>
      <div><button data-i="${i}" ${dis?"disabled":""} class="primary">${mode==="save"?Lp("save"):Lp("load")}</button>
      ${inf&&i>0?`<button data-del="${i}">🗑</button>`:""}</div></div>`;
  };
  const o=overlay(`<h2>${mode==="save"?"💾 "+L("save"):"📂 "+L("load")}</h2>
    ${[0,1,2,3].map(mk).join("")}
    <div style="display:flex;gap:8px">
      <button id="expb" style="flex:1">${Lp("export_")}</button>
      <button id="impb" style="flex:1">${Lp("import_")}</button>
    </div><div id="ioarea"></div>${backBtn()}`);
  o.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.i;
    if (mode==="save"){ saveTo(i); toast(L("savedone")); closeOverlay(); }
    else { if (loadFrom(i)){ toast(L("loaddone")); closeOverlay(); showMap(); } else toast(L("nosave")); }
  });
  o.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{
    localStorage.removeItem(SLOTKEY(+b.dataset.del)); closeOverlay(); showSlots(mode,after);
  });
  o.querySelector("#expb").onclick=()=>{
    const area=o.querySelector("#ioarea");
    const data = G ? btoa(unescape(encodeURIComponent(JSON.stringify({g:G,at:Date.now()})))) : (localStorage.getItem(SLOTKEY(0))?btoa(unescape(encodeURIComponent(localStorage.getItem(SLOTKEY(0))))):"");
    area.innerHTML = `<textarea class="save-io" readonly>${data}</textarea>`;
    area.querySelector("textarea").select();
  };
  o.querySelector("#impb").onclick=()=>{
    const area=o.querySelector("#ioarea");
    area.innerHTML = `<textarea class="save-io" placeholder="…"></textarea><button id="doimp" class="primary" style="margin-top:6px">OK</button>`;
    area.querySelector("#doimp").onclick=()=>{
      try{
        const d=JSON.parse(decodeURIComponent(escape(atob(area.querySelector("textarea").value.trim()))));
        G = Object.assign(newState(), d.g||d); sessionStart=Date.now();
        toast(L("loaddone")); closeOverlay(); showMap();
      }catch(e){ toast("❌"); }
    };
  };
  wireBack(o);
  if (inTitle){ const bb=o.querySelector("#backb"); bb.onclick=()=>{o.remove(); after&&after();}; }
}

// ---------- ending ----------
function showEnding(){
  scene="ending"; keyHandler=null;
  G.ended=true; saveTo(0);
  BGM.play("ending");
  const words = Object.keys(G.mastery).filter(id=>VOCAB[id]).length;
  const kanji = Object.keys(G.mastery).filter(id=>KANJI[id]).length;
  const ebg = asset("scenes", G.ch>=16 ? "trueend" : "ending");
  app.innerHTML = `<div class="title-screen" ${ebg?`style="background-image:linear-gradient(rgba(10,12,26,.5),rgba(10,12,26,.82)),url('${ebg}');background-size:cover;background-position:center"`:""}>
    <div class="title-duck">🦆✨</div>
    <div class="title-main">おわり</div>
    <div class="reward-box">
      ことばは、そらへ かえった。<br>
      カモも、そらへ とびたった。<br><br>
      🈷️ ${words} ${Lp("wordslearned")}・${kanji} ${Lp("kanjilearned")}<br>
      ⏱️ ${Lp("playtime")}: ${fmtTime(G.time + Math.floor((Date.now()-sessionStart)/1000))}<br><br>
      <span class="levelup">${Lp("theend")}</span>
    </div>
    <button class="gold" id="endb">タイトルへ</button>
  </div>`;
  document.getElementById("endb").onclick=showTitle;
  speak("おわり。ありがとうございました。");
}

// ---------- boot ----------
showTitle();
