# Data Schema Reference

All haplogroup data is typed in `src/types/haplogroup.ts`. This document explains each field in plain language.

## `Haplogroup`

```ts
interface Haplogroup {
  id: string
  name: string
  type: HaplogroupType
  parent: string | null
  children: string[]
  formed: string
  mrca?: string
  origin: HaplogroupOrigin
  description: string
  interestingFact: string
  distribution: EthnicDistribution[]
  clans?: ClanAssociation[]
  statistics: HaplogroupStatistics
  tags: string[]
  references: string[]
  featured?: boolean
  addedAt: string
}
```

### `id`

The canonical identifier. Must be unique across the entire dataset. Used in URLs (`/haplogroup/{id}`), in `parent` and `children` references, and as the OG image filename (`/og/{id}.png`).

Naming rules:
- Y-DNA haplogroups: use the standard ISOGG/YCC name (`R1a`, `J2`, `E1b1b`)
- mtDNA haplogroups sharing a letter with Y-DNA: append `_mt` (`N_mt`, `R_mt`, `L_mt`, `M_mt`, `H` is fine since there's no Y-DNA H, `K_mt` because `K` is already a Y-DNA clade, etc.)
- Intermediate nodes: use the canonical subclade name

### `name`

Display name. May include the type in parentheses to disambiguate: `"H (mtDNA)"`, `"N (mtDNA)"`. For standard haplogroups with no naming conflict, just use the haplogroup designator: `"R1a"`.

### `type`

`"Y-DNA"` | `"mtDNA"` | `"autosomal"`

Determines badge color and tree node color:
- Y-DNA → dark blue (`#1a4a6e`)
- mtDNA → dark purple (`#5a1f4a`)
- autosomal → dark green (`#2a5a2a`)

### `parent`

The `id` of the immediate parent haplogroup, or `null` for root haplogroups. The tree is built from these links. If the parent is not yet in the dataset, set `parent: null` — the haplogroup will appear as a disconnected root in the tree.

### `children`

Array of `id`s of direct children **that are present in this dataset**. This is used to render the "Descendant Haplogroups" list on detail pages. You do not need to list all known children in the scientific literature — only the ones that have files in this repo.

### `formed`

Approximate date when the defining mutation arose. Use the format `"~22,000 BCE"` or `"~500 CE"`. The tilde (~) indicates approximation. Dates come from TMRCA estimates in the literature; prefer YFull or peer-reviewed papers.

### `mrca`

Optional. The date of the most recent common ancestor of all living carriers. Often more recent than `formed` for haplogroups that underwent bottlenecks. Same format as `formed`.

### `origin`

```ts
interface HaplogroupOrigin {
  region: string
  period: string
  coordinates?: [number, number]  // [longitude, latitude]
}
```

`region`: plain text geographic description.
`period`: cultural/archaeological period name (e.g. `"Upper Paleolithic"`, `"Neolithic"`, `"Bronze Age"`).
`coordinates`: approximate geographic center of origin for future map features. Optional.

### `description`

Encyclopedic prose, 2–5 sentences. Should cover: what the haplogroup is, where it comes from, who carries it, and why it matters. Neutral tone. No first-person, no nationalist framing.

### `interestingFact`

One or two sentences with a memorable, well-sourced fact. The fact box on the detail page.

### `distribution`

```ts
interface EthnicDistribution {
  ethnicity: string
  region: string
  percentage: number    // 0–100, frequency in that population
  sampleSize?: number   // number of individuals tested
  source?: string       // optional citation shorthand
}
```

At least 3 entries. Sort by `percentage` descending (the UI re-sorts, but it's good practice). The `ethnicity` string should be a recognizable population name (not a country name — use `"French"` not `"France"`). `region` is used for filtering.

### `clans`

```ts
interface ClanAssociation {
  type: "tribe" | "clan" | "surname" | "ru" | "family" | "dynasty"
  name: string
  region?: string
  note?: string
}
```

Optional. Associate the haplogroup with named historical or modern lineage groups. The `note` field can explain the connection (e.g. "confirmed by aDNA analysis" or "associated by frequency correlation"). Do not include speculative associations without at least a frequency-based rationale.

### `statistics`

```ts
interface HaplogroupStatistics {
  modernFrequency: string   // plain text, e.g. "~8% of global male population"
  peakRegion: string        // where it is most common
  estimatedCarriers: number // whole number, use underscores: 300_000_000
}
```

### `tags`

Short strings for filtering and discovery. Use title case. Examples: `"Indo-European"`, `"Bronze Age"`, `"South Asia"`, `"mtDNA"`, `"Neolithic"`. Keep them consistent — look at existing tags before creating new ones.

### `references`

At least one entry. Format: `"Author et al. (YEAR) — Title. Journal Volume(Issue), Pages."`. For online resources: `"ISOGG Wiki — Haplogroup R (accessed 2026)."`. These are displayed as a numbered list on the detail page.

### `featured`

`true` to show on the home page featured grid. Keep this sparse — 4–6 haplogroups maximum.

### `addedAt`

ISO date string `"YYYY-MM-DD"`. Used to sort the "Recently Added" section on the home page.
