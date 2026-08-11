// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Coach Gareth / ECLYPSE Lab — consolidated rebuild.
 *
 * WHY ONE DOMAIN: the audit (see ../seo-findings-2026-08-03.md §6, §8) found the
 * business split across two domains, two Google Business Profiles and two review
 * pools at one address, publishing near-duplicate articles that compete with each
 * other. coachgareth.com is the survivor because that is where the equity already
 * is: DR 14 vs 0, ~495 largely genuine referring domains vs 451 spam, 25 dofollow
 * links from suunto.com, 61 reviews vs 14, and the single best-optimised page on
 * either domain (/the-lab, 3,859 words). eclypse.fit becomes 301s into this site.
 *
 * Rendering contract, mirroring the s4l.io build:
 *   - output: 'static' — every route prerendered. Do not add
 *     `export const prerender = false` to a marketing page; it changes the
 *     deploy shape from "upload a folder" to "run a server".
 *   - Zero JS by default. There is no UI framework integration here at all;
 *     the only script on the page is the ~15-line mobile nav toggle.
 *   - build.format: 'file' + trailingSlash: 'never'. Directory format makes
 *     `/vo2-max-testing` 307 to `/vo2-max-testing/`, which would point every
 *     canonical and every sitemap URL at a redirect. 'file' emits
 *     `vo2-max-testing.html`, which Vercel's cleanUrls serves at the unslashed
 *     path with a flat 200. Canonicals are written WITHOUT a trailing slash.
 */
export default defineConfig({
  site: 'https://www.coachgareth.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    assets: '_astro',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/404$/.test(new URL(page).pathname),
      changefreq: 'weekly',
      // No site-wide `lastmod`. Stamping every URL with the build time claims
      // every page changed on every deploy, which is false and which Google
      // discounts. Add it back only when it can be per-URL and true.
    }),
  ],
  vite: {
    // Tailwind 4 ships as a Vite plugin. No @astrojs/tailwind, no
    // tailwind.config.js — theme tokens live in CSS via @theme.
    plugins: [tailwindcss()],
  },
});
