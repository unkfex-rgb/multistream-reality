
import './globals.css'

export const metadata = {
  title: 'BBB 2026 Multicam',
  description: 'Multicam estilo reality show'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
