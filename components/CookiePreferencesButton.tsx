"use client";

import { openConsentSettings } from "@/lib/consent";

export default function CookiePreferencesButton() {
  return (
    <button type="button" className="btn btn-outline" onClick={openConsentSettings}>
      MODIFICĂ PREFERINȚELE <span>↗</span>
    </button>
  );
}
