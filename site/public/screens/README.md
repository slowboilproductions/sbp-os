# /screens — product screenshots (swap-ready)

Real product screenshots for the stack pages, framed in the site's 70s panel
skin. One folder per unit; the `ScreenShots.astro` component reads each folder
**at build time** and renders whatever it finds — drop optimized files in and
they appear on the next build, **no code change** (the W8 founders / IC
swap-ready pattern). An empty folder renders the dashed placeholder slot.

```
screens/
├── crm/                     → /stack/crm
├── operational-dashboard/   → /stack/operational-dashboard  (featured — strongest asset)
├── marketing/               → /stack/marketing  ("in action, coming" until files land)
└── image-creation/          → /stack/image-creation  ("in action, coming" until files land)
```

## How to add shots
1. Export the screenshot, then **optimize it** (see specs below).
2. Drop it into the matching folder. Name it descriptively, lowercase, with
   dashes — e.g. `accounts-overview.webp`. The filename becomes part of the
   image's alt text (`accounts-overview` → "… — accounts overview"), so name it
   like a caption.
3. Several files in one folder → a **static stacked gallery**, sorted by
   filename (prefix `01-`, `02-` to order them). Never a carousel.

## Specs (keep them light)
- **Format:** `.webp` preferred · `.png` ok (also `.avif` / `.jpg` accepted).
- **Width:** ~1600px on the long edge is plenty (the frame caps display width;
  a 2x-ish source keeps it crisp on retina without bloat).
- **Weight:** aim **< 250 KB** per shot; **400 KB hard ceiling.** (For scale:
  the 517 KB `founders/brian.png` is the cautionary upper bound — lighter than
  that.) Run them through an optimizer (Squoosh / `cwebp -q 80`) before
  committing. Images are lazy-loaded.

## ⚠️ HARD LOCK — no real customer data
This is a public, Google-Ads-pointed site. Only **demo / illustrative or
scrubbed** data may appear in a screenshot — **no real account names, outlets,
customers, $ figures, or distributor names.** If a shot shows real
account-level data, it does **not** go in here.

Also: the public name is **"Operational Dashboard,"** never **"Dash."** If a
screenshot's own UI chrome surfaces the internal "Dash" name, flag it — don't
publish the mismatch.

Nothing here deploys until the operator's merge to `main`.
