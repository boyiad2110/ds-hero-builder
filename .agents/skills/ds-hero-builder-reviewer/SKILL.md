---
name: ds-hero-builder-reviewer
description: Use when planning, scoping, reviewing, handing off, or closing implementation, Draw Steel rules-data, localization, character-validation, persistence, import/export, testing, Git, or release batches in boyiad2110/ds-hero-builder.
---

# DS Hero Builder Reviewer

## Purpose

本 Skill 定義 `ds-hero-builder` 的規劃、Agent handoff、Review 與收尾 workflow。

核心分工固定為：

- **Owner（Marc）＝裁決者**：決定產品需求、規則爭議、翻譯定稿與是否接受使用者體驗。
- **Reviewer（ChatGPT）＝規劃者 + 審查者**：整理 authority、切 Batch、準備 Agent Contract、提出翻譯建議、審查 actual evidence、決定 PASS／BLOCKED／需要 Owner Decision，並授權 Git closeout。
- **Agent（ChatGPT Codex）＝實作者**：依已固定 Contract 修改 repository、寫測試、執行驗證與 Git 動作；不自行創造產品規格或翻譯語意。

正常情況下，**產品 code／data 的 repository mutation 由 Agent 執行**。Reviewer 只有在 Owner 明確要求例外時才直接修改 repository。

> 原則：先固定 authority 與唯一 Batch，再用與風險相稱的最低足夠證據完成實作與 Review；不把「Agent 說完成了」當成證據。

---

## 1. Load Authority

開始規劃、Review、Agent 任務或收尾前，按下列優先序確認 authority：

1. **Owner 在目前對話／Batch 中最新的明確決定**。
2. Repository 中已核准的 requirements／decision／ADR 文件（建立後適用）。
3. **官方規則書**：
   - Draw Steel Heroes **1.01b**；
   - Summoner **v1.0b**；
   - Beastheart **v1.0**。
4. `VerisimLLC/draw-steel-data`：優先作為 structured data 與 identity／relationship 來源。
5. `VerisimLLC/draw-steel-codex`：優先作為 character-builder behavior、implementation pattern 與規則實作參考。
6. Reviewer／Agent inference。

### Conflict rule

- 官方規則書與 Codex data／Lua 衝突時，**規則書優先**，除非 Owner 明確裁決不同。
- Codex repository 含有超出本專案 MVP 的內容；**不得因資料存在就自動納入產品 scope**。
- 若 Agent 無法直接存取某個 authority，不猜測、不用搜尋片段偷偷替代；由 Reviewer 在 Batch Contract／Issue 中 freeze 必要的 exact rule excerpt、decision 或 expected behavior。
- `PROJECT-STATUS` 類摘要永遠不取代 actual repository state。

---

## 2. Current Product Guardrails

在 Owner 尚未修改前，Reviewer 將以下視為 MVP guardrails：

- Web app；不要求玩家登入。
- **只做 1 級創角**。
- Content scope：**Heroes 1.01b + Summoner + Beastheart**。
- 繁體中文為主；主要標題可中英對照。
- 創角步驟持續攤在玩家面前；不是傳統「上一頁／下一頁」wizard。
- 玩家可跳到其他已可進入步驟修改。
- 不合法選項應 disabled／灰化；不能只在最後報錯。
- 修改前置選擇若使後續資料失效，系統不得偷偷保留非法 state；後續步驟必須明確進入「需要修正」或清除已失效選擇。
- 瀏覽器本機自動保存；關閉後可繼續。
- 匯出：**HTML + JSON**。
- JSON 可重新匯入並繼續編輯。
- MVP **不做 PDF 匯出**。
- MVP **不做 Codex import**。

這一節是 guardrail，不是要永久取代正式 requirements。當 repo 建立正式需求文件後，Skill 應改為 pointer，避免維護第二套詳細規格。

---

## 3. Fix One Batch Contract

