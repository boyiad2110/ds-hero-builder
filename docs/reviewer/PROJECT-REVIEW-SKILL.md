---
name: ds-hero-builder-reviewer
description: Use when planning, scoping, reviewing, handing off, or closing implementation, Draw Steel rules-data, localization, character-validation, persistence, import/export, testing, Git, or release batches in boyiad2110/ds-hero-builder.
---

# DS Hero Builder Reviewer

## Purpose

This document defines the planning, Agent handoff, review, and closeout workflow for `ds-hero-builder`.

Project roles are fixed:

- **Owner (Marc) = final decision-maker**: decides product requirements, Draw Steel rules disputes, final translation wording, and UX acceptance.
- **Reviewer (ChatGPT) = planner + reviewer**: defines batches, freezes implementation authority, reviews PR evidence, decides PASS / BLOCKED / OWNER DECISION REQUIRED, and authorizes merge/closeout.
- **Agent (ChatGPT Codex) = implementer**: works in the Owner's local repository, modifies code/data/tests only within the authorized Batch, verifies locally, pushes the authorized feature branch, and opens/updates the PR for review.

Under normal operation, repository mutations to product code or data are performed by the Agent. The Reviewer should modify repository files directly only when the Owner explicitly asks for an exception, such as maintaining reviewer/process documentation.

> Principle: fix authority and one coherent Batch first. The Agent implements locally and publishes a reviewable PR; the Reviewer independently reviews the exact PR HEAD before merge is authorized.

---

## 1. Load Authority

Resolve authority in this order:

1. **The Owner's latest explicit decision in the current conversation or Batch.**
2. Approved repository requirements, decisions, or ADRs.
3. Official in-scope rules:
   - Draw Steel Heroes **1.01b**
   - Summoner **v1.0b**
   - Beastheart **v1.0**
4. `VerisimLLC/draw-steel-data` for structured data, stable identities, and relationships.
5. `VerisimLLC/draw-steel-codex` for implementation patterns and character-builder behavior.
6. Reviewer or Agent inference.

Conflict rules:

- Official rules beat Codex data/Lua unless the Owner explicitly rules otherwise.
- Upstream content is not automatically in MVP scope merely because it exists.
- If required authority is unavailable or contradictory, stop instead of guessing.
- Project-status summaries never override the actual repository state.

---

## 2. Current Product Guardrails

Until the Owner changes them:

- Web app; no account/login.
- Level 1 character creation only.
- Content: Heroes 1.01b + Summoner v1.0b + Beastheart v1.0.
- Traditional Chinese (`zh-TW`) is primary.
- Creation steps remain visible; this is not a strict previous/next wizard.
- Players may revisit available steps.
- Illegal options should be proactively unavailable/disabled where practical.
- Earlier changes must not silently preserve illegal downstream choices.
- Browser-local auto-save is required.
- MVP export: HTML + JSON; JSON must restore an editable character.
- No PDF export.
- No Codex character import.
- Preferred deployment: Cloudflare Pages; GitHub Pages fallback.

Formal requirements live in `docs/PRODUCT-REQUIREMENTS.md`.

---

## 3. Fix One Batch Contract

Before implementation begins, define one independently verifiable Batch.

The Contract must include:

- **Goal**
- **Authority**
- **Base**: integration branch + exact expected base SHA
- **Local workspace**
- **Feature branch**
- **In scope**
- **Out of scope**
- **Acceptance**
- **Risk Level**: A / B / C
- **Manual acceptance**: REQUIRED / NOT REQUIRED
- **Git permission**
- **Verification**
- **Report**
- **Stop**

Do not begin implementation if Goal, scope, Acceptance, or Stop is missing.

### Default local workspace

The Owner's canonical local repository path is:

`C:\TRPG\Draw Steel site\ds-hero-builder`

The Agent must use this local clone as its implementation workspace unless the Owner explicitly changes the path for a Batch.

### Batch sizing

