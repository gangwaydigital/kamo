// ============================================================
// カモのことだまクエスト — N3 + N2 expansion curriculum
// Loaded after data.js; reuses V()/K()/Gr() helpers.
// V(jp, kanji|null, en, emoji, lv(3|2), cat, key?)   — en shown NEVER in-game
//   (stage 3 hides it) but kept for the dex/debugging.
// Gr(id, pat, null, jpExplain, ex, lv) — en must be null (pure Japanese).
// ============================================================

// ---- N3 content (filled by integration) ----

// ---- N2 content (filled by integration) ----
// ============================================================
// カモのことだまクエスト — N3 expansion (draft)
// Content only: uses V()/K()/Gr() helpers defined in data.js.
// ============================================================

// ======== N3 VOCAB ========
// -- ch9 q9_1 交通 (transport)
V("こうつう","交通","traffic / transportation","🚦",3,"n3noun");
V("とかい","都会","the city / urban area","🏙️",3,"n3noun");
V("いなか","田舎","countryside","🌾",3,"n3noun");
V("ちかてつ","地下鉄","subway","🚇",3,"n3noun");
V("しんごう","信号","traffic light / signal","🚥",3,"n3noun");
V("どうろ","道路","road","🛣️",3,"n3noun");
V("とおり","通り","street / avenue","🏘️",3,"n3noun");
V("かど","角","corner","📐",3,"n3noun");
V("きゅうこう","急行","express train","🚄",3,"n3noun");
V("しゅうてん","終点","last stop / terminus","🏁",3,"n3noun");
V("ていきけん","定期券","commuter pass","🎫",3,"n3noun");
V("とちゅう","途中","on the way / midway","🛤️",3,"n3noun");
V("のりかえる","乗り換える","to transfer (trains)","🔄",3,"n3verb");
V("かよう","通う","to commute / go regularly","🎒",3,"n3verb");
V("わたる","渡る","to cross","🚸",3,"n3verb");
V("まがる","曲がる","to turn (a corner)","↪️",3,"n3verb");
V("すすむ","進む","to advance / move forward","⏩",3,"n3verb");
V("とまる","止まる","to stop (by itself)","🛑",3,"n3verb");
// -- ch9 q9_2 商店街 (shopping street)
V("しょうてんがい","商店街","shopping street","🏪",3,"n3noun");
V("きゃく","客","customer / guest","🛍️",3,"n3noun");
V("てんいん","店員","shop clerk","🧑‍💼",3,"n3noun");
V("ねだん","値段","price","🏷️",3,"n3noun");
V("わりびき","割引","discount","💸",3,"n3noun");
V("むりょう","無料","free of charge","🆓",3,"n3noun");
V("ゆうりょう","有料","fee-charging / paid","💳",3,"n3noun");
V("しなもの","品物","goods / article","📦",3,"n3noun");
V("うりば","売り場","sales floor / counter","🛒",3,"n3noun");
V("さいふ","財布","wallet","👛",3,"n3noun");
V("おつり",null,"change (money returned)","🪙",3,"n3noun");
V("しはらう","支払う","to pay","💴",3,"n3verb");
V("うれる","売れる","to sell well","📈",3,"n3verb");
V("ならぶ","並ぶ","to line up / stand in line","🧍‍🧍",3,"n3verb");
V("ならべる","並べる","to arrange / line things up","🗃️",3,"n3verb");
V("つつむ","包む","to wrap","🎁",3,"n3verb");
V("こまかい","細かい","fine / small (detail, change)","🔬",3,"n3adj");
// -- ch9 q9_3 くらし (home life)
V("せいかつ","生活","(daily) life / living","🏡",3,"n3noun");
V("くらす","暮らす","to live / get along","🌇",3,"n3verb");
V("ひっこす","引っ越す","to move (house)","🚚",3,"n3verb");
V("やちん","家賃","rent","🧾",3,"n3noun");
V("おおや","大家","landlord","🧓",3,"n3noun");
V("となり","隣","next door / neighbor","🚪",3,"n3noun");
V("きんじょ","近所","neighborhood","🏘️",3,"n3noun");
V("そうじ","掃除","cleaning","🧹",3,"n3noun");
V("せんたく","洗濯","laundry","🧺",3,"n3noun");
V("だいどころ","台所","kitchen","🍳",3,"n3noun");
V("れいぞうこ","冷蔵庫","refrigerator","🧊",3,"n3noun");
V("ごみ",null,"trash / garbage","🗑️",3,"n3noun");
V("おす","押す","to push / press","👇",3,"n3verb");
V("ひく","引く","to pull / draw","🪢",3,"n3verb");
V("かたづける","片付ける","to tidy up","🧽",3,"n3verb");
V("よごれる","汚れる","to get dirty","🦠",3,"n3verb");
V("こわす","壊す","to break (something)","🔨",3,"n3verb");
// -- ch9 q9_4 まちの人々 (people of the city)
V("だんせい","男性","man / male","👔",3,"n3noun");
V("じょせい","女性","woman / female","👩‍💼",3,"n3noun");
V("おとな","大人","adult","🧑",3,"n3noun");
V("ろうじん","老人","elderly person","👴",3,"n3noun");
V("わかもの","若者","young person","🧢",3,"n3noun");
V("みな","皆","everyone / all","👥",3,"n3noun");
V("じんこう","人口","population","🌐",3,"n3noun");
V("しゃかい","社会","society","🏛️",3,"n3noun");
V("かんけい","関係","relation / connection","🔗",3,"n3noun");
V("あいて","相手","partner / the other person","🫱",3,"n3noun");
V("あつまる","集まる","to gather (people gather)","🫂",3,"n3verb");
V("あつめる","集める","to collect / gather up","🧲",3,"n3verb");
V("ふえる","増える","to increase","📈",3,"n3verb");
V("へる","減る","to decrease","📉",3,"n3verb");
V("よぶ","呼ぶ","to call / invite","📣",3,"n3verb");
V("むかう","向かう","to head toward","🧭",3,"n3verb");
V("もどる","戻る","to go back / return","↩️",3,"n3verb");
// -- ch9 q9_5 じけん (incidents)
V("じこ","事故","accident","🚨",3,"n3noun");
V("じけん","事件","incident / case","🕵️",3,"n3noun");
V("どろぼう","泥棒","thief","🦹",3,"n3noun");
V("けいかん","警官","police officer","👮",3,"n3noun");
V("さわぐ","騒ぐ","to make noise / clamor","📢",3,"n3verb");
V("にげる","逃げる","to run away","🏃‍💨",3,"n3verb");
V("おう","追う","to chase","🐾",3,"n3verb");
V("おこる","起こる","to happen / occur","⚡",3,"n3verb","おこる起");
V("ぶつかる",null,"to bump into / collide","💥",3,"n3verb");
V("きけん","危険","danger / dangerous","☠️",3,"n3adj");
V("ふくざつ","複雑","complicated","🧩",3,"n3adj");
V("とつぜん","突然","suddenly","🌩️",3,"n3adv");
V("きゅうに","急に","suddenly / abruptly","😱",3,"n3adv");
V("はっきり",null,"clearly / distinctly","🔍",3,"n3adv");
V("しっかり",null,"firmly / properly","💪",3,"n3adv");
V("ちゃんと",null,"properly / exactly","✅",3,"n3adv");
// -- ch10 q10_1 キャンパス (campus)
V("だいがく","大学","university","🎓",3,"n3noun");
V("きょうじゅ","教授","professor","👨‍🏫",3,"n3noun");
V("せんぱい","先輩","senior (at school/work)","🧑‍🎓",3,"n3noun");
V("こうはい","後輩","junior (at school/work)","🐣",3,"n3noun");
V("こうぎ","講義","lecture","📖",3,"n3noun");
V("がくぶ","学部","faculty / department","🏫",3,"n3noun");
V("せんもん","専門","specialty / major","🔭",3,"n3noun");
V("かがく","科学","science","🔬",3,"n3noun");
V("すうがく","数学","mathematics","➗",3,"n3noun");
V("ぶんがく","文学","literature","📚",3,"n3noun");
V("ほうりつ","法律","law","⚖️",3,"n3noun");
V("けいざい","経済","economy / economics","📊",3,"n3noun");
V("せいじ","政治","politics","🏛️",3,"n3noun");
V("きょうかしょ","教科書","textbook","📘",3,"n3noun");
V("じしょ","辞書","dictionary","📕",3,"n3noun");
V("りゅうがく","留学","studying abroad","🛫",3,"n3noun");
V("そつぎょう","卒業","graduation","🎓",3,"n3noun");
V("きょうみ","興味","interest (in something)","✨",3,"n3noun");
// -- ch10 q10_2 まなび (study & information)
V("よしゅう","予習","preparation (for a lesson)","📝",3,"n3noun");
V("ふくしゅう","復習","review (of a lesson)","🔁",3,"n3noun");
V("あんき","暗記","memorization","🧠",3,"n3noun");
V("ろんぶん","論文","thesis / academic paper","📄",3,"n3noun");
V("ほうこく","報告","report","📋",3,"n3noun");
V("はっぴょう","発表","presentation / announcement","🎤",3,"n3noun");
V("ちょうさ","調査","survey / investigation","🔎",3,"n3noun");
V("しりょう","資料","materials / data","🗂️",3,"n3noun");
V("じょうほう","情報","information","📡",3,"n3noun");
V("ちしき","知識","knowledge","💡",3,"n3noun");
V("いけん","意見","opinion","🗣️",3,"n3noun");
V("しつもん","質問","question","❓",3,"n3noun");
V("くらべる","比べる","to compare","⚖️",3,"n3verb");
V("かんじる","感じる","to feel","💓",3,"n3verb");
V("まなぶ","学ぶ","to learn / study","🎒",3,"n3verb");
V("だいたい",null,"roughly / mostly","🧮",3,"n3adv");
V("つまり",null,"in other words / that is","🎯",3,"n3adv");
// -- ch10 q10_3 しけんと どりょく (exams & effort)
V("せいせき","成績","grades / results","💯",3,"n3noun");
V("ごうかく","合格","passing (an exam)","🌸",3,"n3noun");
V("てん","点","point / score","🔢",3,"n3noun");
V("しめきり","締め切り","deadline","⏰",3,"n3noun");
V("しょうがくきん","奨学金","scholarship","💰",3,"n3noun");
V("じゅぎょうりょう","授業料","tuition","🧾",3,"n3noun");
V("にゅうがく","入学","school entrance / enrollment","🚪",3,"n3noun");
V("しんがく","進学","continuing to higher education","🪜",3,"n3noun");
V("どりょく","努力","effort","🔥",3,"n3noun");
V("せいこう","成功","success","🏆",3,"n3noun");
V("おちる","落ちる","to fall / fail (an exam)","🍂",3,"n3verb");
V("うける","受ける","to take (an exam) / receive","📩",3,"n3verb");
V("もうしこむ","申し込む","to apply / sign up","🖋️",3,"n3verb");
V("がんばる","頑張る","to do one's best","💪",3,"n3verb");
V("まちがえる","間違える","to make a mistake","❌",3,"n3verb");
V("なやむ","悩む","to worry / agonize","🌀",3,"n3verb");
V("まよう","迷う","to hesitate / get lost","🧭",3,"n3verb");
// -- ch10 q10_4 なかま (friends)
V("なかま","仲間","companion / comrade","🤝",3,"n3noun");
V("じょうだん","冗談","joke","😜",3,"n3noun");
V("うそ","嘘","lie","🤥",3,"n3noun");
V("ほんとう","本当","truth / really","💯",3,"n3noun");
V("ひみつ","秘密","secret","🤫",3,"n3noun");
V("かれ","彼","he / boyfriend","👦",3,"n3noun");
V("かのじょ","彼女","she / girlfriend","👧",3,"n3noun");
V("デート",null,"date (romantic)","💞",3,"n3noun");
V("けっこん","結婚","marriage","💍",3,"n3noun");
V("えがお","笑顔","smile / smiling face","😊",3,"n3noun");
V("さんか","参加","participation","🙋",3,"n3noun");
V("かつどう","活動","activity","🎪",3,"n3noun");
V("さそう","誘う","to invite / ask along","💌",3,"n3verb");
V("ことわる","断る","to refuse / decline","🙅",3,"n3verb");
V("たのしむ","楽しむ","to enjoy","🎉",3,"n3verb");
V("しんじる","信じる","to believe / trust","🙏",3,"n3verb");
V("つきあう","付き合う","to go out with / keep company","👫",3,"n3verb");
// -- ch10 q10_5 しょうらい (the future)
V("しょうらい","将来","(one's) future","🔮",3,"n3noun");
V("みらい","未来","the future","🚀",3,"n3noun");
V("もくてき","目的","purpose / aim","🎯",3,"n3noun");
V("もくひょう","目標","goal / target","🥅",3,"n3noun");
V("きぼう","希望","hope / wish","🌈",3,"n3noun");
V("しんぽ","進歩","progress","📶",3,"n3noun");
V("きかい","機会","opportunity / chance","🎰",3,"n3noun");
V("かなえる",null,"to make (a dream) come true","🌠",3,"n3verb");
V("ゆたか","豊か","rich / abundant","🌾",3,"n3adj");
V("びんぼう","貧乏","poor / poverty","🪫",3,"n3adj");
V("ひつよう","必要","necessary","📌",3,"n3adj");
V("むり","無理","impossible / unreasonable","🚫",3,"n3adj");
V("かんたん","簡単","easy / simple","👌",3,"n3adj");
V("ぜったいに","絶対に","absolutely / definitely","💥",3,"n3adv");
V("かならずしも","必ずしも","not necessarily (+neg.)","🤷",3,"n3adv");
V("とうとう",null,"finally / in the end","🏁",3,"n3adv");
V("やっぱり",null,"as expected / after all","😌",3,"n3adv");
V("じつは","実は","actually / to tell the truth","🤭",3,"n3adv");
// -- ch11 q11_1 かいしゃ (the office)
V("かいしゃいん","会社員","company employee","🧑‍💼",3,"n3noun");
V("じむしょ","事務所","office","🏢",3,"n3noun");
V("しゃちょう","社長","company president","🎩",3,"n3noun");
V("ぶちょう","部長","department manager","🧑‍💼",3,"n3noun");
V("かちょう","課長","section chief","🦌",3,"n3noun");
V("じょうし","上司","boss / superior","👆",3,"n3noun");
V("ぶか","部下","subordinate","👇",3,"n3noun");
V("どうりょう","同僚","colleague","👥",3,"n3noun");
V("めいし","名刺","business card","💳",3,"n3noun");
V("しょるい","書類","documents / papers","📑",3,"n3noun");
V("かいぎしつ","会議室","meeting room","🪑",3,"n3noun");
V("ざんぎょう","残業","overtime work","🌙",3,"n3noun");
V("しゅっちょう","出張","business trip","🧳",3,"n3noun");
V("しゅっきん","出勤","going to work","🚶",3,"n3noun");
V("きたく","帰宅","returning home","🏠",3,"n3noun");
V("めんせつ","面接","interview","🎙️",3,"n3noun");
V("つとめる","勤める","to work for / be employed at","🏢",3,"n3verb");
// -- ch11 q11_2 しごとの すすめかた (getting work done)
V("かくにん","確認","confirmation / checking","☑️",3,"n3noun");
V("れんらく","連絡","contact / communication","📞",3,"n3noun");
V("ほうもん","訪問","visit (formal)","🚪",3,"n3noun");
V("かんせい","完成","completion","🏗️",3,"n3noun");
V("ていしゅつ","提出","submission / handing in","📤",3,"n3noun");
V("うちあわせ","打ち合わせ","planning meeting","🗓️",3,"n3noun");
V("とりひき","取引","business deal / transaction","🤝",3,"n3noun");
V("ようい","用意","preparation / getting ready","🎒",3,"n3noun");
V("たのむ","頼む","to request / ask a favor","🙏",3,"n3verb");
V("まかせる","任せる","to entrust / leave to someone","🤲",3,"n3verb");
V("すすめる","進める","to move forward / proceed with","▶️",3,"n3verb");
V("きまる","決まる","to be decided","📌",3,"n3verb");
V("なれる","慣れる","to get used to","🌱",3,"n3verb");
V("やくにたつ","役に立つ","to be useful / helpful","🛠️",3,"n3verb");
V("うまくいく",null,"to go well","🍀",3,"n3verb");
V("いっしょうけんめい","一生懸命","with all one's might","🔥",3,"n3adv");
V("できるだけ",null,"as much as possible","📏",3,"n3adv");
V("なるべく",null,"as much as one can / preferably","🌤️",3,"n3adv");
// -- ch11 q11_3 けいご (honorific language)
V("けいご","敬語","honorific language","🎎",3,"n3noun");
V("そんけい","尊敬","respect","🙇",3,"n3noun");
V("ていねい","丁寧","polite / careful","🎀",3,"n3adj");
V("しつれい","失礼","rude / excuse me","🙇‍♂️",3,"n3adj");
V("おきゃくさま","お客様","customer (honorific)","👑",3,"n3noun");
V("めしあがる","召し上がる","to eat (honorific)","🍽️",3,"n3verb");
V("いらっしゃる",null,"to be / come / go (honorific)","🌟",3,"n3verb");
V("おっしゃる",null,"to say (honorific)","💬",3,"n3verb");
V("ごらんになる","ご覧になる","to look / see (honorific)","👀",3,"n3verb");
V("いただく",null,"to receive / eat (humble)","🎁",3,"n3verb");
V("うかがう","伺う","to visit / ask (humble)","🚪",3,"n3verb");
V("もうす","申す","to say / be called (humble)","🗣️",3,"n3verb");
V("まいる","参る","to go / come (humble)","🚶",3,"n3verb");
V("いたす","致す","to do (humble)","🤲",3,"n3verb");
V("さしあげる",null,"to give (humble)","🎗️",3,"n3verb");
// -- ch11 q11_4 けいざいの ことば (business & economy)
V("けいえい","経営","management (of a business)","📈",3,"n3noun");
V("ぼうえき","貿易","(foreign) trade","🚢",3,"n3noun");
V("ゆしゅつ","輸出","export","📦",3,"n3noun");
V("ゆにゅう","輸入","import","🛬",3,"n3noun");
V("せいひん","製品","manufactured product","🏭",3,"n3noun");
V("こうじょう","工場","factory","🏭",3,"n3noun");
V("さんぎょう","産業","industry","⚙️",3,"n3noun");
V("のうぎょう","農業","agriculture","🚜",3,"n3noun");
V("ぜいきん","税金","tax","🧾",3,"n3noun");
V("ちょきん","貯金","savings","🐖",3,"n3noun");
V("うりあげ","売り上げ","sales / turnover","💹",3,"n3noun");
V("ねあがり","値上がり","price rise","⬆️",3,"n3noun");
V("りえき","利益","profit","💰",3,"n3noun");
V("けいき","景気","economic conditions","🌡️",3,"n3noun");
V("むだ","無駄","wasteful / useless","🕳️",3,"n3adj");
V("もったいない",null,"wasteful / too good to waste","♻️",3,"n3adj");
V("じゅうぶん","十分","enough / sufficient","🈵",3,"n3adj");
// -- ch11 q11_5 しょくばの なやみ (workplace troubles)
V("めいわく","迷惑","nuisance / trouble","😩",3,"n3noun");
V("もんく","文句","complaint","💢",3,"n3noun");
V("がまん","我慢","patience / endurance","😤",3,"n3noun");
V("なやみ","悩み","worry / trouble","🌧️",3,"n3noun");
V("たいしょく","退職","resignation / retirement","🚪",3,"n3noun");
V("かいけつ","解決","solution / resolution","🔓",3,"n3noun");
V("げんいん","原因","cause","🧯",3,"n3noun");
V("けっか","結果","result","🎲",3,"n3noun");
V("ばあい","場合","case / situation","📂",3,"n3noun");
V("せきにん","責任","responsibility","🪨",3,"n3noun");
V("じょうけん","条件","condition / terms","📜",3,"n3noun");
V("ミス",null,"mistake / error","😅",3,"n3noun");
V("つかれる","疲れる","to get tired","🥱",3,"n3verb");
V("あやまる","謝る","to apologize","🙇",3,"n3verb");
V("ゆるす","許す","to forgive / permit","🕊️",3,"n3verb");
// -- ch12 q12_1 びょういん (at the hospital)
V("かんじゃ","患者","patient","🛌",3,"n3noun");
V("かんごし","看護師","nurse","🧑‍⚕️",3,"n3noun");
V("はいしゃ","歯医者","dentist","🦷",3,"n3noun");
V("しんさつ","診察","medical examination","🩺",3,"n3noun");
V("けんさ","検査","test / inspection","🧪",3,"n3noun");
V("しゅじゅつ","手術","surgery / operation","🏥",3,"n3noun");
V("にゅういん","入院","hospitalization","🛏️",3,"n3noun");
V("たいいん","退院","leaving the hospital","🌤️",3,"n3noun");
V("ち","血","blood","🩸",3,"n3noun","ち血");
V("ほね","骨","bone","🦴",3,"n3noun");
V("かぜ","風邪","a cold (illness)","🤧",3,"n3noun","かぜ邪");
V("ぐあい","具合","condition (of health)","🌡️",3,"n3noun");
V("ずつう","頭痛","headache","🤕",3,"n3noun");
V("せき",null,"cough","😮‍💨",3,"n3noun");
V("くしゃみ",null,"sneeze","🤧",3,"n3noun");
V("めまい",null,"dizziness","💫",3,"n3noun");
V("おみまい","お見舞い","visiting a sick person","💐",3,"n3noun");
// -- ch12 q12_2 けんこう (health & life)
V("けんこう","健康","health / healthy","💚",3,"n3noun");
V("うんどう","運動","exercise","🏃",3,"n3noun");
V("よぼう","予防","prevention","🛡️",3,"n3noun");
V("きんえん","禁煙","no smoking / quitting smoking","🚭",3,"n3noun");
V("いき","息","breath","🌬️",3,"n3noun");
V("いのち","命","life (that one lives)","🕯️",3,"n3noun");
V("たおれる","倒れる","to fall over / collapse","🫨",3,"n3verb");
V("おる","折る","to break / fold","🦴",3,"n3verb");
V("ふとる","太る","to gain weight","🍩",3,"n3verb");
V("やせる","痩せる","to lose weight","🥗",3,"n3verb");
V("そだてる","育てる","to raise / bring up","🌱",3,"n3verb");
V("そだつ","育つ","to grow up","🌳",3,"n3verb");
V("いきる","生きる","to live / be alive","🌞",3,"n3verb");
V("なくなる","亡くなる","to pass away","🕊️",3,"n3verb");
V("ねむる","眠る","to sleep / slumber","😴",3,"n3verb");
V("わかい","若い","young","🌸",3,"n3adj");
V("ふつう","普通","ordinary / normal","😐",3,"n3adj");
// -- ch12 q12_3 しやくしょ (city hall)
V("しやくしょ","市役所","city hall","🏛️",3,"n3noun");
V("まどぐち","窓口","service window / counter","🪟",3,"n3noun");
V("てつづき","手続き","procedure / formalities","🗂️",3,"n3noun");
V("しょうめいしょ","証明書","certificate","📜",3,"n3noun");
V("じゅうしょ","住所","address","📮",3,"n3noun");
V("じゅうみん","住民","resident","🏘️",3,"n3noun");
V("しみん","市民","citizen","🧑‍🤝‍🧑",3,"n3noun");
V("せいふ","政府","government","🏛️",3,"n3noun");
V("きにゅう","記入","filling in (a form)","🖊️",3,"n3noun");
V("ばんごう","番号","number","🔢",3,"n3noun");
V("とどけ","届け","report / notification (form)","📄",3,"n3noun");
V("はんこ",null,"personal seal / stamp","🔴",3,"n3noun");
V("サイン",null,"signature","✒️",3,"n3noun");
V("ほけん","保険","insurance","🛡️",3,"n3noun");
V("めんきょ","免許","license","🪪",3,"n3noun");
V("うけとる","受け取る","to receive / accept","📥",3,"n3verb");
V("わたす","渡す","to hand over","🤝",3,"n3verb");
// -- ch12 q12_4 しゃかいと しぜん (society & nature)
V("こくさい","国際","international","🌍",3,"n3noun");
V("せんきょ","選挙","election","🗳️",3,"n3noun");
V("せんそう","戦争","war","⚔️",3,"n3noun");
V("へいわ","平和","peace","🕊️",3,"n3noun");
V("かんきょう","環境","environment","🌿",3,"n3noun");
V("しぜん","自然","nature","🏞️",3,"n3noun");
V("ちきゅう","地球","the Earth","🌏",3,"n3noun");
V("じしん","地震","earthquake","🫨",3,"n3noun");
V("たいふう","台風","typhoon","🌀",3,"n3noun");
V("にんげん","人間","human being","🧬",3,"n3noun");
V("しんぶん","新聞","newspaper","📰",3,"n3noun");
V("きじ","記事","(news) article","🗞️",3,"n3noun");
V("けしき","景色","scenery","🖼️",3,"n3noun");
V("はんたい","反対","opposition / opposite","↔️",3,"n3noun");
V("ニュース",null,"news","📺",3,"n3noun");
V("もえる","燃える","to burn","🔥",3,"n3verb");
V("まもる","守る","to protect / keep (a promise)","🛡️",3,"n3verb");
V("へらす","減らす","to reduce","➖",3,"n3verb");
// -- ch12 q12_5 まとめ (the exam)
V("ぜんぶ","全部","all / everything","🈴",3,"n3noun");
V("さいご","最後","the last / the end","🔚",3,"n3noun");
V("さいしょ","最初","the first / the beginning","🔜",3,"n3noun");
V("さいきん","最近","recently","🗓️",3,"n3adv");
V("かこ","過去","the past","⏪",3,"n3noun");
V("げんざい","現在","the present (time)","⏺️",3,"n3noun");
V("すぎる","過ぎる","to pass / exceed","⌛",3,"n3verb");
V("うつくしい","美しい","beautiful","🌺",3,"n3adj");
V("あさい","浅い","shallow","🏖️",3,"n3adj");
V("ほそい","細い","thin / slender","🪡",3,"n3adj");
V("ふとい","太い","thick / fat","🪵",3,"n3adj");
V("まるい","丸い","round","⚪",3,"n3adj");
V("したしい","親しい","close / intimate (friend)","🫶",3,"n3adj");
V("ずいぶん",null,"quite / considerably","📏",3,"n3adv");
V("かなり",null,"fairly / rather","📶",3,"n3adv");
V("しばらく",null,"for a while","⏳",3,"n3adv");
V("もし",null,"if / supposing","🎲",3,"n3adv");
V("ぜひ",null,"by all means / definitely","🙌",3,"n3adv");
// ======== N3 KANJI ========
// -- ch9 q9_1
K("交","こう・まじ","mix / exchange","こうつう"); K("通","つう・とお・かよ","pass through / commute","かよう");
K("鉄","てつ","iron","ちかてつ"); K("信","しん","trust / signal","しんごう");
K("号","ごう","number / signal","しんごう"); K("乗","じょう・の","ride","のる");
K("急","きゅう・いそ","urgent / hurry","きゅうこう");
// -- ch9 q9_2
K("商","しょう","commerce","しょうてんがい"); K("街","がい・まち","street / district","しょうてんがい");
K("客","きゃく","guest / customer","きゃく"); K("員","いん","member / staff","てんいん");
K("値","ち・ね","value / price","ねだん"); K("割","かつ・わ","divide / discount","わりびき");
K("引","いん・ひ","pull","ひく"); K("売","ばい・う","sell","うりば");
// -- ch9 q9_3
K("活","かつ","lively / activity","せいかつ"); K("台","だい・たい","stand / platform","だいどころ");
K("冷","れい・つめ・ひ","cold / chill","れいぞうこ"); K("押","おう・お","push","おす");
K("汚","お・よご・きたな","dirty","よごれる"); K("壊","かい・こわ","break","こわす");
// -- ch9 q9_4
K("性","せい","nature / gender","だんせい"); K("若","じゃく・わか","young","わかもの");
K("者","しゃ・もの","person","わかもの"); K("集","しゅう・あつ","gather","あつまる");
K("増","ぞう・ふ","increase","ふえる"); K("減","げん・へ","decrease","へる");
K("向","こう・む","face toward","むかう");
// -- ch9 q9_5
K("故","こ","incident / cause","じこ"); K("件","けん","matter / case","じけん");
K("逃","とう・に","escape","にげる"); K("追","つい・お","chase","おう");
K("起","き・お","get up / occur","おきる"); K("危","き・あぶ","dangerous","きけん");
K("険","けん","steep / risky","きけん");
// -- ch10 q10_1
K("講","こう","lecture","こうぎ"); K("専","せん","exclusive / specialty","せんもん");
K("科","か","department / course","かがく"); K("数","すう・かず・かぞ","number / count","すうがく");
K("授","じゅ・さず","instruct / grant","きょうじゅ"); K("部","ぶ","section / part","がくぶ");
K("律","りつ","law / rhythm","ほうりつ"); K("経","けい・へ","pass through / manage","けいざい");
K("済","さい・す","settle / finish","けいざい"); K("政","せい","government","せいじ");
K("治","じ・ち・なお・おさ","govern / cure","せいじ");
// -- ch10 q10_2
K("予","よ","beforehand","よしゅう"); K("復","ふく","restore / repeat","ふくしゅう");
K("習","しゅう・なら","learn / practice","ふくしゅう"); K("記","き・しる","record / write down","あんき");
K("論","ろん","argument / theory","ろんぶん"); K("報","ほう・むく","report / reward","ほうこく");
K("告","こく・つ","announce","ほうこく"); K("発","はつ・ほつ","emit / depart","はっぴょう");
K("表","ひょう・おもて・あらわ","surface / express","はっぴょう"); K("調","ちょう・しら","tune / investigate","ちょうさ");
K("情","じょう・なさ","emotion / circumstances","じょうほう"); K("識","しき","discern / knowledge","ちしき");
K("質","しつ・しち","quality / substance","しつもん");
// -- ch10 q10_3
K("成","せい・な","become / achieve","せいせき"); K("績","せき","achievements","せいせき");
K("合","ごう・あ","fit / join","ごうかく"); K("格","かく","status / standard","ごうかく");
K("落","らく・お","fall","おちる"); K("受","じゅ・う","receive","うける");
K("申","しん・もう","state / humbly say","もうしこむ"); K("迷","めい・まよ","go astray","まよう");
// -- ch10 q10_4
K("仲","ちゅう・なか","relationship / fellow","なかま"); K("断","だん・ことわ・た","cut off / refuse","ことわる");
K("参","さん・まい","participate / go (humble)","さんか"); K("加","か・くわ","add / join","さんか");
K("笑","しょう・わら・え","laugh","えがお"); K("当","とう・あ","hit / correct","ほんとう");
K("婚","こん","marriage","けっこん");
// -- ch10 q10_5
K("未","み","not yet","みらい"); K("的","てき・まと","target / -like","もくてき");
K("希","き","hope / rare","きぼう"); K("望","ぼう・のぞ","hope / gaze at","きぼう");
K("必","ひつ・かなら","without fail / necessary","ひつよう"); K("要","よう・い","need / essential","ひつよう");
K("単","たん","single / simple","かんたん"); K("絶","ぜつ・た","cut off / absolute","ぜったいに");
K("対","たい","opposite / versus","ぜったいに");
// -- ch11 q11_1
K("務","む・つと","duty / serve","じむしょ"); K("課","か","section / lesson","かちょう");
K("類","るい","kind / type","しょるい"); K("残","ざん・のこ","remain","ざんぎょう");
K("張","ちょう・は","stretch / spread","しゅっちょう"); K("勤","きん・つと","work / serve","つとめる");
K("宅","たく","home / residence","きたく"); K("面","めん・おも","face / surface","めんせつ");
// -- ch11 q11_2
K("頼","らい・たの","request / rely","たのむ"); K("任","にん・まか","entrust / duty","まかせる");
K("確","かく・たし","certain / confirm","かくにん"); K("認","にん・みと","recognize / approve","かくにん");
K("連","れん・つ","connect / take along","れんらく"); K("完","かん","complete","かんせい");
K("役","やく","role / service","やくにたつ");
// -- ch11 q11_3
K("敬","けい・うやま","respect","けいご"); K("礼","れい","courtesy / thanks","しつれい");
K("様","よう・さま","manner / Mr., Ms. (honorific)","おきゃくさま"); K("失","しつ・うしな","lose","しつれい");
// -- ch11 q11_4
K("営","えい・いとな","manage / run","けいえい"); K("貿","ぼう","trade","ぼうえき");
K("易","えき・い・やさ","exchange / easy","ぼうえき"); K("輸","ゆ","transport","ゆしゅつ");
K("製","せい","manufacture","せいひん"); K("産","さん・う","give birth / produce","さんぎょう");
K("農","のう","farming","のうぎょう"); K("税","ぜい","tax","ぜいきん");
// -- ch11 q11_5
K("疲","ひ・つか","tired","つかれる"); K("職","しょく","employment / post","たいしょく");
K("解","かい・と","untie / solve","かいけつ"); K("原","げん・はら","origin / field","げんいん");
K("因","いん","cause","げんいん"); K("結","けつ・むす","tie / conclude","けっか");
K("果","か・は","fruit / result","けっか"); K("責","せき・せ","blame / responsibility","せきにん");
K("謝","しゃ・あやま","apologize / thank","あやまる"); K("許","きょ・ゆる","permit / forgive","ゆるす");
// -- ch12 q12_1
K("歯","し・は","tooth","はいしゃ"); K("血","けつ・ち","blood","ち血");
K("具","ぐ","tool / condition","ぐあい"); K("痛","つう・いた","pain","ずつう");
// -- ch12 q12_2
K("倒","とう・たお","fall over","たおれる"); K("折","せつ・お","fold / break","おる");
K("太","たい・ふと","thick / fat","ふとる"); K("育","いく・そだ","raise / grow","そだてる");
K("亡","ぼう・な","perish","なくなる"); K("命","めい・いのち","life / order","いのち");
K("眠","みん・ねむ","sleep","ねむる");
// -- ch12 q12_3
K("市","し・いち","city / market","しやくしょ"); K("続","ぞく・つづ","continue","てつづき");
K("証","しょう","proof / certificate","しょうめいしょ"); K("住","じゅう・す","dwell","じゅうしょ");
K("民","みん・たみ","people / citizens","じゅうみん"); K("番","ばん","number / turn","ばんごう");
K("届","とど","deliver / notify","とどけ");
// -- ch12 q12_4
K("際","さい・きわ","occasion / edge","こくさい"); K("選","せん・えら","choose / elect","せんきょ");
K("戦","せん・たたか","war / fight","せんそう"); K("争","そう・あらそ","conflict / compete","せんそう");
K("平","へい・たい・ひら","flat / peaceful","へいわ"); K("和","わ・やわ","harmony / Japanese style","へいわ");
K("然","ぜん・ねん","so / in that way","しぜん"); K("守","しゅ・まも","protect","まもる");
K("自","じ・みずか","self","しぜん");
// -- ch12 q12_5
K("全","ぜん・まった・すべ","whole / entirely","ぜんぶ"); K("最","さい・もっと","most","さいご");
K("初","しょ・はじ・はつ","first / beginning","さいしょ"); K("過","か・す・あやま","pass / exceed","かこ");
K("現","げん・あらわ","present / appear","げんざい"); K("美","び・うつく","beautiful","うつくしい");
K("細","さい・ほそ・こま","thin / fine","ほそい");
// ======== N3 GRAMMAR ========
Gr("g3_tokoroda","〜ところだ", null,
  "「する ところ」は これから。「している ところ」は いま。「した ところ」は ちょうど おわった とき。「いつ」を くわしく いう かたちです。",
  [["いま【出|で】かける ところです。",null],["たった【今|いま】、【駅|えき】に【着|つ】いた ところだ。",null]],3);
