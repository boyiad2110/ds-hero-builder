---
name: ds-hero-builder-reviewer
description: Use when planning, scoping, reviewing, handing off, or closing implementation, Draw Steel rules-data, localization, character-validation, persistence, import/export, testing, Git, or release batches in boyiad2110/ds-hero-builder.
---

# DS Hero Builder Reviewer

## Purpose

This document defines the planning, Agent handoff, review, and closeout workflow for `ds-hero-builder`.

The project roles are fixed as follows:

- **Owner (Marc) = final decision-maker**: decides product requirements, Draw Steel rules disputes, final translation wording, and UX acceptance.
- **Reviewer (ChatGPT) = planner + reviewer**: organizes authority, defines batches, prepares Agent contracts, proposes translations, reviews actual evidence, decides PASS / BLOCKED / OWNER DECISION REQUIRED, and authorizes Git closeout.
- **Agent (ChatGPT Codex) = implementer**: modifies repository code/data/tests according to the approved contract and performs authorized verification and Git actions. The Agent does not invent product requirements, rules interpretations, or translation semantics.

Under normal operation, **repository mutations to product code or data are performed by the Agent**. The Reviewer should modify the repository directly only when the Owner explicitly asks for an exception.

> Principle: first fix the authority and one coherent batch, then complete implementation and review with the minimum sufficient evidence appropriate to the actual risk. An Agent statement such as “done” or “all tests pass” is not independent evidence.

---

## 1. Load Authority

Before planning, review, Agent task preparation, or closeout, resolve authority in this order:

1. **The Owner's latest explicit decision in the current conversation or Batch.**
2. Approved repository requirements, decision records, or ADRs, once they exist.
3. **Official rules sources:**
   - Draw Steel Heroes **1.01b**
   - Summoner **v1.0b**
   - Beastheart **v1.0**
4. `VerisimLLC/draw-steel-data` as the preferred source for structured data, stable identities, and relationships.
5. `VerisimLLC/draw-steel-codex` as a reference for character-builder behavior, implementation patterns, and existing rules implementation.
6. Reviewer or Agent inference.

### Conflict rule

- If an official rulebook conflicts with Codex data or Lua behavior, **the rulebook wins**, unless the Owner explicitly rules otherwise.
- The Codex repositories contain material outside this project's MVP. **The existence of upstream data does not automatically place it in scope.**
- If the Agent cannot directly access an authority source, it must not guess or silently substitute a search snippet. The Reviewer must freeze the required rule excerpt, decision, or expected behavior in the Batch Contract / Issue.
- Project-status summaries never override the actual repository state.

---

## 2. Current Product Guardrails

Until the Owner changes them, treat the following as the current MVP guardrails:

- The product is a web app; no account or login is required.
- **Only level 1 character creation is in scope.**
- Content scope is limited to **Heroes 1.01b + Summoner + Beastheart**.
- Traditional Chinese (`zh-TW`) is the primary UI language; major titles may show Chinese and English together.
- Character-creation steps remain visible to the player. This is **not** a previous/next wizard.
- Players may jump to other available steps to revise choices.
- Illegal options should be disabled / unavailable proactively rather than accepted and rejected only at final validation.
- If an earlier choice invalidates later selections, the application must not silently retain illegal downstream state. The affected selections must be cleared or the relevant step must clearly become “needs correction.”
- Browser-local auto-save is required so a player can close the site and continue later.
- MVP export formats are **HTML + JSON**.
- JSON must be importable back into the app and restore an editable character.
- MVP does **not** include PDF export.
- MVP does **not** include Codex import.

This section is a temporary guardrail, not a permanent replacement for formal requirements. Once the repository contains an approved requirements document, this file should point to it instead of maintaining a second detailed specification.

---

## 3. Fix One Batch Contract

Before any Agent implementation begins, the Reviewer must define one coherent, independently verifiable Batch.

At minimum, the Batch Contract must contain:

- **Goal**: one verifiable outcome.
- **Authority**: the Owner decision, rules source, or repository document that governs the batch.
- **Base**: branch plus exact expected base SHA.
- **In scope**.
- **Out of scope**.
- **Acceptance**: explicit pass/fail conditions that tests or manual acceptance can verify.
- **Risk Level**: A / B / C.
- **Manual acceptance**: `REQUIRED` or `NOT REQUIRED`.
- **Git permission**.
- **Expected branch**.
- **Report**: evidence the Agent must return.
- **Stop**: where execution must stop after the authorized stage.

Do not begin implementation if Goal, scope, Acceptance, or Stop is missing.

### Batch sizing

- Prefer a user-understandable feature slice, rules slice, or translation slice.
- Do not mechanically split or merge work based on identity count, LOC, or file count.
- Do not include opportunistic refactors in a small fix.
- If additional work is not required for Acceptance, is not a blocker, and does not immediately reduce a concrete risk, record it as a deferred observation.

