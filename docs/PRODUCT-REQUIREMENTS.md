# DS Hero Builder — Product Requirements

## Purpose

Build a web-based Draw Steel character creator that lets players create a legal level 1 character without needing to study the full rules first, then export the result for the GM to review.

This document is the product-requirements authority for the current MVP. If it conflicts with an older summary, the Owner's latest explicit decision wins.

## Project Roles

- **Owner (Marc)** — final authority for product scope, Draw Steel rules disputes, translation wording, and UX acceptance.
- **Reviewer (ChatGPT)** — planner and reviewer; prepares implementation batches and reviews evidence.
- **Agent (Codex)** — implementer; executes only the authorized batch and does not invent product or translation decisions.

## MVP Scope

### Supported content

The MVP supports level 1 character creation using only:

- Draw Steel Heroes **1.01b**
- Summoner **v1.0b**
- Beastheart **v1.0**

Content present in upstream repositories does not automatically become in scope.

### Language

- Traditional Chinese (`zh-TW`) is the primary language.
- Major titles and headings may show Chinese and English together.
- Translation follows **Reviewer suggests, Owner finalizes**.

### Character creation UX

- The full set of creation steps should remain visible to the player.
- This is **not** a strict Previous / Next wizard.
- Players may jump to another available step to revise earlier choices.
- Each step should clearly indicate whether it is incomplete, complete, or requires correction.
- Illegal choices should be proactively disabled / unavailable where practical.
- The app must not rely on a final-screen error dump as the main legality mechanism.
- If changing an earlier choice invalidates later choices, the app must not silently preserve illegal downstream state. It must either clear the invalid choice or mark the affected step as requiring correction.
- Optional content must not block completion when the rules do not require it.

### Persistence

- No account or login is required.
- Character progress auto-saves in the browser.
- Closing and reopening the site should restore the current character when possible.

### Export / import

The MVP supports:

- Human-readable **HTML** export.
- **JSON** export containing enough canonical state to restore the character.
- Re-importing that JSON into the app and continuing to edit the character.

The MVP does **not** include PDF export.

### Codex interoperability

The MVP does **not** include importing characters from Draw Steel Codex.

## Deployment Constraint

The product must be deployable as a normal public website using a free static-hosting workflow.

Preferred deployment target:

1. **Cloudflare Pages**
2. **GitHub Pages** as an acceptable fallback

Do **not** depend on ChatGPT Sites or any ChatGPT-hosted site feature.

The MVP should remain a static client-side web app unless a future requirement creates a real need for a backend.

## Rules and Content Authority

When sources disagree, use this order:

1. Latest explicit Owner decision.
2. Approved repository requirements / decisions / ADRs.
3. Official in-scope rulebooks listed above.
4. `VerisimLLC/draw-steel-data` for structured data, stable identities, and relationships.
5. `VerisimLLC/draw-steel-codex` for implementation patterns and character-builder behavior.
6. Inference.

Official rules win over Codex data / Lua unless the Owner explicitly decides otherwise.

## Non-goals for MVP

Do not add these without a new Owner decision:

- Character advancement above level 1.
- Existing-character editing beyond the JSON restore/edit workflow.
- PDF export.
- Codex character import.
- Accounts, cloud saves, databases, or authentication.
- A general-purpose Draw Steel rules engine.
- Automatic inclusion of every upstream supplement or playtest item.
- A plugin system or user-extensible content platform.

## Acceptance Principles

A feature is not complete merely because the UI renders.

Where applicable, acceptance must prove:

- legal choices are allowed;
- illegal choices are blocked or surfaced correctly;
- dependent choices invalidate correctly when prerequisites change;
- derived values are traceable to rule authority;
- save / reload does not lose required character state;
- JSON export / import round-trips the intended canonical state;
- the result remains usable on both desktop and mobile-sized layouts when the render path materially differs.