Gr("g3_tabakari","〜たばかり", null,
  "した すぐ あと、という いみ。「【来|き】たばかり」＝【来|き】て、まだ【時間|じかん】が たっていない。",
  [["【日本|にほん】に【来|き】たばかりです。",null],["【買|か】ったばかりの くつが もう よごれてしまった。",null]],3);
Gr("g3_shikanai","〜しかない", null,
  "「それだけで、ほかに ない」という いみ。あとは かならず ひていの かたち。「だけ」より さびしい きもちが あります。",
  [["さいふに【百円|ひゃくえん】しか ない。",null],["バスが ないから、【歩|ある】いて【帰|かえ】るしか ない。",null]],3);
Gr("g3_hodonai","〜ほど〜ない", null,
  "くらべて「そこまでではない」と いう かたち。「これは あれほど〜ない」＝あれの ほうが【上|うえ】。",
  [["【今日|きょう】は【昨日|きのう】ほど【寒|さむ】くない。",null],["【数学|すうがく】は【思|おも】った ほど【難|むずか】しくなかった。",null]],3);
Gr("g3_mama","〜まま", null,
  "おなじ じょうたいが つづいている こと。「つけた まま」＝つけて、そのまま。",
  [["テレビを つけた まま【寝|ね】て しまった。",null],["まどを【開|あ】けた まま【出|で】かけて しまいました。",null]],3);