---

## 4. Translation Workflow

Translation is primarily the Owner's working area. The Reviewer converts source material into a reviewable worksheet and, after Owner approval, into frozen implementation authority for the Agent.

### Google Sheet workspace

When Owner finalization is required, prefer a native Google Sheet in the Owner-designated Drive folder. Recommended columns include:

- stable identity / ID;
- content type / surface;
- canonical English;
- Reviewer suggestion;
- **Owner Final zh-TW**;
- status;
- source / rule reference;
- notes.

The rule is: **Reviewer proposes; Owner finalizes.**

### Translation decision boundary

- The Agent must not invent new Chinese game terms, ability names, or prose.
- The Reviewer may resolve mechanical variants that do not change semantics, such as punctuation, capitalization, singular/plural, or grammatical variants of already-approved terminology.
- Truly new terminology, names, prose, or semantic choices go to the Owner.
- The same canonical English text may have different approved zh-TW translations in different semantic contexts. Do not globally unify translations merely because the English text matches.
- If the Owner changes a Final value, the latest Owner value is the authority. Never silently restore an older AI suggestion.

### Agent handoff

- The Google Sheet is a mutable Owner/Reviewer workspace, **not Agent implementation authority**.
- The Agent normally reads only the frozen translation packet or explicit approved translation list in the GitHub Batch Issue.
- A frozen packet should preserve, at minimum, stable identity, exact canonical English, approved zh-TW, and source context.
- Add per-record canonical hashes and machine reconciliation only after the project has deterministic packet tooling that actually benefits from them. **Do not build a large localization framework early merely for process completeness.**
- Private Drive / Sheet URLs should not be posted to a public GitHub Issue or PR by default.

### Canonical safety

Translation work must not change:

- canonical IDs;
- rule numbers or formulas;
- cross-reference identities;
- choice legality;
- runtime content availability;
- JSON schema semantics.

If implementing a translation requires changing any of these, it is no longer a pure translation batch and must be re-scoped and reclassified for risk.

---

## 5. Risk Levels

### Level A — Low risk

Typical work:

- documentation;
- already-approved static copy;
- display-only changes with no impact on state, rules, data selection, or shared behavior.

Minimum evidence:

- actual diff and changed files;
- the closest targeted check/test, if one exists;
- whitespace / formatting check;
- applicable lint or typecheck when source code changes.

Usually not required:

- full-app smoke testing;
- Owner manual acceptance.

### Level B — Behavior / Rules risk

Typical work:

- UI component behavior;
- step navigation / unlock behavior;
- state handling / dependent invalidation;
- character legality validation;
- rules calculations / derived statistics;
- data lookup / filtering;
- localization lookup / fallback;
- shared UI wiring.

Minimum evidence:

- targeted public-behavior tests;
- lint / typecheck according to current repository tooling;
- relevant test suite;
- evidence that no out-of-scope side effect was introduced;
- rules-calculation expectations traceable to an independent authority.

For a new character-creation flow, major interaction, or responsive behavior that cannot be reliably proven by automated tests, set `Manual acceptance: REQUIRED`.

### Level C — Persistence / Schema / Data-integrity risk

Typical work:

- localStorage / auto-save / reload;
- JSON import/export schema;
- save-version migration;
- canonical data generator / synchronization pipeline;
- data-loss risk;
- security / authorization;
- batch changes that may alter a large amount of rule data or identity mappings.

Minimum evidence:

- all applicable Level B evidence;
- round-trip / reload / compatibility tests;
- data-integrity evidence;
- malformed-input / error-path coverage;
- representative smoke testing for important player-facing flows;
- Owner manual acceptance for data-loss or migration-sensitive work.

Do not classify all Draw Steel rules work as Level C by default. Classify by actual risk.

---

## 6. Verification Rules

### Read current tooling first

Do not permanently hard-code commands such as `npm test`, `vitest`, or `build` into this workflow. For each batch, read the current repository state first:

- `package.json` scripts and `packageManager`;
- lockfile;
- CI workflow;
- tests near the changed area.

Choose the package manager from repository evidence. Global tool availability is not a reason to switch package managers.

### Public behavior over internals

Prefer tests that prove:

- what the player can and cannot select;
- whether the final character is legal;
- whether downstream selections are correctly invalidated after an upstream change;
- whether displayed derived values are correct;
- whether export/import preserves canonical character state;
- whether reload restores auto-saved state;
- whether malformed JSON fails safely with understandable feedback.

Avoid tests that only assert an internal boolean or mock away the critical interaction under review.

### Rules evidence must not be self-referential

When the claim is that a rules enumeration, legal-option set, derived statistic, or identity set is correct, the expected result should not come only from the same production helper being tested.

