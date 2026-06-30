import type { Haplogroup } from "@/types/haplogroup";

import A from "./A";
import BT from "./BT";
import CT from "./CT";
import CF from "./CF";
import DE from "./DE";
import D from "./D";
import E from "./E";
import E1b1a from "./E1b1a";
import E1b1b from "./E1b1b";
import F from "./F";
import G from "./G";
import G1 from "./G1";
import G2 from "./G2";
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
import O1 from "./O1";
import O2 from "./O2";
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
import C2a1 from "./C2a1";
import C2b from "./C2b";
import C2b1 from "./C2b1";
import C2b1a from "./C2b1a";
import C2b1a2 from "./C2b1a2";
import C2b1b from "./C2b1b";
import C2b1a1 from "./C2b1a1";
import C2b1a1a from "./C2b1a1a";
import C2b1a1b from "./C2b1a1b";
import C2b1a1c from "./C2b1a1c";
import C2a1a from "./C2a1a";
import C2a1a1 from "./C2a1a1";
import C2a1a2 from "./C2a1a2";
import C2a1a3 from "./C2a1a3";
import C2a1a3a from "./C2a1a3a";
import C2a1a3a1 from "./C2a1a3a1";
import C2b_CTS4660 from "./C2b-CTS4660";
import C2b_MF630546 from "./C2b-MF630546";
import C2b_MF653129 from "./C2b-MF653129";
import C2a1a3a1a from "./C2a1a3a1a";
import C2a1a3a1b from "./C2a1a3a1b";
import C2a1a3a1b1 from "./C2a1a3a1b1";
import C1a2a from "./C1a2a";
import C1b2a1 from "./C1b2a1";
import C1b2b1 from "./C1b2b1";
import C2b1a2a from "./C2b1a2a";
import C2b1a2a1 from "./C2b1a2a1";
import C2b1a2a1b from "./C2b1a2a1b";
import N1a from "./N1a";
import N1a1 from "./N1a1";
import N1a1a from "./N1a1a";
import N1a2b from "./N1a2b";
import O2a from "./O2a";
import O2a2 from "./O2a2";
import O2a2b from "./O2a2b";
import O2a2b1 from "./O2a2b1";
import O_Y22112 from "./O-Y22112";
import R1a1 from "./R1a1";
import P from "./P";
import Q from "./Q";
import Q1 from "./Q1";
import R from "./R";
import R2 from "./R2";
import R1 from "./R1";
import R1a from "./R1a";
import R1a_M417 from "./R1a-M417";
import R1a_Z282 from "./R1a-Z282";
import R1a_Z93 from "./R1a-Z93";
import R1b from "./R1b";
import R1b_M269 from "./R1b-M269";
import R1b_L23 from "./R1b-L23";
import R1b_L51 from "./R1b-L51";
import R1b_L11 from "./R1b-L11";
import R1b_P312 from "./R1b-P312";
import R1b_DF13 from "./R1b-DF13";
import R1b_DF19 from "./R1b-DF19";
import R1b_U106 from "./R1b-U106";
import R1b_U152 from "./R1b-U152";
import R1b_DF27 from "./R1b-DF27";
import R1b_L21 from "./R1b-L21";
import R1b_M222 from "./R1b-M222";
import R1b_Z156 from "./R1b-Z156";
import R1b_Z2103 from "./R1b-Z2103";
import R1b_V88 from "./R1b-V88";
import R1b_M73 from "./R1b-M73";

