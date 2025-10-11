# Mega Site

This repository contains the Next.js application for the "mega-site" project deployed to Vercel.

## Build Green Checklist

This project uses a PNPM-managed Next.js app located in the `ST_MARYS_FRAMEWORK` folder. To ensure that Vercel builds and deploys correctly, follow this checklist:

- Set the **Root Directory** in Vercel to `ST_MARYS_FRAMEWORK`.
- Use the **Next.js** framework preset.
- Use PNPM commands:
  - **Install Command**: `pnpm install --frozen-lockfile`
  - **Build Command**: `pnpm build`
- Ensure **Node.js 20** runtime (compatible with `"engines": { "node": ">=18 <=20" }` in package.json).
- The `package.json` includes `"next"`, `"react"`, and `"react-dom"` dependencies and standard `dev`, `build`, `start`, `lint` scripts.
- `tsconfig.json` defines `"baseUrl": "."` and `"paths": { "@/*": ["./*"] }` to support absolute imports.
- Environment variables are optional and read via `lib/env.ts` so that missing values do not break the build. Features can be toggled with `NEXT_PUBLIC_FEATURE_SMILE_QUIZ`, `NEXT_PUBLIC_FEATURE_CHATDOCK`, and `NEXT_PUBLIC_FEATURE_3DVIEWER`.
- Keep the lockfile (`pnpm-lock.yaml`) committed and do not mix package managers.
- If adding API routes that rely on Node‑only libraries (e.g., `fs`), add `export const runtime = 'nodejs';` at the top of the route file.

Refer to the documentation in `/ST_MARYS_FRAMEWORK` for development instructions.
