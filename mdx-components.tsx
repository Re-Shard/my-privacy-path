import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import AffiliateLink from "@/components/AffiliateLink"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use custom components
    AffiliateLink,

    // Override default elements
    h1: ({ children }) => <h1 className="text-4xl font-bold text-gray-900 mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">{children}</h4>,
    p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http")
      if (isExternal) {
        return (
          <a
            href={href}
            className="text-indigo-600 hover:text-indigo-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      }
      return (
        <Link href={href || "/"} className="text-indigo-600 hover:text-indigo-700 underline">
          {children}
        </Link>
      )
    },
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 text-gray-700">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 text-gray-700">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-4 text-gray-600">{children}</blockquote>
    ),
    img: ({ src, alt }) => (
      <div className="my-6">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt || "Image"}
          width={800}
          height={500}
          className="rounded-lg mx-auto"
        />
      </div>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-indigo-600">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono">{children}</pre>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{children}</td>,
    ...components,
  }
}

