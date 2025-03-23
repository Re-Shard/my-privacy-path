import type { Metadata } from "next"
import Link from "next/link"
import AffiliateLink from "@/components/AffiliateLink"

export const metadata: Metadata = {
  title: "Authentication Privacy Guide | My Privacy Path",
  description: "Learn about password managers, two-factor authentication, and other security best practices.",
  keywords: "authentication, password managers, 2FA, secure login, privacy",
}

export default function AuthGuidePage() {
  return (
    <article className="prose prose-indigo lg:prose-lg mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Authentication Guide</h1>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Strong authentication is the foundation of digital security and privacy. This guide covers password managers,
        two-factor authentication, and best practices to keep your accounts secure.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The Problem with Traditional Password Management</h2>

      <p className="text-gray-700 mb-4 leading-relaxed">Many people:</p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Reuse the same password across multiple sites</li>
        <li className="mb-2">Use simple, easy-to-guess passwords</li>
        <li className="mb-2">Store passwords in unsecured locations (like text files or notes apps)</li>
        <li className="mb-2">Use "Sign in with Google/Facebook" which links activities across services</li>
      </ul>

      <p className="text-gray-700 mb-4 leading-relaxed">
        These practices make accounts vulnerable to breaches and allow companies to track you across different services.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
        Password Managers: The Foundation of Secure Authentication
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Password managers generate, store, and autofill strong, unique passwords for all your accounts.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Benefits of Password Managers</h3>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Create complex, unique passwords for every account</li>
        <li className="mb-2">Autofill credentials securely</li>
        <li className="mb-2">Alert you to potentially compromised passwords</li>
        <li className="mb-2">Sync across multiple devices</li>
        <li className="mb-2">Reduce the cognitive burden of remembering passwords</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Recommended Password Managers</h3>

      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">
        <AffiliateLink href="https://bitwarden.com#ref">Bitwarden</AffiliateLink>
      </h4>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Open-source</li>
        <li className="mb-2">Free tier with all essential features</li>
        <li className="mb-2">End-to-end encryption</li>
        <li className="mb-2">Cross-platform support</li>
        <li className="mb-2">Self-hosting option available</li>
      </ul>

      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">KeePassXC</h4>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Completely offline and open-source</li>
        <li className="mb-2">No cloud synchronization by default (manual sync possible)</li>
        <li className="mb-2">Free and open-source</li>
        <li className="mb-2">Cross-platform support</li>
        <li className="mb-2">Maximum control over your password database</li>
      </ul>

      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">1Password</h4>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">User-friendly interface</li>
        <li className="mb-2">Strong security features</li>
        <li className="mb-2">Family and team sharing options</li>
        <li className="mb-2">Travel mode for border crossings</li>
        <li className="mb-2">Paid service with no free tier</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Two-Factor Authentication (2FA)</h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Two-factor authentication adds an extra layer of security by requiring something you know (password) and
        something you have (a device or security key).
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Types of 2FA</h3>

      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">Authenticator Apps</h4>

      <p className="text-gray-700 mb-4 leading-relaxed">Apps that generate time-based one-time passwords (TOTP):</p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          <strong>Aegis Authenticator</strong> (open-source, Android)
        </li>
        <li className="mb-2">
          <strong>Tofu</strong> (open-source, iOS)
        </li>
        <li className="mb-2">
          <strong>Raivo OTP</strong> (open-source, iOS)
        </li>
      </ul>

      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">Hardware Security Keys</h4>

      <p className="text-gray-700 mb-4 leading-relaxed">Physical devices that provide the strongest form of 2FA:</p>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          <strong>YubiKey</strong>
        </li>
        <li className="mb-2">
          <strong>Nitrokey</strong>
        </li>
        <li className="mb-2">
          <strong>SoloKeys</strong>
        </li>
      </ul>

      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-2">SMS and Email Codes</h4>

      <p className="text-gray-700 mb-4 leading-relaxed">
        The weakest form of 2FA, vulnerable to SIM swapping and email compromises. Use only when other methods aren't
        available.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Best Authentication Practices</h2>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Use a Password Manager</h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Store all your passwords in a reputable password manager and use its generator to create strong, unique
        passwords.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Enable 2FA Wherever Possible</h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Prioritize authenticator apps or hardware keys over SMS-based 2FA.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Use Passkeys When Available</h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Passkeys are a newer, phishing-resistant authentication method that uses biometrics or device PINs instead of
        passwords.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Avoid "Sign in with" Social Media</h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Create direct accounts with services rather than using "Sign in with Google/Facebook/Apple" to prevent tracking
        across services.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Regular Security Audits</h3>

      <p className="text-gray-700 mb-4 leading-relaxed">Periodically review your accounts:</p>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Check for and change weak or reused passwords</li>
        <li className="mb-2">Enable 2FA on accounts that didn't previously support it</li>
        <li className="mb-2">Close unused accounts</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Have a Recovery Plan</h3>

      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">Store recovery codes for 2FA in a secure location</li>
        <li className="mb-2">Consider a secure backup of your password manager database</li>
        <li className="mb-2">Have a plan for what to do if your devices are lost or stolen</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Setting Up a Password Manager</h2>

      <p className="text-gray-700 mb-4 leading-relaxed">Getting started with a password manager is straightforward:</p>

      <ol className="list-decimal pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          <strong>Choose a password manager</strong> that meets your needs
        </li>
        <li className="mb-2">
          <strong>Create an account</strong> with a strong master password
        </li>
        <li className="mb-2">
          <strong>Install the applications</strong> on your devices
        </li>
        <li className="mb-2">
          <strong>Add browser extensions</strong> for easy autofill
        </li>
        <li className="mb-2">
          <strong>Import existing passwords</strong> if you have them saved elsewhere
        </li>
        <li className="mb-2">
          <strong>Gradually add new accounts</strong> as you log into them
        </li>
        <li className="mb-2">
          <strong>Update weak passwords</strong> using the password generator
        </li>
      </ol>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Implementing 2FA</h2>

      <p className="text-gray-700 mb-4 leading-relaxed">To set up two-factor authentication:</p>

      <ol className="list-decimal pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          <strong>Choose your 2FA method</strong> (authenticator app or hardware key)
        </li>
        <li className="mb-2">
          <strong>Install an authenticator app</strong> if needed
        </li>
        <li className="mb-2">
          <strong>Go to the security settings</strong> of your important accounts
        </li>
        <li className="mb-2">
          <strong>Enable 2FA</strong> and follow the setup instructions
        </li>
        <li className="mb-2">
          <strong>Save backup/recovery codes</strong> in a secure location
        </li>
        <li className="mb-2">
          <strong>Test the login process</strong> to ensure everything works
        </li>
      </ol>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Strong authentication is one of the most important steps you can take to protect your privacy and security
        online. By using a password manager and enabling two-factor authentication, you significantly reduce the risk of
        account breaches and limit the ability of companies to track you across services.
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Start with your most important accounts (email, banking, cloud storage) and gradually implement these practices
        across all your services. The initial setup takes some time, but the long-term benefits for your digital
        security are immense.
      </p>

      <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Explore Other Privacy Guides</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/guides/email" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            Email Guide
          </Link>
          <Link href="/guides/vpn" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            VPN Guide
          </Link>
          <Link href="/guides/cloud" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            Cloud Storage Guide
          </Link>
        </div>
      </div>
    </article>
  )
}

