globalThis.process ??= {}; globalThis.process.env ??= {};
const contentModules = new Map([
["src/content/cards/funfacts.mdx", () => import('./funfacts_C6HIaLqt.mjs')],
["src/content/cards/advocacy.mdx", () => import('./advocacy_D61zmUpw.mjs')],
["src/content/cards/media.mdx", () => import('./media_BkIEmI9M.mjs')],
["src/content/cards/patents.mdx", () => import('./patents__z8drSTz.mjs')],
["src/content/cards/tech.mdx", () => import('./tech_CYrGqqz7.mjs')],
["src/content/projects/mcpcodeserver.mdx", () => import('./mcpcodeserver_5hIjV34l.mjs')],
["src/content/projects/tiktok.mdx", () => import('./tiktok_BavYTTT5.mjs')],
["src/content/other/about.mdx", () => import('./about_6HBoPH4S.mjs')]]);

export { contentModules as default };
