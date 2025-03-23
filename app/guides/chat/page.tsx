import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chat Privacy Guide | My Privacy Path',
  description:
    'Discover privacy-friendly chat apps like Signal for secure communication.',
  keywords: 'chat, privacy, secure messaging, Signal, WhatsApp alternatives',
};

export default function ChatGuidePage() {
  return (
    <article className="prose prose-indigo lg:prose-lg mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Chat Privacy Guide
      </h1>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Choosing a secure messaging platform is crucial for protecting your
        privacy. Popular apps like WhatsApp collect extensive metadata, while
        privacy-focused alternatives provide better protection.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        The Problem with Popular Chat Apps
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Apps like WhatsApp and Facebook Messenger:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          Collect metadata about who you communicate with and when
        </li>
        <li className="mb-2">Track your usage patterns and behavior</li>
        <li className="mb-2">
          Store chat backups in unencrypted cloud storage by default
        </li>
        <li className="mb-2">
          Have weak data-sharing policies with parent companies like Meta
        </li>
      </ul>

      <p className="text-gray-700 mb-4 leading-relaxed">
        These risks expose your conversations to potential surveillance,
        breaches, or data exploitation.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Signal: The Privacy Champion
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Signal is a privacy-first chat app that uses end-to-end encryption by
        default. It's designed to minimize metadata collection and protect your
        conversations.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        Why Choose Signal?
      </h3>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">End-to-end encryption by default</li>
        <li className="mb-2">Minimal metadata collection</li>
        <li className="mb-2">No ads or trackers</li>
        <li className="mb-2">Open-source and independently audited</li>
        <li className="mb-2">
          Free to use with optional donations to support development
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        Other Secure Chat Alternatives
      </h3>

      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">Session</h4>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Decentralized with no central server</li>
        <li className="mb-2">No phone number required for registration</li>
        <li className="mb-2">Perfect for anonymous communication</li>
      </ul>

      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">
        Element (Matrix Network)
      </h4>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Decentralized chat platform with E2EE</li>
        <li className="mb-2">Great for communities and collaboration</li>
        <li className="mb-2">
          Supports bridges for cross-platform chat integration
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Best Practices for Private Chatting
      </h2>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          Use Signal for your most sensitive conversations
        </li>
        <li className="mb-2">
          Avoid linking your account to your email or social media when possible
        </li>
        <li className="mb-2">Regularly review your privacy settings</li>
        <li className="mb-2">
          Disable automatic cloud backups to prevent unencrypted data storage
        </li>
        <li className="mb-2">
          Encourage friends and family to switch to privacy-focused apps
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Conclusion
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Privacy-focused messaging apps like Signal provide a secure way to
        communicate without compromising your personal data. By switching to
        secure platforms and following best practices, you can greatly reduce
        your exposure to surveillance and data exploitation.
      </p>

      <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Explore Other Privacy Guides
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/guides/email"
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            Email Guide
          </Link>
          <Link
            href="/guides/vpn"
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            VPN Guide
          </Link>
          <Link
            href="/guides/cloud"
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            Cloud Storage Guide
          </Link>
        </div>
      </div>
    </article>
  );
}
