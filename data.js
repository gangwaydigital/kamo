// ============================================================
// カモのことだまクエスト — curriculum data
// No romaji anywhere. Kana sound hints are English phonetic
// descriptions composed from previously-learned kana; primary
// pronunciation channel is speech synthesis (ja-JP).
// ============================================================

// ---------- KANA ----------
// Vowel sound hints (English descriptions, not romanization of words)
const VOWEL_HINT = {
  "あ":"the open 'ah' sound, as in \"father\"",
  "い":"the 'ee' sound, as in \"see\"",
  "う":"the 'oo' sound, as in \"food\" (lips relaxed)",
  "え":"the 'eh' sound, as in \"egg\"",
  "お":"the 'oh' sound, as in \"open\"",
};
// Consonant hints per row (composed with the vowel kana already learned)
const ROW_HINT = {
  k:"a hard 'k' as in \"key\"", s:"a soft 's' as in \"sun\"",
  t:"a light 't' as in \"top\"", n:"an 'n' as in \"nice\"",
  h:"a breathy 'h' as in \"hat\"", m:"an 'm' as in \"moon\"",
  y:"a 'y' as in \"yes\"", r:"a tapped sound between 'r' and 'l', like the quick 'dd' in \"buddy\"",
  w:"a soft 'w' as in \"water\"",
  g:"a hard 'g' as in \"go\"", z:"a 'z' as in \"zoo\"",
  d:"a 'd' as in \"day\"", b:"a 'b' as in \"boy\"", p:"a 'p' as in \"pop\"",
};
const KANA_SPECIAL = {
  "し":"the 'she' sound, as in \"sheep\"",
  "ち":"the 'chee' sound, as in \"cheese\"",
  "つ":"the 'ts' sound, as at the end of \"cats\", plus う",
  "ふ":"a gentle blow between 'f' and 'h', plus う",
  "ん":"a hum — 'n' or 'ng' on its own, the only kana with no vowel",
  "を":"sounds just like お — used only as a grammar particle",
  "じ":"the 'jee' sound, as in \"jeep\"",
  "ぢ":"sounds just like じ (rare)",
  "づ":"sounds just like ず (rare)",
};
const MNEMO = {
  "あ":"An Antenna on a rooftop.","い":"Two eels swimming side by side.","う":"A face seen from the side, mouth pushed out saying 'oo'.","え":"An Exotic bird strutting.","お":"A ball with a fancy ribbon — 'oh!'",
  "か":"A Kite with a little flag.","き":"A Key with two teeth.","く":"A bird's open beak — 'coo!'","け":"A Keg on its side.","こ":"Two Cozy logs lying together.",
  "さ":"A fishhook that caught a Salmon.","し":"SHE has long straight hair.","す":"A Swing spiraling.","せ":"A mouth Saying 'eh' with a tooth showing.","そ":"A SEWing zigzag stitch.",
  "た":"Looks like 't'+'a' squished together.","ち":"A CHEerleader's ribbon.","つ":"A TSUnami wave.","て":"A TElephone pole.","と":"A TOe with a splinter.",
  "な":"A knot tied by a Nun.","に":"A NEEdle beside two threads.","ぬ":"NOOdles tangled in a loop.","ね":"A NEst with a curled cat tail beside it.","の":"A NO-entry sign swirl.",
  "は":"A HAppy face with antenna.","ひ":"A big smiling grin — 'hee!'","ふ":"Mount Fuji puffing wind.","へ":"A little hill you climb over.","ほ":"A sailboat with a tall mast.",
  "ま":"A MAgician's swirl.","み":"The number 21 — 'me too!'","む":"A cow's face saying 'moo'.","め":"An eye — this kana means 'eye'!","も":"A fishhook catching MOre fish.",
  "や":"A YAk with one horn.","ゆ":"A UFO... no — a unique fish!","よ":"A YOyo hanging from a finger.",
  "ら":"A rapper's turntable.","り":"A RIver flowing in two streams.","る":"A loop with a cuRL at the end.","れ":"A REtriever sitting.","ろ":"The same loop but no curl — 'row' a boat.",
  "わ":"A WAsp's round belly.","を":"A dancer mid-twirl — 'whoa!'","ん":"Looks just like an 'n'.",
};
// row: consonant key ('' = vowel row); order matters (chart display)
const HIRA_ROWS = [
  {r:"", ks:["あ","い","う","え","お"]},
  {r:"k", ks:["か","き","く","け","こ"]},
  {r:"s", ks:["さ","し","す","せ","そ"]},
  {r:"t", ks:["た","ち","つ","て","と"]},
  {r:"n", ks:["な","に","ぬ","ね","の"]},
  {r:"h", ks:["は","ひ","ふ","へ","ほ"]},
  {r:"m", ks:["ま","み","む","め","も"]},
  {r:"y", ks:["や","ゆ","よ"]},
  {r:"r", ks:["ら","り","る","れ","ろ"]},
  {r:"w", ks:["わ","を","ん"]},
  {r:"g", ks:["が","ぎ","ぐ","げ","ご"], base:"か"},
  {r:"z", ks:["ざ","じ","ず","ぜ","ぞ"], base:"さ"},
  {r:"d", ks:["だ","ぢ","づ","で","ど"], base:"た"},
  {r:"b", ks:["ば","び","ぶ","べ","ぼ"], base:"は"},
  {r:"p", ks:["ぱ","ぴ","ぷ","ぺ","ぽ"], base:"は"},
];
const HIRA_COMBO = ["きゃ","きゅ","きょ","しゃ","しゅ","しょ","ちゃ","ちゅ","ちょ","にゃ","にゅ","にょ","ひゃ","ひゅ","ひょ","みゃ","みゅ","みょ","りゃ","りゅ","りょ","ぎゃ","ぎゅ","ぎょ","じゃ","じゅ","じょ","びゃ","びゅ","びょ","ぴゃ","ぴゅ","ぴょ"];
const KATA_MAP = { // katakana -> hiragana twin
  "ア":"あ","イ":"い","ウ":"う","エ":"え","オ":"お","カ":"か","キ":"き","ク":"く","ケ":"け","コ":"こ",
  "サ":"さ","シ":"し","ス":"す","セ":"せ","ソ":"そ","タ":"た","チ":"ち","ツ":"つ","テ":"て","ト":"と",
  "ナ":"な","ニ":"に","ヌ":"ぬ","ネ":"ね","ノ":"の","ハ":"は","ヒ":"ひ","フ":"ふ","ヘ":"へ","ホ":"ほ",
  "マ":"ま","ミ":"み","ム":"む","メ":"め","モ":"も","ヤ":"や","ユ":"ゆ","ヨ":"よ",
  "ラ":"ら","リ":"り","ル":"る","レ":"れ","ロ":"ろ","ワ":"わ","ヲ":"を","ン":"ん",
  "ガ":"が","ギ":"ぎ","グ":"ぐ","ゲ":"げ","ゴ":"ご","ザ":"ざ","ジ":"じ","ズ":"ず","ゼ":"ぜ","ゾ":"ぞ",
  "ダ":"だ","ヂ":"ぢ","ヅ":"づ","デ":"で","ド":"ど","バ":"ば","ビ":"び","ブ":"ぶ","ベ":"べ","ボ":"ぼ",
  "パ":"ぱ","ピ":"ぴ","プ":"ぷ","ペ":"ぺ","ポ":"ぽ",
  "キャ":"きゃ","キュ":"きゅ","キョ":"きょ","シャ":"しゃ","シュ":"しゅ","ショ":"しょ",
  "チャ":"ちゃ","チュ":"ちゅ","チョ":"ちょ","ニャ":"にゃ","ニュ":"にゅ","ニョ":"にょ",
  "ヒャ":"ひゃ","ヒュ":"ひゅ","ヒョ":"ひょ","ミャ":"みゃ","ミュ":"みゅ","ミョ":"みょ",
  "リャ":"りゃ","リュ":"りゅ","リョ":"りょ","ギャ":"ぎゃ","ギュ":"ぎゅ","ギョ":"ぎょ",
  "ジャ":"じゃ","ジュ":"じゅ","ジョ":"じょ","ビャ":"びゃ","ビュ":"びゅ","ビョ":"びょ",
  "ピャ":"ぴゃ","ピュ":"ぴゅ","ピョ":"ぴょ",
};
// Build KANA item table: id = the kana char itself
const KANA = {};
(function(){
  for (const row of HIRA_ROWS){
    for (let i=0;i<row.ks.length;i++){
      const k = row.ks[i];
      const vowel = "あいうえお"[row.r==="y" ? [0,2,4][i] : (row.r==="w"? [0,4,0][i] : i)];
      let hint;
      if (KANA_SPECIAL[k]) hint = KANA_SPECIAL[k];
      else if (row.r==="") hint = VOWEL_HINT[k];
      else hint = ROW_HINT[row.r] + ", plus the " + vowel + " vowel";
      if (row.base){
        // ゛ voices a consonant; the p-row's ゜ is not voicing — it makes the sound pop
        const verb = row.r==="p" ? " and add the little circle ゜ to make it pop: "
                                 : " and voice it with ゛: ";
        hint = "Take " + row.ks[i].normalize('NFD')[0].normalize('NFC') + verb +
          (KANA_SPECIAL[k] || ROW_HINT[row.r] + ", plus the " + vowel + " vowel");
      }
      KANA[k] = {k, type:"hira", hint, mnemo:MNEMO[k]||"", row:row.r};
    }
  }
  for (const c of HIRA_COMBO){
    const small = c[1]; const bigY = {"ゃ":"や","ゅ":"ゆ","ょ":"よ"}[small];
    KANA[c] = {k:c, type:"hira", row:"combo",
      hint:"Blend "+c[0]+" and "+bigY+" into one quick beat. The small "+small+" glides.", mnemo:""};
  }
  KANA["っ"] = {k:"っ", type:"hira", row:"combo",
    hint:"Small っ is a tiny silent pause — hold your breath one beat before the next sound.", mnemo:"A small wave that stops the flow."};
  for (const [kata,hira] of Object.entries(KATA_MAP)){
    KANA[kata] = {k:kata, type:"kata", twin:hira, row:"kata",
      hint:"Katakana twin of "+hira+" — same sound, sharper shape. Used for foreign words.", mnemo:""};
  }
  KANA["ー"] = {k:"ー", type:"kata", row:"kata",
    hint:"The long-vowel dash: stretch the vowel before it for one extra beat.", mnemo:"A road that keeps going."};
})();

