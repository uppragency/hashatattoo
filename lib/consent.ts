export type Consent = { functional: boolean; analytics: boolean; marketing: boolean };
export type ConsentState = {
  /** true dupa ce s-a citit localStorage (evita flash-ul bannerului la hidratare) */
  ready: boolean;
  /** utilizatorul a ales deja */
  decided: boolean;
  /** bannerul/setarile sunt deschise */
  open: boolean;
  consent: Consent;
};

const KEY = "hasha_consent_v1";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const NONE: Consent = { functional: false, analytics: false, marketing: false };

let state: ConsentState = { ready: false, decided: false, open: false, consent: NONE };
const listeners = new Set<() => void>();

function set(patch: Partial<ConsentState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
export const getState = () => state;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function announce(consent: Consent) {
  window.dataLayer = window.dataLayer || [];
  window.gtag?.("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    functionality_storage: consent.functional ? "granted" : "denied",
    personalization_storage: consent.functional ? "granted" : "denied",
  });
  window.dataLayer.push({
    event: "cookie_consent_update",
    consent_functional: consent.functional,
    consent_analytics: consent.analytics,
    consent_marketing: consent.marketing,
  });
}

/** Citeste alegerea salvata. Se apeleaza o singura data, din client. */
export function loadConsent() {
  if (state.ready) return;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { consent: Consent; ts: number };
      if (parsed?.consent && Date.now() - parsed.ts < MAX_AGE_MS) {
        set({ ready: true, decided: true, consent: { ...NONE, ...parsed.consent } });
        announce(state.consent);
        return;
      }
    }
  } catch {
    /* localStorage indisponibil: tratat ca "nedecis" */
  }
  set({ ready: true });
}

export function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ consent, ts: Date.now() }));
  } catch {
    /* ignorat */
  }
  set({ decided: true, open: false, consent });
  announce(consent);
}

export const acceptAll = () => saveConsent({ functional: true, analytics: true, marketing: true });
export const rejectAll = () => saveConsent(NONE);
export const allowFunctional = () => saveConsent({ ...state.consent, functional: true });
export const openConsentSettings = () => set({ open: true });
export const closeConsentSettings = () => set({ open: false });
