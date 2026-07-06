// ============================================================
// カモのことだまクエスト — art manifest, cutscenes, chiptune BGM
// The game must run fine if assets/ is missing: every consumer
// checks HAVE[path] and falls back to the emoji/gradient look.
// ============================================================

const ASSETS = {
  scenes:{
    title:  "assets/img/scene_title.jpg",
    opening:"assets/img/scene_opening.jpg",
    ch1:"assets/img/scene_ch1.jpg", ch2:"assets/img/scene_ch2.jpg",
    ch3:"assets/img/scene_ch3.jpg", ch4:"assets/img/scene_ch4.jpg",
    ch5:"assets/img/scene_ch5.jpg", ch6:"assets/img/scene_ch6.jpg",
    ch7:"assets/img/scene_ch7.jpg", ch8:"assets/img/scene_ch8.jpg",
    n5:"assets/img/scene_n5.jpg",   ending:"assets/img/scene_ending.jpg",
    title_video:"assets/video/title.mp4",
  },
  portraits:{
    kame:"assets/img/npc_kame.jpg", usagi:"assets/img/npc_usagi.jpg",
    fukurou:"assets/img/npc_fukurou.jpg", oumu:"assets/img/npc_oumu.jpg",
    nekos:"assets/img/npc_nekos.jpg", kaeru:"assets/img/npc_kaeru.jpg",
    kitsune:"assets/img/npc_kitsune.jpg", panda:"assets/img/npc_panda.jpg",
    kuma:"assets/img/npc_kuma.jpg", inu:"assets/img/npc_inu.jpg",
    tanuki:"assets/img/npc_tanuki.jpg", tora:"assets/img/npc_tora.jpg",
    miko:"assets/img/npc_miko.jpg", ryu:"assets/img/npc_ryu.jpg",
  },
  battles:{ // keyed by quest id
    q1_5:"assets/img/foe_noise.jpg",   q1_8:"assets/img/foe_oonoise.jpg",
    q2_5:"assets/img/foe_pirate.jpg",  q3_5:"assets/img/foe_ghost.jpg",
    q4_5:"assets/img/foe_colorthief.jpg", q5_6:"assets/img/foe_general.jpg",
    q6_5:"assets/img/foe_oni.jpg",     q7_5:"assets/img/foe_ryu.jpg",
    q8_3:"assets/img/foe_king.jpg",
  },
};
// Missing files degrade gracefully: CSS backgrounds fail silently and
// every <img> consumer sets onerror to hide itself.
function asset(group, key){
  return ASSETS[group][key] || null;
}

// ---------- painted world (map view) ----------
// Sprites are pre-keyed transparent PNGs; <img> onerror falls back to the emoji.
const MAPART = {
  shore:   {ground:"assets/img/ground_sand.jpg",   props:{"#":"assets/img/prop_palm.png",      ",":"assets/img/prop_shell.png"}},
  port:    {ground:"assets/img/ground_planks.jpg", props:{"#":"assets/img/prop_lantern.png",   ",":"assets/img/prop_crates.png"}},
  village: {ground:"assets/img/ground_grass.jpg",  props:{"#":"assets/img/prop_cottage.png",   ",":"assets/img/prop_flowers.png"}},
  town:    {ground:"assets/img/ground_cobble.jpg", props:{"#":"assets/img/prop_shophouse.png", ",":"assets/img/prop_sakura.png"}},
  capital: {ground:"assets/img/ground_paving.jpg", props:{"#":"assets/img/prop_pagoda.png",    ",":"assets/img/prop_toro.png"}},
  mountain:{ground:"assets/img/ground_moss.jpg",   props:{"#":"assets/img/prop_cedar.png",     ",":"assets/img/prop_minitorii.png"}},
  castle:  {ground:"assets/img/ground_slate.jpg",  props:{"#":"assets/img/prop_pillar.png",    ",":"assets/img/prop_candles.png"}},
};
const WATER_TEX = "assets/img/ground_water.jpg";
// character-free location art for dialogue/study backdrops (never shows the
// wrong character behind a conversation — chapter art is cutscene-only)
const LOCBG = {
  shore:"assets/img/bg_shore.jpg", port:"assets/img/bg_port.jpg",
  village:"assets/img/bg_village.jpg", town:"assets/img/bg_town.jpg",
  capital:"assets/img/bg_capital.jpg", mountain:"assets/img/bg_mountain.jpg",
  castle:"assets/img/bg_castle.jpg",
};
const DOOR_ART = {fwd:"assets/img/prop_torii.png", back:"assets/img/prop_sign.png"};
const CHARS = {
  kamo:"assets/img/chr_kamo.png",
  kame:"assets/img/chr_kame.png", usagi:"assets/img/chr_usagi.png",
  fukurou:"assets/img/chr_fukurou.png", oumu:"assets/img/chr_oumu.png",
  nekos:"assets/img/chr_nekos.png", kaeru:"assets/img/chr_kaeru.png",
  kitsune:"assets/img/chr_kitsune.png", panda:"assets/img/chr_panda.png",
  kuma:"assets/img/chr_kuma.png", inu:"assets/img/chr_inu.png",
  tanuki:"assets/img/chr_tanuki.png", tora:"assets/img/chr_tora.png",
  miko:"assets/img/chr_miko.png", ryu:"assets/img/chr_ryu.png",
};