Gr("g3_uchini","〜うちに", null,
  "その じょうたいが かわる まえに する、という いみ。「【明|あか】るい うちに」＝くらく なる まえに。",
  [["【明|あか】るい うちに【帰|かえ】りましょう。",null],["【熱|あつ】い うちに めしあがって ください。",null]],3);
Gr("g3_tabini","〜たびに", null,
  "「その ときは いつも」という いみ。じしょ【形|けい】か「【名詞|めいし】＋の」に つきます。",
  [["この【歌|うた】を【聞|き】く たびに、ふるさとを【思|おも】い【出|だ】す。",null],["【会|あ】う たびに、【彼|かれ】は【元気|げんき】に なっている。",null]],3);
Gr("g3_niyotte","〜によって", null,
  "「それぞれ ちがう」と いう ときの かたち。「【国|くに】によって」＝【国|くに】ごとに。",
  [["【国|くに】によって、あいさつの しかたが【違|ちが】う。",null],["【人|ひと】によって、【考|かんが】え【方|かた】が【違|ちが】います。",null]],3);
Gr("g3_aidani","〜あいだに", null,
  "その あいだの どこかで なにかが おこる、という いみ。「あいだ」だけなら、ずっと つづく こと。",
  [["るすの あいだに、どろぼうが【入|はい】った。",null],["【寝|ね】ている あいだに、【雪|ゆき】が【降|ふ】りました。",null]],3);
