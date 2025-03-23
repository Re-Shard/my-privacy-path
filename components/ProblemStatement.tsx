import { Eye, Database, DollarSign } from "lucide-react"

export default function ProblemStatement() {
  return (
    <section className="container py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Problem with Big Tech</h2>
        <p className="mt-4 text-xl text-gray-600">
          Large technology companies have built business models that prioritize data collection over user privacy.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card flex flex-col items-center text-center">
          <div className="p-3 bg-indigo-100 rounded-full">
            <Eye className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Surveillance</h3>
          <p className="mt-2 text-gray-600">
            Big Tech companies track your online behavior across websites and services to build detailed profiles.
          </p>
        </div>

        <div className="card flex flex-col items-center text-center">
          <div className="p-3 bg-indigo-100 rounded-full">
            <Database className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Data Collection</h3>
          <p className="mt-2 text-gray-600">
            Your personal information is collected, stored, and often shared with third parties without meaningful
            consent.
          </p>
        </div>

        <div className="card flex flex-col items-center text-center">
          <div className="p-3 bg-indigo-100 rounded-full">
            <DollarSign className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Monetization</h3>
          <p className="mt-2 text-gray-600">
            Your data is the product, sold to advertisers and used to influence your behavior and purchasing decisions.
          </p>
        </div>
      </div>
    </section>
  )
}

