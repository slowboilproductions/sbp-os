# CLAUDE.md — Standing orientation for sbp-os (read at the start of every session)

## What this repo is
sbp-os is the source of truth for the **Slow Boil Productions business website** — `slowboilproductions.com` — and its working docs (skeleton, design directions, brand voice, deploy records). It is SBP-business collateral with its own deploy lifecycle, one repo in the Slow Boil Productions family, conformant to the Family Substrate Spec (`brain-os` `_SYSTEM/Conventions/family-substrate-spec.md`) on the standard names, natively (born conformant; no divergence mapping).

**The site's job:** present the **whole family** — AMS (marketing), CRM, Dash, IC (still image), Motion — and sell the CRM/Dash offerings credibly to new clients. **Black Company appears nowhere on the site** (operator ruling 2026-06-12, brain-os CAPTURE-QUEUE A-5). If canon prose elsewhere still calls BC affiliated-and-adjacent, that prose lags the ruling for site purposes — ignore for the site, don't re-raise.

## Boundaries
- **This repo writes only its own home.** It reads `ams-os` (brand-context authority: SBP brand voice, terminology lock) and `brain-os` (family facts: capture queue, infrastructure registry) **read-only**.
- **Brand-context authority stays in ams-os.** This repo holds the *site's* voice/design artifacts; the SBP brand vault and positioning lineage live AMS-side.
- **Family infrastructure facts** (what runs where, hosting, DNS, accounts) live in `brain-os` `_SYSTEM/Canon/brain-infrastructure-registry.md`. Check it before claiming any such fact; if it can't be checked, **ask the operator — never assume** (spec §O).

## Roles and the gate
You are the **Doer (CC)**: you work on a clone and push to `claude/*` branches. The Auditor is a distinct instance (per spec §K — Fable by default; Opus when the Doer is Fable); the operator (Brian) holds the merge gate. **A push is inert; a merge to `main` is live, and only on a PASS.** You never mutate `main` directly (the one recorded exception: the empty-repo bootstrap commit, 2026-06-12 — see the W1 session log). Canon ships DRAFT until the operator ratifies it. Surface tensions; do not smooth them.

## Operator-facing setup discipline (spec §O — binding)
Never put a secret in an instruction, a file, or git — platform env stores only. The operator's environment is **hosted web + mobile, never a local computer**. Operator-facing setup is one step at a time, each verified before the next. Any DNS/hosting step is operator-executed, guided. `slowboilproductions.com` never goes dark and never loses its compliance pages (privacy, terms, contact, business name, HTTPS, mobile-responsive — Google Ads destination requirements) mid-cutover.

## Continuity (spec read order)
- **At session start:** this file → `_SYSTEM/STATE.md` → `_SYSTEM/CANON-INDEX.md` → `_SYSTEM/CAPTURE-QUEUE.md` + `_SYSTEM/DISPATCH-INBOX.md` → latest open `_SYSTEM/Cold_Handoffs/` entry if any.
- **At session close:** Session_Logs entry (with §N tier fields + token/cost line) · STATE.md regenerated · COST-REGISTER.md row appended (after the round's audit) · capture rulings on sight, same turn.
- Continuity artifacts are named `YYYY-MM-DD_ROUND-ID_...` (spec §H); `_SYSTEM/Session_Logs/` and `_SYSTEM/Cold_Handoffs/` are append-only.

## Repo map
```
sbp-os
├── CLAUDE.md            ← this file (durable; changes only on identity/boundary change)
├── README.md
├── legacy/              ← the retired May-2026 site, mirrored from Drive (before-state; not deployed)
├── site/                ← the new site source (lands post-gate, Step 2)
└── _SYSTEM/
    ├── CANON-INDEX.md   ← single source of truth for current canon versions
    ├── STATE.md         ← generated ~2-page snapshot; regenerated every close
    ├── Canon/           ← site skeleton, design directions, brand voice (versioned, gated)
    ├── Conventions/     ← pointer to the Family Substrate Spec
    ├── CAPTURE-QUEUE.md
    ├── DISPATCH-INBOX.md
    ├── COST-REGISTER.md
    ├── Cold_Handoffs/
    └── Session_Logs/
```
