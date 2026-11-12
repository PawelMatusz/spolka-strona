import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arpa.ai',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'never'
});
