"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { contactFor, isPiercingPath } from "@/lib/site";

export default function StickyCta() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);
  const c = contactFor(isPiercingPath(pathname));

  useEffect(() => {
    const toggle = () => {
      const hero = document.querySelector<HTMLElement>(".hero, .subhero");
      setShown(window.scrollY > (hero ? hero.offsetHeight * 0.6 : 300));
    };
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, [pathname]);

  return (
    <div className={shown ? "sticky-cta is-shown" : "sticky-cta"} id="stickyCta">
      <a className="sticky-wa" href={c.wa()} target="_blank" rel="noopener noreferrer" data-cta="sticky_whatsapp">
        PROGRAMEAZĂ-TE PE WHATSAPP
      </a>
      <a className="sticky-call" href={c.tel} data-cta="sticky_call" aria-label={`Sună la ${c.display}`}>
        SUNĂ
      </a>
    </div>
  );
}
