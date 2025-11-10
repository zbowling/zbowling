globalThis.process ??= {}; globalThis.process.env ??= {};
import { w as createVNode, F as Fragment, aC as __astro_tag_component__ } from './astro/server_f5ZeWRRA.mjs';

const frontmatter = {
  "title": "Random Facts",
  "description": "Random Facts",
  "icon": {
    "type": "lucide",
    "name": "smile"
  },
  "index": 99
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ul: "ul",
    ...props.components
  };
  return createVNode(_components.ul, {
    children: ["\n", createVNode(_components.li, {
      children: "Competed in over 140+ hackathons from 2008 to 2013"
    }), "\n", createVNode(_components.li, {
      children: "I run both the Alameda Reddit and Alameda Peeps Facebook groups, which have over 18,000 residents each from Alameda, CA."
    }), "\n", createVNode(_components.li, {
      children: "I have a TikTok and YouTube channel with over 140,000 subscribers combined."
    }), "\n", createVNode(_components.li, {
      children: "I have an awesome wife and two dogs"
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/cards/funfacts.mdx";
const file = "/Users/zbowling/Projects/zbowling/src/content/cards/funfacts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/zbowling/Projects/zbowling/src/content/cards/funfacts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
