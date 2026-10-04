import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maoni — Sion Wu · AI visuals that don't drift",
  description:
    "Sion Wu is an independent developer building character-locked AI image pipelines, the m2v Markdown-to-card tool, and the Maoni watercolor character IP. Illustrators go from 0 to 1 — he takes it from 1 to 100.",
  openGraph: {
    title: "Maoni — Sion Wu · AI visuals that don't drift",
    description:
      "Character-locked AI pipelines, batch production, and the m2v card tool — engineered, not prompted.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
