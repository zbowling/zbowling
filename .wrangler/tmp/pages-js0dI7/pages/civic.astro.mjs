globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_f5ZeWRRA.mjs';
/* empty css                                */
import { g as getCollection, $ as $$Card } from '../chunks/_astro_content_DoQDnXiB.mjs';
import { $ as $$Layout, o as openGraph } from '../chunks/Layout_CiIvDg2m.mjs';
export { renderers } from '../renderers.mjs';

const $$Civic = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("projects");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": openGraph.projects.title, "description": openGraph.projects.description, "pagefindIgnore": true }, { "left": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="layout-grid-left"> ${renderComponent($$result2, "Card", $$Card, { "class": "flex-col-card" }, { "default": async ($$result3) => renderTemplate` <h2 class="no-mt">Civic Projects</h2> ` })} </div>` })}`;
}, "/Users/zbowling/Projects/zbowling/src/pages/civic.astro", void 0);

const $$file = "/Users/zbowling/Projects/zbowling/src/pages/civic.astro";
const $$url = "/civic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Civic,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
