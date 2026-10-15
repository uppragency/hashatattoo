"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS: { href: string; label: string }[] = [
  { href: "/tatuaje", label: "Tatuaje" },
  { href: "/piercing", label: "Piercing" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/ghiduri", label: "Ghiduri" },
  { href: "/cover-up-tatuaje-bucuresti", label: "Cover-up tatuaje" },
  { href: "/corectare-tatuaje-bucuresti", label: "Corectare tatuaje" },
  { href: "/zone", label: "Zone și cartiere" },
  { href: "/intrebari-frecvente", label: "Întrebări frecvente" },
];

/** Pe mobil se văd primele 3 linkuri, restul se deschid cu buton. Pe desktop se văd toate, pe 2 coloane. */
export default function ExploreLinks() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ul className={`hasha-footer__links hasha-footer__links--cols${open ? " is-open" : ""}`} id="hasha-explore-links">
        {LINKS.map((l, i) => (
          <li key={l.href} className={i >= 3 ? "is-extra" : undefined}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="hasha-footer__more"
        aria-expanded={open}
        aria-controls="hasha-explore-links"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "MAI PUȚINE PAGINI" : `ÎNCĂ ${LINKS.length - 3} PAGINI`}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
    </>
  );
}
