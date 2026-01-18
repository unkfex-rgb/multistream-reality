
import './globals.css'

export const metadata = {
  title: 'BBB 26 Multicam',
  description: 'Transmissão multicâmeras estilo reality',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
