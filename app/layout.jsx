export const metadata = { title: 'Multistream Reality' };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, background: '#000' }}>{children}</body>
    </html>
  );
}
