globalThis.process ??= {}; globalThis.process.env ??= {};
import { w as createVNode, F as Fragment, aC as __astro_tag_component__ } from './astro/server_f5ZeWRRA.mjs';

const frontmatter = {
  "title": "Patents",
  "description": "Patents",
  "icon": {
    "type": "lucide",
    "name": "file-text"
  },
  "index": 1000
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I hold two patents:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Modification of distracting sounds"
        }), " (", createVNode(_components.a, {
          href: "https://patents.google.com/patent/US10133542B2",
          children: "U.S. Patent 10,133,542"
        }), "), developed during my time at Google to intelligently filter distracting noises from audio streams."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Restaurant management and reservation systems and methods"
        }), " (", createVNode(_components.a, {
          href: "https://patents.google.com/patent/US20130024273A1",
          children: "U.S. Patent Application 20130024273"
        }), "), developed at SeatMe to streamline restaurant operations and customer interactions."]
      }), "\n"]
    })]
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

const url = "src/content/cards/patents.mdx";
const file = "/Users/zbowling/Projects/zbowling/src/content/cards/patents.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/zbowling/Projects/zbowling/src/content/cards/patents.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
