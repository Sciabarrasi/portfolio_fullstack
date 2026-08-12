import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PortfolioNav } from "../components/portfolio-nav";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Gianluca Sciabarrasi - Porfolio - Desarrollador Fullstack",
  description:
    "Portfolio de Gianluca Sciabarrasi, desarrollador Fullstack con experiencia en React, Next.js, TypeScript, NestJS y AWS.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased font-sans">
        <PortfolioNav />
        <div className="lg:pl-64">
          <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
            {children}
          </main>
        </div>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
