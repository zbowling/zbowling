globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_f5ZeWRRA.mjs';
import { $ as $$Image } from './_astro_assets_BBw7_ye3.mjs';
/* empty css                          */

const $$Astro = createAstro("https://zacbowling.com");
const $$ImageGlow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageGlow;
  const { ...props } = Astro2.props;
  const width = props.width;
  const height = props.height;
  return renderTemplate`${maybeRenderHead()}<div class="glow-image" data-astro-cid-lwpf7n2j> ${renderComponent($$result, "Image", $$Image, { ...props, "data-astro-cid-lwpf7n2j": true })} ${renderComponent($$result, "Image", $$Image, { "width": width ? (typeof width === "number" ? width : Number.parseInt(width)) / 4 : void 0, "height": height ? (typeof height === "number" ? height : Number.parseInt(height)) / 4 : void 0, ...props, "class:list": ["glow", [props.class]], "quality": 75, "data-astro-cid-lwpf7n2j": true })} </div> `;
}, "/Users/zbowling/Projects/zbowling/src/components/ImageGlow.astro", void 0);

export { $$ImageGlow as $ };