// ---------- VOCAB ----------
// V(kana, kanjiForm|null, english, emoji, jlpt(5|4), category)
const VOCAB = {};
// key: optional explicit id when the reading collides with a kana id
// (the id is internal — display always uses .jp)
function V(jp,kj,en,e,lv,cat,key){ VOCAB[key||jp] = {jp,kj,en,e,lv,cat}; }
// -- greetings & basics (N5)
V("おはよう",null,"good morning","🌅",5,"greet");
V("こんにちは",null,"hello / good afternoon","☀️",5,"greet");
V("こんばんは",null,"good evening","🌙",5,"greet");
V("さようなら",null,"goodbye","👋",5,"greet");
V("ありがとう",null,"thank you","🙏",5,"greet");
V("すみません",null,"excuse me / sorry","🙇",5,"greet");
V("はい",null,"yes","⭕",5,"greet");
V("いいえ",null,"no","❌",5,"greet");
V("おやすみなさい",null,"good night","😴",5,"greet");
V("はじめまして",null,"nice to meet you","🤝",5,"greet");
V("おねがいします",null,"please (requesting)","🥺",5,"greet");
V("げんき","元気","healthy / energetic","💪",5,"greet");
V("ようこそ",null,"welcome","🎉",5,"greet");
V("だいじょうぶ","大丈夫","all right / okay","👌",5,"greet");
// -- pronouns & question words (N5)
V("わたし","私","I / me","🙋",5,"pron");
V("あなた",null,"you","🫵",5,"pron");
V("これ",null,"this (near me)","👇",5,"pron");
V("それ",null,"that (near you)","👉",5,"pron");
V("あれ",null,"that (over there)","🫰",5,"pron");
V("ここ",null,"here","📍",5,"pron");
V("そこ",null,"there","➡️",5,"pron");
V("あそこ",null,"over there","🔭",5,"pron");
V("だれ","誰","who","🕵️",5,"pron");
V("なに","何","what","❓",5,"pron");
V("どこ",null,"where","🗺️",5,"pron");
V("いつ",null,"when","⏰",5,"pron");
V("どれ",null,"which one","🤔",5,"pron");
V("いくら",null,"how much (price)","💴",5,"pron");
V("みんな",null,"everyone","👥",5,"pron");
// -- numbers (N5)
V("いち","一","one","1️⃣",5,"num");
V("に","二","two","2️⃣",5,"num","に二");
V("さん","三","three","3️⃣",5,"num");
V("よん","四","four","4️⃣",5,"num");
V("ご","五","five","5️⃣",5,"num","ご五");
V("ろく","六","six","6️⃣",5,"num");
V("なな","七","seven","7️⃣",5,"num");
V("はち","八","eight","8️⃣",5,"num");
V("きゅう","九","nine","9️⃣",5,"num");
V("じゅう","十","ten","🔟",5,"num");
V("ひゃく","百","hundred","💯",5,"num");
V("せん","千","thousand","🔢",5,"num");
V("まん","万","ten thousand","🧮",5,"num");
V("えん","円","yen","💴",5,"num");
// -- people & family (N5)
V("ひと","人","person","🧍",5,"people");
V("かぞく","家族","family","👨‍👩‍👧‍👦",5,"people");
V("おかあさん","お母さん","mother","👩",5,"people");
V("おとうさん","お父さん","father","👨",5,"people");
V("おねえさん","お姉さん","older sister","👧",5,"people");
V("おにいさん","お兄さん","older brother","👦",5,"people");
V("いもうと","妹","younger sister","👶",5,"people");
V("おとうと","弟","younger brother","🧒",5,"people");
V("こども","子ども","child","🧒",5,"people");
V("ともだち","友だち","friend","🤗",5,"people");
V("おとこ","男","man","👨",5,"people");
V("おんな","女","woman","👩",5,"people");
V("なまえ","名前","name","📛",5,"people");
V("せんせい","先生","teacher","🦊",5,"people");
V("がくせい","学生","student","🎓",5,"people");
// -- food & drink (N5)
V("ごはん",null,"rice / meal","🍚",5,"food");
V("みず","水","water","💧",5,"food");
V("おちゃ","お茶","tea","🍵",5,"food");
V("さかな","魚","fish","🐟",5,"food");
V("にく","肉","meat","🍖",5,"food");
V("たまご","卵","egg","🥚",5,"food");
V("やさい","野菜","vegetables","🥬",5,"food");
V("くだもの","果物","fruit","🍇",5,"food");
V("りんご",null,"apple","🍎",5,"food");
V("おにぎり",null,"rice ball","🍙",5,"food");
V("しお","塩","salt","🧂",5,"food");
V("さとう","砂糖","sugar","🍬",5,"food");
V("あさごはん","朝ごはん","breakfast","🍳",5,"food");
V("ひるごはん","昼ごはん","lunch","🍱",5,"food");
V("ばんごはん","晩ごはん","dinner","🍲",5,"food");
V("おかし","お菓子","sweets / snacks","🍡",5,"food");
V("ぎゅうにゅう","牛乳","milk","🥛",5,"food");
// -- katakana loanwords (N5)
V("コーヒー",null,"coffee","☕",5,"kata");
V("パン",null,"bread","🍞",5,"kata");
V("ジュース",null,"juice","🧃",5,"kata");
V("テレビ",null,"TV","📺",5,"kata");
V("ホテル",null,"hotel","🏨",5,"kata");
V("バス",null,"bus","🚌",5,"kata");
V("タクシー",null,"taxi","🚕",5,"kata");
V("カメラ",null,"camera","📷",5,"kata");
V("レストラン",null,"restaurant","🍽️",5,"kata");
V("トイレ",null,"toilet","🚻",5,"kata");
V("ドア",null,"door","🚪",5,"kata");
V("テーブル",null,"table","🪑",5,"kata");
V("ペン",null,"pen","🖊️",5,"kata");
V("ケーキ",null,"cake","🍰",5,"kata");
V("シャツ",null,"shirt","👕",5,"kata");
V("プレゼント",null,"present / gift","🎁",5,"kata");
// -- animals (N5-ish; island friends)
V("ねこ","猫","cat","🐱",5,"animal");
V("いぬ","犬","dog","🐶",5,"animal");
V("とり","鳥","bird","🐦",5,"animal");
V("うま","馬","horse","🐴",5,"animal");
V("うし","牛","cow","🐮",5,"animal");
V("かも","鴨","duck","🦆",5,"animal");
V("うさぎ",null,"rabbit","🐰",5,"animal");
V("かめ",null,"turtle","🐢",5,"animal");
V("きつね",null,"fox","🦊",5,"animal");
V("くま",null,"bear","🐻",5,"animal");
// -- body (N5)
V("あたま","頭","head","🗣️",5,"body");
V("かお","顔","face","😀",5,"body");
V("め","目","eye","👁️",5,"body","め目");
V("みみ","耳","ear","👂",5,"body");
V("はな","鼻","nose","👃",5,"body");
V("くち","口","mouth","👄",5,"body");
V("て","手","hand","✋",5,"body","て手");
V("あし","足","foot / leg","🦶",5,"body");
V("おなか",null,"belly / stomach","🫃",5,"body");
// -- verbs (N5)
V("たべる","食べる","to eat","🍽️",5,"verb");
V("のむ","飲む","to drink","🥤",5,"verb");
V("みる","見る","to see / watch","👀",5,"verb");
V("いく","行く","to go","🚶",5,"verb");
V("くる","来る","to come","🏃",5,"verb");
V("かえる","帰る","to return home","🏠",5,"verb");
V("する",null,"to do","💫",5,"verb");
V("よむ","読む","to read","📖",5,"verb");
V("かく","書く","to write","✍️",5,"verb");
V("きく","聞く","to listen / ask","👂",5,"verb");
V("はなす","話す","to speak","💬",5,"verb");
V("かう","買う","to buy","🛒",5,"verb");
V("おきる","起きる","to wake up","⏰",5,"verb");
V("ねる","寝る","to sleep","🛏️",5,"verb");
V("はたらく","働く","to work","🔨",4,"verb");
V("やすむ","休む","to rest","🌴",5,"verb");
V("あるく","歩く","to walk","🚶",5,"verb");
V("はしる","走る","to run","🏃",5,"verb");
V("まつ","待つ","to wait","⏳",5,"verb");
V("あう","会う","to meet","🤝",5,"verb");
V("つくる","作る","to make","🛠️",5,"verb");
V("あそぶ","遊ぶ","to play","🎮",5,"verb");
V("およぐ","泳ぐ","to swim","🏊",5,"verb");
V("うたう","歌う","to sing","🎤",5,"verb");
V("たつ","立つ","to stand","🧍",5,"verb");
V("すわる","座る","to sit","🪑",5,"verb");
V("はいる","入る","to enter","➡️",5,"verb");
V("でる","出る","to exit / leave","⬅️",5,"verb");
V("のる","乗る","to ride / board","🚃",5,"verb");
V("わかる","分かる","to understand","💡",5,"verb");
V("おしえる","教える","to teach / tell","👨‍🏫",5,"verb");
V("ならう","習う","to learn (from someone)","📝",5,"verb");
V("べんきょうする","勉強する","to study","📚",5,"verb");
// -- adjectives (N5)
V("おおきい","大きい","big","🐘",5,"adj");
V("ちいさい","小さい","small","🐜",5,"adj");
V("たかい","高い","tall / expensive","🗼",5,"adj");
V("やすい","安い","cheap","🏷️",5,"adj");
V("あたらしい","新しい","new","✨",5,"adj");
V("ふるい","古い","old (things)","🏚️",5,"adj");
V("いい",null,"good","👍",5,"adj");
V("わるい","悪い","bad","👎",5,"adj");
V("おいしい",null,"delicious","😋",5,"adj");
V("あつい","暑い","hot (weather)","🥵",5,"adj");
V("さむい","寒い","cold (weather)","🥶",5,"adj");
V("つめたい","冷たい","cold (to touch)","🧊",5,"adj");
V("たのしい","楽しい","fun","🎊",5,"adj");
V("むずかしい","難しい","difficult","🧗",5,"adj");
V("やさしい",null,"kind / easy","🌸",5,"adj");
V("はやい","早い","early","⚡",5,"adj");
V("おそい","遅い","late / slow","🐌",5,"adj");
V("ながい","長い","long","📏",5,"adj");
V("みじかい","短い","short","✂️",5,"adj");
V("しろい","白い","white","⚪",5,"adj");
V("くろい","黒い","black","⚫",5,"adj");
V("あかい","赤い","red","🔴",5,"adj");
V("あおい","青い","blue","🔵",5,"adj");
V("すき","好き","liked / favorite","❤️",5,"adj");
V("きらい","嫌い","disliked","💔",5,"adj");
V("しずか","静か","quiet","🤫",5,"adj");
V("にぎやか",null,"lively","🎪",5,"adj");
V("きれい",null,"pretty / clean","💎",5,"adj");
V("ゆうめい","有名","famous","🌟",5,"adj");
// -- time (N5)
V("いま","今","now","⌚",5,"time");
V("きょう","今日","today","📅",5,"time");
V("あした","明日","tomorrow","🌄",5,"time");
V("きのう","昨日","yesterday","🌆",5,"time");
V("あさ","朝","morning","🌅",5,"time");
V("ひる","昼","noon / daytime","🕛",5,"time");
V("よる","夜","night","🌃",5,"time");
V("じかん","時間","time / hour","⏱️",5,"time");
V("はん","半","half (past)","🌗",5,"time");
V("げつようび","月曜日","Monday","🌙",5,"time");
V("かようび","火曜日","Tuesday","🔥",5,"time");
V("すいようび","水曜日","Wednesday","💧",5,"time");
V("もくようび","木曜日","Thursday","🌳",5,"time");
V("きんようび","金曜日","Friday","💰",5,"time");
V("どようび","土曜日","Saturday","🪨",5,"time");
V("にちようび","日曜日","Sunday","☀️",5,"time");
V("せんしゅう","先週","last week","⏮️",5,"time");
V("こんしゅう","今週","this week","▶️",5,"time");
V("らいしゅう","来週","next week","⏭️",5,"time");
V("ことし","今年","this year","🎌",5,"time");
V("きょねん","去年","last year","🕰️",5,"time");
V("らいねん","来年","next year","🎆",5,"time");
V("まいにち","毎日","every day","🔁",5,"time");
V("ごぜん","午前","a.m.","🌤️",5,"time");
V("ごご","午後","p.m.","🌇",5,"time");
// -- places & transport (N5)
V("えき","駅","train station","🚉",5,"place");
V("でんしゃ","電車","train","🚃",5,"place");
V("みち","道","road / way","🛤️",5,"place");
V("みせ","店","shop","🏪",5,"place");
V("がっこう","学校","school","🏫",5,"place");
V("いえ","家","house / home","🏠",5,"place");
V("やま","山","mountain","⛰️",5,"place");
V("かわ","川","river","🏞️",5,"place");
V("うみ","海","sea","🌊",5,"place");
V("そら","空","sky","☁️",5,"place");
V("まち","町","town","🏘️",5,"place");
V("くに","国","country","🌏",5,"place");
V("こうえん","公園","park","🌳",5,"place");
V("としょかん","図書館","library","📚",5,"place");
V("ぎんこう","銀行","bank","🏦",4,"place");
V("びょういん","病院","hospital","🏥",4,"place");
V("ゆうびんきょく","郵便局","post office","📮",4,"place");
V("ひこうき","飛行機","airplane","✈️",5,"place");
V("じてんしゃ","自転車","bicycle","🚲",5,"place");
V("くるま","車","car","🚗",5,"place");
V("ふね","船","boat / ship","⛵",5,"place");
V("はし","橋","bridge","🌉",5,"place");
V("みなと","港","harbor / port","⚓",4,"place");
V("しま","島","island","🏝️",4,"place");
// -- weather (N5)
V("てんき","天気","weather","🌦️",5,"weather");
V("あめ","雨","rain","🌧️",5,"weather");
V("ゆき","雪","snow","❄️",5,"weather");
V("かぜ","風","wind","🌬️",5,"weather");
V("はれ","晴れ","clear sky","☀️",5,"weather");
V("くもり","曇り","cloudy","☁️",4,"weather");
// -- household & things (N5)
V("つくえ","机","desk","🪵",5,"thing");
V("いす",null,"chair","🪑",5,"thing");
V("ほん","本","book","📕",5,"thing");
V("かみ","紙","paper","📄",5,"thing");
V("えんぴつ","鉛筆","pencil","✏️",5,"thing");
V("かばん",null,"bag","👜",5,"thing");
V("とけい","時計","clock / watch","🕰️",5,"thing");
V("でんわ","電話","telephone","📞",5,"thing");
V("まど","窓","window","🪟",5,"thing");
V("へや","部屋","room","🛏️",5,"thing");
V("ふく","服","clothes","👗",5,"thing");
V("くつ","靴","shoes","👟",5,"thing");
V("かさ","傘","umbrella","☂️",5,"thing");
V("しゃしん","写真","photograph","🖼️",5,"thing");
V("おかね","お金","money","💰",5,"thing");
V("てがみ","手紙","letter","💌",5,"thing");
V("かぎ",null,"key","🔑",5,"thing");
// -- adverbs & connectors (N5)
V("とても",null,"very","💯",5,"adv");
V("すこし","少し","a little","🤏",5,"adv");
V("たくさん",null,"a lot","🗻",5,"adv");
V("ちょっと",null,"a bit / a moment","☝️",5,"adv");
V("まだ",null,"still / not yet","⏳",5,"adv");
V("もう",null,"already","✅",5,"adv");
V("ときどき","時々","sometimes","🎲",5,"adv");
V("いつも",null,"always","♾️",5,"adv");
V("いっしょに","一緒に","together","👫",5,"adv");
// -- directions & positions (N5)
V("うえ","上","up / above","⬆️",5,"dir");
V("した","下","down / below","⬇️",5,"dir");
V("なか","中","inside / middle","📦",5,"dir");
V("そと","外","outside","🌳",5,"dir");
V("みぎ","右","right","➡️",5,"dir");
V("ひだり","左","left","⬅️",5,"dir");
V("きた","北","north","🧭",5,"dir");
V("みなみ","南","south","🏖️",5,"dir");
V("ひがし","東","east","🌅",5,"dir");
V("にし","西","west","🌇",5,"dir");

