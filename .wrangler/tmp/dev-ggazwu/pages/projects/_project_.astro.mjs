globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_f5ZeWRRA.mjs';
/* empty css                                     */
import { r as renderEntry, g as getCollection, $ as $$Card } from '../../chunks/_astro_content_DoQDnXiB.mjs';
import { $ as $$Layout, a as $$Icon } from '../../chunks/Layout_CiIvDg2m.mjs';
import { $ as $$ImageGlow } from '../../chunks/ImageGlow_Dj3aWSX9.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zacbowling.com");
const getStaticPaths = async () => {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { project: project.id },
    props: { project }
  }));
};
const $$project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$project;
  const { project } = Astro2.props;
  console.log(project.data.info);
  const { Content } = await renderEntry(project);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": project.data.title, "description": project.data.description, "image": project.data.image, "article": {
    createdAt: project.data.date
  }, "data-astro-cid-6vkduold": true }, { "left": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="left" data-astro-cid-6vkduold> ${renderComponent($$result2, "Card", $$Card, { "class": "toc-card", "data-astro-cid-6vkduold": true }, { "default": async ($$result3) => renderTemplate` <h2 class="no-mt" data-astro-cid-6vkduold>Info</h2> <ul class="overview-list" data-astro-cid-6vkduold> ${project.data.info.map((info) => {
    const Tag = info.link ? "a" : "div";
    return renderTemplate`<li data-astro-cid-6vkduold> ${renderComponent($$result3, "Tag", Tag, { "href": info.link, "class": "project-info-item", "data-astro-cid-6vkduold": true }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "type": info.icon.type, "name": info.icon.name, "width": 24, "height": 24, "class": "glow-icon", "data-astro-cid-6vkduold": true })} <span data-astro-cid-6vkduold>${info.text}</span> ` })} </li>`;
  })} </ul> ` })} </div>`, "right": async ($$result2) => renderTemplate`<article data-astro-cid-6vkduold> ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-6vkduold": true }, { "default": async ($$result3) => renderTemplate` <div class="article-header" id="_top" data-astro-cid-6vkduold> ${project.data.image && renderTemplate`${renderComponent($$result3, "ImageGlow", $$ImageGlow, { "quality": 100, "class": "article-image", "src": project.data.image, "alt": project.data.title, "data-astro-cid-6vkduold": true })}`} <div class="header" data-astro-cid-6vkduold> <div data-astro-cid-6vkduold> <h1 class="no-mt article-h1" data-astro-cid-6vkduold>${project.data.title}</h1> </div> <div class="article-info" data-astro-cid-6vkduold> <span data-astro-cid-6vkduold>${project.data.date.toLocaleDateString()}</span> </div> </div> </div> ${renderComponent($$result3, "Content", Content, { "data-astro-cid-6vkduold": true })} <hr class="end-of-article" data-astro-cid-6vkduold> <a href="/projects" class="block-link" data-astro-cid-6vkduold>← Back to projects</a> ` })} </article>` })} `;
}, "/Users/zbowling/Projects/zbowling/src/pages/projects/[project].astro", void 0);

const $$file = "/Users/zbowling/Projects/zbowling/src/pages/projects/[project].astro";
const $$url = "/projects/[project]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$project,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