Gr("g3_seide","〜せいで", null,
  "わるい けっかの りゆうを いう かたち。だれかや なにかの「せい」に します。",
  [["【事故|じこ】の せいで、【電車|でんしゃ】が【止|と】まった。",null],["【夜|よる】おそくまで【起|お】きていた せいで、ねむい。",null]],3);
Gr("g3_nitsuite","〜について", null,
  "その ことを テーマに して、はなしたり しらべたり する ときの かたち。",
  [["【日本|にほん】の【文化|ぶんか】について、【調|しら】べて います。",null],["この【問題|もんだい】について、どう【思|おも】いますか。",null]],3);
Gr("g3_toshite","〜として", null,
  "「その たちばで」「その やくわりで」という いみ。",
  [["【留学生|りゅうがくせい】として、【日本|にほん】へ【来|き】ました。",null],["おみやげとして、おかしを【買|か】いました。",null]],3);
Gr("g3_nikurabete","〜に【比|くら】べて", null,
  "ふたつの ものを くらべて いう かたち。「あれに【比|くら】べて、これは〜」。",
  [["【去年|きょねん】に【比|くら】べて、【人口|じんこう】が【増|ふ】えた。",null],["【都会|とかい】に【比|くら】べて、いなかは しずかです。",null]],3);
Gr("g3_wakeda","〜わけだ", null,
  "りゆうを【知|し】って「だから そうなのか」と なっとくする いいかた。",
  [["【十年|じゅうねん】も【住|す】んでいるのか。【日本語|にほんご】が【上手|じょうず】な わけだ。",null],["まどが【開|あ】いている。【寒|さむ】い わけだ。",null]],3);
Gr("g3_bahodo","〜ば〜ほど", null,
  "「すれば する ほど、もっと〜に なる」という いみ。おなじ どうしを くりかえします。",
  [["【勉強|べんきょう】すれば する ほど、わかるように なります。",null],["【考|かんが】えれば【考|かんが】える ほど、わからなく なった。",null]],3);
Gr("g3_hazuganai","〜はずがない", null,
  "「ぜったいに そうではない」と つよく【思|おも】う とき。「はずだ」の はんたいです。",
  [["まじめな【彼|かれ】が、うそを つく はずが ない。",null],["こんなに【勉強|べんきょう】したのだから、【落|お】ちる はずが ない。",null]],3);
Gr("g3_garu","〜がる", null,
  "ほかの【人|ひと】の きもちを、そとから【見|み】て いう かたち。「ほしがる」「こわがる」。じぶんには つかいません。",
  [["【妹|いもうと】は【犬|いぬ】を こわがって います。",null],["【彼|かれ】は【新|あたら】しい カメラを ほしがって いる。",null]],3);
Gr("g3_rashii","〜らしい", null,
  "【聞|き】いた ことや ようすから「どうやら そうだ」と いう かたち。それらしい せいしつにも つかいます。",
  [["【彼女|かのじょ】は【来月|らいげつ】【結婚|けっこん】する らしい。",null],["あの【店|みせ】は【安|やす】い らしいですよ。",null]],3);
Gr("g3_kotonisuru","〜ことにする", null,
  "じぶんで きめた こと。「〜ことに している」なら、きめて つづけている しゅうかん。",
  [["【来年|らいねん】、【留学|りゅうがく】する ことに しました。",null],["あまい ものは【食|た】べない ことに して います。",null]],3);
Gr("g3_tameni","〜ために", null,
  "もくてきを いう かたち。「【夢|ゆめ】の ために」＝【夢|ゆめ】を かなえる もくてきで。",
  [["【夢|ゆめ】の ために、【毎日|まいにち】【努力|どりょく】して います。",null],["【家|いえ】を【買|か】う ために、【貯金|ちょきん】して いる。",null]],3);
Gr("g3_wakeniha","〜わけにはいかない", null,
  "したい けれど、じじょうが あって できない、という いみ。",
  [["【大事|だいじ】な【会議|かいぎ】だから、【休|やす】む わけには いかない。",null],["【約束|やくそく】したから、【行|い】かない わけには いかない。",null]],3);
Gr("g3_zuni","〜ずに", null,
  "「〜ないで」の かたい いいかた。ない【形|けい】から「ない」を とって「ず」。「する」は「せずに」に なります。",
  [["【朝|あさ】ごはんを【食|た】べずに、【出勤|しゅっきん】した。",null],["じしょを【使|つか】わずに、【論文|ろんぶん】を【読|よ】みました。",null]],3);
Gr("g3_toorini","〜とおりに", null,
  "「おなじ ように」という いみ。「【言|い】われた とおりに」＝【言|い】われた ままに。",
  [["せつめいしょの とおりに、【作|つく】って ください。",null],["【課長|かちょう】に【言|い】われた とおりに、しました。",null]],3);
Gr("g3_tehoshii","〜てほしい", null,
  "ほかの【人|ひと】に「して もらいたい」と ねがう かたち。じぶんが したいなら「〜たい」。",
  [["もっと ゆっくり【話|はな】して ほしい。",null],["【早|はや】く【元気|げんき】に なって ほしいです。",null]],3);
Gr("g3_sonkei","【尊敬語|そんけいご】", null,
  "めうえの【人|ひと】の こういを たかめて いう ことば。「いらっしゃる（いる・【行|い】く・【来|く】る）」「おっしゃる（【言|い】う）」「めしあがる（【食|た】べる）」など。",
  [["【先生|せんせい】は【何時|なんじ】に いらっしゃいますか。",null],["どうぞ、めしあがって ください。",null]],3);
Gr("g3_kenjou","【謙譲語|けんじょうご】", null,
  "じぶんの こういを ひくくして、あいてを たてる ことば。「まいる（【行|い】く）」「【申|もう】す（【言|い】う）」「いたす（する）」など。",
  [["【明日|あした】、【事務所|じむしょ】に まいります。",null],["カモと【申|もう】します。よろしく おねがい いたします。",null]],3);
Gr("g3_wakedehanai","〜わけではない", null,
  "「ぜんぶが そうだとは いえない」と、やわらかく ひていする かたち。",
  [["【高|たか】い ものが、ぜんぶ いい わけでは ない。",null],["【肉|にく】が きらいな わけでは ないが、あまり【食|た】べない。",null]],3);
Gr("g3_tebakari","〜てばかりいる", null,
  "「それだけ している」という いみ。すこし ひはんの きもちが あります。",
  [["【弟|おとうと】は【遊|あそ】んで ばかり いる。",null],["【文句|もんく】を【言|い】って ばかり いないで、【働|はたら】きましょう。",null]],3);
Gr("g3_okagede","〜おかげで", null,
  "いい けっかの りゆうを、かんしゃの きもちで いう かたち。わるい けっかなら「せいで」。",
  [["【先生|せんせい】の おかげで、【合格|ごうかく】できました。",null],["くすりの おかげで、【熱|ねつ】が【下|さ】がった。",null]],3);
Gr("g3_sae","〜さえ", null,
  "きょくたんな れいを あげて「〜も」と つよく いう かたち。「【子|こ】どもでさえ わかる」＝だから みんな わかる。",
  [["いそがしくて、【寝|ね】る【時間|じかん】さえ ない。",null],["その【問題|もんだい】は、【子|こ】どもでさえ わかる。",null]],3);
Gr("g3_mitai","〜みたいだ", null,
  "「〜のようだ」の カジュアルな いいかた。すいりょうにも、たとえにも つかいます。",
  [["かぜを ひいた みたいです。",null],["あの【雲|くも】、わたあめ みたいだ。",null]],3);
Gr("g3_youda","〜ようだ", null,
  "【見|み】たり【聞|き】いたり した ようすから、すいりょうする かたち。「みたいだ」より ていねい。",
  [["【熱|ねつ】が ある ようです。",null],["【外|そと】は【雨|あめ】が【降|ふ】って いる ようだ。",null]],3);
Gr("g3_younisuru","〜ようにする", null,
  "そう なるように、どりょくを つづける こと。「〜ように して いる」＝しゅうかんに して いる。",
  [["【毎日|まいにち】【運動|うんどう】する ように して います。",null],["あまい ものを【食|た】べすぎない ように して ください。",null]],3);
Gr("g3_kotoninaru","〜ことになる", null,
  "じぶん いがいの ちからで きまった こと。じぶんで きめたなら「ことにする」。",
  [["【来月|らいげつ】から、【工場|こうじょう】で【働|はたら】く ことに なりました。",null],["【一週間|いっしゅうかん】、【入院|にゅういん】する ことに なった。",null]],3);
Gr("g3_kurai","〜くらい〜はない", null,
  "「それが いちばんだ」と つよく いう かたち。「〜ほど〜はない」も おなじ いみ。",
  [["【歯|は】の【痛|いた】み くらい つらい ものは ない。",null],["【母|はは】の【料理|りょうり】くらい おいしい ものは ない。",null]],3);
Gr("g3_saserareru","【使役受身|しえきうけみ】（〜させられる）", null,
  "したくない ことを「させられる」かたち。【使役|しえき】＋【受身|うけみ】。",
  [["【書類|しょるい】を【何度|なんど】も【書|か】かせられた。",null],["【子|こ】どもの とき、【野菜|やさい】を【食|た】べさせられました。",null]],3);
Gr("g3_nitaishite","〜に【対|たい】して", null,
  "「それに むかって」という いみ。たいどや こうどうの あいてを しめします。",
  [["お【客様|きゃくさま】に【対|たい】して、ていねいに【話|はな】します。",null],["しつもんに【対|たい】して、はっきり【答|こた】えた。",null]],3);
Gr("g3_koso","〜こそ", null,
  "「ほかではなく、それだ」と つよく いう かたち。",
  [["【今年|ことし】こそ、【合格|ごうかく】したい。",null],["こちらこそ、よろしく おねがいします。",null]],3);
Gr("g3_ppoi","〜っぽい", null,
  "「その かんじが つよい」という いみ。「【忘|わす】れっぽい」＝よく【忘|わす】れる。",
  [["さいきん、【忘|わす】れっぽく なった。",null],["【彼|かれ】は【子|こ】どもっぽい ところが ある。",null]],3);
Gr("g3_okini","〜おきに", null,
  "「その かんかくを あけて、くりかえす」という いみ。「【一日|いちにち】おきに」＝【二日|ふつか】に【一回|いっかい】。",
  [["この くすりは、【一日|いちにち】おきに【飲|の】んで ください。",null],["バスは【十分|じゅっぷん】おきに【来|き】ます。",null]],3);
// ============================================================
// カモのことだまクエスト — N2 expansion content (draft)
// Uses V()/K()/Gr() helpers from data.js. Content only.
// ============================================================

