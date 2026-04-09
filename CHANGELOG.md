# Changelog

All notable changes to Clade are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Initial project scaffold with Astro
- Design system: CSS custom properties, typography (Inter + Georgia), encyclopedic palette
- SVG logo and favicon (phylogenetic tree icon)
- i18n system with English locale and `t()` helper
- `Haplogroup` TypeScript type with full field set (distribution, clans, statistics, references, tags)
- Base layout with sticky header, footer, dark mode infrastructure
- Header with desktop navigation, mobile hamburger menu, search button, theme toggle
- Footer with license links (CC BY-SA 4.0, GNU AGPL 3.0)
- Home page with hero, featured haplogroups grid, recent haplogroups grid, stats
- Haplogroup detail pages (`/haplogroup/[id]`) with sidebar, distribution table, clan cards, tags, references
- Search page with live full-text search, type filter, region filter, sort
- Compare page — side-by-side comparison of two haplogroups including distribution chart
- Probability calculator — weighted ancestry input → ranked haplogroup probability output
- Phylogenetic tree page — interactive SVG tree, drag/zoom, node tooltip, type filter, label toggle
- Legend / Glossary page with 21 terms across Genetics, Genealogy, Anthropology, Statistics categories
- OG image generation endpoint (`/og/[id].png`) as SVG for each haplogroup
- 404 page
- Sitemap via `@astrojs/sitemap`
- Haplogroup dataset: R1a, R1b, J2, N1c, C2, H, E, E1b1b, G, I, I1, I2, O, Q, D, J1 (detailed); full Y-DNA trunk A → BT → CT → ... → R1a/R1b; full mtDNA trunk L → L3 → N → R → HV → H / JT / U → K
- Dark mode with system preference detection, localStorage persistence, no-flash inline script
- Custom select dropdown component replacing all native `<select>` elements
- `[hidden] { display: none !important }` global rule — fixes mobile nav showing on desktop
- Proper phylogenetic tree layout algorithm (leaf-count-based subtree proportional spacing)

### Fixed
- Mobile navigation was always visible due to CSS `display: flex` overriding the `hidden` attribute
- Phylogenetic tree nodes overlapping — replaced fixed-gap layout with subtree-proportional layout
- L3 parent reference corrected to `L_mt`; R_mt children updated to `JT_mt`, `U_mt`
- All haplogroup `addedAt` dates corrected to 2026
