import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mairie de la commune – Agenda, informations et services",// ← à adapter
  description:
    "Retrouvez les événements, actualités et services proposés par les mairies. Agenda communal, écoles, démarches administratives et plus.",
  metadataBase: new URL("https://mairie-ton-site.fr"), // ← à adapter
  openGraph: {
    title: "Mairie de la commune",// ← à adapter
    description:
      "Découvrez les événements et services proposés par votre mairie.",
    url: "https://mairie-ton-site.fr",// ← à adapter
    siteName: "Mairie de la commune",// ← à adapter
    images: [
      {
        url: "https://mairie-ton-site.fr/og-image.jpg", // ← à adapter
        width: 1200,
        height: 630,
        alt: "Photo de la mairie",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mairie de la commune",// ← à adapter
    description:
      "Agenda communal, informations pratiques et services publics.",
    images: ["https://mairie-ton-site.fr/og-image.jpg"], // ← à adapter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
