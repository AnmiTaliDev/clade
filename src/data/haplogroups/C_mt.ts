import type { Haplogroup } from "@/types/haplogroup";

const C_mt: Haplogroup = {
  id: "C_mt",
  name: "C (mtDNA)",
  type: "mtDNA",
  parent: "M_mt",
  children: ["C1_mt", "C2_mt", "C4_mt", "C5_mt"],
  formed: "~50,000 BCE",
  mrca: "~45,000 BCE",
  origin: {
    region: "Siberia / Central Asia",
    period: "Upper Paleolithic",
    coordinates: [100, 55],
  },
  description:
    "Mitochondrial haplogroup C is a subclade of M that spread from an origin in Siberia or Central Asia and became one of the dominant maternal lineages across northern Eurasia and the Americas. C is found at high frequencies among Siberian populations such as the Evenks, Buryats, and Yakuts, and represents one of the five founding mtDNA lineages that entered the Americas with the first migrants approximately 15,000–20,000 years ago. Subclade C1 is almost exclusively Native American, while C4 and C5 are widespread in Siberia and Central Asia.",
  interestingFact:
    "Haplogroup C1 is one of the five founding maternal lineages of Native Americans and is found in populations as geographically distant as the Aleut of Alaska and the Tehuelche of Patagonia, tracing an unbroken maternal thread across the entire length of the Americas.",
  distribution: [
    { ethnicity: "Evenks", region: "Siberia", percentage: 60, sampleSize: 150 },
    { ethnicity: "Buryats", region: "Siberia", percentage: 35, sampleSize: 200 },
    { ethnicity: "Yakuts", region: "Siberia", percentage: 20, sampleSize: 300 },
    { ethnicity: "Mongolians", region: "Central Asia", percentage: 15, sampleSize: 400 },
    { ethnicity: "Native Americans (average)", region: "Americas", percentage: 12, sampleSize: 1000 },
  ],
  statistics: {
    modernFrequency: "~4% of global female population",
    peakRegion: "Siberia / Northern Asia",
    estimatedCarriers: 150_000_000,
  },
  tags: ["mtDNA", "Siberia", "Native Americans", "East Asia", "Paleolithic", "Maternal lineage"],
  references: [
    "Tamm et al. (2007) — Beringian standstill and spread of Native American founders. PLOS ONE 2(9), e829.",
    "Derenko et al. (2010) — Complete mitochondrial DNA analysis of eastern Eurasian haplogroups rarely found in populations of northern Asia and eastern Europe. PLOS ONE 5(12), e14105.",
    "Starikovskaya et al. (2005) — Mitochondrial DNA diversity in indigenous populations of the southern extent of Siberia. Annals of Human Genetics 69(1), 67–89.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C_mt;
