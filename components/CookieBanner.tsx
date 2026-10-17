"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { acceptAll, closeConsentSettings, getState, loadConsent, rejectAll, saveConsent, subscribe, type Consent } from "@/lib/consent";

const OPTIONS: { key: keyof Consent | "necessary"; label: string; text: string }[] = [
  { key: "necessary", label: "Necesare", text: "Funcționarea site-ului și memorarea alegerii tale. Mereu active." },
  { key: "functional", label: "Funcționale", text: "Harta Google din pagina principală." },
  { key: "analytics", label: "Analitice", text: "Statistici despre folosirea site-ului. Momentan neactive." },
  { key: "marketing", label: "Marketing", text: "Măsurarea reclamelor. Momentan neactive." },
];

export default function CookieBanner() {
  const state = useSyncExternalStore(subscribe, getState, getState);
  const [details, setDetails] = useState(false);
  const [draft, setDraft] = useState<Consent>(state.consent);

  useEffect(() => loadConsent(), []);
  useEffect(() => {
    if (state.open) {
      setDraft(state.consent);
      setDetails(true);
    }
  }, [state.open, state.consent]);

  const visible = state.ready && (!state.decided || state.open);
  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-modal="false" aria-labelledby="cookieTitle">
      <span className="micro" id="cookieTitle">
        COOKIES
      </span>
      <p className="cookie-text">
        Folosim cookie-uri necesare pentru funcționarea site-ului. Cu acordul tău, încărcăm și servicii terțe, precum harta Google.{" "}
        <Link href="/politica-cookies">Politica cookies</Link>
      </p>
      {details && (
        <ul className="cookie-options">
          {OPTIONS.map((o) => (
            <li key={o.key}>
              <label>
                <input
                  type="checkbox"
                  checked={o.key === "necessary" ? true : draft[o.key as keyof Consent]}
                  disabled={o.key === "necessary"}
                  onChange={(e) => o.key !== "necessary" && setDraft({ ...draft, [o.key]: e.target.checked })}
                />
                <span className="cookie-switch" aria-hidden="true" />
                <span>
                  <b>{o.label}</b>
                  <small>{o.text}</small>
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}
      <div className="cookie-actions">
        <button type="button" onClick={rejectAll}>
          REFUZ TOATE
        </button>
        {details ? (
          <button type="button" onClick={() => saveConsent(draft)}>
            SALVEAZĂ ALEGEREA
          </button>
        ) : (
          <button type="button" onClick={() => setDetails(true)}>
            PERSONALIZEAZĂ
          </button>
        )}
        <button type="button" onClick={acceptAll}>
          ACCEPT TOATE
        </button>
      </div>
      {state.open && state.decided && (
        <button type="button" className="cookie-close" onClick={closeConsentSettings} aria-label="Închide setările">
          ✕︎
        </button>
      )}
    </div>
  );
}
