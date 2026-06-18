# /coming-soon/ — holding-page image slot

The coming-soon homepage (`site/src/pages/index.astro`) shows one image, the
swap-ready slot. It currently points at the placeholder **`hero.svg`**.

## To put the real image up
1. Upload your image to this folder (`site/public/coming-soon/`) via GitHub web
   — same way the logo and founder portraits were added.
2. Tell me the filename (e.g. `hero.jpg`, `hero.png`). I'll point the slot at it
   and rebuild — or, if you name it exactly **`hero.jpg`**, just say so and I'll
   flip the one line.

The frame is a fixed 4:3-ish box (1200×900); any reasonably sized image fits —
it scales to the frame. HTTPS + mobile sizing are handled by the layout.

> Note: this is a **temporary** holding page. The full site replaces it at the
> Step-3 launch (after the screenshots/brand images land). This branch is the
> holding build — it is **not** merged to `main`.
