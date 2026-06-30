# Clade

An open, encyclopedic reference for human haplogroups.

## Tech Stack

- [Astro](https://astro.build) — static site generator
- Vanilla TypeScript for client-side interactivity
- Google Fonts (Inter + Georgia)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build to dist/
npm run preview    # preview production build
```

Requires Node.js 18+.

## Adding a Haplogroup

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. The short version: create a file in `src/data/haplogroups/` and add it to `src/data/haplogroups/index.ts`.

## Licenses

- **Content** (haplogroup data, descriptions, glossary): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Source code**: [GNU AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.html)
