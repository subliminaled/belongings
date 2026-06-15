# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 16 (App Router, React 19, Turbopack) marketing site called **Belongings**. Package manager is **npm** (`package-lock.json`). There is no database or backend infrastructure — API routes run inside the Next.js process.

### Services
- **Next.js dev server** — the only process. Start with `npm run dev` (serves on `http://localhost:3000`). This hosts both the pages and the API routes (`/api/submit-story`, `/api/uploadthing`).

### Lint / build / test
- Lint: `npm run lint` (ESLint 9; the repo currently reports only `@next/next/no-img-element` warnings, 0 errors).
- Build: `npm run build`.
- There is no automated test suite.

### Story submission (core interactive feature) — external dependency
- The "Submit Your Story" form posts to `/api/submit-story`, which uploads images to **UploadThing** (a hosted SaaS) via `UTApi`.
- This step requires the `UPLOADTHING_TOKEN` environment variable. Without it, the API validates fields correctly (returns 400 for missing fields/images) but the image upload step fails with `"Image upload failed. Ensure UPLOADTHING_TOKEN is set."` (500). This is expected when the token is absent — it is not a code bug.
- To exercise the full submission flow end-to-end, set `UPLOADTHING_TOKEN` (add it as a secret).
