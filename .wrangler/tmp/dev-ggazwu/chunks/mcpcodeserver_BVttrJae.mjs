globalThis.process ??= {}; globalThis.process.env ??= {};
import { w as createVNode, F as Fragment, aC as __astro_tag_component__ } from './astro/server_f5ZeWRRA.mjs';

const frontmatter = {
  "title": "MCP Code Server",
  "date": "2024-10-13T00:00:00.000Z",
  "description": "A Model Context Protocol (MCP) proxy server that translates tool calls into TypeScript code generation, reducing token overhead and leveraging LLM code generation capabilities.",
  "image": "../assets/spectre.png",
  "link": "https://github.com/zbowling/mcpcodeserver",
  "info": [{
    "text": "GitHub Repository",
    "link": "https://github.com/zbowling/mcpcodeserver",
    "icon": {
      "type": "simple-icons",
      "name": "github"
    }
  }, {
    "text": "MIT License",
    "icon": {
      "type": "lucide",
      "name": "file-text"
    }
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "key-features",
    "text": "Key Features"
  }, {
    "depth": 2,
    "slug": "use-cases",
    "text": "Use Cases"
  }, {
    "depth": 2,
    "slug": "technology-stack",
    "text": "Technology Stack"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://github.com/zbowling/mcpcodeserver",
        children: "MCP Code Server"
      }), " is a Model Context Protocol (MCP) proxy server that translates tool calls into TypeScript code generation. Instead of making multiple tool calls back and forth, LLMs can write TypeScript code that calls multiple tools naturally, reducing token overhead and leveraging the LLM’s superior code generation capabilities."]
    }), "\n", createVNode(_components.h2, {
      id: "key-features",
      children: "Key Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TypeScript Code Generation"
        }), ": Automatically generates TypeScript type definitions for all discovered tools from child MCP servers"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Sandboxed Execution"
        }), ": Executes TypeScript code in a secure sandbox with access to all discovered tool functions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Multi-Tool Operations"
        }), ": Enables complex workflows that combine multiple tools in a single code execution"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Upstream Server Integration"
        }), ": Supports integration with official upstream MCP servers (filesystem, memory, sqlite, github, brave-search, fetch)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Error Handling"
        }), ": Graceful error handling with stack traces and recovery mechanisms"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Multi-File Operations"
        }), ": Read and process multiple files in a single code execution"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Transformation"
        }), ": Process data between tool calls without LLM intervention"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Conditional Logic"
        }), ": Make decisions based on tool results"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Error Recovery"
        }), ": Handle errors gracefully without aborting entire workflows"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cross-Server Workflows"
        }), ": Combine tools from multiple MCP servers in unified workflows"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technology-stack",
      children: "Technology Stack"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "TypeScript 5.7+"
      }), "\n", createVNode(_components.li, {
        children: "Node.js 18+"
      }), "\n", createVNode(_components.li, {
        children: "MCP TypeScript SDK 1.20+"
      }), "\n", createVNode(_components.li, {
        children: "Zod for validation"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["The project has gained ", createVNode(_components.strong, {
        children: "8 stars"
      }), " and ", createVNode(_components.strong, {
        children: "1 fork"
      }), " on GitHub, demonstrating its utility for developers working with Model Context Protocol integrations."]
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

const url = "src/content/projects/mcpcodeserver.mdx";
const file = "/Users/zbowling/Projects/zbowling/src/content/projects/mcpcodeserver.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/zbowling/Projects/zbowling/src/content/projects/mcpcodeserver.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