// ======== N4 ========
// -- work & society
V("しごと","仕事","work / job","💼",4,"n4noun");
V("かいしゃ","会社","company","🏢",4,"n4noun");
V("いしゃ","医者","doctor","🩺",4,"n4noun");
V("けいさつ","警察","police","👮",4,"n4noun");
V("うんてん","運転","driving","🚘",4,"n4noun");
V("きゅうりょう","給料","salary","🪙",4,"n4noun");
V("かいぎ","会議","meeting","🗣️",4,"n4noun");
V("うけつけ","受付","reception desk","🛎️",4,"n4noun");
// -- learning & language
V("いみ","意味","meaning","🔍",4,"n4noun");
V("ことば","言葉","word / language","💭",4,"n4noun");
V("もんだい","問題","problem / question","⁉️",4,"n4noun");
V("こたえ","答え","answer","💡",4,"n4noun");
V("しけん","試験","exam","📝",4,"n4noun");
V("じゅぎょう","授業","class / lesson","🏫",4,"n4noun");
V("しゅくだい","宿題","homework","📓",4,"n4noun");
V("けんきゅう","研究","research","🔬",4,"n4noun");
V("せつめい","説明","explanation","📢",4,"n4noun");
V("りゆう","理由","reason","🤨",4,"n4noun");
V("きそく","規則","rule","📏",4,"n4noun");
V("ぶんか","文化","culture","🎎",4,"n4noun");
V("れきし","歴史","history","🏯",4,"n4noun");
V("ぶんぽう","文法","grammar","🧩",4,"n4noun");
V("じ","字","character / letter","🔤",4,"n4noun","じ字");
V("はつおん","発音","pronunciation","🗣️",4,"n4noun");
// -- life & plans
V("よてい","予定","plan / schedule","🗓️",4,"n4noun");
V("ようじ","用事","errand","🏃",4,"n4noun");
V("やくそく","約束","promise","🤙",4,"n4noun");
V("けいけん","経験","experience","🎖️",4,"n4noun");
V("しゅみ","趣味","hobby","🎨",4,"n4noun");
V("りょこう","旅行","trip / travel","🧳",4,"n4noun");
V("おんがく","音楽","music","🎵",4,"n4noun");
V("えいが","映画","movie","🎬",4,"n4noun");
V("りょうり","料理","cooking / dish","🍳",4,"n4noun");
V("せかい","世界","world","🌍",4,"n4noun");
V("ちず","地図","map","🗺️",4,"n4noun");
V("にっき","日記","diary","📔",4,"n4noun");
V("ゆめ","夢","dream","💤",4,"n4noun");
V("こころ","心","heart / mind","💗",4,"n4noun");
V("きもち","気持ち","feeling","🫀",4,"n4noun");
V("からだ","体","body","🧘",4,"n4noun");
V("ちから","力","strength / power","💪",4,"n4noun");
V("びょうき","病気","illness","🤒",4,"n4noun");
V("くすり","薬","medicine","💊",4,"n4noun");
V("ねつ","熱","fever","🌡️",4,"n4noun");
V("けが",null,"injury","🩹",4,"n4noun");
V("まつり","祭り","festival","🏮",4,"n4noun");
V("はなび","花火","fireworks","🎆",4,"n4noun");
V("おみやげ","お土産","souvenir","🎁",4,"n4noun");
V("おれい","お礼","expression of thanks / return gift","💝",4,"n4noun");
V("あいさつ",null,"greeting","🙋",4,"n4noun");
V("かいわ","会話","conversation","💬",4,"n4noun");
V("へんじ","返事","reply","↩️",4,"n4noun");
V("そうだん","相談","consultation / advice","🧑‍⚖️",4,"n4noun");
V("あんない","案内","guidance / guide","🪧",4,"n4noun");
V("ちゅうい","注意","caution / warning","⚠️",4,"n4noun");
V("ちこく","遅刻","being late","🏃‍💨",4,"n4noun");
V("じゅんび","準備","preparation","🎒",4,"n4noun");
V("しっぱい","失敗","failure / mistake","🫠",4,"n4noun");
V("もり","森","forest","🌲",4,"n4noun");
V("いけ","池","pond","🪷",4,"n4noun");
V("みずうみ","湖","lake","🏞️",4,"n4noun");
V("ほし","星","star","⭐",4,"n4noun");
V("つき","月","moon","🌕",4,"n4noun");
V("ひかり","光","light","🔆",4,"n4noun");
V("こえ","声","voice","🗣️",4,"n4noun");
V("おと","音","sound","🔊",4,"n4noun");
V("いろ","色","color","🌈",4,"n4noun");
V("かたち","形","shape","🔷",4,"n4noun");
V("ばしょ","場所","place / location","📍",4,"n4noun");
V("りょかん","旅館","traditional inn","🏮",4,"n4noun");
V("おくじょう","屋上","rooftop","🏙️",4,"n4noun");
V("じんじゃ","神社","shrine","⛩️",4,"n4noun");
V("おてら","お寺","temple","🛕",4,"n4noun");
// -- N4 verbs
V("おもう","思う","to think","🤔",4,"n4verb");
V("いう","言う","to say","🗨️",4,"n4verb");
V("つかう","使う","to use","🔧",4,"n4verb");
V("もつ","持つ","to hold / have","🤲",4,"n4verb");
V("おくる","送る","to send","📤",4,"n4verb");
V("あらう","洗う","to wash","🧼",4,"n4verb");
V("おぼえる","覚える","to memorize","🧠",4,"n4verb");
V("わすれる","忘れる","to forget","🫥",4,"n4verb");
V("はじめる","始める","to begin","🚦",4,"n4verb");
V("おわる","終わる","to end","🏁",4,"n4verb");
V("あける","開ける","to open","🔓",4,"n4verb");
V("しめる","閉める","to close","🔒",4,"n4verb");
V("かす","貸す","to lend","🫴",4,"n4verb");
V("かりる","借りる","to borrow","🙏",4,"n4verb");
V("かえす","返す","to give back","🔄",4,"n4verb");
V("とどく","届く","to be delivered","📬",4,"n4verb");
V("きめる","決める","to decide","⚖️",4,"n4verb");
V("しらべる","調べる","to look up / research","🔎",4,"n4verb");
V("なおす","直す","to fix","🔨",4,"n4verb");
V("てつだう","手伝う","to help","🤝",4,"n4verb");
V("いそぐ","急ぐ","to hurry","💨",4,"n4verb");
V("うごく","動く","to move","🌀",4,"n4verb");
V("はこぶ","運ぶ","to carry","📦",4,"n4verb");
V("むかえる","迎える","to welcome / pick up","🫂",4,"n4verb");
V("おくれる","遅れる","to be late","⌛",4,"n4verb");
V("まにあう","間に合う","to be on time","🎯",4,"n4verb");
V("やめる",null,"to quit / stop","🛑",4,"n4verb");
V("つづける","続ける","to continue","➰",4,"n4verb");
V("えらぶ","選ぶ","to choose","☑️",4,"n4verb");
V("さがす","探す","to search for","🔦",4,"n4verb");
V("みつける","見つける","to find","🎉",4,"n4verb");
V("おとす","落とす","to drop","🕳️",4,"n4verb");
V("ひろう","拾う","to pick up","🪙",4,"n4verb");
V("なくす",null,"to lose (something)","😱",4,"n4verb");
V("すてる","捨てる","to throw away","🗑️",4,"n4verb");
V("きる","着る","to wear (top)","👘",4,"n4verb");
V("つける",null,"to turn on / attach","💡",4,"n4verb");
V("けす","消す","to turn off / erase","🌑",4,"n4verb");
V("こわれる","壊れる","to break (by itself)","💥",4,"n4verb");
V("たすける","助ける","to save / rescue","🦸",4,"n4verb");
V("よろこぶ","喜ぶ","to be delighted","🥳",4,"n4verb");
V("おどろく","驚く","to be surprised","😲",4,"n4verb");
V("しんぱいする","心配する","to worry","😟",4,"n4verb");
V("あんしんする","安心する","to feel relieved","😮‍💨",4,"n4verb");
V("おどる","踊る","to dance","💃",4,"n4verb");
V("わらう","笑う","to laugh","😆",4,"n4verb");
V("なく","泣く","to cry","😢",4,"n4verb");
V("おこる","怒る","to get angry","😠",4,"n4verb");
// -- N4 adjectives
V("あかるい","明るい","bright / cheerful","🔆",4,"n4adj");
V("くらい","暗い","dark","🌑",4,"n4adj");
V("あたたかい","暖かい","warm","🌤️",4,"n4adj");
V("すずしい","涼しい","cool (weather)","🍃",4,"n4adj");
V("つよい","強い","strong","🦾",4,"n4adj");
V("よわい","弱い","weak","🥀",4,"n4adj");
V("おもい","重い","heavy","🏋️",4,"n4adj");
V("かるい","軽い","light (weight)","🎈",4,"n4adj");
V("ちかい","近い","near","📍",4,"n4adj");
V("とおい","遠い","far","🔭",4,"n4adj");
V("ひろい","広い","spacious / wide","🏟️",4,"n4adj");
V("せまい","狭い","narrow / cramped","🚪",4,"n4adj");
V("ふかい","深い","deep","🌊",4,"n4adj");
V("かたい","固い","hard / firm","🪨",4,"n4adj");
V("やわらかい","柔らかい","soft","🧸",4,"n4adj");
V("あまい","甘い","sweet","🍯",4,"n4adj");
V("からい","辛い","spicy","🌶️",4,"n4adj");
V("にがい","苦い","bitter","☕",4,"n4adj");
V("うれしい",null,"happy / glad","😊",4,"n4adj");
V("かなしい","悲しい","sad","😭",4,"n4adj");
V("さびしい",null,"lonely","🌫️",4,"n4adj");
V("こわい","怖い","scary","👻",4,"n4adj");
V("はずかしい","恥ずかしい","embarrassed","😳",4,"n4adj");
V("ねむい","眠い","sleepy","🥱",4,"n4adj");
V("いたい","痛い","painful","🤕",4,"n4adj");
V("きびしい","厳しい","strict","🧑‍⚖️",4,"n4adj");
V("ただしい","正しい","correct","✅",4,"n4adj");
V("めずらしい","珍しい","rare / unusual","🦄",4,"n4adj");
V("すばらしい",null,"wonderful","🌟",4,"n4adj");
V("しんせつ","親切","kind (person)","😇",4,"n4adj");
V("べんり","便利","convenient","🛠️",4,"n4adj");
V("ふべん","不便","inconvenient","🚧",4,"n4adj");
V("たいせつ","大切","important / precious","💎",4,"n4adj");
V("ざんねん","残念","regrettable / too bad","😞",4,"n4adj");
V("とくべつ","特別","special","🏅",4,"n4adj");
V("じゆう","自由","free / freedom","🕊️",4,"n4adj");
V("あんぜん","安全","safe","🦺",4,"n4adj");
V("あぶない","危ない","dangerous","☢️",4,"n4adj");
V("ひま","暇","free time / idle","🛋️",4,"n4adj");
V("まじめ",null,"serious / diligent","🧐",4,"n4adj");
V("じょうず","上手","skilled","🎯",4,"n4adj");
V("へた","下手","unskilled","🎳",4,"n4adj");
V("すごい",null,"amazing","🤩",4,"n4adj");
// -- N4 adverbs
V("たぶん",null,"probably","🎲",4,"n4adv");
V("きっと",null,"surely","💫",4,"n4adv");
V("ぜんぜん","全然","not at all (+neg.)","🙅",4,"n4adv");
V("なかなか",null,"quite / not easily","🐢",4,"n4adv");
V("やっと",null,"finally / at last","🏁",4,"n4adv");
V("そろそろ",null,"soon / about time to","🕰️",4,"n4adv");
V("だんだん",null,"gradually","📈",4,"n4adv");
V("もちろん",null,"of course","😤",4,"n4adv");
V("たとえば","例えば","for example","🧪",4,"n4adv");
V("とくに","特に","especially","🎯",4,"n4adv");
V("ほとんど",null,"almost all / hardly","🧮",4,"n4adv");
V("かならず","必ず","without fail","📌",4,"n4adv");
// -- N4 extras (seasons, misc)
V("はる","春","spring","🌸",4,"n4noun");
V("なつ","夏","summer","🌻",4,"n4noun");
V("あき","秋","autumn","🍁",4,"n4noun");
V("ふゆ","冬","winter","⛄",4,"n4noun");
V("ゆうがた","夕方","evening","🌆",4,"n4noun");
V("ひくい","低い","low / short","🪜",4,"n4adj");
V("おなじ","同じ","same","🟰",4,"n4adj");
V("ちがう","違う","to differ / be wrong","🚫",4,"n4verb");
V("しぬ","死ぬ","to die","💀",4,"n4verb");
// -- corrections & missing core words
V("にほんご","日本語","Japanese language","🗾",5,"n4noun");
V("おおい","多い","many / much","➕",5,"adj");
V("しる","知る","to know","💡",5,"verb");
V("かんがえる","考える","to think / consider","🧠",4,"n4verb");
V("きょうしつ","教室","classroom","🏫",4,"n4noun");
V("はやし","林","grove / woods","🌲",4,"n4noun");
V("くも","雲","cloud","☁️",4,"n4noun");
V("はやい","速い","fast (speed)","🏎️",4,"n4adj","はやい速");

