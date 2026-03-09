# AGENTS GUIDE
For agentic contributors working inside this repo.
Stack: Vite + React 18 + TypeScript + Tailwind/shadcn-ui + Framer Motion + TanStack Query + React Router (HashRouter) + i18next + Vitest/RTL.

## Commands
- Install: `npm ci` (preferred; package-lock present). Bun lock exists but npm is canonical here.
- Dev server: `npm run dev` (Vite on port 8080).
- Build: `npm run build`.
- Build (dev mode settings): `npm run build:dev`.
- Preview built bundle: `npm run preview` after `npm run build`.
- Lint: `npm run lint` (ESLint 9, TS configs).
- Tests (all): `npm test` or `npm run test` (vitest run).
- Tests watch/UI: `npm run test:watch`.
- Single test file: `npm run test -- src/test/example.test.ts` or another path.
- Single test name: `npm run test -- -t "name substring"`.
- Deploy (gh-pages): `npm run build` then `npm run deploy` (uses dist/, branch gh-pages, base `/portfolio/`).

## Repository Layout
- `src/main.tsx` bootstraps app with HashRouter and providers.
- `src/App.tsx` wires routes and wraps QueryClientProvider + Tooltip + Toasters.
- Pages under `src/pages/` (Index, Work, About, Contact, NotFound).
- Shared layout in `src/components/layout/` (Navbar, Footer, Layout).
- UI building blocks in `src/components/ui/` including PageTransition, toasts, etc.
- Misc components in `src/components/` (NavLink, work sections).
- Hooks in `src/hooks/` (check for reuse before adding new).
- Utilities in `src/lib/` (`cn` for class merging).
- i18n setup and locales in `src/i18n/` (en/de).
- Styles in `src/index.css`, `src/App.css`, Tailwind config `tailwind.config.ts`.
- Tests in `src/test/`, test setup `src/test/setup.ts` registered via vitest.config.ts.
- Build config: `vite.config.ts` (base `/portfolio/`, react-swc, componentTagger in dev).
- TypeScript configs: `tsconfig*.json` with `@/*` path alias.

## Coding Style
- TypeScript is permissive (`noImplicitAny` off); still prefer explicit types on exports, props, and return values.
- Prefer function components as const arrows with PascalCase names.
- Use named exports for shared utilities; default exports acceptable for pages.
- Keep imports ordered: external packages first, then aliases `@/...`, then relative paths.
- Use `@/` path alias instead of long relative traversals where possible.
- Use `cn` from `@/lib/utils` when combining Tailwind classes instead of string concatenation.
- Favor composition over inheritance; keep components small and focused.
- Avoid unused vars despite lint rule being off; clean imports before committing.
- Keep React hooks at top of components; obey Rules of Hooks.
- For navigation links, reuse `NavLink` wrapper to preserve active class handling.
- Animations should use framer-motion variants similar to existing fade/stagger patterns.

## Styling
- Tailwind is primary styling layer; custom CSS lives in `src/index.css` with tokens/utility classes.
- Use design tokens defined as CSS variables (hsl values) for colors; avoid hard-coded hex unless adding tokens.
- Respect typography choices (`--font-display`, `--font-body`); avoid default system stacks unless necessary.
- Buttons/links should use existing `.btn-editorial`, `.editorial-link`, `.editorial-container`, `.section-spacing` helpers when appropriate.
- Keep radii aligned with CSS variable `--radius` (square aesthetic).
- Dark mode is class-based; prefer `className="dark"` toggles if extending.
- For new components, prefer Tailwind utility classes plus `cn` for conditional styling.
- Images/videos often wrapped in `.media-item` to enable subtle hover scale.

## Routing
- Router uses `HashRouter` to support GitHub Pages; avoid BrowserRouter unless base updated.
- Routes live in `App.tsx`; keep not-found route last.
- Use `useLocation` + ScrollToTop helper already defined to reset scroll; keep similar behavior on new routes.
- When adding routes, ensure nav links and i18n labels updated.

## i18n
- i18next configured in `src/i18n/index.ts`; translations stored in `en.json` and `de.json`.
- When adding copy, create keys in both languages; avoid inline literal text in components.
- `useTranslation` hook returns `t`; keep keys namespaced (e.g., `home.title`).
- Maintain parity between language files; preserve existing structure and arrays.
- Avoid hardcoding locale selection; default `lng` is `en` with fallback `en`.

