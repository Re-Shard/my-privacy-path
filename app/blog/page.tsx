import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Blog | My Privacy Path",
  description: "Articles and insights on digital privacy, security, and open-source alternatives to Big Tech.",
  keywords: "privacy blog, digital privacy articles, security tips, privacy news",
}

export default function BlogPage() {
  return (
    <div className="prose prose-indigo lg:prose-lg mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Blog</h1>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Welcome to our blog, where we share articles, news, and insights about digital privacy, security, and
        open-source alternatives to Big Tech.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Coming Soon</h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        We're currently working on our first blog posts. Check back soon for articles on:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Latest developments in privacy legislation</li>
        <li className="mb-2">Reviews of privacy-focused tools and services</li>
        <li className="mb-2">Tutorials for improving your digital security</li>
        <li className="mb-2">Interviews with privacy advocates and experts</li>
      </ul>

      <p className="text-gray-700 mb-4 leading-relaxed">
        In the meantime, check out our{" "}
        <Link href="/guides/email" className="text-indigo-600 hover:text-indigo-700 underline">
          guides
        </Link>{" "}
        for practical privacy advice.
      </p>

      <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Explore Our Privacy Guides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/guides/email" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            Email Privacy Guide
          </Link>
          <Link href="/guides/vpn" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            VPN Guide
          </Link>
          <Link href="/guides/cloud" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            Cloud Storage Guide
          </Link>
          <Link href="/guides/auth" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            Authentication Guide
          </Link>
        </div>
      </div>
    </div>
  )
}