// ---------- KANJI ----------
// K(char, readings-in-kana, english, exampleWord(vocab key))
const KANJI = {};
function K(c,yomi,en,ex){ KANJI[c] = {c,yomi,en,ex}; }
// N5 (~85)
K("一","いち・ひと","one","いち"); K("二","に・ふた","two","に二"); K("三","さん・みっ","three","さん");
K("四","よん・し","four","よん"); K("五","ご・いつ","five","ご五"); K("六","ろく・むっ","six","ろく");
K("七","なな・しち","seven","なな"); K("八","はち・やっ","eight","はち"); K("九","きゅう・く","nine","きゅう");
K("十","じゅう・とお","ten","じゅう"); K("百","ひゃく","hundred","ひゃく"); K("千","せん","thousand","せん");
K("万","まん","ten thousand","まん"); K("円","えん","yen / circle","えん");
K("日","にち・ひ・び","sun / day","にちようび"); K("月","げつ・つき","moon / month","げつようび");
K("火","か・ひ","fire","かようび"); K("水","すい・みず","water","みず");
K("木","もく・き","tree","もくようび"); K("金","きん・かね","gold / money","おかね");
K("土","ど・つち","earth / soil","どようび"); K("曜","よう","day of week","にちようび");
K("週","しゅう","week","こんしゅう"); K("年","ねん・とし","year","ことし");
K("時","じ・とき","time / hour","じかん"); K("分","ふん・ぶん・わ","minute / divide","わかる");
K("半","はん","half","はん"); K("今","こん・いま","now","いま");
K("人","じん・にん・ひと","person","ひと"); K("男","だん・おとこ","man","おとこ");
K("女","じょ・おんな","woman","おんな"); K("子","し・こ","child","こども");
K("母","ぼ・はは・かあ","mother","おかあさん"); K("父","ふ・ちち・とう","father","おとうさん");
K("友","ゆう・とも","friend","ともだち"); K("名","めい・な","name","なまえ");
K("前","ぜん・まえ","before / front","なまえ");
K("大","だい・おお","big","おおきい"); K("小","しょう・ちい","small","ちいさい");
K("高","こう・たか","tall / expensive","たかい"); K("安","あん・やす","cheap / safe","やすい");
K("新","しん・あたら","new","あたらしい"); K("古","こ・ふる","old","ふるい");
K("長","ちょう・なが","long / chief","ながい"); K("多","た・おお","many","おおい");
K("少","しょう・すこ・すく","few / little","すこし"); K("早","そう・はや","early","はやい");
K("白","はく・しろ","white","しろい"); K("黒","こく・くろ","black","くろい");
K("赤","せき・あか","red","あかい"); K("青","せい・あお","blue","あおい");
K("食","しょく・た","eat","たべる"); K("飲","いん・の","drink","のむ");
K("見","けん・み","see","みる"); K("行","こう・い","go","いく");
K("来","らい・く・き","come","くる"); K("帰","き・かえ","return","かえる");
K("読","どく・よ","read","よむ"); K("書","しょ・か","write","かく");
K("話","わ・はな","speak","はなす"); K("買","ばい・か","buy","かう");
K("聞","ぶん・き","hear / ask","きく"); K("休","きゅう・やす","rest","やすむ");
K("出","しゅつ・で","exit","でる"); K("入","にゅう・はい・い","enter","はいる");
K("立","りつ・た","stand","たつ");
K("山","さん・やま","mountain","やま"); K("川","せん・かわ","river","かわ");
K("海","かい・うみ","sea","うみ"); K("空","くう・そら","sky","そら");
K("天","てん","heaven","てんき"); K("気","き・け","spirit / air","げんき");
K("雨","う・あめ","rain","あめ"); K("電","でん","electricity","でんしゃ");
K("車","しゃ・くるま","car / vehicle","くるま"); K("駅","えき","station","えき");
K("道","どう・みち","road","みち"); K("店","てん・みせ","shop","みせ");
K("学","がく・まな","study","がっこう"); K("校","こう","school","がっこう");
K("生","せい・い・う","life / birth","せんせい"); K("先","せん・さき","previous / ahead","せんせい");
K("何","なに・なん","what","なに"); K("国","こく・くに","country","くに");
K("語","ご・かた","language","にほんご"); K("外","がい・そと","outside","そと");
K("上","じょう・うえ","up / above","うえ"); K("下","か・げ・した・くだ","down / below","へた");
K("中","ちゅう・なか","middle / inside","なか"); K("右","う・みぎ","right","みぎ");
K("左","さ・ひだり","left","ひだり"); K("北","ほく・きた","north","きた");
K("南","なん・みなみ","south","みなみ"); K("東","とう・ひがし","east","ひがし");
K("西","せい・にし","west","にし"); K("午","ご","noon","ごぜん");
K("後","ご・あと・うし","after / behind","ごご"); K("間","かん・あいだ・ま","interval / between","じかん");
K("毎","まい","every","まいにち"); K("本","ほん・もと","book / origin","ほん");
K("手","しゅ・て","hand","て手"); K("目","もく・め","eye","め目");
K("口","こう・くち","mouth","くち"); K("耳","じ・みみ","ear","みみ");
K("足","そく・あし","foot","あし");
// N4 (~110)
K("会","かい・あ","meet","かいしゃ"); K("社","しゃ","company / shrine","かいしゃ");
K("仕","し","serve","しごと"); K("事","じ・こと","thing / matter","しごと");
K("銀","ぎん","silver","ぎんこう"); K("病","びょう・やまい","illness","びょういん");
K("院","いん","institution","びょういん"); K("医","い","medicine (field)","いしゃ");
K("薬","やく・くすり","medicine (drug)","くすり"); K("体","たい・からだ","body","からだ");
K("頭","とう・あたま","head","あたま"); K("顔","がん・かお","face","かお");
K("心","しん・こころ","heart","こころ"); K("思","し・おも","think","おもう");
K("考","こう・かんが","consider","かんがえる"); K("知","ち・し","know","しる");
K("言","げん・い・こと","say","いう"); K("音","おん・おと","sound","おと");
K("楽","がく・らく・たの","music / fun","おんがく"); K("映","えい・うつ","reflect / project","えいが");
K("画","が・かく","picture","えいが"); K("写","しゃ・うつ","copy","しゃしん");
K("真","しん・ま","true","しゃしん"); K("料","りょう","fee / materials","りょうり");
K("理","り","reason / logic","りょうり"); K("野","や・の","field","やさい");
K("菜","さい・な","vegetable","やさい"); K("肉","にく","meat","にく");
K("魚","ぎょ・さかな","fish","さかな"); K("鳥","ちょう・とり","bird","とり");
K("牛","ぎゅう・うし","cow","ぎゅうにゅう"); K("馬","ば・うま","horse","うま");
K("犬","けん・いぬ","dog","いぬ"); K("鴨","かも","duck","かも");
K("働","どう・はたら","work (labor)","はたらく"); K("動","どう・うご","move","うごく");
K("運","うん・はこ","transport / luck","はこぶ"); K("転","てん・ころ","roll / turn","うんてん");
K("送","そう・おく","send","おくる"); K("洗","せん・あら","wash","あらう");
K("持","じ・も","hold","もつ"); K("待","たい・ま","wait","まつ");
K("特","とく","special","とくべつ"); K("別","べつ・わか","separate","とくべつ");
K("勉","べん","exertion","べんきょうする"); K("強","きょう・つよ","strong","つよい");
K("教","きょう・おし","teach","おしえる"); K("室","しつ","room","きょうしつ");
K("問","もん・と","question","もんだい"); K("題","だい","topic","もんだい");
K("答","とう・こた","answer","こたえ"); K("宿","しゅく・やど","lodging","しゅくだい");
K("試","し・ため","test / try","しけん"); K("験","けん","test / verify","しけん");
K("説","せつ・と","explain / theory","せつめい"); K("明","めい・あか","bright / clear","あかるい");
K("用","よう・もち","use / business","ようじ"); K("意","い","intention","いみ");
K("味","み・あじ","taste / meaning","いみ"); K("親","しん・おや・した","parent / intimate","しんせつ");
K("切","せつ・き","cut / kind","しんせつ"); K("便","べん・びん","convenience / mail","べんり");
K("利","り・き","advantage","べんり"); K("不","ふ・ぶ","not / un-","ふべん");
K("同","どう・おな","same","おなじ"); K("違","い・ちが","differ","ちがう");
K("弱","じゃく・よわ","weak","よわい"); K("重","じゅう・おも","heavy","おもい");
K("軽","けい・かる","light (weight)","かるい"); K("近","きん・ちか","near","ちかい");
K("遠","えん・とお","far","とおい"); K("速","そく・はや","fast","はやい速");
K("遅","ち・おそ・おく","late / slow","おそい"); K("低","てい・ひく","low","ひくい");
K("広","こう・ひろ","wide","ひろい"); K("暗","あん・くら","dark","くらい");
K("暑","しょ・あつ","hot (weather)","あつい"); K("寒","かん・さむ","cold (weather)","さむい");
K("朝","ちょう・あさ","morning","あさ"); K("昼","ちゅう・ひる","noon","ひる");
K("夜","や・よる","night","よる"); K("夕","ゆう","evening","ゆうがた");
K("春","しゅん・はる","spring","はる"); K("夏","か・なつ","summer","なつ");
K("秋","しゅう・あき","autumn","あき"); K("冬","とう・ふゆ","winter","ふゆ");
K("森","しん・もり","forest","もり"); K("林","りん・はやし","grove","はやし");
K("池","ち・いけ","pond","いけ"); K("湖","こ・みずうみ","lake","みずうみ");
K("島","とう・しま","island","しま"); K("星","せい・ほし","star","ほし");
K("光","こう・ひかり","light","ひかり"); K("色","しき・いろ","color","いろ");
K("形","けい・かたち","shape","かたち"); K("声","せい・こえ","voice","こえ");
K("字","じ","character","じ字"); K("文","ぶん・もん","sentence / text","ぶんぽう");
K("法","ほう","law / method","ぶんぽう"); K("世","せ・よ","world / generation","せかい");
K("界","かい","boundary / world","せかい"); K("地","ち・じ","ground","ちず");
K("図","ず・と","diagram / map","ちず"); K("場","じょう・ば","place","ばしょ");
K("所","しょ・ところ","place","ばしょ"); K("開","かい・あ・ひら","open","あける");
K("閉","へい・し・と","close","しめる"); K("貸","たい・か","lend","かす");
K("借","しゃく・か","borrow","かりる"); K("返","へん・かえ","return (thing)","かえす");
K("始","し・はじ","begin","はじめる"); K("終","しゅう・お","end","おわる");
K("着","ちゃく・き・つ","arrive / wear","きる"); K("服","ふく","clothes","ふく");
K("旅","りょ・たび","travel","りょこう"); K("館","かん","hall / building","りょかん");
K("雪","せつ・ゆき","snow","ゆき"); K("風","ふう・かぜ","wind","かぜ");
K("雲","うん・くも","cloud","くも"); K("晴","せい・は","clear sky","はれ");
K("夢","む・ゆめ","dream","ゆめ"); K("神","しん・かみ","god / spirit","じんじゃ");
K("寺","じ・てら","temple","おてら"); K("祭","さい・まつ","festival","まつり");
K("花","か・はな","flower","はなび"); K("死","し・しぬ","death","しぬ");
K("方","ほう・かた","direction / way","ゆうがた"); K("力","りょく・ちから","power","ちから");
K("使","し・つか","use","つかう"); K("研","けん","research / polish","けんきゅう");
K("究","きゅう","research deeply","けんきゅう");

