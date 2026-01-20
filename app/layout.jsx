
import "./globals.css";

export const metadata = {
  title: "BBB26 • Multicam",
  description: "Escolha uma câmera e acompanhe ao vivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
