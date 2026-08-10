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
