---
name: frontend-design
description: SBP house frontend-design skill for the slowboilproductions.com site. Use whenever building, restyling, or reviewing any page, component, token layer, or visual sample in site/ — it defines the execution craft (typography, color, layout, motion, anti-slop rails) and the screenshot-grade loop every visual goes through before the operator sees it.
---

<!--
PROVENANCE (SBP-AESTHETIC-PIVOT-R1, 2026-07-05 — adapted, audited copy; never a live third-party pull):
  BASE:  Anthropic "frontend-design" skill — github.com/anthropics/claude-code
         plugins/frontend-design/skills/frontend-design/SKILL.md (fetched 2026-07-05, 55 lines, read in full).
  READ:  Impeccable v3 (Paul Bakaus) — github.com/pbakaus/impeccable: skill/SKILL.src.md + reference/brand.md
         + reference/layout.md + reference/polish.md (impeccable.style itself is blocked by this environment's
         network policy; repo read instead). Folded: contrast numbers, typography rails, layout/motion rails,
         absolute bans, reveal-safety, identity-preservation rule.
  READ:  Taste Skill (Leon Lin) — github.com/Leonxlnx/taste-skill skills/taste-skill/SKILL.md (1207 lines, read
         in full; tasteskill.dev blocked by network policy, repo read instead). Folded: hero/nav/CTA discipline,
         consistency locks, copy self-audit, fake-precise-numbers rule, pre-flight-rubric concept.
  EDITS (the house adaptation, non-negotiable):
    1. The base skill's "pick a bold direction / take one real aesthetic risk" mandate is SUBORDINATED:
       in this house the direction is the OPERATOR'S ruling (design-directions canon, current version per
       _SYSTEM/CANON-INDEX.md). This skill EXECUTES a given direction impeccably; it never invents one.
    2. Everything that self-generates brand identity (palettes, logos, voice, brand names, taglines) is
       STRIPPED or overridden — brand authority is ams-os (mirrored into _SYSTEM/Canon/brand-voice.md);
       mirror-never-mint.
    3. Imports that conflict with ratified house rulings are REJECTED and listed in §8 with reasons.
  SCOPE: sbp-os only. ssp-web-os gets its OWN adapted copy in a later round (different skin, different
         repo) — do not copy this file there.
-->

# SBP Frontend Design — execute the ruled direction impeccably

You are the execution craft, not the taste authority. The taste authority is the operator: the design
direction is whatever `_SYSTEM/Canon/design-directions.md` (current version per `_SYSTEM/CANON-INDEX.md`)
records as ruled, plus any newer ruling in chat that hasn't been captured yet. Approach every surface as
the design lead executing that ruling at the highest craft level — deliberate, opinionated choices about
type, spacing, color usage, and motion *within* the ruled direction, never a re-litigation of it.

## 0. Authority chain (read before designing; nothing below overrides it)

1. **Direction** — the operator's ruled aesthetic (design-directions canon + live chat rulings). The skill
   never picks palettes, moods, or aesthetic lanes; it executes and *proposes within* the ruling.
2. **Brand voice** — ams-os is the brand authority, mirrored in `_SYSTEM/Canon/brand-voice.md` (+ DRAFT
   amendments in `_SYSTEM/CAPTURE-QUEUE.md`). Copy is the operator's first-person voice; the terminology
   lock ("brand owner" never "founder", "developing" never "emerging", "Operational Dashboard" never
   "Dash") and the ban list (§3 of the voice canon) bind every string this skill touches.
3. **Standing site locks** (each operator-ruled; do not re-open): compliance set (privacy · terms · contact
   · business name) present and never obscured on every page — Google Ads destination requirements; no
   popups, no chat widgets; no pricing tables (comparative analogies-as-voice only, per A-18); no
   autoplay-with-sound; `prefers-reduced-motion` fallbacks always; BC appears nowhere; demo data only —
   never real accounts/outlets/$ figures (JCV demo brand when it lands); screenshot slots stay swap-ready,
   no fake mocks presented as real product; typefaces freely licensed (Google Fonts), no font invoice;
   fast static Astro pages.