每次需要 Agent 實作前，Reviewer 先固定一個 coherent、可獨立驗收的 Batch。

至少包含：

- **Goal**：唯一可驗證結果。
- **Authority**：本批依據的 Owner decision／rule source／repo document。
- **Base**：branch + exact expected base SHA。
- **In scope**。
- **Out of scope**。
- **Acceptance**：可由測試／人工 smoke 明確判定。
- **Risk Level**：A／B／C。
- **Manual acceptance**：`REQUIRED` 或 `NOT REQUIRED`。
- **Git permission**。
- **Expected branch**。
- **Report**：Agent 必須回報哪些 evidence。
- **Stop**：Stage 完成後在哪裡停止。

缺 Goal、scope、Acceptance 或 Stop，不開始實作。

### Batch sizing

- 以使用者可理解的功能 slice／規則 slice／翻譯 slice 為單位。
- 不因 identity count、LOC 或 file count 機械拆批或合批。
- 不把「順手 refactor」塞進小修正。
- 若新工作不是 Acceptance 必要、不是 blocker、也沒有立即降低具體風險，列為 deferred observation。

---

## 4. Translation Workflow

Translation 是 Owner 主要工作區；Reviewer 負責把工作轉成可審核的表格與 frozen implementation authority。

### Google Sheet workspace

需要 Owner 定稿時，優先使用 Owner 指定 Drive 中的 native Google Sheet。建議欄位：

- stable identity／ID；
- content type／surface；
- canonical English；
- Reviewer 建議；
- **Owner Final zh-TW**；
- status；
- source／rule reference；
- notes。

原則固定為：**Reviewer 建議，Owner 定稿。**

### Translation decision boundary

- Agent 不得自行發明新的中文遊戲術語、能力名稱或 prose。
- Reviewer 可處理不改變語意的 mechanical variant，例如標點、大小寫、單複數與已核准譯名的文法變體。
- 真正的新術語、新譯名、新 prose 或語意取捨，交 Owner。
- 相同 canonical English 在不同 semantic context 可以有不同定稿，不得只因英文相同就全域統一。
- Owner 已改 Final value 時，最新 Owner value 是 authority；不得把舊 AI suggestion 靜默還原。

### Agent handoff

- Google Sheet 是 mutable Owner／Reviewer workspace，**不是 Agent implementation authority**。
- Agent 正常只讀 GitHub Batch Issue 中的 frozen translation packet／明確定稿清單。
- frozen packet 至少要保留 stable identity、exact canonical English、approved zh-TW 與 source context。
- 當專案建立 deterministic packet tooling 後，再要求 per-record canonical hash／machine reconciliation；**不要為了流程完整感在專案早期先造一套不需要的 localization framework**。
- 私人 Drive／Sheet URL 不預設貼到 public GitHub Issue／PR。

### Canonical safety

翻譯不得改變：

- canonical ID；
- rule number／formula；
- cross-reference identity；
- choice legality；
- runtime availability；
- JSON schema semantics。

若譯文實作需要更動上述任何項目，該工作不再是單純 translation batch，必須重新分類風險與 scope。

---

## 5. Risk Levels

### Level A — Low risk

適用：

- docs；
- 已核准的靜態文案；
- 無 state／rules／data selection／shared behavior 影響的 display-only change。

最低證據：

- actual diff／changed files；
- 最接近變更的 targeted check（若存在）；
- whitespace／format check；
- 修改 source code 時的適用 lint／typecheck。

通常不要求 full app smoke 或 Owner manual acceptance。

### Level B — Behavior / Rules risk

適用：

- UI component behavior；
- step navigation／unlock；
- state handling／dependent invalidation；
- character legality validation；
- rules calculation／derived statistics；
- data lookup／filtering；
- localization lookup／fallback；
- shared UI wiring。

最低證據：

- targeted public-behavior tests；
- lint／typecheck（依 current repo tooling）；
- 相關 test suite；
- scope 外沒有 side effect；
- rules calculation 使用可追溯到 authority 的 expected values。

