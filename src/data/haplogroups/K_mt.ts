import type { Haplogroup } from "@/types/haplogroup";

const K_mt: Haplogroup = {
  id: "K_mt",
  name: "K (mtDNA)",
  type: "mtDNA",
  parent: "U_mt",
  children: [],
  formed: "~30,000 BCE",
  mrca: "~25,000 BCE",
  origin: {
    region: "Near East / Anatolia",
    period: "Upper Paleolithic",
    coordinates: [36, 36],
  },
  description:
    "Mitochondrial haplogroup K is a subclade of U8 found commonly across Europe, the Near East, and notably among Ashkenazi Jews (~32%). Three specific K subclades — K1a1b1a, K1a9, and K2a2 — are widely regarded as founding lineages of the Ashkenazi Jewish maternal gene pool, indicating that a remarkably small number of women — possibly as few as four — contributed to the maternal ancestry of most Ashkenazi Jews alive today. This pattern reflects the severe population bottleneck that characterised the establishment of Ashkenazi Jewish communities in medieval Europe. K is also associated with Neolithic farmer ancestry and spread into Europe with agricultural populations from Anatolia.",
  interestingFact:
    "Ötzi the Iceman — the 5,300-year-old Alpine mummy — belongs to haplogroup K1c1, and genetic analysis showed his closest modern relatives are found not near his discovery site in the Alps, but in Sardinia and isolated Alpine villages, revealing how dramatically European genetic landscapes have been reshaped since the Neolithic.",
  distribution: [
    { ethnicity: "Ashkenazi Jews", region: "Europe / Near East", percentage: 32 },
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 6 },
    { ethnicity: "Near Easterners", region: "Near East", percentage: 8 },
    { ethnicity: "Druze", region: "Near East", percentage: 15 },
    { ethnicity: "Armenians", region: "South Caucasus", percentage: 10 },
    { ethnicity: "British", region: "Western Europe", percentage: 7 },
  ],
  clans: [
    { type: "clan", name: "Ashkenazi Jewish community", region: "Europe", note: "Three K subclades (K1a1b1a, K1a9, K2a2) are founding maternal lineages of the Ashkenazi Jewish population" },
    { type: "family", name: "Levantine populations", region: "Near East", note: "K is found at moderate frequencies across Levantine and Anatolian populations, reflecting shared Neolithic ancestry" },
  ],
  statistics: {
    modernFrequency: "~6% of global female population",
    peakRegion: "Ashkenazi Jewish / Near East",
    estimatedCarriers: 230_000_000,
  },
  tags: ["mtDNA", "Europe", "Ashkenazi Jewish", "Near East", "Ötzi", "Maternal lineage"],
  references: [
    "Behar et al. (2006) — The matrilineal ancestry of Ashkenazi Jewry: portrait of a recent founder event. American Journal of Human Genetics 78(3), 487–497.",
    "Keller et al. (2012) — New insights into the Tyrolean Iceman's origin and phenotype as inferred by whole-genome sequencing. Nature Communications 3, 698.",
    "Costa et al. (2013) — A substantial prehistoric European ancestry amongst Ashkenazi maternal lineages. Nature Communications 4, 2543.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default K_mt;
