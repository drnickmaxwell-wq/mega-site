# Build Health

This document defines the requirements to ensure the St Mary’s House Dental Care site always builds successfully.

- The Next.js app must live at the repository **root** with an `app/` folder.
- The root **package.json** must include the `next`, `react` and `react-dom` dependencies and scripts for `dev`, `build`, `start`, `lint` and `type-check`. It should define `engines.node` as `>=20 <21` and set `"packageManager": "pnpm@8.x"`.
- A root **pnpm-lock.yaml** is the single source of dependency versions. Do not add `yarn.lock` or `package-lock.json`, and do not use nested lockfiles.
- Vercel must be configured with **Framework Preset: Next.js**, **Root Directory: "/"**, **Node Version: 20**, **Install Command:** `pnpm install --frozen-lockfile` (or `pnpm install` if the lockfile is updated), and **Build Command:** `pnpm build`. Never add a `vercel.json` that changes the framework or root.
- Keep the health endpoints in place: `/app/health/page.tsx` for a simple status page and `/app/health/route.ts` for an API route returning `{ ok: true }`.
- If the build fails, review the root configuration files (`package.json`, `pnpm-lock.yaml`, `next.config.mjs`, `tsconfig.json`) and fix them first before changing Vercel settings.
