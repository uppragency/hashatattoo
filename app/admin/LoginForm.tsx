"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, null as { error: string } | null);
  return (
    <form action={action} className="adm-login">
      <label htmlFor="pw">PAROLĂ</label>
      <input id="pw" name="password" type="password" required autoFocus autoComplete="current-password" />
      {state?.error ? <p role="alert">{state.error}</p> : null}
      <button className="btn btn-light" disabled={pending}>
        {pending ? "SE VERIFICĂ..." : "INTRĂ"} <span>↗︎</span>
      </button>
    </form>
  );
}
