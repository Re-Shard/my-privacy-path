import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Cloud, Lock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Guides | My Privacy Path",
  description: "Step-by-step guides to help you improve your digital privacy and security.",
  keywords: "privacy guides, digital privacy, security guides, privacy protection",
}

export default function GuidesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Guides</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Step-by-step guides to help you improve your digital privacy and security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/guides/email" className="group">
          <div className="card h-full flex flex-col hover:border-indigo-200 transition-colors">
            <div className="flex items-start p-6">
              <div className="p-3 bg-indigo-100 rounded-full">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">
                  Email Privacy Guide
                </h2>
                <p className="mt-2 text-gray-600">
                  Learn how to secure your email communications and switch to privacy-focused email providers.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/guides/vpn" className="group">
          <div className="card h-full flex flex-col hover:border-indigo-200 transition-colors">
            <div className="flex items-start p-6">
              <div className="p-3 bg-indigo-100 rounded-full">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">VPN Guide</h2>
                <p className="mt-2 text-gray-600">
                  Understand how VPNs work and how to choose the right one for your privacy needs.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/guides/cloud" className="group">
          <div className="card h-full flex flex-col hover:border-indigo-200 transition-colors">
            <div className="flex items-start p-6">
              <div className="p-3 bg-indigo-100 rounded-full">
                <Cloud className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">
                  Cloud Storage Guide
                </h2>
                <p className="mt-2 text-gray-600">
                  Discover secure cloud storage options and learn how to encrypt your files before uploading.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/guides/auth" className="group">
          <div className="card h-full flex flex-col hover:border-indigo-200 transition-colors">
            <div className="flex items-start p-6">
              <div className="p-3 bg-indigo-100 rounded-full">
                <Lock className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">
                  Authentication Guide
                </h2>
                <p className="mt-2 text-gray-600">
                  Learn about password managers, two-factor authentication, and other security best practices.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-12 p-6 bg-indigo-50 rounded-xl text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">More Guides Coming Soon</h3>
        <p className="text-gray-700">
          We're working on additional guides covering browser privacy, secure messaging, and more.
        </p>
      </div>
    </div>
  )
}

