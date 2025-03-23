import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | My Privacy Path",
  description: "Articles and insights on digital privacy, security, and open-source alternatives to Big Tech.",
  keywords: "privacy blog, digital privacy articles, security tips, privacy news",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  )
}

