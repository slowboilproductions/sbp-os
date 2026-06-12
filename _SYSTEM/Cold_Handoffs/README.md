# Cold_Handoffs — sbp-os

Forward continuity to a cold session, **append-only** (Family Substrate Spec §J). Entries are named `YYYY-MM-DD_ROUND-ID_CCH.md`, hard-capped at ~2 pages, and carry: round-id · `Doer-tier:` / `Audit-tier:` · orient-first read order (≤ ~6 files) · already-decided · run order · out-of-scope.
