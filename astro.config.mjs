import { defineConfig } from 'astro/config';

// Static showroom. Add @astrojs/cloudflare adapter when a template needs server routes.
export default defineConfig({
  site: 'https://folio.unwoke.ninja',
  build: { format: 'directory' },
});
