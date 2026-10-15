/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { items, visibleIndices } from "@/lib/portfolio";
import { closeLightbox, getState, shift, subscribe } from "@/lib/gallery-store";

export default function Lightbox() {
  const state = useSyncExternalStore(subscribe, getState, getState);
  const closeRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const wasOpen = useRef(false);

  const inds = visibleIndices(state.category);
  const item = state.open ? items[inds[state.selected]] : null;

  // focus + scroll lock
  useEffect(() => {
    if (state.open && !wasOpen.current) {
      document.body.classList.add("is-locked");
      closeRef.current?.focus();
    } else if (!state.open && wasOpen.current) {
      document.body.classList.remove("is-locked");
      getState().focusBack?.focus();
    }
    wasOpen.current = state.open;
  }, [state.open]);

  // preload neighbours
  useEffect(() => {
    if (!state.open) return;
    const list = visibleIndices(state.category);
    [1, -1].forEach((d) => {
      const n = items[list[(state.selected + d + list.length) % list.length]];
      if (n) new Image().src = "/assets/" + n[0];
    });
  }, [state.open, state.selected, state.category]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const s = getState();
      if (!s.open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") shift(-1);
      if (e.key === "ArrowRight") shift(1);
      if (e.key === "Tab") {
        const allowed = [closeRef.current, prevRef.current, nextRef.current];
        const i = allowed.indexOf(document.activeElement as HTMLButtonElement | null);
        if (e.shiftKey && i === 0) {
          e.preventDefault();
          allowed[2]?.focus();
        } else if (!e.shiftKey && i === 2) {
          e.preventDefault();
          allowed[0]?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className={state.open ? "lightbox is-open" : "lightbox"}
      id="lightbox"
      role="dialog"
      aria-label="Vizualizare portofoliu"
      aria-modal="true"
      aria-hidden={!state.open}
      inert={!state.open}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLightbox();
      }}
      onTouchStart={(e) => {
        touchX.current = e.changedTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) shift(dx < 0 ? 1 : -1);
      }}
    >
      <button className="lightbox-close" id="lightboxClose" aria-label="Închide fotografia" ref={closeRef} onClick={closeLightbox}>
        ✕
      </button>
      <div className="lightbox-wrap">
        <img id="lightboxImage" src={item ? "/assets/" + item[0] : undefined} alt={item ? item[3] : ""} />
        <div className="lightbox-meta">
          <span id="lightboxTitle">{item ? item[1].toUpperCase() : ""}</span>
          <span id="lightboxCount">{item ? `${state.selected + 1} / ${inds.length}` : ""}</span>
        </div>
      </div>
      <div className="lightbox-navigation">
        <button id="lightboxPrev" aria-label="Fotografia precedentă" ref={prevRef} onClick={() => shift(-1)}>
          ←
        </button>
        <button id="lightboxNext" aria-label="Fotografia următoare" ref={nextRef} onClick={() => shift(1)}>
          →
        </button>
      </div>
    </div>
  );
}
