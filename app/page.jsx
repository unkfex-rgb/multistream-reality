
"use client";
import { useState, useEffect } from "react";

const CAMERAS = [
  { name: "Acompanhe a casa", src: "EMBED1" },
  { name: "Acompanhe a casa", src: "EMBED2" },
  { name: "Acompanhe a casa", src: "EMBED3" },
  { name: "Cozinha", src: "EMBED4" },
  { name: "Cozinha 2", src: "EMBED5" },
  { name: "Quarto Sonho de Eternidade", src: "EMBED6" },
  { name: "Quarto Sonho de Voar", src: "EMBED7" },
  { name: "Quarto Sonho do Grande Amor", src: "EMBED8" },
  { name: "Banheiro SUPER CIMED", src: "EMBED9" },
  { name: "Sala Sonho de Ser Milionário", src: "EMBED10" },
  { name: "Academia NIVEA", src: "EMBED11" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [intervalTime, setIntervalTime] = useState(20000);

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % CAMERAS.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [auto, intervalTime]);

  return (
    <main>
      <header className="topo">
        <div className="logo-gradiente">bbb26</div>
        <div className="live">AO VIVO</div>
      </header>

      <div className="player">
        <iframe
          src={CAMERAS[active].src}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        <span className="label">{CAMERAS[active].name}</span>
      </div>

      <div className="controls">
        <button onClick={() => setAuto(!auto)}>
          🎬 {auto ? "Modo Diretor" : "Auto Troca"}
        </button>

        <select onChange={(e) => setIntervalTime(Number(e.target.value))}>
          <option value="10000">10s</option>
          <option value="20000" selected>20s</option>
          <option value="60000">1 min</option>
        </select>
      </div>

      <div className="grid">
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
      </div>

      <footer className="footer">
        <span>Dev by</span>

        <a href="https://instagram.com/corintia420" target="_blank">
          <svg viewBox="0 0 24 24">
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10z"/>
          </svg>
        </a>

        <a href="https://x.com/sccpfex" target="_blank">
          <svg viewBox="0 0 24 24">
            <path d="M18.3 2H21l-6.5 7.4L22 22h-6.6l-5.2-6.8L4 22H1.3l7-8L2 2h6.8l4.7 6.2L18.3 2z"/>
          </svg>
        </a>
      </footer>
    </main>
  );
}
