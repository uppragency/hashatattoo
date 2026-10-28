import { ImageResponse } from "next/og";
import sharp from "sharp";
import { readFile } from "fs/promises";
import path from "path";
import { ogValid } from "@/lib/og";

export const runtime = "nodejs";

const font = async (n: string) => {
  const b = await readFile(path.join(process.cwd(), "app/og/fonts", n));
  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer;
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const t = url.searchParams.get("t") ?? "";
  const k = url.searchParams.get("k") ?? "";
  const i = url.searchParams.get("i") ?? "";
  const s = url.searchParams.get("s") ?? "";
  if (!t || !ogValid(t, k, i, s)) return new Response("Not found", { status: 404 });

  const [cg, cgx, dm, dmx] = await Promise.all([
    font("cg-400.woff"),
    font("cg-400-ext.woff"),
    font("dm-500.woff"),
    font("dm-500-ext.woff"),
  ]);

  let photo: string | null = null;
  try {
    const res = await fetch(`${url.origin}/assets/${i}`);
    if (res.ok) {
      const jpg = await sharp(Buffer.from(await res.arrayBuffer()))
        .resize(500, 630, { fit: "cover", position: "attention" })
        .jpeg({ quality: 82 })
        .toBuffer();
      photo = `data:image/jpeg;base64,${jpg.toString("base64")}`;
    }
  } catch {
    photo = null;
  }

  const size = t.length > 52 ? 54 : t.length > 36 ? 64 : 76;

  const png = new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", background: "#0c0c0c", color: "#f4f1ea", fontFamily: "Cormorant, CormorantX" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: photo ? 700 : 1200, padding: "64px 56px 56px 72px" }}>
          <div style={{ display: "flex", fontFamily: "DM, DMX", fontSize: 20, letterSpacing: 5, color: "#9a958b" }}>{k}</div>
          <div style={{ display: "flex", fontSize: size, lineHeight: 1.06, letterSpacing: -1.5, fontWeight: 400 }}>{t}</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "DM, DMX", fontSize: 20, letterSpacing: 3, whiteSpace: "nowrap", color: "#9a958b" }}>
            <div style={{ display: "flex", color: "#f4f1ea" }}>HASHA TATTOO</div>
            <div style={{ display: "flex" }}>MARASESTI 80 · SECTOR 4</div>
          </div>
        </div>
        {photo ? (
          <div style={{ display: "flex", position: "relative", width: 500, height: 630 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} width={500} height={630} style={{ objectFit: "cover" }} alt="" />
            <div style={{ position: "absolute", left: 0, top: 0, width: 160, height: 630, display: "flex", background: "linear-gradient(90deg, #0c0c0c, rgba(12,12,12,0))" }} />
          </div>
        ) : null}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Cormorant", data: cg, weight: 400, style: "normal" },
        { name: "CormorantX", data: cgx, weight: 400, style: "normal" },
        { name: "DM", data: dm, weight: 500, style: "normal" },
        { name: "DMX", data: dmx, weight: 500, style: "normal" },
      ],
    },
  );
  const jpg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(jpg), {
    headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable" },
  });
}
