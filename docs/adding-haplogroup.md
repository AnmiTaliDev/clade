# How to Add a Haplogroup

This guide walks through adding a new haplogroup to Clade from scratch. Adding a haplogroup requires creating one TypeScript file and editing one import list — that's it.

## Quick example

Say you want to add **R1a1a** (M17/M198), the major subclade of R1a that covers most of its modern distribution.

### Step 1: Create the file

Create `src/data/haplogroups/R1a1a.ts`:

```ts
import type { Haplogroup } from "@/types/haplogroup";

const R1a1a: Haplogroup = {
  id: "R1a1a",
  name: "R1a1a (M17)",
  type: "Y-DNA",
  parent: "R1a",
  children: ["R1a1a1", "R1a1a1b"],

  formed: "~10,000 BCE",
  mrca: "~5,800 BCE",

  origin: {
    region: "Eastern Europe or Central Asia",
    period: "Mesolithic / Early Neolithic",
    coordinates: [55, 50],
  },

  description:
    "R1a1a (defined by the M17 and M198 markers) is the primary subclade of R1a and accounts for the vast majority of all R1a carriers worldwide. It splits into M420 (European branch, including Z282 and Z92) and Z93 (Asian branch, dominant in Central and South Asia). The M17 mutation arose roughly 10,000 years ago, and M17 carriers spread explosively with Bronze Age steppe peoples.",

  interestingFact:
    "M17 was the first Y-chromosome marker linked to the Indo-European expansion hypothesis, identified in a landmark 2000 study by Semino et al. that traced it from Eastern Europe to India along putative Indo-European migration routes.",

  distribution: [
    { ethnicity: "Poles",           region: "Eastern Europe",          percentage: 55, sampleSize: 300 },
    { ethnicity: "Ukrainians",      region: "Eastern Europe",          percentage: 52, sampleSize: 500 },
    { ethnicity: "Brahmins (UP)",   region: "South Asia",              percentage: 72, sampleSize: 200 },
    { ethnicity: "Kyrgyz",          region: "Central Asia",            percentage: 61, sampleSize: 150 },
    { ethnicity: "Tajiks",          region: "Central Asia",            percentage: 64, sampleSize: 180 },
  ],

  clans: [
    {
      type: "tribe",
      name: "Corded Ware culture",
      region: "Northern/Central Europe",
      note: "Bronze Age culture associated with early R1a1a European expansion",
    },
    {
      type: "ru",
      name: "Argyn",
      region: "Kazakhstan",
      note: "Major Kazakh clan (Middle zhuz) with significant R1a1a-Z93 frequency",
    },
  ],

  statistics: {
    modernFrequency: "~7% of global male population",
    peakRegion: "South Asia / Eastern Europe",
    estimatedCarriers: 280_000_000,
  },

  tags: ["Indo-European", "Bronze Age", "Steppe", "Eastern Europe", "South Asia"],

  references: [
    "Semino et al. (2000) — The genetic legacy of Paleolithic Homo sapiens sapiens in extant Europeans. Science 290(5494), 1155–1159.",
    "Underhill et al. (2015) — The phylogenetic and geographic structure of Y-chromosome haplogroup R1a. European Journal of Human Genetics 23, 124–131.",
  ],

  featured: false,
  addedAt: "2026-04-09",
};

export default R1a1a;
```

### Step 2: Register the import

Open `src/data/haplogroups/index.ts` and add:

```ts
import R1a1a from "./R1a1a";

export const haplogroups: Haplogroup[] = [
  // ...
  R1a1a,   // add near R1a
];
```

### Step 3: Update the parent's children array

Open `src/data/haplogroups/R1a.ts` and add `"R1a1a"` to `children: []`:

```ts
children: ["R1a1", "R1a1a"],
```

### Step 4: Verify

```bash
npm run check    # TypeScript check
npm run dev      # visit /haplogroup/R1a1a and /tree
```

That's it.

## Finding reliable data

Good sources for haplogroup frequency data and phylogenetic information:

- **ISOGG Wiki** — [isogg.org/wiki/Y-DNA_haplogroup_tree](https://isogg.org/wiki/Y-DNA_haplogroup_tree) — community-maintained haplogroup tree
- **YFull** — [yfull.com](https://yfull.com) — phylogenetic tree with TMRCA estimates
- **Eupedia** — [eupedia.com](https://www.eupedia.com/genetics/) — frequency maps and population tables (secondary source, verify against papers)
- **PubMed** — search for population genetics papers; prefer studies with n > 100 per population
- **Ancient DNA: AADR** — [reich.hms.harvard.edu/allen-ancient-dna-resource](https://reich.hms.harvard.edu/allen-ancient-dna-resource) — curated ancient DNA database

When citing, prefer:
- Peer-reviewed journal articles (Nature, EJHG, PLOS ONE, PNAS, MBE)
- Published sample sizes
- Author-year format: `Lastname et al. (YEAR) — Title. Journal volume(issue), pages.`

## ID naming conventions

| Situation | Convention |
|---|---|
| Standard haplogroup | Use the canonical name: `R1a`, `J2`, `E1b1b` |
| Y-DNA and mtDNA share a letter | Append `_mt` to the mtDNA one: `N_mt`, `R_mt`, `L_mt`, `M_mt` |
| Intermediate nodes not usually named | Use the marker: `R1a1a1b2` or abbreviate to canonical subclade |
| Autosomes | Not yet implemented — file an issue first |

## Updating the phylogenetic tree

The tree is built automatically from `parent` fields. You don't need to configure anything extra — just ensure:

1. Your haplogroup's `parent` value matches an existing haplogroup's `id`
2. The parent's `children` array includes your haplogroup's `id`
3. Root haplogroups (no parent in the dataset) have `parent: null`

If your haplogroup's parent isn't in the dataset yet, add the parent first or file an issue.
