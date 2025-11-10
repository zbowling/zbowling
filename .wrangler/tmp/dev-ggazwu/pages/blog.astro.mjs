globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, e as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_f5ZeWRRA.mjs';
/* empty css                                */
import { g as getCollection, $ as $$Card } from '../chunks/_astro_content_DoQDnXiB.mjs';
import { $ as $$Layout, a as $$Icon, o as openGraph } from '../chunks/Layout_CiIvDg2m.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts", (post) => post.data.draft !== true);
  const tags = posts.flatMap((post) => post.data.tags.map((tag) => tag.id));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": openGraph.blog.title, "description": openGraph.blog.description, "pagefindIgnore": true }, { "left": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="layout-grid-left"> ${renderComponent($$result2, "Card", $$Card, { "class": "flex-col-card" }, { "default": async ($$result3) => renderTemplate` <h2 class="no-mt">Filter</h2> <ul class="tags-list"> ${Array.from(new Set(tags)).map((tag) => renderTemplate`<li> <a class="blog-tag" href="/blog"${addAttribute(tag, "data-tag")}> ${tag} </a> </li>`)} </ul> ` })} </div>`, "right": async ($$result2) => renderTemplate`<div class="layout-grid-right"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="header-container"> ${renderComponent($$result3, "Icon", $$Icon, { "type": "lucide", "name": "rss", "width": 24, "height": 24, "class": "glow-icon" })} <h2>Latest Posts</h2> </div> <div class="content-container"> ${posts.sort(
    (a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime()
  ).map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class="post-container"${addAttribute(post.data.tags.map((tag) => tag.id).join(","), "data-tags")}> <div class="post-header"> <h3>${post.data.title}</h3> <span class="post-date"> ${post.data.createdAt.toLocaleDateString()} </span> </div> <span>${post.data.description}</span> </a>`)} </div> ` })} </div>` })} ${renderScript($$result, "/Users/zbowling/Projects/zbowling/src/pages/blog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zbowling/Projects/zbowling/src/pages/blog.astro", void 0);

const $$file = "/Users/zbowling/Projects/zbowling/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
