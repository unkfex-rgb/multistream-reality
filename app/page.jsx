
"use client";
import { useState } from "react";

const CAMERAS = [
  { name: "Acompanhe a casa", src: "https://rdcanais.top/bbb1alternativo" },
  { name: "Acompanhe a casa", src: "https://rdcanais.top/bbb2alternativo" },
  { name: "Acompanhe a casa", src: "https://rdcanais.top/bbb3alternativo" },
  { name: "Cozinha", src: "https://rdcanais.top/bbb5alternativo" },
  { name: "Quarto Sonho de Eternidade", src: "https://rdcanais.top/bbb6alternativo" },
  { name: "Quarto Sonho de Voar", src: "https://rdcanais.top/bbb7alternativo" },
  { name: "Quarto Sonho do Grande Amor", src: "https://rdcanais.top/bbb8alternativo" },
  { name: "Cozinha 2", src: "https://rdcanais.top/bbb9alternativo" },
  { name: "Banheiro SUPER CIMED", src: "https://rdcanais.top/bbb10alternativo" },
  { name: "Sala Sonho de Ser Milionário", src: "https://rdcanais.top/bbb11alternativo" },
  { name: "Academia NIVEA", src: "https://rdcanais.top/bbb12alternativo" },
];

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <main className="container">
      <header className="topo">
        <h1 className="logo">BBB26</h1>
        <span className="live">AO VIVO</span>
      </header>

      <section className="player">
        <iframe
          src={CAMERAS[active].src}
          allow="encrypted-media; fullscreen"
          allowFullScreen
        />
        <span className="label">{CAMERAS[active].name}</span>
      </section>

      <p className="hint">
        Escolha uma câmera abaixo para acompanhar ao vivo.
      </p>

      <section className="grid">
        {CAMERAS.map((cam, i) => (
          <button
            key={i}
            className={i === active ? "thumb active" : "thumb"}
            onClick={() => setActive(i)}
          >
            {cam.name}
          </button>
        ))}
      </section>
    </main>
  );
}
