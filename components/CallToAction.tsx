import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-indigo-50 rounded-xl">
      <div className="container py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Support Our Mission
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Help us continue providing resources and guides on privacy-focused
              alternatives. Your support enables us to create more content and
              keep it freely accessible to everyone.
            </p>
            <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <a
                href="https://buymeacoffee.com/reshard"
                className="btn btn-primary inline-flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
              <Link
                href="/about"
                className="btn btn-outline inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="flex justify-center">
              <img
                className="h-56 w-auto"
                src="/bmc_qr.png"
                alt="Support illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
