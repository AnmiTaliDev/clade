import type { Haplogroup } from "@/types/haplogroup";

const U6_mt: Haplogroup = {
  id: "U6_mt",
  name: "U6 (mtDNA)",
  type: "mtDNA",
  parent: "U_mt",
  children: ["U6a_mt"],
  formed: "~40,000 BCE",
  mrca: "~20,000 BCE",
  origin: { region: "North Africa / Near East", period: "Upper Paleolithic", coordinates: [10, 30] },
  description: "Haplogroup U6 is the major Eurasian-derived mtDNA lineage in North Africa, concentrated in the Maghreb (Morocco, Algeria, Tunisia, Libya) and Saharan region. It is thought to represent a back-migration of Eurasian populations into North Africa during the Upper Paleolithic or Mesolithic, which may have brought U6 from the Near East. U6 reaches its highest frequencies among Berber populations (Amazigh) of the Maghreb and is also found in the Canary Islands and Iberian Peninsula, reflecting prehistoric contacts across the Strait of Gibraltar.",
  interestingFact: "U6 is sometimes called the 'North African Eve' lineage — it is the primary genetic signature of ancient Eurasian back-migration into North Africa, and its sub-branches show a deep rooting in the Maghreb region that predates the historical Arab expansion into North Africa by thousands of years.",
  distribution: [
    { ethnicity: "Berbers (Amazigh)", region: "North Africa", percentage: 15, sampleSize: 500 },
    { ethnicity: "Moroccans (Arab)", region: "North Africa", percentage: 8, sampleSize: 400 },
    { ethnicity: "Algerians", region: "North Africa", percentage: 6, sampleSize: 400 },
    { ethnicity: "Canary Islanders", region: "Atlantic / N Africa", percentage: 10, sampleSize: 300 },
  ],
  statistics: { modernFrequency: "~0.5% of global female population", peakRegion: "North Africa / Maghreb", estimatedCarriers: 10_000_000 },
  tags: ["North Africa", "Berber", "Maghreb", "Canary Islands", "Back migration"],
  references: ["Olivieri et al. (2006) — The mtDNA legacy of the Levantine early Upper Palaeolithic in Africa. Science 314(5806), 1767–1770."],
  featured: false,
  addedAt: "2026-06-30",
};
export default U6_mt;
