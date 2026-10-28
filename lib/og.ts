import { createHash } from "crypto";

const SALT = "hasha-og-v1";

const sign = (t: string, k: string, i: string) =>
  createHash("sha256").update(`${SALT}|${t}|${k}|${i}`).digest("hex").slice(0, 16);

const plain = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export function ogKicker(path: string): string {
  if (path === "/") return "TATUAJE ȘI PIERCING · BUCUREȘTI";
  if (path.startsWith("/ghiduri")) return "GHID";
  if (path.startsWith("/zone")) return "ZONĂ · SECTOR 4";
  if (path.startsWith("/stiluri")) return "STILURI DE TATUAJ";
  if (path.startsWith("/piercing")) return "PIERCING · BUCUREȘTI";
  if (path.startsWith("/tatuaj") || path.startsWith("/cover-up") || path.startsWith("/corectare")) return "TATUAJE · BUCUREȘTI";
  return "HASHA TATTOO";
}

/** URL semnat catre /og: doar combinatiile generate de site sunt acceptate. */
export function ogUrl(title: string, path: string, image: string): string {
  const t = plain(title.replace(/\s*\|\s*Hasha Tattoo\s*$/i, "")).slice(0, 90);
  const k = plain(ogKicker(path));
  const i = image.replace(/^\/assets\//, "");
  const q = new URLSearchParams({ t, k, i, s: sign(t, k, i) });
  return `/og?${q.toString()}`;
}

export const ogValid = (t: string, k: string, i: string, s: string) =>
  /^[a-z0-9-]+\.(webp|png|jpg)$/i.test(i) && t.length <= 90 && s === sign(t, k, i);
