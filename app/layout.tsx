import type { Metadata, Viewport } from "next";

import { site } from "@/content/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "João Victor — Designer & Developer",
    template: "%s — João Victor",
  },
  description:
    "Design, software e experimentos em construção. Conheça o trabalho de João Victor no Behance e acompanhe os próximos projetos open source.",
  applicationName: "João Victor",
  authors: [{ name: "João Victor" }],
  creator: "João Victor",
  category: "portfolio",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "João Victor — Designer & Developer",
    description:
      "Um hub entre identidades visuais, software e os próximos projetos open source.",
    locale: "pt_BR",
    siteName: "João Victor",
    type: "website",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "João Victor — Design, código e inteligência artificial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Victor — Designer & Developer",
    description:
      "Um hub entre identidades visuais, software e os próximos projetos open source.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
