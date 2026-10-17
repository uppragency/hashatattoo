/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { items } from "@/lib/portfolio";
import { openLightbox } from "@/lib/gallery-store";
import { STYLE_LABELS, STYLE_LINKS, indicesFor, type StyleTag } from "@/lib/styles";

const ORDER: (StyleTag | "all")[] = ["all", "realism", "black-grey", "portrete", "maneci", "backpiece", "ornamental", "color"];

/** Galerie filtrată pe stil. Dacă `fixed` e dat, nu afișează filtre și arată doar acel stil. */
export default function StyleGallery({ fixed }: { fixed?: StyleTag }) {
  const [tag, setTag] = useState<StyleTag | "all">(fixed ?? "all");
  const list = indicesFor(tag);
  const link = tag !== "all" ? STYLE_LINKS[tag] : undefined;

  return (
    <>
      {fixed ? null : (
        <div className="portfolio-toolbar">
          <div className="filter-group" role="group" aria-label="Filtrează lucrările după stil">
            {ORDER.map((t) => (
              <button key={t} type="button" className={t === tag ? "filter is-active" : "filter"} aria-pressed={t === tag} onClick={() => setTag(t)}>
                {t === "all" ? "TOATE" : STYLE_LABELS[t].toUpperCase()} <sup>{indicesFor(t).length}</sup>
              </button>
            ))}
          </div>
          <span className="micro">APASĂ PENTRU A VEDEA ↗︎</span>
        </div>
      )}
      {link ? (
        <p className="style-link">
          Despre acest stil:{" "}
          <Link className="text-arrow" href={link}>
            {`PAGINA ${STYLE_LABELS[tag as StyleTag].toUpperCase()} `}
            <span>↗︎</span>
          </Link>
        </p>
      ) : null}
      <div className="gallery-grid style-grid" aria-live="polite">
        {list.map((index) => {
          const item = items[index];
          return (
            <button
              key={item[0]}
              type="button"
              className="gallery-card"
              aria-label={"Vezi lucrarea: " + item[1]}
              onClick={(e) => openLightbox(index, e.currentTarget, list)}
            >
              <img src={"/assets/" + item[0]} loading="lazy" decoding="async" alt={item[3]} />
              <div className="gallery-card-caption">
                <div>
                  <b>{item[1].split(" / ")[0].toUpperCase()}</b>
                  <small>HASHA / TATTOO</small>
                </div>
                <span>↗︎</span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
