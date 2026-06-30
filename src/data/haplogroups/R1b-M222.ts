import type { Haplogroup } from "@/types/haplogroup";

const R1b_M222: Haplogroup = {
  id: "R1b-M222",
  name: "R1b-M222",
  type: "Y-DNA",
  parent: "R1b-L21",
  children: [],
  formed: "~1,700 BCE",
  mrca: "~400 CE",
  origin: {
    region: "Northwest Ireland / Connacht",
    period: "Iron Age / Early Medieval",
    coordinates: [-8, 54],
  },
  description:
    "R1b-M222 is a remarkable subclade of L21 that originated in northwest Ireland and underwent an explosive expansion in the Early Medieval period, most likely associated with the dynasty of the Uí Néill — the powerful Irish ruling family that dominated Ireland from the 5th to 12th centuries CE. Today, M222 is found at frequencies of 20–40% in northwestern Ireland (particularly County Donegal, Mayo, and Tyrone) and at significant levels among the Scottish and Scots-Irish diaspora. The combination of the tight geographic focus, the late MRCA date (~400 CE), and the enormous number of modern carriers is consistent with an extreme founder effect driven by the political and military dominance of the Uí Néill lineage.",
  interestingFact:
    "R1b-M222 is often called the 'Niall of the Nine Hostages' marker, after the legendary 5th-century High King of Ireland from whom the Uí Néill dynasty claimed descent. If the genetic evidence reflects historical reality, Niall's patrilineal descendants may number in the millions today — one of the most prolific paternal lineages in recorded European history.",
  distribution: [
    { ethnicity: "Northwest Irish", region: "Western Europe (Ireland)", percentage: 35, sampleSize: 300 },
    { ethnicity: "Scottish", region: "Western Europe", percentage: 10, sampleSize: 400 },
    { ethnicity: "Scots-Irish Americans", region: "Americas", percentage: 8, sampleSize: 500 },
    { ethnicity: "Northern Irish", region: "Western Europe", percentage: 20, sampleSize: 250 },
    { ethnicity: "Irish (average)", region: "Western Europe", percentage: 15, sampleSize: 800 },
  ],
  clans: [
    { type: "dynasty", name: "Uí Néill", region: "Ireland", note: "The ruling dynastic family of Ireland from ~5th–12th century CE; M222 is proposed as their patrilineal genetic marker" },
    { type: "clan", name: "O'Neill", region: "Ulster (Ireland)", note: "Clan O'Neill, one of Ireland's most prominent Gaelic families, are primary bearers of the M222 lineage" },
    { type: "clan", name: "O'Donnell", region: "Donegal (Ireland)", note: "Clan O'Donnell, historic lords of Tyrconnell, are among the M222 clans" },
  ],
  statistics: {
    modernFrequency: "~0.5% of global male population",
    peakRegion: "Northwest Ireland",
    estimatedCarriers: 20_000_000,
  },
  tags: ["Celtic", "Irish", "Uí Néill", "Medieval", "Ireland", "Founder effect", "Gaelic"],
  references: [
    "Moore et al. (2006) — A Y-chromosome signature of hegemony in Gaelic Ireland. American Journal of Human Genetics 78(2), 334–338.",
    "McEvoy et al. (2006) — The scale and nature of Viking settlement in Ireland from Y-chromosome admixture analysis. European Journal of Human Genetics 14, 1288–1294.",
    "Cassidy et al. (2016) — Neolithic and Bronze Age migration to Ireland and establishment of the insular Atlantic genome. PNAS 113(2), 368–373.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default R1b_M222;
