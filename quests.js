// ============================================================
// カモのことだまクエスト — world, NPCs, quests, dialogue
// Dialogue text markup:
//   【漢字|かな】 = ruby furigana
//   {vocabKey}   = progressive word: shows English until the word
//                  is introduced, Japanese forever after.
// Chapters 1-4: dialogue is English-based (with tokens).
// Chapter 5: Japanese with small English subtitle.
// Chapters 6-8: Japanese only. No English anywhere.
// ============================================================

// ---------- NPCs ----------
const NPCS = {
  kame:    {emoji:"🐢", name:["Elder Kame","かめ【長老|ちょうろう】"]},
  usagi:   {emoji:"🐰", name:["Mimi the Rabbit","うさぎのミミ"]},
  fukurou: {emoji:"🦉", name:["Professor Fukurou","ふくろう【先生|せんせい】"]},
  oumu:    {emoji:"🦜", name:["Captain Oumu","オウム【船長|せんちょう】"]},
  nekos:   {emoji:"🐱", name:["Neko the Merchant","ネコ【商人|しょうにん】"]},
  kaeru:   {emoji:"🐸", name:["Kero the Traveler","【旅|たび】のケロ"]},
  kitsune: {emoji:"🦊", name:["Kitsune-sensei","きつね【先生|せんせい】"]},
  panda:   {emoji:"🐼", name:["Granny Panda","パンダばあちゃん"]},
  kuma:    {emoji:"🐻", name:["Kuma the Shopkeeper","クマ【店長|てんちょう】"]},
  inu:     {emoji:"🐶", name:["Station-master Inu","いぬ【駅員|えきいん】"]},
  tanuki:  {emoji:"🦝", name:["Tanuki the Innkeeper","【宿屋|やどや】のたぬき"]},
  tora:    {emoji:"🐯", name:["Tora the Samurai","とらの【侍|さむらい】"]},
  miko:    {emoji:"🐇", name:["Miko Yukina","【巫女|みこ】のユキナ"]},
  ryu:     {emoji:"🐲", name:["Kotodama Dragon","ことだま【竜|りゅう】"]},
};

// ---------- MAPS ----------
// legend chars: '#'=solid, '~'=water(solid), '.'=floor, ','=deco floor,
// letters = NPCs, digits = doors. tiles maps chars to emoji ('' = blank floor)
const MAPS = {
  shore: {
    name:["The Silent Shore","おとのない はま"],
    tiles:{"#":"🌴","~":"🌊",".":"","," :"🐚"},
    start:[3,6],
    grid:[
      "~~~~~~~~~~~~~~~~~~~~~~~~",
      "~~~~....................",
      "~~....,.....#....,......",
      "~~......K.......#...#...",
      "~....#.......U......#..1",
      "~~.....#..........#.....",
      "~~..,......F......#.....",
      "~~~....#......,.........",
      "~~~~....................",
      "~~~~~~..#...#...#...#...",
      "~~~~~~~.................",
      "~~~~~~~~~~~~~~~~~~~~~~~~",
    ],
    legend:{K:"kame", U:"usagi", F:"fukurou", "1":{door:"port", to:[2,6], needCh:2}},
  },
  port: {
    name:["Katakana Harbor","カタカナ【港|みなと】"],
    tiles:{"#":"🏮","~":"🌊",".":"","," :"📦"},
    start:[2,6],
    grid:[
      "~~~~~~~~~~~~~~~~~~~~~~~~",
      "~~~~~~~~~~~~~~~~~~~~~~~~",
      "....~~~⛵~~~~⛵~~~~~~~~~~~",
      "..........,.............",
      "0....O.......N....,.....",
      "....,....#..........#...",
      "..........K......#.....2",
      "...#...,.......,........",
      "........#...............",
      "..#.....#....#....#.....",
      "........................",
      "########################",
    ],
    legend:{O:"oumu", N:"nekos", K:"kaeru",
      "0":{door:"shore", to:[21,4]}, "2":{door:"village", to:[2,6], needCh:3}},
  },
  village: {
    name:["Hidamari Village","ひだまり【村|むら】"],
    tiles:{"#":"🏠","~":"🌊",".":"","," :"🌼"},
    start:[2,6],
    grid:[
      "########################",
      "#....,........,........#",
      "#..#...#....#...#......#",
      "#......T........,......#",
      "0...,......#.....P.....#",
      "#....#.........#.......#",
      "#.......,..M...........3",
      "#..#........#....#.....#",
      "#......,.........,.....#",
      "#...#......#...#.......#",
      "#......................#",
      "########################",
    ],
    legend:{T:"kitsune", P:"panda", M:"kuma",
      "0":{door:"port", to:[21,6]}, "3":{door:"town", to:[2,6], needCh:5}},
  },
  town: {
    name:["Suzunone Town","すずのね【町|まち】"],
    tiles:{"#":"🏢","~":"🌊",".":"","," :"🌸"},
    start:[2,6],
    grid:[
      "########################",
      "#..,....🚃🚃🚃............#",
      "#......................#",
      "#...I......#....,......#",
      "0......#.......F.......#",
      "#..,........#..........#",
      "#.....#....K...........4",
      "#..........,....#......#",
      "#...#....,.............#",
      "#......#......#....#...#",
      "#......................#",
      "########################",
    ],
    legend:{I:"inu", F:"fukurou", K:"kame",
      "0":{door:"village", to:[21,6]}, "4":{door:"capital", to:[2,6], needCh:6}},
  },
  capital: {
    name:[null,"【都|みやこ】"],
    tiles:{"#":"🏯","~":"🌊",".":"","," :"🏮"},
    start:[2,6],
    grid:[
      "########################",
      "#..,........,......,...#",
      "#....#....#....#.......#",
      "#...Y.........R........#",
      "0.......#..............#",
      "#...,........#....,....#",
      "#.........#............5",
      "#....#........#........#",
      "#..,......,........,...#",
      "#....#....#....#.......#",
      "#......................#",
      "########################",
    ],
    legend:{Y:"tanuki", R:"tora",
      "0":{door:"town", to:[21,6]}, "5":{door:"mountain", to:[2,8], needCh:7}},
  },
  mountain: {
    name:[null,"かみやま【神社|じんじゃ】"],
    tiles:{"#":"🌲","~":"🌊",".":"","," :"⛩️"},
    start:[2,8],
    grid:[
      "########################",
      "##..#...#....,.....#...#",
      "#....#....#.....#......#",
      "##....#.....G..........#",
      "#...#....,....#....#...#",
      "##....#...T...#........#",
      "#..#......M......#.....6",
      "##...#....#....#.......#",
      "0......#......#....#...#",
      "##..#....#..#.....#....#",
      "#......#.......#.......#",
      "########################",
    ],
    legend:{M:"miko", G:"ryu", T:"tora",
      "0":{door:"capital", to:[21,6]}, "6":{door:"castle", to:[2,9], needCh:8}},
  },
  castle: {
    name:[null,"しじまの【城|しろ】"],
    tiles:{"#":"🌑","~":"🌊",".":"","," :"🕯️"},
    start:[2,9],
    grid:[
      "########################",
      "#......................#",
      "#..#..#..#....#..#..#..#",
      "#......................#",
      "#....#....Z......#.....#",
      "#..,................,..#",
      "#......#........#......#",
      "#..#......R........#...#",
      "#......................#",
      "0..,................,..#",
      "#......................#",
      "########################",
    ],
    legend:{Z:"tora", R:"ryu", "0":{door:"mountain", to:[21,6]}},
  },
};

