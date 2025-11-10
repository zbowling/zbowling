globalThis.process ??= {}; globalThis.process.env ??= {};
import { w as createVNode, F as Fragment, aC as __astro_tag_component__ } from './astro/server_f5ZeWRRA.mjs';

const frontmatter = {
  "title": "About"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "I’m a software engineer, housing advocate, and civic leader based in Alameda, California.\r\nWith over two decades of experience in technology and public advocacy, I work at the intersection of software engineering,\r\nopen-source contributions, and grassroots political engagement."
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
const url = "src/content/other/about.mdx";
const file = "/Users/zbowling/Projects/zbowling/src/content/other/about.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/zbowling/Projects/zbowling/src/content/other/about.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
