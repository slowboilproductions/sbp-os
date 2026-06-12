# Slow Boil Productions — Website (v1.1)

**Build date:** May 7, 2026
**Build session:** Build Session - 3
**Purpose:** Compliance scaffold for Google Ads approval. Designed to scale into the full marketing site without rebuild.

**v1.1 changes:**
- Logo integrated (header, footer, About page hero)
- Language: "founder" → "brand owner" / "other brand owners" (industry-appropriate)
- Language: "emerging" → "developing" (more honest for the audience)

---

## What's Included

**Marketing pages:**
- `index.html` — Homepage
- `services.html` — Two-pillar services breakdown
- `about.html` — Origin story / brand voice
- `contact.html` — Contact info (Google Ads compliance requirement)

**Legal pages (Google Ads compliance requirements):**
- `privacy.html` — Privacy Policy (NC-based, service business)
- `terms.html` — Terms of Service (NC governing law)

**Design system:**
- `styles.css` — Single shared stylesheet across all pages

---

## Google Ads Compliance Checklist

Built against Google Ads Destination Requirements policy (May 2026). Every required element is present:

- [x] HTTPS-ready (deploy on hosting that provides SSL)
- [x] Functional pages, no broken links
- [x] Privacy Policy page linked in footer of every page
- [x] Terms of Service page linked in footer of every page
- [x] Contact information present and reachable (`hello@slowboilproductions.com`)
- [x] Business name (Slow Boil Productions LLC) clearly present on every page
- [x] Mobile responsive (tested down to 375px viewport)
- [x] Crawlable by Google bots (no robots.txt blocks, no auth walls)
- [x] Original content (not duplicated, not thin)
- [x] Clear navigation (consistent header on every page)
- [x] No misleading claims, no exaggerated promises
- [x] No popups, no auto-playing media, no Better Ads Standards violations

**One thing you must do at deploy time:** ensure the hosting platform provides HTTPS. Without SSL, Google Ads will reject the site automatically. Modern hosts (Netlify, Vercel, Cloudflare Pages, GitHub Pages with custom domain) provide free SSL out of the box.

---

## Deployment

The site is static HTML/CSS — no build step, no server-side processing. Deploys anywhere that hosts static files.

**Recommended hosts (all free tier with HTTPS):**
1. **Netlify** — drag-and-drop deployment, custom domain, free SSL. Easiest path.
2. **Cloudflare Pages** — Git-connected, fast CDN, free SSL.
3. **Vercel** — same as Cloudflare, slightly different tooling.

**Steps for Netlify (recommended):**
1. Create account at netlify.com
2. Drag the entire site folder onto the deploy area
3. Note the temporary URL Netlify assigns (e.g., `random-name.netlify.app`)
4. In Netlify dashboard: Site Settings → Domain Management → Add Custom Domain
5. Add `slowboilproductions.com` and follow DNS instructions
6. In Namecheap (where domain is registered): update DNS to point to Netlify
7. Wait for DNS propagation (usually <1 hour)
8. Verify HTTPS is active — Netlify auto-provisions Let's Encrypt SSL once DNS resolves

**DNS configuration (Namecheap → Netlify):**
- Either use Netlify's nameservers (simplest), OR
- Add A record pointing to Netlify's load balancer IP and CNAME for www subdomain

---

## What's NOT Included (Phase 2)

This is a compliance scaffold, not the final marketing site. Items intentionally deferred:

- Real product photography / hero imagery (currently typography-driven)
- Case studies / proof slides (no client data yet)
- Blog / content area
- "Find It Now" page (planned, requires Sunshine Punch product locator integration)
- Pricing page (currently kept conversational — requires sales conversation)
- Email capture / newsletter signup
- Booking/scheduling integration
- Detailed service line pages (each Pillar 01 + Pillar 02 service expanded)
- Client portal / login area
- Recipe database (SSP-adjacent)
- Multi-language support
- Analytics installation (GA4, Meta Pixel, etc.)

These get built in Phase 2 when SBP starts driving real traffic.

---

## What's Pending Before Going Live

**Required before Google Ads submission:**

1. **Set up Google Workspace** for `slowboilproductions.com` domain
   - Set up `hello@slowboilproductions.com` (public address — already referenced throughout site)
   - Set up `brian@slowboilproductions.com` (personal address — not on public site)
   - Configure SPF, DKIM, DMARC for email deliverability
