
"use client";
import { useState, useEffect } from "react";

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
  const [auto, setAuto] = useState(true);
  const [time, setTime] = useState(20000);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % CAMERAS.length);
    }, time);
    return () => clearInterval(t);
  }, [auto, time]);

  return (
    <main className="container">
      <header className="topo">
        <h1 className="logo">BBB26</h1>
        <span className="live">AO VIVO</span>
      </header>

      <section className="player">
        <iframe
          src={CAMERAS[active].src}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <span className="label">{CAMERAS[active].name}</span>
      </section>

      <section className="controls">
        <button onClick={() => setAuto(!auto)}>
          {auto ? "🎬 Modo Diretor" : "▶️ Auto Troca"}
        </button>

        <select value={time} onChange={(e) => setTime(Number(e.target.value))}>
          <option value={10000}>10s</option>
          <option value={20000}>20s</option>
          <option value={60000}>1 min</option>
        </select>
      </section>

      <section className="grid">
        {CAMERAS.map((cam, i) => (
          <button
            key={i}
            className={i === active ? "thumb active" : "thumb"}
            onClick={() => {
              setActive(i);
              setAuto(false);
            }}
          >
            {cam.name}
          </button>
        ))}
      </section>

      <footer className="footer">
        <span>Dev by</span>

        <a href="https://instagram.com/corintia420" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" />
        </a>

        <a href="https://x.com/sccpfex" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" />
        </a>
      </footer>
    </main>
  );
}
