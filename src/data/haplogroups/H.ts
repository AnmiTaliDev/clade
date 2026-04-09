import type { Haplogroup } from "@/types/haplogroup";

const H: Haplogroup = {
  id: "H",
  name: "H (mtDNA)",
  type: "mtDNA",
  parent: "HV",
  children: ["H1", "H2", "H3", "H4", "H5"],
  formed: "~25,000 BCE",
  mrca: "~20,000 BCE",
  origin: {
    region: "Near East / Southwest Asia",
    period: "Upper Paleolithic",
    coordinates: [38, 34],
  },
  description:
    "Mitochondrial haplogroup H is by far the most common mtDNA haplogroup in Europe, accounting for roughly 40–50% of European maternal lineages. It likely originated in the Near East around 25,000 BCE and expanded into Europe in multiple waves — first as hunter-gatherers during the Upper Paleolithic, and later reinforced by Neolithic farmers and Bronze Age steppe migrations. H is subdivided into numerous branches (H1 through H95+), each with distinct geographic distributions.",
  interestingFact:
    "Ötzi the Iceman, the 5,300-year-old mummy found in the Alps, belongs to mtDNA haplogroup K, but his closest modern maternal relatives are found in Sardinia and isolated Alpine villages — a striking example of how ancient populations can persist in geographic refugia.",
  distribution: [
    { ethnicity: "Basques", region: "Western Europe", percentage: 65, sampleSize: 200 },
    { ethnicity: "Spanish", region: "Western Europe", percentage: 55, sampleSize: 700 },
    { ethnicity: "French", region: "Western Europe", percentage: 48, sampleSize: 600 },
    { ethnicity: "Germans", region: "Central Europe", percentage: 45, sampleSize: 800 },
    { ethnicity: "Swedes", region: "Northern Europe", percentage: 46, sampleSize: 400 },
    { ethnicity: "Russians", region: "Eastern Europe", percentage: 42, sampleSize: 900 },
    { ethnicity: "Iranians", region: "Middle East", percentage: 20, sampleSize: 500 },
    { ethnicity: "Egyptians", region: "North Africa", percentage: 15, sampleSize: 400 },
  ],
  clans: [],
  statistics: {
    modernFrequency: "~20% of global female population",
    peakRegion: "Western Europe",
    estimatedCarriers: 750_000_000,
  },
  tags: ["mtDNA", "Europe", "Upper Paleolithic", "Neolithic", "Maternal lineage", "Western Europe"],
  references: [
    "Torroni et al. (2006) — Harvesting the fruit of the human mtDNA tree. Trends in Genetics 22(6), 339–345.",
    "Soares et al. (2010) — The archaeogenetics of Europe. Current Biology 20(4), R174–R183.",
    "Richards et al. (2000) — Tracing European founder lineages in the Near Eastern mtDNA pool. American Journal of Human Genetics 67(5).",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default H;
