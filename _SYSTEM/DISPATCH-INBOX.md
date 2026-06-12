# DISPATCH-INBOX — sbp-os

One row per inbound/outbound dispatch (Family Substrate Spec §G). Statuses: **ACTIVE** (live intent, not fully executed) · **ACTIONED** (executed; historical record) · **SUPERSEDED** (premise changed; do not act). Status metadata only — dispatch bodies are never edited.

| ID | Date | Direction | Dispatch | Status |
|---|---|---|---|---|
| D-1 | 2026-06-12 | Inbound (Brain Foreman) | **W1 Website-Reset Build relay** — brain-os `_SYSTEM/Outbound_Flags/2026-06-12_SBP-Site_Website-Reset_Build-Relay_DRAFT.md`. Step 0 (substrate standup + legacy mirror) and Step 1 (skeleton, design directions, voice proposal as DRAFT canon) executed at W1; Steps 2–3 (build, deploy) gated on operator approval of skeleton + a design direction. | ACTIVE — Steps 0–1 executed, gate pending |
