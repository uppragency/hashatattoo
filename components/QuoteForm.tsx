"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { contactFor, isPiercingPath } from "@/lib/site";

export default function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const pathname = usePathname();
  const [svc, setSvc] = useState(defaultService);
  const c = contactFor(svc === "piercing" || (svc === "" && isPiercingPath(pathname)));
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const value = (id: string) => (form.elements.namedItem(id) as HTMLInputElement | null)?.value ?? "";
    const service = value("quoteService");
    const zone = value("quotePlacement").trim();
    const idea = value("quoteIdea").trim();
    const message = `Bună! Aș dori o estimare de preț la Hasha Tattoo.\nServiciu: ${service}\nZona: ${zone || "de stabilit"}\nIdeea mea: ${idea}`;
    const wa = c.wa(message);
    const website = value("quoteWebsite");
    fetch("/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service, placement: zone, idea, website }),
      keepalive: true,
    }).catch(() => {});
    window.open(wa, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="quote-form reveal" id="quoteForm" onSubmit={onSubmit}>
      <span className="micro">CERE O ESTIMARE PERSONALIZATĂ</span>
      <label htmlFor="quoteService">SERVICIU</label>
      <select id="quoteService" required defaultValue={defaultService} onChange={(e) => setSvc(e.target.value)}>
        <option value="">Alege un serviciu</option>
        <option value="tatuaj">Tatuaj</option>
        <option value="piercing">Piercing</option>
        <option value="consultație">Consultație</option>
      </select>
      <label htmlFor="quotePlacement">ZONA CORPULUI (OPȚIONAL)</label>
      <input id="quotePlacement" placeholder="Ex.: antebraț / ureche" maxLength={80} />
      <label htmlFor="quoteIdea">DESCRIE-NE IDEEA TA</label>
      <textarea id="quoteIdea" rows={5} placeholder="Ce îți dorești? Dimensiune, stil, referințe..." required maxLength={600} />
      <input id="quoteWebsite" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      <button type="submit" className="btn btn-light">
        TRIMITE PE WHATSAPP <span>↗︎</span>
      </button>
      <p className="quote-note">Butonul deschide WhatsApp cu mesajul pregătit. Cererea (serviciu, zonă, descriere) este salvată și pentru echipa studioului, ca să te putem contacta. Detalii în politica de confidențialitate.</p>
      <p className="quote-note">
        Preferi să vorbim direct?{" "}
        <a className="inline-link" href={c.tel} data-cta="call">
          Sună la {c.display}
        </a>
        , luni – vineri, 12:00 – 20:00.
      </p>
    </form>
  );
}
