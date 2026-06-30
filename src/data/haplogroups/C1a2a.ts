import type { Haplogroup } from "@/types/haplogroup";

const C1a2a: Haplogroup = {
  id: "C1a2a",
  name: "C1a2a (V182)",
  type: "Y-DNA",
  parent: "C1a2",
  children: [],
  formed: "~40,000 BCE",
  mrca: "~30,000 BCE",
  origin: {
    region: "Western Europe",
    period: "Upper Paleolithic",
    coordinates: [5, 45],
  },
  description:
    "C1a2a (V182) is the main surviving subclade of C1a2 in Western and Southern Europe. It represents a relict lineage of the earliest anatomically modern humans to settle Europe during the Upper Paleolithic. After dominating the male gene pool of Ice Age Europe for tens of thousands of years, C1a2a was largely replaced by incoming Neolithic farmers (haplogroup G2a) and later Bronze Age Indo-European migrants (R1b, R1a). Today it persists at very low frequencies scattered across the Atlantic façade of Europe, the Iberian Peninsula, and in pockets of North Africa where Ice Age European lineages occasionally survived.",
  interestingFact:
    "C1a2a is a living relic of the Cro-Magnon gene pool — the modern humans who painted the caves of Lascaux and Altamira. Its modern carriers are the patrilineal descendants of the hunters who roamed Ice Age Europe 30,000 years ago.",
  distribution: [
    { ethnicity: "Iberians (Spain / Portugal)", region: "Western Europe", percentage: 0.2, sampleSize: 1000 },
    { ethnicity: "French", region: "Western Europe", percentage: 0.1, sampleSize: 1500 },
    { ethnicity: "Italians", region: "Southern Europe", percentage: 0.1, sampleSize: 1000 },
    { ethnicity: "Kabyle Berbers", region: "North Africa", percentage: 0.8, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "<0.01% of global male population",
    peakRegion: "Western Europe (relict)",
    estimatedCarriers: 50_000,
  },
  tags: ["Europe", "Paleolithic", "Cro-Magnon", "Mesolithic", "Relict", "Ice Age"],
  references: [
    "Fu et al. (2016) — The genetic history of Ice Age Europe. Nature 534, 200–205.",
    "Olalde et al. (2014) — Derived immune and ancestral pigmentation alleles in a 7,000-year-old Mesolithic European. Nature 507, 225–228.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C1a2a;
