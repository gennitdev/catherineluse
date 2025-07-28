# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs type-check and build-only)
- `npm run build-only` - Build without type checking
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a Vue 3 personal blog/portfolio website built with:

### Tech Stack
- **Vue 3** with Composition API and TypeScript
- **Vite** for build tooling and development server
- **Vue Router** for client-side routing
- **Tailwind CSS** for styling with custom color palette
- **Vuetify** for UI components (particularly display utilities)
- **Markdown rendering** using `@kangc/v-md-editor` and `markdown-it`

### Key Architecture Patterns

**Static Blog Content**: Blog posts are stored as markdown files in `public/posts/[slug]/post.md` with YAML frontmatter. The app fetches these via HTTP requests and parses frontmatter using `js-yaml`.

**Component Structure**:
- `ProfileLayout.vue` - Main layout wrapper
- `BlogList.vue` - Homepage showing all blog posts with previews 
- `BlogPost.vue` - Individual post view
- `MarkdownPreview.vue` - Reusable markdown renderer with word limiting and "show more" functionality

**Routing**: Simple nested routing structure where ProfileLayout wraps either BlogList (/) or BlogPost (/post/:slug).

**Blog Post Loading**: Posts are hardcoded in `BlogList.vue:63-94` as a list of slugs. The component fetches each post's markdown file and extracts title/date from frontmatter.

**Styling**: Uses custom Tailwind config with GitHub-inspired color palette. Typography styles are customized for markdown content.

### File Structure Notes
- TypeScript and JavaScript versions of components exist side by side (`.vue.ts` and `.vue.js`)
- Uses `@/` alias for `src/` directory imports
- Blog post assets (images) are stored alongside each post in `public/posts/[slug]/`
- Main entry point is `src/main.ts`

### Development Notes
- Uses Axios for HTTP requests to fetch markdown files
- Date formatting handled by `luxon` library via `dateTimeUtils.ts`
- Vue 3 Composition API pattern throughout
- TypeScript with relaxed config (`noImplicitAny: false`)