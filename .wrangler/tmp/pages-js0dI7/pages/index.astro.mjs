globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, e as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_f5ZeWRRA.mjs';
/* empty css                                 */
import { g as getCollection, a as getEntry, r as renderEntry, $ as $$Card } from '../chunks/_astro_content_DoQDnXiB.mjs';
import { $ as $$Layout, a as $$Icon, n as name, o as openGraph } from '../chunks/Layout_CiIvDg2m.mjs';
import { $ as $$ImageGlow } from '../chunks/ImageGlow_Dj3aWSX9.mjs';
export { renderers } from '../renderers.mjs';

const ProfilePicture = new Proxy({"src":"/_astro/pfp.BdLJ_S1w.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/zbowling/Projects/zbowling/src/assets/pfp.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const [
    /*posts,*/
    cards,
    projects,
    about,
    workExperience,
    quickInfo,
    socials
  ] = await Promise.all([
    //getCollection('posts', (post) => post.data.draft !== true),
    getCollection("cards"),
    getCollection("projects"),
    getEntry("other", "about"),
    getCollection("workExperience"),
    getCollection("quickInfo"),
    getCollection("socials")
  ]);
  const { Content: About } = await renderEntry(about);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": openGraph.home.title, "description": openGraph.home.description, "pagefindIgnore": true }, { "left": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="layout-grid-left"> ${renderComponent($$result2, "Card", $$Card, { "class": "flex-col-card" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ImageGlow", $$ImageGlow, { "quality": 100, "width": 80, "height": 80, "src": ProfilePicture, "alt": "Zac Bowling smiling", "loading": "eager" })} <h2>${name}</h2> <ul class="overview-list"> ${quickInfo.map((info) => renderTemplate`<li> ${renderComponent($$result3, "Icon", $$Icon, { "type": info.data.icon.type, "name": info.data.icon.name, "width": 24, "height": 24, "class": "glow-icon" })} <span>${info.data.text}</span> </li>`)} </ul> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <h3 class="no-mt">Socials</h3> <ul class="overview-list"> ${socials.map((item) => renderTemplate`<li> <a${addAttribute(item.data.link, "href")} class="socials-link"> ${renderComponent($$result3, "Icon", $$Icon, { "type": item.data.icon.type, "name": item.data.icon.name, "width": 24, "height": 24, "class": "glow-icon" })} <span>${item.data.text}</span> </a> </li>`)} </ul> ` })} </div>`, "right": async ($$result2) => renderTemplate`<div class="layout-grid-right"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="header-container"> ${renderComponent($$result3, "Icon", $$Icon, { "type": "lucide", "name": "user", "width": 24, "height": 24, "class": "glow-icon" })} <h2>About me</h2> </div> <div class="prose"> ${renderComponent($$result3, "About", About, {})} </div> ` })} ${cards.sort((a, b) => (a.data.index ?? 0) - (b.data.index ?? 0)).map(async (card) => {
    const { Content: CardContent } = await renderEntry(card);
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="header-container"> ${renderComponent($$result3, "Icon", $$Icon, { "type": card.data.icon.type, "name": card.data.icon.name, "width": 24, "height": 24, "class": "glow-icon" })} <h2>${card.data.title}</h2> </div> <div class="prose"> ${renderComponent($$result3, "CardContent", CardContent, {})} </div> ` })}`;
  })} <!--
		<Card>
			<div class="header-container">
				<Icon type='lucide' name="rss" width={24} height={24} class='glow-icon' />
				<h2>Latest Posts</h2>
			</div>
			<div class="content-container">
				{posts.sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime()).slice(0, 2).map((post) => (
					<a href={\`/blog/\${post.id}\`} class="post-container">
						<div class="post-header">
							<h3>{post.data.title}</h3>
							<span class="post-date">{post.data.createdAt.toLocaleDateString()}</span>
						</div>
						<span>{post.data.description}</span>
					</a>
				))}
			</div>
		</Card>
		--> ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="header-container"> ${renderComponent($$result3, "Icon", $$Icon, { "type": "lucide", "name": "folder-git", "width": 24, "height": 24, "class": "glow-icon" })} <h2>Latest Projects</h2> </div> <div class="content-container"> ${projects.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 2).map((project) => renderTemplate`<a${addAttribute(`/projects/${project.id}`, "href")} class="post-container"> <div class="post-header"> <h3>${project.data.title}</h3> <span class="post-date"> ${project.data.date.toLocaleDateString()} </span> </div> <span>${project.data.description}</span> </a>`)} </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="header-container"> ${renderComponent($$result3, "Icon", $$Icon, { "type": "lucide", "name": "briefcase-business", "width": 24, "height": 24, "class": "glow-icon" })} <h2>Work Experience</h2> </div> <div class="work-experience-container"> ${workExperience.map((entry) => renderTemplate`<div class="work-experience-entry"> <span class="work-experience-duration"> ${entry.data.duration} </span> <h3 class="work-experience-company">${entry.data.company}</h3> <span class="work-experience-role">${entry.data.title}</span> <p class="work-experience-desc">${entry.data.description}</p> </div>`)} </div> ` })} </div>` })}`;
}, "/Users/zbowling/Projects/zbowling/src/pages/index.astro", void 0);

const $$file = "/Users/zbowling/Projects/zbowling/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
