import type { Haplogroup } from "@/types/haplogroup";

const X_mt: Haplogroup = {
  id: "X_mt",
  name: "X (mtDNA)",
  type: "mtDNA",
  parent: "N_mt",
  children: ["X1_mt", "X2_mt"],
  formed: "~30,000 BCE",
  mrca: "~20,000 BCE",
  origin: {
    region: "Near East / West Asia",
    period: "Upper Paleolithic",
    coordinates: [38, 33],
  },
  description:
    "Mitochondrial haplogroup X is one of the rarest and most enigmatic of the founding lineages found in the Americas. X2 — the dominant subclade — shows a puzzling trans-oceanic distribution: it is found in West Eurasian populations (Druze 26%, Georgians 8%, Near Easterners 3–5%) and also among certain North American Native peoples, most notably the Ojibwe and other Algonquian-speaking groups (up to 25%). The absence of X in Siberian and East Asian populations — the expected stepping-stone for Beringian migration — makes its presence in North America one of the great unsolved mysteries of population genetics. The leading hypothesis is that X entered North America as part of the founding Beringian migration but has since been lost from Siberian populations.",
  interestingFact:
    "The Druze of the Levant carry haplogroup X at frequencies up to 26% — the highest of any population on Earth — while some Ojibwe communities in North America also carry X at ~25%. These two populations are separated by thousands of kilometres with no intermediate carriers, making X's American presence one of the most debated puzzles in archaeogenetics.",
  distribution: [
    { ethnicity: "Druze", region: "Near East (Lebanon/Israel)", percentage: 26, sampleSize: 120 },
    { ethnicity: "Georgians", region: "Caucasus", percentage: 8, sampleSize: 250 },
    { ethnicity: "Ojibwe", region: "Americas (Great Lakes)", percentage: 25, sampleSize: 60 },
    { ethnicity: "Algonquian peoples (average)", region: "Americas (Northeast)", percentage: 7, sampleSize: 300 },
    { ethnicity: "Near Easterners (average)", region: "Near East", percentage: 4, sampleSize: 1000 },
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 2, sampleSize: 5000 },
  ],
  statistics: {
    modernFrequency: "~2% of global female population",
    peakRegion: "Near East / Northeastern North America",
    estimatedCarriers: 75_000_000,
  },
  tags: ["mtDNA", "Near East", "Native Americans", "Druze", "Enigmatic", "Paleolithic", "Maternal lineage"],
  references: [
    "Brown et al. (1998) — mtDNA haplogroup X: an ancient link between Europe/western Asia and North America? American Journal of Human Genetics 63(6), 1852–1861.",
    "Reidla et al. (2003) — Origin and diffusion of mtDNA haplogroup X. American Journal of Human Genetics 73(5), 1178–1190.",
    "Fagundes et al. (2008) — Mitochondrial population genomics supports a single pre-Clovis origin with a coastal route for the peopling of the Americas. American Journal of Human Genetics 82(3), 583–592.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default X_mt;
