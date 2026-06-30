import type { Haplogroup } from "@/types/haplogroup";

const Q1b: Haplogroup = {
  id: "Q1b",
  name: "Q1b (M346)",
  type: "Y-DNA",
  parent: "Q1",
  children: [],
  formed: "~15,000 BCE",
  mrca: "~8,000 BCE",
  origin: { region: "Central Asia / South Asia", period: "Upper Paleolithic / Mesolithic", coordinates: [68, 35] },
  description: "Haplogroup Q1b (M346) is a subclade of Q1 found primarily in Central Asia and South Asia, particularly in Pakistan, Afghanistan, and northwestern India, as well as among some Central Asian populations. Unlike its sibling Q1a which expanded into the Americas, Q1b remained in Asia and diversified there. Q1b is found at elevated frequencies among certain Pakistani groups, Hazara, and some Afghan populations, suggesting it may have been part of the genetic legacy of ancient Central/South Asian peoples that predates the major Bronze Age expansions. It is also found at low frequencies among Jewish populations (Ashkenazi, Sephardic), potentially reflecting an ancient Near Eastern or Central Asian origin.",
  interestingFact: "Q1b is found at notably elevated frequencies among Ashkenazi Jews (~5%) compared to surrounding European populations — a distribution consistent with a Middle Eastern or Central Asian origin for this lineage, and possibly representing an ancient Near Eastern component in Jewish ancestry that was not shared with European neighbors.",
  distribution: [
    { ethnicity: "Pakistanis (Pashtun)", region: "South / Central Asia", percentage: 12, sampleSize: 400 },
    { ethnicity: "Hazara", region: "Central Asia (Afghanistan)", percentage: 8, sampleSize: 200 },
    { ethnicity: "Afghans", region: "Central / South Asia", percentage: 6, sampleSize: 300 },
    { ethnicity: "Ashkenazi Jews", region: "Europe / Israel", percentage: 5, sampleSize: 500 },
    { ethnicity: "North Indians", region: "South Asia", percentage: 2, sampleSize: 600 },
  ],
  statistics: { modernFrequency: "~0.5% of global male population", peakRegion: "Pakistan / Central Asia", estimatedCarriers: 20_000_000 },
  tags: ["Central Asia", "Pakistan", "Afghanistan", "South Asia", "Hazara", "Ashkenazi", "Mesolithic"],
  references: ["Firasat et al. (2007) — Y-chromosomal evidence for a limited Greek contribution to the Pathan population of Pakistan. European Journal of Human Genetics 15(1), 121–126."],
  featured: false,
  addedAt: "2026-06-30",
};
export default Q1b;
