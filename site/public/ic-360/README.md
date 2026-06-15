# IC "studio → 360 → stills → motion" — asset swap guide

This folder holds the art for the Image Creation showcase on
`/stack/image-creation` (component: `src/components/BottleStudio.astro`).
Everything here is a **placeholder** (a stylized generated bottle). Replace it
with the real Sunshine Punch shoot — the component config is the only code that
changes, and only if your counts differ.

## Phase A — the 360 orbit (real studio turntable)
- Drop your turntable frames in here named **`frame-00.png … frame-NN.png`**
  (sequential, zero-padded to 2 digits).
- Shoot/export: bottle on a turntable, **locked lighting + exposure**, bottle
  **centered**, **clean or transparent** background, consistent crop.
- ~**24–36 frames** is smooth (every 10–15°). ~**600–900px** wide. PNG or WebP.
- Then in `BottleStudio.astro` set `const FRAMES = <your count>`. Done.

## Phase B — the gallery of stills
- The "images generated from that one shoot." **Use real stills** — more angles,
  crops, and setups from the same shoot (no generic AI; that contradicts the
  page's own pitch).
- Default pulls six of the turntable frames. To use real stills, set
  `stills` in `BottleStudio.astro` to their paths, e.g.
  `['/ic-360/still-1.jpg', '/ic-360/still-2.jpg', …]` (6 looks best).

## Phase C — the motion finale (LoRA, worth the wait)
- The still that **comes alive**. Until the LoRA motion is ready, a short **real
  clip from the shoot** (slow pan / pour / rack-focus) works as a bridge.
- Drop the file here and set `motionSrc = '/ic-360/motion.mp4'` in
  `BottleStudio.astro`. It autoplays **muted**, loops, in view. **No audio**
  (site rule: no autoplay-with-sound). MP4 (H.264) or WebM; keep it short/light.
- Left `null`, the bubble placeholder shows instead.

## Guardrails (don't break these)
- Whole section is **off under `prefers-reduced-motion`** (static stills gallery
  shows instead) and degrades to that gallery with **no JS**.
- Keep total frame weight reasonable (it preloads for a smooth scrub).