import L_mt from "./L_mt";
import L0 from "./L0";
import L1 from "./L1";
import L2 from "./L2";
import L3 from "./L3";
import M_mt from "./M_mt";
import C_mt from "./C_mt";
import Z_mt from "./Z_mt";
import D_mt from "./D_mt";
import G_mt from "./G_mt";
import N_mt from "./N_mt";
import A_mt from "./A_mt";
import A2_mt from "./A2_mt";
import X_mt from "./X_mt";
import X2_mt from "./X2_mt";
import W_mt from "./W_mt";
import I_mt from "./I_mt";
import R_mt from "./R_mt";
import B_mt from "./B_mt";
import F_mt from "./F_mt";
import HV from "./HV";
import H_mt from "./H_mt";
import V_mt from "./V_mt";
import JT_mt from "./JT_mt";
import J_mt from "./J_mt";
import T_mt from "./T_mt";
import U_mt from "./U_mt";
import U1_mt from "./U1_mt";
import U5_mt from "./U5_mt";
import U5a_mt from "./U5a_mt";
import U5b_mt from "./U5b_mt";
import K_mt from "./K_mt";
import K1_mt from "./K1_mt";
import K1a_mt from "./K1a_mt";
import H1_mt from "./H1_mt";
import H2_mt from "./H2_mt";
import H3_mt from "./H3_mt";
import H4_mt from "./H4_mt";
import H5_mt from "./H5_mt";
import H6_mt from "./H6_mt";
import H7_mt from "./H7_mt";
import H8_mt from "./H8_mt";
import H10_mt from "./H10_mt";
import H11_mt from "./H11_mt";
import H13_mt from "./H13_mt";
import H1a_mt from "./H1a_mt";
import H1b_mt from "./H1b_mt";
import H3a_mt from "./H3a_mt";
import J1_mt from "./J1_mt";
import J1b_mt from "./J1b_mt";
import J1c_mt from "./J1c_mt";
import J2_mt from "./J2_mt";
import J2a_mt from "./J2a_mt";
import J2b_mt from "./J2b_mt";
import T1_mt from "./T1_mt";
import T1a_mt from "./T1a_mt";
import T2_mt from "./T2_mt";
import T2b_mt from "./T2b_mt";
import T2c_mt from "./T2c_mt";
import T2e_mt from "./T2e_mt";
import D4_mt from "./D4_mt";
import D1_mt from "./D1_mt";
import D5_mt from "./D5_mt";
import C1_mt from "./C1_mt";
import C4_mt from "./C4_mt";
import C5_mt from "./C5_mt";
import B4_mt from "./B4_mt";
import B4a_mt from "./B4a_mt";
import B5_mt from "./B5_mt";
import M7_mt from "./M7_mt";
import M8_mt from "./M8_mt";
import E_mt from "./E_mt";
import U2_mt from "./U2_mt";
import U3_mt from "./U3_mt";
import U4_mt from "./U4_mt";
import U6_mt from "./U6_mt";
import U8_mt from "./U8_mt";
import Y_mt from "./Y_mt";
import S_mt from "./S_mt";
import P_mt from "./P_mt";
import L0a_mt from "./L0a_mt";
import L0d_mt from "./L0d_mt";
import L1b_mt from "./L1b_mt";
import L1c_mt from "./L1c_mt";
import L2a_mt from "./L2a_mt";
import L2a1_mt from "./L2a1_mt";
import L2b_mt from "./L2b_mt";
import L2c_mt from "./L2c_mt";
import L3b_mt from "./L3b_mt";
import L3d_mt from "./L3d_mt";
import L3e_mt from "./L3e_mt";
import D1 from "./D1";
import D1a from "./D1a";
import D1b from "./D1b";
import E1b1a1 from "./E1b1a1";
import E1b1b1 from "./E1b1b1";
import E1b1b1a from "./E1b1b1a";
import E1b1b1b from "./E1b1b1b";
import E1b1b1c from "./E1b1b1c";
import G2a from "./G2a";
import G2a2 from "./G2a2";
import G2b from "./G2b";
import I1a from "./I1a";
import I2a from "./I2a";
import I2a1 from "./I2a1";
import I2a2 from "./I2a2";
import I2b from "./I2b";
import J1b from "./J1b";
import J2a from "./J2a";
import J2a1 from "./J2a1";
import J2b from "./J2b";
import J2b2 from "./J2b2";
import N1c1 from "./N1c1";
import N1c1a from "./N1c1a";
import Q1a from "./Q1a";
import Q1b from "./Q1b";
import T1 from "./T1";
import T1a from "./T1a";
import H1 from "./H1";

