import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Tamarindo 🌴 — Votación Familiar",
  description: "Vota las actividades que quieres hacer durante los próximos 10 días en Tamarindo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="bg-amber-50 min-h-screen text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
