# CAPTURE-QUEUE — sbp-os

**Capture-on-sight ledger** (Family Substrate Spec §F). Two registers: **(A) canon amendments** (touch a canon doc — DRAFT amendment + operator ratification, batched) and **(B) build-time confirmations** (must not be lost; not canon text). Statuses: `QUEUED → DRAFTED → RATIFIED / CONFIRMED / DROPPED` (never delete; flip status with a note). Read at session start alongside the index, `STATE.md`, and any open Cold Handoff. The repo is the memory, not the session.

**Inherited binding rulings (captured brain-os-side; recorded here as standing law for this lane, not re-opened):** B-5 (infrastructure facts), B-6 (no popup forms — ask in plain chat), B-7 (full reset scope; skeleton-first; old design system dead; driver = CRM/Dash client acquisition), B-8 (brand voice = starting point, deepen don't discard), A-5 (BC appears nowhere on the site) — all brain-os `_SYSTEM/CAPTURE-QUEUE.md`, 2026-06-12.

---

## Register A — canon amendments

| ID | Captured | Touches | Item | Status |
|---|---|---|---|---|

## Register B — confirmations / open asks

| ID | Captured | Item | Status |
|---|---|---|---|
| B-1 | 2026-06-12 | **CRM + Dash public naming/positioning.** How are the CRM and Dash offerings named and positioned publicly? (Internal unit names may not be the outward product names.) Asked at the W1 skeleton presentation; skeleton uses ⟨placeholders⟩ pending the answer. | QUEUED |
| B-2 | 2026-06-12 | **IC / Motion public visibility.** What of IC (still image) and Motion is public on the site — named offerings, an unnamed capability inside AMS services, or omitted for now? Asked at W1. | QUEUED |
| B-3 | 2026-06-12 | **Pricing vs contact-for-demo.** Does the site show pricing / a pricing posture (e.g. the 50 %+ undercut claim) or route everything to contact-for-demo? Asked at W1. | QUEUED |
| B-4 | 2026-06-12 | **Google Ads developer-token application status.** In flight / approved / not yet submitted? Compliance pages survive any cutover regardless; confirm before anything live changes (Step 2 constraint, per the W1 relay). Asked at W1. | QUEUED |
| B-5 | 2026-06-12 | **Hosting call — deferred by design to the deploy gate (Step 3).** Keep Netlify (zero DNS change) vs consolidate on the operator's existing Vercel account. Not asked until the build gate passes. | QUEUED (deferred) |
| B-6 | 2026-06-12 | **Business-address inconsistency (found during the legacy mirror).** The legacy site's contact page and footers say **Charlotte, NC**; the Google-Ads token checklist (ams-os) says **Indian Trail, NC** as the business address. Which is correct for the new site + Ads compliance? Asked at W1. | QUEUED |
