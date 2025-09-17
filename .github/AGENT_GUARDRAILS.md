# Agent Guardrails

For any automation or agent performing tasks in this repository, adhere to these guardrails:

- **Do not change the Vercel root directory** away from `/`. The Next.js app lives at the repository root.
- **Do not switch the package manager**. Use PNPM v8 only, with the root `pnpm-lock.yaml` committed. Do not introduce `yarn.lock` or `package-lock.json`.
- **Do not delete or move** the root `package.json`, `pnpm-lock.yaml`, `next.config.mjs` or `tsconfig.json`.
- If detection fails, first patch the root `package.json` to include `next`, `react` and `react-dom` dependencies and run `pnpm install` again before making changes to Vercel settings.
- Always use Node 20 on Vercel.
