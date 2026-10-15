import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const COOKIE = "hasha_admin";
const TTL = 60 * 60 * 12;

const secret = () => process.env.ADMIN_SESSION_SECRET ?? "";
const sign = (v: string) => createHmac("sha256", secret()).update(v).digest("hex");

export function safeEqual(a: string, b: string) {
  const x = Buffer.from(createHmac("sha256", "k").update(a).digest("hex"));
  const y = Buffer.from(createHmac("sha256", "k").update(b).digest("hex"));
  return timingSafeEqual(x, y);
}

export function makeSession() {
  const exp = String(Math.floor(Date.now() / 1000) + TTL);
  return `${exp}.${sign(exp)}`;
}

export async function isAdmin() {
  if (!secret()) return false;
  const v = (await cookies()).get(COOKIE)?.value;
  if (!v) return false;
  const [exp, sig] = v.split(".");
  if (!exp || !sig || Number(exp) < Date.now() / 1000) return false;
  const good = sign(exp);
  return sig.length === good.length && timingSafeEqual(Buffer.from(sig), Buffer.from(good));
}

export const SESSION_TTL = TTL;
