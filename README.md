# studio954

**you play. we record.** — marketing site for studio954, a recording, podcast &
content studio in the 954 (Fort Lauderdale, FL).

Built with [Astro](https://astro.build), self-hosted **Montserrat**, zero runtime JS
frameworks. Dark, hot-pink, brand-accurate.

---

## Run it

```bash
npm install
npm run dev      # local dev server → http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build
```

## Stack

- **Astro 5** — static output, HTML compressed, link prefetch on.
- **@fontsource-variable/montserrat** — Montserrat shipped with the site (no Google
  Fonts request).
- **@astrojs/sitemap** — generates `sitemap-index.xml`.
- No CSS framework. One design system in `src/styles/global.css`.

## Structure

```
public/
  brand/            official logos + brand guidelines PDF
  favicon.svg       power-mark, hand-built SVG
src/
  components/       Nav, Hero, Marquee, Services, Room, Process, Rates, Booking, Footer
  components/Icon.astro   the power + wave mark as inline, themeable SVG
  layouts/Base.astro      <head>, SEO/OG, structured data, all interaction JS
  pages/index.astro       the single page, composed
  styles/global.css       tokens, type scale, buttons, reveal/cursor utilities
```

## Brand

Pulled straight from `public/brand/Studio954_BrandGuidelines.pdf`:

| Token | Hex | Use |
| --- | --- | --- |
| Pink (primary) | `#ed318e` | the wave, accents, CTAs |
| Dark | `#212123` / `#0b0b0c` | surfaces / page |
| Teal | `#58c5c9` | DJ sessions |
| Coral | `#f3745e` | podcasts |
| Lime | `#d2df58` | content shoots |

Each service maps to a brand tagline: *you play. we record.* · *plug. spin. record.* ·
*plug. light. record.* · *plug. mic. record.*

## ⚠️ Before you go live — edit these placeholders

These are sensible defaults, **not** confirmed business facts. Update them:

1. **Contact form** — `src/components/Booking.astro` posts to
   `https://formspree.io/f/REPLACE_ME`. Swap in your real
   [Formspree](https://formspree.io) endpoint (or your own handler) or the form
   won't deliver.
2. **Email** — set to `hi@studio954.com` (Booking + Footer).
3. **Rates** — all tiers say *"Custom quote"* on purpose. Add real pricing in
   `src/components/Rates.astro` when ready.
4. **Social links** — Footer points to bare instagram/tiktok/youtube. Add your handles.
5. **Domain** — `site` in `astro.config.mjs` is `https://studio954.com`. Change if needed
   (affects canonical URLs + sitemap).
6. **Address** — only "Fort Lauderdale, FL" is shown. Add a full address if you want a map.

## Deploy

Static output — drops onto Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
Build command `npm run build`, publish directory `dist`.

---

Phone on file: **954.466.1698** · email **hi@studio954.com**. Brand & logos © studio954 / ME Graphic Designer, Inc.
