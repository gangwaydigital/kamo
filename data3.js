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
