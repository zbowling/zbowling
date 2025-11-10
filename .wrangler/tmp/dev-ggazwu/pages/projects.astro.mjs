globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, e as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_f5ZeWRRA.mjs';
/* empty css                                */
import { g as getCollection, $ as $$Card } from '../chunks/_astro_content_DoQDnXiB.mjs';
import { $ as $$Layout, a as $$Icon, o as openGraph } from '../chunks/Layout_CiIvDg2m.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": openGraph.projects.title, "description": openGraph.projects.description, "pagefindIgnore": true, "data-astro-cid-aid3sr62": true }, { "left": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="layout-grid-left" data-astro-cid-aid3sr62> ${renderComponent($$result2, "Card", $$Card, { "class": "flex-col-card", "data-astro-cid-aid3sr62": true }, { "default": async ($$result3) => renderTemplate` <h2 class="no-mt" data-astro-cid-aid3sr62>Stats</h2> <div class="stats-div" data-astro-cid-aid3sr62> <div class="stat" data-astro-cid-aid3sr62> <h3 class="text-glow" data-astro-cid-aid3sr62>${projects.length}</h3> <span data-astro-cid-aid3sr62>Project${projects.length > 1 ? "s" : ""}</span> </div> </div> ` })} </div>`, "right": async ($$result2) => renderTemplate`<div class="layout-grid-right" data-astro-cid-aid3sr62> ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-aid3sr62": true }, { "default": async ($$result3) => renderTemplate` <div class="header-container" data-astro-cid-aid3sr62> ${renderComponent($$result3, "Icon", $$Icon, { "type": "lucide", "name": "folder-git", "width": 24, "height": 24, "class": "glow-icon", "data-astro-cid-aid3sr62": true })} <h2 data-astro-cid-aid3sr62>Latest Projects</h2> </div> <div class="content-container" data-astro-cid-aid3sr62> ${projects.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).map((post) => renderTemplate`<a${addAttribute(`/projects/${post.id}`, "href")} class="post-container" data-astro-cid-aid3sr62> <div class="post-header" data-astro-cid-aid3sr62> <h3 data-astro-cid-aid3sr62>${post.data.title}</h3> <span class="post-date" data-astro-cid-aid3sr62> ${post.data.date.toLocaleDateString()} </span> </div> <span data-astro-cid-aid3sr62>${post.data.description}</span> </a>`)} </div> ` })} </div>` })} `;
}, "/Users/zbowling/Projects/zbowling/src/pages/projects.astro", void 0);

const $$file = "/Users/zbowling/Projects/zbowling/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
