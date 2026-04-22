import type { Haplogroup } from "@/types/haplogroup";

import A from "./A";
import BT from "./BT";
import CT from "./CT";
import CF from "./CF";
import DE from "./DE";
import D from "./D";
import E from "./E";
import E1b1b from "./E1b1b";
import F from "./F";
import G from "./G";
import H from "./H";
import I from "./I";
import I1 from "./I1";
import I2 from "./I2";
import IJ from "./IJ";
import J from "./J";
import J1 from "./J1";
import J2 from "./J2";
import K from "./K";
import LT from "./LT";
import L from "./L";
import T from "./T";
import NO from "./NO";
import N from "./N";
import N1 from "./N1";
import N1c from "./N1c";
import O from "./O";
import C from "./C";
import C1 from "./C1";
import C1a from "./C1a";
import C1a1 from "./C1a1";
import C1a2 from "./C1a2";
import C1b from "./C1b";
import C1b1 from "./C1b1";
import C1b2 from "./C1b2";
import C1b2a from "./C1b2a";
import C1b2b from "./C1b2b";
import C2 from "./C2";
import C2a from "./C2a";
import C2b from "./C2b";
import C2b1a1 from "./C2b1a1";
import P from "./P";
import Q from "./Q";
import R from "./R";
import R1 from "./R1";
import R1a from "./R1a";
import R1b from "./R1b";

import L_mt from "./L_mt";
import L3 from "./L3";
import M_mt from "./M_mt";
import N_mt from "./N_mt";
import R_mt from "./R_mt";
import HV from "./HV";
import H_mt from "./H_mt";
import JT_mt from "./JT_mt";
import J_mt from "./J_mt";
import T_mt from "./T_mt";
import U_mt from "./U_mt";
import K_mt from "./K_mt";

export const haplogroups: Haplogroup[] = [
  A,
  BT,
  CT,
  DE,
  D,
  E,
  E1b1b,
  CF,
  C,
  C1,
  C1a,
  C1a1,
  C1a2,
  C1b,
  C1b1,
  C1b2,
  C1b2a,
  C1b2b,
  C2,
  C2a,
  C2b,
  C2b1a1,
  F,
  G,
  H,
  IJ,
  I,
  I1,
  I2,
  J,
  J1,
  J2,
  K,
  LT,
  L,
  T,
  NO,
  N,
  N1,
  N1c,
  O,
  P,
  Q,
  R,
  R1,
  R1a,
  R1b,
  L_mt,
  L3,
  M_mt,
  N_mt,
  R_mt,
  HV,
  H_mt,
  JT_mt,
  J_mt,
  T_mt,
  U_mt,
  K_mt,
];

export function getHaplogroup(id: string): Haplogroup | undefined {
  return haplogroups.find((h) => h.id === id);
}

export function getFeatured(): Haplogroup[] {
  return haplogroups.filter((h) => h.featured);
}

export function getByType(type: Haplogroup["type"]): Haplogroup[] {
  return haplogroups.filter((h) => h.type === type);
}

export function getByRegion(region: string): Haplogroup[] {
  return haplogroups.filter((h) =>
    h.distribution.some((d) =>
      d.region.toLowerCase().includes(region.toLowerCase()),
    ),
  );
}

export function buildTree(): TreeNode[] {
  const map = new Map<string, TreeNode>();
  const roots: TreeNode[] = [];

  for (const h of haplogroups) {
    map.set(h.id, { id: h.id, name: h.name, type: h.type, children: [] });
  }

  for (const h of haplogroups) {
    const node = map.get(h.id)!;
    if (h.parent && map.has(h.parent)) {
      map.get(h.parent)!.children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}

export interface TreeNode {
  id: string;
  name: string;
  type: Haplogroup["type"];
  children: TreeNode[];
}

export function getAllRegions(): string[] {
  const regions = new Set<string>();
  for (const h of haplogroups) {
    for (const d of h.distribution) {
      regions.add(d.region);
    }
  }
  return Array.from(regions).sort();
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const h of haplogroups) {
    for (const tag of h.tags) {
      tags.add(tag);
    }
  }
  return Array.from(tags).sort();
}
