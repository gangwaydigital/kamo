# N1 Expansion Recipe (chapters 17–20)

The proven pipeline, run twice already (N3, N2). Budget guide from those runs:
one drafting agent ≈ 200–250k subagent tokens, teacher review ≈ 110k, plus
integration/audio/QA. Higgsfield: ~2 credits/image, ~0.1/TTS batch.
Scaffolds already in repo (NOT loaded): `data4.js`, `quests4.js`.

## Story

Beyond the shrine lies ことばの源 — the Source. Chapter themes:
- **ch17 学問の塔** (fukurou2 = Professor Fukurou, older): academic/formal
  written Japanese; 〜を踏まえて、〜に鑑みて、〜べく、〜ゆえに
- **ch18 編集室** (hebi = snake editor-in-chief): editorial/nuance;
  〜ながらも、〜といえども、〜ならでは、〜きらいがある
- **ch19 古典の道** (kame2 = Kame the sage): classical echoes, literary set
  phrases; 〜んがため、〜べからず、〜まじき、〜かたわら
- **ch20 ことばの源** (houou = the Mother of Words): final trial. She is not
  an enemy — the last battle is a conversation that tests everything.
  q20_5 gets `final:true` (REMOVE it from q16_5), battle scope:"all", hp 40.

## Steps

1. **Enable scaffolds**: add `<script src="data4.js">` (after data3.js) and
   `<script src="quests4.js">` (after quests3.js… i.e. after assets.js) to
   index.html; add both files to the load lists in `validate.js`,
   `qa_playthrough.js`, and the `CORE` array in `sw.js` (bump CACHE to v3).
   Add a forward door in the **palace** map (quests3.js) to "tower" with
   `needCh:17` — copy how castle→city was done.
2. **Draft**: launch ONE general-purpose agent with the drafting prompt below.
3. **Integrate**: `cat draft_n1_data.js >> data4.js`,
   `cat draft_n1_quests.js >> quests4.js`, append
   `QUESTS.push(...N1_QUESTS); GQUIZ.push(...N1_GQUIZ);`,
   move `final:true` from q16_5 to q20_5, then run
   `node validate.js && node qa_playthrough.js` (must end at ch20,
   `ended:true`, 0 errors).
4. **Teacher review**: one agent, the review prompt below; apply criticals.
5. **Art** (~30 images ≈ 60 credits, nano_banana_pro, style prefix
   "Storybook watercolor illustration, soft Ghibli-inspired children's book
   art, gentle brush textures"): 2 ground textures + 4 props + 2 empty
   backdrops (tower: candlelit library of endless shelves; source: starfield
   of floating golden words), 4 NPC portrait+chibi-sprite pairs (sprites on
   pure white for `tools/keyout.py` chroma-key), 4 chapter cutscenes, an
   N1-true-ending scene, 4 bosses. Wire into ASSETS/CHARS/LOCBG/MAPART/
   CUTSCENE_LINES in quests4.js (copy the block pattern in quests3.js).
   Process: `sips` to jpg for backdrops/portraits/cutscenes;
   `python tools/keyout.py in.png out.png 128` for sprites/props.
6. **Audio** (~20 TTS batches ≈ 2 credits, model seed_audio, format mp3,
   sample_rate 44100): words+readings at speech_rate -20 joined with 。,
   24/batch; grammar example sentences at -10, 8/batch, clips named by
   grammar id. Split with
   `python tools/split_audio.py batch.mp3 assets/audio items.txt`
   (items.txt lines: `name` or `name<TAB>unitcount` where unitcount =
   number of 。！？ in the sentence). Batches that fail server-side or
   mis-split: halve and retry. Verify coverage with the checker in
   qa_playthrough (or the inline node snippet in git history, commit
   "N3/N2 expansion complete").
7. **Ship**: gates green → commit → bump README stats → push.

## Drafting agent prompt (adapt of the N2 one — proven format)

> You are authoring the JLPT N1 expansion for a Japanese learning RPG. First
> READ /…/kamo/data.js, data3.js (helper formats + what exists), quests.js and
> quests3.js chapters 13-16 (pure-Japanese quest/dialogue/GQUIZ conventions),
> and validate.js. Deliver /private/tmp/kamo_raw/draft_n1_data.js (~300 V()
> with lv 1, ~120 K() kanji not already present, 36 Gr() "g1_*" with en null,
> jp explanations readable by an N2 finisher, lv 1) and draft_n1_quests.js
> (const N1_QUESTS = 20 quests q17_1–q20_5 using ONLY npcs fukurou2/hebi
> (ch17-18) and kame2/houou (ch19-20); const N1_GQUIZ = 72, 2 per grammar,
> opts[0] correct, （…） intent labels against ambiguity). q20_5: final:true,
> battle 【言葉|ことば】の【母|はは】 sprite "🐦‍🔥" hp 40 dmg 24 scope:"all",
> 4-line farewell outro that completes Kamo's whole journey. HARD RULES: zero
> Latin anywhere, 【漢字|かな】 furigana on every kanji, every item taught in
> your quests' teach lists, no vocab key collisions with KANA/VOCAB (check
> data.js + data3.js), readings correct — a teacher audits. VERIFY with a vm
> harness (validate.js stub pattern; load data.js, data3.js, quests.js,
> assets.js, quests3.js, then your drafts) checking collisions, kanji-example
> containment, teach coverage, 2-GQUIZ-per-grammar, node --check. Iterate
> until clean; report counts + verification output.

## Review agent prompt

Same as the N3/N2 audit (git history, commit "N2 curriculum integrated" era):
readings/furigana/glosses/kanji-example containment/grammar
correctness/ambiguous distractors/Latin leaks, ranked critical vs minor,
mechanical checks excluded.
