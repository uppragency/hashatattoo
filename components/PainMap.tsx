"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { painById, painLabel, painZones } from "@/lib/pain-zones";
import { waLink } from "@/components/PageParts";

type Shape =
  | { t: "rect"; x: number; y: number; w: number; h: number; r?: number }
  | { t: "ell"; cx: number; cy: number; rx: number; ry: number };
type Place = { id: string; s: Shape };

const R = (x: number, y: number, w: number, h: number, r = 8): Shape => ({ t: "rect", x, y, w, h, r });
const E = (cx: number, cy: number, rx: number, ry: number): Shape => ({ t: "ell", cx, cy, rx, ry });
/** oglindește pe axa verticală de la x=120 */
const mirror = (s: Shape): Shape => (s.t === "rect" ? { ...s, x: 240 - s.x - s.w } : { ...s, cx: 240 - s.cx });
const both = (id: string, s: Shape): Place[] => [
  { id, s },
  { id, s: mirror(s) },
];

const FRONT: Place[] = [
  { id: "cap", s: E(120, 40, 26, 32) },
  { id: "gat", s: R(108, 72, 24, 22, 6) },
  ...both("umar", E(80, 108, 20, 15)),
  { id: "piept", s: R(92, 98, 56, 42, 10) },
  { id: "stern", s: R(114, 102, 12, 36, 4) },
  ...both("coaste", R(80, 142, 20, 48, 8)),
  { id: "abdomen", s: R(102, 142, 36, 52, 10) },
  ...both("subsuoara", E(72, 126, 8, 9)),
  ...both("brat-exterior", R(48, 126, 16, 46, 8)),
  ...both("brat-interior", R(64, 134, 8, 38, 4)),
  ...both("cot", E(60, 182, 10, 10)),
  ...both("antebrat", R(48, 194, 20, 54, 9)),
  ...both("incheietura", R(50, 250, 16, 14, 5)),
  ...both("mana", E(58, 284, 11, 18)),
  ...both("coapsa", R(88, 200, 20, 94, 10)),
  ...both("coapsa-interior", R(108, 204, 11, 86, 5)),
  ...both("genunchi", E(103, 312, 14, 14)),
  ...both("tibie", R(93, 330, 20, 70, 9)),
  ...both("glezna", R(95, 402, 16, 16, 5)),
  ...both("picior", E(101, 440, 14, 15)),
];

const BACK: Place[] = [
  { id: "cap", s: E(120, 40, 26, 32) },
  { id: "ceafa", s: R(108, 72, 24, 22, 6) },
  ...both("umar", E(80, 108, 20, 15)),
  { id: "spate-sus", s: R(90, 98, 60, 42, 10) },
  ...both("omoplat", E(100, 120, 13, 17)),
  { id: "spate-jos", s: R(92, 142, 56, 40, 8) },
  { id: "coloana", s: R(115, 98, 10, 84, 4) },
  { id: "fese", s: R(90, 184, 60, 36, 14) },
  ...both("brat-exterior", R(48, 126, 24, 46, 10)),
  ...both("cot", E(60, 182, 10, 10)),
  ...both("antebrat", R(48, 194, 20, 54, 9)),
  ...both("incheietura", R(50, 250, 16, 14, 5)),
  ...both("mana", E(58, 284, 11, 18)),
  ...both("coapsa", R(88, 222, 30, 72, 12)),
  ...both("genunchi", E(103, 312, 14, 14)),
  ...both("gamba", R(93, 330, 20, 70, 9)),
  ...both("glezna", R(95, 402, 16, 16, 5)),
  ...both("picior", E(101, 440, 14, 15)),
];

const inView = (view: "fata" | "spate") => Array.from(new Set((view === "fata" ? FRONT : BACK).map((p) => p.id)));

