import type { Haplogroup } from "@/types/haplogroup";

const I2a: Haplogroup = {
  id: "I2a",
  name: "I2a (L460)",
  type: "Y-DNA",
  parent: "I2",
  children: ["I2a1", "I2a2"],
  formed: "~15,000 BCE",
  mrca: "~8,000 BCE",
  origin: { region: "Balkans / Eastern Europe", period: "Epipaleolithic", coordinates: [18, 44] },
  description: "Haplogroup I2a (L460) is the major subclade of I2, split into two primary branches: I2a1 (M26), a Western European isolate concentrated in Sardinia, and I2a2 (M436), a widespread Western and Central European lineage. The broader I2a clade traces to Paleolithic European hunter-gatherers and its distribution reflects ancient genetic diversity that predates both Neolithic farming and Bronze Age steppe migrations. The 'Dinaric' branch of I2 — very common in South Slavic populations — is actually I2a1b under the modern classification, and represents a massive demographic expansion in the Balkan region.",
  interestingFact: "The so-called 'Dinaric I2' (I2a1b-L621) — the most common Y-DNA haplogroup in Bosnia, Serbia, Croatia, and Ukraine — underwent an extraordinarily rapid population explosion approximately 1,000–1,500 years ago, coinciding with the Slavic expansion into the Balkans. This haplogroup went from rare to dominant across a huge area in just a few centuries, one of the fastest expansions recorded in European Y-DNA history.",
  distribution: [
    { ethnicity: "Bosnians", region: "Southeast Europe", percentage: 55, sampleSize: 300 },
    { ethnicity: "Serbs", region: "Southeast Europe", percentage: 40, sampleSize: 400 },
    { ethnicity: "Ukrainians", region: "Eastern Europe", percentage: 22, sampleSize: 500 },
    { ethnicity: "Sardinians", region: "Southern Europe (I2a1)", percentage: 40, sampleSize: 400 },
    { ethnicity: "Croatians", region: "Southeast Europe", percentage: 38, sampleSize: 400 },
  ],
  statistics: { modernFrequency: "~2% of global male population", peakRegion: "Balkans / Eastern Europe", estimatedCarriers: 80_000_000 },
  tags: ["Balkans", "Slavic", "Eastern Europe", "Sardinia", "Paleolithic", "Dinaric"],
  references: ["Rootsi et al. (2004) — Phylogeography of Y-chromosome haplogroup I reveals distinct domains of prehistoric gene flow in europe. American Journal of Human Genetics 75(1), 128–137."],
  featured: false,
  addedAt: "2026-06-30",
};
export default I2a;
