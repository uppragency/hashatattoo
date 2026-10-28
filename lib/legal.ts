export const BUSINESS = {
  name: "Hasha Tattoo",
  address: "Bulevardul Mărășești nr. 80, Sector 4, București",
  email: "hashatattoo@gmail.com",
  phone: "+40 766 422 219",
  /** Operatorul: datele societatii, afisate in paginile legale. */
  legalEntity: "HASHA TATTOO SRL, CUI 33254927, nr. Reg. Com. J2014006791408" as string | null,
  /** Sediul social (diferit de punctul de lucru de mai sus). */
  registeredOffice: "Bdul. Râmnicu Sărat nr. 21A, Bl. 20M, Sc. 1, Et. 6, Ap. 24, cod poștal 031904, Sector 3, București",
  updated: "28 octombrie 2026",
};

import type { ReactNode } from "react";

export type LegalSection = { title: string; paragraphs?: string[]; items?: string[]; extra?: ReactNode };
