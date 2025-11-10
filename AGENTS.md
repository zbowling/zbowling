# AGENTS.md

This file provides guidance to AI agents (like Claude Code) when working with code in this repository.

## Prerequisites

Before running any commands, ensure dependencies are installed:

**Using npm:**
```bash
npm install
```

**Using bun:**
```bash
bun install
```

## Build Commands

### Development Server

**Using npm:**
```bash
npm run dev
# or
npm start
```

**Using bun:**
```bash
bun run dev:bun
# or
bun run start:bun
```

**Important:** When using bun, you **must** use the `:bun` variants of the scripts (e.g., `dev:bun`, `build:bun`). 

**Troubleshooting:** If you see "Unexpected token 'with'" errors when using `bun run dev` or `bunx astro dev`, this is because bun's module resolution can conflict with how Astro/Cloudflare adapter loads modules in SSR mode. The `:bun` scripts use `wrangler pages dev` instead of `astro dev` to work around this issue.

**Important:** The `dev:bun` script uses `wrangler pages dev` which serves the built output from `./dist`. This means:
1. You need to run `bun run build:bun` first to build the site
2. The dev server will serve the built output (no hot reload)
3. You'll need to rebuild after making changes

For a better development experience with hot reload, use `npm run dev` instead of `bun run dev:bun`.

### Build

**Using npm:**
```bash
npm run build
```

**Using bun:**
```bash
bun run build:bun
```

This runs `wrangler types && astro check && astro build` which:
1. Generates Wrangler types
2. Type-checks the Astro project
3. Builds the site for production

### Preview

**Using npm:**
```bash
npm run preview
```

**Using bun:**
```bash
bun run preview:bun
```

This runs `wrangler types && astro preview` to preview the built site locally.

### Astro CLI

The `astro` command provides direct access to the Astro CLI. Common commands:

**Using npm:**
```bash
npm run astro [command]
# Examples:
npm run astro dev          # Start dev server
npm run astro build        # Build for production
npm run astro preview      # Preview production build
npm run astro check        # Type-check the project
npm run astro sync         # Sync Astro types
```

**Using bun:**
```bash
npx astro [command]
# Examples:
npx astro dev          # Start dev server
npx astro build        # Build for production
npx astro preview      # Preview production build
npx astro check        # Type-check the project
npx astro sync         # Sync Astro types
```

**Note:** When using bun, use `npx` instead of `bunx` for Astro commands to avoid module resolution issues. The scripts in `package.json` already include `wrangler types` before Astro commands, so using `npm run dev` or `bun run dev:bun` is recommended over running `astro dev` directly.

## Linting

This project uses Biome for linting and formatting.

**Check code style:**
```bash
npx @biomejs/biome check .
```

**Automatically fix issues:**
```bash
npx @biomejs/biome check --apply .
```

## Code Style

- Use tabs for indentation
- Use double quotes for JavaScript strings
- Follow Astro component conventions (.astro files)
- Import organization is automated via Biome
- TypeScript is configured with strict mode
- Follow existing patterns in MDX content files
- Use Astro's built-in components whenever possible

## Project Structure

- `/src/pages` - Route pages
- `/src/components` - Reusable UI components
- `/src/content` - Content collections (MDX files)
- `/src/layouts` - Page layouts
- `/public` - Static assets

## Configuration

### Astro Configuration (`astro.config.ts`)

- **Site URL:** `https://zacbowling.com`
- **Output Mode:** `server` (SSR with Cloudflare adapter)
- **Adapter:** `@astrojs/cloudflare` (Cloudflare Workers/Pages)

**Integrations:**
- `astro-expressive-code` - Code block syntax highlighting with "dark-plus" theme
- `@astrojs/mdx` - MDX support for content files
- `@astrojs/sitemap` - Automatic sitemap generation
- `spectre` (custom) - Custom integration with:
  - Name: "Zac Bowling"
  - OpenGraph configuration for home, blog, and projects pages

### TypeScript Configuration (`tsconfig.json`)

- Extends: `astro/tsconfigs/strict`
- Includes: `.astro/types.d.ts` and all files
- Excludes: `dist` directory

### Biome Configuration (`biome.json`)

- **Formatter:**
  - Enabled: `true`
  - Indent style: `tab`
- **Linter:**
  - Enabled: `true`
  - Rules: `recommended` (with `style.noParameterAssign` set to `off`)
- **JavaScript Formatter:**
  - Quote style: `double`
- **Organize Imports:** Enabled

### Wrangler Configuration (`wrangler.jsonc`)

- **Name:** `zacbowling`
- **Compatibility Date:** `2025-03-25`
- **Compatibility Flags:** `["nodejs_compat"]`
- **Observability:** Enabled
- **Pages Build Output Directory:** `./dist`

### Netlify Configuration (`netlify.toml`)

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

### Content Collections (`src/content.config.ts`)

The site uses Astro content collections with the following schemas:

1. **other** - MDX files from `src/content/other`
2. **quickInfo** - JSON file (`src/content/info.json`) with:
   - `id: number`
   - `icon: lucide | simple-icons`
   - `text: string`
3. **socials** - JSON file (`src/content/socials.json`) with:
   - `id: number`
   - `icon: lucide | simple-icons`
   - `text: string`
   - `link: string (URL)`
4. **workExperience** - JSON file (`src/content/work.json`) with:
   - `id: number`
   - `title: string`
   - `company: string`
   - `duration: string`
   - `description: string`
5. **tags** - JSON file (`src/content/tags.json`) with:
   - `id: string`
6. **cards** - MDX files from `src/content/cards` with:
   - `title: string`
   - `description: string`
   - `icon: lucide | simple-icons`
   - `index?: number`
7. **posts** - MDX files from `src/content/posts` with:
   - `title: string`
   - `createdAt: date`
   - `updatedAt?: date`
   - `description: string`
   - `tags: reference[]`
   - `draft?: boolean` (default: false)
   - `image: image`
8. **projects** - MDX files from `src/content/projects` with:
   - `title: string`
   - `description: string`
   - `date: date`
   - `image: image`
   - `link?: string (URL)`
   - `info: array` with `text`, `icon`, and optional `link`

### Package Manager

The project specifies `pnpm@9.15.0` as the package manager, but supports both npm and bun for running scripts.

### Dependencies

**Production:**
- `@astrojs/cloudflare` - Cloudflare adapter
- `@astrojs/mdx` - MDX support
- `@astrojs/netlify` - Netlify adapter (optional)
- `@astrojs/node` - Node.js adapter (optional)
- `@astrojs/sitemap` - Sitemap generation
- `@iconify-json/lucide` - Lucide icons
- `@iconify-json/simple-icons` - Simple Icons
- `@iconify/utils` - Icon utilities
- `@shikijs/themes` - Shiki themes
- `astro` - Astro framework
- `astro-expressive-code` - Code block rendering
- `sharp` - Image processing

**Development:**
- `@biomejs/biome` - Linting and formatting
- `shiki` - Syntax highlighting

