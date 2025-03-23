import type React from "react"

interface AffiliateLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function AffiliateLink({ href, children, className = "" }: AffiliateLinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-600 hover:text-indigo-600 ${className}`}
      target="_blank"
      rel="nofollow noreferrer"
    >
      {children}
    </a>
  )
}

