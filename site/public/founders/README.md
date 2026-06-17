# /founders photos — drop-in slots

Portraits for the buried "Meet the Founders" easter-egg page (`/founders`).

## How to add them (web/mobile, no local machine needed)
1. On GitHub web, open this folder (`site/public/founders/`) on the working branch.
2. **Add file → Upload files**, drop in the two portraits.
3. Suggested names (portrait orientation, ~4:5, ≥640px wide):
   - `brian.jpg` — Brian
   - `cofounder.jpg` (or `.png`) — the cofounder
4. In `site/src/pages/founders.astro`, set each founder's `photo:` to its path
   (e.g. `photo: '/founders/brian.jpg'`). The dashed portrait frame swaps the
   real photo in automatically once the path is set.

Until a `photo` path is set, the page shows a styled placeholder frame — so the
preview never looks broken. Nothing here is deployed until the operator's merge.