// ======== N2 VOCAB ========
// ---- ch13 新聞社 q13_1 取材のことば ----
V("ほうどう","報道","news report / coverage","📰",2,"n2noun");
V("とくしゅう","特集","special feature","📰",2,"n2noun");
V("きしゃ","記者","reporter","✍️",2,"n2noun");
V("しゅざい","取材","news gathering / interview","🎤",2,"n2noun");
V("みだし","見出し","headline","📢",2,"n2noun");
V("しゅっぱん","出版","publishing","📚",2,"n2noun");
V("いんさつ","印刷","printing","🖨️",2,"n2noun");
V("はっこう","発行","publication / issuing","📤",2,"n2noun");
V("よこく","予告","advance notice / preview","🔜",2,"n2noun");
V("げんこう","原稿","manuscript / draft","📄",2,"n2noun");
V("あやまり","誤り","error / mistake","❌",2,"n2noun");
V("ていせい","訂正","correction","✏️",2,"n2noun");
V("たしかめる","確かめる","to confirm / verify","✅",2,"n2verb");
V("つたわる","伝わる","to be transmitted / conveyed","📡",2,"n2verb");
V("しらせ","知らせ","notice / news","🔔",2,"n2noun");
V("わだい","話題","topic (of talk)","💬",2,"n2noun");
V("せけん","世間","society / the public","🌐",2,"n2noun");
// ---- q13_2 じけんとさいがい ----
V("できごと","出来事","event / happening","📅",2,"n2noun");
V("さいがい","災害","disaster","🌪️",2,"n2noun");
V("つなみ","津波","tsunami","🌊",2,"n2noun");
V("こうずい","洪水","flood","🌊",2,"n2noun");
V("ひがい","被害","damage","💥",2,"n2noun");
V("きゅうじょ","救助","rescue","🚑",2,"n2noun");
V("ひなん","避難","evacuation","🏃",2,"n2noun");
V("はっせい","発生","occurrence / outbreak","💢",2,"n2noun");
V("げんば","現場","scene / site","📍",2,"n2noun");
V("じょうきょう","状況","situation","🧭",2,"n2noun");
V("えいきょう","影響","influence / effect","🌀",2,"n2noun");
V("じたい","事態","state of affairs","🚨",2,"n2noun");
V("けつろん","結論","conclusion","🧾",2,"n2noun");
V("ふせぐ","防ぐ","to prevent","🛡️",2,"n2verb");
V("すくう","救う","to save / rescue","🤲",2,"n2verb");
V("しょうじる","生じる","to arise / occur","⚡",2,"n2verb");
V("さわぎ","騒ぎ","uproar / commotion","📣",2,"n2noun");
// ---- q13_3 いけんとぎろん ----
V("しゅちょう","主張","assertion / claim","📢",2,"n2noun");
V("ひはん","批判","criticism","🗯️",2,"n2noun");
V("ひょうか","評価","evaluation","⭐",2,"n2noun");
V("ぎろん","議論","debate / discussion","🗣️",2,"n2noun");
V("はんろん","反論","counterargument","↩️",2,"n2noun");
V("こんきょ","根拠","grounds / basis","🧱",2,"n2noun");
V("むじゅん","矛盾","contradiction","⚔️",2,"n2noun");
V("へんけん","偏見","prejudice","🙈",2,"n2noun");
V("ごかい","誤解","misunderstanding","🤷",2,"n2noun");
V("ろんじる","論じる","to argue / discuss","🧑‍⚖️",2,"n2verb");
V("のべる","述べる","to state","🗒️",2,"n2verb");
V("してき","指摘","pointing out","👉",2,"n2noun");
V("うたがう","疑う","to doubt","🤨",2,"n2verb");
V("しんらい","信頼","trust / reliance","🤝",2,"n2noun");
V("はんだん","判断","judgment","⚖️",2,"n2noun");
V("けんとう","検討","examination / consideration","🔬",2,"n2noun");
V("きゃっかんてき","客観的","objective","🔭",2,"n2adj");
// ---- q13_4 ちゅうしょうのことば ----
V("ちゅうしょうてき","抽象的","abstract","💭",2,"n2adj");
V("ぐたいてき","具体的","concrete / specific","🔨",2,"n2adj");
V("げんじつ","現実","reality","🌍",2,"n2noun");
V("りそう","理想","ideal","✨",2,"n2noun");
V("いしき","意識","consciousness / awareness","🧠",2,"n2noun");
V("りろん","理論","theory","📐",2,"n2noun");
V("にんしき","認識","recognition / perception","👁️",2,"n2noun");
V("そんざい","存在","existence","🌟",2,"n2noun");
V("かち","価値","value / worth","💎",2,"n2noun");
V("かだい","課題","task / issue","📋",2,"n2noun");
V("げんそく","原則","principle / general rule","📏",2,"n2noun");
V("きじゅん","基準","standard / criterion","📏",2,"n2noun");
V("けいこう","傾向","tendency","📈",2,"n2noun");
V("とくちょう","特徴","characteristic / feature","🔖",2,"n2noun");
V("ほんしつ","本質","essence","💠",2,"n2noun");
V("ようそ","要素","element / factor","🧩",2,"n2noun");
V("ひかく","比較","comparison","⚖️",2,"n2noun");
// ---- q13_5 しんじつをもとめて ----
V("しんじつ","真実","truth","🔆",2,"n2noun");
V("じじつ","事実","fact","📌",2,"n2noun");
V("うわさ","噂","rumor","🗨️",2,"n2noun");
V("でたらめ",null,"nonsense / made-up talk","🤥",2,"n2noun");
V("かくす","隠す","to hide / conceal","🫣",2,"n2verb");
V("あらわれる","現れる","to appear / emerge","🌅",2,"n2verb");
V("あきらか","明らか","clear / evident","💡",2,"n2adj");
V("ぎもん","疑問","question / doubt","❓",2,"n2noun");
V("うったえる","訴える","to appeal / sue","📣",2,"n2verb");
V("だまる","黙る","to fall silent","🤐",2,"n2verb");
V("かたる","語る","to narrate / tell","🗣️",2,"n2verb");
V("しょうこ","証拠","evidence","🧾",2,"n2noun");
V("しょうめい","証明","proof","✔️",2,"n2noun");
V("こうひょう","公表","official announcement","📢",2,"n2noun");
V("しじ","支持","support / backing","🙌",2,"n2noun");
V("ろんせつ","論説","editorial","📰",2,"n2noun");
V("とうけい","統計","statistics","📊",2,"n2noun");
// ---- ch14 文学の森 q14_1 ぶんがくのとびら ----
V("ずいひつ","随筆","essay","🖋️",2,"n2noun");
V("しょうせつ","小説","novel","📖",2,"n2noun");
V("し","詩","poem","🪶",2,"n2noun","し詩");
V("ものがたり","物語","tale / story","📜",2,"n2noun");
V("さくひん","作品","work (of art)","🖼️",2,"n2noun");
V("さくしゃ","作者","author","✍️",2,"n2noun");
V("ひょうげん","表現","expression","🎭",2,"n2noun");
V("ばめん","場面","scene","🎬",2,"n2noun");
V("とうじょう","登場","entrance (on stage)","🌟",2,"n2noun");
V("じんぶつ","人物","person / character","👤",2,"n2noun");
V("しゅじんこう","主人公","protagonist","🦸",2,"n2noun");
V("いんしょう","印象","impression","💫",2,"n2noun");
V("かんそう","感想","impressions / thoughts","💭",2,"n2noun");
V("えがく","描く","to depict / draw","🎨",2,"n2verb");
V("そうぞう","想像","imagination","🌈",2,"n2noun");
V("げいじゅつ","芸術","art","🖌️",2,"n2noun");
V("ほんやく","翻訳","translation","🔁",2,"n2noun");
// ---- q14_2 きもちをえがく ----
V("かんじょう","感情","emotion","💓",2,"n2noun");
V("かんどう","感動","being deeply moved","🥹",2,"n2noun");
V("よろこび","喜び","joy","😊",2,"n2noun");
V("かなしみ","悲しみ","sorrow","😢",2,"n2noun");
V("いかり","怒り","anger","😠",2,"n2noun");
V("おそれ","恐れ","fear / dread","😨",2,"n2noun");
V("なみだ","涙","tears","💧",2,"n2noun");
V("ほほえみ","微笑み","smile","🙂",2,"n2noun");
V("ためいき","ため息","sigh","😮‍💨",2,"n2noun");
V("なつかしい","懐かしい","nostalgic / dear","🕰️",2,"n2adj");
V("こい","恋","romantic love","💘",2,"n2noun");
V("あこがれ","憧れ","longing / admiration","🌠",2,"n2noun");
V("なぐさめる","慰める","to comfort","🫂",2,"n2verb");
V("あじわう","味わう","to savor / taste","😋",2,"n2verb");
V("あらわす","表す","to express / show","🖊️",2,"n2verb");
V("こめる","込める","to put (feeling) into","💝",2,"n2verb");
V("せつない","切ない","heartrending","💔",2,"n2adj");
// ---- q14_3 もりのけしき ----
V("ふうけい","風景","scenery / landscape","🏞️",2,"n2noun");
V("ながめ","眺め","view","🔭",2,"n2noun");
V("よあけ","夜明け","dawn","🌄",2,"n2noun");
V("ゆうぐれ","夕暮れ","dusk","🌆",2,"n2noun");
V("しずけさ","静けさ","stillness","🤫",2,"n2noun");
V("かおり","香り","fragrance","🌸",2,"n2noun");
V("かがやく","輝く","to shine / sparkle","✨",2,"n2verb");
V("ゆれる","揺れる","to sway / shake","🍃",2,"n2verb");
V("うかぶ","浮かぶ","to float / come to mind","🎈",2,"n2verb");
V("しずむ","沈む","to sink","🌇",2,"n2verb");
V("かれる","枯れる","to wither","🍂",2,"n2verb");
V("みのる","実る","to bear fruit / ripen","🍎",2,"n2verb");
V("おだやか","穏やか","calm / gentle","😌",2,"n2adj");
V("あざやか","鮮やか","vivid","🌈",2,"n2adj");
V("あわい","淡い","pale / faint","🎨",2,"n2adj");
V("とうめい","透明","transparent","💠",2,"n2adj");
V("にじ","虹","rainbow","🌈",2,"n2noun");
// ---- q14_4 ふでのわざ ----
V("ぶんしょう","文章","writing / text","📝",2,"n2noun");
V("だんらく","段落","paragraph","📑",2,"n2noun");
V("ひょうし","表紙","(book) cover","📔",2,"n2noun");
V("だいめい","題名","title","🏷️",2,"n2noun");
V("ひっしゃ","筆者","writer (of a text)","🖋️",2,"n2noun");
V("どくしゃ","読者","reader","👓",2,"n2noun");
V("しじん","詩人","poet","🪶",2,"n2noun");
V("はいく","俳句","haiku","🍃",2,"n2noun");
V("たんか","短歌","tanka poem","🌙",2,"n2noun");
V("いんよう","引用","quotation","📎",2,"n2noun");
V("しょうりゃく","省略","omission","✂️",2,"n2noun");
V("ようやく","要約","summary","📋",2,"n2noun");
V("かきなおす","書き直す","to rewrite","♻️",2,"n2verb");
V("しあげる","仕上げる","to finish up","🏁",2,"n2verb");
V("くふう","工夫","devising / ingenuity","💡",2,"n2noun");
V("すぐれる","優れる","to excel","🏆",2,"n2verb");
V("めいさく","名作","masterpiece","🎖️",2,"n2noun");
// ---- q14_5 しじんのためし ----
V("えいえん","永遠","eternity","♾️",2,"n2noun");
V("しゅんかん","瞬間","moment / instant","⏱️",2,"n2noun");
V("うんめい","運命","fate / destiny","🔮",2,"n2noun");
V("たましい","魂","soul","🕊️",2,"n2noun");
V("ちんもく","沈黙","silence","🤫",2,"n2noun");
V("ひびく","響く","to echo / resound","🔔",2,"n2verb");
V("さけぶ","叫ぶ","to shout / cry out","📢",2,"n2verb");
V("いのる","祈る","to pray","🙏",2,"n2verb");
V("ちかう","誓う","to vow / swear","🤞",2,"n2verb");
V("わかれ","別れ","parting / farewell","👋",2,"n2noun");
V("であい","出会い","encounter / meeting","🤝",2,"n2noun");
V("きおく","記憶","memory","🧠",2,"n2noun");
V("まぼろし","幻","illusion / phantom","🌫️",2,"n2noun");
V("うつくしさ","美しさ","beauty","🌹",2,"n2noun");
V("せいめい","生命","life","🫀",2,"n2noun");
V("たんじょう","誕生","birth","🐣",2,"n2noun");
V("ししゅう","詩集","poetry collection","📚",2,"n2noun");
// ---- ch15 まつりごとの丘 q15_1 まつりごとのことば ----
V("ぎょうせい","行政","administration","🏛️",2,"n2noun");
V("こっかい","国会","the national assembly","🏛️",2,"n2noun");
V("こっか","国家","nation / state","🗾",2,"n2noun");
V("こくみん","国民","citizens / the people","👥",2,"n2noun");
V("だいじん","大臣","(government) minister","🎩",2,"n2noun");
V("ぎかい","議会","parliament / assembly","🏛️",2,"n2noun");
V("ぎいん","議員","assembly member","🧑‍💼",2,"n2noun");
V("とうせん","当選","being elected","🎊",2,"n2noun");
V("とうひょう","投票","voting","☑️",2,"n2noun");
V("せいさく","政策","policy","📜",2,"n2noun");
V("せいど","制度","system / institution","⚙️",2,"n2noun");
V("きせい","規制","regulation","🚧",2,"n2noun");
V("けんり","権利","right (legal)","🕊️",2,"n2noun");
V("ぎむ","義務","duty / obligation","📋",2,"n2noun");
V("びょうどう","平等","equality","🟰",2,"n2adj");
V("けんぽう","憲法","constitution","📜",2,"n2noun");
V("おさめる","治める","to govern / rule","👑",2,"n2verb");
// ---- q15_2 くにのけいざい ----
V("しきん","資金","funds","💰",2,"n2noun");
V("しほん","資本","capital","🏦",2,"n2noun");
V("しじょう","市場","market (economic)","📈",2,"n2noun");
V("ふきょう","不況","recession","📉",2,"n2noun");
V("とうし","投資","investment","💹",2,"n2noun");
V("しょうばい","商売","business / trade","🏪",2,"n2noun");
V("きぎょう","企業","corporation / enterprise","🏢",2,"n2noun");
V("せいぞう","製造","manufacturing","🏭",2,"n2noun");
V("かぶ","株","stocks / share","📊",2,"n2noun");
V("そん","損","loss / disadvantage","📉",2,"n2noun");
V("よさん","予算","budget","💴",2,"n2noun");
V("ぶっか","物価","prices (of commodities)","💴",2,"n2noun");
V("ちんぎん","賃金","wages","💵",2,"n2noun");
V("やとう","雇う","to employ / hire","🤝",2,"n2verb");
V("かせぐ","稼ぐ","to earn (money)","💪",2,"n2verb");
V("じゅよう","需要","demand","📈",2,"n2noun");
V("きょうきゅう","供給","supply","📦",2,"n2noun");
// ---- q15_3 くらしとしゃかい ----
V("ちいき","地域","region / area","🗺️",2,"n2noun");
V("こうれい","高齢","advanced age","👴",2,"n2noun");
V("ふくし","福祉","welfare","🤲",2,"n2noun");
V("ねんきん","年金","pension","👛",2,"n2noun");
V("いりょう","医療","medical care","🏥",2,"n2noun");
V("こうがい","公害","(industrial) pollution","🏭",2,"n2noun");
V("おせん","汚染","pollution","🚱",2,"n2noun");
V("しげん","資源","resources","⛏️",2,"n2noun");
V("ふそく","不足","shortage / lack","📉",2,"n2noun");
V("ぞうか","増加","increase","➕",2,"n2noun");
V("げんしょう","減少","decrease","➖",2,"n2noun");
V("たいさく","対策","countermeasure","🛠️",2,"n2noun");
V("かいぜん","改善","improvement","📶",2,"n2noun");
V("まずしい","貧しい","poor","🥀",2,"n2adj");
V("あんてい","安定","stability","🧘",2,"n2noun");
V("ささえる","支える","to support / sustain","🫱",2,"n2verb");
V("さべつ","差別","discrimination","🚫",2,"n2noun");
// ---- q15_4 ほうとちつじょ ----
V("さいばん","裁判","trial / court case","⚖️",2,"n2noun");
V("はんざい","犯罪","crime","🚨",2,"n2noun");
V("ばつ","罰","punishment","🔨",2,"n2noun");
V("けいび","警備","security / guarding","💂",2,"n2noun");
V("きんし","禁止","prohibition","⛔",2,"n2noun");
V("きょか","許可","permission","✅",2,"n2noun");
V("しんせい","申請","application (formal)","📄",2,"n2noun");
V("けいやく","契約","contract","📝",2,"n2noun");
V("ばっきん","罰金","fine (penalty)","💸",2,"n2noun");
V("ようきゅう","要求","demand / requirement","📣",2,"n2noun");
V("きげん","期限","time limit / deadline","⏳",2,"n2noun");
V("いはん","違反","violation","🚫",2,"n2noun");
V("したがう","従う","to obey / follow","🚶",2,"n2verb");
V("めいじる","命じる","to order / command","📣",2,"n2verb");
V("みとめる","認める","to acknowledge / approve","✔️",2,"n2verb");
V("きょひ","拒否","refusal / rejection","🙅",2,"n2noun");
V("めいれい","命令","order / command","📜",2,"n2noun");
// ---- q15_5 おかのちかい ----
V("たいりつ","対立","confrontation / opposition","⚡",2,"n2noun");
V("ぶき","武器","weapon","🗡️",2,"n2noun");
V("しょうはい","勝敗","victory or defeat","🏆",2,"n2noun");
V("こうしょう","交渉","negotiation","🤝",2,"n2noun");
V("じょうやく","条約","treaty","📜",2,"n2noun");
V("きょうりょく","協力","cooperation","🫱",2,"n2noun");
V("とういつ","統一","unification","🧩",2,"n2noun");
V("ぶんれつ","分裂","split / division","🧨",2,"n2noun");
V("しはい","支配","domination / control","👑",2,"n2noun");
V("どくりつ","独立","independence","🚩",2,"n2noun");
V("かくめい","革命","revolution","🔥",2,"n2noun");
V("せいき","世紀","century","📅",2,"n2noun");
V("せいしん","精神","spirit / mind","🧘",2,"n2noun");
V("はってん","発展","development / growth","🚀",2,"n2noun");
V("ぜつぼう","絶望","despair","🌑",2,"n2noun");
V("みちびく","導く","to guide / lead","🧭",2,"n2verb");
V("あらそう","争う","to fight / dispute","🤼",2,"n2verb");
// ---- ch16 ことだま本殿 q16_1 こころのおくがき ----
V("うちゅう","宇宙","universe / space","🌌",2,"n2noun");
V("むげん","無限","infinity","♾️",2,"n2noun");
V("かんかく","感覚","sense / sensation","🖐️",2,"n2noun");
V("ちえ","知恵","wisdom","🦉",2,"n2noun");
V("しんり","心理","psychology / mental state","🧠",2,"n2noun");
V("くうかん","空間","space (room)","🌀",2,"n2noun");
V("そんちょう","尊重","respect / esteem","🙇",2,"n2noun");
V("いし","意志","will / volition","💪",2,"n2noun");
V("かくご","覚悟","resolution / readiness","🔥",2,"n2noun");
V("さとる","悟る","to realize / awaken to","🧘",2,"n2verb");
V("まよい","迷い","doubt / hesitation","🌫️",2,"n2noun");
V("うやまう","敬う","to revere / respect","🙇",2,"n2verb");
V("きせき","奇跡","miracle","✨",2,"n2noun");
V("しんぴ","神秘","mystery / the mystical","🔮",2,"n2noun");
V("せいじゃく","静寂","silence / stillness","🌙",2,"n2noun");
V("せいじつ","誠実","sincere / honest","💎",2,"n2adj");
V("じゅんすい","純粋","pure","💧",2,"n2adj");
// ---- q16_2 ふかしぎのふくし (adverbs) ----
V("あらためて","改めて","anew / once again","🔄",2,"n2adv");
V("いったん",null,"once / for a moment","⏸️",2,"n2adv");
V("おもわず","思わず","unintentionally / in spite of oneself","💨",2,"n2adv");
V("かえって",null,"on the contrary / rather","🔃",2,"n2adv");
V("さすが",null,"as expected (of)","👏",2,"n2adv");
V("しばしば",null,"frequently / often","🔁",2,"n2adv");
V("じつに","実に","truly / indeed","💯",2,"n2adv");
V("たちまち",null,"instantly / at once","⚡",2,"n2adv");
V("つねに","常に","always / constantly","📌",2,"n2adv");
V("どうせ",null,"anyway / after all","🤷",2,"n2adv");
V("なんとなく",null,"somehow / vaguely","🌫️",2,"n2adv");
V("ひとりでに",null,"by itself / spontaneously","🌀",2,"n2adv");
V("まさに",null,"exactly / precisely","🎯",2,"n2adv");
V("むしろ",null,"rather / instead","↔️",2,"n2adv");
V("もっとも","最も","most / extremely","🥇",2,"n2adv");
V("やや",null,"slightly / somewhat","🤏",2,"n2adv");
V("ようするに","要するに","in short","📝",2,"n2adv");
// ---- q16_3 ことばのいろどり (adjectives) ----
V("かしこい","賢い","wise / clever","🦉",2,"n2adj");
V("おろか","愚か","foolish","🃏",2,"n2adj");
V("けわしい","険しい","steep / grim","⛰️",2,"n2adj");
V("ゆるい","緩い","loose / lax","🪢",2,"n2adj");
V("するどい","鋭い","sharp / keen","🗡️",2,"n2adj");
V("にぶい","鈍い","dull / slow","🥄",2,"n2adj");
V("あやしい","怪しい","suspicious","🕵️",2,"n2adj");
V("たくましい",null,"sturdy / robust","💪",2,"n2adj");
V("みごと","見事","splendid","🎆",2,"n2adj");
V("きよらか","清らか","pure / clear","💧",2,"n2adj");
V("かすか","微か","faint / dim","🌫️",2,"n2adj");
V("おごそか","厳か","solemn","🕯️",2,"n2adj");
V("くだらない",null,"worthless / trivial","🗑️",2,"n2adj");
V("とんでもない",null,"outrageous / unthinkable","😱",2,"n2adj");
V("ばからしい",null,"absurd / ridiculous","🤪",2,"n2adj");
V("おさない","幼い","very young / childish","👶",2,"n2adj");
V("たのもしい","頼もしい","reliable / promising","🦾",2,"n2adj");
// ---- q16_4 こえるちから (verbs) ----
V("こえる","超える","to exceed / go beyond","🚀",2,"n2verb");
V("ゆずる","譲る","to yield / hand over","🤲",2,"n2verb");
V("うばう","奪う","to snatch / rob","🦹",2,"n2verb");
V("あたえる","与える","to give / bestow","🎁",2,"n2verb");
V("える","得る","to gain / obtain","💰",2,"n2verb");
V("うしなう","失う","to lose","🕳️",2,"n2verb");
V("いだく","抱く","to embrace / harbor (hope)","🤗",2,"n2verb");
V("めざす","目指す","to aim at","🎯",2,"n2verb");
V("いどむ","挑む","to challenge","🧗",2,"n2verb");
V("あきらめる","諦める","to give up","🏳️",2,"n2verb");
V("のりこえる","乗り越える","to overcome","⛰️",2,"n2verb");
V("はたす","果たす","to fulfill / carry out","✅",2,"n2verb");
V("とげる","遂げる","to accomplish","🏆",2,"n2verb");
V("やぶる","破る","to break / tear","💥",2,"n2verb");
V("むすぶ","結ぶ","to tie / conclude","🎀",2,"n2verb");
V("とく","解く","to solve / untie","🔓",2,"n2verb");
V("はなつ","放つ","to release / set free","🕊️",2,"n2verb");
// ---- q16_5 ことだまのかえるところ ----
V("ことだま","言霊","word spirit","✨",2,"n2noun");
V("でんとう","伝統","tradition","🏮",2,"n2noun");
V("ぶんめい","文明","civilization","🏛️",2,"n2noun");
V("ほこり","誇り","pride","🦁",2,"n2noun");
V("かんしゃ","感謝","gratitude","🙏",2,"n2noun");
V("えいきゅう","永久","permanence / eternity","♾️",2,"n2noun");
V("そせん","祖先","ancestor","🧓",2,"n2noun");
V("こんにち","今日","these days / the present day","📆",2,"n2noun");
V("ゆうき","勇気","courage","🦁",2,"n2noun");
V("やすらぎ","安らぎ","peace of mind","😌",2,"n2noun");
V("きずな","絆","bond / ties","🔗",2,"n2noun");
V("つばさ","翼","wings","🪽",2,"n2noun");
V("こうけい","光景","spectacle / sight","🌄",2,"n2noun");
V("しずまる","静まる","to quiet down","🌙",2,"n2verb");
V("ふたたび","再び","again / once more","🔄",2,"n2adv");
V("おえる","終える","to finish (something)","🏁",2,"n2verb");
V("はじまり","始まり","beginning","🌱",2,"n2noun");