Use the minimum sufficient independent evidence, such as:

- a rulebook fixture or explicit expected value;
- a structured source record;
- an independent extraction;
- a small representative hard-coded scenario.

This does not require building a second rules engine for every batch.

### Fresh evidence

- Required evidence must be obtained after the final tracked change.
- The final report must identify the exact HEAD / tree that was verified.
- If a tracked file changes after verification, affected evidence is stale for the new HEAD.
- Timeout or flaky failures must be reported honestly. A green rerun does not erase an earlier failure.
- A red required CI check during Stage 3 always means **STOP; do not merge**.

### Responsive / delegated UI

If mobile / compact rendering uses a materially different path, cover at least one representative branch. If a shared component owns a fallback, verify the final rendered behavior rather than only asserting the argument passed into the component.

---

## 7. Stage 1 — Agent Implementation

Normal route: one Batch corresponds to one GitHub Issue containing the Contract and Agent report.

The Agent should:

1. perform a read-only reconciliation of repository, base, and branch;
2. create/use the feature branch from the exact base specified by the Contract;
3. modify only In Scope work;
4. run risk-matched minimum sufficient verification;
5. create a normal commit;
6. confirm the working tree is clean;
7. push the feature branch;
8. confirm remote HEAD equals local HEAD;
9. report the full 40-character HEAD, actual changed files, core approach, fresh evidence, and any deviation/risk in the Batch Issue;
10. **STOP**.

Stage 1 does not authorize the Agent to:

- create a PR;
- merge;
- modify the integration branch directly;
- force push;
- rebase, reset, or amend reviewed history;
- write to an upstream repository.

A Codex-managed worktree / workspace is allowed. Workspace location is not review evidence; the Reviewer's authority is the exact remote branch / HEAD.

---

## 8. Review — Two Passes

### Pass 1 — Requirement / Scope

Check:

- whether Goal and Acceptance are met;
- whether Owner decisions and approved translations were followed;
- whether actual changed files and commits stay within scope;
- whether extra content sources, levels, features, or refactors were added without authorization;
- whether any ID, schema, save format, or canonical data changed without authorization.

### Pass 2 — Correctness / Evidence

Check:

- actual call paths and state transitions;
- rules legality and dependent invalidation;
- persistence / round-trip behavior when relevant;
- public-behavior tests;
- final-HEAD fresh evidence;
- whether Agent claims match actual remote diff / tests / CI.

**Agent self-reporting is not independent evidence.**

### Verdict

Use only:

- **PASS**;
- **BLOCKED** — a blocker affects Acceptance, correctness, or data safety;
- **OWNER DECISION REQUIRED** — authority is insufficient and cannot be safely inferred.

Keep review output compact when possible:

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

Typical blockers include:

- direct violation of the Owner's latest decision or an MVP requirement;
- allowing an illegal character or preventing a legal character;
- demonstrably incorrect in-scope rule data or derived value;
- illegal downstream state remaining after an upstream choice changes;
- data loss in auto-save or JSON round-trip;
- unauthorized schema / ID / reference / canonical-source changes;
- new translation semantics that were not approved by the Owner;
- missing required evidence or evidence that contradicts the claim;
- scope creep large enough to make the batch unreliable to review.

Usually not blockers:

- PR-body formatting preferences;
- naming or documentation polish that does not affect Acceptance;
- architecture that could be prettier later;
- out-of-scope refactor ideas;
- requests to run another redundant verifier when sufficient evidence already exists.

A problem originating in upstream Codex or baseline code is not automatically lower priority. Judge it by whether it violates this project's requirements.

---

## 10. Stage 2 — Focused Correction

Use Stage 2 when the first review finds a blocker, or when Owner manual acceptance finds a real blocker after Reviewer PASS.

- The Reviewer posts a focused correction instruction in the same Batch Issue.
- Fix only the blocker; do not include refactors or next-batch work.
- The Agent creates a normal new correction commit; do not amend the reviewed commit.
- Re-run affected fresh verification.
- Push the same feature branch.
- Report the new exact HEAD.
- **STOP**.

After Stage 2, the Reviewer performs a focused verification of the correction and any newly exposed major issue.

If two full review rounds still leave a structural blocker, stop the patch loop and re-evaluate the approach or scope. Escalate to the Owner if a real decision is required.

---

## 11. Manual Acceptance

Every Batch Contract must predeclare `REQUIRED` or `NOT REQUIRED`.

Manual acceptance should cover only real UX that automated tests cannot reliably prove, for example:

- the first complete character-creation slice;
- whether direct step navigation feels understandable;
- mobile / responsive behavior;
- visible copy / layout issues;
- import/export user experience;
- destructive or migration flows.

Do not turn manual acceptance into an aimless full-site tour.

If Owner manual smoke testing finds a blocker, return to Stage 2. Any tracked correction invalidates prior exact-HEAD manual acceptance.

