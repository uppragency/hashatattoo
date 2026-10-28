"use client";

import Link from "next/link";
import { useState } from "react";
import { search, type SearchEntry } from "@/lib/search-index";

const POPULAR: { label: string; href: string }[] = [
  { label: "Prețuri", href: "/preturi-tatuaje" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Ghiduri", href: "/ghiduri" },
  { label: "Contact", href: "/contact" },
];

export default function SiteSearch({ initial = "" }: { initial?: string }) {
  const [q, setQ] = useState(initial);
  const results: SearchEntry[] = search(q);
  const asked = q.trim().length > 1;

  return (
    <div className="ss">
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="ss-input">CAUTĂ ÎN SITE</label>
        <input
          id="ss-input"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ex.: preț piercing, cover-up, îngrijire tatuaj"
          autoComplete="off"
          maxLength={80}
        />
      </form>
      <div aria-live="polite">
        {asked && results.length ? (
          <ul className="ss-results">
            {results.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>
                  <small>{r.type.toUpperCase()}</small>
                  <b>{r.title}</b>
                  <span>↗︎</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        {asked && !results.length ? (
          <p className="ss-empty">
            Nu am găsit nimic pentru „{q.trim()}”. Încearcă alt cuvânt sau{" "}
            <a href="https://wa.me/40766422219?text=Bun%C4%83%21%20Am%20o%20%C3%AEntrebare." target="_blank" rel="noopener noreferrer">
              scrie-ne pe WhatsApp
            </a>
            .
          </p>
        ) : null}
        {!asked ? (
          <div className="ss-popular">
            <small>POPULAR</small>
            {POPULAR.map((p) => (
              <Link key={p.href} href={p.href}>
                {p.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