// ======== N2 KANJI (150) ========
// ---- q13_1 ----
K("誤","ご・あやま","mistake / error","あやまり"); K("訂","てい","correct / revise","ていせい");
K("稿","こう","manuscript / draft","げんこう"); K("取","しゅ・と","take","しゅざい");
K("材","ざい","material / talent","しゅざい"); K("版","はん","printing plate / edition","しゅっぱん");
K("印","いん・しるし","seal / mark","いんさつ"); K("刷","さつ・す","print","いんさつ");
// ---- q13_2 ----
K("災","さい・わざわ","disaster","さいがい"); K("害","がい","harm","ひがい");
K("震","しん・ふる","quake / tremble","じしん"); K("被","ひ・こうむ","suffer / receive","ひがい");
K("救","きゅう・すく","rescue","きゅうじょ"); K("難","なん・むずか","difficulty / disaster","ひなん");
K("況","きょう","situation / condition","じょうきょう"); K("状","じょう","condition / form","じょうきょう");
// ---- q13_3 ----
K("盾","じゅん・たて","shield","むじゅん"); K("響","きょう・ひび","echo / resound","えいきょう");
K("偏","へん・かたよ","lean / biased","へんけん"); K("判","はん","judge","はんだん");
K("批","ひ","criticize","ひはん"); K("評","ひょう","evaluate / comment","ひょうか");
K("疑","ぎ・うたが","doubt","うたがう"); K("検","けん","examine / investigate","けんとう");
// ---- q13_4 ----
K("象","しょう・ぞう","phenomenon / elephant","ちゅうしょうてき"); K("抽","ちゅう","draw out / abstract","ちゅうしょうてき");
K("実","じつ・み・みの","truth / fruit","げんじつ"); K("想","そう","idea / thought","りそう");
K("準","じゅん","standard / semi-","きじゅん"); K("在","ざい・あ","exist","そんざい");
K("価","か","value / price","かち"); K("傾","けい・かたむ","lean / tendency","けいこう");
// ---- q13_5 ----
K("隠","いん・かく","hide","かくす"); K("訴","そ・うった","appeal / sue","うったえる");
K("拠","きょ・こ","grounds / base","こんきょ"); K("公","こう・おおやけ","public","こうひょう");
K("摘","てき・つ","pick / point out","してき"); K("支","し・ささ","support / branch","しじ");
K("資","し","resources / capital","しきん"); K("述","じゅつ・の","state / mention","のべる");
// ---- q14_1 ----
K("詩","し","poem","し詩"); K("物","ぶつ・もの","thing","ものがたり");
K("作","さく・つく","make / work","さくひん"); K("品","ひん・しな","goods / article","さくひん");
K("芸","げい","art / craft","げいじゅつ"); K("術","じゅつ","technique / art","げいじゅつ");
K("翻","ほん・ひるがえ","flip / translate","ほんやく"); K("訳","やく・わけ","translate / reason","ほんやく");
// ---- q14_2 ----
K("感","かん","feeling","かんじょう"); K("恋","れん・こい","romantic love","こい");
K("喜","き・よろこ","rejoice","よろこび"); K("悲","ひ・かな","sad","かなしみ");
K("怒","ど・いか・おこ","anger","いかり"); K("恐","きょう・おそ","fear","おそれ");
K("涙","るい・なみだ","tears","なみだ"); K("込","こ","put into / include","こめる");
// ---- q14_3 ----
K("景","けい","scenery / view","ふうけい"); K("眺","ちょう・なが","gaze at","ながめ");
K("香","こう・かお","fragrance","かおり"); K("輝","き・かがや","shine","かがやく");
K("揺","よう・ゆ","sway / shake","ゆれる"); K("浮","ふ・う","float","うかぶ");
K("沈","ちん・しず","sink","しずむ"); K("枯","こ・か","wither","かれる");
// ---- q14_4 ----
K("章","しょう","chapter / badge","ぶんしょう"); K("段","だん","step / grade","だんらく");
K("約","やく","promise / summary / roughly","ようやく"); K("筆","ひつ・ふで","writing brush","ひっしゃ");
K("俳","はい","haiku / actor","はいく"); K("短","たん・みじか","short","たんか");
K("優","ゆう・やさ・すぐ","excel / gentle","すぐれる"); K("略","りゃく","abbreviate / omit","しょうりゃく");
// ---- q14_5 ----
K("永","えい・なが","eternal","えいえん"); K("瞬","しゅん・またた","blink / instant","しゅんかん");
K("誓","せい・ちか","vow / oath","ちかう"); K("魂","こん・たましい","soul","たましい");
K("黙","もく・だま","silence","ちんもく"); K("祈","き・いの","pray","いのる");
K("憶","おく","remember","きおく"); K("叫","きょう・さけ","shout","さけぶ");
// ---- q15_1 ----
K("議","ぎ","deliberation","ぎかい"); K("票","ひょう","ballot / vote slip","とうひょう");
K("規","き","rule / standard","きせい"); K("制","せい","system / control","せいど");
K("挙","きょ・あ","raise / nominate","せんきょ"); K("権","けん","authority / right","けんり");
K("義","ぎ","righteousness / duty","ぎむ"); K("憲","けん","constitution","けんぽう");
// ---- q15_2 ----
K("企","き・くわだ","plan / enterprise","きぎょう"); K("需","じゅ","demand","じゅよう");
K("供","きょう・そな・とも","offer / supply","きょうきゅう"); K("賃","ちん","wages / fare","ちんぎん");
K("雇","こ・やと","employ / hire","やとう"); K("株","かぶ","stock / stump","かぶ");
K("投","とう・な","throw / invest","とうし"); K("給","きゅう","supply / salary","きょうきゅう");
// ---- q15_3 ----
K("齢","れい","age","こうれい"); K("福","ふく","fortune / blessing","ふくし");
K("祉","し","welfare / happiness","ふくし"); K("環","かん","ring / surround","かんきょう");
K("境","きょう・さかい","boundary","かんきょう"); K("染","せん・そ","dye / infect","おせん");
K("源","げん・みなもと","source","しげん"); K("域","いき","region / range","ちいき");
// ---- q15_4 ----
K("契","けい・ちぎ","contract / pledge","けいやく"); K("裁","さい・さば","judge / cut cloth","さいばん");
K("罪","ざい・つみ","crime / sin","はんざい"); K("罰","ばつ・ばち","punishment","ばつ");
K("禁","きん","prohibit","きんし"); K("求","きゅう・もと","seek / demand","ようきゅう");
K("令","れい","command / order","めいれい"); K("期","き・ご","period / term","きげん");
// ---- q15_5 ----
K("武","ぶ・む","military / warrior","ぶき"); K("器","き・うつわ","vessel / instrument","ぶき");
K("展","てん","expand / develop","はってん"); K("勝","しょう・か・まさ","win / prevail","しょうはい");
K("独","どく・ひと","alone / independent","どくりつ"); K("革","かく・かわ","reform / leather","かくめい");
K("導","どう・みちび","guide / lead","みちびく"); K("統","とう・す","unite / govern","とういつ");
// ---- q16_1 ----
K("宇","う","cosmos / eaves","うちゅう"); K("宙","ちゅう","space / air","うちゅう");
K("恵","けい・え・めぐ","blessing / wisdom","ちえ"); K("覚","かく・おぼ・さ","awaken / remember","かくご");
K("悟","ご・さと","enlightenment / realize","さとる"); K("秘","ひ・ひめ","secret / mystical","しんぴ");
// ---- q16_2 ----
K("改","かい・あらた","reform / renew","あらためて"); K("常","じょう・つね","usual / constant","つねに");
K("尊","そん・とうと","revered / precious","そんちょう"); K("純","じゅん","pure","じゅんすい");
K("静","せい・しず","quiet","せいじゃく"); K("寂","じゃく・さび","lonely / still","せいじゃく");
// ---- q16_3 ----
K("賢","けん・かしこ","wise","かしこい"); K("愚","ぐ・おろ","foolish","おろか");
K("幼","よう・おさな","infancy / very young","おさない"); K("鋭","えい・するど","sharp","するどい");
K("鈍","どん・にぶ","dull","にぶい"); K("怪","かい・あや","suspicious / mysterious","あやしい");
// ---- q16_4 ----
K("超","ちょう・こ","exceed / super-","こえる"); K("譲","じょう・ゆず","yield / transfer","ゆずる");
K("奪","だつ・うば","snatch / rob","うばう"); K("与","よ・あた","give / bestow","あたえる");
K("得","とく・え","gain / obtain","える"); K("挑","ちょう・いど","challenge / defy","いどむ");
// ---- q16_5 ----
K("霊","れい・たま","spirit / soul","ことだま"); K("伝","でん・つた","transmit / tradition","でんとう");
K("誇","こ・ほこ","pride / boast","ほこり"); K("久","きゅう・ひさ","long-lasting","えいきゅう");
K("翼","よく・つばさ","wing","つばさ"); K("祖","そ","ancestor","そせん");

