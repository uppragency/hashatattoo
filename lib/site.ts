const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;

/** Domeniul final. Setează NEXT_PUBLIC_SITE_URL în Vercel când domeniul definitiv este conectat. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelProd ? `https://${vercelProd}` : "http://localhost:3000")
).replace(/\/$/, "");

export const WHATSAPP_NUMBER = "40766422219";
