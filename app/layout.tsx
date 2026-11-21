import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "TREGUA T1 — El teléfono que no te roba el tiempo",
  description:
    "Teléfono de teclas con Android blindado de fábrica. WhatsApp, Maps, Spotify y tu banco funcionan. Redes sociales, navegador y Play Store, bloqueados a nivel de sistema. 139 €. Envío 24/48h desde España.",
  keywords: [
    "teléfono detox",
    "móvil minimalista",
    "dumbphone",
    "primer móvil",
    "desconexión digital",
    "teléfono para mayores",
    "Android MDM",
  ],
  openGraph: {
    title: "TREGUA T1 — Todo lo que necesitas. Nada que te robe el tiempo.",
    description:
      "WhatsApp, Maps, Spotify y banca. Sin Instagram, sin TikTok, sin navegador libre. Bloqueado a nivel de sistema, no con fuerza de voluntad.",
    type: "website",
    locale: "es_ES",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F4F2EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sans.variable} ${mono.variable} light`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="bg-bg font-sans text-fg antialiased">{children}</body>
    </html>
  );
}