// ======== N2 GRAMMAR (40) ========
// ---- ch13 ----
Gr("g2_niyoruto","〜によると〜ということだ",null,
  "【聞|き】いた【話|はなし】を【伝|つた】える【言|い】い【方|かた】。【情報|じょうほう】の【元|もと】を「によると」で【示|しめ】します。",
  [["【天気予報|てんきよほう】によると、【台風|たいふう】が【来|く】るということだ。",null],["【記事|きじ】によると、【物価|ぶっか】が【上|あ】がっているそうだ。",null]],2);
Gr("g2_toiukotoda","〜ということだ",null,
  "①【人|ひと】から【聞|き】いた【話|はなし】を【伝|つた】える。②「つまり〜という【意味|いみ】だ」と、まとめて【言|い】う。",
  [["【社長|しゃちょう】は【来月|らいげつ】やめるということだ。",null],["つまり、【会議|かいぎ】は【中止|ちゅうし】だということだ。",null]],2);
Gr("g2_nikanshite","〜に関して",null,
  "「〜について」のかたい【言|い】い【方|かた】。ニュースや【報告|ほうこく】でよく【使|つか】います。",
  [["この【事件|じけん】に【関|かん】して、【何|なに】も【話|はな】せません。",null],["【島|しま】の【歴史|れきし】に【関|かん】して、【詳|くわ】しく【調|しら】べた。",null]],2);
Gr("g2_nitomonatte","〜に伴って",null,
  "「〜といっしょに、【別|べつ】のことも【起|お】こる・【変|か】わる」という【意味|いみ】です。",
  [["【地震|じしん】に【伴|ともな】って、【火事|かじ】が【発生|はっせい】した。",null],["【町|まち】の【発展|はってん】に【伴|ともな】って、【道|みち】も【広|ひろ】くなった。",null]],2);
Gr("g2_dokoroka","〜どころか",null,
  "【前|まえ】のことを【強|つよ】く【否定|ひてい】して、「それどころか、もっと」と【言|い】う【形|かたち】。",
  [["【漢字|かんじ】どころか、ひらがなも【読|よ】めない。",null],["【雨|あめ】は【止|や】むどころか、ますます【強|つよ】くなった。",null]],2);
Gr("g2_monono","〜ものの",null,
  "「〜けれども」のかたい【言|い】い【方|かた】。【前|まえ】のことは【本当|ほんとう】だが、【期待|きたい】どおりにならない。",
  [["【免許|めんきょ】は【持|も】っているものの、ほとんど【運転|うんてん】しない。",null],["【謝|あやま】ったものの、【許|ゆる】してもらえなかった。",null]],2);
Gr("g2_ippou","〜一方（で）",null,
  "ひとつの【面|めん】と、もうひとつの【面|めん】をならべて【言|い】います。",
  [["この【町|まち】は【便利|べんり】な【一方|いっぽう】で、【物価|ぶっか】が【高|たか】い。",null],["【働|はたら】く【一方|いっぽう】で、【勉強|べんきょう】も【続|つづ】けている。",null]],2);
Gr("g2_hanmen","〜反面",null,
  "よい【面|めん】と、その【反対|はんたい】の【面|めん】があることを【表|あらわ】します。",
  [["この【薬|くすり】はよく【効|き】く【反面|はんめん】、【眠|ねむ】くなる。",null],["【都会|とかい】は【便利|べんり】な【反面|はんめん】、【自然|しぜん】が【少|すく】ない。",null]],2);
