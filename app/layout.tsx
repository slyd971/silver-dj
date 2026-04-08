import "./globals.css";
import type { Metadata } from "next";
import { pressKitConfig } from "@/data/config";

export const metadata: Metadata = {
  title: pressKitConfig.metadata.title,
  description: pressKitConfig.metadata.description,
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
