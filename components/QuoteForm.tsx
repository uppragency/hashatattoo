"use client";

import type { FormEvent } from "react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export default function QuoteForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const value = (id: string) => (form.elements.namedItem(id) as HTMLInputElement | null)?.value ?? "";
    const service = value("quoteService");
    const zone = value("quotePlacement").trim();
    const idea = value("quoteIdea").trim();
    const message = `Bună! Aș dori o estimare de preț la Hasha Tattoo.\nServiciu: ${service}\nZona: ${zone || "de stabilit"}\nIdeea mea: ${idea}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="quote-form reveal" id="quoteForm" onSubmit={onSubmit}>
      <span className="micro">CERE O ESTIMARE PERSONALIZATĂ</span>
      <label htmlFor="quoteService">SERVICIU</label>
      <select id="quoteService" required>
        <option value="">Alege un serviciu</option>
        <option value="tatuaj">Tatuaj</option>
        <option value="piercing">Piercing</option>
        <option value="consultație">Consultație</option>
      </select>
      <label htmlFor="quotePlacement">ZONA CORPULUI (OPȚIONAL)</label>
      <input id="quotePlacement" placeholder="Ex.: antebraț / ureche" maxLength={80} />
      <label htmlFor="quoteIdea">DESCRIE-NE IDEEA TA</label>
      <textarea id="quoteIdea" rows={5} placeholder="Ce îți dorești? Dimensiune, stil, referințe..." required maxLength={600} />
      <button type="submit" className="btn btn-light">
        TRIMITE PE WHATSAPP <span>↗</span>
      </button>
      <p className="quote-note">Butonul deschide WhatsApp cu mesajul pregătit. Nu trimitem date către un server.</p>
      <p className="quote-note">
        Preferi să vorbim direct?{" "}
        <a className="inline-link" href="tel:+40766422219" data-cta="call">
          Sună la +40 766 422 219
        </a>
        , luni – vineri, 12:00 – 20:00.
      </p>
    </form>
  );
}