- Prefer one user-understandable feature, rules, data, or translation slice.
- Do not split or merge work mechanically by LOC/file count.
- Do not include opportunistic refactors.
- Record useful but unnecessary work as deferred observations.

---

## 4. Translation Workflow

Translation follows: **Reviewer suggests; Owner finalizes; Agent implements the frozen result.**

When Owner finalization is required, prefer a native Google Sheet with stable identity, exact English, Reviewer suggestion, Owner Final zh-TW, status, source/reference, and notes.

The Agent must not invent new Chinese game terms, names, or prose. Mechanical punctuation/capitalization/grammar variants that do not change meaning may be resolved by the Reviewer. Real semantic choices go to the Owner.

The mutable Sheet is a working surface, not Agent implementation authority. Freeze approved values into the Batch Issue or another explicit immutable packet before implementation.

Translation must not alter IDs, numeric mechanics, formulas, references, choice legality, content availability, or save-schema semantics.

---

## 5. Risk Levels

### Level A — Low risk

Typical: documentation, approved static copy, display-only changes.

Minimum evidence:

- actual diff/changed files;
- closest targeted check/test if one exists;
- formatting/whitespace check;
- lint/typecheck when source code changes.

Manual acceptance is usually not required.

### Level B — Behavior / Rules risk

Typical: UI behavior, navigation/unlock logic, state invalidation, legality, derived rules, lookup/filtering, localization fallback, shared UI wiring.

Minimum evidence:

- targeted public-behavior tests;
- lint/typecheck according to repo tooling;
- relevant test suite;
- evidence of no out-of-scope side effect;
- rules expectations traceable to independent authority.

For a new creation flow or major interaction that automation cannot reliably prove, use `Manual acceptance: REQUIRED`.

### Level C — Persistence / Schema / Data-integrity risk

Typical: localStorage, save/reload, JSON import/export schema, migrations, canonical data generation/sync, large identity/data changes, data-loss risk.

Minimum evidence:

- all applicable Level B evidence;
- round-trip/reload/compatibility tests;
- data-integrity evidence;
- malformed/error-path coverage;
- representative smoke testing;
- Owner manual acceptance for data-loss/migration-sensitive work.

Classify by actual risk; Draw Steel rules work is not automatically Level C.

---

## 6. Verification Rules

### Read current tooling first

Inspect `package.json`, `packageManager`, lockfile, CI, and nearby tests. Use the repository's actual package manager and scripts.

### Public behavior over internals

Prefer tests that prove what the player can select, whether a character is legal, whether downstream choices invalidate correctly, whether derived values are correct, and whether save/import/export behavior round-trips safely.

### Rules evidence must not be self-referential

Expected rules/data results should come from independent authority such as a rulebook fixture, explicit expected value, structured source record, independent extraction, or small hard-coded scenario—not only the production helper under test.

### Fresh evidence

- Required evidence must be obtained after the final tracked change.
- Final reports identify the exact verified HEAD.
- Any tracked change after verification makes affected evidence stale.
- Report flaky/timeouts honestly.
- A red required CI check means STOP; do not merge.

### Responsive/delegated UI

If compact/mobile uses a materially different path, cover at least one representative branch or require targeted manual acceptance.

---

## 7. Stage 1 — Local Agent Implementation + PR Handoff

Normal route: one Batch corresponds to one GitHub Issue and exactly one PR.

### 7.1 Local synchronization gate

Before editing, the Agent must work from the Owner's local repository and:

1. inspect the local working tree, current branch, configured remote, local `main`, and `origin/main`;
2. fetch from `origin`;
3. verify there are no unexpected local changes;
4. synchronize local `main` only by a safe straightforward fast-forward when needed;
5. confirm synchronized local `main` matches the Batch's exact authorized base;
6. create/use the authorized feature branch locally from that base.

If local work would be overwritten, the branches have diverged non-trivially, the remote/base does not match, or synchronization would require reset/rebase/force, **STOP and report**. Do not discard or rewrite work to make the state fit the Contract.

