/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useSyncExternalStore } from "react";
import { INITIAL_VISIBLE, items, visibleIndices, type Category } from "@/lib/portfolio";
import { getState, openLightbox, setCategory, subscribe, toggleExpanded } from "@/lib/gallery-store";

const FILTERS: { key: Category; label: string; count: number }[] = [
  { key: "all", label: "TOATE", count: 20 },
  { key: "tattoo", label: "TATUAJE", count: 12 },
  { key: "piercing", label: "PIERCING", count: 8 },
];

export default function Gallery({ showAll = false }: { showAll?: boolean }) {
  const state = useSyncExternalStore(subscribe, getState, getState);
  const gridRef = useRef<HTMLDivElement>(null);
  const inds = visibleIndices(state.category);
  const showing = state.expanded || showAll ? inds : inds.slice(0, INITIAL_VISIBLE);

  return (
    <>
      <div className="portfolio-toolbar">
        <div className="filter-group" role="group" aria-label="Filtrează portofoliul">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={f.key === state.category ? "filter is-active" : "filter"}
              data-filter={f.key}
              aria-pressed={f.key === state.category}
              onClick={() => setCategory(f.key)}
            >
              {f.label} <sup>{f.count}</sup>
            </button>
          ))}
        </div>
        <span className="micro">APASĂ PENTRU A VEDEA ↗</span>
      </div>
      <div className="gallery-grid" id="galleryGrid" aria-live="polite" ref={gridRef}>
        {showing.map((index) => {
          const item = items[index];
          return (
            <button
              key={item[0]}
              type="button"
              className="gallery-card"
              data-index={index}
              aria-label={"Vezi lucrarea: " + item[1]}
              onClick={(e) => openLightbox(index, e.currentTarget)}
            >
              <img src={"/assets/" + item[0]} loading="lazy" decoding="async" alt={item[3]} />
              <div className="gallery-card-caption">
                <div>
                  <b>{item[1].split(" / ")[0].toUpperCase()}</b>
                  <small>{item[2] === "tattoo" ? "HASHA / TATTOO" : "HASHA / PIERCING"}</small>
                </div>
                <span>↗</span>
              </div>
            </button>
          );
        })}
      </div>
      <button
        className="load-more"
        type="button"
        id="loadMore"
        hidden={showAll || inds.length <= INITIAL_VISIBLE}
        onClick={() => {
          const wasExpanded = getState().expanded;
          toggleExpanded();
          if (wasExpanded) requestAnimationFrame(() => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
        }}
      >
        <span>{state.expanded ? "ARATĂ MAI PUȚINE LUCRĂRI" : "DESCOPERĂ MAI MULTE LUCRĂRI"}</span>
        <span>{state.expanded ? "↑" : "↓"}</span>
      </button>
    </>
  );
}
