# DS Hero Builder — Translation Specification

## Purpose

This document defines the translation-review workspace and rules used when the Reviewer prepares Traditional Chinese (`zh-TW`) localization for Owner approval.

Core rule:

**Official canonical English → Reviewer suggestion → Owner final wording → frozen implementation authority.**

The Reviewer proposes. The Owner decides. The Agent implements only a later frozen result.

The Owner's latest explicit decision overrides this document when they conflict.

## Clean-Room Translation Rule

Treat each new translation-review effort as a clean translation environment unless the Owner explicitly approves reuse.

Do **not** silently reuse wording from:

- earlier ChatGPT conversations;
- other Draw Steel localization projects;
- FORGESTEEL-ZH-TW;
- old translation sheets or glossaries;
- community or web translations;
- third-party Chinese editions.

A term that happened to be translated before is not automatically approved here.

Reusable terminology becomes authority only after the Owner approves it in this translation workflow.

## Source Authority for Ancestry Translation

For the current Heroes 1.01b Ancestry translation work, use clean sources in this order:

1. `Official Rules/1_DS_Ancestries.pdf` in the Owner's working Drive — primary source for official wording and context.
2. Batch 003 canonical English retained in the repository — cross-check and stable identity aid.
3. `Official Rules/9_DS_Tests_Combat_Negotiation.pdf` — only when an Ancestry choice directly references content such as a skill list needed to understand or present that choice.

Do not broaden source use merely because another translation already exists elsewhere.

If the PDF and repository canonical English disagree materially, do not choose silently. Record the discrepancy and ask the Owner when necessary.

## Google Sheet Is the Review Workspace

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
- freeze the compact identity/context columns when useful;
- enable text wrapping for translation text;
- size the English and Owner Final columns as the primary visible work area.

If the Sheet becomes too wide, reduce or move secondary metadata before separating the English/Owner-Final pair.

## One Row = One Independently Reviewable String

Prefer one row per independently translatable player-visible string.

For example, one Trait can use separate rows sharing the same Stable ID:

- `Field = Name`
- `Field = Rules Text`

Likewise, choices can use rows such as:

- `Choice Prompt`
- `Option Label`
- `Rules Text`

This keeps the source and final translation directly side by side and avoids a very wide sheet containing separate Name/Text column families.

## What to Include

Include player-visible English required by the Ancestry character-creation experience, such as:

- Ancestry names when they are part of the localization surface;
- Signature Trait names and player-visible text;
- Purchased Trait names and player-visible text;
- Ancestry Ability names and player-visible rules text;
- choice prompts and option labels;
- referenced player-visible labels required to make an Ancestry choice understandable;
- other player-visible Ancestry creation text that will be implemented in the Hero Builder.

Use `Content Type` and `Field` to preserve context instead of forcing unrelated strings into one global terminology bucket.

## What Not to Translate as Independent Content

Do not create translation decisions for purely mechanical/internal data such as:

- stable IDs;
- internal keys or paths;
- raw costs or point-budget numbers when they are not prose;
- formulas;
- canonical references;
- schema values;
- legality rules;
- implementation-only metadata.

Numbers or mechanics embedded inside player-visible source sentences remain part of that canonical sentence and must not be altered through translation.

## Canonical English Integrity

`Canonical English` is source evidence, not editable prose.

The Reviewer must:

- copy official wording rather than paraphrasing it;
- preserve wording, numbers, punctuation, and mechanical meaning;
- use Batch 003 canonical English to cross-check identity and transcription;
- never "improve" or silently rewrite official English;
- put suspected source errors or ambiguities in `Notes / Context` instead of correcting the canonical field.

Only obvious extraction/layout artifacts may be normalized when the intended printed text is unambiguous. Do not use normalization to change wording.

## Reviewer Translation Role

The Reviewer may:

- extract canonical English;
- explain rules/context;
- propose one primary `zh-TW` translation;
- provide a small number of alternatives when there is a meaningful distinction;
- flag terminology that may deserve reuse or consistency.

The Reviewer must not:

- decide the final wording on the Owner's behalf;
- treat an old translation as approved merely because it exists;
- globally deduplicate wording only because the English string matches;
- alter mechanics through localization.

## Context-Sensitive Translation

The same English word or phrase may use different Chinese translations in different semantic contexts.

Do not force global consistency unless the Owner has approved the term as reusable for those contexts.

When consistency would be useful but is not yet decided, note it for Owner review instead of silently enforcing it.

## Status Values for the Review Sheet

Use these translation-review states:

- `Draft` — Reviewer is still preparing the row.
- `Owner Review` — ready for Owner decision.
- `Frozen` — Owner Final has been confirmed for the current translation revision.
- `Re-review` — a previously frozen row needs a new Owner decision.

A blank `Owner Final zh-TW` is never permission for the Reviewer or Agent to invent final wording.

Implementation lifecycle states, if needed later, belong to the implementation/freeze workflow rather than cluttering the Owner's translation-review surface.

## Owner Finalization

`Owner Final zh-TW` is the authoritative wording decision.

The Owner may:

- accept the Reviewer suggestion;
- edit it directly;
- replace it completely;
- leave notes requesting another proposal.

A row is not frozen merely because a suggestion exists.

## Changes After Finalization

Do not silently overwrite a frozen decision.

If the Owner wants to change a frozen translation:

1. update the proposed/final wording as directed;
2. set the row to `Re-review` while the decision is open;
3. preserve the canonical English unchanged;
4. return to `Frozen` only after the Owner confirms the new wording;
5. create a new frozen implementation revision before Agent implementation when required by `TRANSLATION-WORKFLOW.md`.

## Small-Batch Working Rule

Do not process all Ancestries as one giant unsaved translation pass.

Work in small review batches. A reasonable starting size is one or two Ancestries, adjusted to actual content volume.

For every batch:

1. extract and cross-check canonical English;
2. add the rows to the Google Sheet;
3. save/confirm the Sheet state;
4. mark prepared rows `Owner Review`;
5. let the Owner review/finalize them;
6. only then continue or freeze them as appropriate.

The goal is to avoid losing substantial work to tool/session interruption and to surface terminology decisions early.

## Relationship to Implementation

The Google Sheet is a mutable Owner/Reviewer workspace. It is not direct Agent authority.

After Owner approval, implementation still follows `docs/translation/TRANSLATION-WORKFLOW.md`:

- Reviewer verifies live finalized values;
- Reviewer freezes an explicit implementation packet/revision;
- Agent implements only that frozen authority.

Do not open an implementation Issue, PR, or Agent batch merely to perform translation review unless the Owner explicitly requests implementation work.