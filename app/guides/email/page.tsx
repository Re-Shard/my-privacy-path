import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateLink from '@/components/AffiliateLink';

export const metadata: Metadata = {
  title: 'Email Privacy Guide | My Privacy Path',
  description:
    'Learn how to secure your email communications and switch to privacy-focused email providers.',
  keywords:
    'email privacy, secure email, encrypted email, privacy-focused email',
};

export default function EmailGuidePage() {
  return (
    <article className="prose prose-indigo lg:prose-lg mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Email Privacy Guide
      </h1>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Email is one of the most common forms of digital communication, but
        standard email services like Gmail, Yahoo, and Outlook often scan your
        messages for advertising purposes and store your data on their servers
        without strong encryption.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        The Problem with Standard Email Services
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Most popular email providers:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          Scan the content of your emails to serve targeted advertisements
        </li>
        <li className="mb-2">
          Store your emails on their servers in a way that allows them to read
          them
        </li>
        <li className="mb-2">
          May share your data with third parties or government agencies
        </li>
        <li className="mb-2">
          Often link your email activity to your other online activities
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Privacy-Focused Email Alternatives
      </h2>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        <AffiliateLink href="https://proton.me#ref">ProtonMail</AffiliateLink>
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        ProtonMail is one of the most popular secure email services, offering:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          End-to-end encryption for emails between ProtonMail users
        </li>
        <li className="mb-2">Zero-access encryption for all emails</li>
        <li className="mb-2">Based in Switzerland with strong privacy laws</li>
        <li className="mb-2">
          Free tier available with limited storage and features
        </li>
        <li className="mb-2">Open-source clients</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        <AffiliateLink href="https://app.tuta.com/signup?ref=VzdGekVva1c">
          Tutanota
        </AffiliateLink>
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">Tutanota offers:</p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          End-to-end encryption for emails, contacts, and calendars
        </li>
        <li className="mb-2">
          Encrypted emails to external recipients possible
        </li>
        <li className="mb-2">Based in Germany</li>
        <li className="mb-2">Free tier available</li>
        <li className="mb-2">Open-source</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        Mailbox.org
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        A privacy-focused email provider that offers:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Encrypted mailbox</li>
        <li className="mb-2">No advertising or tracking</li>
        <li className="mb-2">Based in Germany</li>
        <li className="mb-2">Includes calendar and cloud storage</li>
        <li className="mb-2">Paid service with reasonable pricing</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        How to Secure Your Email
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Even if you use a secure email provider, there are additional steps you
        can take to enhance your email privacy:
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        1. Use PGP Encryption
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Pretty Good Privacy (PGP) allows you to encrypt the contents of your
        emails so that only the intended recipient can read them. Many secure
        email providers have PGP built-in, but you can also use it with standard
        email services.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        2. Be Careful with Attachments
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Email attachments can contain tracking pixels or malware. Consider using
        a secure file-sharing service instead, or encrypt sensitive attachments
        before sending them.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        3. Use a Strong Password and 2FA
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Protect your email account with a strong, unique password and enable
        two-factor authentication (2FA) whenever possible.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
        4. Consider Using Aliases
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Email aliases allow you to create different email addresses that forward
        to your main inbox. This can help you:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Compartmentalize your online identities</li>
        <li className="mb-2">
          Identify which services are selling your email address
        </li>
        <li className="mb-2">
          Easily block spam by disabling compromised aliases
        </li>
      </ul>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Services like SimpleLogin or AnonAddy can help you manage email aliases.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        How to Switch to a Secure Email Provider
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Switching email providers can seem daunting, but following these steps
        can make the process smoother:
      </p>

      <ol className="list-decimal pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          <strong>Sign up for a new secure email account</strong>
        </li>
        <li className="mb-2">
          <strong>Import your contacts</strong> from your old email provider
        </li>
        <li className="mb-2">
          <strong>Set up forwarding</strong> from your old email to your new one
        </li>
        <li className="mb-2">
          <strong>Update your email address</strong> on important accounts
        </li>
        <li className="mb-2">
          <strong>Notify your contacts</strong> about your new email address
        </li>
        <li className="mb-2">
          <strong>Monitor both accounts</strong> during the transition period
        </li>
      </ol>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Remember that the most secure option is to use encrypted email services
        for both the sender and recipient. When you send an email to someone
        using a standard email service like Gmail, that email may still be
        accessible to that provider once it reaches their servers.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Conclusion
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Switching to a privacy-focused email provider is an important step in
        protecting your digital privacy. While no solution is perfect, using
        encrypted email services significantly reduces the amount of your
        personal data that is accessible to companies and potential hackers.
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Start with small steps, like creating an account with a secure provider
        for your sensitive communications, and gradually transition more of your
        email activity as you become comfortable with the new system.
      </p>

      <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Explore Other Privacy Guides
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
