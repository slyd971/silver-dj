import "./globals.css";

export const metadata = {
  title: "SLY'D Press Kit",
  description: "DJ SLY'D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}