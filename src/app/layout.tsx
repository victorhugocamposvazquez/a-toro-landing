import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Abraham Toro — Entrenador personal",
    template: "%s · Abraham Toro",
  },
  description:
    "Marca personal de Abraham Toro, entrenador personal de fitness. Planes, rutinas y seguimiento personalizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${instrumentSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground flex flex-col">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