## Testing
- Vitest with jsdom environment; setup file mocks `matchMedia` and imports jest-dom.
- Use React Testing Library for component tests; query by role/text, avoid implementation details.
- Place tests alongside features or under `src/test/`; naming `*.test.tsx` or `*.spec.tsx`.
- Snapshot tests discouraged unless intentional for visual regression.
- Prefer testing behavior (visible text, interactions) over classes.
- Run focused file: `npm run test -- src/path/to/file.test.tsx`.
- Run focused test: `npm run test -- -t "renders contact"`.
- Keep tests deterministic; avoid timers unless necessary.
- If adding globals, register in `src/test/setup.ts`.

## Linting & Formatting
- ESLint config extends `@eslint/js` recommended + `typescript-eslint` recommended; `dist` ignored.
- React Hooks plugin enforced; follow dependency arrays strictly.
- React Refresh rule warns when exporting non-components; keep default export components pure.
- `@typescript-eslint/no-unused-vars` is off; manual cleanup required.
- No Prettier config; mirror existing style (mixed quotes tolerated, semi on).
- Prefer consistent indentation (2 spaces) and trailing commas as current code shows.
- Use ES2020+ features allowed by `moduleResolution: bundler`.
- Avoid `any`; if necessary, isolate and document why.

## Error Handling & UX
- Surfaced toasts use `@/components/ui/toaster` or Sonner; choose based on needed style.
- For async mutations, consider wrapping with try/catch and show user feedback.
- Guard against null DOM access; use optional chaining instead of non-null (!) unless certain.
- Maintain graceful fallback UI on missing data; avoid crashes.

## Accessibility
- Prefer semantic HTML; use `<button>` for clickables, `<a>` for links with `href`.
- Provide `alt` text for images (`homeImage` etc.).
- Ensure focus states visible; `focus-editorial` utility available.
- Use motion with reduced motion consideration when adding heavy animations.

## Assets
- Static assets live in `src/assets/`; import for bundling (`import img from '@/assets/home.jpeg'`).
- For new media, optimize size; prefer webp when possible.
- Keep filenames kebab-case; avoid spaces.

## Build & Deploy Notes
- Vite base set to `/portfolio/`; ensure asset paths respect base.
- Dev server listens on all hosts `::` port 8080 with HMR overlay disabled.
- Output goes to `dist/`; repo ignores it.
- `homepage` in package.json points to GitHub Pages URL.

## Dependency Management
- Prefer npm; keep `package-lock.json` authoritative; Bun lock present but unused in scripts.
- When adding deps, use `npm install <pkg>` to update lock.
- Keep `peerDependencies` expectations of shadcn/radix in mind; follow semver ranges already set.
- Avoid upgrading React/Vite without coordination.

## Layout
- Root layout uses `Navbar` + `Footer`; pages wrapped in `Layout` + `PageTransition`.
- Maintain consistent spacing with `.section-spacing` and `.editorial-container`.
- Use display classes (`display-xl`, etc.) defined in CSS for hero typography.
- Avoid inline styles unless necessary; prefer classes/variables.

## Git & Workflow
- Do not commit build artifacts or node_modules.
- Keep commits focused; follow existing convention (no strict prefix).
- Branch naming flexible; ensure GH Pages base unaffected.
- Run lint/tests before PRs when changes touch TS/JS.

## AI Assistant Rules
- Cursor rules: none present (`.cursor/` and `.cursorrules` absent).
- Copilot rules: none present (`.github/copilot-instructions.md` missing).
- Follow this AGENTS guide as source of truth.

## Common Pitfalls
- Forgetting HashRouter base; avoid absolute paths in routes/links.
- Missing translations when adding text; update both en/de.
- Ignoring base `/portfolio/` causing broken assets after deploy.
- Using BrowserRouter breaks gh-pages; keep hash-based navigation.
- Hardcoding colors/fonts ignoring CSS variables; keep themeable.
- Not wrapping animations with `AnimatePresence` when conditionally rendering routes.

## Verification Checklist
- Run `npm run lint`.
- Run `npm run test -- <file>` for touched areas.
- Verify `npm run build` succeeds before deploying.
- Manually spot-check pages via `npm run dev` (routes /, /work, /about, /contact).
- Ensure new assets load with base path and have alt text.
- Confirm translations and nav labels remain consistent.