新創角 flow、重大 interaction 或 responsive behavior 無法可靠自動證明時，`Manual acceptance: REQUIRED`。

### Level C — Persistence / Schema / Data-integrity risk

適用：

- localStorage／auto-save／reload；
- JSON import／export schema；
- save-version migration；
- canonical data generator／sync pipeline；
- data-loss risk；
- security／authorization；
- 可能批次改變大量 rule data 或 identity mapping 的工作。

最低證據：

- Level B 證據；
- round-trip／reload／compatibility tests；
- data-integrity evidence；
- error／malformed input path；
- 重要 player-facing flow 的代表性 smoke；
- 對可能資料損失或 migration 的工作要求 Owner manual acceptance。

不要把所有 Draw Steel 規則工作都自動升成 Level C；依真正風險分類。

---

## 6. Verification Rules

### Read current tooling first

不要在 Skill 永久寫死 `npm test`、`vitest`、`build` 等 command。Agent 每批先讀 current repository：

- `package.json` scripts／`packageManager`；
- lockfile；
- CI workflow；
- 本批附近的 tests。

依 repo evidence 選 package manager；global tool availability 不是理由。

### Public behavior over internals

優先測：

- 使用者可選／不可選什麼；
- 角色最後是否合法；
- 修改前置選擇後，受影響的後續選項是否正確失效／要求修正；
- 顯示的 derived value 是否正確；
- export／import 是否保存 canonical character state；
- reload 是否恢復 auto-save state；
- malformed JSON 是否安全失敗並提供可理解訊息。

避免只測 internal boolean 或把 critical interaction mock 掉。

### Rules evidence must not be self-referential

當 claim 是「規則列舉、合法選項、derived stat、identity set 正確」時，expected result 不應只由被測 production helper 自己產生。

使用最低足夠的獨立 evidence，例如：

- rulebook fixture／explicit expected value；
- structured source record；
- 另一個獨立 extraction／hard-coded small representative scenario。

不需要為每批重造完整第二套 engine。

### Fresh evidence

- 最後一次 tracked change 後取得 required evidence。
- final report 必須識別被驗證的 exact HEAD／tree。
- verification 後若 tracked file 改變，受影響 evidence 對新 HEAD 失效。
- timeout／flaky failure 必須如實回報；rerun green 不會抹除先前 failure。
- Stage 3 required CI red 一律 STOP，不得 merge。

### Responsive / delegated UI

若 mobile／compact path materially 不同，至少覆蓋一個代表性 branch。shared component 有 fallback 時，驗證最終 rendered behavior，不只 assert 傳入 argument。

---

## 7. Stage 1 — Agent Implementation

正常 route：一個 Batch 對應一個 GitHub Issue，保存 Contract 與 Agent report。

Agent：

1. read-only reconcile repo／base／branch；
2. 從 Contract 指定 exact base 建／使用 feature branch；
3. 只修改 In Scope；
4. 執行 risk-matched minimum sufficient verification；
5. 建立 normal commit；
6. 確認 working tree clean；
7. push feature branch；
8. 確認 remote HEAD = local HEAD；
9. 在 Batch Issue 回報 full 40-character HEAD、actual changed files、核心 approach、fresh evidence、deviation／risk；
10. **STOP**。

Stage 1 預設不可：

- 建 PR；
- merge；
- 直接改 integration branch；
- force push；
- rebase／reset／amend 已審 history；
- 寫 upstream repository。

Codex-managed worktree／workspace 可以使用；workspace 位置本身不是 review evidence。Reviewer authority 是 exact remote branch／HEAD。

---

## 8. Review — Two Passes

### Pass 1 — Requirement / Scope

確認：

- Goal／Acceptance 是否達成；
- Owner decision／approved translation 是否遵守；
- actual changed files／commits 是否符合 scope；
- 是否偷帶額外 content source、level、feature 或 refactor；
- 是否有未授權 ID／schema／save format／canonical data change。