### 7.2 Implementation

The Agent then:

1. modifies only In Scope work in the local clone;
2. runs risk-matched fresh verification locally;
3. self-reviews the actual diff for scope creep;
4. creates normal commit(s);
5. confirms the local working tree is clean;
6. pushes only the authorized feature branch to `boyiad2110/ds-hero-builder`;
7. confirms remote feature-branch HEAD equals the verified local HEAD;
8. opens or updates exactly one PR from the feature branch to the integration branch;
9. links/references the Batch Issue and reports exact HEAD, changed files, approach, fresh evidence, deviations/risks, and clean-tree status;
10. **STOPS for Reviewer review**.

The Agent may open/update the PR, but may not merge merely because implementation is complete or CI is green.

Implementation should not be performed by directly editing product files through GitHub APIs/web UI. GitHub is the shared remote/review surface; the Owner's local clone is the implementation workspace.

---

## 8. Review — Two Passes on the PR

The Reviewer reviews the actual PR, not only the Agent report.

### Pass 1 — Requirement / Scope

Check:

- Goal and Acceptance;
- Owner decisions and frozen translations;
- actual changed files/commits;
- unauthorized features/content/refactors;
- unauthorized IDs/schema/save/canonical-data changes.

### Pass 2 — Correctness / Evidence

Check:

- actual call paths and state transitions;
- rules legality/invalidation where relevant;
- persistence/round-trip behavior where relevant;
- public-behavior tests;
- PR CI/checks and exact HEAD;
- whether Agent claims match actual remote evidence.

Agent self-reporting is not independent evidence.

Use only these verdicts:

- **PASS**
- **BLOCKED**
- **OWNER DECISION REQUIRED**

Compact review format:

```text
Verdict:
Reviewed HEAD:
Blockers:
Non-blocking observations:
Evidence checked:
Next action:
```

---

## 9. Blocker Gate

Typical blockers:

- direct violation of Owner/product authority;
- legal character blocked or illegal character allowed;
- wrong in-scope rule data/derived value;
- illegal downstream state retained;
- data loss or broken JSON round-trip;
- unauthorized schema/ID/canonical-source changes;
- unapproved translation semantics;
- missing/contradictory required evidence;
- scope creep large enough to make review unreliable.

Usually not blockers:

- PR-body formatting preferences;
- naming/documentation polish unrelated to Acceptance;
- architecture that could be prettier later;
- out-of-scope refactor ideas;
- redundant extra verification when sufficient evidence already exists.

---

## 10. Stage 2 — Focused Correction on the Same PR

If review or Owner manual acceptance finds a blocker:

- Reviewer posts focused correction instructions in the same Batch/PR context.
- Agent returns to the same local feature branch.
- Fix only the blocker; no opportunistic refactor/next-batch work.
- Create a normal new correction commit; do not amend reviewed history.
- Re-run affected fresh verification locally.
- Push the same feature branch so the existing PR updates.
- Confirm remote HEAD equals local verified HEAD.
- Report the new exact HEAD and evidence.
- **STOP for re-review**.

Do not create a second workaround PR.

If two full review rounds still leave a structural blocker, stop the patch loop and re-evaluate scope/approach or escalate a real decision to the Owner.

---

## 11. Manual Acceptance

Every Batch predeclares `REQUIRED` or `NOT REQUIRED`.

Use manual acceptance only for real UX automation cannot reliably prove, such as first complete creation flow, direct step navigation clarity, responsive/mobile behavior, visible copy/layout, import/export UX, or destructive/migration flows.

Manual acceptance must use the unchanged reviewed PR HEAD. If tracked code changes afterward, prior exact-HEAD acceptance is stale.

If Owner acceptance finds a blocker, return to Stage 2 on the same PR.

---

## 12. Stage 3 — Merge / Closeout Authorization

By Stage 3, the PR already exists and has been reviewed.

