# Hasha Tattoo

Site Next.js (App Router) al studioului Hasha Tattoo, implementare 1:1 a designului `hasha-v2`.

- `app/globals.css`: stilurile originale, neschimbate
- `components/sections/*`: markup convertit din HTML original (home, despre noi, prețuri, footer)
- `components/*`: header/meniu, galerie + lightbox, formular de estimare (WhatsApp), reveal la scroll, tracking `dataLayer`
- `public/assets`: imaginile originale

## Domeniu final

Setează `NEXT_PUBLIC_SITE_URL` (ex. `https://domeniul-final.ro`) în Vercel pentru canonical, Open Graph, JSON-LD, sitemap și robots.
Fără această variabilă se folosește automat domeniul de producție Vercel.

## Dezvoltare

```
npm install
npm run dev
npm run build
```
