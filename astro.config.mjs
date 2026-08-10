import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import { SITE_METADATA } from './src/consts.ts'
import metaTags from 'astro-meta-tags'
import tailwindcss from '@tailwindcss/vite'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  // Teaser thumbnails are rendered at ~200px from much larger sources, so the
  // default sharp service is needed to actually resize them. The previous
  // passthrough service shipped every original at full size. SVGs are passed
  // through either way.
  integrations: [mdx(), sitemap(), solidJs(), metaTags(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
})
