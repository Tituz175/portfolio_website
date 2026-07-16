# Tobi Oyekanmi — Portfolio

Personal portfolio site for Tobi Oyekanmi, AI engineer and machine learning researcher. Single-page React app covering About, Projects, Research, Skills, Experience, and Contact.

Live: [devtobi.xyz](https://www.devtobi.xyz)

## Tech stack

- [React 18](https://react.dev/) + TypeScript
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (Framer Motion) for animation
- [lucide-react](https://lucide.dev/) for icons
- [Prisma](https://www.prisma.io/) + Postgres — content (projects, publications, skills, experience, education, about) lives in a database and is served through a Vercel serverless function, instead of being hardcoded in the components
- No router — a single page, and theme (light/dark) is the only other client-side state, persisted to `localStorage`

## Getting started

This project uses [pnpm](https://pnpm.io/) and needs a Postgres database (any Postgres works for local dev — e.g. `docker run -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres:16-alpine`).

```bash
pnpm install
cp .env.example .env        # fill in DATABASE_URL
npx prisma migrate dev      # create the schema
pnpm run db:seed            # populate it with the real site content
pnpm dev                    # start the Vite dev server
pnpm build                  # production build to dist/
```

`pnpm dev` alone only serves the frontend — `/api/content` (the serverless function the frontend fetches from) needs `vercel dev` instead of plain `pnpm dev` to run locally, since that's what actually executes the `api/` functions the way Vercel does in production.

## Project structure

```
index.html               Vite entry point
src/
  main.tsx                App root, wraps <App /> in ThemeProvider + SiteContentProvider
  app/App.tsx              Top-level layout and section order
  components/
    layout/                Navbar, Footer, SectionLabel
    sections/               Hero, About, Projects, Research, Skills, Experience, Contact
  styles/                 Tailwind entry, fonts, theme CSS

api/content.ts            Serverless function — the one place the frontend fetches content from
prisma/
  schema.prisma            Data model (Project, Publication, ResearchArea, SkillCategory, ExperienceEntry, EducationEntry, AboutContent)
  seed.mjs                  Populates the DB with the actual current site content

context/, hooks/, utils/, styles/theme.ts
  Theme system, the site-content fetch (SiteContentProvider/useSiteContent),
  and shared utilities — these live at the repo root rather than under src/,
  so imports from src/components/* reach them via relative paths like
  ../../../hooks/useTheme.
```

## Content management

There's no admin UI yet — edit content directly with `npx prisma studio` (points at whatever `DATABASE_URL` resolves to, local or production). A proper in-app admin page is a natural next step once this foundation is in place.

## Deployment

Deployed on [Vercel](https://vercel.com/), building `pnpm build` and serving `dist/`, with `api/content.ts` deployed alongside as a serverless function. Needs a `DATABASE_URL` environment variable set in the Vercel project (e.g. via Vercel Postgres, provisioned from the project's Storage tab) — then `npx prisma migrate deploy` and `pnpm run db:seed` against that same URL to set up and populate the production database.

## Known issues

- `dist/` and `node_modules/` are still tracked in git from before `.gitignore` existed. A `.gitignore` is now in place, so nothing new gets added, but the already-tracked files haven't been untracked yet (`git rm -r --cached dist node_modules`).
- No lint, type-check, or test scripts are configured yet — `tsc` isn't run as part of the build, so type errors aren't currently caught automatically.
