import type { Haplogroup } from "@/types/haplogroup";

const N: Haplogroup = {
  id: "N",
  name: "N",
  type: "Y-DNA",
  parent: "NO",
  children: ["N1", "N2"],
  formed: "~36,000 BCE",
  mrca: "~20,000 BCE",
  origin: {
    region: "Southeast Asia / South China",
    period: "Upper Paleolithic",
    coordinates: [108, 25],
  },
  description:
    "Haplogroup N originated in Southeast Asia or South China and spread northward through Siberia, eventually reaching Northern Europe. It is defined by the M231 marker. The major subclade N1 (especially N1c/N-L392) is associated with the spread of Uralic languages and is found at high frequencies in Finland, Estonia, Latvia, Lithuania, and many Siberian populations. N2 is rarer and found in Siberia and parts of East Asia.",
  interestingFact:
    "Haplogroup N undertook one of the longest patrilineal journeys in human history — originating in Southeast Asia and spreading through Siberia all the way to Scandinavia, leaving a trail of Uralic-speaking populations from the Nenets in the Arctic to the Finns in Northern Europe.",
  distribution: [
    { ethnicity: "Yakuts", region: "Siberia", percentage: 90, sampleSize: 300 },
    { ethnicity: "Nenets", region: "Arctic Siberia", percentage: 65, sampleSize: 100 },
    { ethnicity: "Finns", region: "Northern Europe", percentage: 60, sampleSize: 700 },
    { ethnicity: "Latvians", region: "Baltic", percentage: 38, sampleSize: 300 },
    { ethnicity: "Khanty", region: "West Siberia", percentage: 75, sampleSize: 120 },
  ],
  statistics: {
    modernFrequency: "~4% of global male population",
    peakRegion: "Siberia / Northern Europe",
    estimatedCarriers: 150_000_000,
  },
  tags: ["Uralic", "Siberia", "Northern Europe", "Finland", "Yakuts"],
  references: [
    "Rootsi et al. (2007) — A counter-clockwise northern route of the Y-chromosome haplogroup N from Southeast Asia towards Europe. European Journal of Human Genetics 15, 204–211.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default N;
