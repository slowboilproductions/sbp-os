# sbp-os

Source of truth for the **Slow Boil Productions** business website — [slowboilproductions.com](https://slowboilproductions.com) — and its working documents.

Slow Boil Productions builds and runs a family of units for developing consumer brands: **AMS** (agentic marketing), **CRM**, **Dash** (distribution performance), **IC** (still image), and **Motion**. This repo holds the site that presents that family.

## Layout

- `legacy/` — the retired May-2026 static site (6 pages), mirrored from its old Drive home as the reset's before-state. Not deployed.
- `site/` — the new site source (lands after the operator approves the skeleton + a design direction).
- `_SYSTEM/` — substrate per the Family Substrate Spec (`brain-os`): canon index, capture queue, dispatch inbox, state snapshot, session logs, cold handoffs, cost register.

## Governance

Work lands on `claude/*` branches; the operator holds the merge gate; a push is inert, a merge to `main` is live. Canon ships DRAFT until ratified.
