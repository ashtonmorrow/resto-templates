import { defineConfig } from 'astro/config';

// Static showroom. Add @astrojs/cloudflare adapter when a template needs server routes.
export default defineConfig({
  site: 'https://resto.example.com',
  build: { format: 'directory' },
});
