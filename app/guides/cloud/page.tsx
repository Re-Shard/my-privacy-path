import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateLink from '@/components/AffiliateLink';

export const metadata: Metadata = {
  title: 'Cloud Storage Privacy Guide | My Privacy Path',
  description:
    'Discover secure cloud storage options and learn how to encrypt your files before uploading.',
  keywords: 'cloud storage, encrypted storage, secure files, privacy cloud',
};

export default function CloudGuidePage() {
  return (
    <article className="prose prose-indigo lg:prose-lg mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Cloud Storage Guide
      </h1>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Cloud storage services allow you to store your files online and access
        them from anywhere. However, popular services like Google Drive,
        Dropbox, and OneDrive often have access to your unencrypted files and
        may share your data with third parties. This guide will help you find
        more private alternatives and implement better practices for cloud
        storage.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        The Problem with Standard Cloud Storage
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Most mainstream cloud storage providers:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Can access and scan the contents of your files</li>
        <li className="mb-2">
          May use your data for advertising or product improvement
        </li>
        <li className="mb-2">
          Often comply with government requests for user data
        </li>
        <li className="mb-2">May not use end-to-end encryption by default</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Privacy-Focused Cloud Storage Alternatives
      </h2>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        The Good Cloud (privacy first cloud)
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        The Good Cloud offers secure, privacy-focused cloud storage designed to
        keep your data safe and under your control.
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          Privacy by Design: Your data remains private and is never shared with
          third parties.
        </li>
        <li className="mb-2">
          Hosted in the Netherlands: Ensuring compliance with strict European
          privacy laws (GDPR).
        </li>
        <li className="mb-2">
          User-Friendly Interface: Easy file management with intuitive controls.
        </li>
        <li className="mb-2">
          End-to-End Encryption: Protects your data during transfer and at rest.
        </li>
        <li className="mb-2">
          Secure Collaboration: Share files and collaborate without compromising
          privacy.
        </li>
        <li className="mb-2">
          Independent & Tracker-Free: No data exploitation, no Big Tech
          involvement.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        <AffiliateLink href="https://tresorit.com#ref">Tresorit</AffiliateLink>
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Tresorit offers end-to-end encrypted cloud storage:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Zero-knowledge encryption</li>
        <li className="mb-2">Based in Switzerland and Hungary</li>
        <li className="mb-2">Secure file sharing with non-users</li>
        <li className="mb-2">Available for all major platforms</li>
        <li className="mb-2">Paid service with business focus</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Sync.com</h3>

      <p className="text-gray-700 mb-4 leading-relaxed">Sync.com provides:</p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">End-to-end encryption</li>
        <li className="mb-2">Zero-knowledge privacy</li>
        <li className="mb-2">Based in Canada</li>
        <li className="mb-2">Free tier available with 5GB</li>
        <li className="mb-2">Competitive pricing for additional storage</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        ProtonDrive
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        From the makers of ProtonMail:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">End-to-end encryption</li>
        <li className="mb-2">Zero-access encryption</li>
        <li className="mb-2">Based in Switzerland</li>
        <li className="mb-2">Integrated with Proton ecosystem</li>
        <li className="mb-2">Free tier available with limited storage</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Encryption Tools for Any Cloud Storage
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        If you prefer to stick with your current cloud storage provider, you can
        add an extra layer of encryption:
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        Cryptomator
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Cryptomator is a free, open-source encryption tool that works with any
        cloud storage:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Creates encrypted vaults in your cloud storage</li>
        <li className="mb-2">Client-side encryption</li>
        <li className="mb-2">
          Available for Windows, macOS, Linux, iOS, and Android
        </li>
        <li className="mb-2">
          Open-source and free (mobile apps have a one-time fee)
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Boxcryptor</h3>

      <p className="text-gray-700 mb-4 leading-relaxed">Boxcryptor provides:</p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          End-to-end encryption for major cloud storage providers
        </li>
        <li className="mb-2">Zero-knowledge encryption</li>
        <li className="mb-2">
          Free tier for one cloud provider and two devices
        </li>
        <li className="mb-2">Paid plans for multiple providers and devices</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">VeraCrypt</h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        VeraCrypt allows you to create encrypted containers:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          Create encrypted volumes that can be stored in the cloud
        </li>
        <li className="mb-2">Strong encryption</li>
        <li className="mb-2">Open-source and free</li>
        <li className="mb-2">Requires more technical knowledge</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Best Practices for Secure Cloud Storage
      </h2>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        Use Strong, Unique Passwords
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Protect your cloud storage accounts with strong, unique passwords and
        enable two-factor authentication whenever possible.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        Encrypt Sensitive Files Before Uploading
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Even with privacy-focused providers, consider encrypting your most
        sensitive files before uploading them to the cloud.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        Be Mindful of Sharing
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        When sharing files, check the permissions you're granting and consider
        using password protection or expiration dates for shared links.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        Regular Backups
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Don't rely solely on cloud storage for important files. Follow the 3-2-1
        backup rule:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">3 copies of your data</li>
        <li className="mb-2">2 different storage types</li>
        <li className="mb-2">1 copy off-site</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        Read the Privacy Policy
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Understand what data your cloud storage provider collects and how they
        use it.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        How to Transition to Secure Cloud Storage
      </h2>

      <ol className="list-decimal pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          <strong>Choose a secure solution</strong> that meets your needs
        </li>
        <li className="mb-2">
          <strong>Set up encryption</strong> if needed
        </li>
        <li className="mb-2">
          <strong>Start with new sensitive files</strong> rather than migrating
          everything at once
        </li>
        <li className="mb-2">
          <strong>Gradually move existing files</strong> to your new secure
          storage
        </li>
        <li className="mb-2">
          <strong>Delete files from your old service</strong> once they're
          securely stored elsewhere
        </li>
      </ol>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Conclusion
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Secure cloud storage is an essential part of protecting your digital
        privacy. Whether you choose a privacy-focused provider or add encryption
        to your existing cloud storage, taking control of your data helps
        prevent unauthorized access and reduces your digital footprint.
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Remember that convenience and security often involve trade-offs. The
        most secure solutions might require more setup or have fewer features
        than mainstream options, but the privacy benefits are well worth the
        effort for your most sensitive information.
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
            href="/guides/auth"
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            Authentication Guide
          </Link>
        </div>
      </div>
    </article>
  );
}
