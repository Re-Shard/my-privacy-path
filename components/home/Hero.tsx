import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Take Control of Your{' '}
            <span className="text-indigo-600">Digital Privacy</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl">
            Discover privacy-focused, open-source alternatives to Big Tech
            software and learn how to protect your digital footprint.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/guides/email"
              className="btn btn-primary inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/alternatives"
              className="btn btn-outline inline-flex items-center"
            >
              Browse Alternatives
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/My-Privacy-Path-Hero.png"
            height={400}
            width={400}
            alt="Digital Privacy Illustration"
            className="max-h-[400px] w-auto"
          />
        </div>
      </div>
    </section>
  );
}
