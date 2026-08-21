# WRITE AI Website

Public website and AI tools research directory for the WRITE AI Center.

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

## Data and privacy

This repository is for public center content and approved research summaries. Do not commit credentials, private grant materials, identifiable student data, unpublished research data, or PapyrusAI conversation data.

Runtime secrets belong in the hosting platform. Local environment files are ignored by Git.

## Source of truth and publishing

The `main` branch of this GitHub repository is the complete and authoritative source for the WRITE AI website. All website code, content, images, database schemas, migrations, and hosting configuration must be committed and pushed here before publication.

ChatGPT Sites is used only to host the production build. It is not a separate source repository or editing environment. Every production deployment must be built from the exact commit already present on GitHub.

The required source includes `app`, `public`, `db`, `drizzle`, `worker`, `.openai/hosting.json`, and the root build configuration. Generated directories such as `dist`, `.next`, and `.vinext`, along with deployment archives, logs, dependencies, and temporary working files, are intentionally excluded because they are recreated from the committed source.

Contributor workflow:

1. Start from the latest GitHub `main` branch.
2. Make changes on a branch and open a pull request.
3. Review and merge the pull request into `main`.
4. Publish the exact merged commit to the production site.
