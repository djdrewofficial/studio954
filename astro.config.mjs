// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://studio954.com',
  compressHTML: true,
  prefetch: true,
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
