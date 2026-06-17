# SBP-W8 Audit Report — the `/ai` "How We Use AI" walk + the "Meet the Founders" easter egg

**Date:** 2026-06-17 · **Round:** SBP-W8 · **Branch/tip:** `claude/fervent-davinci-uch9ig` @ `d38ad97` · **Scope:** `origin/main...HEAD`.
**Auditor:** distinct instance (Doer≠Auditor, §K), **Opus — explicitly requested and triggered by the operator** (the Doer does not self-initiate audits). *(A first audit attempt this session was a Doer-initiated misfire the operator corrected — "you NEVER kick off an audit. I do that"; this report is the operator-triggered run.)*
**Verdict: PASS-WITH-NITS — no blockers.**

## Feature 1 — `/ai` (the How-We-Use-AI walk)
- Nav "AI" placed **between "The Stack" and "Proof"**, desktop + mobile. Confirmed in dist.
- Walk order correct: intro/thesis → four node anchors (`#marketing`, `#crm`, `#operational-dashboard`, `#image-creation`) → `#brain` climax → on-page Trust section → CTA band.
- Four deep-links from the stack heroes (slugs match node IDs exactly) + four back-links + jump-nav all resolve. Anchors carry `scroll-margin-top` to clear the sticky nav.
- **Messaging (a) present tense** — no "coming soon"/"building"/"roadmap". PASS.
- **Messaging (b) walled/private led up front** — the "part that matters" block leads with "reasons over your own data — walled to you… never trains anyone else's model"; the IC node correctly frames training a model ON the brand's images as the product (no contradiction). PASS.
- **A-17** — capability described; no guaranteed lift/results/revenue. PASS.
- No bare "Dash"; no BC/Glen Cook/serialized-cinema; no rate card ("No rate card" is a disavowal).

## Feature 2 — `/founders` (the buried easter egg)
- Off-nav; reachable only from the About-page button. `noindex,nofollow` present on `/founders` and **only** there; `BaseLayout` default `noindex = false`, no bleed to other pages.
- Compliance footer (privacy/terms/contact, "Slow Boil Productions LLC", Charlotte NC) inherited and unobscured on `/founders`.
- About button is `.btn--primary` → gets the magnetic CTA. Both gag portraits exist in `site/public/founders/` and copy to `dist/`. founders→about back-link + about→founders link both resolve.
- Motion: only `data-anim="hero"` / `[data-reveal]` / `.btn--primary` magnetic — the established SiteMotion pattern (early-returns under reduced-motion / no-JS; magnetic gated to fine pointer). No autoplay/popup/scroll-jack.

### Operator-discretion notes (NOT defects — deliberate calls, logged for the operator's eye)
- **Profanity** on `/founders` (operator's verbatim script). Within discretion; page is noindex + off-nav, so no SEO / Ads-destination exposure.
- **"Her parents named her Claude" gag** — operator-authored creative copy on his own site; the one spot naming the underlying model, on a buried page. Within discretion.
- **A-4** — Brian's bio names Montana Whiskey / Sunshine Punch / Don Gato strictly as his **personal** first-person track record, not an SBP-ownership claim. Squarely within A-4 / About-page territory. Clean.

## Build & links
- `npm --prefix site run build` succeeds: **13 pages**, `/ai` and `/founders` among them. No broken internal links.

## Nits (cosmetic / non-blocking — operator chose to land as-is, logged)
- **N1** — `ai.astro` Brain-node climax has a doubled word ("the dashboard knows **knows** what marketing knows"). Present in source + dist. Trivial one-word fix; **carried, not swept** (operator's call to land as-is).
- **N2** — `site/public/founders/README.md` publishes to `dist/founders/README.md` (everything under `public/` ships). Harmless (unlinked internal swap note, reachable at `/founders/README.md`). Optional: relocate out of `public/` later. **Carried.**

**No blockers.** Site ships DRAFT; the operator holds the merge gate (and ratifies A-24 + A-25, alongside the carried A-15…A-23, with the merge).
