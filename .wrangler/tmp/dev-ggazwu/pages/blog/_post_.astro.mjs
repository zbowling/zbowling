globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_f5ZeWRRA.mjs';
/* empty css                                     */
import { $ as $$ImageGlow } from '../../chunks/ImageGlow_Dj3aWSX9.mjs';
import { r as renderEntry, g as getCollection, $ as $$Card } from '../../chunks/_astro_content_DoQDnXiB.mjs';
import { $ as $$Layout, g as giscus } from '../../chunks/Layout_CiIvDg2m.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zacbowling.com");
const getStaticPaths = async () => {
  const posts = await getCollection(
    "posts",
    (post) => post.data.draft !== true
  );
  return posts.map((post) => ({ params: { post: post.id }, props: { post } }));
};
const $$post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$post;
  function timeToRead(post2) {
    const numWords = (post2.body || "").replace(/.*\[(.*?)\].*/gm, "$1").replace(/```.*?```/gms, "").split(/\s+/).length;
    const numImages = post2.body?.match(/!\[/g)?.length || 0;
    const numCodeblocks = post2.body?.match(/```/g)?.length || 0;
    return Math.ceil(numWords / 200) + Math.ceil(numImages / 6) + Math.ceil(numCodeblocks / 3);
  }
  const { post } = Astro2.props;
  const { Content, headings } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "description": post.data.description, "image": post.data.image, "article": {
    createdAt: post.data.createdAt,
    updatedAt: post.data.updatedAt
  } }, { "left": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="left"> ${renderComponent($$result2, "Card", $$Card, { "class": "toc-card" }, { "default": async ($$result3) => renderTemplate` <h2 class="no-mt">Table of contents</h2> <ol> <li class="toc-li"> <a${addAttribute(`#_top`, "href")} class="active">${post.data.title}</a> </li> ${headings.map((heading, i) => renderTemplate`<li class="toc-li"${addAttribute(heading.depth, "data-depth")}> <a${addAttribute(`#${heading.slug}`, "href")}>${heading.text}</a> </li>`)} </ol> ` })} </div>`, "right": async ($$result2) => renderTemplate`<article> ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="article-header" id="_top"> ${renderComponent($$result3, "ImageGlow", $$ImageGlow, { "quality": 100, "class": "article-image", "src": post.data.image, "alt": post.data.title })} <div class="header"> <div> <h1 class="no-mt article-h1">${post.data.title}</h1> </div> <div class="article-info"> <span>${post.data.createdAt.toLocaleDateString()}</span> <span>/</span> <span>${timeToRead(post)} minute${timeToRead(post) === 1 ? "" : "s"} to read</span> <span>/</span> <span>Tags: ${post.data.tags.map((tag) => tag.id).join(", ")}</span> </div> </div> </div> ${renderComponent($$result3, "Content", Content, {})} <hr class="end-of-article"> <a href="/blog" class="block-link">← Back to blog</a> ` })} ${giscus} </article>` })} ${renderScript($$result, "/Users/zbowling/Projects/zbowling/src/pages/blog/[post].astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/zbowling/Projects/zbowling/src/pages/blog/[post].astro", void 0);

const $$file = "/Users/zbowling/Projects/zbowling/src/pages/blog/[post].astro";
const $$url = "/blog/[post]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$post,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
