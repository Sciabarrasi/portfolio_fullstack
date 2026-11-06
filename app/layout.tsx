import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google"
import { ChatProvider } from "@/components/chat/chat-provider"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" })

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gianluca Sciabarrasi — Software Engineer Full Stack",
  description:
    "Portfolio de Gianluca Sciabarrasi, Software Engineer Full Stack en Santa Fe, Argentina. Sistemas a medida con React, Next.js, TypeScript, Node.js y AWS. Preguntale a su asistente IA.",
  openGraph: {
    title: "Gianluca Sciabarrasi — Software Engineer Full Stack",
    description: "Construyo software que simplifica el día a día de quienes lo usan.",
    images: ["/profile.jpg"],
    locale: "es_AR",
    type: "website",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#151b23",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`}>
      <body className="font-sans">
        <ChatProvider>{children}</ChatProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
