import type { Metadata } from "next";
import { isAdmin } from "@/lib/admin-auth";
import { rpc } from "@/lib/supabase-rpc";
import { logout, updateRequest } from "./actions";
import LoginForm from "./LoginForm";

export const metadata: Metadata = { title: "Panou intern", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

type Req = { id: string; created_at: string; service: string; placement: string | null; idea: string; status: string; note: string | null };
const STATUSES = ["nou", "contactat", "programat", "finalizat", "anulat"];
const fmt = new Intl.DateTimeFormat("ro-RO", { dateStyle: "short", timeStyle: "short", timeZone: "Europe/Bucharest" });

export default async function Page({ searchParams }: { searchParams: Promise<{ s?: string }> }) {
  if (!(await isAdmin())) {
    return (
      <main className="adm">
        <h1>Panou intern</h1>
        <LoginForm />
      </main>
    );
  }
  const { s } = await searchParams;
  let rows: Req[] = [];
  let err = false;
  try {
    rows = await rpc<Req[]>("admin_list_requests", { p_token: process.env.SUPABASE_ADMIN_TOKEN });
  } catch {
    err = true;
  }
  const counts = Object.fromEntries(STATUSES.map((x) => [x, rows.filter((r) => r.status === x).length]));
  const shown = s && STATUSES.includes(s) ? rows.filter((r) => r.status === s) : rows;

  return (
    <main className="adm">
      <header>
        <h1>Cereri de estimare</h1>
        <form action={logout}>
          <button className="adm-link">Ieși</button>
        </form>
      </header>
      <nav>
        <a href="/admin" aria-current={!s}>Toate ({rows.length})</a>
        {STATUSES.map((x) => (
          <a key={x} href={`/admin?s=${x}`} aria-current={s === x}>
            {x} ({counts[x]})
          </a>
        ))}
      </nav>
      {err ? <p role="alert">Nu pot citi cererile. Verifică configurarea.</p> : null}
      {!err && !shown.length ? <p>Nicio cerere.</p> : null}
      <ul>
        {shown.map((r) => (
          <li key={r.id}>
            <div className="adm-meta">
              <b>{r.service}</b>
              <span>{r.placement || "zonă nespecificată"}</span>
              <time>{fmt.format(new Date(r.created_at))}</time>
            </div>
            <p>{r.idea}</p>
            <form action={updateRequest}>
              <input type="hidden" name="id" value={r.id} />
              <select name="status" defaultValue={r.status}>
                {STATUSES.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
              <input name="note" defaultValue={r.note ?? ""} placeholder="Notiță internă" maxLength={1000} />
              <button className="adm-link">Salvează</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
