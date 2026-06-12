# COST-REGISTER — sbp-os

Append-only measure-then-tune ledger (Family Substrate Spec §N). One row per round, written **once at round close, after that round's audit has run** — never pre-seeded, never edited.

| Date | Round-id | Driving model | Est. total tokens | By-tier split (Doer / Mechanical / Audit) | Audit model + tokens | Subagents | Notes |
|---|---|---|---|---|---|---|---|
| 2026-06-12 | SBP-W1 | Fable | ~750k est. | ~400k est. / ~285k (one measured 133,729, one est. ~150k) / 64,444 measured | Opus · 64,444 | 3 (mirror ×2, auditor ×1) | Founding round (substrate + legacy mirror + skeleton DRAFTs). Audit PASS-WITH-NITS, nits actioned at close. Cost lesson: polling a subagent's transcript dumps it into main context — poll files instead. |
