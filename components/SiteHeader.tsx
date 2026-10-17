/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const WA = "https://wa.me/40766422219?text=Bun%C4%83%21%20A%C8%99%20dori%20o%20programare%20la%20Hasha%20Tattoo.";

export default function SiteHeader() {
  const pathname = usePathname();
  const [fixed, setFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef(false);

  const setMenu = useCallback((next: boolean) => {
    openRef.current = next;
    setOpen(next);
    document.body.classList.toggle("is-locked", next);
    // focus dupa ce `inert` a fost scos din DOM
    requestAnimationFrame(() => {
      if (next) menuRef.current?.querySelector("a")?.focus();
      else toggleRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setFixed(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openRef.current && !document.getElementById("lightbox")?.classList.contains("is-open")) setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setMenu]);

  const closeMenu = () => setMenu(false);

  return (
    <>
      <header className={fixed ? "site-header is-fixed" : "site-header"} id="header">
        <Link className="brand" href="/" aria-label="Hasha Tattoo, pagina principală">
          <img src="/assets/logo.png" alt="Hasha Tattoo" width={122} height={84} />
          <span>BUCUREȘTI · SECTOR 4</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigare principală">
          <Link href="/tatuaje" aria-current={pathname === "/tatuaje" ? "page" : undefined}>TATUAJE</Link>
          <Link href="/piercing" aria-current={pathname === "/piercing" ? "page" : undefined}>PIERCING</Link>
          <Link href="/portofoliu" aria-current={pathname === "/portofoliu" ? "page" : undefined}>PORTOFOLIU</Link>
          <Link href="/preturi" aria-current={pathname === "/preturi" ? "page" : undefined}>PREȚURI</Link>
          <Link href="/despre-noi" aria-current={pathname === "/despre-noi" ? "page" : undefined}>
            DESPRE NOI
          </Link>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>CONTACT</Link>
        </nav>
        <div className="header-actions">
          <a className="header-book" href={WA} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
            PROGRAMEAZĂ-TE <span>↗︎</span>
          </a>
          <button
            className="menu-toggle"
            id="menuToggle"
            ref={toggleRef}
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
            aria-controls="siteMenu"
            onClick={() => setMenu(!openRef.current)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <nav className={open ? "overlay-menu is-open" : "overlay-menu"} id="siteMenu" ref={menuRef} aria-label="Meniu extins" inert={!open}>
        <div className="overlay-menu-inner">
          <Link href="/" onClick={closeMenu}>
            ACASĂ <small>01</small>
          </Link>
          <Link href="/tatuaje" onClick={closeMenu}>
            TATUAJE <small>02</small>
          </Link>
          <Link href="/piercing" onClick={closeMenu}>
            PIERCING <small>03</small>
          </Link>
          <Link href="/portofoliu" onClick={closeMenu}>
            PORTOFOLIU <small>04</small>
          </Link>
          <Link href="/preturi" onClick={closeMenu}>
            PREȚURI <small>05</small>
          </Link>
          <Link href="/despre-noi" onClick={closeMenu}>
            DESPRE NOI <small>06</small>
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            CONTACT <small>07</small>
          </Link>
          <span>HASHA TATTOO — BUCUREȘTI, SECTOR 4</span>
        </div>
      </nav>
    </>
  );
}
