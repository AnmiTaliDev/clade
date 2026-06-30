import type { Haplogroup } from "@/types/haplogroup";

const E1b1a: Haplogroup = {
  id: "E1b1a",
  name: "E1b1a",
  type: "Y-DNA",
  parent: "E",
  children: [],
  formed: "~40,000 BCE",
  mrca: "~18,000 BCE",
  origin: {
    region: "West / Central Africa",
    period: "Upper Paleolithic",
    coordinates: [15, 5],
  },
  description:
    "Haplogroup E1b1a is the dominant Y-DNA lineage of sub-Saharan Africa and is overwhelmingly associated with the Bantu expansion — one of the most dramatic demographic events in African prehistory. Beginning around 3,000 BCE, Bantu-speaking agriculturalists carrying E1b1a spread from a homeland near the Nigeria–Cameroon border across the entirety of Central, Eastern, and Southern Africa, largely replacing or absorbing earlier hunter-gatherer populations. Today, E1b1a accounts for approximately 60–80% of men in West and Central Africa. The transatlantic slave trade subsequently carried this haplogroup to the Americas, where it constitutes roughly 60% of African American paternal lineages.",
  interestingFact:
    "E1b1a is the most common paternal haplogroup among African Americans (~60%), directly reflecting the geographic origins of the transatlantic slave trade — the majority of enslaved Africans were taken from West and Central Africa, the very heartland of E1b1a distribution.",
  distribution: [
    { ethnicity: "Yoruba", region: "West Africa", percentage: 80, sampleSize: 400 },
    { ethnicity: "Igbo", region: "West Africa", percentage: 82, sampleSize: 200 },
    { ethnicity: "Bantu (average)", region: "Central / Southern Africa", percentage: 75, sampleSize: 800 },
    { ethnicity: "African Americans", region: "Americas", percentage: 60, sampleSize: 1000 },
    { ethnicity: "Zulu", region: "Southern Africa", percentage: 65, sampleSize: 250 },
    { ethnicity: "Fula", region: "West Africa", percentage: 70, sampleSize: 200 },
  ],
  clans: [
    { type: "tribe", name: "Bantu peoples", region: "Sub-Saharan Africa", note: "E1b1a was the characteristic haplogroup carried across Central and Southern Africa by the Bantu agricultural expansion beginning ~3,000 BCE" },
  ],
  statistics: {
    modernFrequency: "~12% of global male population",
    peakRegion: "West / Central Africa",
    estimatedCarriers: 450_000_000,
  },
  tags: ["Africa", "West Africa", "Bantu", "Niger-Congo", "Slave trade", "African American", "Sub-Saharan"],
  references: [
    "Wood et al. (2005) — Contrasting patterns of Y chromosome and mtDNA variation in Africa: evidence for sex-biased demographic processes. European Journal of Human Genetics 13, 867–876.",
    "Tishkoff et al. (2009) — The genetic structure and history of Africans and African Americans. Science 324(5930), 1035–1044.",
    "Cruciani et al. (2002) — A back migration from Asia to sub-Saharan Africa is supported by high-resolution analysis of human Y-chromosome haplotypes. American Journal of Human Genetics 70(5), 1197–1214.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default E1b1a;
