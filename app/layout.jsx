
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "BBB26 • Multicam",
  description: "Multicam ao vivo BBB 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
