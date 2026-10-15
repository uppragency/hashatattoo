export const BUSINESS = {
  name: "Hasha Tattoo",
  address: "Bulevardul Mărășești nr. 80, Sector 4, București",
  email: "hashatattoo@gmail.com",
  phone: "+40 766 422 219",
  /**
   * Completează cu datele operatorului (denumire societate, CUI, nr. Registrul Comerțului) înainte de lansarea finală.
   * Cât timp este null, paginile legale afișează doar numele comercial.
   */
  legalEntity: null as string | null,
  updated: "15 octombrie 2026",
};

import type { ReactNode } from "react";

export type LegalSection = { title: string; paragraphs?: string[]; items?: string[]; extra?: ReactNode };
