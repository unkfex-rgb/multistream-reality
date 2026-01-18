"use client";
import { useState } from "react";

const streams = [
  { id: 1, name: "Acompanhe a casa", src: "https://rdcanais.top/bbb1alternativo" },
  { id: 2, name: "Acompanhe a casa", src: "https://rdcanais.top/bbb2alternativo" },
  { id: 3, name: "Acompanhe a casa", src: "https://rdcanais.top/bbb3alternativo" },
  { id: 4, name: "Cozinha", src: "https://rdcanais.top/bbb5alternativo" },
  { id: 5, name: "Quarto Sonho de Eternidade", src: "https://rdcanais.top/bbb6alternativo" },
  { id: 6, name: "Quarto Sonho de Voar", src: "https://rdcanais.top/bbb7alternativo" },
  { id: 7, name: "Quarto Sonho do Grande Amor", src: "https://rdcanais.top/bbb8alternativo" },
  { id: 8, name: "Cozinha 2", src: "https://rdcanais.top/bbb9alternativo" },
  { id: 9, name: "Banheiro SUPER CIMED", src: "https://rdcanais.top/bbb10alternativo" },
  { id: 10, name: "Sala Sonho de Ser Milionário", src: "https://rdcanais.top/bbb11alternativo" },
  { id: 11, name: "Academia NIVEA", src: "https://rdcanais.top/bbb12alternativo" }
];

export default function Page() {
  const [active, setActive] = useState(streams[0]);

  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      <div style={{ aspectRatio: "16/9" }}>
        <iframe
          key={active.src}
          src={active.src}
          width="100%"
          height="100%"
          allow="encrypted-media; fullscreen"
          frameBorder="0"
        />
        <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(0,0,0,.7)", padding: "8px 12px", borderRadius: 8 }}>
          {active.name}
        </div>
      </div>

      <div style={{ padding: 16, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
        {streams.map(cam => (
          <button key={cam.id} onClick={() => setActive(cam)} style={{ border: "1px solid #333", borderRadius: 10, overflow: "hidden" }}>
            <iframe src={cam.src} width="100%" height="90" frameBorder="0" />
            <div style={{ fontSize: 12, padding: 4, background: "#000" }}>{cam.name}</div>
          </button>
        ))}
      </div>
    </main>
  );
}
