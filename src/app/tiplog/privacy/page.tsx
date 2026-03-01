'use client';

import Link from 'next/link';

export default function TipLogPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-[#888] mb-2">Last updated: February 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#EDEDED]">
        TipLog — Privacy Policy
      </h1>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-8 text-sm font-medium text-[#EDEDED]">
        TipLog is 100% offline. All expense and tip calculations are processed on your device. We do not collect personal data, require accounts, or track your spending.
      </div>

      <div className="prose prose-invert prose-p:text-[#888] prose-li:text-[#888] prose-headings:text-[#EDEDED] max-w-none">
        <h2>1. Offline-First Architecture</h2>
        <p>
          TipLog operates completely offline. No internet connection is required. All calculations, expense history, and conversions are processed locally on your device. We do not transmit any data to servers or third-party services.
        </p>

        <h2>2. Local Data Storage</h2>
        <p>
          All expense records, tip calculations, and transaction history are stored locally on your device in a SQLite database. This data never leaves your device and is never synced, backed up, or transmitted to ByNeel or any cloud service. You can delete any record at any time directly in the app.
        </p>

        <h2>3. No Account Required</h2>
        <p>
          TipLog does not require an account, login, or registration. We do not ask for your name, email, phone number, or any personal identification. No data is ever associated with your identity.
        </p>

        <h2>4. GPS Usage</h2>
        <p>
          TipLog uses your device's GPS to automatically detect your current country for currency and tipping customs. GPS data is used only to determine your location—it is never stored, logged, or transmitted. Your geographic location is processed entirely on your device.
        </p>

        <h2>5. Export Features (PDF & CSV)</h2>
        <p>
          You can export your expense history as PDF or CSV files for personal use. These files are created and saved entirely on your device. ByNeel does not access, store, or transmit any exported files. Export is purely for your local records.
        </p>

        <h2>6. No Analytics or Tracking</h2>
        <p>
          We do not use analytics, crash reporting, or any tracking services. We do not know how many expenses you track, which countries you visit, or any other usage information. Your app behavior is completely private.
        </p>

        <h2>7. Permissions</h2>
        <p>
          TipLog requests the following device permissions:
        </p>
        <ul>
          <li><strong>Location (GPS):</strong> Used only to detect your current country for automatic currency and tipping customs.</li>
          <li><strong>File storage:</strong> Required to export and save PDF/CSV files to your device.</li>
        </ul>
        <p>
          These permissions are used locally only. No location or file data is transmitted to our servers.
        </p>

        <h2>8. Policy Updates</h2>
        <p>
          This privacy policy may be updated occasionally. Updates will be posted here with an updated "Last updated" date. Your continued use of TipLog indicates acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy or how TipLog handles your data, please contact us at{' '}
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
