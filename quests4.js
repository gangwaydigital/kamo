// ============================================================
// カモのことだまクエスト — N1 world scaffold (chapters 17-20)
// NOT LOADED YET: enable by adding data4.js + quests4.js <script>
// tags to index.html (after assets.js) and to the file lists in
// validate.js and qa_playthrough.js. See docs/n1-recipe.md.
//
// Adding CHAPTERS 17+ before quests exist would break the endgame
// (chapter-up past the true ending with no quests to offer), so this
// whole file stays out of the build until the content lands.
// ============================================================

Object.assign(NPCS, {
  fukurou2:{emoji:"🦉", name:[null,"ふくろう【博士|はかせ】"]},   // tower scholar (Fukurou returns, older)
  kame2:  {emoji:"🐢", name:[null,"かめの【賢者|けんじゃ】"]},     // Kame the sage, one last time
  hebi:   {emoji:"🐍", name:[null,"ヘビの【編集長|へんしゅうちょう】"]}, // editor-in-chief
  houou:  {emoji:"🐦‍🔥", name:[null,"ことばの【母|はは】"]},        // the Mother of Words (final)
});

Object.assign(MAPS, {
  tower: {  // ch17-18 学問の塔 (tower of learning)
    name:[null,"【学問|がくもん】の【塔|とう】"],
    tiles:{"#":"📚","~":"🌊",".":"","," :"🕯️"},
    start:[2,6],
    grid:[
      "########################",
      "#..,........,......,...#",
      "#....#....#....#...#...#",
      "#...F.........H........#",
      "0.......#..............#",
      "#...,........#....,....#",
      "#.........#............A",
      "#....#........#....#...#",
      "#..,......,........,...#",
      "#....#....#....#.......#",
      "#......................#",
      "########################",
    ],
    legend:{F:"fukurou2", H:"hebi",
      "0":{door:"palace", to:[21,9]}, "A":{door:"source", to:[2,9], needCh:19}},
  },
  source: { // ch19-20 ことばの源 (the Source)
    name:[null,"ことばの【源|みなもと】"],
    tiles:{"#":"🌌","~":"🌊",".":"","," :"✨"},
    start:[2,9],
    grid:[
      "########################",
      "#......................#",
      "#..#..#..#....#..#..#..#",
      "#......................#",
      "#....#....K......#.....#",
      "#..,................,..#",
      "#......#........#......#",
      "#..#......W........#...#",
      "#......................#",
      "0..,................,..#",
      "#......................#",
      "########################",
    ],
    legend:{K:"kame2", W:"houou", "0":{door:"tower", to:[21,6]}},
  },
});

Object.assign(CHAPTERS, {
  17:{stage:3, title:[null,"【第十七章|だいじゅうななしょう】 【学問|がくもん】の【塔|とう】"]},
  18:{stage:3, title:[null,"【第十八章|だいじゅうはっしょう】 【編集室|へんしゅうしつ】"]},
  19:{stage:3, title:[null,"【第十九章|だいじゅうきゅうしょう】 【古典|こてん】の【道|みち】"]},
  20:{stage:3, title:[null,"【第二十章|だいにじゅっしょう】 ことばの【源|みなもと】"]},
});
Object.assign(CHAPTER_MAP, {17:"tower",18:"tower",19:"source",20:"source"});
Object.assign(BGM.MAPTRACK, {tower:"field3", source:"dark"});

// NOTE for integration: q16_5 currently has final:true — when N1 lands,
// REMOVE that flag and give it to q20_5 (the Mother of Words, scope:"all",
// hp 40). The palace map also needs a forward door char to "tower"
// (needCh:17), mirroring how castle→city was added for the N3 arc.

// ---- N1_QUESTS + N1_GQUIZ (filled by the drafting agent) ----
