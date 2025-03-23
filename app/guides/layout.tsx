import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Guides | My Privacy Path",
  description: "Step-by-step guides to help you improve your digital privacy and security.",
  keywords: "privacy guides, digital privacy, security guides, privacy protection",
}

export default function GuidesLayout({
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