Gr("g2_nichigainai","〜に違いない",null,
  "「きっとそうだ」と【強|つよ】く【思|おも】うときの【言|い】い【方|かた】。",
  [["あの【顔|かお】は、【何|なに】か【隠|かく】しているに【違|ちが】いない。",null],["これは【本当|ほんとう】の【話|はなし】に【違|ちが】いない。",null]],2);
Gr("g2_nikakawarazu","〜にかかわらず",null,
  "「〜に【関係|かんけい】なく」という【意味|いみ】です。",
  [["【天気|てんき】にかかわらず、【祭|まつ】りは【行|おこな】われる。",null],["【年齢|ねんれい】にかかわらず、だれでも【参加|さんか】できる。",null]],2);
// ---- ch14 ----
Gr("g2_kanoyou","〜かのように",null,
  "【本当|ほんとう】はちがうのに、まるでそうであるように、というたとえの【言|い】い【方|かた】。",
  [["【何|なに】も【知|し】らないかのように、【笑|わら】っていた。",null],["【冬|ふゆ】が【来|き】たかのように【寒|さむ】い【朝|あさ】だった。",null]],2);
Gr("g2_monoda","〜ものだ",null,
  "①「〜というのは、ふつうそうだ」という【一般的|いっぱんてき】な【性質|せいしつ】。②「〜たものだ」で【昔|むかし】をなつかしむ。",
  [["【人|ひと】の【心|こころ】は【変|か】わるものだ。",null],["【子|こ】どものころ、この【川|かわ】でよく【泳|およ】いだものだ。",null]],2);
Gr("g2_nikuwaete","〜に加えて",null,
  "「〜だけでなく、さらに」という【意味|いみ】。ものごとが【重|かさ】なるときに【使|つか】います。",
  [["【地震|じしん】に【加|くわ】えて、【津波|つなみ】の【被害|ひがい】も【出|で】た。",null],["【強|つよ】い【風|かぜ】に【加|くわ】えて、【雨|あめ】も【降|ふ】り【出|だ】した。",null]],2);
Gr("g2_amari","〜あまり",null,
  "「〜すぎて」という【意味|いみ】。【気持|きも】ちの【言葉|ことば】につけて、その【結果|けっか】を【言|い】います。",
  [["【嬉|うれ】しさのあまり、【泣|な】いてしまった。",null],["【心配|しんぱい】のあまり、【眠|ねむ】れなかった。",null]],2);
Gr("g2_tsutsu","〜つつ（も）",null,
  "①「〜ながら」のかたい【言|い】い【方|かた】。②「〜けれども」の【意味|いみ】にもなります。",
  [["【悪|わる】いと【知|し】りつつ、うそをついた。",null],["【湖|みずうみ】を【眺|なが】めつつ、お【茶|ちゃ】を【飲|の】んだ。",null]],2);
Gr("g2_saichuu","〜最中に",null,
  "「ちょうど〜しているとき」。そのとき【何|なに】かが【起|お】こることが【多|おお】いです。",
  [["【食事|しょくじ】の【最中|さいちゅう】に、【電話|でんわ】が【鳴|な】った。",null],["【話|はな】している【最中|さいちゅう】に、【眠|ねむ】ってしまった。",null]],2);
Gr("g2_gatai","〜がたい",null,
  "「したくても、なかなかできない」という【意味|いみ】。「【信|しん】じがたい」「【忘|わす】れがたい」。",
  [["あの【人|ひと】の【言葉|ことば】は【信|しん】じがたい。",null],["【忘|わす】れがたい【思|おも】い【出|で】になった。",null]],2);
Gr("g2_kaneru","〜かねる・〜かねない",null,
  "「〜かねる」は、ていねいに「できない」と【断|ことわ】る【形|かたち】。「〜かねない」は、【悪|わる】いことが【起|お】こりそうだという【意味|いみ】。",
  [["その【質問|しつもん】には、お【答|こた】えしかねます。",null],["あの【運転|うんてん】では、【事故|じこ】を【起|お】こしかねない。",null]],2);
Gr("g2_monoka","〜ものか",null,
  "「ぜったいに〜ない」という【強|つよ】い【気持|きも】ちを【表|あらわ】します。",
  [["あんな【店|みせ】、【二度|にど】と【行|い】くものか。",null],["【負|ま】けるものか。",null]],2);
Gr("g2_bakarini","〜ばかりに",null,
  "「それだけが【原因|げんいん】で、【悪|わる】い【結果|けっか】になった」という【後悔|こうかい】の【言|い】い【方|かた】。",
  [["うそをついたばかりに、【信頼|しんらい】を【失|うしな】ってしまった。",null],["【急|いそ】いだばかりに、【転|ころ】んでしまった。",null]],2);
// ---- ch15 ----
Gr("g2_nimotozuite","〜に基づいて",null,
  "「〜を【元|もと】にして」という【意味|いみ】。【法律|ほうりつ】や【事実|じじつ】など、しっかりした【元|もと】があるときに【使|つか】います。",
  [["【法律|ほうりつ】に【基|もと】づいて、【判断|はんだん】する。",null],["【事実|じじつ】に【基|もと】づいた【記事|きじ】を【書|か】く。",null]],2);
Gr("g2_nisotte","〜に沿って",null,
  "「〜のとおりに、〜から【離|はな】れないで」という【意味|いみ】。【川|かわ】や【道|みち】、【規則|きそく】にも【使|つか】います。",
  [["【憲法|けんぽう】に【沿|そ】って、【新|あたら】しい【制度|せいど】を【作|つく】る。",null],["【川|かわ】に【沿|そ】って、【道|みち】が【続|つづ】いている。",null]],2);
Gr("g2_wotsuujite","〜を通じて",null,
  "①「〜を【手段|しゅだん】にして」。②「その【期間|きかん】ずっと」という【意味|いみ】もあります。",
  [["【言葉|ことば】を【通|つう】じて、【心|こころ】が【伝|つた】わる。",null],["【一年|いちねん】を【通|つう】じて、この【丘|おか】は【暖|あたた】かい。",null]],2);
Gr("g2_nioujite","〜に応じて",null,
  "「〜に【合|あ】わせて【変|か】わる」という【意味|いみ】です。",
  [["【働|はたら】きに【応|おう】じて、【賃金|ちんぎん】が【決|き】まる。",null],["【状況|じょうきょう】に【応|おう】じて、【計画|けいかく】を【変|か】える。",null]],2);
Gr("g2_uede","〜上で",null,
  "①「〜してから」（た【形|けい】＋【上|うえ】で）。②「〜するときに」（【辞書形|じしょけい】＋【上|うえ】で）。",
  [["よく【考|かんが】えた【上|うえ】で、【決|き】めてください。",null],["【法律|ほうりつ】は、くらしを【守|まも】る【上|うえ】で【大切|たいせつ】だ。",null]],2);
Gr("g2_kagiri","〜限り",null,
  "①「〜の【間|あいだ】はずっと」。②「わたしの【知|し】る【限|かぎ】り」＝「【知|し】っている【範囲|はんい】では」。",
  [["あきらめない【限|かぎ】り、【道|みち】はある。",null],["わたしが【知|し】る【限|かぎ】り、かれは【正直|しょうじき】な【人|ひと】だ。",null]],2);
Gr("g2_womegutte","〜をめぐって",null,
  "【議論|ぎろん】や【争|あらそ】いの【中心|ちゅうしん】になっているものを【表|あらわ】します。",
  [["【新|あたら】しい【税金|ぜいきん】をめぐって、【議論|ぎろん】が【続|つづ】いている。",null],["その【土地|とち】をめぐって、【争|あらそ】いが【起|お】きた。",null]],2);
Gr("g2_nihanshite","〜に反して",null,
  "「【予想|よそう】や【期待|きたい】とちがって」という【意味|いみ】です。",
  [["【予想|よそう】に【反|はん】して、【選挙|せんきょ】に【負|ま】けた。",null],["【親|おや】の【期待|きたい】に【反|はん】して、【詩人|しじん】になった。",null]],2);
Gr("g2_zaruwoenai","〜ざるを得ない",null,
  "「したくないが、しなければならない」という【意味|いみ】。ない【形|けい】から「ない」をとって「ざるを【得|え】ない」。「する」は「せざるを【得|え】ない」。",
  [["【規則|きそく】だから、【従|したが】わざるを【得|え】ない。",null],["【計画|けいかく】を【変|か】えざるを【得|え】なかった。",null]],2);
Gr("g2_bekida","〜べきだ",null,
  "「そうするのが【正|ただ】しい」という【意見|いけん】を【表|あらわ】します。【反対|はんたい】は「〜べきではない」。",
  [["【政府|せいふ】は【国民|こくみん】の【声|こえ】を【聞|き】くべきだ。",null],["【約束|やくそく】は【守|まも】るべきだ。",null]],2);
// ---- ch16 ----
Gr("g2_nihokanaranai","〜にほかならない",null,
  "「まさに〜そのものだ。それ【以外|いがい】ではない」という【強|つよ】い【言|い】い【方|かた】。",
  [["【言葉|ことば】は、【心|こころ】の【力|ちから】にほかならない。",null],["【勝利|しょうり】は、【努力|どりょく】の【結果|けっか】にほかならない。",null]],2);
Gr("g2_zuniwa","〜ずにはいられない",null,
  "「がまんできず、してしまう」という【気持|きも】ち。ない【形|けい】から「ない」をとって「ずにはいられない」。",
  [["この【詩|し】を【読|よ】むと、【泣|な】かずにはいられない。",null],["【心配|しんぱい】で、【聞|き】かずにはいられなかった。",null]],2);
Gr("g2_youganai","〜ようがない",null,
  "「【方法|ほうほう】がなくて、できない」という【意味|いみ】。ます【形|けい】の【語幹|ごかん】＋「ようがない」。",
  [["【住所|じゅうしょ】がわからないので、【知|し】らせようがない。",null],["こんなに【壊|こわ】れていては、【直|なお】しようがない。",null]],2);
Gr("g2_kiri","〜きり",null,
  "「〜のあと、そのままずっと」という【意味|いみ】です。",
  [["かれは【出|で】かけたきり、【帰|かえ】ってこない。",null],["あの【人|ひと】には【一度|いちど】【会|あ】ったきりだ。",null]],2);
Gr("g2_karaniha","〜からには",null,
  "「〜のだから、【当然|とうぜん】〜する」という【決意|けつい】や【義務|ぎむ】を【表|あらわ】します。",
  [["【引|ひ】き【受|う】けたからには、【最後|さいご】までやる。",null],["【誓|ちか】ったからには、【破|やぶ】るわけにはいかない。",null]],2);
Gr("g2_totan","〜とたん（に）",null,
  "「〜したちょうどそのとき、【急|きゅう】に」という【意味|いみ】。た【形|けい】＋「とたん」。",
  [["【扉|とびら】を【開|あ】けたとたん、【風|かぜ】が【吹|ふ】きこんだ。",null],["【顔|かお】を【見|み】たとたん、【泣|な】いてしまった。",null]],2);
Gr("g2_nuku","〜抜く",null,
  "「【最後|さいご】まで〜しきる」という【意味|いみ】。ます【形|けい】の【語幹|ごかん】＋「【抜|ぬ】く」。",
  [["【苦|くる】しくても、【最後|さいご】まで【走|はし】り【抜|ぬ】いた。",null],["【考|かんが】え【抜|ぬ】いて【出|だ】した【答|こた】えだ。",null]],2);
Gr("g2_sueni","〜末（に）",null,
  "「いろいろ〜したあと、【最後|さいご】に」という【意味|いみ】。た【形|けい】や【名詞|めいし】の＋「【末|すえ】に」。",
  [["【悩|なや】んだ【末|すえ】に、【旅|たび】に【出|で】ることにした。",null],["【長|なが】い【議論|ぎろん】の【末|すえ】、【条約|じょうやく】が【結|むす】ばれた。",null]],2);
Gr("g2_tsutsuaru","〜つつある",null,
  "「【今|いま】、だんだん〜している【途中|とちゅう】だ」という【変化|へんか】を【表|あらわ】します。",
  [["【世界|せかい】は【変|か】わりつつある。",null],["【言葉|ことば】の【力|ちから】が、よみがえりつつある。",null]],2);
Gr("g2_shidai","〜次第",null,
  "①ます【形|けい】の【語幹|ごかん】＋「【次第|しだい】」＝「〜したらすぐ」。②【名詞|めいし】＋「【次第|しだい】だ」＝「〜によって【決|き】まる」。",
  [["【準備|じゅんび】ができ【次第|しだい】、【出発|しゅっぱつ】する。",null],["【未来|みらい】は、あなたの【心|こころ】【次第|しだい】だ。",null]],2);