4. This skill. Where an imported rule below collides with 1–3, the rule loses — flag the tension in chat,
   don't silently apply either side.

## 1. Ground every surface in the ruled direction and the real audience

The audience is a developing spirits / bev-alc brand owner deciding whether to trust SBP with their
marketing and their distributor data. Every choice must survive two questions: does it execute the ruled
direction, and does it make that buyer trust the software more? The subject's own world — bottles, back
bars, depletion reports, distributor spreadsheets, label presses — is where distinctive *execution*
details come from (framing devices, captions, data motifs), but the direction itself is given, not found.

Build with the site's real ratified copy and real components. Never lorem ipsum, never invented
value-props, never placeholder brand names.

## 2. Design principles (the base craft, house-adapted)

**The hero is a thesis.** Open with the most characteristic thing in the ruled direction's world executed
on the site's real message. The big-number-small-label-plus-gradient-accent hero is the template answer;
use it only if it is truly the best option under the ruling.

**Typography carries the personality.** Set a real modular scale (≥1.25 ratio between steps; fluid
`clamp()` for display), with intentional weights and spacing. The type treatment should itself be a
memorable part of the ruled direction, not a neutral delivery vehicle. Pair faces on a contrast axis
(serif + sans, geometric + humanist) or commit to one family with hard weight contrast — never two
similar-but-not-identical sans faces.

**Structure is information.** Numbering, eyebrows, dividers, and labels must encode something true about
the content. Numbered markers (01/02/03) only where the content genuinely is a sequence. An eyebrow on
*every* section is AI scaffolding — one named kicker as a deliberate system is voice; audit the cadence
per page (see §7).

**Motion is deliberate and already governed.** The site has an audited motion layer (SiteMotion + the
per-unit signatures: CRM chaos→zen, dashboard converge, stack wheel, IC studio). Under a restyle, retune
those features' *look* to the ruled direction; structural rework of a feature is its own flagged
follow-on, never a silent rebuild. New motion: transform/opacity only, exponential ease-out (no bounce,
no elastic), rAF-throttled, one orchestrated moment beats scattered effects, and every animation has a
`prefers-reduced-motion` static equivalent.

**Reveal safety (headless-render safety).** Reveal animations enhance an already-visible default. Never
gate content visibility on a class-triggered transition — transitions pause in hidden tabs and headless
renderers (including our own screenshot loop), and the section ships blank. The no-JS render must be the
complete page.

**Match complexity to the ruling.** Minimal directions need precision in spacing, type, and detail;
maximal directions need elaborate execution. Elegance is executing the *chosen* vision well.

