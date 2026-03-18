import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://runbook-projects.github.io/pycon-2025',
  base: '/pycon-2025',
  output: 'static',
  build: {
    assets: 'assets',
  },
});