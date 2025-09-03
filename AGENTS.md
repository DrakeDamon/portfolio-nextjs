# Repository Guidelines

## Project Structure & Modules
- `src/app/`: App Router pages and layouts (e.g., `page.tsx`, route folders like `projects/[slug]`).
- `src/components/`: Reusable UI and site components (`ui/*` for primitives).
- `src/data/`: Structured data used by pages/components.
- `content/case-studies/`: MDX case studies (`kebab-case.mdx` with frontmatter: `title`, `slug`, `summary`, etc.).
- Root config: `next.config.mjs`, `tailwind.config.ts`, `.eslintrc.json`, `.prettierrc`, `tsconfig.json`.

## Build, Test, and Development
- `npm run dev`: Start Next.js dev server at `http://localhost:3000`.
- `npm run build`: Static export build for GitHub Pages; also runs `next-sitemap`.
- `npm run start`: Serve a production build locally.
- `npm run export`: Alias of `next build` (static export is configured via Next’s `output: 'export'`).
- `npm run lint`: ESLint (Next core-web-vitals rules).
- `npm run typecheck`: TypeScript type checking (no emit).
- `npm run deploy`: Builds, creates `out/.nojekyll`, and publishes `out/` to `gh-pages` via `gh-pages`.

## Coding Style & Naming
- TypeScript, strict mode enabled; imports may use `@/*` alias to `src/*`.
- Prettier: 2 spaces, single quotes, no semicolons, trailing commas `es5`.
- Components: PascalCase files in `src/components` (e.g., `HeroSection.tsx`).
- Routes/MDX slugs: kebab-case (e.g., `projects/[slug]`, `sec-edgar-warehouse.mdx`).
- TailwindCSS with class-based dark mode (`dark`), custom tokens in `tailwind.config.ts`.

## Testing Guidelines
- No formal test suite is configured. For changes, ensure:
  - `npm run typecheck` and `npm run lint` pass.
  - Key flows render and navigate in dev.
  - Static export completes (`npm run build`) without warnings/regressions.

## Commit & Pull Requests
- Use Conventional Commits seen in history: `feat:`, `fix:`, `chore:`, etc.
- PRs should include:
  - Clear description, linked issues, and scope.
  - Screenshots/GIFs for UI changes (desktop + mobile, light/dark).
  - Checklist: dev tested, `typecheck`/`lint` pass, static export builds.

## Security & Configuration Tips
- GitHub Pages: build sets `GITHUB_PAGES=true` to apply `basePath`/`assetPrefix` for `portfolio-nextjs` and unoptimized images. Avoid setting this in local dev.
- Content: Prefer MDX in `content/case-studies/`; mark `published: true` in frontmatter to surface items.

