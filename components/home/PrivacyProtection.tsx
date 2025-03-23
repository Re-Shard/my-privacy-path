import { Shield, Lock, UserCheck } from "lucide-react"

export default function PrivacyProtection() {
  return (
    <section className="container py-12 bg-gray-50 rounded-xl">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Protecting Your Privacy</h2>
        <p className="mt-4 text-xl text-gray-600">
          Taking back control of your digital life is possible with the right tools and knowledge.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="p-3 bg-indigo-100 rounded-full w-fit">
            <Shield className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Use Privacy-Focused Tools</h3>
          <p className="mt-2 text-gray-600">
            Switch to software that respects your privacy by design and doesn't track or sell your data.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="p-3 bg-indigo-100 rounded-full w-fit">
            <Lock className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Encrypt Your Data</h3>
          <p className="mt-2 text-gray-600">
            Use encryption for your communications, files, and internet connection to prevent unauthorized access.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="p-3 bg-indigo-100 rounded-full w-fit">
            <UserCheck className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Take Control</h3>
          <p className="mt-2 text-gray-600">
            Learn about privacy settings, data minimization, and how to exercise your rights under privacy laws.
          </p>
        </div>
      </div>
    </section>
  )
}

