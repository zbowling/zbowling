import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import spectre from "./package/src";

// https://astro.build/config
export default defineConfig({
  site: "https://zacbowling.com",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    expressiveCode({
      themes: ["dark-plus"],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: "Zac Bowling",
      openGraph: {
        home: {
          title: "Zac Bowling",
          description:
            "Software engineer, political activist, affordable housing advocate, and community leader based in Alameda, California.",
        },
      },
    }),
  ],
});
