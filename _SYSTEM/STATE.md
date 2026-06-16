# STATE — sbp-os (generated snapshot)

**As-of:** 2026-06-16 close · round **SBP-W5** (motion layer finished — 3 unit signatures + build-first core — and §K-audited PASS-WITH-NITS) · _build branch `claude/exciting-rubin-2mux8k` @ `733350e`, forked from CURRENT `main` (`9778bb9`, the W3/W4 checkpoint merge), 2 commits ahead; **inert — nothing merged, nothing on `slowboilproductions.com`**. Pre-motion base still frozen on branch `fallback-1` @ `57f5363`._

1. **Current canon versions** (`_SYSTEM/CANON-INDEX.md`, RATIFIED at W2): `site-skeleton.md` **v0.3** · `design-directions.md` **v0.3 ("Control Room")** · `brand-voice.md` **v0.4**. **⚠️ The build has moved well past the canon — DRAFT amendments A-15 → A-22 pending:** spirits-first voice, Proof-as-craft, pricing analogies, **the whole 70s-Retro pivot (A-19, supersedes "Control Room")**, outcome-first copy doctrine (A-20), About-as-whole-family (A-21), voice tweaks (A-22). Canon docs still read pre-pivot. **Ratify + bump at the operator merge gate; Doer does not self-ratify.** Flag, don't action.

2. **W5 result — the motion layer (B-7) is feature-complete and audited.** A single accessible **Motion island** (`site/src/components/Motion.astro`, wired once in `BaseLayout`) drives everything, gated behind an inline `html.motion` boot-class added **only when JS is on AND `prefers-reduced-motion` is off** (1800ms watchdog) → **no-JS / reduced-motion render fully static + visible.** Built this round: the **three remaining per-unit signatures** + the **build-first core** (below). **§K audit = PASS-WITH-NITS** (9/9 constraints PASS; nits W5-1/W5-2 swept).

3. **The site (as built):** Home · The Stack · 4 equal subunits (**Marketing · CRM · Operational Dashboard · Image Creation**) · Proof (craft, not lift) · About (whole-family first-person) · Contact (compliance; form handler = Step-3) · Privacy · Terms. **70s-Retro skin** · spirits/bev-alc first · no rate card (analogies OK) · "Operational Dashboard" never "Dash" · BC nowhere · Charlotte NC · chocolate-ink temp logo. 11 pages build green.

4. **Motion layer (B-7) — DONE for the build-first scope:**
   - **Marketing → multi-layer drift** — sunset+grid parallax backdrop scrolls slower than fg copy (clamped).
   - **CRM → staggered data-rows** — a `.rec` account book populates row-by-row at varied speeds (illustrative data).
   - **Operational Dashboard → z-axis push** — `[data-zpush]` panel scales/comes forward (on the wrapper, not the tilt element).
   - **IC → signature showcase** — `BottleStudio.astro` (studio→360→stills→motion), unchanged this round (still the 24-frame placeholder).
   - **Core:** hero boot-up count-up (`DashboardPanel`) · scroll reveals (Home + stack + Proof/About) · magnetic CTAs + cursor-aware card glow (fine-pointer) · View Transitions (already on). Tab-tour + pointer-depth/ambient LOCKED from W4.

5. **⭐ IC showcase — what's left to finish (see the W4 CCH for the exact spec; unchanged):** **Phase A** (360 turntable) = real studio shots, operator shooting **Sunshine Punch** → drop frames in `public/ic-360/`, set `FRAMES`. **Phase B** (gallery) = **LoRA-generated images off the Phase-A shots** → `stills` array. **Phase C** (motion) = LoRA clip → `motionSrc`. **B & C wait on the brand LoRA**; A lands on the shoot. Swap is **art-only, no logic rebuild.**

6. **Open items** (`_SYSTEM/CAPTURE-QUEUE.md`): **A-19..A-22** DRAFT (ratify at gate) · **B-7** signatures+core DONE (remaining: IC asset swap + operator visual-tuning pass) · **B-10** parked (CTAs→email; confirm `hello@` routing at Step-3) · **B-11** resolved/stood down · **B-12** control-state competitor-intel — **BLOCKED on operator definition, no copy until defined** · **B-4** Ads-token status · **B-5** hosting (Step-3) · **A-10** watch-item (Indian Trail vs Charlotte).

7. **Audit:** **RUN this round** — independent distinct-instance auditor (general-purpose CC, Opus, read-only) over the W5 changeset + full-site constraint sweep → **PASS-WITH-NITS** (nits W5-1/W5-2 swept). COST-REGISTER row appended post-audit (W5). _Note: W3/W4 never got cost rows (checkpoint-merged without a §K audit) — gap recorded, not back-filled._

8. **Branch / main:** `main` = **`9778bb9`** (W3/W4 checkpoint merge) · build branch **`claude/exciting-rubin-2mux8k`** @ `733350e` (W5 motion finish; inert) · **`fallback-1`** @ `57f5363` (frozen pre-motion 70s base).

9. **Last round:** SBP-W5 — `_SYSTEM/Session_Logs/2026-06-16_SBP-W5_SCL.md`; cold handoff `_SYSTEM/Cold_Handoffs/2026-06-16_SBP-W5_CCH.md`.

10. **Next action / gates:** **operator visual-tuning pass** on the motion → **finish IC when assets land** (art-only swap) → **merge ask** (ratify A-15..A-22; reconcile design-directions/brand-voice) → **Step-3 deploy gate** (§O cutover; site never goes dark, compliance always present).
