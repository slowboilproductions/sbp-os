# SBP-W7 Build Audit Report

- **Round:** SBP-W7 (build work after base `eed7145`)
- **Date:** 2026-06-17
- **Auditor:** Independent §K Auditor (a distinct instance from the W7 Doer) — read-only audit
- **Branch:** `claude/brave-noether-hmqw9a` @ `d9f4b69`
- **Scope:** 18 commits, 11 files (`git diff --stat eed7145..HEAD`): 5 new motion components (PageWipe, SiteDrift, AmsStackWheel, CrmChaos, DashConverge), BaseLayout wiring, Banner comment-only change, hero/copy rewrites on marketing/crm/operational-dashboard, CAPTURE-QUEUE A-23.
- **Build result:** `npm --prefix site run build` — **SUCCEEDS, 11 pages built** (2.49s, clean).

## VERDICT: PASS-WITH-NITS

No blockers. Every binding guardrail and ruling in scope holds: motion is reduced-motion-safe and no-JS-resilient, compliance chrome is never animated/obscured, the public-naming and Black-Company rulings are intact, no real client/brand/person data, no secrets, no pricing tables, no guaranteed-results claims, and no canon was self-ratified. The known CRM-pipe lesson is correctly fixed. Findings below are quality nits only.

---

## Blockers
None.

---

## Nits

### N1 — Wheel legend buttons are focusable while visually clipped (keyboard a11y)
`site/src/components/AmsStackWheel.astro:201-204` — once JS adds `.is-interactive`, `.ams-wheel__legend` is collapsed with the standard sr-only clip (`clip: rect(0 0 0 0)`) but the `<button>` children remain in normal flow and keyboard-focusable. A sighted keyboard user tabbing the page lands on invisible-but-focusable buttons (the `:focus-visible` outline at `global.css:40` will paint at a 1px clip box). The SVG `<g class="aw-slice">` focus listeners (`AmsStackWheel.astro:258`) are effectively dead since `<g>` is not natively focusable, so the clipped buttons are the only keyboard path. **Fix (optional):** this is the conventional sr-only tradeoff and acceptable, but if the operator wants clean keyboard UX, either make the visible slices the focus targets (add `tabindex="0"` + `role="button"` to the slice `<g>`s and an `aria-label`) or keep the legend buttons reachable as a real, visible "all pieces" list rather than clipped. Document as a known tradeoff if left as-is.

### N2 — `window` scroll/resize listeners accumulate across SPA navigations
All four scroll islands (`SiteDrift.astro:76-77`, `AmsStackWheel.astro:285-286`, `CrmChaos.astro:259-260`, `DashConverge.astro:187-189`) add `scroll`/`resize` listeners on `window` and never remove them. The per-element `dataset.wired` guard prevents a component from *re-binding* on `astro:after-swap`, so a given live component instance adds its listeners once — but a listener bound on a page that is later swapped away is not torn down (the element is gone, so its `update()` early-returns or no-ops, but the closure and listener persist). Over a long ViewTransitions session this is a slow leak of inert handlers. **Fix (optional):** register the per-page islands' listeners on the component root's lifetime, or add an `astro:before-swap` cleanup that removes listeners for components leaving the DOM. Low impact (handlers are rAF-gated and cheap); note as a hygiene follow-up, not a guardrail break.

### N3 — Marketing wheel + Infrastructure pillar overlap (already flagged by the Doer)
`site/src/pages/stack/marketing.astro:46` renders `<AmsStackWheel />` directly above the still-present Pillar-01 "Infrastructure" grid (lines 54-70), so the stack is presented twice (wheel slices vs. the six infra cards). This is **correctly surfaced** in A-23 ("the grid and the wheel currently overlap on the live preview… operator decision pending") and is an operator call, not a Doer error. Noted only so the auditor record matches the capture-queue flag. No action by the Doer required.

### N4 — Dead/duplicated reduced-motion belt (harmless)
`CrmChaos.astro:160` defines `@keyframes cpipe-flow` (marching-ants) which the global reduced-motion reset (`global.css:12-16`) already neutralizes via `animation-duration: 0.001ms`. The component does not separately disable `cpipe-flow` under reduced motion, relying on the global belt. This is correct and intentional, but worth a one-line comment for the next reader since the component disables `dwire`/`dhub-pulse` explicitly (`DashConverge.astro:150-151`) but CrmChaos leans on the global. Stylistic only.

---

## What was verified clean

**Build & scope**
- Build green, 11 pages, matches the claimed W7 surface; no stray files, no canon/STATE/CANON-INDEX mutation (only the A-23 CAPTURE-QUEUE row was added).

