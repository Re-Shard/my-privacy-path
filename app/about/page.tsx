import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | My Privacy Path',
  description:
    'Learn about our mission to promote digital privacy and provide resources for privacy-focused alternatives to Big Tech.',
  keywords: 'privacy mission, digital privacy, about us, privacy resources',
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          About My Privacy Path
        </h1>

        <div className="mt-8 prose prose-indigo max-w-none">
          <p className="text-xl text-gray-600">
            My Privacy Path is dedicated to empowering individuals to take
            control of their digital privacy through education and resources.
          </p>

          <h2>Our Mission</h2>
          <p>
            We believe that privacy is a fundamental human right. In today's
            digital world, where data collection and surveillance have become
            the norm, it's increasingly important to provide people with the
            knowledge and tools they need to protect their personal information.
          </p>
          <p>Our mission is to:</p>
          <ul>
            <li>
              Educate people about digital privacy issues and why they matter
            </li>
            <li>
              Provide practical guides for improving privacy and security online
            </li>
            <li>
              Highlight privacy-focused alternatives to popular software and
              services
            </li>
            <li>Promote open-source solutions that respect user privacy</li>
          </ul>

          <h2>Why Privacy Matters</h2>
          <p>
            Privacy isn't about having "something to hide." It's about having
            control over your personal information and who has access to it.
            When companies collect vast amounts of data about you, they can:
          </p>
          <ul>
            <li>
              Build detailed profiles of your behavior, preferences, and habits
            </li>
            <li>
              Use this information to manipulate your choices through targeted
              advertising
            </li>
            <li>
              Share or sell your data to third parties without your meaningful
              consent
            </li>
            <li>
              Create systems that could potentially be used for surveillance or
              discrimination
            </li>
          </ul>
          <p>
            By choosing privacy-focused alternatives and adopting better privacy
            practices, you can reduce your digital footprint and regain control
            over your personal information.
          </p>

          <h2>Support Our Work</h2>
          <p>
            My Privacy Path is an independent project maintained by privacy
            advocates. We don't accept sponsorships from companies that could
            compromise our mission. Instead, we rely on:
          </p>
          <ul>
            <li>Donations from supporters who believe in our mission</li>
            <li>
              Transparent affiliate partnerships with privacy-focused services
              we genuinely recommend
            </li>
          </ul>
          <p>If you'd like to support our work, please consider:</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://buymeacoffee.com/reshard"
              className="btn btn-primary inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </a>
            <Link
              href="/alternatives"
              className="btn btn-outline inline-flex items-center justify-center"
            >
              Explore Our Resources
            </Link>
          </div>

          <h2 className="mt-8">Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We'd love to hear from
            you! You can reach us at:
          </p>
          <p>
            <a
              href="mailto:contact@myprivacypath.org"
              className="text-indigo-600 hover:text-indigo-700"
            >
              contact@myprivacypath.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
