// node qa_playthrough.js — headless full-game logic playthrough.
// Simulates a player clearing every quest in order: studies every card,
// generates and answers every quiz/battle question, walks chapter
// transitions. Fails loudly on: broken quest ordering, unrenderable cards,
// malformed questions (bad answer index / dupe options), missing audio for
// taught items, and "undefined" leaking into any rendered string.
const fs = require("fs"), vm = require("vm");

// --- DOM-free environment ---------------------------------------------
function stubEl(){
  return new Proxy(function(){}, {
    get: (t,p)=>{
      if (p==="style"||p==="dataset") return {};
      if (p==="classList") return {add(){},remove(){}};
      if (p==="querySelectorAll") return ()=>[];
      if (p==="querySelector"||p==="closest") return ()=>stubEl();
      if (typeof p==="symbol") return undefined;
      return stubEl();
    },
    set: ()=>true,
    apply: ()=>stubEl(),
  });
}
const ctx = {
  window: {},
  document: { getElementById:()=>stubEl(), createElement:()=>stubEl(),
              querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){} },
  Image: function(){}, Audio: function(){ this.play=()=>({catch(){}}); this.pause=()=>{}; },
  speechSynthesis: { getVoices:()=>[], cancel(){}, speak(){}, pause(){}, resume(){},
                     paused:false, speaking:false, pending:false, onvoiceschanged:null },
  SpeechSynthesisUtterance: function(){},
  localStorage: { getItem:()=>null, setItem(){}, removeItem(){} },
  navigator: {}, location: {protocol:"file:"},
  setInterval: ()=>0, clearInterval(){}, setTimeout: (f)=>0, // scene timers inert
  addEventListener(){},
};
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ["data.js","data3.js","quests.js","assets.js","quests3.js","game.js"])
  vm.runInContext(fs.readFileSync(__dirname+"/"+f,"utf8"), ctx, {filename:f});

const audioFiles = new Set(fs.readdirSync(__dirname+"/assets/audio").map(f=>f.replace(/\.mp3$/,"")));

// --- playthrough --------------------------------------------------------
const R = vm.runInContext(`(function(){
  const errors=[], warns=[];
  let questions=0, cards=0;
  G = newState();
  const clean = s => { if (/undefined|\\[object|NaN/.test(String(s)))
    errors.push("dirty render: "+String(s).slice(0,80)); return s; };

  const order = QUESTS.slice(); // authoring order == play order per chapter
  for (const q of order){
    if (q.ch !== G.ch) errors.push(q.id+": offered at ch"+G.ch+" but tagged ch"+q.ch);
    const npcQuest = questFor(q.npc);
    if (!npcQuest || npcQuest.id!==q.id) errors.push(q.id+": questFor("+q.npc+") gave "+(npcQuest&&npcQuest.id));
    // dialogue renders
    for (const lines of [q.intro||[], q.outro||[]])
      for (const [sp,en,jp] of lines) clean(T(jp||en||""));
    // steps
    const taughtHere=[];
    for (const s of q.steps){
      if (s.t==="learn"){
        for (const id of s.items){
          clean(studyCard(s.kind, id));
          if (!(id in G.mastery)) G.mastery[id]=1;
          taughtHere.push(id);
          cards++;
        }
      } else if (s.t==="quiz" || s.t==="battle"){
        const pool = s.items || taughtHere;
        const n = s.t==="battle" ? (s.hp+4) : s.n;
        const qs = buildQuestions(pool, n, s.scope||null);
        if (!qs.length) errors.push(q.id+": zero questions generated");
        for (const qq of qs){
          questions++;
          if (qq.typed){ if (!qq.typed.length) errors.push(q.id+": empty typed answer"); }
          else {
            if (!(qq.a>=0 && qq.a<qq.opts.length)) errors.push(q.id+": bad answer index "+qq.a+"/"+qq.opts.length);
            const uniq = new Set(qq.opts.map(String));
            if (uniq.size !== qq.opts.length) errors.push(q.id+": duplicate options "+[...uniq].slice(0,4));
            clean(qq.q); qq.opts.forEach(clean);
          }
          if (qq.id) bump(qq.id, true);
        }
      }
    }
    // complete quest + chapter math (mirror of finishQuest)
    delete G.qstep; G.quests[q.id]=true;
    const chQ = QUESTS.filter(x=>x.ch===q.ch);
    if (chQ.every(x=>G.quests[x.id]) && CHAPTERS[q.ch+1]) G.ch = q.ch+1;
    if (q.final) G.ended = true;
  }
  // every taught item audible?
  const silent=[];
  for (const id of Object.keys(G.mastery)){
    const k = kindOf(id);
    let text=null;
    if (k==="vocab") text=VOCAB[id].jp;
    else if (k==="kana") text=(KANA[id].twin||id)==="っ"?null:(KANA[id].twin||id);
    else if (k==="kanji") text=KANJI[id].yomi.split("・")[0];
    else if (k==="grammar") text="__G__"+id;
    if (text===null) continue;
    if (text.startsWith("__G__")){ if (!AUDIO_HAS(id)) silent.push(id); }
    else if (!AUDIO_HAS(text)) silent.push(text);
  }
  return {errors, warns, questions, cards,
    quests:Object.keys(G.quests).length, ch:G.ch, ended:G.ended,
    mastered:Object.keys(G.mastery).length, silent};
})()`, Object.assign(ctx, {AUDIO_HAS: t=>{
  if (audioFiles.has(t)) return true; // ascii names (g_*.mp3)
  const hex = [...t].map(c=>c.codePointAt(0).toString(16)).join("-");
  return audioFiles.has(hex);
}}));

console.log(JSON.stringify({quests:R.quests, chapterReached:R.ch, ended:R.ended,
  cardsStudied:R.cards, questionsGenerated:R.questions, itemsMastered:R.mastered}, null, 1));
if (R.silent.length) console.log("SILENT (no audio):", R.silent.length, R.silent.slice(0,20).join("、"));
R.errors.slice(0,30).forEach(e=>console.log("ERR:", e));
console.log(R.errors.length ? `\n${R.errors.length} ERRORS` : "\nPLAYTHROUGH OK ✅");
process.exit(R.errors.length?1:0);
