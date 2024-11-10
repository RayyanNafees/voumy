import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc(), keystatic(), preact({compat: true, devtools:true}), tailwind()],
  output: 'hybrid',
});