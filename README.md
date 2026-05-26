# 🎬 Reelhub

A movie browser built with Next.js and TypeScript, powered by the [TMDB API](https://www.themoviedb.org/).
Browse, filter, search and sort through movies with a clean, accessible UI.

> **Status:** in development
> **Live demo:** _coming soon_

---

## 📑 Table of contents

- [Tech stack](#-tech-stack)
- [Getting started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Available scripts](#-available-scripts)
- [Project structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Attribution](#-attribution)

---

## 🛠 Tech stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Data fetching:** [TanStack Query](https://tanstack.com/query/)
- **API:** [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)
- **Validation:** [Zod](https://zod.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting started

### Prerequisites

- Node.js 20+
- npm
- A TMDB API token ([how to get one](https://developer.themoviedb.org/reference/intro/getting-started))

### Setup

​```bash

# 1. Clone the repository

git clone https://github.com/YOUR_USERNAME/reelhub.git
cd reelhub

# 2. Install dependencies

npm install

# 3. Set up environment variables

cp .env.example .env.local

# Then edit .env.local and add your TMDB token

# 4. Start the dev server

npm run dev
​```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available scripts

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the dev server (with Turbopack)   |
| `npm run build`        | Build for production                    |
| `npm run start`        | Run the production build                |
| `npm run lint`         | Run ESLint                              |
| `npm run format`       | Format all files with Prettier          |
| `npm run format:check` | Check formatting without changing files |

## 📁 Project structure

​`
src/
├── app/                  # routes, layouts
│   └── movies/
│       └── [id]/         # Movie detail page
├── features/             # feature-based module
│   └── movies/
│       ├── api/          # TMDB client and query functions
│       ├── components/   # movie UI components
│       ├── hooks/        # custom hooks
│       └── types/        # domain types
└── shared/               # shared components
├── ui/               # UI components
└── lib/              # utilities, env config
​`

## 📌 Roadmap

- [x] Project scaffolding
- [x] TMDB API client with auth and error handling
- [x] Movie list page with server-side rendering
- [x] URL-synced filters (genre, sort, search)
- [x] Pagination
- [x] Movie detail page
- [ ] Accessibility audit
- [ ] UI polish
- [ ] Optimistic updates
- [ ] Deployment to Vercel

---

## 🙏 Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB.