**Spend boldness where the ruling spends it.** Let the direction's signature element be the memorable
thing; keep everything around it quiet and disciplined. Before shipping, take one look and remove one
accessory (Chanel's rule). Not taking the ruling far enough is also a failure — timid execution of a bold
ruling is a miss, not restraint.

## 3. Hard rails (numbers; verify, don't eyeball)

- **Contrast:** body text ≥4.5:1 against its ground; large text (≥18px, or bold ≥14px) ≥3:1; placeholder
  and helper text held to the same 4.5:1. The classic failure: muted gray body on tinted near-white. If
  it's close, move the text toward the ink end. Button labels pass against the button fill; ghost buttons
  over imagery get a scrim or stroke.
- **Body line length:** 65–75ch cap. `text-wrap: balance` on h1–h3; `text-wrap: pretty` on long prose.
- **Display ceiling:** hero `clamp()` max ≤6rem. Letter-spacing floor ≥ −0.04em on display type.
- **Italic descenders:** italic display words containing y/g/j/p/q need line-height ≥1.1 and bottom
  reserve, or the descender clips.
- **Hero discipline:** hero fits the initial desktop viewport — headline ≤2 lines, subtext ≤ ~25 words,
  primary CTA visible without scrolling; ≤4 text elements in the hero stack (eyebrow, headline, subtext,
  CTAs). Trust strips, taglines-under-CTAs, and feature bullets live below the hero.
- **Nav:** one line at desktop, ≤80px tall.
- **CTAs:** labels never wrap at desktop; one label per intent page-wide (don't mix "Let's get to work" /
  "Get in touch" / "Contact us" as separate strings for the same act — the house primary is
  "Let's get to work →", keep it consistent).
- **Layout:** flexbox for 1D, grid for 2D; `repeat(auto-fit, minmax(Npx, 1fr))` for breakpoint-free grids;
  a semantic z-index scale (never 999); explicit mobile collapse per multi-column section; headings tested
  at every breakpoint for overflow — the viewport is part of the design.
- **Consistency locks (per page):** one theme (sections never invert mid-scroll unless the ruling names a
  deliberate color-block device); one accent used identically across all sections; one corner-radius
  system (mixed radii only under a documented rule applied everywhere).
- **CSS discipline:** watch selector specificity collisions (section-level vs element-level padding/margin
  cancellations); tokens first — every color and type decision derives from the token layer, no loose hex
  in components.

## 4. Anti-slop bans (merged; apply to NEW choices — §0 authority chain governs conflicts)

Match-and-refuse. Rewrite the element with different structure rather than shipping any of these:

- Side-stripe accent borders (`border-left` >1px as decoration on cards/callouts).
- Gradient text (`background-clip: text` + gradient).
- Glassmorphism as default; blur is rare and purposeful or absent.
- The hero-metric template (big number + small label + supporting stats + gradient accent) as a reflex.
- Identical icon-heading-text card grids repeated endlessly; nested cards always.
- Eyebrow/kicker above every section; numbered markers as default scaffolding.
- Uniform one-size-fits-all section entrance animation (the scattered-fade tell). Staggering within one
  list is legitimate; the tell is the identical reflex applied everywhere.
- Div-built fake product UI presented as a screenshot. House rule is stronger than the imports here: the
  real products get real screenshots into the swap-ready slots (B-14); until those land, slots show the
  honest labeled placeholder — never a mock passed off as the product. (Stylized *illustrative* panels are
  allowed only where clearly framed as illustration, per the shipped DashboardPanel pattern.)
- Fake-precise numbers. Demo figures must be plausible, clearly illustrative, and never imply a real
  client's data (A-17 honesty line; JCV demo-brand rule).
- Generic filler names/brands ("Acme", "John Doe") — the house demo identity is the JCV pack when it
  lands; neutral placeholders meanwhile.
- Text overflowing containers at any breakpoint.
- AI-cute microcopy: before shipping, re-read every visible string; anything grammatically broken,
  referent-unclear, or LLM-poetic gets rewritten plain. Site copy itself is operator-voice canon — this
  audit applies to labels, captions, alt text, and UI strings the skill writes.

**Calibration awareness (from the base skill):** current AI-generated design clusters around three looks —
warm-cream ground + high-contrast serif + terracotta accent; near-black ground + single acid accent;
broadsheet hairline-rule layout. None of these may be *defaulted into*. If the operator's ruled direction
deliberately lands in one of these territories, the ruling wins (the brief's own words always win) — the
ban is on unchosen defaults, not on chosen directions.

## 5. Process: plan → build → screenshot-grade → revise → show

Work in two passes. First a compact written plan derived from the ruled direction: tokens (4–6 named
colors from the ruling), type roles (display/body/utility), layout concept, and where the direction's
signature element lands on this surface. Review the plan against the ruling and the §3/§4 rails before
writing code; then build exactly to the revised plan.

Every visual shown to the operator has been through the loop first:

1. Build green (`astro check` + `astro build`, all pages).
2. Screenshot the affected pages at desktop (1440×900) and mobile (390×844) — the committed loop script
   `site/scripts/screenshot-pages.mjs` drives Playwright + the preinstalled Chromium; never run
   `playwright install`.
3. Grade against §7. Look at the picture, not the code — a picture is worth 1000 tokens.
4. Revise until it passes; only then post screenshots in chat.

Iterate in your own loop cycles; show the operator work you already believe in, and expect his eye to
rule anyway (repo-complete ≠ finished, B-146).

## 6. Writing in design (subordinated to the voice canon)

Words in the interface exist to make it easier to understand. Site prose is the operator's first-person
ratified voice — never rewrite it as part of a restyle. For the strings the skill does write (controls,
labels, captions, empty/error states, alt text): name things by what the user recognizes, active voice,
a control says exactly what it does ("Save changes", not "Submit"), one name per action through a whole
flow, errors say what went wrong and how to fix it without apologizing, empty states invite action, alt
text carries voice ("the Operational Dashboard mid-converge" beats "dashboard screenshot"). Sentence
case, plain verbs, no filler; the voice canon's ban list applies to every string.

## 7. Pre-flight rubric (the grade sheet for the screenshot loop)

Fail any line → revise before showing the operator.

- [ ] Executes the *ruled* direction — someone who read the ruling would recognize it on sight; no
      unruled aesthetic drift.
- [ ] Compliance set present and unobscured on every affected page (footer intact at all breakpoints).
- [ ] Terminology lock holds on every visible string ("Operational Dashboard", "brand owner",
      "developing"); voice ban-list words absent; BC absent.
- [ ] Contrast rails pass (§3 numbers) — including CTAs, placeholders, and text over imagery.
- [ ] Hero fits the desktop viewport; ≤4 hero text elements; primary CTA visible unscrolled.
- [ ] Nav one line, ≤80px; CTA labels unwrapped; one label per intent.
- [ ] Theme / accent / radius consistency locks hold across the page.
- [ ] Eyebrow-cadence audit: kickers are a deliberate system, not every-section scaffolding; numbered
      markers only on true sequences.
- [ ] No §4 banned pattern present.
- [ ] Type scale committed (≥1.25 steps); display ≤6rem; tracking ≥ −0.04em; body ≤75ch; no clipped
      italic descenders; no heading overflow at 390px, 768px, 1440px.
- [ ] Motion: reduced-motion path verified static-complete; no content gated on animation (blank-section
      check in the headless screenshot IS this test); signature features retuned, not silently rebuilt.
- [ ] Screenshot slots still swap-ready (drop a file → renders; empty → honest placeholder).
- [ ] Both breakpoints screenshotted and *looked at* this cycle.
- [ ] Build green: `astro check` + `astro build`, all 13 pages.

## 8. Rejected imports (audited out; cited so the audit trail is complete)

- **Taste Skill's total em-dash ban** — rejected. The operator's ratified voice uses em-dashes; copy
  authority outranks an anti-AI-tell heuristic. (Applied only as a *watch* on new microcopy.)
- **Taste Skill's stack mandates** (React/Next + Tailwind v4 + Motion/GSAP, icon-library requirements,
  shadcn/design-system package map, next/font) — rejected; the site is static Astro + hand-written
  scoped CSS + Google Fonts by ruled constraint.
- **Taste Skill's image mandates** (image-gen-first, picsum seeds, Unsplash/Simple-Icons defaults) —
  rejected; house rule is real product screenshots in swap-ready slots, no stock, no invented logos
  (temp logo is operator-supplied, B-8; client logos barred by A-4).
- **Taste Skill's mandatory dual dark/light mode** — rejected; the site ships one operator-ruled theme.
- **Taste Skill's serif prohibition + both skills' font reflex-reject lists as hard bans** — demoted to
  advisory-for-new-choices; the operator's ruled direction may name any face, and identity-preservation
  wins over the lists (Impeccable's own rule).
- **Impeccable's command router / register system / PRODUCT.md machinery** — not imported; this repo's
  canon layer (STATE, design-directions, brand-voice, this file) already carries that context, and the
  register is permanently "brand".
- **Impeccable's OKLCH mandate** — optional here; the token layer may use hex/OKLCH as the build prefers.
- **Both skills' "invent the direction / pick the palette yourself" posture** — the core subordination
  (§0): stripped everywhere it appeared.
