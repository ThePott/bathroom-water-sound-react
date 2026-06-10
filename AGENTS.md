# Agents.md

## Stack

React 19, TypeScript ~6.0, Vite 8, Tailwind CSS v4, pnpm.

## Commands

| Command | What it runs |
|---|---|
| `pnpm dev` | `vite` (dev server) |
| `pnpm build` | `tsc -b && vite build` (typecheck then build — run both, not just vite) |
| `pnpm lint` | `eslint .` |
| `pnpm preview` | `vite preview` |

No test framework is configured.

## Tailwind CSS v4

Uses the new `@import "tailwindcss"` syntax in CSS (not `@tailwind` directives). The Vite plugin `@tailwindcss/vite` handles processing — no `tailwind.config` file.

## `verbatimModuleSyntax`

Enabled in both tsconfigs. Type-only imports **must** use `import type` / `export type`.

## Structure

- `src/main.tsx` — app entrypoint
- `src/App.tsx` — single-page contact form with animated modal
- `src/Modal/` — `Modal`, `ModalBackdrop`, `ModalContent` (uses `motion` for enter/exit animations)
- `public/favicon.svg`, `public/icons.svg` — static assets

No monorepo, no codegen, no migrations, no CI workflows.
