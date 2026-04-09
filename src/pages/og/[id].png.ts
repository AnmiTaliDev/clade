import type { APIRoute } from "astro";
import { haplogroups, getHaplogroup } from "@/data/haplogroups";

export function getStaticPaths() {
  return [
    ...haplogroups.map((h) => ({ params: { id: h.id } })),
    { params: { id: "default" } },
  ];
}

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  const h = id !== "default" ? getHaplogroup(id!) : null;

  const name = h?.name ?? "Clade";
  const type = h?.type ?? "";
  const origin = h?.origin.region ?? "The Haplogroup Encyclopedia";
  const formed = h?.formed ?? "";
  const topDist = h?.distribution.slice(0, 3).map((d) => `${d.ethnicity} ${d.percentage}%`).join(" · ") ?? "";

  const typeColor = type === "Y-DNA" ? "#1a4a6e" : type === "mtDNA" ? "#5a1f4a" : "#2d5f8a";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf9f7"/>
  <rect x="0" y="0" width="8" height="630" fill="${typeColor}"/>
  <rect x="0" y="580" width="1200" height="50" fill="#f3f1ec"/>

  <text x="60" y="80" font-family="Georgia,serif" font-size="22" fill="#9e9890">Clade — The Haplogroup Encyclopedia</text>

  <text x="60" y="200" font-family="Georgia,serif" font-size="88" font-weight="normal" fill="#1a1916">${escapeXml(name)}</text>

  ${type ? `<rect x="60" y="220" width="${type.length * 11 + 28}" height="36" rx="6" fill="${typeColor}20"/>
  <text x="74" y="243" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="600" fill="${typeColor}">${escapeXml(type)}</text>` : ""}

  ${origin ? `<text x="60" y="310" font-family="Inter,system-ui,sans-serif" font-size="24" fill="#6b6560">${escapeXml(origin)}${formed ? " · " + escapeXml(formed) : ""}</text>` : ""}

  ${topDist ? `<text x="60" y="370" font-family="Inter,system-ui,sans-serif" font-size="20" fill="#9e9890">${escapeXml(topDist)}</text>` : ""}

  <line x1="60" y1="440" x2="560" y2="440" stroke="#d8d3c8" stroke-width="1"/>

  <text x="60" y="470" font-family="Inter,system-ui,sans-serif" font-size="18" fill="#9e9890">clade.anmitali.dev</text>

  <g transform="translate(1060, 80)">
    <line x1="40" y1="80" x2="40" y2="44" stroke="#2d5f8a" stroke-width="3" stroke-linecap="round"/>
    <line x1="40" y1="44" x2="16" y2="24" stroke="#2d5f8a" stroke-width="3" stroke-linecap="round"/>
    <line x1="40" y1="44" x2="64" y2="24" stroke="#2d5f8a" stroke-width="3" stroke-linecap="round"/>
    <line x1="16" y1="24" x2="6" y2="10" stroke="#2d5f8a" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="16" y1="24" x2="26" y2="10" stroke="#2d5f8a" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="64" y1="24" x2="54" y2="10" stroke="#2d5f8a" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="64" y1="24" x2="74" y2="10" stroke="#2d5f8a" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="40" cy="80" r="4" fill="#2d5f8a"/>
    <circle cx="40" cy="44" r="4" fill="#2d5f8a"/>
    <circle cx="16" cy="24" r="3" fill="#2d5f8a"/>
    <circle cx="64" cy="24" r="3" fill="#2d5f8a"/>
    <circle cx="6" cy="10" r="2.5" fill="#2d5f8a"/>
    <circle cx="26" cy="10" r="2.5" fill="#2d5f8a"/>
    <circle cx="54" cy="10" r="2.5" fill="#2d5f8a"/>
    <circle cx="74" cy="10" r="2.5" fill="#2d5f8a"/>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
