globalThis.process ??= {}; globalThis.process.env ??= {};
import { w as createVNode, F as Fragment, aC as __astro_tag_component__ } from './astro/server_f5ZeWRRA.mjs';

const frontmatter = {
  "title": "Housing Advocacy and Civic Leadership",
  "description": "Housing Advocacy and Civic Leadership",
  "icon": {
    "type": "lucide",
    "name": "briefcase-business"
  },
  "index": 10
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "positions-held",
    "text": "Positions Held:"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Beyond technology, I’m involved in civic engagement and housing advocacy.\nI’m currently an elected Executive Board Member and delegate (ADEM) in the California Democratic Party, where I advocate for progressive housing policies.\nI serve on Alameda’s ", createVNode(_components.a, {
        href: "https://www.alamedaca.gov/GOVERNMENT/Boards-Commissions/Open-Government-Commission",
        children: "Open Government Commission"
      }), ", promoting transparency and accountability in local government."]
    }), "\n", createVNode(_components.p, {
      children: ["I’m a leader within ", createVNode(_components.a, {
        href: "https://eastbayyimby.org/",
        children: "East Bay YIMBY"
      }), ", advocating for sustainable urban development, affordable housing,\nand zoning reform. I helped lead campaigns for Alameda’s Measure A (2019) and Measure Z (2020), both initiatives that aimed to revise\nrestrictive housing laws and allow for more housing."]
    }), "\n", createVNode(_components.p, {
      children: ["My advocacy is personal, informed by my own experience of homelessness in my early 20s. I’ve participated in legal and grassroots efforts enforcing housing laws across California, including ", createVNode(_components.a, {
        href: "https://www.yimbylaw.org/press/hcd-include-jobs-housing-balance",
        children: "suing and winning"
      }), "\nagainst the State of California’s Department of Housing and Community Development for their application of the state’s housing laws around the jobs\nand housing ratio, which had underestimated the housing needs of the state by hundreds of thousands of units."]
    }), "\n", createVNode(_components.p, {
      children: "In 2021, I was among the early founding members of the Alphabet Workers Union (AWU) at Google.\nThrough AWU, I worked on labor rights, focusing on unionizing both full-time employees and contract workers, and holding tech companies accountable\nfor ethical workplace practices."
    }), "\n", createVNode(_components.p, {
      children: "In 2024, I took on a leadership role in the YIMBYs for Harris campaign, organizing a virtual fundraiser that raised\nover $125,000 to support Vice President Kamala Harris’s presidential bid. I now serve in a leadership capacity with YIMBY Democrats for America, a\nnational organization dedicated to promoting pro-housing policies within the Democratic Party."
    }), "\n", createVNode(_components.h3, {
      id: "positions-held",
      children: "Positions Held:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Executive Board Member of the California Democratic Party"
      }), "\n", createVNode(_components.li, {
        children: "Open Government Commissioner for the City of Alameda"
      }), "\n", createVNode(_components.li, {
        children: "Elected 3 times as an ADEM delegate the CA Dem Party representing AD-18"
      }), "\n", createVNode(_components.li, {
        children: "Vice President of the City of Alameda Democratic Club"
      }), "\n", createVNode(_components.li, {
        children: "Northern Alameda County Serria Club Housing Committee Member"
      }), "\n", createVNode(_components.li, {
        children: "Lead and Cofounder of East Bay YIMBY"
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

const url = "src/content/cards/advocacy.mdx";
const file = "/Users/zbowling/Projects/zbowling/src/content/cards/advocacy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/zbowling/Projects/zbowling/src/content/cards/advocacy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