// ---------- kana groups ----------
const KG = {
  a_ka:["あ","い","う","え","お","か","き","く","け","こ"],
  sa_ta:["さ","し","す","せ","そ","た","ち","つ","て","と"],
  na_ha:["な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ"],
  ma_ya:["ま","み","む","め","も","や","ゆ","よ"],
  ra_wa:["ら","り","る","れ","ろ","わ","を","ん"],
  daku1:["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど"],
  daku2:["ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ"],
  combo:["っ","きゃ","きゅ","きょ","しゃ","しゅ","しょ","ちゃ","ちゅ","ちょ","にゃ","にゅ","にょ","ひゃ","ひゅ","ひょ","みゃ","みゅ","みょ","りゃ","りゅ","りょ","ぎゃ","ぎゅ","ぎょ","じゃ","じゅ","じょ","びゃ","びゅ","びょ","ぴゃ","ぴゅ","ぴょ"],
  kA_kT:["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト"],
  kN_kY:["ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ"],
  kR_kN:["ラ","リ","ル","レ","ロ","ワ","ヲ","ン","ー"],
  kDaku:["ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ"],
  kCombo:["キャ","キュ","キョ","シャ","シュ","ショ","チャ","チュ","チョ","ニャ","ニュ","ニョ","ヒャ","ヒュ","ヒョ","ミャ","ミュ","ミョ","リャ","リュ","リョ","ギャ","ギュ","ギョ","ジャ","ジュ","ジョ","ビャ","ビュ","ビョ","ピャ","ピュ","ピョ"],
};