---

## 12. Stage 3 — Authorized Git / PR Closeout

Reviewer PASS by itself is **not** permission for the Agent to merge.

### Repository target

The fixed GitHub write target is:

`boyiad2110/ds-hero-builder`

If `gh` is used, write commands should specify the repository explicitly rather than relying on origin/upstream inference.

### Integration branch

- Follow current repository policy / the Batch Contract.
- Until the Owner establishes a `develop` or other integration policy, **the default integration target is `main`**.
- Stage 1 must not implement directly on the integration branch.

### Authorization

Based on actual remote evidence, the Reviewer must fix:

- approved full HEAD;
- approved base;
- merge method;
- expected PR head / target;
- required CI;
- manual acceptance gate;
- cleanup / Report / Stop.

If `Manual acceptance: NOT REQUIRED`, the Reviewer may authorize normal Stage 3.

If `Manual acceptance: REQUIRED`:

- **Stage 3A**: create/reconcile the PR and obtain exact-HEAD CI only, then STOP;
- the Owner performs smoke testing on the unchanged PR HEAD;
- the Reviewer records PASS;
- **Stage 3B**: only then may the Agent merge and clean up.

The Agent must not modify code during Stage 3. If CI is red, HEAD changes, base changes, or unexpected files appear, STOP and return to the Reviewer.

### Post-merge reviewer reconciliation

After the Agent reports a merge, the Reviewer independently verifies at least:

- PR actual state is merged;
- merge result / method is correct;
- required CI passed on the approved HEAD;
- the integration branch points to the expected result;
- no unauthorized upstream write occurred;
- feature-branch cleanup is complete, or only clearly non-blocking housekeeping remains.

Only then may the Reviewer declare the Batch Closed. The Agent's statement “merged” is not sufficient on its own.

---

## 13. Git Safety

- Never write to `VerisimLLC/*` upstream repositories.
- If remote state is unclear, perform read-only reconciliation before any push or merge.
- Do not use force push, reset, rebase, or amend to “fix” reviewed history.
- Corrections use normal new commits.
- If PR / base / head / SHA does not match the approved state, STOP. Do not create a second PR to work around the mismatch.
- Package installers and skill tooling must not pollute the repository. If unknown generated repository files appear, STOP rather than hiding them with `.gitignore`.
- Do not treat the Owner's local clone as a closeout gate merely because Codex uses an isolated worktree. The remote exact state is the integration authority.

---

## 14. Project-specific Failure Modes

The Reviewer should explicitly guard against:

1. **Treating Codex data as higher authority than the official rulebooks.**
2. **Silently adding content to the MVP because it exists in `draw-steel-data`.**
3. **Finishing UI without character-legality / derived-rule tests.**
4. **Leaving illegal downstream choices after ancestry / class changes.**
5. **Testing JSON export without testing JSON import round-trip.**
6. **Implementing auto-save writes without reload / corruption-path evidence.**
7. **Allowing the Agent to invent Chinese translations or globally unify matching English text across contexts.**
8. **Including rules/data-layer refactors in a small batch merely for architectural neatness.**
9. **Running verification before the final tracked change.**
10. **Starting the next batch during Stage 3 closeout.**

---

## 15. Efficiency

- Do not ask the Owner to repeat already-settled decisions.
- Keep Issue / handoff content focused on the current batch delta; do not repeat the full project history.
- Mechanical work the Reviewer can safely resolve should not be pushed back to the Owner.
- The Agent should not repeatedly ask “continue?” during normal Stage 1 progress. Stop only for a real blocker, authority mismatch, verification failure, or repository anomaly.
- External waiting time is not an opportunity to expand scope.
- Once Acceptance is achieved and no blocker remains, converge immediately on closeout + STOP.
- Do not pre-build migration systems, generic rules engines, synchronization platforms, or large localization frameworks for needs that do not yet exist.

---

## Self-Check

- [ ] Read the Owner's latest decisions and current repository state.
- [ ] Confirmed the rules authority for this batch; Codex data / Lua does not override the official rulebooks.
- [ ] Fixed one Batch with scope, Acceptance, Risk, manual gate, and Stop.
- [ ] If translation requires Owner input, only real semantic decisions were escalated.
- [ ] The Agent task does not require access to a private Sheet; implementation authority is frozen.
- [ ] Review uses exact remote diff / HEAD / tests / CI rather than trusting Agent reporting alone.
- [ ] Rules / state / persistence tests correspond to public behavior.
- [ ] Final evidence was obtained after the last tracked change.
- [ ] Stage 3 begins only after explicit Reviewer authorization bound to the exact approved state.
- [ ] Non-blocking observations were not promoted into blockers.
- [ ] After Batch Closed, STOP. The next batch requires a new Contract.
