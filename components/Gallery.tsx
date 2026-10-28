/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useSyncExternalStore } from "react";
import { GRID, items, visibleIndices, type Category } from "@/lib/portfolio";
import { getState, moreRows, openLightbox, resetRows, setCategory, subscribe } from "@/lib/gallery-store";

const FILTERS: { key: Category; label: string; count: number }[] = [
  { key: "all", label: "TOATE", count: items.length },
  { key: "tattoo", label: "TATUAJE", count: items.filter((i) => i[2] === "tattoo").length },
  { key: "piercing", label: "PIERCING", count: items.filter((i) => i[2] === "piercing").length },
];

const MOBILE_QUERY = "(max-width: 900px)";
const subscribeMobile = (cb: () => void) => {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/** Cate carduri sunt vizibile: afisarea e limitata din CSS (data-step), ca sa nu existe salt la hidratare. */
const visibleCount = (mobile: boolean, step: number) => {
  const g = mobile ? GRID.mobile : GRID.desktop;
  return (g.rows + step * GRID.moreRows) * g.cols;
};

export default function Gallery({ showAll = false }: { showAll?: boolean }) {
  const state = useSyncExternalStore(subscribe, getState, getState);
  const mobile = useSyncExternalStore(
    subscribeMobile,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  );
  const gridRef = useRef<HTMLDivElement>(null);
  const inds = visibleIndices(state.category);
  const allShown = showAll || visibleCount(mobile, state.step) >= inds.length;

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
        <span className="micro">APASĂ PENTRU A VEDEA ↗︎</span>
      </div>
      <div className="pf-grid" id="galleryGrid" data-step={showAll ? "all" : Math.min(state.step, 30)} aria-live="polite" ref={gridRef}>
        {inds.map((index) => {
          const item = items[index];
          return (
            <button
              key={item[0]}
              type="button"
              className="pf-card"
              data-index={index}
              aria-label={"Vezi lucrarea: " + item[1]}
              onClick={(e) => openLightbox(index, e.currentTarget)}
            >
              <img src={"/assets/" + item[0]} loading="lazy" decoding="async" alt={item[3]} />
              <div className="pf-caption">
                <b>{item[1].split(" / ")[0].toUpperCase()}</b>
                <small>{item[2] === "tattoo" ? "HASHA / TATTOO" : "HASHA / PIERCING"}</small>
              </div>
            </button>
          );
        })}
      </div>
      {showAll ? null : (
        <button
          className="load-more"
          type="button"
          id="loadMore"
          hidden={inds.length <= visibleCount(mobile, 0)}
          onClick={() => {
            if (allShown) {
              resetRows();
              requestAnimationFrame(() => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
            } else moreRows();
          }}
        >
          <span>{allShown ? "ARATĂ MAI PUȚINE LUCRĂRI" : "DESCOPERĂ MAI MULTE LUCRĂRI"}</span>
          <span>{allShown ? "↑︎" : "↓︎"}</span>
        </button>
      )}
    </>
  );
}