Reviewer PASS by itself is **not** permission for the Agent to merge. The Reviewer must explicitly authorize merge against an exact approved state.

### Repository target

Fixed write target:

`boyiad2110/ds-hero-builder`

Default integration branch is `main` unless the Owner establishes another policy.

### Authorization must bind

- approved full HEAD;
- approved base/integration branch;
- exact PR;
- merge method;
- required CI/checks;
- manual-acceptance gate;
- cleanup/report/stop requirements.

If manual acceptance is required, merge authorization occurs only after Owner acceptance of the unchanged approved PR HEAD.

The Agent must not modify code during Stage 3. If CI is red, PR HEAD/base changed, conflicts appear, or unexpected files/state appear, STOP and return to Reviewer.

### Post-merge reconciliation

After merge, Reviewer independently verifies:

- PR is actually merged;
- merge method/result is correct;
- required CI passed on the approved HEAD;
- integration branch points to the expected result;
- no unauthorized upstream write occurred;
- feature-branch cleanup is complete or only non-blocking housekeeping remains.

Only then declare the Batch Closed.

---

## 13. Git Safety

- Never write to `VerisimLLC/*` upstream repositories.
- Agent implementation is local-first in `C:\TRPG\Draw Steel site\ds-hero-builder` unless Owner explicitly changes the path.
- Fetch/reconcile before implementation; do not assume local and remote already match.
- Never force-push, reset, rebase, or amend reviewed history to repair workflow mismatches.
- Never discard unexpected local work.
- Corrections use normal new commits on the same authorized feature branch/PR.
- If PR/base/head/SHA does not match approved state, STOP; do not create a second PR to work around it.
- Package installers/skills/tooling must not pollute the repository.
- GitHub remote state is the shared integration/review authority; the local clone is the implementation workspace.

---

## 14. Project-specific Failure Modes

Explicitly guard against:

1. Treating Codex data as higher authority than official rules.
2. Adding content merely because upstream contains it.
3. Finishing UI without legality/derived-rule evidence.
4. Leaving illegal downstream choices after earlier choices change.
5. Testing JSON export without import round-trip.
6. Implementing auto-save without reload/corruption evidence.
7. Letting Agent invent Chinese translations or globally unify context-sensitive wording.
8. Hiding rules/data refactors inside a small Batch.
9. Running verification before the final tracked change.
10. Implementing remotely instead of in the Owner's local clone.
11. Letting Agent self-merge after opening a PR.
12. Starting the next Batch before the current Batch is closed.

---

## 15. Efficiency

- Do not ask Owner to repeat settled decisions.
- Keep Batch Issues focused on the implementation delta; standing workflow belongs in this document/template, not repeated as Batch work.
- Mechanical Reviewer work should not be pushed back to Owner.
- Agent should not repeatedly ask whether to continue during an authorized stage.
- Once Acceptance is achieved and no blocker remains, converge on review/closeout.
- Do not pre-build migrations, generic rules engines, sync platforms, or large localization frameworks without a real requirement.

---

## Self-Check

- [ ] Read latest Owner decisions and current repository state.
- [ ] Fixed one Batch with Goal, Base, local workspace, feature branch, scope, Acceptance, Risk, manual gate, Git permission, Report, and Stop.
- [ ] Agent starts from the Owner's local clone and safely reconciles it with `origin/main` before editing.
- [ ] Agent implements/tests/commits locally, then pushes the authorized feature branch.
- [ ] Agent opens/updates exactly one PR and stops for review.
- [ ] Review uses exact PR diff / HEAD / tests / CI rather than trusting Agent reporting alone.
- [ ] Rules/state/persistence evidence corresponds to public behavior and independent authority.
- [ ] Final evidence is fresh for the reviewed HEAD.
- [ ] Agent never self-merges; merge requires explicit Reviewer authorization.
- [ ] Non-blocking observations are not promoted into blockers.
- [ ] After Batch Closed, STOP. The next Batch requires a new Contract.
