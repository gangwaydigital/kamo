// ============================================================
// カモのことだまクエスト — N1 curriculum scaffold (chapters 17-20)
// NOT LOADED YET — see docs/n1-recipe.md for the build steps.
// Uses V()/K()/Gr() from data.js:
//   V("かな","漢字"|null,"gloss","emoji",1,"n1noun"|... ,key?)
//   Gr("g1_xxx","〜pattern",null,"日本語のせつめい【漢字|かな】",[["ex",null],["ex2",null]],1)
// buildQuestions scope for the N1 exam boss: {scope:"lv1"} — wait, the
// scope system treats "lvN" as level-and-easier (lv>=N), so the N1 exam
// should use scope:"lv1"... which includes everything. For an N1-only
// pool a new exact-level scope would be needed; simplest is scope:"all"
// for the final and no separate N1-exam scope (matches q16_5 precedent).
// ============================================================

// ---- N1 content (filled by the drafting agent) ----
