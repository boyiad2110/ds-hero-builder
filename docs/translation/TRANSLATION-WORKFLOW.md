# DS Hero Builder — Translation Workflow

## Purpose

Define how official Draw Steel English content becomes approved Traditional Chinese (`zh-TW`) text and later implementation authority.

Core rule:

**Official canonical English → Reviewer suggestion → Owner final wording → frozen implementation authority → Agent implementation.**

- **Owner (Marc)** — final authority for `zh-TW` wording and terminology.
- **Reviewer (ChatGPT)** — extracts/cross-checks canonical English, prepares review batches, proposes translations, explains context, records Owner decisions, and freezes approved implementation packets.
- **Agent (Codex)** — implements only approved/frozen values. It does not invent or silently change translation decisions.

The Owner's latest explicit decision overrides this document when they conflict.

---

## 1. Clean-Room Translation Rule

Treat each new translation-review effort as a clean translation environment unless the Owner explicitly approves reuse.

Do **not** silently reuse wording from:

- earlier ChatGPT conversations;
- other Draw Steel localization projects;
- FORGESTEEL-ZH-TW;
- old translation sheets or glossaries;
- community or web translations;
- third-party Chinese editions.

A term that happened to be translated before is not automatically approved here.

Reusable terminology becomes authority only after the Owner approves it in this workflow.

---

## 2. Source Authority

For the current Heroes 1.01b Ancestry translation work, use clean sources in this order:

1. `Official Rules/1_DS_Ancestries.pdf` in the Owner's working Drive — primary source for official wording and context.
2. Batch 003 canonical English retained in the repository — cross-check and stable identity aid.
3. `Official Rules/9_DS_Tests_Combat_Negotiation.pdf` — only when an Ancestry choice directly references content such as a skill list needed to understand or present that choice.

Do not broaden source use merely because another translation already exists elsewhere.

If official PDF wording and repository canonical English disagree materially, do not choose silently. Record the discrepancy and ask the Owner when necessary.

For other content areas, follow the project-wide rules/data authority in `AGENTS.md` and the current approved Batch/Owner direction.

---

## 3. Google Sheet — Owner Review Workspace

Owner review should happen in a native Google Sheet in the Owner's designated `Translation` Drive folder.

The Sheet is optimized for **fast human comparison**, not database normalization.

### Required column order

Use this default order:

| Column | Field | Purpose |
| --- | --- | --- |
| A | `Status` | Review state |
| B | `Ancestry` | Human-readable grouping |
| C | `Content Type` | Trait / Ability / Choice / etc. |
| D | `Stable ID / Context ID` | Stable implementation/context identity |
| E | `Field` | Which translatable field this row represents |
| F | `Canonical English` | Exact source text |
| G | `Owner Final zh-TW` | Owner-approved final translation |
| H | `Reviewer Suggested zh-TW` | Reviewer's current proposal |
| I | `Source / Rule Reference` | PDF/page/repository source pointer |
| J | `Notes / Context` | Meaning, ambiguity, terminology notes |

### Layout rule — English and Owner Final stay together

`Canonical English` and `Owner Final zh-TW` **must remain adjacent columns**.

This is a usability requirement. The Owner must be able to compare source and final translation without horizontally scrolling back and forth.

Therefore:

- do not insert metadata, Reviewer notes, source references, or suggestion columns between them;
- append new metadata columns to the right unless the Owner explicitly approves another layout;
- keep context columns compact;
- freeze the header row;
- freeze compact identity/context columns when useful;
- enable text wrapping for translation text;
- size the English and Owner Final columns as the primary visible work area.

If the Sheet becomes too wide, reduce or move secondary metadata before separating the English/Owner-Final pair.

### One row = one independently reviewable string

Prefer one row per independently translatable player-visible string.

For example, one Trait can use separate rows sharing the same Stable ID:

- `Field = Name`
- `Field = Rules Text`

Choices may similarly use rows such as:

- `Choice Prompt`
- `Option Label`
- `Rules Text`

This keeps source and final translation directly side by side and avoids a very wide sheet containing separate Name/Text column families.

---

## 4. What to Translate

Include player-visible English required by the character-creation experience, such as:

- Ancestry names when part of the localization surface;
- Signature Trait names and player-visible text;
- Purchased Trait names and player-visible text;
- Ancestry Ability names and player-visible rules text;
- choice prompts and option labels;
- referenced player-visible labels required to make a choice understandable;
- other player-visible creation text that will be implemented in the Hero Builder.

Use `Content Type` and `Field` to preserve context instead of forcing unrelated strings into one global terminology bucket.

Do **not** create independent translation decisions for purely mechanical/internal data such as:

- stable IDs;
- internal keys or paths;
- raw costs or point-budget numbers when they are not prose;
- formulas;
- canonical references;
- schema values;
- legality rules;
- implementation-only metadata.

Numbers or mechanics embedded inside player-visible source sentences remain part of that canonical sentence and must not be altered through translation.

---

## 5. Canonical English Integrity

`Canonical English` is source evidence, not editable prose.

The Reviewer must:

- copy official wording rather than paraphrasing it;
- preserve wording, numbers, punctuation, and mechanical meaning;
- use repository canonical English to cross-check identity and transcription when available;
- never "improve" or silently rewrite official English;
- put suspected source errors or ambiguities in `Notes / Context` instead of correcting the canonical field.

