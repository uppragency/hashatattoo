"use client";

import { useEffect, useSyncExternalStore } from "react";
import { allowFunctional, getState, loadConsent, subscribe } from "@/lib/consent";

const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Bulevardul+M%C4%83r%C4%83%C8%99e%C8%99ti+80+Bucure%C8%99ti";
const EMBED = "https://www.google.com/maps?q=Bulevardul+M%C4%83r%C4%83%C8%99e%C8%99ti+80+Bucure%C8%99ti&output=embed";

/** Harta Google se incarca doar cu consimtamant (Google seteaza cookie-uri). */
export default function ConsentMap() {
  const state = useSyncExternalStore(subscribe, getState, getState);
  useEffect(() => loadConsent(), []);

  return (
    <div className="contact-map reveal">
      {state.consent.functional ? (
        <iframe
          title="Harta Hasha Tattoo, Bulevardul Mărășești 80, București"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={EMBED}
        />
      ) : (
        <div className="map-consent">
          <span className="micro">HARTĂ GOOGLE</span>
          <p>Harta este furnizată de Google și folosește cookie-uri. O afișăm doar cu acordul tău.</p>
          <button type="button" className="btn btn-outline" onClick={allowFunctional}>
            AFIȘEAZĂ HARTA <span>↗︎</span>
          </button>
          <a className="text-arrow" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
            DESCHIDE ÎN GOOGLE MAPS <span>↗︎</span>
          </a>
        </div>
      )}
    </div>
  );
}
