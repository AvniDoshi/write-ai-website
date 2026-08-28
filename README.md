# WRITE AI Website

Public website and AI tools research directory for the WRITE AI Center.

New contributors should follow the complete [beginner setup and publishing guide](docs/WEBSITE_SETUP_AND_PUBLISHING.md) for account access, tool installation, Codex, GitHub, Cloudflare, testing, deployment, verification, and rollback.

## What is included

- Center homepage and visual design system
- About, research, PapyrusAI, resources, training, news, and people pages
- Interactive preview of the AI Tools Database
- Relational database schema for tools, writing stages, resources, and people
- Accessible, responsive navigation and page components
- Open Graph social-sharing artwork and metadata

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:3000` by default.

## Validation

```bash
npm run build
npm test
npm run lint
```

After deployment, crawl every discoverable internal page and asset and fail on any non-successful response:

```bash
npm run verify:site -- https://writeai.center/
```

## Data and privacy

This repository is for public center content and approved research summaries. Do not commit credentials, private grant materials, identifiable student data, unpublished research data, or PapyrusAI conversation data.

Runtime secrets belong in the hosting platform. Local environment files are ignored by Git.

## Source of truth and publishing

The `main` branch of this GitHub repository is the complete and authoritative source for the WRITE AI website. All website code, content, images, database schemas, migrations, and hosting configuration must be committed and pushed here before publication.

Production hosting uses Cloudflare Workers under an account owned by the WRITE AI Center. Cloudflare Builds connects directly to this GitHub repository and automatically deploys the `main` branch. ChatGPT Sites is not part of the website workflow.

The required source includes `app`, `public`, `db`, `drizzle`, `worker`, `wrangler.jsonc`, and the root build configuration. Generated directories such as `dist`, `.next`, and `.vinext`, along with deployment archives, logs, dependencies, and temporary working files, are intentionally excluded because they are recreated from the committed source.

Contributor workflow:

1. Start from the latest GitHub `main` branch.
2. Make changes on a branch and open a pull request.
3. Review and merge the pull request into `main`.
4. Cloudflare automatically builds and publishes the exact merged commit.

## Cloudflare setup and handoff

The WRITE AI Center should create and own the Cloudflare account used for production. A Cloudflare administrator can invite additional maintainers from **Manage Account → Members** without granting access to unrelated domains or billing.

To connect the repository:

1. In Cloudflare, open **Workers & Pages** and choose **Create application → Import a repository**.
2. Select `AvniDoshi/write-ai-website` and use `main` as the production branch.
3. Set the build command to `npm run build`.
4. Set the deploy command to `npx wrangler deploy`.
5. Set `NEXT_PUBLIC_SITE_URL` to `https://writeai.center` in the build environment.
6. After the first successful deployment, attach `writeai.center` as the custom domain and verify it before retiring the previous host.

For a manual deployment from an authenticated Cloudflare session, run `npm run deploy`.
