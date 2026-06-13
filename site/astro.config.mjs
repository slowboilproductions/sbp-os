// @ts-check
import { defineConfig } from 'astro/config';

// Static output — host-agnostic. Builds to ./dist as plain HTML/CSS so the
// Step-3 hosting call (Netlify keep vs Vercel consolidate, CAPTURE-QUEUE B-5)
// stays fully open: the same dist/ deploys identically to either host.
export default defineConfig({
  site: 'https://slowboilproductions.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Inline small stylesheets for fewer requests; keeps pages fast.
    inlineStylesheets: 'auto',
  },
  // View Transitions are enabled per-page via the <ClientRouter /> in BaseLayout.
});
