# AGENTS.md

This file provides guidance to AI agents (like Claude Code) when working with code in this repository.

## Prerequisites

Before running any commands, ensure dependencies are installed:

```bash
bun install
```

## Build Commands

### Development Server

```bash
bun run dev
# or
bun run start
```

In Astro 6, the dev server runs inside Cloudflare's `workerd` runtime via the Vite Environment API. This means `astro dev` runs your code in the same runtime as production, with access to Cloudflare bindings, KV, etc.

### Build

```bash
bun run build
```

This runs `wrangler types && astro check && astro build` which:
1. Generates Wrangler types (`worker-configuration.d.ts`)
2. Type-checks the Astro project
3. Builds the site for production

### Preview

```bash
bun run preview
```

This runs `wrangler types && astro preview` to preview the built site locally using the Cloudflare `workerd` runtime.

### Deploy

```bash
bun run deploy
```

This builds and deploys to Cloudflare Workers via `astro build && wrangler deploy`.

### Astro CLI

```bash
bunx astro [command]
# Examples:
bunx astro dev          # Start dev server
bunx astro build        # Build for production
bunx astro preview      # Preview production build
bunx astro check        # Type-check the project
bunx astro sync         # Sync Astro types
```

**Note:** The scripts in `package.json` already include `wrangler types` before Astro commands, so using `bun run dev` is recommended over running `bunx astro dev` directly.

## Linting

This project uses Biome for linting and formatting.

**Check code style:**
```bash
bunx @biomejs/biome check .
```

**Automatically fix issues:**
```bash
bunx @biomejs/biome check --apply .
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
- `/package` - Custom "spectre" Astro integration

## Configuration

### Astro Configuration (`astro.config.ts`)

- **Framework:** Astro 6 (beta)
- **Site URL:** `https://zacbowling.com`
- **Output Mode:** `server` (SSR with Cloudflare adapter)
- **Adapter:** `@astrojs/cloudflare` (Cloudflare Workers)
- **Image Service:** `compile` (Sharp at build time for prerendered pages)

**Integrations:**
- `astro-expressive-code` - Code block syntax highlighting with "dark-plus" theme
- `@astrojs/mdx` - MDX support for content files
- `@astrojs/sitemap` - Automatic sitemap generation
- `spectre` (custom, in `/package`) - Custom integration with:
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
- **Main:** `@astrojs/cloudflare/entrypoints/server` (Cloudflare Workers entrypoint)
- **Compatibility Date:** `2026-02-05`
- **Compatibility Flags:** `["nodejs_compat"]`
- **Observability:** Enabled
- **Assets:** Bound as `ASSETS` from `./dist`

**Deployment:** This project deploys to **Cloudflare Workers** (not Pages). Use `wrangler deploy` after building.

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
9. **news** - JSON file (`src/content/news.json`) with:
   - `id: number`
   - `title: string`
   - `date: date`
   - `url: string (URL)`
   - `publication: string`
   - `category?: string`
   - `description?: string`
   - `featured?: boolean` (default: false)

### Package Manager

This project uses **bun** as its package manager and runtime.

### Dependencies

**Production:**
- `astro` - Astro 6 framework (beta)
- `@astrojs/cloudflare` - Cloudflare Workers adapter
- `@astrojs/mdx` - MDX support
- `@astrojs/sitemap` - Sitemap generation
- `@astrojs/check` - Type checking
- `@iconify-json/lucide` - Lucide icons
- `@iconify-json/simple-icons` - Simple Icons
- `@iconify/utils` - Icon utilities
- `@shikijs/themes` - Shiki themes
- `astro-expressive-code` - Code block rendering
- `sharp` - Image processing (build-time only)
- `wrangler` - Cloudflare Workers CLI

**Development:**
- `@biomejs/biome` - Linting and formatting
- `shiki` - Syntax highlighting
