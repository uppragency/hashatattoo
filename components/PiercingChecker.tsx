"use client";

import { useState } from "react";
import Link from "next/link";
import { evaluate, piercingZones, zoneById, type Answer, type Verdict } from "@/lib/piercing-checker";
import { waLink } from "@/components/PageParts";

const GROUPS = ["Ureche", "Nas", "Buric", "Față și gură"] as const;
const OPTIONS: { a: Answer; label: string }[] = [
  { a: "da", label: "DA" },
  { a: "nu", label: "NU" },
  { a: "nu-stiu", label: "NU ȘTIU" },
];
const VERDICT: Record<Verdict, { title: string; text: string }> = {
  potrivit: { title: "Pare potrivit", text: "Pe baza răspunsurilor tale, zona pare potrivită. Confirmarea finală o face piercerul, după ce vede anatomia ta." },
  "de-confirmat": { title: "De confirmat la piercer", text: "Ai răspuns „nu știu” la unele întrebări. Piercerul verifică acele puncte direct și îți spune dacă zona este potrivită." },
  "de-discutat": { title: "De discutat înainte", text: "Unele răspunsuri cer o discuție cu piercerul înainte de programare. Nu înseamnă automat că nu se poate, ci că trebuie verificat." },
};

export default function PiercingChecker() {
  const [zoneId, setZoneId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [life, setLife] = useState<Answer | null>(null);
  const [done, setDone] = useState(false);

  const zone = zoneId ? zoneById(zoneId) : null;
  const allAnswered = zone ? zone.checks.every((c) => answers[c.id]) && life !== null : false;
  const res = zone && done ? evaluate(zone, answers) : null;

  const reset = () => {
    setZoneId(null);
    setAnswers({});
    setLife(null);
    setDone(false);
  };
  const pickZone = (id: string) => {
    setZoneId(id);
    setAnswers({});
    setLife(null);
    setDone(false);
  };

  const step = !zone ? 1 : !done ? 2 : 3;

  return (
    <div className="pc">
      <ol className="pc-steps" aria-label="Pașii verificatorului">
        {["ZONA", "ANATOMIA TA", "REZULTAT"].map((l, i) => (
          <li key={l} className={step === i + 1 ? "is-on" : step > i + 1 ? "is-done" : ""}>
            <span>{String(i + 1).padStart(2, "0")}</span> {l}
          </li>
        ))}
      </ol>

      {!zone ? (
        <div className="pc-zones">
          {GROUPS.map((g) => (
            <div key={g} className="pc-group">
              <h3>{g.toUpperCase()}</h3>
              <div>
                {piercingZones
                  .filter((z) => z.group === g)
                  .map((z) => (
                    <button key={z.id} type="button" onClick={() => pickZone(z.id)}>
                      <b>{z.name}</b>
                      <small>{z.price !== null ? `${z.price} lei` : "preț la cerere"}</small>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {zone && !done ? (
        <form
          className="pc-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (allAnswered) setDone(true);
          }}
        >
          <div className="pc-form-head">
            <small>ZONA ALEASĂ</small>
            <h3>{zone.name}</h3>
            <button type="button" className="pc-link" onClick={reset}>
              SCHIMBĂ ZONA
            </button>
          </div>
          {zone.checks.map((c) => (
            <fieldset key={c.id}>
              <legend>{c.q}</legend>
              <div className="pc-options">
                {OPTIONS.map((o) => (
                  <label key={o.a} className={answers[c.id] === o.a ? "is-on" : ""}>
                    <input type="radio" name={c.id} checked={answers[c.id] === o.a} onChange={() => setAnswers((p) => ({ ...p, [c.id]: o.a }))} />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <fieldset>
            <legend>{zone.lifestyle.q}</legend>
            <div className="pc-options">
              {OPTIONS.map((o) => (
                <label key={o.a} className={life === o.a ? "is-on" : ""}>
                  <input type="radio" name="life" checked={life === o.a} onChange={() => setLife(o.a)} />
                  {o.label}
                </label>
              ))}
            </div>
          </fieldset>
          <button className="btn btn-light" type="submit" disabled={!allAnswered}>
            {"VEZI REZULTATUL "}
            <span>↗︎</span>
          </button>
        </form>
      ) : null}

      {zone && res ? (
        <div className="pc-result" aria-live="polite">
          <div className={`pc-verdict is-${res.verdict}`}>
            <small>REZULTAT PENTRU {zone.name.toUpperCase()}</small>
            <h3>{VERDICT[res.verdict].title}</h3>
            <p>{VERDICT[res.verdict].text}</p>
          </div>
          {res.mismatches.length || res.unsure.length ? (
            <ul className="pc-notes">
              {res.mismatches.map((c) => (
                <li key={c.id}>{c.why}</li>
              ))}
              {res.unsure.map((c) => (
                <li key={c.id}>Piercerul verifică: {c.q.charAt(0).toLowerCase() + c.q.slice(1)}</li>
              ))}
            </ul>
          ) : null}
          <dl className="pc-facts">
            <div>
              <dt>PREȚ</dt>
              <dd>{zone.price !== null ? `${zone.price} lei` : "La cerere, scrie-ne pe WhatsApp"}</dd>
            </div>
            <div>
              <dt>VINDECARE</dt>
              <dd>{zone.heal}</dd>
            </div>
            <div>
              <dt>SENZAȚIE</dt>
              <dd>{zone.feel ?? "Diferă de la o persoană la alta. Piercerul îți explică la ce să te aștepți."}</dd>
            </div>
          </dl>
          {life === "da" ? (
            <p className="pc-tip">
              <b>PENTRU STILUL TĂU DE VIAȚĂ</b>
              {zone.lifestyle.tip}
            </p>
          ) : null}
          <div className="pc-actions">
            <a
              className="btn btn-light"
              href={waLink(`Bună! Mă interesează un piercing: ${zone.name}. Rezultatul verificatorului de anatomie: ${VERDICT[res.verdict].title.toLowerCase()}. Aș vrea să programez o consultație.`)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
            >
              {"PROGRAMEAZĂ O CONSULTAȚIE "}
              <span>↗︎</span>
            </a>
            <button type="button" className="btn btn-outline" onClick={reset}>
              {"ALEGE ALTĂ ZONĂ "}
              <span>↺︎</span>
            </button>
          </div>
          <p className="pc-note">
            Rezultatul este orientativ și nu înlocuiește evaluarea piercerului sau sfatul unui medic. Detalii despre îngrijire în ghidul <Link href="/ghiduri/cum-ingrijesti-un-piercing-nou">cum îngrijești un piercing nou</Link>.
          </p>
        </div>
      ) : null}
    </div>
  );
}
