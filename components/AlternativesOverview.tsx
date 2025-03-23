import Link from "next/link"
import { Mail, Cloud, Lock, Globe } from "lucide-react"

export default function AlternativesOverview() {
  return (
    <section className="container py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy-Focused Alternatives</h2>
        <p className="mt-4 text-xl text-gray-600">
          Discover open-source and privacy-respecting alternatives to popular software and services.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/guides/email" className="card flex flex-col items-center text-center hover:border-indigo-200">
          <div className="p-3 bg-indigo-100 rounded-full">
            <Mail className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Email</h3>
          <p className="mt-2 text-gray-600">Secure email providers that don't scan your messages for advertising.</p>
        </Link>

        <Link href="/guides/vpn" className="card flex flex-col items-center text-center hover:border-indigo-200">
          <div className="p-3 bg-indigo-100 rounded-full">
            <Globe className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">VPN</h3>
          <p className="mt-2 text-gray-600">
            Virtual Private Networks that protect your browsing activity and location.
          </p>
        </Link>

        <Link href="/guides/cloud" className="card flex flex-col items-center text-center hover:border-indigo-200">
          <div className="p-3 bg-indigo-100 rounded-full">
            <Cloud className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Cloud Storage</h3>
          <p className="mt-2 text-gray-600">Encrypted cloud storage solutions that keep your files private.</p>
        </Link>

        <Link href="/guides/auth" className="card flex flex-col items-center text-center hover:border-indigo-200">
          <div className="p-3 bg-indigo-100 rounded-full">
            <Lock className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Authentication</h3>
          <p className="mt-2 text-gray-600">Password managers and authentication tools to secure your accounts.</p>
        </Link>
      </div>

      <div className="mt-8 text-center">
        <Link href="/alternatives" className="btn btn-outline inline-flex items-center">
          View All Alternatives
        </Link>
      </div>
    </section>
  )
}

