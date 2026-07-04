# SCL — 2026-07-02 · SBP-HYGIENE-R1 (Branch-hygiene round — durable `production-holding` branch + `main` restoration built inert; no site-content changes)

**Mode:** Hygiene / repo-surgery (unit-scoped): sbp-os WRITE; brain-os read-only (exact scope per the relay: capture B-147 + Infra Registry SBP-website row; nothing else read). Dispatched by the Brain Foreman off brain-os **B-147** (operator rulings 2026-07-02). **Not a feature build** — zero site-content changes beyond the ordered folds; the live site was never touched; no DNS; nothing merged.
**Doer-tier:** Doer (main, **Fable** — first Fable-driven sbp-os round; prior rounds ran Opus with Fable down). In-container tooling only (git surgery + Astro `npm` builds — binary, no model tokens on the operator's environment).
**Audit-tier:** **RUN — operator-triggered** ("spin up a fable sub agent auditor"). Independent distinct-instance **Fable** subagent — **operator-selected, overriding the §K Opus-when-Doer-is-Fable default** (his call at the gate; W7 precedent for an operator model-override, in the other direction). Verdict: **PASS — zero nits.** Report: `_SYSTEM/Session_Logs/2026-07-02_SBP-HYGIENE-R1_Audit-Report.md`.

## What this round did
1. **Created `production-holding`** at `claude/busy-hamilton-jqwkgt`'s tip (`f2e2f5d`) and pushed — **same commit hash, byte-identical** to what Vercel production serves (auditor-verified). The live coming-soon gets a durable, clearly-named home instead of a random work branch. **Protected by convention: NEVER merges to `main`.** The one operator action — repointing Vercel's production branch to it (§O-guided, zero visible change, the page never blinks) — was queued with a baseline browser-check as Step 1; **not yet executed at this writing.**
2. **Built `main`'s restoration, inert, on `claude/sbp-os-production-holding-h3l1ks`** (4 commits on `main` @ `8bdcaab`):
   - `d7b9aaa` — **revert of PR #4's merge** (`8bdcaab`, `-m 1`): the coming-soon overlay off, the **full 13-page homepage back**; resulting tree **byte-identical to the W8 recovery point** `claude/fervent-davinci-uch9ig` @ `f9183ce` (auditor-verified empty diff). `main` never carried the inner-page holding noindex (auditor-confirmed — it lives only on the holding branch, where it stays), so "drop the noindex on main" resolved to *nothing to drop*; only the overlay came off.
   - `dc458a2` — **W9 close docs landed** (cherry-pick `-x` of `f2e2f5d`: W9 SCL + B-5/B-22/B-23 capture rulings + W9 STATE regen). Faithful patch (auditor-verified identical).
   - `bc3cb12` — **the stranded `friendly-meitner` screenshot-slots commit folded in** (cherry-pick `-x` of `8e2708d`, B-14: `ScreenShots.astro` + swap-ready slots on CRM / Operational Dashboard (featured) / IC + Marketing ("coming") + `public/screens/` asset dirs). One CAPTURE-QUEUE conflict resolved by keeping both row sets — auditor byte-compared every row against its origin: zero corruption.
   - `e9564a2` — **STATE regen + B-24**: the operator's **five-item launch backlog (B-147) recorded in STATE.md §1 as the standing launch gate list** (item 5, per-node demo videos, explicitly NOT a launch gate), branch map updated, B-24 capture row.
3. **Build-verified** the restoration branch: **13 pages green**; homepage = the full site (no coming-soon copy in `dist/`); `noindex` only on `/founders` (by design). Auditor independently rebuilt and confirmed.
4. **Audit (operator-triggered) = PASS, zero nits** — every claim reproduced: hashes, tree identity, patch fidelity, conflict-resolution integrity, B-147 correspondence, build output, safety invariants (main unmoved at `8bdcaab`; live branches unmoved at `f2e2f5d`; `vercel.json` untouched; no writes outside sbp-os; no secrets in commit messages).
5. **PR to `main` opened at close** (operator asked for the SCL + PR with the audit trigger): `claude/sbp-os-production-holding-h3l1ks` → `main`.

## Decisions / rulings (captured — see CAPTURE-QUEUE B-24)
- **Site STAYS coming-soon until the operator is satisfied** (operator, 2026-07-02; brain-os B-147 → local B-24).
- **The five-item launch backlog is the standing launch gate list** (STATE.md §1 carries the authoritative local copy): ① product screenshots in action (= JCV cross-unit session, B-23/B-14) · ② IC/Motion tab animation · ③ aesthetics redo (color scheme mostly) · ④ deeper value-prop coverage · ⑤ per-node demo videos (*eventual, NOT a launch gate*).
- **`production-holding` convention:** the durable holding branch never merges to `main`; launch remains a Vercel production-branch flip `production-holding` → `main`, no DNS change ever.
- **Auditor model = Fable this round** (operator override of the §K default at the gate; recorded, not smoothed).

## ⚠️ Flags for the Foreman / next session
- **The Vercel repoint is still pending** — until the operator flips production tracking `claude/busy-hamilton-jqwkgt` → `production-holding` (one click, §O-guided, zero visible change), the live site still hangs off the random-named work branch. **Do the repoint BEFORE merging the restoration PR** (ordering hygiene, not a hard dependency — production doesn't track `main` — but keep the recorded order).
- **After the repoint:** `claude/busy-hamilton-jqwkgt` is superseded (leave it until the repoint is verified; retire it at the operator's leisure).
- **Auditor watch-item (non-finding):** the launch gate list lives in three matching places (brain-os B-147 · local B-24 · STATE §1) — watch for drift in future rounds; STATE §1 is the authoritative local copy.
- **B-22 cutover loose ends still open:** `www` go-green/forward-to-apex (unverified since W9 close; operator browser-check owed) · remove the domain from Netlify (deliberately last).
- **A-15..A-25 still DRAFT** — the restoration PR merge is an operator ratification opportunity (his call; the Doer does not self-ratify).

## Audit (§K)
**RUN — operator-triggered.** Independent distinct-instance **Fable** subagent (operator-selected; §K default for a Fable Doer is Opus — override recorded) over `origin/main...claude/sbp-os-production-holding-h3l1ks` + the `production-holding` branch creation + brain-os B-147 fact-check. **Verdict: PASS, zero nits** (first clean-PASS-no-nits round on this repo). Report: `_SYSTEM/Session_Logs/2026-07-02_SBP-HYGIENE-R1_Audit-Report.md`. Measured: **56,118 tokens**.

## Token/cost (est.) — COST-REGISTER row appended this close (post-audit, §N)
Compact surgical round: git archaeology + branch surgery (revert + 2 cherry-picks + 1 conflict) + 2 Astro builds (binary, ~0 model tokens) + docs. **Doer (Fable) ≈ 200k est.** · **Mechanical** = builds/git (binary) · **Audit (Fable subagent) = 56,118 measured.** Subagents: 1 (auditor).

## Next session target (Foreman pickup)
1. **Operator: the Vercel repoint** (production branch → `production-holding`; live page verified identical before/after) — then **merge the restoration PR** (and ratify A-15..A-25 if so ruled).
2. **JCV demo-brand cross-unit session** (SBP + Dash + CRM + brain) — launch gate item ① / B-23; UP NEXT family-side per the SBP Road Map.
3. **Launch gate items ②–④** (IC/Motion tab animation · aesthetics redo · deeper value-prop) — feature rounds on a fresh build branch off restored `main`.
4. **B-22 loose ends:** `www` check + Netlify domain removal.

## Schedule status
Hygiene complete on the repo side; the fragile layout (live-off-a-work-branch + polluted `main`) is resolved pending the operator's one click and one merge. The launch runway is now clean: restored `main` = the launch branch; `production-holding` = the front door until the gate list (STATE §1) is satisfied; launch = a no-DNS production-branch flip.
