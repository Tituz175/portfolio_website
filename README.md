# Tobi Oyekanmi — Portfolio

Personal portfolio site for Tobi Oyekanmi, AI engineer and machine learning researcher. Single-page React app covering About, Projects, Research, Skills, Experience, and Contact.

Live: [devtobi.xyz](https://www.devtobi.xyz)

## Tech stack

- [React 18](https://react.dev/) + TypeScript
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (Framer Motion) for animation
- [lucide-react](https://lucide.dev/) for icons

No backend, no router — theme (light/dark) is the only client-side state, persisted to `localStorage`.

## Getting started

This project uses [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev      # start the dev server
pnpm build    # production build to dist/
```

## Project structure

```
index.html               Vite entry point
src/
  main.tsx                App root, wraps <App /> in ThemeProvider
  app/App.tsx              Top-level layout and section order
  components/
    layout/                Navbar, Footer, SectionLabel
    sections/               Hero, About, Projects, Research, Skills, Experience, Contact
  styles/                 Tailwind entry, fonts, theme CSS

context/, hooks/, utils/, styles/theme.ts
  Theme system and shared utilities — these live at the repo root
  rather than under src/, so imports from src/components/* reach them
  via relative paths like ../../../hooks/useTheme.
```

## Deployment

Deployed on [Vercel](https://vercel.com/), building `pnpm build` and serving `dist/`.

## Known issues

- `dist/` and `node_modules/` are still tracked in git from before `.gitignore` existed. A `.gitignore` is now in place, so nothing new gets added, but the already-tracked files haven't been untracked yet (`git rm -r --cached dist node_modules`).
- No lint, type-check, or test scripts are configured yet — `tsc` isn't run as part of the build, so type errors aren't currently caught automatically.
