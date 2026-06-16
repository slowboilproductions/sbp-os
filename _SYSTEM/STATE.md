# STATE — sbp-os (generated snapshot)

**As-of:** 2026-06-16 close · round **SBP-W4** (design pivot → 70s-Retro · copy passes · motion layer started) · _build branch `claude/sbp-os-site-build-step2-4ljx5x` @ `0726a00`(+close), ~31 commits ahead of `main` (`625ab9a`); **inert — nothing merged, nothing on `slowboilproductions.com`**. Pre-motion base frozen on branch `fallback-1` @ `57f5363`._

1. **Current canon versions** (`_SYSTEM/CANON-INDEX.md`, RATIFIED at W2): `site-skeleton.md` **v0.3** · `design-directions.md` **v0.3 ("Control Room")** · `brand-voice.md` **v0.4**. **⚠️ The build has moved well past the canon — DRAFT amendments A-15 → A-22 pending:** spirits-first voice, Proof-as-craft, pricing analogies, **the whole 70s-Retro pivot (A-19, supersedes "Control Room")**, outcome-first copy doctrine (A-20), About-as-whole-family (A-21), voice tweaks (A-22). Canon docs still read pre-pivot. **Ratify + bump at the operator merge gate; Doer does not self-ratify.** Flag, don't action.

2. **W4 result:** **(a)** Full **design pivot off Control Room → 70s-Retro "Analog Console"** (A-19): warm greige ground, Harvest Gold/Burnt Orange/Chocolate Brown, chocolate text, black live-data, chocolate-ink logos, the **S-jog tricolor "sunset" banner**. **(b)** Copy: outcome-first doctrine (A-20), About → whole-family (A-21), voice tweaks (A-22), Home/Dashboard/IC head edits. **(c)** CTAs → email (`mailto:hello@slowboilproductions.com`); recorded-demo parked (B-10). **(d)** Motion layer started (B-7): tab-driven "tour the stack", live hero dashboard (tilt + ambient), and the **Image Creation scroll showcase** (operator's "gold"). Paused to capture.

3. **The site (as built):** Home · The Stack · 4 equal subunits (**Marketing · CRM · Operational Dashboard · Image Creation**) · Proof (craft, not lift) · About (whole-family first-person) · Contact (compliance; form handler = Step-3) · Privacy · Terms. **70s-Retro skin** · spirits/bev-alc first · no rate card (analogies OK) · "Operational Dashboard" never "Dash" · BC nowhere · Charlotte NC · chocolate-ink temp logo.

4. **Motion layer (B-7) status:** **LOCKED** — tab "tour the stack" (`StackTour.astro`), pointer-depth + ambient life (`DashboardPanel.astro`), View Transitions. **IC signature showcase built** (`BottleStudio.astro`: studio→360→stills→motion; **24-frame placeholder turntable + swap scaffolding + `public/ic-360/README.md`**). **Next up: the other 3 unit signatures** — Marketing drift / CRM data-rows / Dashboard z-push — then the rest of the core set.

5. **⭐ IC showcase — what's left to finish (see the W4 CCH for the exact spec):** **Phase A** (360 turntable) = real studio shots, operator shooting **Sunshine Punch this week** → drop frames in `public/ic-360/`, set `FRAMES`. **Phase B** (gallery) = **LoRA-generated images off the Phase-A shots** (NOT camera, NOT generic AI) → `stills` array. **Phase C** (motion) = LoRA clip → `motionSrc`. **B & C wait on the brand LoRA** (worth the wait); A lands this week. Swap is art-only, no logic rebuild.

6. **Open items** (`_SYSTEM/CAPTURE-QUEUE.md`): **A-19..A-22** DRAFT (ratify at gate) · **B-7** in progress · **B-10** parked (CTAs→email; confirm `hello@` routing at Step-3) · **B-11** resolved/stood down (no pricing/case-studies/chat; keep A-19) · **B-12** control-state competitor-intel — **BLOCKED on operator definition, no copy until defined** · **B-4** Ads-token status · **B-5** hosting (Step-3) · **A-10** watch-item (Indian Trail vs Charlotte).

7. **Audit:** **not run** (build inert / pre-merge). §K independent distinct-instance audit runs **before the merge ask**, over the full `site/` + **A-15..A-22**; **COST-REGISTER row deferred** with it (§N).

8. **Branch / main:** `main` = **`625ab9a`** (W2 canon-only) · build branch **`claude/sbp-os-site-build-step2-4ljx5x`** (all W3+W4 work; inert) · **`fallback-1`** @ `57f5363` (frozen pre-motion 70s base).

9. **Last round:** SBP-W4 — `_SYSTEM/Session_Logs/2026-06-16_SBP-W4_SCL.md`; cold handoff `_SYSTEM/Cold_Handoffs/2026-06-16_SBP-W4_CCH.md`. (W2 audit report remains the latest audit on file.)

10. **Next action / gates:** build the **3 remaining unit motion signatures** → finish the core motion set → **finish IC when assets land** → **§K audit → merge ask** (ratify A-15..A-22) → **Step-3 deploy gate** (§O cutover; site never goes dark, compliance always present).
