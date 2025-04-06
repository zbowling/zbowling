# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build the site
- `pnpm preview` - Preview built site
- `pnpm astro` - Run Astro CLI commands

## Linting
- This project uses Biome for linting and formatting
- Run `npx @biomejs/biome check .` to check code style
- Run `npx @biomejs/biome check --apply .` to automatically fix issues

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