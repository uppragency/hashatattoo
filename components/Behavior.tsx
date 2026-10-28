"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Animatii reveal la scroll si tracking CTA (dataLayer), identic cu script.js din design. */
export default function Behavior() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.05, rootMargin: "0px 0px -25px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.<HTMLElement>("[data-cta]");
      if (!a) return;
      const params = { cta_type: a.dataset.cta, cta_page: location.pathname };
      if (window.gtag) window.gtag("event", "cta_click", params);
      else {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "cta_click", ...params });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
