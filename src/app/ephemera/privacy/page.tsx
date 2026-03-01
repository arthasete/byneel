'use client';

import Link from 'next/link';

export default function EphemeraPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-[#888] mb-2">Last updated: February 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#EDEDED]">
        Ephemera — Privacy Policy
      </h1>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-8 text-sm font-medium text-[#EDEDED]">
        Ephemera stores all time capsules locally with end-to-end AES-256 encryption. Your location data is used only to unlock capsules. No servers, no accounts, complete privacy.
      </div>

      <div className="prose prose-invert prose-p:text-[#888] prose-li:text-[#888] prose-headings:text-[#EDEDED] max-w-none">
        <h2>1. End-to-End Encryption</h2>
        <p>
          All capsules in Ephemera are encrypted using AES-256-GCM encryption. The encryption key is derived from your GPS coordinates and the unlock date—only you can derive this key when visiting the correct location at the correct time. Even ByNeel cannot decrypt your capsules. This design ensures complete privacy and data security.
        </p>

        <h2>2. Local Storage Only</h2>
        <p>
          All capsules, including photos, text, audio, and metadata, are stored locally on your device in a SQLite database. Encrypted capsule content never leaves your device and is never transmitted to ByNeel, any cloud service, or any third party. You can delete capsules at any time.
        </p>

        <h2>3. No Account Required</h2>
        <p>
          Ephemera does not require an account, login, or registration. We do not ask for your name, email, phone number, or any personal identification. All capsules are tied to your device only.
        </p>

        <h2>4. GPS for Capsule Unlock</h2>
        <p>
          Ephemera uses your device's GPS to verify your location when unlocking a capsule. GPS coordinates are compared to the capsule's creation location to determine if you can open it. GPS data is:
        </p>
        <ul>
          <li>Processed entirely on your device</li>
          <li>Never stored or logged by ByNeel</li>
          <li>Never transmitted to any server</li>
          <li>Used only for the cryptographic derivation of capsule encryption keys</li>
        </ul>

        <h2>5. Camera & Microphone Permissions</h2>
        <p>
          Ephemera requests camera and microphone access to enable you to record photos, videos, and audio for your capsules. All media content is captured and stored locally on your device in encrypted form. We do not access, store, or transmit any media you record.
        </p>

        <h2>6. Map Data</h2>
        <p>
          Ephemera displays an interactive map showing capsule locations. Map tiles are provided by a third-party mapping service (e.g., OpenStreetMap). The mapping service may collect standard HTTP request information (IP address, User-Agent). Ephemera does not transmit your GPS coordinates to the mapping service—only standard map tile requests are sent.
        </p>

        <h2>7. No Tracking, No Servers</h2>
        <p>
          Ephemera has no backend servers, no accounts, no analytics, and no tracking. We do not know how many capsules you create, where you travel, or any other data about your usage. Your activity is completely private.
        </p>

        <h2>8. Policy Updates</h2>
        <p>
          This privacy policy may be updated occasionally. Updates will be posted here with an updated "Last updated" date. Your continued use of Ephemera indicates acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy or how Ephemera handles your data, please contact us at{' '}
          <a href="mailto:contact@byneel.com" className="text-[#3B82F6] hover:underline">contact@byneel.com</a>
        </p>
      </div>

      <div className="mt-12 text-center text-sm text-[#888]">
        <Link href="/" className="hover:text-[#EDEDED] transition-colors">Home</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/privacy" className="hover:text-[#EDEDED] transition-colors">General Privacy Policy</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/terms" className="hover:text-[#EDEDED] transition-colors">Terms of Use</Link>
      </div>
    </div>
  );
}