Only obvious extraction/layout artifacts may be normalized when the intended printed text is unambiguous. Do not use normalization to change wording.

Translation must never alter canonical IDs, rule numbers, formulas, references, choice legality, runtime content availability, or save-schema meaning.

If translation appears to require changing one of those, stop and reclassify the work as a rules/data/architecture issue.

---

## 6. Reviewer and Owner Responsibilities

The Reviewer may:

- extract canonical English;
- explain rules/context;
- propose one primary `zh-TW` translation;
- provide a small number of alternatives when there is a meaningful distinction;
- flag terminology that may deserve reuse or consistency;
- resolve purely mechanical formatting that does not create a new semantic decision.

Examples of mechanical handling:

- punctuation;
- capitalization;
- grammatical number around an already-approved term;
- spacing/formatting that does not change meaning;
- clearly required grammatical inflection of approved wording.

The Reviewer must not:

- decide final wording on the Owner's behalf;
- treat an old translation as approved merely because it exists;
- globally deduplicate wording only because the English string matches;
- alter mechanics through localization.

Send a real semantic choice to the Owner, including:

- new game terminology;
- class / ancestry / ability / feature names;
- new prose;
- ambiguous rule wording;
- context-dependent wording with multiple reasonable translations;
- changes to previously approved meaning.

If there is doubt about meaning, escalate instead of treating it as mechanical.

### Context-sensitive translation

The same English word or phrase may legitimately use different Chinese translations in different semantic contexts.

Do not force global consistency unless the Owner has approved the term as reusable for those contexts.

When consistency would be useful but is not yet decided, note it for Owner review instead of silently enforcing it.

---

## 7. Review Status and Finalization

Use these Owner-facing review states:

- `Draft` — Reviewer is still preparing the row.
- `Owner Review` — ready for Owner decision.
- `Frozen` — Owner Final has been confirmed for the current translation revision.
- `Re-review` — a previously frozen row needs a new Owner decision.

A blank `Owner Final zh-TW` is never permission for the Reviewer or Agent to invent final wording.

`Owner Final zh-TW` is the authoritative wording decision.

The Owner may:

- accept the Reviewer suggestion;
- edit it directly;
- replace it completely;
- leave notes requesting another proposal.

A row is not frozen merely because a Reviewer suggestion exists.

Implementation lifecycle labels such as `Frozen for Implementation` or `Implemented`, when useful later, belong to implementation handoff rather than cluttering the Owner-facing review surface.

---

## 8. Changes After Finalization

Do not silently overwrite a frozen decision.

If the Owner changes a frozen translation:

1. update the proposed/final wording as directed;
2. set the row to `Re-review` while the decision is open;
3. preserve the canonical English unchanged;
4. return to `Frozen` only after the Owner confirms the new wording;
5. create a new frozen implementation revision before Agent implementation when required.

If only a mechanical packet defect is corrected and approved semantics do not change, Owner re-approval is not required.

---

## 9. Small-Batch Working Rule

Do not process all content as one giant unsaved translation pass.

Work in small review batches. A reasonable starting size for Ancestry work is one or two Ancestries, adjusted to actual content volume.

For every batch:

1. extract and cross-check canonical English;
2. add rows to the Google Sheet;
3. save/confirm the Sheet state;
4. mark prepared rows `Owner Review`;
5. let the Owner review/finalize them;
6. only then continue or freeze them as appropriate.

The goal is to avoid losing substantial work to tool/session interruption and to surface terminology decisions early.

Translation review itself does not require a GitHub Issue, PR, feature branch, or Agent implementation batch unless the Owner explicitly requests implementation work.

---

## 10. Agent Handoff

The Google Sheet is a mutable Owner/Reviewer workspace. It is **not** direct Agent implementation authority.

Before Agent implementation:

1. Reviewer reads the finalized live values.
2. Reviewer confirms the in-scope identities and canonical English source.
3. Reviewer resolves mechanical rows that do not need Owner input.
4. Reviewer freezes the exact approved values into the Batch Issue or another explicit immutable packet/revision.
5. Agent implements only that frozen revision.

Do not place private Drive/Sheet URLs in a public GitHub Issue unless the Owner explicitly approves doing so.

### Frozen packet — minimum fields

Each frozen implementation record should contain at least:

- stable identity/path;
- content type or surface;
- exact canonical English;
- approved `zh-TW`;
- relevant source context when needed to disambiguate meaning.

Do not build a large hashing/manifest framework before translation volume and failure risk justify it.

---

## 11. Implementation Verification

For a translation implementation batch, verify at minimum:

- implemented identities match the frozen batch;
- final `zh-TW` values match exactly where exact matching is appropriate;
- canonical IDs/mechanics are unchanged;
- rendered text is correct on materially different UI paths;
- English fallback remains readable when untranslated content is intentionally allowed.

---

## 12. Glossary

Do not create a glossary entry merely because a phrase appeared once.

Add reusable terminology only when the Owner has approved it as reusable across the relevant semantic context.

When a batch creates or changes reusable terminology, record that explicitly. Otherwise, record that there is no glossary change.
