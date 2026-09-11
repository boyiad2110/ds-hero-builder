# DS Hero Builder — Agent Instructions

This file applies to the entire repository unless a deeper `AGENTS.md` or `AGENTS.override.md` provides more specific instructions.

## Project Roles

- **Owner (Marc)**: final authority for product requirements, Draw Steel rules disputes, translation wording, and UX acceptance.
- **Reviewer (ChatGPT)**: planner and reviewer. Defines batch scope, prepares Agent tasks, reviews evidence, and decides whether work is approved or needs correction / Owner input.
- **Agent (Codex)**: implementer. Modify code/data/tests only within the authorized task. Do not invent product requirements, rules interpretations, or translation decisions.

`docs/reviewer/PROJECT-REVIEW-SKILL.md` is **Reviewer-facing workflow documentation**, not a standing Agent workflow. Do not assume the Reviewer role from that file. Your implementation authority comes from the current task / Batch Contract plus this `AGENTS.md` and repository requirements.

## Product Scope — Current MVP

Unless the Owner explicitly changes these decisions:

- Build a **web-based Draw Steel character creator**.
- No account/login is required.
- Support **level 1 character creation only**.
- Content scope is limited to:
  - Draw Steel Heroes **1.01b**
  - Summoner **v1.0b**
  - Beastheart **v1.0**
- Traditional Chinese (`zh-TW`) is the primary UI language.
- Major titles/headings may show Chinese + English together.
- Character-creation steps remain visible to the player; this is **not** a previous/next wizard.
- Players may jump between available steps to revise choices.
- Illegal options should be disabled / unavailable proactively rather than accepted and rejected only at the end.
- If changing an earlier choice invalidates later choices, do not silently keep illegal downstream state. Clear it or mark the affected step as requiring correction.
- Auto-save locally in the browser so a player can close the site and continue later.
- Export formats for MVP: **HTML + JSON**.
- JSON must be importable back into the app and restore an editable character.
- MVP does **not** include PDF export.
- MVP does **not** include Codex import.

Do not add higher-level content, unrelated supplements, or extra features merely because upstream data contains them.

## Rules and Data Authority

When deciding what the game actually allows, use this priority:

1. Latest explicit Owner decision for the task.
2. Approved repository requirements / decisions / ADRs.
3. Official source books for the in-scope versions listed above.
4. `VerisimLLC/draw-steel-data` for structured content, stable identities, and relationships.
5. `VerisimLLC/draw-steel-codex` for implementation patterns and character-builder behavior.
6. Inference.

Important rules:

- If the official rules and Codex data/Lua disagree, **the official rules win** unless the Owner explicitly rules otherwise.
- Do not infer product scope from whatever happens to exist in `draw-steel-data`.
- Preserve canonical IDs, references, formulas, and mechanical values unless the task explicitly authorizes changing them.
- Do not create a second independent rules engine or duplicate canonical dataset unless the task explicitly requires it.
- If required source authority is unavailable or contradictory, stop and report the exact ambiguity instead of guessing.

## Localization Rules

Translation follows: **Reviewer suggests, Owner finalizes**.

- Do not invent new Chinese game terms, ability names, class terminology, or prose.
- Use only Owner-approved/frozen translations provided by the task authority.
- Purely mechanical variants that do not change meaning (for example punctuation, capitalization, grammatical number around an already-approved term) may be handled only when clearly implied by the approved wording and task.
- Same English text may legitimately have different approved zh-TW translations in different semantic contexts. Do not globally deduplicate just because the English matches.
- Translation must never alter canonical IDs, numeric rules, formulas, choice legality, runtime availability, or save-schema semantics.
- A mutable Google Sheet is a working surface, not implementation authority. If the task provides a frozen translation packet or approved list, use that exact frozen authority.
- If a new semantic translation decision is required, stop and ask the Reviewer / Owner rather than inserting a temporary translation.

## Implementation Principles

- Prefer the smallest coherent implementation that satisfies the current batch acceptance criteria.
- Do not perform unrelated refactors, architecture cleanups, dependency upgrades, or future-proofing in the same batch.
- Follow existing repository patterns before introducing new abstractions.
- Keep rule/data transformation deterministic and traceable to its source.
- Character legality and derived values are product behavior, not presentation-only details.
- Never hide invalid state in persistence. Saved/imported characters must be validated against the same canonical rules as interactive creation.
- Do not add migrations, generic sync systems, plugin systems, or extensibility frameworks before there is an explicit requirement.

## Testing and Verification

Before running commands, inspect the current repository for:

- `package.json` scripts and `packageManager`;
- lockfiles;
- CI workflows;
- nearby tests and current architecture.

Use the repository's actual package manager and commands. Do not choose tooling only because it is globally installed.

Verification should match the change risk:

- Prefer public-behavior tests over internal implementation-detail assertions.
- Rules tests should use expected values traceable to an independent authority (rulebook fixture, source record, or explicit scenario), not only the same production helper being tested.
- For dependent choices, test both valid and invalidated downstream state.
- For persistence, test save/reload and malformed/corrupt input handling where applicable.
- For JSON, test export/import round-trip when applicable.
- If mobile/compact rendering materially differs from desktop, cover the relevant branch or report why manual acceptance is required.
- Required verification must be run after the final tracked change that it is meant to validate.
- Report failures honestly. A later green rerun does not erase an earlier failure.

Do not change timeouts, test configuration, or unrelated production code merely to make a failing check green.

## Git and GitHub Safety

Repository write target is:

`boyiad2110/ds-hero-builder`

Rules:

- Never write to `VerisimLLC/*` or any upstream repository.
- Do not create extra branches unless the current task / Batch Contract requires a feature branch.
- Do not create a PR, merge, or modify the integration branch unless explicitly authorized for that stage.
- Do not use force-push, reset, rebase, or amend to rewrite already-reviewed history.
- Corrections after review should normally be a new commit on the same authorized feature branch.
- If repository/base/head state differs from the task assumptions, stop and report it before attempting to repair history.
- Do not commit Agent tooling, generated skill metadata, installer artifacts, or unrelated workspace files.
- Keep the working tree clean at handoff.

When a task uses staged handoff, follow its explicit STOP point. Completing implementation does not imply permission to open a PR or merge.

## Task Execution

For each implementation task:

1. Read this `AGENTS.md` and any more-specific nested instructions.
2. Read the current task / Batch Contract and its acceptance criteria.
3. Inspect the actual repository state before editing.
4. Confirm relevant authority and source data.
5. Make only in-scope changes.
6. Run risk-matched verification.
7. Self-review the actual diff for scope creep and accidental data changes.
8. Commit / push / report only to the extent explicitly authorized.
9. Stop at the task's stated boundary.

Normal progress inside an authorized stage does not require repeatedly asking whether to continue. Stop early only for a real blocker, authority conflict, unexpected repository state, verification failure, or required Owner decision.

## Mandatory Stop Conditions

Stop and report instead of guessing or broadening scope when:

- official rules, repository authority, and task expectations conflict;
- a new translation or product decision is needed;
- implementing the request would require an unapproved schema / ID / canonical-data change;
- the actual repository branch / HEAD / diff does not match the authorized base;
- required tests or CI fail and the fix is outside the current scope;
- unexpected generated/untracked files appear from tooling;
- the task cannot be completed without modifying out-of-scope content.

Do not start the next batch after finishing the current one.
