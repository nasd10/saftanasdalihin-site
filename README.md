# Safta Nasdalihin — Personal Portfolio Website

This repository contains the source for the personal portfolio website of Safta Nasdalihin. The site is a modern, responsive single-page React application built with Vite and Tailwind CSS and is intended to showcase projects, skills, and contact information.

---

## Key technologies

- React (JSX)
- Vite (development and build tooling)
- Tailwind CSS (utility-first styling, Tailwind v4)
- PostCSS
- React Router (client-side routes)
- React Icons

## Live site

The site is deployed (previously) on Netlify. The repository includes a `_redirects` file and a `sitemap.xml` in `frontend/public` to help with hosting and SEO.

## Main features

- Home, About, Projects and Contact pages
- Project preview cards with image, description and links to live/contract or GitHub
- Custom animated cursor and subtle background animations
- Responsive layout with a mobile-friendly navigation drawer
- Contact form wired for Netlify forms (progressive fallback available)

## Repository layout (important files)

- `frontend/`
  - `index.html` — app entry HTML
  - `package.json` — scripts & dependencies
  - `vite.config.js` — Vite configuration
  - `postcss.config.js` & `tailwind.config.js` — Tailwind/PostCSS setup
  - `src/` — React source files
    - `main.jsx` — React entry
    - `App.jsx` — application routes and layout
    - `index.css`, `App.css` — global styles and utilities
    - `components/` — reusable React components (Navbar, Hero, Footer, CustomCursor, etc.)
    - `pages/` — route pages (Home, About, Project, Contact)
  - `public/` — static assets and `sitemap.xml`

## Local development

Open a terminal (PowerShell on Windows). From the repository root run:

```powershell
cd frontend
npm install
npm run dev
```

This starts Vite's development server and opens a local address (usually `http://localhost:5173`).

## Build for production

To build the production bundle and preview it locally:

```powershell
cd frontend
npm run build
npm run preview
```

## Linting

There is an `eslint` configuration included. Run:

```powershell
cd frontend
npm run lint
```

## Notes and troubleshooting

- This project uses Tailwind v4 with a PostCSS plugin. If styles are not applied, ensure `node_modules` is installed and that PostCSS is running (Vite handles this during `dev`/`build`).
- If the custom cursor or some animations behave oddly on mobile, the cursor is intentionally hidden on small screens in the CSS (`@media (max-width: 768px)`).
- If you change routing paths, keep the Netlify `_redirects` rules in mind for production hosting.

## Development assumptions

- Node.js (LTS) is recommended (Node 16+ tested). Use your preferred Node version manager if necessary.
- NPM is used in this project (scripts in `frontend/package.json`).

## Contact

If you need to reach the site owner:

- Email: saftanasdalihin@gmail.com
- GitHub: https://github.com/nasdthestudent
- LinkedIn: https://www.linkedin.com/in/saftanasdalihin/

---

If you want, I can:

- add a short `CONTRIBUTING.md` or `CODE_OF_CONDUCT`
- wire a CI script (GitHub Actions) that runs lint/build on push
- run the dev server and validate the app locally

Let me know which next step you'd like.
