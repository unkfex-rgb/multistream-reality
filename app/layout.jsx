
import "./globals.css";

export const metadata = {
  title: "BBB26 • Multicam",
  description: "Multicam ao vivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
