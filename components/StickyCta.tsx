"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const WA = "https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20o%20programare%20la%20Hasha%20Tattoo.";

export default function StickyCta() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

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
      <a className="sticky-wa" href={WA} target="_blank" rel="noopener noreferrer" data-cta="sticky_whatsapp">
        PROGRAMEAZĂ-TE PE WHATSAPP
      </a>
      <a className="sticky-call" href="tel:+40766422219" data-cta="sticky_call" aria-label="Sună la +40 766 422 219">
        SUNĂ
      </a>
    </div>
  );
}