### Pass 2 — Correctness / Evidence

確認：

- 真實 call path／state transition；
- rule legality／dependent invalidation；
- persistence／round-trip（若適用）；
- public-behavior tests；
- final-HEAD fresh evidence；
- Agent claim 與 actual remote diff／CI 是否一致。

**Agent 自述不是獨立證據。**

### Verdict

只使用：

- **PASS**；
- **BLOCKED** — 有會影響本批 Acceptance／correctness／data safety 的 blocker；
- **OWNER DECISION REQUIRED** — authority 無法自行補足。

Review output 優先簡短：

```text
Verdict:
Approved / reviewed HEAD:
Blockers:
Non-blocking observations:
Evidence checked:
Next action:
```

---

## 9. Blocker Gate

通常屬 blocker：

- 直接違反 Owner 最新決定或 MVP requirement；
- 會允許非法角色，或阻擋合法角色；
- in-scope rule data／derived value 明確錯誤；
- 前置修改後仍留下非法 downstream state；
- auto-save／JSON round-trip 有資料損失；
- schema／ID／reference／canonical source 被未授權改動；
- 新翻譯語意未經 Owner 核准；
- required evidence 缺失或與 claim 相反；
- scope creep 導致無法可靠審查本批。

通常不是 blocker：

- PR body 排版偏好；
- 不影響 Acceptance 的命名／文件微調；
- 未來可以更漂亮的 architecture；
- 本批以外的 refactor idea；
- 已有足夠 evidence 時，單純想「再多跑一套」驗證。

問題來自 upstream／Codex baseline 不代表可以自動降級；看它是否影響本專案 requirement。

---

## 10. Stage 2 — Focused Correction

第一輪 Review 有 blocker，或 Owner manual acceptance 發現真 blocker時：

- Reviewer 在同一 Batch Issue 留 focused correction instruction；
- 只修 blocker，不夾帶 refactor／下一批；
- Agent 建 normal new correction commit，不 amend 已審 commit；
- 重跑受影響 fresh verification；
- push 同一 feature branch；
- 回報新 exact HEAD；
- **STOP**。

Stage 2 後 Reviewer focused verify correction 與新的重大問題。

若已完成兩輪完整 Review 後仍有結構性 blocker，停止 patch loop，重新評估方案／scope，必要時交 Owner 裁決。

---

## 11. Manual Acceptance

Batch Contract 必須預先標示 `REQUIRED` 或 `NOT REQUIRED`。

Manual acceptance 只驗自動測試難以證明的真實 UX，例如：

- 第一次完整 character-creation slice；
- direct step navigation 是否自然；
- mobile／responsive；
- 明顯的 copy／layout；
- import/export 使用體驗；
- destructive／migration flow。

不要把人工驗收變成無目的全站巡覽。

若 Owner manual smoke 發現 blocker，回 Stage 2；任何 tracked correction 都使舊 exact-HEAD acceptance 失效。

---

## 12. Stage 3 — Authorized Git / PR Closeout

Reviewer PASS 本身**不是** Agent 的 merge permission。

### Repository target

固定 GitHub write target：

`boyiad2110/ds-hero-builder`

若使用 `gh`，write command 明確指定 repository，不依賴 origin／upstream 猜測。

### Integration branch

- 以 current repository policy／Batch Contract 為準。
- 在 Owner 尚未建立 `develop` 等 integration policy 前，**預設 target 是 `main`**。
- Stage 1 不直接在 integration branch 實作。

### Authorization

Reviewer 在 actual remote evidence 上固定：

- approved full HEAD；
- approved base；
- merge method；
- expected PR head／target；
- required CI；
- manual acceptance gate；
- cleanup／Report／Stop。

若 `Manual acceptance: NOT REQUIRED`，可授權 normal Stage 3。

