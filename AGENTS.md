# AGENTS.md

## Stack

Astro 6 + React 19 + Tailwind CSS 4, deployed to Vercel. Package manager is **pnpm**. Requires Node >= 22.12.0.

## Commands

- `pnpm dev` — dev server on `localhost:4321`
- `pnpm build` — production build to `dist/`
- `pnpm preview` — preview the build
- Type checking: `pnpm astro check` (no dedicated script in package.json)
- Formatting: `pnpm exec prettier --check .` / `pnpm exec prettier --write .` (uses `prettier-plugin-astro`)

There is no lint script configured.

## Architecture

Single-page portfolio. All content is on one route (`src/pages/index.astro`) composed of section components.

- **Pages**: `src/pages/index.astro` — imports and assembles all sections
- **Components**: `src/components/` — Astro components for each section (Home, About, Experience, Skills, Projects, Contact) plus subdirectories with supporting pieces. `Navigation.tsx` and `TiltWrapper.tsx` are React components used with `client:*` directives.
- **Data**: `src/data/` — typed TS files (`experiences.ts`, `projects.ts`, `skills.ts`) hold all portfolio content. Types are in `src/types/index.ts`.
- **Styles**: `src/styles/global.css` — Tailwind v4 CSS-based config with custom theme colors (oklch), keyframes, and `@utility` definitions. No `tailwind.config.js`.
- **Icons**: Uses `astro-icon` with iconify icon sets (many `@iconify-json/*` packages). Icons are referenced by their iconify name.

## Path aliases

Defined in `tsconfig.json`:

- `@/*` → `src/*`
- `@/components/*` → `src/components/*`
- `@/layouts/*` → `src/layouts/*`
- `@/styles/*` → `src/styles/*`

## Conventions

- React components in Astro files must use `client:*` directives (e.g., `client:load`).
- Tailwind is v4 — configure theme tokens and utilities in `global.css` via `@theme` and `@utility`, not in a JS config file.
- To add portfolio content, edit the data files in `src/data/` following the interfaces in `src/types/index.ts`.
- `*.xml` files are gitignored (repomix outputs exist in the tree but should not be edited).

## Deploy

Vercel. Deployment is disabled for branches named `astro` and `new-portfolio` (see `vercel.json`).
