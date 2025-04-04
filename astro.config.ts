import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://zacbowling.com',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: ["dark-plus"],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Zac Bowling',
      openGraph: {
        home: {
          title: 'Zac Bowling',
          description: 'Software engineer, political activist, affordable housing advocate, and community leader based in Alameda, California.'
        },
        blog: {
          title: 'Zac Bowling - Blog (Substack)',
          description: 'Thoughts and writings on tech, politics, and housing.'
        },
        projects: {
          title: 'Projects'
        }
      }
    })
  ],
  adapter: netlify()
});