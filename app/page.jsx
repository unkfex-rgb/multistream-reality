
'use client'
import { useState, useEffect } from 'react'

const cameras = [
  { id: 1, name: 'Acompanhe a casa', url: 'https://rdcanais.top/bbb1alternativo' },
  { id: 2, name: 'Acompanhe a casa', url: 'https://rdcanais.top/bbb2alternativo' },
  { id: 3, name: 'Acompanhe a casa', url: 'https://rdcanais.top/bbb3alternativo' },
  { id: 4, name: 'Cozinha', url: 'https://rdcanais.top/bbb5alternativo' },
  { id: 5, name: 'Quarto Sonho de Eternidade', url: 'https://rdcanais.top/bbb6alternativo' },
  { id: 6, name: 'Quarto Sonho de Voar', url: 'https://rdcanais.top/bbb7alternativo' },
  { id: 7, name: 'Quarto Sonho do Grande Amor', url: 'https://rdcanais.top/bbb8alternativo' },
  { id: 8, name: 'Cozinha 2', url: 'https://rdcanais.top/bbb9alternativo' },
  { id: 9, name: 'Banheiro SUPER CIMED', url: 'https://rdcanais.top/bbb10alternativo' },
  { id: 10, name: 'Sala Sonho de Ser Milionário', url: 'https://rdcanais.top/bbb11alternativo' },
  { id: 11, name: 'Academia NIVEA', url: 'https://rdcanais.top/bbb12alternativo' }
]

export default function Home() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)
  const [intervalTime, setIntervalTime] = useState(20000)

  useEffect(() => {
    if (!auto) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cameras.length)
    }, intervalTime)
    return () => clearInterval(timer)
  }, [auto, intervalTime])

  return (
    <div className="container">
      <header>
        <div className="logo">BBB 2026</div>
        <div className="live">AO VIVO</div>
      </header>

      <div className="player">
        <iframe
          key={cameras[active].url}
          src={cameras[active].url}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        <span className="label">{cameras[active].name}</span>
      </div>

      <div className="controls">
        <label>
          🎬 Modo Diretor
          <input
            type="checkbox"
            checked={!auto}
            onChange={() => setAuto(!auto)}
          />
        </label>

        <select
          value={intervalTime}
          onChange={(e) => setIntervalTime(Number(e.target.value))}
        >
          <option value={10000}>10s</option>
          <option value={20000}>20s</option>
          <option value={60000}>1 min</option>
        </select>
      </div>

      <div className="grid">
        {cameras.map((cam, i) => (
          <button
            key={cam.id}
            className={i === active ? 'active' : ''}
            onClick={() => {
              setActive(i)
              setAuto(false)
            }}
          >
            {cam.name}
          </button>
        ))}
      </div>

      <footer>
        <span>Dev by</span>
        <a href="https://instagram.com/corintia420" target="_blank">Instagram</a>
        <a href="https://x.com/sccpfex" target="_blank">X</a>
      </footer>
    </div>
  )
}
