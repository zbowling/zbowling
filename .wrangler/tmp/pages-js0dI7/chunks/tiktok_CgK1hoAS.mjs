globalThis.process ??= {}; globalThis.process.env ??= {};
import { w as createVNode, F as Fragment, aC as __astro_tag_component__ } from './astro/server_f5ZeWRRA.mjs';

const frontmatter = {
  "title": "YesInMyBackyard TikTok",
  "date": "01-01-2019",
  "description": "My urbanist movement TikTok account with over 100,000 followers.",
  "image": "../assets/yimbytiktok.png",
  "info": [{
    "text": "YesInMyBackyard TikTok",
    "link": "https://tiktok.com/@yesinmybackyard",
    "icon": {
      "type": "simple-icons",
      "name": "tiktok"
    }
  }, {
    "text": "YesInMyBackyard YouTube",
    "link": "https://www.youtube.com/@YesInMyBackyard",
    "icon": {
      "type": "simple-icons",
      "name": "youtube"
    }
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Started in 2019, (@YesInMyBackyard)[", createVNode(_components.a, {
        href: "https://tiktok.com/@yesinmybackyard",
        children: "https://tiktok.com/@yesinmybackyard"
      }), "] has grown to over 100,000 followers and 100M+ views. On YouTube, I have over 36k subscribers and 10M+ views."]
    }), "\n", createVNode("blockquote", {
      class: "tiktok-embed",
      cite: "https://www.tiktok.com/@yesinmybackyard/video/7099873810387569963",
      "data-video-id": "7099873810387569963",
      style: "max-width: 605px;min-width: 325px;",
      children: [" ", createVNode("section", {
        children: [" ", createVNode("a", {
          target: "_blank",
          title: "@yesinmybackyard",
          href: "https://www.tiktok.com/@yesinmybackyard?refer=embed",
          children: "@yesinmybackyard"
        }), " Modern zoning and building code would make this impossible to do today ", createVNode("a", {
          title: "alamedaca",
          target: "_blank",
          href: "https://www.tiktok.com/tag/alamedaca?refer=embed",
          children: "#alamedaca"
        }), " ", createVNode("a", {
          title: "yimbytok",
          target: "_blank",
          href: "https://www.tiktok.com/tag/yimbytok?refer=embed",
          children: "#yimbytok"
        }), " ", createVNode("a", {
          title: "spitehouse",
          target: "_blank",
          href: "https://www.tiktok.com/tag/spitehouse?refer=embed",
          children: "#spitehouse"
        }), " ", createVNode("a", {
          title: "revenge",
          target: "_blank",
          href: "https://www.tiktok.com/tag/revenge?refer=embed",
          children: "#revenge"
        }), " ", createVNode("a", {
          title: "nimby",
          target: "_blank",
          href: "https://www.tiktok.com/tag/nimby?refer=embed",
          children: "#nimby"
        }), " ", createVNode("a", {
          title: "yimby",
          target: "_blank",
          href: "https://www.tiktok.com/tag/yimby?refer=embed",
          children: "#yimby"
        }), " ", createVNode("a", {
          target: "_blank",
          title: "♬ original sound - YIMBY Zac Bowling 🥑",
          href: "https://www.tiktok.com/music/original-sound-7099873767928662830?refer=embed",
          children: "♬ original sound - YIMBY Zac Bowling 🥑"
        }), " "]
      }), " "]
    }), "\n", createVNode("script", {
      async: true,
      src: "https://www.tiktok.com/embed.js"
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

const url = "src/content/projects/tiktok.mdx";
const file = "/Users/zbowling/Projects/zbowling/src/content/projects/tiktok.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/zbowling/Projects/zbowling/src/content/projects/tiktok.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
