const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;

/** Domeniul final. Setează NEXT_PUBLIC_SITE_URL în Vercel când domeniul definitiv este conectat. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelProd ? `https://${vercelProd}` : "http://localhost:3000")
).replace(/\/$/, "");

export const WHATSAPP_NUMBER = "40766422219";

/** Numar separat pentru paginile de piercing (WhatsApp si apel). */
export const PIERCING_NUMBER = "40752259040";

const WA_DEFAULT_TEXT = "Bună! Aș dori o programare la Hasha Tattoo.";

/** Paginile de piercing: /piercing, /piercing-*, /verificator-piercing. */
export const isPiercingPath = (pathname: string | null | undefined) =>
  !!pathname && (pathname === "/piercing" || pathname.startsWith("/piercing-") || pathname === "/verificator-piercing");

export const contactFor = (piercing: boolean) => {
  const n = piercing ? PIERCING_NUMBER : WHATSAPP_NUMBER;
  return {
    number: n,
    e164: `+${n}`,
    display: piercing ? "+40 752 259 040" : "+40 766 422 219",
    tel: `tel:+${n}`,
    wa: (text: string = WA_DEFAULT_TEXT) => `https://wa.me/${n}?text=${encodeURIComponent(text)}`,
  };
};

/** Profiluri oficiale, folosite in schema.org (sameAs). */
export const SOCIAL_LINKS = [
  "https://www.instagram.com/hasha_tattoo",
  "https://www.facebook.com/HashaTattoo",
  "https://www.google.com/maps?cid=8814312455281840630",
];

/** Profilul Google Business al studioului. */
export const GOOGLE_BUSINESS_URL = "https://www.google.com/maps?cid=8814312455281840630";
