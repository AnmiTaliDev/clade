import type { Haplogroup } from "@/types/haplogroup";

const J2: Haplogroup = {
  id: "J2",
  name: "J2",
  type: "Y-DNA",
  parent: "J",
  children: ["J2a", "J2b"],
  formed: "~19,000 BCE",
  mrca: "~12,000 BCE",
  origin: {
    region: "Near East (Fertile Crescent)",
    period: "Epipaleolithic",
    coordinates: [37, 36],
  },
  description:
    "J2 is a Y-DNA haplogroup strongly associated with the Neolithic spread of agriculture from the Fertile Crescent into Europe, the Caucasus, and South Asia. It is found at high frequencies among many Mediterranean and Middle Eastern populations and is often linked to ancient civilizations such as those of Mesopotamia, Anatolia, and the Indus Valley. J2a is dominant in the Mediterranean and Near East, while J2b is more common in South Asia.",
  interestingFact:
    "J2 has been found in ancient remains from early Neolithic farming villages in Anatolia, suggesting that Neolithic farmers — not hunter-gatherers — carried this haplogroup into Europe around 7,000 BCE, fundamentally reshaping European genetic landscape.",
  distribution: [
    { ethnicity: "Greeks", region: "Southern Europe", percentage: 20, sampleSize: 400 },
    { ethnicity: "Italians (Southern)", region: "Southern Europe", percentage: 26, sampleSize: 350 },
    { ethnicity: "Turks", region: "Anatolia", percentage: 24, sampleSize: 600 },
    { ethnicity: "Iranians", region: "Middle East", percentage: 23, sampleSize: 500 },
    { ethnicity: "Lebanese", region: "Middle East", percentage: 29, sampleSize: 300 },
    { ethnicity: "Georgians", region: "Caucasus", percentage: 27, sampleSize: 250 },
    { ethnicity: "Armenians", region: "Caucasus", percentage: 22, sampleSize: 300 },
    { ethnicity: "Cypriots", region: "Eastern Mediterranean", percentage: 37, sampleSize: 200 },
    { ethnicity: "Brahui", region: "South Asia", percentage: 28, sampleSize: 150 },
  ],
  clans: [
    { type: "tribe", name: "Neolithic Anatolian Farmers", region: "Anatolia", note: "Primary carriers of J2 into Europe during Neolithic expansion" },
    { type: "dynasty", name: "Phoenicians", region: "Levant", note: "Historical evidence connects J2 to Phoenician maritime traders" },
  ],
  statistics: {
    modernFrequency: "~5% of global male population",
    peakRegion: "Caucasus / Eastern Mediterranean",
    estimatedCarriers: 180_000_000,
  },
  tags: ["Neolithic", "Near East", "Mediterranean", "Agriculture", "Anatolia", "Fertile Crescent"],
  references: [
    "Semino et al. (2004) — Origin, diffusion, and differentiation of Y-chromosome haplogroups E and J. American Journal of Human Genetics 74(5).",
    "Chiaroni et al. (2008) — Y chromosome diversity, human expansion, drift, and cultural evolution. PNAS 105(33).",
    "Karmin et al. (2015) — A recent bottleneck of Y chromosome diversity coincides with a global change in culture. Genome Research.",
  ],
  featured: true,
  addedAt: "2026-04-09",
};

export default J2;
