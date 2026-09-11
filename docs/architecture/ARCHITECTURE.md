# DS Hero Builder — Architecture

## Status

Initial architecture for the MVP. This document records current technical decisions and their rationale so future implementation batches do not silently choose a different stack or data model.

## Technology Stack

### React

Use React for the UI.

Why:

- Character creation is highly stateful and interactive.
- Many controls depend on earlier choices.
- React is mature, well-supported, and familiar to coding agents.

Trade-off:

- It adds more structure than plain HTML/JavaScript, but the state complexity justifies that cost.

### TypeScript

Use TypeScript for application code.

Why:

- Draw Steel data has many linked identities such as classes, ancestries, abilities, skills, kits, and references.
- Strong typing catches many incorrect data connections before runtime.
- It makes normalized game-data shapes explicit and reviewable.

Trade-off:

- More type definitions must be written up front.

### Vite

Use Vite for local development and production builds.

Why:

- It is simple and fast for a client-side React app.
- It does not impose a server framework we do not need.
- It produces static assets that work well with Cloudflare Pages or GitHub Pages.

### Testing

Use:

- **Vitest** for unit and rule-logic tests.
- **React Testing Library** for rendered UI behavior.
- **Playwright** for representative end-to-end browser flows.

Why:

- Vitest is a natural fit with Vite.
- React Testing Library encourages testing user-visible behavior instead of component internals.
- Playwright can verify full flows such as character creation, reload, and export/import.

Do not add every testing tool immediately. Install and configure the minimum needed by the implementation batch.

## Application Shape

The MVP should be a **static client-side single-page application**.

No backend, database, account service, or authentication is required for the current product scope.

Add a backend only if a future Owner decision introduces a requirement that cannot reasonably be met client-side.

## Data Architecture

Do **not** make UI components consume upstream Codex YAML directly.

Preferred flow:

`Official / Codex source data -> normalization / validation -> project-owned typed data -> rules/domain layer -> UI`

### Why normalize upstream data

The upstream data format exists for Codex / DMHub, not specifically for this web app. Direct coupling would make the UI dependent on upstream field names, nesting, and implementation details.

A project-owned typed representation gives us:

- a stable boundary;
- easier validation;
- clearer translation mapping;
- easier testing;
- controlled filtering to the approved MVP content set.

### Canonical identity

Preserve upstream stable IDs where they are appropriate and reliable. Do not silently replace canonical identities with translated names or UI labels.

Any new project-owned ID must have a documented reason and deterministic mapping to its source.

### Rules authority

The normalized data layer is not allowed to "correct" official mechanics based only on Codex behavior.

When official rules and upstream implementation differ, the official in-scope rulebook is authoritative unless the Owner explicitly decides otherwise.

## State Architecture

Keep these concepts separate:

1. **Canonical game data** — source-defined rules/content.
2. **Localization data** — approved `zh-TW` presentation text.
3. **Character state** — the player's selected canonical identities and editable character fields.
4. **Derived state** — values calculated from canonical data + character choices.
5. **UI state** — temporary presentation concerns such as the currently focused step.

Do not store translated labels as the authoritative form of a character choice.

## Persistence

Use browser-local persistence for MVP auto-save.

The persistence format should be versioned once an actual character save schema is introduced.

Do not define a migration framework before the first real schema requires one.

When JSON import/export is implemented, malformed or incompatible input must fail safely instead of silently producing an invalid character.

## Deployment

### Preferred: Cloudflare Pages

Cloudflare Pages is the preferred deployment target.

Why:

- The Vite build output is static and fits Pages naturally.
- It supports Git-based deployment workflows.
- Preview deployments are useful for reviewing changes before production.
- It leaves room for custom domains and Cloudflare's delivery network without requiring a backend.

### Fallback: GitHub Pages

GitHub Pages is an acceptable fallback.

Why:

- It is simple for a public GitHub-hosted static project.
- It keeps source and hosting close together.

Compared with Cloudflare Pages, it is less attractive as the default when we want richer preview/deployment flexibility.

### Explicit non-option

Do **not** use ChatGPT Sites or make the project depend on any ChatGPT-hosted website feature.

The application must remain independently buildable and deployable from the GitHub repository.

## Deferred Decisions

Do not decide these prematurely:

- Zod or another runtime schema validator — revisit when JSON import / external-data validation is implemented.
- Exact state-management library — start with React's built-in capabilities and add a library only if real complexity justifies it.
- Exact save-schema versioning / migrations — decide when persistence format is implemented.
- Backend / cloud sync — outside MVP.

## Architectural Guardrails

- Prefer deterministic transformations.
- Keep rules logic out of display-only components where practical.
- Keep translation separate from canonical mechanics.
- Do not introduce abstractions solely for hypothetical future supplements.
- Reuse proven patterns, but do not broaden a batch into unrelated architecture cleanup.
