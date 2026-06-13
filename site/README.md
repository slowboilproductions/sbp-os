# Slow Boil Productions — site source

The new `slowboilproductions.com` build (Step 2). Built to ratified canon:
site-skeleton v0.3, design-directions v0.3 (**Control Room**), brand-voice v0.4.

## Stack
- **[Astro](https://astro.build)** — static output (`output: 'static'`), host-agnostic.
  Builds to `dist/` of plain HTML/CSS. Zero JS shipped by default; motion rides
  in progressive-enhancement islands. The static output deploys identically to
  Netlify or Vercel — the **Step-3 hosting call (B-5) stays open**, not pre-decided.
- Fonts: Space Grotesk · IBM Plex Sans · IBM Plex Mono (Google Fonts CDN for now;
  self-hosting is a polish follow-up).

## Commands
```bash
npm install      # install deps (Astro)
npm run dev      # local dev server
npm run build    # -> dist/  (static, deploy-ready)
npm run preview  # preview the built site
```

## Structure
```
site/
├── astro.config.mjs        static output, host-agnostic
├── public/                 favicon, robots (static assets)
└── src/
    ├── styles/             tokens.css (Control Room system) + global.css
    ├── layouts/BaseLayout  <head>/SEO + Nav + Footer (compliance set baked in)
    ├── components/         Nav, Footer, DashboardPanel, StackGrid
    └── pages/              index, stack/*, proof, about, contact, privacy, terms
```

## Build status (Step 2)
- **Done — decision-independent foundation:** design system, shared layout +
  compliance set (on every page by construction), all 10 pages with drafted
  copy in the locked voice, custom Contact form UI, Privacy + Terms (carried
  from legacy, Charlotte NC).
- **Parked — pending operator "feel" review:** the motion/interaction layer
  (hero boot-up, scroll choreography, pinned stack-tour, cursor effects). The
  markup carries `data-anim` hooks so motion drops in without restructuring.

## Hard constraints honored
- Black Company appears **nowhere**.
- **No pricing** anywhere — every cost question routes to Contact (A-8).
- Public name **"Operational Dashboard"** everywhere; internal "Dash" never appears (A-6).
- Compliance set (business name · Charlotte NC · contact · privacy · terms) on every page.

## Deferred to Step 3 (deploy gate)
- Hosting choice (B-5) and the Contact **form handler** (host-coupled; never a secret in source, §O).
- Google-Ads dev-token status re-confirm (B-4); A-10 Charlotte-vs-Indian-Trail watch.
- `og-default.png` social card + self-hosted fonts (polish).

## Claims to verify before live
Product-page capability claims (CRM, Operational Dashboard) are drawn from the
skeleton outline and kept conservative. Final claims must be checked against
`crm-os` / `dash-os` canon before cutover — flagged in each page's frontmatter.
