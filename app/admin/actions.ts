"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { COOKIE, SESSION_TTL, isAdmin, makeSession, safeEqual } from "@/lib/admin-auth";
import { rpc } from "@/lib/supabase-rpc";

export async function login(_: unknown, fd: FormData) {
  const pw = String(fd.get("password") ?? "");
  const real = process.env.ADMIN_PASSWORD ?? "";
  await new Promise((r) => setTimeout(r, 600));
  if (!real || !safeEqual(pw, real)) return { error: "Parolă greșită." };
  (await cookies()).set(COOKIE, makeSession(), { httpOnly: true, secure: true, sameSite: "strict", path: "/admin", maxAge: SESSION_TTL });
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete({ name: COOKIE, path: "/admin" });
  redirect("/admin");
}

export async function updateRequest(fd: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const status = String(fd.get("status") ?? "");
  if (!["nou", "contactat", "programat", "finalizat", "anulat"].includes(status)) return;
  await rpc("admin_update_request", {
    p_token: process.env.SUPABASE_ADMIN_TOKEN,
    p_id: String(fd.get("id")),
    p_status: status,
    p_note: String(fd.get("note") ?? "").slice(0, 1000),
  });
  revalidatePath("/admin");
}
