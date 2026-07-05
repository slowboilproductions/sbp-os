// screenshot-pages.mjs — the SBP screenshot-grade loop (SBP-AESTHETIC-PIVOT-R1, Phase 3).
// Serves the built site from dist/ and screenshots every page at desktop + mobile
// breakpoints, so every visual gets graded against .claude/skills/frontend-design/SKILL.md §7
// BEFORE the operator sees it. Chromium + Playwright are preinstalled in these
// environments (PLAYWRIGHT_BROWSERS_PATH is set) — never run `playwright install`.
//
// Usage:  node scripts/screenshot-pages.mjs [--dist dist] [--out .shots] [--pages /,/about] [--motion]
//         (run from site/ after `astro build`; output dir is gitignored)
//
// Default pass emulates prefers-reduced-motion: the site's audited static fallback IS the
// truthful fullPage render (enter-view reveals never fire in an unscrolled headless page,
// so a motion-active capture shows blank bands that no real user sees). This doubles as the
// rubric's reduced-motion/blank-section check. Pass --motion to capture with motion active
// instead; that pass autoscrolls the page first so reveals fire before the shot.

import { createServer } from 'node:http';
import { readFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';

async function loadChromium() {
  try {
    return (await import('playwright')).chromium;
  } catch {
    // global install in the remote build environments
    return (await import('/opt/node22/lib/node_modules/playwright/index.mjs')).chromium;
  }
}

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};

const DIST = resolve(arg('dist', 'dist'));
const OUT = resolve(arg('out', '.shots'));
const VIEWPORTS = [
  { tag: 'desktop', width: 1440, height: 900 },
  { tag: 'mobile', width: 390, height: 844 },
];
const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.json': 'application/json', '.mp4': 'video/mp4',
};

// discover pages from dist/**/index.html unless --pages overrides
function discoverPages(dir, base = '') {
  const pages = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) pages.push(...discoverPages(p, `${base}/${entry}`));
    else if (entry === 'index.html') pages.push(base || '/');
  }
  return pages;
}

const pagesArg = arg('pages', null);
const pages = pagesArg ? pagesArg.split(',') : discoverPages(DIST).sort();
if (!existsSync(DIST)) {
  console.error(`No build at ${DIST} — run \`astro build\` first.`);
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });

const server = createServer((req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = join(DIST, path);
  try {
    if (statSync(file).isDirectory()) file = join(file, 'index.html');
  } catch {
    file = `${file}.html`;
  }
  try {
    res.writeHead(200, { 'content-type': MIME[extname(file)] ?? 'application/octet-stream' });
    res.end(readFileSync(file));
  } catch {
    res.writeHead(404).end('not found');
  }
});
await new Promise((ok) => server.listen(0, ok));
const port = server.address().port;

const MOTION = process.argv.includes('--motion');
const chromium = await loadChromium();
const browser = await chromium.launch();
for (const vp of VIEWPORTS) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1.5,
    reducedMotion: MOTION ? 'no-preference' : 'reduce',
  });
  for (const route of pages) {
    await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    if (MOTION) {
      // walk the page so enter-view reveals fire, then return to top
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.7) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
      });
    }
    await page.waitForTimeout(500); // settle
    const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
    await page.screenshot({ path: join(OUT, `${slug}--${vp.tag}.png`), fullPage: true });
    console.log(`shot ${slug} @ ${vp.tag}`);
  }
  await page.close();
}
await browser.close();
server.close();
console.log(`\n${pages.length} pages × ${VIEWPORTS.length} breakpoints → ${OUT}`);
