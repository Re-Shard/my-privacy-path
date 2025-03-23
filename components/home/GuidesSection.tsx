import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"

export default function GuidesSection() {
  return (
    <section className="container py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Guides</h2>
        <p className="mt-4 text-xl text-gray-600">
          Step-by-step guides to help you improve your digital privacy and security.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <div className="flex items-start">
            <div className="p-3 bg-indigo-100 rounded-full">
              <BookOpen className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Email Privacy Guide</h3>
              <p className="mt-2 text-gray-600">
                Learn how to secure your email communications and switch to privacy-focused email providers.
              </p>
              <div className="mt-4">
                <Link href="/guides/email" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start">
            <div className="p-3 bg-indigo-100 rounded-full">
              <BookOpen className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">VPN Guide</h3>
              <p className="mt-2 text-gray-600">
                Understand how VPNs work and how to choose the right one for your privacy needs.
              </p>
              <div className="mt-4">
                <Link href="/guides/vpn" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start">
            <div className="p-3 bg-indigo-100 rounded-full">
              <BookOpen className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Cloud Storage Guide</h3>
              <p className="mt-2 text-gray-600">
                Discover secure cloud storage options and learn how to encrypt your files before uploading.
              </p>
              <div className="mt-4">
                <Link href="/guides/cloud" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start">
            <div className="p-3 bg-indigo-100 rounded-full">
              <BookOpen className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Authentication Guide</h3>
              <p className="mt-2 text-gray-600">
                Learn about password managers, two-factor authentication, and other security best practices.
              </p>
              <div className="mt-4">
                <Link href="/guides/auth" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

