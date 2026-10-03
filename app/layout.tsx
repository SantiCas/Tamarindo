import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} bg-amber-50 min-h-screen text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