// ---------- QUESTS ----------
// {id, ch, npc, map, title:[en,jp], intro:[[npcId,en,jp],...], steps:[...], outro, reward}
// step types:
//   {t:"learn", kind:"kana"|"vocab"|"kanji"|"grammar", items:[...]}
//   {t:"quiz", n, pass, items?}          (items default: all taught this quest)
//   {t:"battle", name:[en,jp], sprite, hp, dmg, items?}
// Chapters>=6: en fields are null. THE GAME NEVER SHOWS ENGLISH THERE.
const QUESTS = [
// ======== CHAPTER 1 — hiragana ========
{id:"q1_1", ch:1, npc:"kame", title:["First Sounds","はじめての おと"],
 intro:[
  ["kame","Ah… a little duck, washed ashore. This is Kotodama Island, where words are living spirits. A shadow called the Silence stole them all — even your voice, little one.",null],
  ["kame","But look — five sparks still float here: あ・い・う・え・お. These are the five vowels, the heart of every Japanese sound. Tap 🔊 to hear each spirit speak!",null],
  ["kame","Learn these ten spirits — the vowels あいうえお and the か line — and the beach will sing again.",null]],
 steps:[{t:"learn",kind:"kana",items:KG.a_ka},{t:"quiz",n:10,pass:8}],
 outro:[["kame","Wonderful! The tide sounds brighter already. Go see Mimi the rabbit — she's been waiting to teach someone.",null]],
 reward:{xp:30,gold:10}},

{id:"q1_2", ch:1, npc:"usagi", title:["Sand Scribbles","すなに かく"],
 intro:[
  ["usagi","You're the duck the Elder mentioned! I draw kana in the sand but the waves keep eating them. Help me remember the さ line and た line!",null],
  ["usagi","Watch out for the tricky ones: し, ち and つ don't follow the pattern. Listen closely! 🔊",null]],
 steps:[{t:"learn",kind:"kana",items:KG.sa_ta},{t:"quiz",n:10,pass:8}],
 outro:[["usagi","You're fast! Professor Fukurou will want to meet you. He's the grumpy owl by the trees.",null]],
 reward:{xp:30,gold:10}},

{id:"q1_3", ch:1, npc:"fukurou", title:["Night Class","よるの じゅぎょう"],
 intro:[
  ["fukurou","Hmph. A student at this hour? Very well. The な line and は line. Note that ふ is a soft breath, not a hard 'f'.",null],
  ["fukurou","And remember: へ looks like a little hill. You will see it again later doing a very strange grammar job.",null]],
 steps:[{t:"learn",kind:"kana",items:KG.na_ha},{t:"quiz",n:10,pass:8}],
 outro:[["fukurou","Acceptable. More than acceptable. Return to the Elder when you're ready for more.",null]],
 reward:{xp:35,gold:10}},

{id:"q1_4", ch:1, npc:"kame", title:["The Middle Rows","まんなかの おと"],
 intro:[
  ["kame","The ま line hums like the sea, and や・ゆ・よ are only three — the other two slots washed away long, long ago.",null]],
 steps:[{t:"learn",kind:"kana",items:KG.ma_ya},{t:"quiz",n:8,pass:7}],
 outro:[["kame","Your voice is returning, I can hear it. Only one row remains… but something dark stirs by the water.",null]],
 reward:{xp:35,gold:15}},

{id:"q1_5", ch:1, npc:"usagi", title:["The First Noise","はじめての ノイズ"],
 intro:[
  ["usagi","Kamo! A Noise-blob is gobbling the last kana on the beach — ら・り・る・れ・ろ and わ・を・ん! Learn them fast and drive it off!",null],
  ["usagi","ん is special — the only kana that stands alone without a vowel. It's the hum at the end of my favorite word… にんじん! (carrot!)",null]],
 steps:[{t:"learn",kind:"kana",items:KG.ra_wa},
        {t:"battle",name:["Noise Blob","ノイズ"],sprite:"👾",hp:5,dmg:8}],
 outro:[["usagi","You did it!! The whole beach is humming with kana now! ✨",null]],
 reward:{xp:50,gold:25}},

{id:"q1_6", ch:1, npc:"fukurou", title:["Voiced Marks","てんてんの まほう"],
 intro:[
  ["fukurou","Observe: two small dots ゛turn a whisper into a buzz. か becomes が. さ becomes ざ. Feel your throat vibrate!",null],
  ["fukurou","The だ line hides two lazy twins: ぢ and づ sound exactly like じ and ず. They rarely leave the house.",null]],
 steps:[{t:"learn",kind:"kana",items:KG.daku1},{t:"quiz",n:10,pass:8}],
 reward:{xp:40,gold:15}},

{id:"q1_7", ch:1, npc:"fukurou", title:["Pops and Puffs","まると てんてん"],
 intro:[
  ["fukurou","The は line is greedy — it takes both marks. Dots ゛make it buzz: ば. A little circle ゜makes it pop: ぱ!",null]],
 steps:[{t:"learn",kind:"kana",items:KG.daku2},{t:"quiz",n:8,pass:7}],
 outro:[["fukurou","You now know every single hiragana sound but the blended ones. The Elder has one final lesson.",null]],
 reward:{xp:40,gold:15}},

{id:"q1_8", ch:1, npc:"kame", title:["Small but Mighty","ちいさな かな"],
 intro:[
  ["kame","The last secret: small ゃゅょ glide onto other kana — き + small ゃ = きゃ, one quick beat. And the tiny っ is a silent stop, a held breath.",null],
  ["kame","Master these, and the Great Noise blocking the harbor bridge will fear your voice!",null]],
 steps:[{t:"learn",kind:"kana",items:KG.combo},{t:"quiz",n:12,pass:9},
        {t:"battle",name:["Great Noise","おおノイズ"],sprite:"🌀",hp:8,dmg:10}],
 outro:[
  ["kame","Magnificent! ひらがな — all of it — lives in you now. The bridge to カタカナ Harbor is open. Captain Oumu awaits!",null]],
 reward:{xp:80,gold:50}},

// ======== CHAPTER 2 — katakana ========
{id:"q2_1", ch:2, npc:"oumu", title:["Sharp Twins","かどのある ふたご"],
 intro:[
  ["oumu","Squawk! Welcome to the Harbor, duckling! Here we trade with far lands, so we write foreign words in katakana — same sounds you know, sharper feathers!",null],
  ["oumu","Every katakana is a twin of a hiragana you've met. ア is あ! Match them up: ア through ト!",null]],
 steps:[{t:"learn",kind:"kana",items:KG.kA_kT},{t:"quiz",n:12,pass:10}],
 reward:{xp:40,gold:20}},

{id:"q2_2", ch:2, npc:"nekos", title:["Cargo Labels","にもつの ラベル"],
 intro:[
  ["nekos","Meow~ my crates are all mislabeled! Learn ナ through ヨ and help me sort. Careful: シ and ツ, ソ and ン — the four troublemakers of the sea. Look at the ANGLE of the strokes!",null]],
 steps:[{t:"learn",kind:"kana",items:KG.kN_kY},{t:"quiz",n:12,pass:10}],
 reward:{xp:40,gold:20}},

{id:"q2_3", ch:2, npc:"kaeru", title:["The Long Dash","のばす ぼう"],
 intro:[
  ["kaeru","Ribbit! Last plain rows: ラ to ン. And meet my favorite mark: ー, the long dash! It streeeetches the vowel before it. コーヒー has two!",null]],
 steps:[{t:"learn",kind:"kana",items:KG.kR_kN},{t:"quiz",n:8,pass:7}],
 reward:{xp:35,gold:15}},

{id:"q2_4", ch:2, npc:"nekos", title:["Buzzing Cargo","てんてんの にもつ"],
 intro:[
  ["nekos","Same dots, same circle, same rules as hiragana — ガ, ザ, ダ, バ, パ! You already know the sounds. Just learn the shapes, meow.",null]],
 steps:[{t:"learn",kind:"kana",items:KG.kDaku},{t:"quiz",n:10,pass:8}],
 reward:{xp:40,gold:20}},

{id:"q2_5", ch:2, npc:"oumu", title:["The Pirate of Port","カタカナかいぞく"],
 intro:[
  ["oumu","Final lesson: blended katakana — キャ, シュ, チョ! Then… squawk! The Katakana Pirate is stealing our imported words! コーヒー! パン! ケーキ! Get them back!",null]],
 steps:[{t:"learn",kind:"kana",items:KG.kCombo},
        {t:"learn",kind:"vocab",items:["コーヒー","パン","ジュース","テレビ","ホテル","バス","タクシー","カメラ","レストラン","トイレ","ドア","テーブル","ペン","ケーキ","シャツ","プレゼント"]},
        {t:"battle",name:["Katakana Pirate","カタカナかいぞく"],sprite:"🏴‍☠️",hp:10,dmg:10}],
 outro:[
  ["oumu","The cargo is safe! You read BOTH kana scripts now, duckling. The road to Hidamari Village is open — real words await you there!",null]],
 reward:{xp:100,gold:60}},

// ======== CHAPTER 3 — first words & grammar ========
{id:"q3_1", ch:3, npc:"kitsune", title:["Words of Greeting","あいさつの ことだま"],
 intro:[
  ["kitsune","Welcome to Hidamari Village, Kamo-san. I am Kitsune, the village teacher. Here, we speak in real words — ことだま, word spirits.",
   "ようこそ、カモさん。わたしは きつねです。この【村|むら】の【先生|せんせい】です。"],
  ["kitsune","A word of warning, fledgling: once a word spirit joins you, it will ONLY answer to its Japanese name. The English shadow of it fades forever. That is how ことだま work.",null],
  ["kitsune","Let us begin with greetings — the words that open every door in Japan.",null]],
 steps:[{t:"learn",kind:"vocab",items:["おはよう","こんにちは","こんばんは","さようなら","ありがとう","すみません","はい","いいえ","おやすみなさい","はじめまして","おねがいします","げんき","ようこそ","だいじょうぶ"]},
        {t:"quiz",n:10,pass:8}],
 outro:[["kitsune","{ありがとう}, Kamo-san! See? The spirits already answer you. Rest, then return.",null]],
 reward:{xp:50,gold:25}},

{id:"q3_2", ch:3, npc:"kitsune", title:["This, That, What?","これ？それ？なに？"],
 intro:[
  ["kitsune",null,"Today: pointing words and question words. これ is near me, それ is near you, あれ is far from both of us."],
  ["kitsune",null,"And your first grammar: 「〜は〜です」. Never letters — only sound and kana. Listen 🔊: 「わたしは カモです。」"]],
 steps:[{t:"learn",kind:"vocab",items:["わたし","あなた","これ","それ","あれ","ここ","そこ","あそこ","だれ","なに","どこ","いつ","どれ","いくら","みんな","にほんご"]},
        {t:"learn",kind:"grammar",items:["g_desu","g_ka"]},
        {t:"quiz",n:12,pass:9}],
 outro:[["kitsune",null,"「あなたは すごいです！」Understand that? You just did. 🦊"]],
 reward:{xp:60,gold:30}},

{id:"q3_3", ch:3, npc:"kuma", title:["The Price of Honey","はちみつの ねだん"],
 intro:[
  ["kuma",null,"Welcome to my shop! Want to buy? Then you need numbers, {おかね}, and the mighty question 「{いくら}ですか」— 'how much is it?'"],
  ["kuma",null,"Numbers wear kanji suits: 一、二、三… Don't panic — kanji are just pictures with sounds. Furigana will whisper the reading above them."]],
 steps:[{t:"learn",kind:"vocab",items:["いち","に二","さん","よん","ご五","ろく","なな","はち","きゅう","じゅう","ひゃく","せん","まん","えん","おかね"]},
        {t:"learn",kind:"kanji",items:["一","二","三","四","五","六","七","八","九","十","百","千","万","円"]},
        {t:"quiz",n:12,pass:9}],
 outro:[["kuma",null,"「はちみつは 【三百|さんびゃく】{えん}です！」Cheap! Come again!"]],
 reward:{xp:70,gold:80}},

{id:"q3_4", ch:3, npc:"panda", title:["Granny's Album","ばあちゃんの アルバム"],
 intro:[
  ["panda",null,"Come, little {かも}, sit. This is my family album. Family words are the warmest ことだま of all."],
  ["panda",null,"This is my {おかあさん}… oh, how young she looks. And kanji for people: 人 looks like a person walking. 母 has arms holding a child."]],
 steps:[{t:"learn",kind:"vocab",items:["ひと","かぞく","おかあさん","おとうさん","おねえさん","おにいさん","いもうと","おとうと","こども","ともだち","おとこ","おんな","なまえ","せんせい","がくせい"]},
        {t:"learn",kind:"vocab",items:["ねこ","いぬ","とり","うま","うし","かも","うさぎ","かめ","きつね","くま"]},
        {t:"learn",kind:"kanji",items:["人","男","女","子","母","父","友","名","前"]},
        {t:"quiz",n:12,pass:9}],
 outro:[["panda",null,"You are like {かぞく} to me now, little one."]],
 reward:{xp:70,gold:30}},

{id:"q3_5", ch:3, npc:"kitsune", title:["The Connecting Thread","つなぐ いと"],
 intro:[
  ["kitsune",null,"Three small threads today: の ties words together — 「わたしの ほん」. も means 'too'. And じゃないです says what something is NOT."],
  ["kitsune",null,"A Silence-sprite has been whispering WRONG sentences in the village square, scrambling everyone's words. Correct its grammar in battle!"]],
 steps:[{t:"learn",kind:"grammar",items:["g_no","g_mo","g_janai"]},
        {t:"quiz",n:10,pass:8},
        {t:"battle",name:["Silence Sprite","しじまの こだま"],sprite:"👻",hp:8,dmg:12}],
 outro:[["kitsune",null,"The square is chattering happily again. {ありがとう}, Kamo-san!"]],
 reward:{xp:90,gold:50}},

// ======== CHAPTER 4 — actions & descriptions ========
{id:"q4_1", ch:4, npc:"kuma", title:["The Hungry Morning","おなかが すいた あさ"],
 intro:[
  ["kuma",null,"My shop now serves {あさごはん}! But the menu spirits fled. Learn food words and I'll cook you the best {たまご} on the island."],
  ["kuma",null,"Three tasty kanji too: 食 (a roof over rice!), 飲, and 水."]],
 steps:[{t:"learn",kind:"vocab",items:["ごはん","みず","おちゃ","さかな","にく","たまご","やさい","くだもの","りんご","おにぎり","しお","さとう","あさごはん","ひるごはん","ばんごはん","おかし","ぎゅうにゅう"]},
        {t:"learn",kind:"kanji",items:["食","飲","水"]},
        {t:"quiz",n:12,pass:9}],
 reward:{xp:70,gold:30}},

{id:"q4_2", ch:4, npc:"kitsune", title:["Words that Move","うごく ことだま"],
 intro:[
  ["kitsune",null,"Verbs! The spirits of action. {たべる}, {のむ}, {いく}… and the polite dress they wear: 〜ます."],
  ["kitsune",null,"One more thread: を marks what the verb eats. 「ごはんを たべます」— を is the arrow pointing at dinner."]],
 steps:[{t:"learn",kind:"vocab",items:["たべる","のむ","みる","いく","くる","かえる","する","よむ","かく","きく","はなす","かう"]},
        {t:"learn",kind:"kanji",items:["見","行","来","帰","読","書","話","買","聞"]},
        {t:"learn",kind:"grammar",items:["g_masu","g_wo"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:80,gold:40}},

{id:"q4_3", ch:4, npc:"panda", title:["Big Turtle, Small Duck","おおきい かめ、ちいさい かも"],
 intro:[
  ["panda",null,"Describing words! {おおきい} bear, {ちいさい} duck. い-adjectives, we call them — they all end in い and they love to change clothes."],
  ["panda",null,"Their kanji come in pairs: 大 and 小, 高 and 安, 新 and 古. Opposites hold hands."]],
 steps:[{t:"learn",kind:"vocab",items:["おおきい","ちいさい","たかい","やすい","あたらしい","ふるい","いい","わるい","おいしい","あつい","さむい","つめたい","たのしい","むずかしい","やさしい","はやい","おそい","ながい","みじかい"]},
        {t:"learn",kind:"kanji",items:["大","小","高","安","新","古","長","多","少","早"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:80,gold:40}},

{id:"q4_4", ch:4, npc:"kitsune", title:["Where and How","どこで？なにで？"],
 intro:[
  ["kitsune",null,"Place words, and the particles that steer them: に for destination — 「{がっこう}に {いく}」. で for where things happen. へ for direction (it reads え! Remember the little hill?)."]],
 steps:[{t:"learn",kind:"vocab",items:["えき","でんしゃ","みち","みせ","がっこう","いえ","こうえん","としょかん","くるま","じてんしゃ","ひこうき","ふね","はし","まち","くに","みなと"]},
        {t:"learn",kind:"grammar",items:["g_ni","g_de","g_e","g_ga"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:80,gold:40}},

{id:"q4_5", ch:4, npc:"kuma", title:["The Color Thief","いろどろぼう"],
 intro:[
  ["kuma",null,"Emergency! A Silence-imp drained all color from the village! {しろい} walls, {あかい} apples — all grey!"],
  ["kuma",null,"Learn colors and the quiet な-adjectives ({しずか}, {きれい}…), then paint the imp into a corner!"]],
 steps:[{t:"learn",kind:"vocab",items:["しろい","くろい","あかい","あおい","すき","きらい","しずか","にぎやか","きれい","ゆうめい"]},
        {t:"learn",kind:"kanji",items:["白","黒","赤","青"]},
        {t:"learn",kind:"grammar",items:["g_iadj","g_naadj"]},
        {t:"quiz",n:12,pass:9},
        {t:"battle",name:["Color Thief","いろどろぼう"],sprite:"🎭",hp:12,dmg:14}],
 outro:[["kuma",null,"The {あかい} apples are back! And the {あおい} sky! You're a hero, Kamo!"]],
 reward:{xp:110,gold:60}},

// ======== CHAPTER 5 — time, existence, N5 exam ========
// From here dialogue leads with Japanese; English shrinks to a subtitle.
{id:"q5_1", ch:5, npc:"inu", title:["The Timetable","じこくひょう"],
 intro:[
  ["inu","ようこそ、すずのね【町|まち】へ！ワン！わたしは【駅員|えきいん】です。【電車|でんしゃ】は【時間|じかん】が いのちです！",
   "Welcome to Suzunone Town! Woof! I'm the station-master. For trains, time is everything!"],
  ["inu","【今|いま】、【何時|なんじ】ですか。この【時計|とけい】で おぼえましょう！",
   "What time is it now? Let's learn with this clock!"]],
 steps:[{t:"learn",kind:"vocab",items:["いま","きょう","あした","きのう","あさ","ひる","よる","じかん","はん","とけい","まいにち","ごぜん","ごご"]},
        {t:"learn",kind:"kanji",items:["日","月","火","水","木","金","土","時","分","半","今","毎","間","午","後"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:90,gold:40}},

{id:"q5_2", ch:5, npc:"inu", title:["Seven Days","【一|いっ】しゅうかん"],
 intro:[
  ["inu","【曜日|ようび】です！【月|げつ】・【火|か】・【水|すい】・【木|もく】・【金|きん】・【土|ど】・【日|にち】——おぼえたら、きっぷを あげます！",
   "The days of the week! Learn them and I'll give you a ticket!"]],
 steps:[{t:"learn",kind:"vocab",items:["げつようび","かようび","すいようび","もくようび","きんようび","どようび","にちようび","せんしゅう","こんしゅう","らいしゅう","ことし","きょねん","らいねん"]},
        {t:"learn",kind:"vocab",items:["おきる","ねる","やすむ","あるく","はしる","まつ","あう","つくる","あそぶ","およぐ","うたう","たつ","すわる","はいる","でる","のる","わかる","おしえる","ならう","べんきょうする","しる"]},
        {t:"learn",kind:"kanji",items:["曜","週","年"]},
        {t:"learn",kind:"grammar",items:["g_past"]},
        {t:"quiz",n:12,pass:9}],
 reward:{xp:90,gold:40}},

{id:"q5_3", ch:5, npc:"fukurou", title:["The Professor Returns","ふくろう先生、ふたたび"],
 intro:[
  ["fukurou","ほう。りっぱに なりましたね。きょうは「あります・います」——ものと いきものの ちがいです。",
   "Hoo. You've grown. Today: あります and います — the difference between things and living beings."],
  ["fukurou","【机|つくえ】の【上|うえ】に【本|ほん】が あります。【木|き】の【下|した】に【犬|いぬ】が います。わかりますか。",
   "There's a book ON the desk. There's a dog UNDER the tree. See?"]],
 steps:[{t:"learn",kind:"vocab",items:["つくえ","いす","ほん","かみ","えんぴつ","かばん","でんわ","まど","へや","ふく","くつ","かさ","しゃしん","てがみ","かぎ"]},
        {t:"learn",kind:"vocab",items:["うえ","した","なか","そと","みぎ","ひだり"]},
        {t:"learn",kind:"kanji",items:["本","手","目","口","耳","足","上","下","中","外","右","左"]},
        {t:"learn",kind:"grammar",items:["g_aru"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:100,gold:50}},

{id:"q5_4", ch:5, npc:"fukurou", title:["Body and Sky","からだと そら"],
 intro:[
  ["fukurou","【体|からだ】の ことばと、【天気|てんき】の ことば。それから「〜たい」——ねがいの かたちです。「うみへ いきたい」。",
   "Body words and weather words. And 〜たい — the shape of wishes. 'I want to go to the sea.'"]],
 steps:[{t:"learn",kind:"vocab",items:["あたま","かお","め目","みみ","はな","くち","て手","あし","おなか","てんき","あめ","はれ","そら","やま","かわ","うみ"]},
        {t:"learn",kind:"kanji",items:["山","川","海","空","天","気","雨","電","車","駅","道","店"]},
        {t:"learn",kind:"grammar",items:["g_tai","g_kudasai","g_teiru"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:100,gold:50}},

{id:"q5_5", ch:5, npc:"kame", title:["The Elder's Compass","ちょうろうの らしんばん"],
 intro:[
  ["kame","カモよ、ここまで きましたか。【北|きた】・【南|みなみ】・【東|ひがし】・【西|にし】——らしんばんの ことばです。",
   "You've come far, Kamo. North, south, east, west — the compass words."],
  ["kame","そして「〜ましょう」「〜から」「〜より」。これで N5 の ちからが そろいます。",
   "And ましょう, から, より. With these, your N5 power is complete."]],
 steps:[{t:"learn",kind:"vocab",items:["きた","みなみ","ひがし","にし","ときどき","いつも","とても","すこし","たくさん","ちょっと","まだ","もう","いっしょに","おおい"]},
        {t:"learn",kind:"kanji",items:["北","南","東","西","学","校","生","先","何","国","語","休","出","入","立"]},
        {t:"learn",kind:"grammar",items:["g_mashou","g_kara","g_counter","g_yori"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:110,gold:60}},

{id:"q5_6", ch:5, npc:"kame", title:["TRIAL: The Silent General","しけん：ちんもくの しょうぐん"],
 intro:[
  ["kame","しじまの【将軍|しょうぐん】が【町|まち】の【門|もん】を ふさいでいます。これは あなたの N5 しけんです。",
   "The Silent General blocks the town gate. This is your N5 exam."],
  ["kame","かてば——ことばの【世界|せかい】が ひらきます。もう えいごの かげは いりません。いきなさい、カモ！",
   "Win, and the world of words opens. You won't need English shadows anymore. Go, Kamo!"]],
 steps:[{t:"battle",name:["The Silent General","ちんもくの しょうぐん"],sprite:"🗿",hp:20,dmg:15,scope:"n5"}],
 outro:[
  ["kame",null,"……みごとです。きょうから あなたは、にほんごで いきる。【都|みやこ】で あいましょう。"]],
 reward:{xp:200,gold:150}},

// ======== CHAPTER 6 — capital (JAPANESE ONLY from here) ========
{id:"q6_1", ch:6, npc:"tanuki", title:[null,"はたらく ことば"],
 intro:[
  ["tanuki",null,"いらっしゃい！【都|みやこ】の【旅館|りょかん】へ ようこそ！わたしは たぬき。この【宿|やど】の【主人|しゅじん】です。"],
  ["tanuki",null,"ここで【働|はたら】きませんか。まず、【仕事|しごと】の【言葉|ことば】を【覚|おぼ】えましょう。"],
  ["tanuki",null,"それから「て【形|けい】」——どうしを つなぐ、いちばん たいせつな かたちです！"]],
 steps:[{t:"learn",kind:"vocab",items:["しごと","かいしゃ","いしゃ","けいさつ","うんてん","きゅうりょう","かいぎ","うけつけ","ぎんこう","びょういん","ゆうびんきょく","はたらく","りょかん","ばしょ","きょうしつ"]},
        {t:"learn",kind:"kanji",items:["会","社","仕","事","銀","病","院","医","働","場","所","旅","館"]},
        {t:"learn",kind:"grammar",items:["g_te"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:110,gold:60}},

{id:"q6_2", ch:6, npc:"tora", title:[null,"みやこの きそく"],
 intro:[
  ["tora",null,"とまれ。【都|みやこ】には【規則|きそく】が ある。「〜なければならない」「〜てはいけない」——この かたちを【知|し】らない ものは、【門|もん】を とおれぬ。"],
  ["tora",null,"【危|あぶ】ない ところも おおい。【注意|ちゅうい】の【言葉|ことば】も【覚|おぼ】えろ。"]],
 steps:[{t:"learn",kind:"vocab",items:["きそく","ちゅうい","あぶない","あんぜん","じゆう","たいせつ","ちこく","おくれる","まにあう","いそぐ","とどく","きめる","はやい速"]},
        {t:"learn",kind:"kanji",items:["特","別","不","便","利","近","遠","速","遅","低","広"]},
        {t:"learn",kind:"grammar",items:["g_nai","g_nakereba","g_temoii"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:120,gold:60}},

{id:"q6_3", ch:6, npc:"tanuki", title:[null,"なつまつりの じゅんび"],
 intro:[
  ["tanuki",null,"【夏祭|なつまつ】りが ちかい！【花火|はなび】、おどり、うた——たのしみだねえ。"],
  ["tanuki",null,"「〜たことがある」で けいけんを、「〜たり〜たり」で たのしみを かたりましょう！"]],
 steps:[{t:"learn",kind:"vocab",items:["まつり","はなび","おどる","わらう","なく","おこる","よろこぶ","おどろく","おみやげ","おれい","あいさつ","かいわ","へんじ","おんがく","えいが","りょうり"]},
        {t:"learn",kind:"kanji",items:["祭","花","楽","音","映","画","写","真","声","色","料","理","野","菜","肉","魚","鳥","牛","馬","犬","鴨"]},
        {t:"learn",kind:"grammar",items:["g_takoto","g_tari","g_nagara"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:120,gold:70}},

{id:"q6_4", ch:6, npc:"tora", title:[null,"つよさの しゅぎょう"],
 intro:[
  ["tora",null,"【強|つよ】く なりたいか、カモどの。ならば「【可能形|かのうけい】」を さずけよう——「できる」の かたちだ。"],
  ["tora",null,"「【泳|およ】げる」「【飛|と】べる」……できることが ふえるのは、いきる よろこびだ。"]],
 steps:[{t:"learn",kind:"vocab",items:["つよい","よわい","おもい","かるい","ちかい","とおい","ひろい","せまい","あかるい","くらい","ちから","からだ","うごく","つづける","やめる"]},
        {t:"learn",kind:"kanji",items:["強","弱","重","軽","暗","明","体","力","動","運"]},
        {t:"learn",kind:"grammar",items:["g_kanou","g_youni"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:120,gold:70}},

{id:"q6_5", ch:6, npc:"tanuki", title:[null,"おくりものの こころ"],
 intro:[
  ["tanuki",null,"にほんごで いちばん うつくしいのは、「あげる・くれる・もらう」かもしれない。おくりものの こころが、ことばの なかに あるんだ。"],
  ["tanuki",null,"……たいへんだ！しじまの【鬼|おに】が【宿|やど】の まえに！れんしゅうの せいかを みせて！"]],
 steps:[{t:"learn",kind:"vocab",items:["かす","かりる","かえす","おくる","もつ","つかう","あらう","てつだう","はこぶ","むかえる","プレゼント"]},
        {t:"learn",kind:"kanji",items:["貸","借","返","送","持","待","使","洗","運","転"]},
        {t:"learn",kind:"grammar",items:["g_juju"]},
        {t:"quiz",n:12,pass:9},
        {t:"battle",name:[null,"しじまの【鬼|おに】"],sprite:"👹",hp:16,dmg:18}],
 outro:[["tanuki",null,"すごい すごい！カモくんは もう りっぱな【都|みやこ】の ひとだ！やまの【神社|じんじゃ】へ いってごらん。"]],
 reward:{xp:150,gold:100}},

// ======== CHAPTER 7 — shrine mountain ========
{id:"q7_1", ch:7, npc:"miko", title:[null,"こころの ことば"],
 intro:[
  ["miko",null,"ようこそ、かみやまへ。わたしは【巫女|みこ】のユキナ。ここは ことだまの うまれる【場所|ばしょ】です。"],
  ["miko",null,"「〜と【思|おも】う」「〜と【言|い】う」——こころの なかと、くちの そとを つなぐ ことばを まなびましょう。"]],
 steps:[{t:"learn",kind:"vocab",items:["こころ","きもち","ゆめ","おもう","いう","しらべる","おぼえる","わすれる","いみ","ことば","こたえ","もんだい","かんがえる"]},
        {t:"learn",kind:"kanji",items:["心","思","考","知","言","夢","意","味","問","題","答"]},
        {t:"learn",kind:"grammar",items:["g_toomou","g_toiu","g_tsumori"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:130,gold:70}},

{id:"q7_2", ch:7, npc:"miko", title:[null,"しきの やま"],
 intro:[
  ["miko",null,"【春|はる】は【花|はな】、【夏|なつ】は【星|ほし】、【秋|あき】は【月|つき】、【冬|ふゆ】は【雪|ゆき】。やまは いつも うつくしい。"],
  ["miko",null,"「〜ば」「〜たら」——もしもの ことばで、しきの ものがたりを つむぎましょう。"]],
 steps:[{t:"learn",kind:"vocab",items:["はる","なつ","あき","ふゆ","あたたかい","すずしい","もり","いけ","みずうみ","ほし","つき","ひかり","くもり","ゆうがた","しま","かぜ","ゆき","はやし","くも"]},
        {t:"learn",kind:"kanji",items:["春","夏","秋","冬","暑","寒","森","林","池","湖","島","星","光","雪","風","雲","晴","夕"]},
        {t:"learn",kind:"grammar",items:["g_joken"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:130,gold:70}},

{id:"q7_3", ch:7, npc:"tora", title:[null,"たびの じゅんび"],
 intro:[
  ["tora",null,"カモどの、しじまの【城|しろ】への【旅|たび】が ちかい。【準備|じゅんび】を おこたるな。"],
  ["tora",null,"「〜ておく」は じゅんびの ことば。「〜てしまう」は しっぱいと かんりょうの ことば。りょうほう つかいこなせ。"]],
 steps:[{t:"learn",kind:"vocab",items:["じゅんび","よてい","ようじ","やくそく","りょこう","ちず","にっき","おと","かたち","はじめる","おわる","あける","しめる","えらぶ","さがす","みつける"]},
        {t:"learn",kind:"kanji",items:["始","終","開","閉","地","図","世","界","形","字","文","法"]},
        {t:"learn",kind:"grammar",items:["g_teoku","g_teshimau"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:130,gold:80}},

{id:"q7_4", ch:7, npc:"miko", title:[null,"なみだと わらい"],
 intro:[
  ["miko",null,"つよい こころは、きもちの ことばを たくさん もっています。「うれしい」「かなしい」「こわい」……ぜんぶ、たいせつな ことだまです。"],
  ["miko",null,"「〜そうです」「〜かもしれない」——たしかじゃない ことを、やさしく いう ほうほうも。"]],
 steps:[{t:"learn",kind:"vocab",items:["うれしい","かなしい","さびしい","こわい","はずかしい","ねむい","いたい","びょうき","くすり","ねつ","けが","しんぱいする","あんしんする","たすける"]},
        {t:"learn",kind:"kanji",items:["薬","頭","顔","朝","昼","夜","親","切"]},
        {t:"learn",kind:"grammar",items:["g_sou","g_kamo"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:130,gold:80}},

{id:"q7_5", ch:7, npc:"ryu", title:[null,"りゅうの ためし"],
 intro:[
  ["ryu",null,"……よく きた、ちいさな【鴨|かも】よ。われは ことだまの【竜|りゅう】。ことばの みなもとを まもる もの。"],
  ["ryu",null,"さいごの ちから——「【受身|うけみ】」と「【使役|しえき】」を さずける。それを もって、わが ためしを うけよ！"]],
 steps:[{t:"learn",kind:"vocab",items:["せかい","ぶんか","れきし","ぶんぽう","じ字","はつおん","けいけん","しゅみ","りゆう","せつめい","けんきゅう","じゅぎょう","しゅくだい","しけん"]},
        {t:"learn",kind:"kanji",items:["勉","強","教","室","宿","試","験","説","研","究","用"]},
        {t:"learn",kind:"grammar",items:["g_ukemi","g_shieki"]},
        {t:"battle",name:[null,"ことだま【竜|りゅう】の ためし"],sprite:"🐲",hp:18,dmg:18}],
 outro:[
  ["ryu",null,"……みごと。なんじの こえ、まことに つよし。しじまの【城|しろ】の とびらは ひらかれた。ゆけ、ことばの ゆうしゃよ。"]],
 reward:{xp:180,gold:120}},

// ======== CHAPTER 8 — the Castle of Silence ========
{id:"q8_1", ch:8, npc:"tora", title:[null,"さいごの けいこ"],
 intro:[
  ["tora",null,"ここが しじまの【城|しろ】……。【王|おう】に あう まえに、さいごの けいこだ。"],
  ["tora",null,"【命令形|めいれいけい】——「【行|い】け！」「あきらめるな！」。たたかいには ひつような ことばだ。"]],
 steps:[{t:"learn",kind:"vocab",items:["ふかい","かたい","やわらかい","あまい","からい","にがい","きびしい","ただしい","めずらしい","すばらしい","すごい","ひくい","おなじ","ちがう"]},
        {t:"learn",kind:"kanji",items:["同","違","死","神","寺","服","着"]},
        {t:"learn",kind:"grammar",items:["g_meirei"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:140,gold:80}},

{id:"q8_2", ch:8, npc:"tora", title:[null,"ことばの よろい"],
 intro:[
  ["tora",null,"「〜ので」「〜のに」「〜はず」——りゆうと、いがいと、かくしん。この よろいを きて、【王|おう】の まえに たて。"]],
 steps:[{t:"learn",kind:"vocab",items:["たぶん","きっと","ぜんぜん","なかなか","やっと","そろそろ","だんだん","もちろん","たとえば","とくに","ほとんど","かならず","しんせつ","べんり","ふべん","ざんねん","とくべつ","ひま","まじめ","じょうず","へた","しっぱい"]},
        {t:"learn",kind:"kanji",items:["上","下","方"]},
        {t:"learn",kind:"grammar",items:["g_hazu","g_noni","g_node"]},
        {t:"quiz",n:14,pass:11}],
 reward:{xp:140,gold:80}},

{id:"q8_3", ch:8, npc:"ryu", title:[null,"けっせん：ちんもくの おう"],
 intro:[
  ["ryu",null,"【王|おう】の まには、のこりの ことだまが とらわれている。なんじの すべてを もって、ときはなて！"],
  ["ryu",null,"これが ほんとうの さいごの ためしだ。ゆけ、カモ！ことばの ちからを しんじて！"]],
 steps:[{t:"learn",kind:"vocab",items:["いろ","こえ","そうだん","あんない","おてら","じんじゃ","おくじょう","なおす","こわれる","おとす","ひろう","なくす","すてる","きる","つける","けす","しぬ"]},
        {t:"battle",name:[null,"ちんもくの【王|おう】"],sprite:"👑",hp:30,dmg:20,scope:"all"}],
 outro:[
  ["ryu",null,"……しずけさが、とけていく。ことだまが【世界|せかい】に かえっていく！"],
  ["ryu",null,"カモよ、なんじは もう まよわない。どこへ いっても、ことばが なんじの つばさだ。"],
  ["ryu",null,"さあ——【空|そら】へ！🦆✨"]],
 reward:{xp:500,gold:500}},
];

// ---------- GRAMMAR QUIZ BANK ----------
// {g, q (sentence with ＿＿), opts, a(index)} — always Japanese sentences.
const GQUIZ = [
 {g:"g_desu", q:"わたし＿＿カモです。", opts:["は","を","に","で"], a:0},
 {g:"g_desu", q:"これは みず＿＿。", opts:["です","ます","で","の"], a:0},
 {g:"g_ka", q:"あなたは がくせいです＿＿。", opts:["か","よ","は","を"], a:0},
 {g:"g_janai", q:"これは にく＿＿＿＿です。", opts:["じゃない","じゃありました","でした","ました"], a:0},
 {g:"g_no", q:"わたし＿＿ほんです。", opts:["の","は","を","も"], a:0},
 {g:"g_mo", q:"ねこが すきです。いぬ＿＿すきです。", opts:["も","は","の","を"], a:0},
 {g:"g_ga", q:"こうえんに いぬ＿＿います。", opts:["が","を","で","へ"], a:0},
 {g:"g_wo", q:"ごはん＿＿たべます。", opts:["を","が","は","に"], a:0},
 {g:"g_ni", q:"【七時|しちじ】＿＿おきます。", opts:["に","を","で","が"], a:0},
 {g:"g_de", q:"としょかん＿＿べんきょうします。", opts:["で","に","を","の"], a:0},
 {g:"g_e", q:"うみ＿＿いきます。", opts:["へ","を","が","の"], a:0},
 {g:"g_masu", q:"まいにち パンを たべ＿＿。（いまの こと）", opts:["ます","ました","です","たい"], a:0},
 {g:"g_masu", q:"にくを たべ＿＿＿。（ひてい）", opts:["ません","ます","ました","です"], a:0},
 {g:"g_past", q:"きのう ほんを よみ＿＿＿。", opts:["ました","ます","ません","です"], a:0},
 {g:"g_past", q:"きのうは あめ＿＿＿。", opts:["でした","です","ました","じゃない"], a:0},
 {g:"g_iadj", q:"きのうは さむ＿＿＿です。", opts:["かった","いでした","くて","いかった"], a:0},
 {g:"g_iadj", q:"この りんごは おいし＿＿＿です。（ひてい）", opts:["くない","じゃない","ないです","ません"], a:0},
 {g:"g_naadj", q:"＿＿＿な へやですね。", opts:["しずか","しずかい","しずかな","しずかで"], a:0},
 {g:"g_aru", q:"つくえの うえに ほんが＿＿＿＿。", opts:["あります","います","です","します"], a:0},
 {g:"g_aru", q:"こうえんに ねこが＿＿＿。", opts:["います","あります","です","なります"], a:0},
 {g:"g_tai", q:"おちゃを のみ＿＿です。", opts:["たい","たく","ほしい","ましょう"], a:0},
 {g:"g_kudasai", q:"ここに なまえを かい＿＿＿＿＿。", opts:["てください","ください","てます","でください"], a:0},
 {g:"g_teiru", q:"いま ごはんを たべ＿＿＿＿。", opts:["ています","てあります","ておきます","てしまいます"], a:0},
 {g:"g_mashou", q:"いっしょに いき＿＿＿＿。（さそい）", opts:["ましょう","たいです","てください","ませんでした"], a:0},
 {g:"g_kara", q:"さむいです＿＿、うちに います。", opts:["から","まで","のに","を"], a:0},
 {g:"g_counter", q:"りんごを みっ＿＿ください。", opts:["つ","人","円","まい"], a:0},
 {g:"g_yori", q:"でんしゃは バス＿＿＿はやいです。", opts:["より","ほど","まで","のほうが"], a:0},
 // ---- N4 ----
 {g:"g_te", q:"【朝|あさ】ごはんを【食|た】べ＿＿、【学校|がっこう】へ【行|い】きます。", opts:["て","た","る","れ"], a:0},
 {g:"g_te", q:"【窓|まど】を【開|あ】け＿＿ ください。", opts:["て","た","ない","れば"], a:0},
 {g:"g_nai", q:"【肉|にく】を【食|た】べ＿＿。（ふつうたい・ひてい・いま）", opts:["ない","ません","なかった","じゃない"], a:0},
 {g:"g_nakereba", q:"【宿題|しゅくだい】を し＿＿＿＿＿ならない。", opts:["なければ","なくても","ないでは","なくれば"], a:0},
 {g:"g_temoii", q:"ここで【写真|しゃしん】を とっ＿＿＿＿ですか。", opts:["てもいい","たり","ておく","てしまう"], a:0},
 {g:"g_temoii", q:"ここで【泳|およ】い＿＿＿＿＿＿ません。", opts:["ではいけ","でもいけ","てはいき","でおき"], a:0},
 {g:"g_takoto", q:"【富士山|ふじさん】に のぼっ＿＿＿＿＿あります。", opts:["たことが","たとき","たほうが","たままが"], a:0},
 {g:"g_tari", q:"【本|ほん】を【読|よ】ん＿＿、【音楽|おんがく】を【聞|き】いたり します。", opts:["だり","でも","だら","では"], a:0},
 {g:"g_nagara", q:"【音楽|おんがく】を【聞|き】き＿＿＿＿【勉強|べんきょう】します。", opts:["ながら","たがら","てから","ないで"], a:0},
 {g:"g_toomou", q:"【明日|あした】は【晴|は】れる＿＿【思|おも】います。", opts:["と","を","が","は"], a:0},
 {g:"g_toiu", q:"カモさんは「ありがとう」＿＿【言|い】いました。", opts:["と","を","に","は"], a:0},
 {g:"g_tsumori", q:"【来年|らいねん】、【旅行|りょこう】する＿＿＿＿です。（じぶんの よてい）", opts:["つもり","はず","そう","ため"], a:0},
 {g:"g_kanou", q:"ひらがなが【読|よ】＿＿＿。（かのう）", opts:["めます","みます","ませます","まれます"], a:0},
 {g:"g_youni", q:"【日本語|にほんご】が【話|はな】せる＿＿＿＿なりました。", opts:["ように","そうに","ことに","ばかり"], a:0},
 {g:"g_teoku", q:"きっぷを【買|か】っ＿＿＿＿。（じゅんび）", opts:["ておきます","てしまいます","ています","てみます"], a:0},
 {g:"g_teshimau", q:"ケーキを ぜんぶ【食|た】べ＿＿＿＿＿＿。（ぜんぶ！ざんねん）", opts:["てしまいました","ておきました","ていました","てありました"], a:0},
 {g:"g_juju", q:"【先生|せんせい】が【本|ほん】を＿＿＿＿＿。（先生→わたし）", opts:["くれました","あげました","もらいました","かしました"], a:0},
 {g:"g_juju", q:"【友|とも】だちに おみやげを＿＿＿＿＿。（わたし→友だち）", opts:["あげました","くれました","もらいました","とどきました"], a:0},
 {g:"g_ukemi", q:"【先生|せんせい】に ほめ＿＿＿＿。", opts:["られました","させました","ています","ておきました"], a:0},
 {g:"g_shieki", q:"【母|はは】は【弟|おとうと】に【野菜|やさい】を【食|た】べ＿＿＿＿。（しえき）", opts:["させました","られました","てあげました","ておきました"], a:0},
 {g:"g_joken", q:"【春|はる】に なれ＿＿、【花|はな】が さきます。", opts:["ば","たら","と","なら"], a:0},
 {g:"g_joken", q:"【駅|えき】に つい＿＿＿、でんわして ください。", opts:["たら","れば","ると","なら"], a:0},
 {g:"g_sou", q:"この ケーキは おいし＿＿です。（【見|み】たかんじ）", opts:["そう","らしい","はず","かも"], a:0},
 {g:"g_kamo", q:"【午後|ごご】は【雨|あめ】＿＿＿＿＿ません。", opts:["かもしれ","でしょう","はずが","そうに"], a:0},
 {g:"g_hazu", q:"【荷物|にもつ】は【明日|あした】【届|とど】く＿＿です。", opts:["はず","かも","ばかり","まま"], a:0},
 {g:"g_noni", q:"【薬|くすり】を【飲|の】んだ＿＿、【熱|ねつ】が【下|さ】がらない。", opts:["のに","ので","から","ため"], a:0},
 {g:"g_node", q:"【病気|びょうき】な＿＿、【休|やす】みます。", opts:["ので","のに","でも","ながら"], a:0},
 {g:"g_meirei", q:"あきらめる＿＿！【進|すす】め！", opts:["な","ぬ","ん","ない"], a:0},
];

// chapter meta: immersion stage per chapter
const CHAPTERS = {
  1:{stage:0, title:["Ch.1 — The Silent Shore","【第一章|だいいっしょう】 おとのない はま"]},
  2:{stage:0, title:["Ch.2 — Katakana Harbor","【第二章|だいにしょう】 カタカナ【港|みなと】"]},
  3:{stage:1, title:["Ch.3 — Hidamari Village","【第三章|だいさんしょう】 ひだまり【村|むら】"]},
  4:{stage:1, title:["Ch.4 — Words that Move","【第四章|だいよんしょう】 うごく ことだま"]},
  5:{stage:2, title:["Ch.5 — Suzunone Town","【第五章|だいごしょう】 すずのね【町|まち】"]},
  6:{stage:3, title:[null,"【第六章|だいろくしょう】 【都|みやこ】"]},
  7:{stage:3, title:[null,"【第七章|だいななしょう】 かみやま"]},
  8:{stage:3, title:[null,"【第八章|だいはっしょう】 しじまの【城|しろ】"]},
};
const CHAPTER_MAP = {1:"shore",2:"port",3:"village",4:"village",5:"town",6:"capital",7:"mountain",8:"castle"};