// ---------- GRAMMAR ----------
// Gr(id, pattern, enExplain|null, jpExplain, examples[[jp,en|null],...])
// N4 entries have en=null: they are only ever taught in Japanese.
const GRAMMAR = {};
// lv: JLPT level (5..2). Omitted for original entries: en!=null ⇒ 5, else 4.
function Gr(id,pat,en,jp,ex,lv){ GRAMMAR[id] = {id,pat,en,jp,ex,lv}; }
// ---- N5 ----
Gr("g_desu","〜は 〜です",
  "「は」marks the topic. 「です」means 'is/am/are'. \"As for X, it is Y.\"",
  "「は」はトピックをしめします。「です」は「イコール」のことばです。",
  [["わたしは かもです。","I am a duck."],["これは みずです。","This is water."]]);
Gr("g_ka","〜ですか",
  "Add か to the end of a sentence to make it a question. No word order change!",
  "ぶんの さいごに「か」をつけると、しつもんになります。",
  [["これは おちゃですか。","Is this tea?"],["あなたは がくせいですか。","Are you a student?"]]);
Gr("g_janai","〜じゃないです",
  "「じゃないです」makes 'is not'. The negative of です.",
  "「です」の はんたいは「じゃないです」です。",
  [["これは にくじゃないです。","This is not meat."],["わたしは ねこじゃないです。","I am not a cat."]]);