export const haplogroups: Haplogroup[] = [
  A,
  BT,
  CT,
  DE,
  D,
  E,
  E1b1a,
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
  C2a1,
  C2b,
  C2b1,
  C2b1a,
  C2b1a2,
  C2b1b,
  C2b1a1,
  C2b1a1a,
  C2b1a1b,
  C2b1a1c,
  C2a1a,
  C2a1a1,
  C2a1a2,
  C2a1a3,
  C2a1a3a,
  C2a1a3a1,
  C2b_CTS4660,
  C2b_MF630546,
  C2b_MF653129,
  C2a1a3a1a,
  C2a1a3a1b,
  C2a1a3a1b1,
  C1a2a,
  C1b2a1,
  C1b2b1,
  C2b1a2a,
  C2b1a2a1,
  C2b1a2a1b,
  F,
  G,
  G1,
  G2,
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
  N1a,
  N1a1,
  N1a1a,
  N1a2b,
  O,
  O1,
  O2,
  O2a,
  O2a2,
  O2a2b,
  O2a2b1,
  O_Y22112,
  P,
  Q,
  Q1,
  R,
  R2,
  R1,
  R1a,
  R1a1,
  R1a_M417,
  R1a_Z282,
  R1a_Z93,
  R1b,
  R1b_M269,
  R1b_L23,
  R1b_L51,
  R1b_L11,
  R1b_P312,
  R1b_DF13,
  R1b_DF19,
  R1b_U106,
  R1b_U152,
  R1b_DF27,
  R1b_L21,
  R1b_M222,
  R1b_Z156,
  R1b_Z2103,
  R1b_V88,
  R1b_M73,
  L_mt,
  L0,
  L1,
  L2,
  L3,
  M_mt,
  C_mt,
  Z_mt,
  D_mt,
  G_mt,
  N_mt,
  A_mt,
  A2_mt,
  X_mt,
  X2_mt,
  W_mt,
  I_mt,
  R_mt,
  B_mt,
  F_mt,
  HV,
  H_mt,
  V_mt,
  JT_mt,
  J_mt,
  T_mt,
  U_mt,
  U1_mt,
  U5_mt,
  U5a_mt,
  U5b_mt,
  K_mt,
  K1_mt,
  K1a_mt,
  H1_mt,
  H1a_mt,
  H1b_mt,
  H2_mt,
  H3_mt,
  H3a_mt,
  H4_mt,
  H5_mt,
  H6_mt,
  H7_mt,
  H8_mt,
  H10_mt,
  H11_mt,
  H13_mt,
  J1_mt,
  J1b_mt,
  J1c_mt,
  J2_mt,
  J2a_mt,
  J2b_mt,
  T1_mt,
  T1a_mt,
  T2_mt,
  T2b_mt,
  T2c_mt,
  T2e_mt,
  D4_mt,
  D5_mt,
  D1_mt,
  C1_mt,
  C4_mt,
  C5_mt,
  B4_mt,
  B4a_mt,
  B5_mt,
  M7_mt,
  M8_mt,
  E_mt,
  U2_mt,
  U3_mt,
  U4_mt,
  U6_mt,
  U8_mt,
  Y_mt,
  S_mt,
  P_mt,
  L0a_mt,
  L0d_mt,
  L1b_mt,
  L1c_mt,
  L2a_mt,
  L2a1_mt,
  L2b_mt,
  L2c_mt,
  L3b_mt,
  L3d_mt,
  L3e_mt,
  D1,
  D1a,
  D1b,
  E1b1a1,
  E1b1b1,
  E1b1b1a,
  E1b1b1b,
  E1b1b1c,
  G2a,
  G2a2,
  G2b,
  I1a,
  I2a,
  I2a1,
  I2a2,
  I2b,
  J1b,
  J2a,
  J2a1,
  J2b,
  J2b2,
  N1c1,
  N1c1a,
  Q1a,
  Q1b,
  T1,
  T1a,
  H1,
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
