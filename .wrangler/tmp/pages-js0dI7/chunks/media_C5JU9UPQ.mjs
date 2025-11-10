globalThis.process ??= {}; globalThis.process.env ??= {};
import { w as createVNode, F as Fragment, aC as __astro_tag_component__ } from './astro/server_f5ZeWRRA.mjs';

const frontmatter = {
  "title": "Media",
  "description": "Media",
  "icon": {
    "type": "lucide",
    "name": "file-text"
  },
  "index": 20
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["My work and advocacy have been covered in various media outlets. I’ve been featured and quoted in outlets including\n", createVNode(_components.a, {
        href: "https://www.wired.com/2012/02/storyboard-hackathons/",
        children: createVNode(_components.strong, {
          children: "Wired"
        })
      }), ", ", createVNode(_components.a, {
        href: "https://www.theverge.com/google/2017/11/20/16681556/apple-swift-language-google-fuchsia-os-open-source",
        children: createVNode(_components.strong, {
          children: "The Verge"
        })
      }), ",\n", createVNode(_components.a, {
        href: "https://9to5google.com/2018/04/13/fuchsia-friday-the-dream-team-behind-googles-new-os/",
        children: createVNode(_components.strong, {
          children: "9to5Google"
        })
      }), ",\nand the ", createVNode(_components.a, {
        href: "https://www.sfchronicle.com/bayarea/article/Ballot-battle-in-town-of-Alameda-pits-multiunit-15619564.php",
        children: createVNode(_components.strong, {
          children: "San Francisco Chronicle"
        })
      }), ".\nI’ve presented at major tech events, including Mobile World Congress, and appeared on international media such as the Dutch TV show ", createVNode(_components.a, {
        href: "https://www.imdb.com/name/nm7838510/",
        children: createVNode(_components.strong, {
          children: "DWDD University"
        })
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["I also create content on platforms like\n", createVNode(_components.a, {
        href: "https://tiktok.com/@YesInMyBackyard",
        children: createVNode(_components.strong, {
          children: "TikTok"
        })
      }), " and ", createVNode(_components.a, {
        href: "https://www.youtube.com/@YesInMyBackyard",
        children: createVNode(_components.strong, {
          children: "YouTube"
        })
      }), ",\nwhere I engage with over 140,000 subscribers on issues of urbanism, housing, and policy education."]
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

const url = "src/content/cards/media.mdx";
const file = "/Users/zbowling/Projects/zbowling/src/content/cards/media.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/zbowling/Projects/zbowling/src/content/cards/media.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
