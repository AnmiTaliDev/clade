import type { Haplogroup } from "@/types/haplogroup";

const L0: Haplogroup = {
  id: "L0",
  name: "L0 (mtDNA)",
  type: "mtDNA",
  parent: "L_mt",
  children: ["L0a_mt", "L0d_mt", "L0f_mt", "L0k_mt"],
  formed: "~150,000 BCE",
  mrca: "~130,000 BCE",
  origin: {
    region: "Southern Africa",
    period: "Middle Paleolithic",
    coordinates: [22, -25],
  },
  description:
    "Mitochondrial haplogroup L0 is the oldest and most deeply diverged branch of the human mitochondrial tree, making it the most ancient surviving maternal lineage in our species. L0 is found almost exclusively among the Khoisan (San) peoples of Southern Africa, the Hadza of Tanzania, and a few other groups of East Africa, who represent some of the earliest-diverging human populations. The deepest split within L0 (between L0d and L0k) is estimated at over 130,000 years ago, predating the proposed age of anatomically modern humans. L0 is essentially absent outside Africa, reflecting the extreme antiquity of Khoisan isolation predating the Out-of-Africa migration.",
  interestingFact:
    "The deepest split within L0 — between the southern Khoisan and eastern African lineages — is estimated at approximately 130,000–200,000 years ago, suggesting that the populations carrying L0 have been genetically separated for longer than any other human groups on Earth, making the Khoisan the living bearers of the oldest maternal lineage in our species.",
  distribution: [
    { ethnicity: "Khoisan (San)", region: "Southern Africa", percentage: 95, sampleSize: 300 },
    { ethnicity: "Hadza", region: "East Africa (Tanzania)", percentage: 80, sampleSize: 80 },
    { ethnicity: "Sandawe", region: "East Africa (Tanzania)", percentage: 35, sampleSize: 60 },
    { ethnicity: "Bantus (Southern Africa)", region: "Southern Africa", percentage: 5, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~3% of global female population (concentrated in southern Africa)",
    peakRegion: "Southern Africa / Khoisan",
    estimatedCarriers: 115_000_000,
  },
  tags: ["mtDNA", "Africa", "Khoisan", "San", "Paleolithic", "Oldest lineage", "Southern Africa", "Maternal lineage"],
  references: [
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Ingman et al. (2000) — Mitochondrial genome variation and the origin of modern humans. Nature 408, 708–713.",
    "Schlebusch et al. (2012) — Genomic variation in seven Khoe-San groups reveals adaptation and complex African history. Science 338(6105), 374–379.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default L0;
