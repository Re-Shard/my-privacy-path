import Link from 'next/link';
import { Shield, LinkedinIcon, Twitter, Heart } from 'lucide-react';
import AffiliateLink from './AffiliateLink';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold">My Privacy Path</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Empowering you to take control of your digital privacy through
              education and open-source alternatives to Big Tech.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/in/richard-v-d/"
                className="text-gray-500 hover:text-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              {/* <a
                href="https://twitter.com"
                className="text-gray-500 hover:text-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/guides/email"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Email Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/chat"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Privacy friendly chat
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/vpn"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  VPN Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/cloud"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Cloud Storage
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/auth"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Authentication
                </Link>
              </li>
              <li>
                <Link
                  href="/alternatives"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  All Alternatives
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://buymeacoffee.com/reshard"
                  className="inline-flex items-center text-gray-600 hover:text-indigo-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Donate
                </a>
              </li>
              <li>
                <AffiliateLink href="https://proton.me#ref">
                  Proton Mail
                </AffiliateLink>
              </li>
              <li>
                <AffiliateLink href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=120357&url_id=902">
                  NordVPN
                </AffiliateLink>
              </li>
              <li>
                <AffiliateLink href="https://bitwarden.com#ref">
                  Bitwarden
                </AffiliateLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} My Privacy Path. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
