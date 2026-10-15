"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "cover" | "reveal";
const COVER_MS = 560;
const REVEAL_MS = 700;
const FAILSAFE_MS = 4000;

/** Cortina animata la schimbarea paginii: acopera, navigheaza, descopera. */
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const waiting = useRef(false);
  const timers = useRef<number[]>([]);

  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
  };
  const reveal = () => {
    waiting.current = false;
    setPhase("reveal");
    later(() => setPhase("idle"), REVEAL_MS);
  };

  // pagina noua a fost afisata
  useEffect(() => {
    if (!waiting.current) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(reveal));
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onClick = (e: MouseEvent) => {
      if (reduce.matches || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname || waiting.current) return;
      e.preventDefault(); // Link nu mai navigheaza singur, dar onClick-ul lui (ex. inchiderea meniului) ruleaza
      waiting.current = true;
      setPhase("cover");
      later(() => router.push(url.pathname + url.search + url.hash), COVER_MS);
      later(() => {
        if (waiting.current) reveal();
      }, FAILSAFE_MS);
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      timers.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div className={phase === "idle" ? "page-transition" : `page-transition is-${phase}`} aria-hidden="true">
      <img src="/assets/logo.png" alt="" width={122} height={84} />
      <i />
    </div>
  );
}
