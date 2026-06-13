# SBP Website — Site Skeleton (sitemap · per-page purpose · content outline)

**Status:** v0.3 — **APPROVED at the operator's W2 skeleton gate (2026-06-13): "good start… capture now."** DRAFT pending merge ratification (a push is inert; the merge is live, §K Auditor PASS first). Operator may still tweak; this is the approved build basis. · **Date:** 2026-06-13 · **Label:** INSTANCE · **Originating record:** `_SYSTEM/Session_Logs/2026-06-12_SBP-W1_SCL.md` (founding) + W2 gate-answers round (this bump)
**Binding premises (operator rulings — brain-os CAPTURE-QUEUE B-7 / A-5; sbp-os A-1..A-12):** full reset of content and style; the site presents the **whole family as one operational stack** — **Marketing (AMS), CRM, Operational Dashboard, Image Creation** (still + motion, A-11) — every subunit shown up and running (A-12); **Black Company appears nowhere**; the operator's outbound go-to-market leads with CRM / Operational Dashboard, but the **site weights all subunits equally**; this is a skeleton — **no copy is drafted here**, outlines only.
**What changed v0.2 → v0.3:** **A-11** — Image Creation + Motion combined into **one subunit, "Image Creation"** (motion is a capability inside it); the A-7 either/or is removed — one sibling, one subpage. **A-12** — homepage rebalanced: **no privileged "two products up front" tier**; the stack is presented as four equal, operational peers (revises A-1's homepage-emphasis clause; A-1's Shape-2 equal-sibling *structure* stands and is reinforced).
**Earlier folds (v0.1 → v0.2, retained):** **A-1** Shape-2 umbrella nav · **A-2/A-3** **Proof** page (SSP/DGT/MWC) · **A-4** loose brand-relationship framing (no ownership claim) · **A-5** umbrella tab **"The Stack"**, nav = The Stack · Proof · About · Contact · **A-6** public names CRM / Operational Dashboard (never "Dash") · **A-8** **no pricing anywhere** (routes to Contact; 50 %+ silent) · **A-9** Google Ads folded inside Marketing, never a headline · **A-10** address = **Charlotte, NC**.
**Open nodes:** none in the skeleton. (Remaining gate items are operator decisions, not skeleton placeholders: approve v0.3 + pick a design direction.)

---

## 1. The site's one job

Make a brand owner who runs a developing CPG/spirits brand — or the distributor/supplier team around one — believe, within one page, that SBP runs a **real, operational stack**: serious marketing and serious tools, all up and running, at a level that doesn't insult them — and get them to reach out.

The old six-page site was an AMS-only compliance shell. The new site is a **family storefront** organized under one umbrella — **The Stack** — presented as **one operational whole**, every subunit shown live and equal (A-12):

- **The Stack (four equal, operational peers):**
  - **Marketing (AMS)** — the full marketing stack, with Google-Ads optimization folded inside (never a headline).
  - **CRM** — the CPG-native system a client runs their accounts in.
  - **Operational Dashboard** — distribution performance, sell-in vs sell-through truth.
  - **Image Creation** — brand-true imagery, **still and motion** (one subunit, A-11).
- **The house:** who SBP is, why the work is accessible (AI does the heavy lifting), the graduation promise.
- **The receipts:** **Proof** — brands SBP works with / builds for (seeded SSP, DGT, MWC), grown as the roster grows.

> **A-12 — homepage weighting:** the operator's *outbound go-to-market* leads with CRM / Operational Dashboard, but the *site* does **not** put those two "up front" in a way that subordinates the rest — that would minimize the stack and the other subunits. All four read as equally operational. Demo/contact CTAs are present throughout; CRM and Operational Dashboard naturally carry demo-forward CTAs because that's where the operator points prospects, but their **visual weight equals** Marketing and Image Creation.

## 2. Sitemap

Per the operator's Shape-2 ruling (A-1), all offerings live as **equal siblings under one umbrella tab, "The Stack"** (A-5) — and are presented as equally operational (A-12). Each has its own subpage. Image Creation is **one subunit** covering still + motion (A-11).

```
/                          Home — the family storefront (the whole stack, all operational)
/stack                     The Stack — umbrella overview of all offerings
/stack/marketing           Marketing (AMS) — full stack; Google-Ads optimization folded in
/stack/crm                 CRM
/stack/operational-dashboard   Operational Dashboard
/stack/image-creation      Image Creation — still + motion (one subunit, A-11)
/proof                     Proof — portfolio (SSP · DGT · MWC; grows)
/about                     The house: origin story, how we work, the graduation promise
/contact                   Demo request + all pricing inquiries route here
/privacy                   Privacy policy        (compliance — survives reset)
/terms                     Terms of service      (compliance — survives reset)
```

**Page count:** 10 pages (4 Stack subpages + Home + Stack overview + Proof + About + Contact + Privacy + Terms).

