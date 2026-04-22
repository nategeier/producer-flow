import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Producer Flow — Creative Flow for Electronic Music Producers",
  description:
    "A coaching practice for electronic music producers. Method over tutorials. Process over plugins. Build your own sound, workflow and creative process.",
  openGraph: {
    title: "Producer Flow Academy",
    description:
      "A coaching practice for electronic music producers. Method over tutorials. Process over plugins.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