Gr("g_no","〜の〜",
  "の connects two nouns: possession or belonging. \"X's Y\" or \"Y of X\".",
  "「の」は ふたつの ことばを つなぎます。",
  [["わたしの ほん","my book"],["にほんの おちゃ","Japanese tea"]]);
Gr("g_mo","〜も",
  "も means 'also / too'. It replaces は.",
  "「も」は「〜と おなじ」という いみです。「は」の かわりに つかいます。",
  [["わたしも がくせいです。","I am also a student."],["ねこも いぬも すきです。","I like both cats and dogs."]]);
Gr("g_ga","〜が",
  "が marks the subject — who or what does something, or what exists. Often used with あります／います and すき.",
  "「が」は しゅごを しめします。",
  [["ねこが います。","There is a cat."],["みずが あります。","There is water."]]);
Gr("g_wo","〜を",
  "を marks the direct object — the thing the verb acts on.",
  "「を」は どうしの もくてきごを しめします。",
  [["ごはんを たべます。","I eat rice."],["ほんを よみます。","I read a book."]]);
Gr("g_ni","〜に",
  "に marks a destination, a specific time, or where something exists.",
  "「に」は ばしょ・じかん・もくてきちを しめします。",
  [["がっこうに いきます。","I go to school."],["【七時|しちじ】に おきます。","I wake up at seven."]]);
