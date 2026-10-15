export type Block =
  | string
  | { h3: string }
  | { ul: string[] }
  | { ol: string[] }
  | { note: string; title?: string }
  | { table: { head: string[]; rows: string[][] } };

export type Section = { id: string; h2: string; blocks: Block[] };

export type GuideContent = {
  /** paragrafe de introducere, înainte de cuprins */
  intro: string[];
  sections: Section[];
  faq: { q: string; a: string }[];
  /** text pentru apelul final la acțiune */
  cta: { title: [string, string]; text: string; wa: string };
  /** slug-uri ale ghidurilor înrudite */
  related: string[];
};

/** Numără cuvintele din tot textul vizibil al unui ghid. */
export function countWords(c: GuideContent): number {
  const parts: string[] = [...c.intro];
  const add = (b: Block) => {
    if (typeof b === "string") parts.push(b);
    else if ("h3" in b) parts.push(b.h3);
    else if ("ul" in b) parts.push(...b.ul);
    else if ("ol" in b) parts.push(...b.ol);
    else if ("note" in b) parts.push((b.title ?? "") + " " + b.note);
    else parts.push(...b.table.head, ...b.table.rows.flat());
  };
  for (const s of c.sections) {
    parts.push(s.h2);
    s.blocks.forEach(add);
  }
  for (const f of c.faq) parts.push(f.q, f.a);
  return parts
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}
