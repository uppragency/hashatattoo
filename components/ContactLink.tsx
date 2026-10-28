"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { contactFor, isPiercingPath } from "@/lib/site";

/** Numarul de telefon, diferit pe paginile de piercing. */
export function PhoneLink({ cta = "call" }: { cta?: string }) {
  const c = contactFor(isPiercingPath(usePathname()));
  return (
    <a href={c.tel} data-cta={cta}>
      {c.display}
    </a>
  );
}

/** Link WhatsApp, cu numarul potrivit paginii. */
export function WaLink({ text, className, cta, label, children }: { text?: string; className?: string; cta: string; label?: string; children: ReactNode }) {
  const c = contactFor(isPiercingPath(usePathname()));
  return (
    <a className={className} href={c.wa(text)} target="_blank" rel="noopener noreferrer" data-cta={cta} aria-label={label}>
      {children}
    </a>
  );
}
