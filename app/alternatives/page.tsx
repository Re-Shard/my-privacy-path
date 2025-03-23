import type React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy-Focused Alternatives | My Privacy Path',
  description:
    'Discover open-source and privacy-respecting alternatives to popular Big Tech software and services.',
  keywords:
    'privacy alternatives, open source software, big tech alternatives, privacy tools',
};

interface AffiliateLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function AffiliateLink({ href, children, className }: AffiliateLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center text-indigo-600 hover:text-indigo-700 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function AlternativesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Privacy-Focused Alternatives
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Discover open-source and privacy-respecting alternatives to popular
          Big Tech software and services.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {/* Email Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Email Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold">ProtonMail</h3>
              <p className="mt-2 text-gray-600">
                End-to-end encrypted email service based in Switzerland with
                strong privacy protections.
              </p>
              <div className="mt-4">
                <AffiliateLink
                  href="https://proton.me#ref"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AffiliateLink>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">Tutanota</h3>
              <p className="mt-2 text-gray-600">
                Secure email service with end-to-end encryption based in
                Germany.
              </p>
              <div className="mt-4">
                <a
                  href="https://tutanota.com"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">Mailbox.org</h3>
              <p className="mt-2 text-gray-600">
                Privacy-focused email provider with additional office features.
              </p>
              <div className="mt-4">
                <a
                  href="https://mailbox.org"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/guides/email"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
            >
              Read our Email Privacy Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* VPN Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            VPN Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold">Mullvad VPN</h3>
              <p className="mt-2 text-gray-600">
                Privacy-focused VPN that doesn't require personal information to
                sign up.
              </p>
              <div className="mt-4">
                <a
                  href="https://mullvad.net"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">ProtonVPN</h3>
              <p className="mt-2 text-gray-600">
                Secure VPN service from the makers of ProtonMail with a free
                tier.
              </p>
              <div className="mt-4">
                <AffiliateLink
                  href="https://protonvpn.com#ref"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AffiliateLink>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">IVPN</h3>
              <p className="mt-2 text-gray-600">
                Privacy-focused VPN with a strong no-logging policy.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.ivpn.net"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/guides/vpn"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
            >
              Read our VPN Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Cloud Storage Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cloud Storage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold">The Good Cloud</h3>
              <p className="mt-2 text-gray-600">
                All-in-One Digital Workspace: Secure, Private, and Powerful.
              </p>
              <div className="mt-4">
                <a
                  href="https://thegood.cloud/"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">Cryptomator</h3>
              <p className="mt-2 text-gray-600">
                Free encryption tool that works with any cloud storage provider.
              </p>
              <div className="mt-4">
                <a
                  href="https://cryptomator.org"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">Tresorit</h3>
              <p className="mt-2 text-gray-600">
                End-to-end encrypted cloud storage service with a focus on
                security.
              </p>
              <div className="mt-4">
                <AffiliateLink
                  href="https://tresorit.com#ref"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AffiliateLink>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/guides/cloud"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
            >
              Read our Cloud Storage Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Authentication Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Authentication & Password Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold">Bitwarden</h3>
              <p className="mt-2 text-gray-600">
                Open-source password manager with cross-platform support.
              </p>
              <div className="mt-4">
                <AffiliateLink
                  href="https://bitwarden.com#ref"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AffiliateLink>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">KeePassXC</h3>
              <p className="mt-2 text-gray-600">
                Offline, open-source password manager with strong encryption.
              </p>
              <div className="mt-4">
                <a
                  href="https://keepassxc.org"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">Aegis Authenticator</h3>
              <p className="mt-2 text-gray-600">
                Free, secure and open-source 2FA app for Android.
              </p>
              <div className="mt-4">
                <a
                  href="https://getaegis.app"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/guides/auth"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
            >
              Read our Authentication Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
