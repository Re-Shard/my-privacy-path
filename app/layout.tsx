import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Privacy Path | Open-Source Alternatives to Big Tech",
  description:
    "Discover privacy-focused, open-source alternatives to Big Tech software and learn how to protect your digital privacy.",
  keywords: "privacy, big tech alternatives, open source, digital privacy, secure software",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