2. **Verify DNS** — point `slowboilproductions.com` to chosen host
3. **Activate SSL** — should be automatic with recommended hosts
4. **Test all forms / links** — verify `mailto:` links work, all internal links resolve
5. **Submit to Google Search Console** — helps with crawlability verification
6. **Run Google's Mobile-Friendly Test** — verify mobile responsiveness (should pass cleanly)
7. **Run PageSpeed Insights** — aim for >85 on mobile (current build should clear this comfortably with no images yet)

**Required for Google Ads itself:**

1. Create Google Ads account (if not already done)
2. Complete Advertiser Verification — uses the legal entity name "Slow Boil Productions LLC" which must match the registered LLC documents
3. Submit first ad and landing page for review (typically 1-3 business days)

---

## Design System

The visual design is intentionally restrained. Choices made:

**Typography:**
- Headlines: Fraunces (variable serif, optical-size aware) — editorial, characterful, anti-corporate
- Body: Inter Tight — clean, readable, modern but not generic
- Mono: JetBrains Mono — used sparingly for labels and detail accents

**Color palette:**
- Background: `#f5f1e8` (warm parchment cream)
- Ink: `#1a1a1a` (near-black)
- Accent: `#b8451f` (burnt copper / ember — the "slow boil")

**Layout principles:**
- Generous negative space
- Strong hierarchy (display headlines, eyebrow labels, body copy)
- 2-column and 3-column grids that collapse to single column on mobile
- No icons — typography does the work
- Border-anchored cards (top border = pillar/section starting point)

**Why this works for scaling:**
The design system uses CSS custom properties (variables) for everything. When the full marketing site is built, swapping in real product photography, expanded sections, or new pages won't require rewriting the design — just adding new components that consume the same tokens.

---

## File Structure

```
sbp-site/
├── index.html          # Homepage
├── services.html       # Services page
├── about.html          # About / origin story
├── contact.html        # Contact (Google Ads required)
├── privacy.html        # Privacy Policy (Google Ads required)
├── terms.html          # Terms of Service (Google Ads required)
├── styles.css          # Shared design system
├── assets/
│   └── logo.svg        # Brand logo (SVG, transparent background)
└── README.md           # This file
```

No JavaScript. No build process. One asset (logo SVG). No dependencies beyond Google Fonts (loaded via CDN).

---

## Future Build Hooks

When you're ready to build the full marketing site, the following structural decisions were made to make that build additive:

1. **Shared CSS file** means a redesign or expansion edits one file, not seven
2. **Consistent header/footer markup** across every page means converting to a CMS template is straightforward
3. **CSS custom properties** mean color/typography updates are one-line changes
4. **Section-based layout** means new content blocks can be inserted without breaking existing flow
5. **Semantic HTML** means SEO and accessibility are already in good shape
6. **Mobile-first responsive** means no rework needed for mobile

When the site moves to Webflow (the planned platform per the architecture doc), this structure ports cleanly — sections become Webflow sections, the design tokens become Webflow style guide variables.

---

## Voice Notes

The copy on this site mirrors the SBP positioning document and the pitch deck. Specifically:

- "Built by a brand founder, for brand founders" — primary positioning line
- Two pillars (Infrastructure / Tailored Strategy) — primary value framework
- Storage / Memory / Language — primary moat framework
- Origin story (about page) — verbatim from positioning doc
- Closing line on About page — "You didn't come this far to fold. Let's get to work." (option #3 from the positioning doc closing line shortlist)
- Chef metaphor not used on this site — saved for the deck and direct conversations

When the full site is built, additional voice work expected:
- More direct address to the marketing-lead audience (chef/cook reframe)
- Specific spirits-industry credibility content (depletion, distributors, shelf placement)
- Real client case studies and testimonials

---

## Maintenance Notes

This is a static site. There is no admin panel. To update content:
1. Edit the relevant `.html` file directly
2. Re-deploy to host

Recommended workflow when migrating to Webflow:
1. Use this site's content as the source of truth
2. Build matching Webflow page templates
3. Match the design system tokens (colors, fonts, spacing) into Webflow's style guide
4. Migrate content page by page
5. Set up redirects from this site to Webflow versions
6. Once Webflow is live, deprecate this site

---

*Slow Boil Productions LLC — slowboilproductions.com — Charlotte, NC*
