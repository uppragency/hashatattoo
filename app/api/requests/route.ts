import { NextResponse } from "next/server";
import { rpc } from "@/lib/supabase-rpc";

const hits = new Map<string, number[]>();

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "x";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 5) return NextResponse.json({ ok: false }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (typeof b.website === "string" && b.website) return NextResponse.json({ ok: true });
  const service = String(b.service ?? "").trim().slice(0, 40);
  const placement = String(b.placement ?? "").trim().slice(0, 80);
  const idea = String(b.idea ?? "").trim().slice(0, 600);
  if (!["tatuaj", "piercing", "consultație"].includes(service) || !idea) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  try {
    await rpc("submit_request", { p_service: service, p_placement: placement, p_idea: idea });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