Gr("g_de","〜で",
  "で marks where an action happens, or the tool/means used.",
  "「で」は アクションの ばしょや どうぐを しめします。",
  [["としょかんで べんきょうします。","I study at the library."],["バスで いきます。","I go by bus."]]);
Gr("g_e","〜へ",
  "へ marks a direction of movement (read like え!). Similar to に for destinations.",
  "「へ」は ほうこうを しめします。「え」と よみます。",
  [["うみへ いきます。","I go toward the sea."],["まちへ かえります。","I return to town."]]);
Gr("g_masu","〜ます・〜ません",
  "Polite verb form: ます (do/will do), ません (don't/won't).",
  "ていねいな どうしの かたちです。「ます」は こうてい、「ません」は ひてい。",
  [["まいにち あるきます。","I walk every day."],["にくを たべません。","I don't eat meat."]]);
Gr("g_past","〜ました・〜でした",
  "Past tense: ました for verbs, でした for です.",
  "かこの かたち：どうしは「ました」、「です」は「でした」。",
  [["きのう ほんを よみました。","Yesterday I read a book."],["てんきは あめでした。","The weather was rain."]]);
Gr("g_iadj","い形容詞",
  "い-adjectives end in い and change themselves: おいしい → おいしくない (not) → おいしかった (was).",
  "「い」でおわる けいようし。「〜くない」「〜かった」に かわります。",
  [["この りんごは おいしい。","This apple is delicious."],["きのうは さむかったです。","Yesterday was cold."]]);
Gr("g_naadj","な形容詞",
  "な-adjectives take な before a noun and use です／じゃない like nouns.",
  "めいしの まえに「な」をつけます。「しずかな へや」。",
  [["しずかな へやです。","It's a quiet room."],["この まちは にぎやかじゃないです。","This town is not lively."]]);
Gr("g_aru","あります・います",
  "Existence: あります for things/plants, います for people/animals.",
  "ものは「あります」、ひとや どうぶつは「います」。",
  [["つくえの うえに ほんが あります。","There is a book on the desk."],["こうえんに いぬが います。","There is a dog in the park."]]);
Gr("g_tai","〜たいです",
  "Want to do: verb stem + たい. たい conjugates like an い-adjective.",
  "「〜たい」は「したい こと」を いいます。",
  [["おちゃを のみたいです。","I want to drink tea."],["うみへ いきたいです。","I want to go to the sea."]]);
Gr("g_kudasai","〜てください",
  "Please do ~: て-form + ください makes a polite request.",
  "ていねいな おねがい：て形＋ください。",
  [["ここに なまえを かいてください。","Please write your name here."],["ちょっと まってください。","Please wait a moment."]]);
Gr("g_teiru","〜ています",
  "て-form + います: an action happening now, or an ongoing state.",
  "いま していることや、つづいている じょうたいを いいます。",
  [["いま ごはんを たべています。","I am eating now."],["あめが ふっています。","It is raining."]]);
Gr("g_mashou","〜ましょう",
  "Let's do ~: ましょう invites someone to do something together.",
  "「いっしょに しよう」と さそう かたちです。",
  [["いっしょに いきましょう。","Let's go together."],["ここで やすみましょう。","Let's rest here."]]);
Gr("g_kara","〜から",
  "から after a sentence means 'because'. Reason comes first!",
  "りゆう＋「から」。りゆうが さきです。",
  [["さむいですから、うちに います。","Because it's cold, I'll stay home."],["あめですから、かさを かいます。","Because it's raining, I'll buy an umbrella."]]);
Gr("g_counter","かぞえかた",
  "Counters: 〜つ for things (ひとつ、ふたつ…), 〜人 for people, 〜円 for yen.",
  "ものは「〜つ」、ひとは「〜【人|にん】」、おかねは「〜【円|えん】」で かぞえます。",
  [["りんごを みっつ ください。","Three apples, please."],["こどもが 【三人|さんにん】 います。","There are three children."]]);
Gr("g_yori","〜より 〜のほうが",
  "Comparison: \"Y のほうが X より (adjective)\" = Y is more (adj) than X.",
  "くらべる かたち：「AよりBのほうが〜」。",
  [["いぬより ねこのほうが すきです。","I like cats more than dogs."],["でんしゃは バスより はやいです。","Trains are faster than buses."]]);
// ---- N4 (Japanese-only explanations) ----
Gr("g_te","て形", null,
  "どうしを つなぐ かたち。「【食|た】べて、【飲|の】んで、【行|い】って」。ぶんを つなげたり、おねがいしたり、いろいろ つかいます。",
  [["【朝|あさ】ごはんを【食|た】べて、【学校|がっこう】へ【行|い】きます。",null],["【窓|まど】を【開|あ】けて、【空|そら】を【見|み】ました。",null]]);
Gr("g_nai","ない形", null,
  "どうしの ひていの ふつうたい。「【食|た】べない、【行|い】かない、しない、【来|こ】ない」。",
  [["【肉|にく】を【食|た】べない。",null],["【今日|きょう】は どこへも【行|い】かない。",null]]);
Gr("g_nakereba","〜なければならない", null,
  "「しないと ダメ」という いみ。ぎむを あらわす。",
  [["【宿題|しゅくだい】を しなければならない。",null],["【薬|くすり】を【飲|の】まなければなりません。",null]]);
Gr("g_temoii","〜てもいい・〜てはいけない", null,
  "「〜てもいい」は きょか。「〜てはいけない」は きんし。",
  [["ここで【写真|しゃしん】を【撮|と】ってもいいですか。",null],["ここで【泳|およ】いではいけません。",null]]);
Gr("g_takoto","〜たことがある", null,
  "けいけんを いう かたち。た形＋「ことがある」。",
  [["【富士山|ふじさん】に【登|のぼ】ったことがあります。",null],["この【映画|えいが】を【見|み】たことがない。",null]]);
Gr("g_tari","〜たり〜たりする", null,
  "いくつかの アクションの れいを あげる。た形＋「り」。",
  [["【休|やす】みの【日|ひ】は【本|ほん】を【読|よ】んだり、【音楽|おんがく】を【聞|き】いたりします。",null],["【泣|な】いたり【笑|わら】ったりしました。",null]]);
