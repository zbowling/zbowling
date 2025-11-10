globalThis.process ??= {}; globalThis.process.env ??= {};
import { w as createVNode, F as Fragment, aC as __astro_tag_component__ } from './astro/server_f5ZeWRRA.mjs';

const frontmatter = {
  "title": "Work Work",
  "description": "Work Work",
  "icon": {
    "type": "lucide",
    "name": "laptop"
  },
  "index": 1
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
      children: ["I’m currently a Staff AI Software Engineer at ", createVNode(_components.a, {
        href: "https://www.meta.com/",
        children: createVNode(_components.strong, {
          children: "Meta"
        })
      }), ", where I’m spearheading the development of AI-powered developer tools at Meta’s Reality Labs for Horizon OS, Quest VR, and wearables. Prior to Meta, I worked at ", createVNode(_components.a, {
        href: "https://www.modular.com/",
        children: createVNode(_components.strong, {
          children: "Modular"
        })
      }), " on AI software and high-performance machine learning infrastructure. Before that, I was part of Google’s ", createVNode(_components.a, {
        href: "https://fuchsia.dev/",
        children: createVNode(_components.strong, {
          children: "Fuchsia OS"
        })
      }), " project, where I worked on system libraries, drivers, toolchains, and a new Bluetooth stack. I helped enable Apple’s Swift programming language to run natively on Fuchsia (", createVNode(_components.a, {
        href: "https://www.theverge.com/2017/11/20/16679342/google-fuchsia-os-swift-language-support",
        children: "The Verge"
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: ["I’m a former startup founder and have held senior engineering positions at several technology companies, including ", createVNode(_components.a, {
        href: "https://venturebeat.com/2016/08/18/google-secretly-acqui-hired-mobile-app-development-startup-apportable/",
        children: createVNode(_components.strong, {
          children: "Apportable (acquired by Google)"
        })
      }), ",\n", createVNode(_components.a, {
        href: "https://www.linkedin.com/in/zbowling",
        children: createVNode(_components.strong, {
          children: "SeatMe (acquired by Yelp)"
        })
      }), ", ", createVNode(_components.a, {
        href: "https://www.doubletwist.com/",
        children: createVNode(_components.strong, {
          children: "doubleTwist"
        })
      }), ",\n", createVNode(_components.a, {
        href: "https://www.linkedin.com/in/zbowling",
        children: createVNode(_components.strong, {
          children: "Texas Instruments"
        })
      }), ", and ", createVNode(_components.a, {
        href: "https://www.linkedin.com/in/zbowling",
        children: createVNode(_components.strong, {
          children: "Match.com"
        })
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "My professional specializations include:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Operating systems and compiler development"
      }), "\n", createVNode(_components.li, {
        children: "Cross platform development for desktop, embedded, and mobile platforms"
      }), "\n", createVNode(_components.li, {
        children: "Fullstack Rust, Swift, C/C++, Zig, and Python"
      }), "\n", createVNode(_components.li, {
        children: "Packaging, distribution, and deployment of software"
      }), "\n", createVNode(_components.li, {
        children: "Security and performance optimization"
      }), "\n", createVNode(_components.li, {
        children: "Developer evangelism and community engagement"
      }), "\n", createVNode(_components.li, {
        children: "Building startups"
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

const url = "src/content/cards/tech.mdx";
const file = "/Users/zbowling/Projects/zbowling/src/content/cards/tech.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/zbowling/Projects/zbowling/src/content/cards/tech.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
