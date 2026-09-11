# DS Hero Builder — Translation Workflow

## Purpose

Define how English Draw Steel content becomes approved Traditional Chinese text without allowing the implementation Agent to invent or silently change translation decisions.

Core rule:

**Reviewer suggests. Owner finalizes. Agent implements the frozen result.**

## Roles

- **Owner (Marc)** — final authority for `zh-TW` wording and terminology.
- **Reviewer (ChatGPT)** — prepares translation batches, proposes wording, identifies mechanical rows, checks source alignment, and freezes the implementation packet.
- **Agent (Codex)** — implements only approved/frozen values. It does not make new semantic translation decisions.

## Working Surface

Use a native Google Sheet in the Owner's designated Drive folder when Owner review is required.

Recommended columns:

- `ID`
- `Type / Surface`
- `Canonical English`
- `Reviewer Suggestion`
- `Owner Final zh-TW`
- `Status`
- `Source / Rule Reference`
- `Notes`

The exact columns may evolve when real data reveals a better need, but stable identity + exact English + final Chinese must remain unambiguous.

## Status Model

Recommended values:

- `Needs Review`
- `Owner Finalized`
- `Mechanical / Derived`
- `Frozen for Implementation`
- `Implemented`

Do not treat a blank Owner-final field as automatic permission for the Agent to choose wording.

## What Requires Owner Decision

Send to the Owner when there is a real semantic choice, for example:

- new game terminology;
- class / ancestry / ability / feature names;
- new prose;
- ambiguous rule wording;
- context-dependent wording with multiple reasonable translations;
- changes to previously approved meaning.

## What the Reviewer May Resolve Mechanically

The Reviewer may handle changes that do not create a new semantic decision, for example:

- punctuation;
- capitalization;
- grammatical number around an already-approved term;
- spacing / formatting that does not change meaning;
- clearly required grammatical inflection of approved wording.

If there is doubt about meaning, escalate instead of treating it as mechanical.

## Context Matters

Approval is contextual.

The same canonical English text may legitimately have different `zh-TW` translations on different surfaces or in different semantic contexts.

Do not globally deduplicate translations just because the English source text matches.

## Source Integrity

Translation must not alter canonical mechanics.

Do not change through localization:

- IDs;
- rule numbers;
- formulas;
- references;
- choice legality;
- runtime content availability;
- save-schema meaning.

If implementing a translation appears to require changing one of those, stop and reclassify the work as a rules/data/architecture issue.

## Agent Handoff

The Google Sheet is a mutable Owner/Reviewer workspace. It is **not** direct implementation authority.

Before Agent implementation:

1. Reviewer reads the finalized live values.
2. Reviewer confirms the in-scope identities and canonical English source.
3. Reviewer resolves mechanical rows that do not need Owner input.
4. Reviewer freezes the exact approved values into the Batch Issue or another explicit immutable packet.
5. Agent implements only that frozen revision.

Do not place private Drive/Sheet URLs in a public GitHub Issue unless the Owner explicitly approves doing so.

## Frozen Packet — Minimum Fields

Until the project needs a more automated packet format, each frozen implementation record should contain at least:

- stable identity / path;
- content type or surface;
- exact canonical English;
- approved `zh-TW`;
- relevant source context when needed to disambiguate meaning.

Do not build a large hashing / manifest framework before the project has enough translation volume and failure risk to justify it.

## Changes After Freeze

If approved Chinese meaning changes after freeze:

- publish a new frozen revision;
- clearly supersede the old revision;
- do not silently edit the old authority while the Agent is working.

If only a mechanical packet defect is corrected and the approved semantics do not change, Owner re-approval is not required.

## Implementation Verification

For a translation batch, verify at minimum:

- implemented identities match the frozen batch;
- final `zh-TW` values match exactly where exact matching is appropriate;
- canonical IDs / mechanics are unchanged;
- rendered text is correct on materially different UI paths;
- English fallback remains readable when untranslated content is intentionally allowed.

## Glossary

Do not create a glossary entry merely because a phrase appeared once.

Add reusable terminology only when the Owner has approved it as reusable across the relevant semantic context.

When a batch creates or changes reusable terminology, record that explicitly. Otherwise, record that there is no glossary change.