**Motion guardrails (A)**
- **prefers-reduced-motion:** every component is safe. PageWipe parks the band off-screen (`PageWipe.astro:46-51`) and the script early-returns (`:66`). SiteDrift early-returns its scroll loop (`SiteDrift.astro:56`). AmsStackWheel resets vars + returns before the scroll loop (`:215-218`, `:266`). CrmChaos early-returns before adding `.is-motion`, leaving pipes/buckets/zen in resolved state and the field static (`:216`, `:197-199`). DashConverge early-returns (`:165`), resolved "all-wired/lit" state renders. The global reset (`global.css:10-17`) is a second belt.
- **No-JS fallback:** all components resolve to meaningful static content. PageWipe never fires (no client nav). The wheel renders exploded with a full, readable `<ul>` legend (`AmsStackWheel.astro:116-125`, `.is-interactive` never added). CrmChaos shows pipes/buckets/zen + sr-only sentence. DashConverge shows wired hub + source chips + sr-only sentence (`--lit:1` default, `.is-motion` gating never applied).
- **transform/opacity-only & rAF:** all scroll loops drive `transform`/`opacity`/CSS custom-props only, each behind a single rAF throttle (`requestAnimationFrame` + `if (!raf)` guard), passive listeners.
- **No scroll-jacking:** every signature animates off `getBoundingClientRect()` as the section passes through the viewport; no `preventDefault`, no scroll trapping, no `scroll-snap` hijack.
- **CRM-pipe lesson (E):** confirmed fixed at `ade849e` — `pathLength`/`stroke-dashoffset` hiding dropped; pipes now gated by `opacity` (`CrmChaos.astro:173`) driven by funnel progress (`:245-250`), invisible until `funnel > ~0.35`. Buckets and zen also opacity-gated.

**Compliance & a11y (B)**
- PageWipe overlay is `pointer-events:none` + `aria-hidden="true"`, transient (~680ms, `forwards` then class cleared on `animationend`), and never persistently covers content (`PageWipe.astro:20,24-25,75-78`).
- SiteDrift sits behind content: `z-index:0` + `pointer-events:none`, clipped to a 760px top band, and BaseLayout lifts page content to `z-index:1` via `.main-content` (`BaseLayout.astro:59-63,71-76`; `SiteDrift.astro:23`). Old local `.mdrift` confirmed removed from marketing.astro (grep: no matches anywhere).
- Decorative SVG/visual layers are `aria-hidden`/`role="presentation"` (wheel SVG, chaos stage, converge wires/hub, banner). Meaningful content has accessible fallbacks: wheel `<ul>` legend (every name + full desc), CrmChaos sr-only sentence + visible buckets, DashConverge real source chips + sr-only sentence.
- Compliance set (privacy/terms/contact/business name/Charlotte NC/HTTPS/mobile) is untouched by W7 — no motion layer overlaps compliance text; SiteDrift is a top band only.

**Brand/family rulings (C)**
- **Black Company:** appears nowhere in source or built HTML (only an enforcement comment in `image-creation.astro:6`). Visible-text scan of built pages: zero matches.
- **Public naming:** "Operational Dashboard" used throughout; "Dash" and "AMS" appear only in code comments, never in visible/built text (verified by tag-stripped grep of dist). Wheel on-circle label is **"The Marketing Stack"** (`AmsStackWheel.astro:97-98`), not "AMS" — confirmed.
- **Four equal subunits:** no unit visually privileged; each subunit page carries its own signature, none elevated above the others.
- **Illustrative data only:** CRM nuggets (Eastside Wine & Spirits, Harbor Beverage, "Panthers fan", (704) 555-0148, $1,240) and dashboard tiles (4,812 / $18.4k / 27) read as clearly-illustrative placeholders; no real client/brand/person. Dashboard *source names* (Park Street, VIP, NABCA, Encompass, QuickBooks) are real industry data-platform/tool names used factually as "the feeds you already get" — not client/brand impersonation; acceptable and matches the operator hero copy.
- **No secrets (§O):** targeted scan clean (only `mask-image` CSS false positives).
- **No pricing tables / no guaranteed-results:** copy uses comparative analogies as voice (A-18: "half the cost", "$50k studio", "won't drain your tank") and capability claims; no rate card, all pricing routes to Contact. No promise of client commercial lift (A-17) — pain/situation framing only ("the bottle collects dust", "fly blind on depletions").

**Canon discipline (D)**
- No self-ratification: A-23 captured as **DRAFTED** with explicit "Doer builds to the live ruling, does not self-ratify" and "canon-lags-build" framing. No Canon/, CANON-INDEX, or STATE files mutated in W7.
- **Two competitor-intels kept distinct:** AmsStackWheel Social Manager = social-competitor scrubbing (built, defined); B-12 control-state competitor intel = Dash-side, still blocked — distinction is documented in both `AmsStackWheel.astro:14-17` and the A-23 row, not conflated.

**Banner (item 6)**
- Banner is back to static — the W7 diff is comment-only (4 lines explaining the cut sway); no `sway`/animation code present (`Banner.astro`, fully static SVG).
