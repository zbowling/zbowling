globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_f5ZeWRRA.mjs';
import { $ as $$Layout } from '../chunks/Layout_CiIvDg2m.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404", "description": "This page could not be found.", "pagefindIgnore": true, "data-astro-cid-zetdm5md": true }, { "404": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="notfound-container" data-astro-cid-zetdm5md> <h1 class="text-glow" data-astro-cid-zetdm5md>404</h1> <p data-astro-cid-zetdm5md>This page could not be found.</p> <a class="block-link" href="/" data-astro-cid-zetdm5md>← Back to the homepage</a> </div>` })} `;
}, "/Users/zbowling/Projects/zbowling/src/pages/404.astro", void 0);

const $$file = "/Users/zbowling/Projects/zbowling/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