Gr("g_nagara","〜ながら", null,
  "ふたつの ことを どうじに する。ます形から「ます」をとって、「ながら」をつけます。",
  [["【音楽|おんがく】を【聞|き】きながら【勉強|べんきょう】します。",null],["【歩|ある】きながら【話|はな】しましょう。",null]]);
Gr("g_toomou","〜と思う", null,
  "じぶんの いけんや そうぞうを いう。ふつうたい＋「と【思|おも】う」。",
  [["【明日|あした】は【晴|は】れると【思|おも】います。",null],["この【答|こた】えは【正|ただ】しいと【思|おも】う。",null]]);
Gr("g_toiu","〜と言う", null,
  "ひとの ことばを つたえる。「〜と【言|い】いました」。",
  [["カモさんは「ありがとう」と【言|い】いました。",null],["【先生|せんせい】は【明日|あした】【試験|しけん】が あると【言|い】いました。",null]]);
Gr("g_tsumori","〜つもり", null,
  "よていや けいかくを いう。じしょ形＋「つもり」。",
  [["【来年|らいねん】、【旅行|りょこう】する つもりです。",null],["もう【甘|あま】いものは【食|た】べない つもりだ。",null]]);
Gr("g_kanou","可能形（〜できる）", null,
  "「できる」の かたち。「【読|よ】める、【泳|およ】げる、【食|た】べられる」。",
  [["ひらがなが【読|よ】めます。",null],["【漢字|かんじ】で【名前|なまえ】が【書|か】けますか。",null]]);
Gr("g_youni","〜ようになる", null,
  "できなかった ことが できるように かわった、という いみ。",
  [["【日本語|にほんご】が【話|はな】せるように なりました。",null],["【毎朝|まいあさ】【早|はや】く【起|お】きるように なった。",null]]);
Gr("g_teoku","〜ておく", null,
  "じゅんびとして まえもって する、という いみ。",
  [["【旅行|りょこう】の【前|まえ】に、きっぷを【買|か】っておきます。",null],["【水|みず】を【用意|ようい】しておいてください。",null]]);
Gr("g_teshimau","〜てしまう", null,
  "「ぜんぶ おわった」または「しっぱいして ざんねん」という きもち。",
  [["ケーキを ぜんぶ【食|た】べてしまいました。",null],["かぎを【落|お】としてしまった。",null]]);
Gr("g_juju","あげる・くれる・もらう", null,
  "ものの やりとり。わたし→ひと：「あげる」。ひと→わたし：「くれる」。うけとる：「もらう」。",
  [["【友|とも】だちに【土産|みやげ】を あげました。",null],["【先生|せんせい】が【本|ほん】を くれました。",null]]);
Gr("g_ukemi","受身形", null,
  "「される」がわから いう かたち。「【言|い】われる、【食|た】べられる」。",
  [["【先生|せんせい】に ほめられました。",null],["【犬|いぬ】に パンを【食|た】べられた。",null]]);
Gr("g_shieki","使役形", null,
  "「させる」かたち。だれかに なにかを させる。",
  [["【母|はは】は【弟|おとうと】に【野菜|やさい】を【食|た】べさせました。",null],["【先生|せんせい】は【学生|がくせい】に【作文|さくぶん】を【書|か】かせます。",null]]);
Gr("g_joken","〜ば・〜たら・〜と・〜なら", null,
  "じょうけんの かたち。「【行|い】けば」「【行|い】ったら」「【行|い】くと」「【行|い】くなら」。",
  [["【春|はる】に なれば、【花|はな】が【咲|さ】きます。",null],["【駅|えき】に【着|つ】いたら、【電話|でんわ】してください。",null]]);
Gr("g_sou","〜そうです", null,
  "ふたつの いみ：①【見|み】た かんじ（おいしそう）②【聞|き】いた はなし（あめが ふるそうです）。",
  [["この ケーキは おいしそうです。",null],["【明日|あした】は【雪|ゆき】が【降|ふ】るそうです。",null]]);
Gr("g_kamo","〜かもしれない", null,
  "「たぶん、でも わからない」という いみ。",
  [["【午後|ごご】は【雨|あめ】かもしれません。",null],["かれは もう【帰|かえ】ったかもしれない。",null]]);
Gr("g_hazu","〜はずです", null,
  "りゆうが あって「きっと そうだ」と おもう とき。",
  [["【荷物|にもつ】は【明日|あした】【届|とど】くはずです。",null],["かのじょは【今|いま】【家|いえ】に いるはずだ。",null]]);
Gr("g_noni","〜のに", null,
  "「〜けれども、よそうと ちがう」という きもち。ざんねんや おどろき。",
  [["【薬|くすり】を【飲|の】んだのに、【熱|ねつ】が【下|さ】がらない。",null],["【近|ちか】いのに、いつも【遅刻|ちこく】する。",null]]);
Gr("g_node","〜ので", null,
  "りゆうを やわらかく いう。「から」より ていねいな かんじ。",
  [["【病気|びょうき】なので、【休|やす】みます。",null],["【問題|もんだい】が【難|むずか】しかったので、【時間|じかん】が かかりました。",null]]);
Gr("g_meirei","命令形・意向形", null,
  "【命令形|めいれいけい】は つよい めいれい：「【行|い】け！」。【意向形|いこうけい】は「〜しよう」：「【行|い】こう」。",
  [["あきらめるな！【進|すす】め！",null],["いっしょに【帰|かえ】ろう。",null]]);

// ---------- UI STRINGS ----------
// [english, japanese] — game picks by immersion stage
const UI = {
  resume:["Resume","つづける"], journal:["Quest Journal","クエスト【帳|ちょう】"],
  kanachart:["Kana Charts","かな【表|ひょう】"], kanjidex:["Kanji Dex","【漢字図鑑|かんじずかん】"],
  grammarbook:["Grammar Book","【文法|ぶんぽう】ノート"], review:["Review Training","ふくしゅう"],
  settings:["Settings","せってい"], save:["Save","セーブ"], load:["Load","ロード"],
  totitle:["Quit to Title","タイトルへ"], newgame:["New Game","はじめから"],
  continue_:["Continue","つづきから"], level:["Level","レベル"],
  next:["Next","つぎへ"], back:["Back","もどる"], close:["Close","とじる"],
  correct:["Correct!","せいかい！"], wrong:["Not quite…","ざんねん…"],
  study:["Study","まなぶ"], toquiz:["I'm ready — quiz me!","クイズへ！"],
  question:["Question","もんだい"], pass:["PASSED!","ごうかく！"],
  fail:["Not yet — study and try again!","もういちど がんばろう！"],
  victory:["VICTORY!","しょうり！"], defeat:["You were overwhelmed…","まけてしまった…"],
  slot:["Slot","スロット"], empty:["(empty)","（データなし）"],
  export_:["Export save","かきだす"], import_:["Import save","よみこむ"],
  furigana:["Furigana","ふりがな"], audio:["Voice","おんせい"],
  on:["ON","オン"], off:["OFF","オフ"], chapter:["Chapter","【章|しょう】"],
  active:["Active","うけている"], done:["Complete","かんりょう"], available:["New!","あたらしい！"],
  talkto:["Talk to","はなす："], gained:["gained","ゲット"],
  levelup:["LEVEL UP!","レベルアップ！"], hp:["HP","たいりょく"],
  gold:["Gold","きんか"], erase:["Erase","けす"], confirm:["Are you sure?","いいですか？"],
  yes:["Yes","はい"], no:["No","いいえ"], paused:["PAUSED","ポーズ【中|ちゅう】"],
  clear:["Clear","クリア"], answer:["Answer","こたえる"], del:["Delete","けす"],
  retry:["Try again","もういちど"], giveup:["Retreat","にげる"],
  moves:["Move: arrow keys / WASD · Talk: walk into someone · Menu: Esc",
         "いどう：←↑↓→　はなす：あいてに あるく　メニュー：エスケープ"],
  introduced:["New word!","あたらしい ことば！"],
  mastered:["Mastered! English hint removed.","マスター！もう えいごは いらないね！"],
  needquest:["Complete the current quests first!","いまの クエストを クリアしてね！"],
  savedone:["Saved!","セーブしました！"], loaddone:["Loaded!","ロードしました！"],
  nosave:["No save data.","セーブデータが ありません。"],
  playtime:["Play time","プレイ【時間|じかん】"],
  reviewdesc:["Train your weakest words at the shrine.","よわい ことばを きたえよう。"],
  noreview:["Nothing to review — everything is strong!","ふくしゅうする ものは ありません！"],
  theend:["THE END — ありがとう！","おわり — ありがとう！"],
};
