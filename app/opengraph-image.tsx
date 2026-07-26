import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const alt = "João Victor — Design, código e inteligência artificial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const hero = await readFile(path.join(process.cwd(), "public", "images", "hero", "human-ai-hands.png"));
  const heroData = `data:image/png;base64,${hero.toString("base64")}`;

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", overflow: "hidden", background: "#050505", color: "#f5f5f3", fontFamily: "Arial, sans-serif" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" src={heroData} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .72 }} />
      <div style={{ display: "flex", position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,.95) 0%, rgba(0,0,0,.72) 46%, rgba(0,0,0,.15) 100%)" }} />
      <div style={{ display: "flex", width: "100%", padding: "62px 70px", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 20, color: "#aaa" }}>
          <span style={{ color: "#fff", fontWeight: 700 }}>joao-victor</span><span>/</span><span>workspace</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 74, fontWeight: 700, letterSpacing: "-4px", lineHeight: .95 }}>João Victor</div>
          <div style={{ display: "flex", maxWidth: 680, fontSize: 34, lineHeight: 1.2 }}>Design, código e IA aplicada para construir produtos digitais.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: 17, color: "#aaa", letterSpacing: "2px" }}>
          <span>DESIGN × CODE × AI</span><span>RIO DE JANEIRO · 2026</span>
        </div>
      </div>
    </div>,
    size,
  );
}