// chapter-transition cutscene lines ([en, jp] — jp only from ch6)
const CUTSCENE_LINES = {
  ch2:[[null,"The Great Noise fades. Beyond the bridge, sails and sharp new letters glitter in the morning sun — Katakana Harbor!",null]],
  ch3:[[null,"Two scripts sing in your heart now. In Hidamari Village, real words are waiting to meet you.",null]],
  ch4:[[null,"The village stirs with life — food to taste, verbs to chase, colors to save.",null]],
  ch5:[[null,"A tram whistle echoes down the valley. Suzunone Town — where time itself speaks Japanese.",
        "すずのね【町|まち】——【時間|じかん】が にほんごで うごきだす。"]],
  n5:[[null,null,"しょうぐんは くずれた。ことばの【光|ひかり】が あなたの なかで かがやいている。"],
      [null,null,"きょうから、えいごの かげは もう いらない。"]],
  ch6:[[null,null,"【第六章|だいろくしょう】——【都|みやこ】。にほんごだけの【世界|せかい】が はじまる。"]],
  ch7:[[null,null,"かみやまの【神社|じんじゃ】が よんでいる。ことだまの みなもとへ……"]],
  ch8:[[null,null,"さいごの たたかい。しじまの【城|しろ】で、【王|おう】が まっている。"]],
};

