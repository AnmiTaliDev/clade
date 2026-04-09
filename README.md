# Clade — The Haplogroup Encyclopedia

An open, encyclopedic reference for human haplogroups. Covers Y-DNA and mtDNA lineages with distributions by ethnicity, clan and tribal associations, statistics, phylogenetic context, and scientific references.

**Live site:** [clade.anmitali.dev](https://clade.anmitali.dev)

## Tech Stack

- [Astro](https://astro.build) — static site generator
- Vanilla TypeScript for client-side interactivity
- Custom SVG phylogenetic tree renderer (no D3 dependency)
- Google Fonts (Inter + Georgia)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build to dist/
npm run preview    # preview production build
npm run check      # TypeScript check
```

Requires Node.js 18+.

## Adding a Haplogroup

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. The short version: create a file in `src/data/haplogroups/` and add it to `src/data/haplogroups/index.ts`.

## Licenses

- **Content** (haplogroup data, descriptions, glossary): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Source code**: [GNU AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.html)

## Author

AnmiTaliDev — contributions welcome via pull request.