export default function PainMap() {
  const [view, setView] = useState<"fata" | "spate">("fata");
  const [sel, setSel] = useState<string>("coaste");
  const places = view === "fata" ? FRONT : BACK;
  const ids = inView(view);
  const zone = painById(sel);
  const current = ids.includes(sel) ? zone : painById(ids[0]);

  const pick = (id: string) => setSel(id);
  const onKey = (e: KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      pick(id);
    }
  };
  const switchView = (v: "fata" | "spate") => {
    setView(v);
    if (!inView(v).includes(sel)) setSel(inView(v)[0]);
  };

  return (
    <div className="pm">
      <div className="pm-figure">
        <div className="pm-tabs" role="tablist" aria-label="Vedere corp">
          {(["fata", "spate"] as const).map((v) => (
            <button key={v} role="tab" aria-selected={view === v} className={view === v ? "is-active" : ""} onClick={() => switchView(v)} type="button">
              {v === "fata" ? "FAȚĂ" : "SPATE"}
            </button>
          ))}
        </div>
        <svg viewBox="0 0 240 470" className="pm-svg" role="group" aria-label={`Harta durerii, vedere ${view === "fata" ? "din față" : "din spate"}`}>
          {places.map((p, i) => {
            const z = painById(p.id);
            const props = {
              className: `pm-zone${sel === p.id ? " is-sel" : ""}`,
              style: { ["--l" as string]: z.level / 10 },
              onClick: () => pick(p.id),
              onKeyDown: (e: KeyboardEvent) => onKey(e, p.id),
              role: "button" as const,
              tabIndex: i === places.findIndex((q) => q.id === p.id) ? 0 : -1,
              "aria-label": `${z.name}, durere orientativă ${z.level} din 10`,
              "aria-pressed": sel === p.id,
            };
            return p.s.t === "rect" ? (
              <rect key={i} {...props} x={p.s.x} y={p.s.y} width={p.s.w} height={p.s.h} rx={p.s.r} />
            ) : (
              <ellipse key={i} {...props} cx={p.s.cx} cy={p.s.cy} rx={p.s.rx} ry={p.s.ry} />
            );
          })}
        </svg>
        <div className="pm-legend" aria-hidden="true">
          <span>MAI SUPORTABIL</span>
          <i />
          <span>MAI INTENS</span>
        </div>
      </div>

      <div className="pm-side">
        <div className="pm-panel" aria-live="polite">
          <small>ZONA SELECTATĂ</small>
          <h3>{current.name}</h3>
          <div className="pm-meter" aria-label={`Durere orientativă ${current.level} din 10`}>
            <div className="pm-bars">
              {Array.from({ length: 10 }, (_, i) => (
                <b key={i} className={i < current.level ? "on" : ""} />
              ))}
            </div>
            <strong>
              {current.level}
              <em>/10</em>
            </strong>
            <span>{painLabel(current.level).toUpperCase()}</span>
          </div>
          <p>{current.feel}</p>
          <p className="pm-tip">
            <b>DE ȘTIUT</b>
            {current.tip}
          </p>
          <a
            className="btn btn-outline"
            href={waLink(`Bună! Mă interesează un tatuaj pe zona: ${current.name}. Aș vrea să aflu mai multe despre durere și durată.`)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
          >
            {"ÎNTREABĂ UN ARTIST "}
            <span>↗</span>
          </a>
        </div>
        <div className="pm-chips" role="list" aria-label="Zonele din această vedere">
          {ids.map((id) => (
            <button key={id} type="button" role="listitem" className={sel === id ? "is-active" : ""} onClick={() => pick(id)}>
              {painById(id).name}
            </button>
          ))}
        </div>
        <p className="pm-note">
          Scara este orientativă și subiectivă. Nu este un instrument medical, iar senzația ta poate fi mai ușoară sau mai intensă. Mai multe în ghidul{" "}
          <Link href="/ghiduri/cum-te-pregatesti-pentru-sedinta-de-tatuaj">cum te pregătești pentru ședința de tatuaj</Link>.
        </p>
      </div>
    </div>
  );
}

export { painZones };