// ---------- chiptune BGM (WebAudio, zero assets) ----------
// ponytail: procedural loops, not authored tracks — swap for real audio files if taste demands
const BGM = {
  ctx:null, master:null, timer:null, step:0, track:null, pending:null,
  SCALES:{ hirajoshi:[0,2,3,7,8], minyo:[0,2,4,7,9], insen:[0,1,5,7,10] },
  TRACKS:{
    title:  {bpm:66,  root:57, scale:"hirajoshi", drums:0, vol:0.8},
    field1: {bpm:92,  root:57, scale:"minyo",     drums:1, vol:0.7},
    field2: {bpm:104, root:60, scale:"minyo",     drums:2, vol:0.7},
    field3: {bpm:76,  root:55, scale:"insen",     drums:0, vol:0.7},
    dark:   {bpm:82,  root:50, scale:"insen",     drums:1, vol:0.8},
    battle: {bpm:142, root:52, scale:"hirajoshi", drums:3, vol:0.9},
    ending: {bpm:58,  root:60, scale:"minyo",     drums:0, vol:0.8},
  },
  MAPTRACK:{shore:"field1", port:"field1", village:"field1",
            town:"field2", capital:"field2", mountain:"field3", castle:"dark"},
  seq:{},
  rng(seed){ return function(){ seed|=0; seed=seed+0x6D2B79F5|0;
    let t=Math.imul(seed^seed>>>15,1|seed); t=t+Math.imul(t^t>>>7,61|t)^t;
    return ((t^t>>>14)>>>0)/4294967296; }; },
  buildSeq(name){
    const t=this.TRACKS[name], sc=this.SCALES[t.scale], r=this.rng([...name].reduce((a,c)=>a+c.charCodeAt(0),7));
    const mel=[], bass=[];
    let deg=4;
    for (let i=0;i<32;i++){
      if (r()<(name==="battle"?0.15:0.3)) mel.push(null);
      else { deg=Math.max(0,Math.min(9, deg+Math.floor(r()*5)-2));
             mel.push(t.root+12+sc[deg%5]+12*Math.floor(deg/5)); }
      bass.push(i%8===0 ? t.root-12 : i%8===4 ? t.root-5 : null);
    }
    return {mel,bass};
  },
  freq(m){ return 440*Math.pow(2,(m-69)/12); },
  ensureCtx(){
    if (this.ctx) return true;
    try{
      this.ctx = new (window.AudioContext||window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.connect(this.ctx.destination);
      this.setVol();
      return true;
    }catch(e){ return false; }
  },
  setVol(){
    if (!this.master) return;
    const on = (typeof G==="undefined" || !G) ? true : G.settings.music!==false;
    this.master.gain.value = on ? 0.16 : 0;
  },
  play(name){
    this.pending = name;
    if (!this.ctx){ return; }               // starts on first gesture
    this.setVol();
    if (this.track===name) return;
    this.stop(false);
    this.track = name; this.step = 0;
    if (!this.seq[name]) this.seq[name] = this.buildSeq(name);
    this.nextTime = this.ctx.currentTime + 0.05;
    this.timer = setInterval(()=>this.schedule(), 50);
  },
  stop(clearPending){
    if (this.timer){ clearInterval(this.timer); this.timer=null; }
    this.track = null;
    if (clearPending!==false) this.pending = null;
  },
  schedule(){
    const t = this.TRACKS[this.track]; if(!t) return;
    const stepDur = 60/t.bpm/4;
    while (this.nextTime < this.ctx.currentTime + 0.18){
      const i = this.step % 32;
      const {mel,bass} = this.seq[this.track];
      if (mel[i]!=null) this.pluck(this.nextTime, this.freq(mel[i]), 0.5*t.vol);
      if (bass[i]!=null) this.bass(this.nextTime, this.freq(bass[i]), 0.6*t.vol);
      if (t.drums){
        if (i%8===0) this.kick(this.nextTime);
        if (t.drums>=2 && i%4===2) this.hat(this.nextTime);
        if (t.drums>=3 && i%8===4) this.snare(this.nextTime);
      }
      this.nextTime += stepDur; this.step++;
    }
  },
  env(t,dur,g){
    const gain=this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001,t);
    gain.gain.exponentialRampToValueAtTime(g,t+0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    gain.connect(this.master); return gain;
  },
  pluck(t,f,g){ // koto-ish: two detuned triangles, fast decay
    for (const det of [0,3]){
      const o=this.ctx.createOscillator();
      o.type="triangle"; o.frequency.value=f; o.detune.value=det;
      o.connect(this.env(t,0.34,g*0.5)); o.start(t); o.stop(t+0.4);
    }
  },
  bass(t,f,g){
    const o=this.ctx.createOscillator(); o.type="sine"; o.frequency.value=f;
    o.connect(this.env(t,0.4,g)); o.start(t); o.stop(t+0.45);
  },
  noise(t,dur,g,filterType,fq){
    const len=Math.ceil(this.ctx.sampleRate*dur);
    const buf=this.ctx.createBuffer(1,len,this.ctx.sampleRate);
    const d=buf.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=Math.random()*2-1;
    const src=this.ctx.createBufferSource(); src.buffer=buf;
    const flt=this.ctx.createBiquadFilter(); flt.type=filterType; flt.frequency.value=fq;
    src.connect(flt); flt.connect(this.env(t,dur,g)); src.start(t);
  },
  kick(t){
    const o=this.ctx.createOscillator(); o.type="sine";
    o.frequency.setValueAtTime(120,t); o.frequency.exponentialRampToValueAtTime(40,t+0.1);
    o.connect(this.env(t,0.14,0.9)); o.start(t); o.stop(t+0.15);
  },
  hat(t){ this.noise(t,0.03,0.18,"highpass",7000); },
  snare(t){ this.noise(t,0.09,0.4,"bandpass",1800); },
  sting(){ // victory arpeggio
    if (!this.ctx) return;
    const t0=this.ctx.currentTime+0.02, sc=this.SCALES.minyo;
    [0,1,2,3,4].forEach((d,i)=>this.pluck(t0+i*0.09, this.freq(72+sc[d]), 0.5));
  },
};
// audio contexts need a user gesture — start pending track on the first one
["pointerdown","keydown"].forEach(ev=>document.addEventListener(ev,()=>{
  if (BGM.ensureCtx()){
    if (BGM.ctx.state==="suspended") BGM.ctx.resume();
    if (BGM.pending && !BGM.track) BGM.play(BGM.pending);
  }
},{once:false,capture:true}));

// per-map ambience backgrounds (CSS only, no assets)
const MAP_BG = {
  shore:"radial-gradient(ellipse at 50% 0%, #14304a 0%, #0a1626 70%)",
  port:"radial-gradient(ellipse at 50% 0%, #123a44 0%, #091a20 70%)",
  village:"radial-gradient(ellipse at 50% 0%, #24371c 0%, #101a0c 70%)",
  town:"radial-gradient(ellipse at 50% 0%, #33283e 0%, #150f1e 70%)",
  capital:"radial-gradient(ellipse at 50% 0%, #3d2a1c 0%, #1a100a 70%)",
  mountain:"radial-gradient(ellipse at 50% 0%, #1c3a33 0%, #0a1a16 70%)",
  castle:"radial-gradient(ellipse at 50% 0%, #1a1030 0%, #070510 75%)",
};
