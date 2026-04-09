# Contributing to Clade

Contributions are welcome and appreciated. The most impactful things you can do:

- Add new haplogroups or fill in missing ones
- Improve existing descriptions or correct inaccuracies
- Add distribution data for ethnicities not yet covered
- Add clan / tribe / ru / surname associations
- Improve translations or add new locales
- Fix bugs or improve accessibility

## Adding a Haplogroup

Each haplogroup lives in its own TypeScript file under `src/data/haplogroups/`. The filename should be the haplogroup ID (e.g. `R1a.ts`, `J2.ts`, `H.ts`).

### 1. Create the data file

```ts
// src/data/haplogroups/R1a1.ts
import type { Haplogroup } from "@/types/haplogroup";

const R1a1: Haplogroup = {
  id: "R1a1",
  name: "R1a1",
  type: "Y-DNA",            // "Y-DNA" | "mtDNA" | "autosomal"
  parent: "R1a",            // parent haplogroup id, or null for roots
  children: [],             // ids of direct child haplogroups in this dataset

  formed: "~15,000 BCE",
  mrca: "~10,000 BCE",      // optional

  origin: {
    region: "Eastern Europe / Central Asia",
    period: "Epipaleolithic",
    coordinates: [50, 45],  // optional [longitude, latitude]
  },

  description: "Full encyclopedic description. At least 2–3 sentences. Scientifically accurate.",

  interestingFact: "One engaging, sourced fact that makes this haplogroup memorable.",

  distribution: [
    { ethnicity: "Russians", region: "Eastern Europe", percentage: 46, sampleSize: 1200 },
    { ethnicity: "Poles",    region: "Eastern Europe", percentage: 57, sampleSize: 300 },
  ],

  clans: [                  // optional
    { type: "tribe", name: "Yamnaya", region: "Pontic Steppe", note: "Associated with early R1a expansion" },
    { type: "ru",    name: "Argyn",   region: "Kazakhstan",    note: "Kazakh clan with high R1a frequency" },
  ],

  statistics: {
    modernFrequency: "~8% of global male population",
    peakRegion: "Eastern Europe / South Asia",
    estimatedCarriers: 300_000_000,
  },

  tags: ["Indo-European", "Steppe", "Bronze Age", "Eastern Europe"],

  references: [
    "Haak et al. (2015) — Massive migration from the steppe. Nature 522, 207–211.",
  ],

  featured: false,          // set true only for flagship haplogroups
  addedAt: "2026-04-09",   // ISO date you added it
};

export default R1a1;
```

### 2. Register it in the index

Open `src/data/haplogroups/index.ts` and add an import and an entry in the `haplogroups` array:

```ts
import R1a1 from "./R1a1";

export const haplogroups: Haplogroup[] = [
  // ...existing entries...
  R1a1,
];
```

Also update the `children` array of the parent haplogroup file to include the new id.

### Field reference

| Field | Required | Notes |
|---|---|---|
| `id` | yes | Unique identifier, matches the filename without `.ts` |
| `name` | yes | Display name (can include parenthetical like `"H (mtDNA)"`) |
| `type` | yes | `"Y-DNA"`, `"mtDNA"`, or `"autosomal"` |
| `parent` | yes | Parent haplogroup id, or `null` for root haplogroups |
| `children` | yes | Array of child ids present in this dataset (can be `[]`) |
| `formed` | yes | Approximate formation date, e.g. `"~22,000 BCE"` |
| `mrca` | no | Most recent common ancestor date |
| `origin.region` | yes | Plain text region name |
| `origin.period` | yes | Epoch name (e.g. `"Neolithic"`, `"Upper Paleolithic"`) |
| `origin.coordinates` | no | `[longitude, latitude]` approximate origin point |
| `description` | yes | 2–5 sentences of encyclopedic prose |
| `interestingFact` | yes | 1–2 sentences, engaging and sourced |
| `distribution` | yes | At least 3 entries. `percentage` is frequency in that group (0–100). |
| `distribution[].sampleSize` | no | Number of individuals tested |
| `clans` | no | Clan/tribe/surname/ru associations. See `ClanType` in types. |
| `statistics.modernFrequency` | yes | Plain text, e.g. `"~8% of global male population"` |
| `statistics.peakRegion` | yes | Where the haplogroup is most common |
| `statistics.estimatedCarriers` | yes | Number, use underscores: `300_000_000` |
| `tags` | yes | Array of short descriptive tags |
| `references` | yes | At least 1 peer-reviewed or credible source, author-year format |
| `featured` | no | `true` only for flagship haplogroups shown on the home page |
| `addedAt` | yes | ISO date `"YYYY-MM-DD"` |

### Clan types

| Value | Meaning |
|---|---|
| `"tribe"` | Broad tribal / ethnic grouping (e.g. Celts, Yamnaya) |
| `"clan"` | Sub-tribal patrilineal clan |
| `"ru"` | Kazakh/Turkic lineage sub-unit (also spelled род) |
| `"surname"` | Family surname strongly associated with the haplogroup |
| `"family"` | Specific historical or noble family |
| `"dynasty"` | Ruling dynasty confirmed or strongly associated |

## Data quality guidelines

- Percentages should come from peer-reviewed population genetics studies. Cite the source.
- Do not invent or extrapolate distributions. If unsure, omit or note uncertainty.
- Keep descriptions neutral and encyclopedic. Avoid nationalist framing.
- All prose is in English regardless of the haplogroup's geographic focus.
- Use BCE/CE dating, not BP (Before Present).

## Code style

- No decorative comment separators (`---`, `===`, `***` divider lines in code).
- All code and comments in English.
- Follow the existing file structure exactly.
- Run `npm run check` before submitting a pull request.

## Submitting

Open a pull request against `main`. Include:
- The new/modified haplogroup file(s)
- The updated `index.ts`
- A brief description of sources used

Small focused PRs (one or a few haplogroups at a time) are preferred over giant batches.