若 `Manual acceptance: REQUIRED`：

- **Stage 3A**：只 create／reconcile PR + exact-HEAD CI，然後 STOP；
- Owner 在 unchanged PR HEAD 完成 smoke；
- Reviewer 記錄 PASS；
- **Stage 3B**：才授權 merge + cleanup。

Agent 不得在 Stage 3 偷改 code。CI red／HEAD 變動／base 變動／unexpected files 時 STOP，回 Reviewer。

### Post-merge reviewer reconciliation

Agent merge report 後，Reviewer獨立確認至少：

- PR actual state = merged；
- merge result／method 正確；
- required CI 在 approved HEAD 成功；
- integration branch 指向預期結果；
- 沒有未授權 upstream write；
- feature branch cleanup 已完成，或只剩明確 non-blocking housekeeping。

確認後才宣告 Batch Closed。Agent 的「已 merge」文字本身不夠。

---

## 13. Git Safety

- 不寫 `VerisimLLC/*` upstream。
- 不在 remote state 不明時直接 push／merge；先 read-only reconcile。
- 不使用 force push、reset、rebase、amend 去「修好」已審 history。
- correction 使用 normal new commit。
- PR／base／head／SHA 不符時 STOP，不建立第二個 PR 來繞過問題。
- package installer／skill tooling 不應污染 repo；出現未知 generated repo files 時先 STOP，不用 `.gitignore` 掩蓋。
- 不因 Codex 使用 isolated worktree 就要求把 Owner local clone 當成 close gate；remote exact state 才是 integration authority。

---

## 14. Project-specific Failure Modes

Reviewer 特別防止：

1. **把 Codex data 當規則書的上位 authority**。
2. **因 draw-steel-data 有某內容就偷偷納入 MVP**。
3. **只完成 UI，沒有 character-legality／derived-rule tests**。
4. **修改 ancestry／class 後，下游選項仍殘留成非法角色**。
5. **只測 export，不測 JSON import round-trip**。
6. **auto-save 只有寫入，沒有 reload／corruption path evidence**。
7. **Agent 自己發明中文譯名或把相同英文跨 context 強制統一**。
8. **為了「架構漂亮」在小 batch 順便重構 rule/data layer**。
9. **verification 跑在 final tracked change 之前**。
10. **Stage 3 收尾後順手開始下一批**。

---

## 15. Efficiency

- 不重問 Owner 已明確回答的問題。
- Issue／handoff 寫本批 delta，不重貼完整專案歷史。
- Reviewer 能處理的 mechanical work 不上拋 Owner。
- Agent 不在正常 Stage 1 中間反覆問「要不要繼續」；除非出現真正 blocker／authority mismatch／verification failure／repo anomaly。
- 外部等待不是擴 scope 的空檔。
- Acceptance 達成後立即收斂；沒有 blocker 就 closeout + STOP。
- 不為尚未存在的未來需求預先建立 migration、generic rules engine、sync platform 或大型 localization framework。

---

## Self-Check

- [ ] 已讀 Owner 最新決定與 current repo state。
- [ ] 已確認本批 rule authority；Codex data／Lua 沒有凌駕官方規則書。
- [ ] 已固定唯一 Batch、scope、Acceptance、Risk、manual gate、Stop。
- [ ] Translation 若需要 Owner，只有真正 semantic decisions 被送核。
- [ ] Agent task 不要求讀私人 Sheet；implementation authority 已 freeze。
- [ ] Review 使用 exact remote diff／HEAD／tests／CI，而不是只信 Agent report。
- [ ] Rules／state／persistence 的 tests 對應 public behavior。
- [ ] Final evidence 在最後 tracked change 後取得。
- [ ] Stage 3 只有 Reviewer 對 exact approved state 明確授權後才執行。
- [ ] 沒有把 Non-blocking Observation 升成 blocker。
- [ ] Batch Closed 後 STOP；下一批重新固定 Contract。
