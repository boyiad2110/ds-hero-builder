---
name: Agent Batch
description: Implementation batch contract for Codex
title: "[Batch] "
labels: []
assignees: []
---

# Agent Batch Contract

## Goal

State one verifiable outcome for this batch.

## Authority

List the exact Owner decision, repository requirement, rule source, frozen translation packet, or architecture document that governs this batch.

## Base

- Integration branch: `main`
- Expected base commit:
- Feature branch:
- Local repository: `C:\TRPG\Draw Steel site\ds-hero-builder`

## In Scope

- 

## Out of Scope

- 

## Acceptance Criteria

- [ ] 

## Risk

- Level: A / B / C
- Manual acceptance: REQUIRED / NOT REQUIRED
- Why this level:

## Git Permission

Stage 1 default unless this contract says otherwise:

- Start from the Owner's local repository path above.
- Before editing, inspect the local working tree/branch/remotes, fetch `origin`, and reconcile local `main` with `origin/main` safely.
- If there are unexpected local changes or non-fast-forward divergence, STOP instead of resetting, rebasing, overwriting, or discarding work.
- May create/use the authorized feature branch locally from the exact authorized base.
- May edit, test, commit normally, and verify in the local working copy.
- May push only the authorized feature branch.
- May open/update exactly one PR from the authorized feature branch to the integration branch and report the exact HEAD/evidence.
- May not merge, modify the integration branch directly for implementation, rewrite reviewed history, create workaround PRs, discard unexpected local work, or start the next batch.
- Do not implement product changes by editing repository files directly through GitHub APIs/web UI; GitHub is the remote/review surface, not the Agent implementation workspace.

Any deviation from this workflow must be stated explicitly in the Batch Contract.

## Verification

List only the risk-matched evidence required for this batch. Use current repository tooling and CI rather than inventing generic commands.

- 

## Report

Agent should report only decision-relevant evidence:

- full 40-character verified local HEAD;
- confirmation that remote feature-branch HEAD equals local HEAD;
- PR URL / head / base;
- actual changed files;
- implementation approach;
- fresh verification results;
- deviations, failures, unresolved risks, or required Owner / Reviewer decisions;
- clean local working tree status.

## Stop

After local implementation, fresh verification, normal commit(s), feature-branch push, PR creation/update, and report, **STOP for Reviewer review**.

Do not merge, modify the integration branch directly for implementation, start the next batch, or broaden scope without explicit Reviewer authorization.
