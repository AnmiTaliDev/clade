import type { Haplogroup } from "@/types/haplogroup";

const H: Haplogroup = {
  id: "H",
  name: "H",
  type: "Y-DNA",
  parent: "F",
  children: ["H1", "H2"],
  formed: "~48,000 BCE",
  mrca: "~30,000 BCE",
  origin: {
    region: "South Asia (Indian subcontinent)",
    period: "Upper Paleolithic",
    coordinates: [78, 22],
  },
  description:
    "Y-DNA haplogroup H (defined by marker M69) is found predominantly in South Asia, where it represents one of the oldest indigenous paternal lineages. It is particularly common among Dravidian-speaking populations of southern India and among the Romani people (Roma), whose ancestors migrated out of northwestern India roughly 1,500 years ago. H is subdivided into H1 (the most widespread South Asian branch) and H2 (found in small pockets across South and West Asia). Its presence at significant frequencies among Roma across Europe provides genetic confirmation of this population's Indian origin.",
  interestingFact:
    "The Romani people of Europe were conclusively linked to South Asia through haplogroup H1a, found at 40–60% frequency among Roma men and rare outside the Indian subcontinent. This made H one of the key markers in establishing the Romani diaspora's Indian homeland.",
  distribution: [
    { ethnicity: "Romani (Roma)", region: "Europe / South Asia diaspora", percentage: 50, sampleSize: 300 },
    { ethnicity: "South Indians (Dravidian)", region: "South Asia", percentage: 25, sampleSize: 800 },
    { ethnicity: "Sri Lankans", region: "South Asia", percentage: 20, sampleSize: 200 },
    { ethnicity: "Pakistanis (average)", region: "South Asia", percentage: 12, sampleSize: 500 },
    { ethnicity: "North Indians (average)", region: "South Asia", percentage: 10, sampleSize: 900 },
    { ethnicity: "Nepalese", region: "South Asia", percentage: 8, sampleSize: 200 },
    { ethnicity: "Iranians", region: "Middle East", percentage: 2, sampleSize: 500 },
  ],
  clans: [
    {
      type: "tribe",
      name: "Romani (Roma)",
      region: "Europe-wide",
      note: "H1a is the dominant paternal lineage among Roma, confirming their northwest Indian origin",
    },
    {
      type: "clan",
      name: "Scheduled Castes / Dalits",
      region: "South India",
      note: "H is found at elevated frequencies among Dalit communities, reflecting deep pre-Aryan South Asian ancestry",
    },
  ],
  statistics: {
    modernFrequency: "~2% of global male population",
    peakRegion: "South India / Romani diaspora",
    estimatedCarriers: 75_000_000,
  },
  tags: ["South Asia", "Romani", "Dravidian", "India", "Paleolithic", "Diaspora"],
  references: [
    "Kivisild et al. (2003) — The genetic heritage of the earliest settlers persists both in Indian tribal and caste populations. American Journal of Human Genetics 72(2), 313–332.",
    "Gresham et al. (2001) — Origins and divergence of the Roma (Gypsies). American Journal of Human Genetics 69(6), 1314–1331.",
    "Moorjani et al. (2013) — Genetic evidence for recent population mixture in India. American Journal of Human Genetics 93(3), 422–438.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default H;
