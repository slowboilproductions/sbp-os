# 2026-07-02 · SBP-HYGIENE-R1 · Independent Audit Report

**Auditor:** Independent distinct-instance subagent (Family Substrate Spec §K), **Fable** — operator-selected this round, overriding the §K Opus-when-Doer-is-Fable default. Audit-only: no writes, no commits, no pushes. brain-os read READ-ONLY for one fact (B-147).
**Round under audit:** SBP-HYGIENE-R1 (2026-07-02), branch-hygiene round dispatched off brain-os CAPTURE-QUEUE **B-147**.
**Scope audited:**
- `origin/main` @ `8bdcaab` (invariant: unchanged)
- `origin/production-holding` @ `f2e2f5d` (new durable holding branch)
- `origin/claude/busy-hamilton-jqwkgt` @ `f2e2f5d` (live-serving source)
- `origin/claude/sbp-os-production-holding-h3l1ks` @ `e9564a2` (this round's build branch: `d7b9aaa` → `dc458a2` → `bc3cb12` → `e9564a2` on top of `8bdcaab`)
- Reference points: `origin/claude/fervent-davinci-uch9ig` @ `f9183ce` (W8 recovery point), `origin/claude/friendly-meitner-l7hefj` @ `8e2708d` (stranded slots commit), `origin/fallback-1` @ `57f5363`
- brain-os `_SYSTEM/CAPTURE-QUEUE.md` row B-147 (read-only fact check)

`git fetch origin --prune` run first; all findings below are against fresh remote refs.

---

## Checks run and results

### 1. `production-holding` — PASS
- `git rev-parse origin/production-holding` = `f2e2f5d290142a1bef1276e0d201010db2bf151c` = `git rev-parse origin/claude/busy-hamilton-jqwkgt`. **Same commit hash** — stronger than byte-identical trees; diff is trivially empty. Claim verified.

### 2. Build branch structure — PASS (all four commits verified)
- `git log origin/main..origin/claude/sbp-os-production-holding-h3l1ks` shows **exactly 4 commits**; `git merge-base` with `origin/main` = `8bdcaab`. Structure claim verified.
- **`d7b9aaa` (revert):** parent is `8bdcaab` (`git rev-parse d7b9aaa^`), consistent with a `-m 1` revert of the merge. `git diff d7b9aaa origin/claude/fervent-davinci-uch9ig` → **empty**. Resulting tree is byte-identical to the W8 recovery point, exactly as claimed.
- **`dc458a2` (cherry-pick of `f2e2f5d`):** `diff <(git show f2e2f5d) <(git show dc458a2)` on the patch bodies → **identical patch** (same 3 files: CAPTURE-QUEUE.md ±4, STATE.md ±26, new `_SYSTEM/Session_Logs/2026-06-18_SBP-W9_SCL.md` +53). `-x` trailer present ("cherry picked from commit f2e2f5d…"). Faithful.
- **`bc3cb12` (cherry-pick of `8e2708d`):** `diff` of the two patches restricted to `site/` → **identical** (12 site files, ScreenShots.astro + slots + READMEs + global.css, matching stat line for line). `-x` trailer present. The `_SYSTEM/CAPTURE-QUEUE.md` conflict resolution verified: the branch-tip file contains B-14, B-22, B-23 exactly once each, and byte-compare of each row against its origin (**B-14 vs `8e2708d` on friendly-meitner: identical; B-22 and B-23 vs `f2e2f5d` on busy-hamilton: identical**) shows zero corruption. Full-file diff of CAPTURE-QUEUE.md (busy-hamilton tip vs build tip) shows **exactly two added lines — the B-14 row and the B-24 row — and nothing else**. Clean resolution.
- **`e9564a2` (STATE regen + B-24):** touches only `_SYSTEM/CAPTURE-QUEUE.md` (+1 row) and `_SYSTEM/STATE.md`. Factual claims spot-checked against repo reality — all true:
  - `production-holding` = busy-hamilton tip `f2e2f5d` ✓ (verified, check 1)
  - `main` still the PR #4-polluted tree ✓ (`origin/main` = `8bdcaab`; its `site/src/pages/index.astro` is the coming-soon page — confirmed by content inspection)
  - "main never carried the inner-page noindex" ✓ — `git grep noindex` on `origin/main` `site/src/` hits only `BaseLayout.astro` (the prop mechanism) + `founders.astro`; the ten inner-page noindex hits exist **only** on `production-holding`/busy-hamilton
  - `fallback-1` @ `57f5363` ✓; fervent-davinci kept and tree-restored ✓; `claude/exciting-rubin-2mux8k` (B-21 orphan) exists ✓
  - **Five-item launch gate list vs brain-os B-147:** read `/home/user/brain-os/_SYSTEM/CAPTURE-QUEUE.md` line 288 (B-147, 2026-07-02). STATE.md §1 items ①–⑤ match B-147's items (1)–(5) faithfully, including **item 5 (per-node self-serve demo videos) explicitly marked "eventual requirement, explicitly NOT a launch gate — may launch before these exist"** — same qualifier as B-147. "Site stays coming-soon until the operator is satisfied" carried verbatim in both B-24 and STATE. ✓

### 3. noindex — PASS
- Build branch `site/src/`: noindex appears only in `BaseLayout.astro` (the opt-in prop, default `false`) and `founders.astro` (by design, "buried gem"). **No inner-page noindex.** ✓
- Holding branch keeps its inner-page noindex (about, ai, proof, stack/*) — correct and not flagged, per the work order.

### 4. Build — PASS
- `npm run build` in `/home/user/sbp-os/site` on the checked-out build branch (`e9564a2`, working tree clean before and after): **"13 page(s) built" — green**, 13 `index.html` files in `dist/`.
- `dist/index.html` is the **full-site homepage** (hero/StackGrid/StackTour; zero occurrences of the coming-soon "train a-comin" copy).
- `grep -rl noindex dist/ --include=*.html` → **only `dist/founders/index.html`**. ✓

### 5. Safety invariants — PASS
- `origin/main` = `8bdcaab` — **nothing merged to main**; the restoration sits inert on the build branch. ✓
- Live-serving branches: busy-hamilton and production-holding tips are both `f2e2f5d` itself — **zero commits beyond it**. Live site untouched. ✓
- Full file list of the 4 commits (`git diff --name-only origin/main..build-tip`): only `_SYSTEM/` docs and `site/` sources. **`vercel.json` untouched** (explicit diff: empty); no DNS/infra files anywhere in the changeset. ✓
- No writes outside sbp-os: `/home/user/brain-os` working tree clean (`git status --porcelain` empty, tip `05f9397`, an unrelated brain-side merge). sbp-os working tree clean, no stray staged/untracked changes. ✓ (Live DNS/Vercel state is not verifiable from this container; STATE correctly attributes those facts to the brain-os Infra Registry and marks the `www` check as still owed — no overclaim.)
- Commit messages of all four commits read in full: **no secrets** (session URLs and co-author trailers only; cherry-picks correctly preserve the original Opus attributions).

### 6. Records quality — PASS
- **B-24** is accurate and honest: records the operator's "site STAYS coming-soon" ruling verbatim-in-substance, the never-merge-to-main convention for the holding branch ("protected by convention", "merges nowhere"), the push-is-inert framing ("main-restoration branch pushed, inert; gates open: operator Vercel repoint (before merge) → audit → PR merge"), and correctly cites B-147 as the brain-side source.
- **STATE.md** does not smooth: canon-lag flagged (A-15..A-25 DRAFT, "Doer does not self-ratify"), the B-22 cutover loose ends kept open with the `www` check explicitly "unverified since W9 close", the Johnny Cash IP flag re-carried ("operator's risk"), item 3's future canon-amendment consequence pre-flagged, and the process locks restated (never merge production-holding/busy-hamilton into main; §O for any live step; Doer doesn't self-close).
- The W9 SCL lands with correct spec-§H naming (`2026-06-18_SBP-W9_SCL.md`). This round's own SCL/COST row is correctly deferred to the operator-triggered post-audit close and says so.

---

## Findings

None. Every claim in the Doer's report was independently reproduced: hashes, tree identity, patch fidelity, conflict-resolution integrity, B-147 correspondence, build output, and all safety invariants. No discrepancies found that rise to BLOCKER or NIT.

One non-finding observation for the record (no action required): the launch gate list now lives in three places (brain-os B-147, local B-24, STATE §1) — they match today and B-24 declares the pointer chain explicitly, so this is a watch-item for future drift, not a defect of this round.

---

## Verdict

**PASS**

Gates remain with the operator, in the recorded order: (1) Vercel production repoint → `production-holding` (verified zero-change), (2) this audit (done), (3) PR merge of `claude/sbp-os-production-holding-h3l1ks` into `main`. The holding branch never merges to `main`.