**Navigation (A-5, fixed):** **The Stack · Proof · About · Contact.** "The Stack" is the umbrella tab (an overview page at `/stack`, with the offerings reachable beneath it — as a dropdown and/or overview cards, a Step-2 build detail). Footer on every page: business name (**Slow Boil Productions LLC**), **Charlotte, NC** (A-10), contact, privacy, terms — the Google-Ads destination-requirements set (HTTPS, mobile-responsive, business name, contact, privacy, terms) holds on every page.

**Deliberately absent at v0.3:** blog/case-studies (no content engine yet — proof slots use the "Coming Soon" metric-grid pattern from the DGT pitch deck, structurally present, filled when first client metrics exist); **any pricing page or rate card** (A-8 — pricing is absent site-wide; every "what does it cost" lands on Contact, and the 50 %+ undercut figure is *not* published anywhere on-site).

## 3. Per-page purpose + content outline

### 3.1 Home `/`
**Job:** orient in 5 seconds, route in 15, and **look like a real operation** — every subunit up and running (A-12). Audience: brand owners (primary), distributor/supplier ops people (secondary).
1. **Hero** — single headline in the locked voice (≤10 words; candidates live in `brand-voice.md` §6, illustrative); subline naming who it's for (developing brands); primary CTA → demo / contact, secondary CTA → The Stack. The hero sells the **whole operational stack**, not one product.
2. **The Stack, even** — a single grid of **four equal offering cards** (Marketing · CRM · Operational Dashboard · Image Creation), **same visual weight** (A-12): what each is in one sentence, a concrete capability or two, a screenshot/visual slot showing it live, CTA to its subpage. No privileged product tier, no minimized "rest of the stack" band. CRM and Operational Dashboard carry demo-forward CTAs (operator's outbound lead) without dominating the layout.
3. **Why it's accessible** — the honest-AI paragraph (chef-knife frame): AI does the heavy lifting, judgment stays human, that's why serious work is within reach for developing brands. **No price, no number** (A-8); cost questions route to Contact.
4. **Proof slot** — "Coming Soon" metric grid (revenue lift · time saved · content velocity · coverage), structural placeholder; links to `/proof`.
5. **The graduation promise** — short band: we grow you until you outgrow us.
6. **Footer** (compliance set + Charlotte, NC).

### 3.2 The Stack `/stack`
**Job:** the umbrella overview (A-1/A-5) — show the whole house on one page and route to each offering. This is where the "we're a connected set of tools and marketing, not a one-trick shop" story is told plainly.
1. **Hero** — what The Stack is: the marketing and the tools a developing brand needs to compete, under one roof.
2. **Offering cards** — one per sibling, equal weight (A-12): **Marketing (AMS)**, **CRM**, **Operational Dashboard**, **Image Creation** (still + motion, A-11) — each a one-liner + CTA to its subpage.
3. **How it fits together** — short band on the through-line (same house, same voice, built for the same brands) — outline only.
4. **CTA** — demo (CRM / Operational Dashboard) / Contact.

### 3.3 The Stack — CRM `/stack/crm`
**Job:** convince a CPG/spirits brand's owner or sales lead this is the system their field reality fits into — accounts, depletions, call activity — and get the demo.
1. **Hero** — what it is for whom; CTA: book a demo / Contact.
2. **The problem** — running accounts out of spreadsheets and a generic CRM that doesn't know what a depletion is.
3. **What it does** — 4–6 capability blocks drawn from the real build (account & contact management for retail outlets; depletion tracking; rep call activity & territory workflow; brand-level walls so each brand sees only its own world). *Outline only — final claims verified against crm-os before copy drafts (Step 2).*
4. **Built for CPG** — the category-native angle: keys, SKUs, distributors are first-class, not customizations.
5. **Screenshot/walkthrough slot.**
6. **Demo CTA band** — pricing inquiries route to Contact (A-8; no rate card, no posture line on-page).

### 3.4 The Stack — Operational Dashboard `/stack/operational-dashboard`
**Job:** sell the distribution-performance dashboard — sell-in vs sell-through truth — as the daily tool. Quality bar context: operator ruled this presentation is *world-class, sharp, very user-friendly* (brain-os relay); the page must look like that bar. (Public name "Operational Dashboard" per A-6; internal unit name "Dash" never appears.)
1. **Hero** — know what actually moved, everywhere you're sold; demo CTA.
2. **The problem** — distributor reports in five formats, a month late, no single picture of sell-through.
3. **What it does** — capability blocks from the real build (depletion/state tabs; load-in & AR; open orders; inventory; summary front page), stated as outcomes. *Same verification rule as §3.3.*
4. **Data in, answers out** — ingests the feeds brands already get (distributor/market data drops), normalized into one picture.
5. **Screenshot slot** (the strongest single asset on the site when available).
6. **Demo CTA band** — pricing inquiries route to Contact (A-8).

### 3.5 The Stack — Marketing (AMS) `/stack/marketing`
**Job:** carry the original SBP offer — real marketing at a fair level for developing brands — now as the marketing arm of the Stack.
1. **Hero** — the agency-alternative claim, voice-forward.
2. **Service blocks** — strategy & positioning; content & creative; websites that convert; **digital marketing that moves product** — and **inside digital marketing, Google-Ads optimization is one element among several** (A-9: folded in, *never its own headline tile or hero*). The block list reads as a full stack, not a Google-Ads shop.
3. **How the work stays affordable** — the AI-honesty paragraph, deeper: trained on your brand so every asset feels like you. No price/number (A-8); cost → Contact.
4. **CTA** — Contact.

### 3.6 The Stack — Image Creation `/stack/image-creation`  (A-11)
**Job:** sell brand-true imagery — **still and motion from one subunit** (A-11: IC + Motion are one offering, "Image Creation"; motion is a capability within it, not a separate sibling).
1. **Hero** — brand-true imagery without the $50k shoot; CTA: Contact.
2. **Still imagery** — product/lifestyle stills trained on the brand; before/after or sample slot.
3. **Motion** — short-form motion/video from the same trained model; sample slot. *(Distinct from Black Company, which appears nowhere on the site — this is SBP's motion-imagery capability, not BC.)*
4. **One engine, two outputs** — the coupling story: the same trained-on-your-brand model drives both stills and motion (the reason they're one subunit).
5. **How it stays affordable** — the AI/knife frame; no price (A-8); cost → Contact.
6. **CTA** — Contact.

### 3.7 Proof `/proof`  (A-2 / A-3 / A-4)
**Job:** show that SBP's work is real — the portfolio page (A-2), named **"Proof"** with the alcohol-proof double entendre noted as part of the appeal (A-3). Seeded with **SSP, DGT, MWC**; built to grow as the roster grows.
1. **Hero** — short, voice-forward ("Proof, not promises").
2. **Brand entries** — one block each for **SSP**, **DGT**, **MWC**: what SBP did for them (work shown), framed as **brands SBP works with / builds for** — **no ownership claim, no "our own brands" language anywhere** (A-4). Logo/visual + a line of work scope; metrics slots use the "Coming Soon" pattern until real numbers exist.
3. **Grow-as-we-go** — structural room for more entries.
4. **CTA** — Contact / demo.
> **A-4 guardrail:** SBP does not own SSP/DGT/MWC. The operator's personal credibility ("runs spirits brands every day") is **About-page, personal territory** (§3.9) — never an SBP-ownership claim on Proof.

### 3.8 Contact `/contact`  (A-8 / A-10)
**Job:** zero-friction demo request **and the single destination for every pricing question** (A-8). Email (`hello@slowboilproductions.com`), business name + **Charlotte, NC** (A-10), a short form ⟨form vs mailto is a Step-2 stack decision⟩, and which-offering interest (Marketing · CRM · Operational Dashboard · Image Creation). No popups, no chat widgets.
> **A-10 watch-item:** Charlotte is correct sitewide. If the live Google-Ads account lists **Indian Trail**, flag the mismatch to the operator before any Ads-destination check — do not silently diverge.

### 3.9 About `/about`
**Job:** the trust page — the origin story is the differentiator (locked May 2026, carried forward; terminology lock applies).
1. **The wall** — origin story condensed from the locked positioning doc.
2. **The belief** — "brands that deserve to win are losing because of money, not merit."
3. **How we use AI** — the chef-knife metaphor, stated plainly; no AI mystique.
4. **The house** — one honest paragraph: SBP runs a connected set of tools and units (marketing, CRM, the operational dashboard, image and motion creation) built for the same brands. **This is the one place the operator's personal track record can live** ("runs spirits brands every day") — as *personal* credibility, never an SBP-ownership claim over SSP/DGT/MWC (A-4).
5. **The graduation promise** + closing line ("You didn't come this far to fold. Let's get to work." — locked, carries forward).

### 3.10–3.11 Privacy `/privacy` · Terms `/terms`
**Job:** compliance continuity (Google Ads destination requirements). Content carried/updated from the legacy pages — reviewed, not creatively rewritten; voice-neutral plain language; business address shown as **Charlotte, NC** (A-10). These pages exist on day one of any cutover; the domain never serves without them.

## 4. What approval here unlocks
Operator approves this skeleton **+ picks one direction from `design-directions.md`** → Step 2: stack proposal, then build in this repo. Until then: no copy, no code.

---

*sbp-os canon — DRAFT v0.3, W2. INSTANCE (SBP-specific). Ships for the operator's skeleton gate; the merge is the ratification. No open nodes remain in the skeleton.*
