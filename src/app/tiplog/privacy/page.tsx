'use client';

import Link from 'next/link';

export default function TipLogPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-[#888] mb-2">Last updated: March 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#EDEDED]">
        TipLog &mdash; Privacy Policy
      </h1>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-8 text-sm font-medium text-[#EDEDED]">
        TipLog is an offline-first app. All expense and tip calculations are processed on your device. We do not collect personal data or require accounts. GPS and exchange rate data are used only for local processing.
      </div>

      <div className="prose prose-invert prose-p:text-[#888] prose-li:text-[#888] prose-headings:text-[#EDEDED] max-w-none">
        <h2>1. Offline-First Architecture</h2>
        <p>
          TipLog operates primarily offline. All calculations, expense history, and tip records are processed locally on your device. No internet connection is required for core functionality.
        </p>

        <h2>2. Local Data Storage</h2>
        <p>
          All expense records, tip calculations, and transaction history are stored locally on your device in a SQLite database. This data never leaves your device and is never synced, backed up, or transmitted to ByNeel or any cloud service. You can delete any record at any time directly in the app.
        </p>

        <h2>3. No Account Required</h2>
        <p>
          TipLog does not require an account, login, or registration. We do not ask for your name, email, phone number, or any personal identification.
        </p>

        <h2>4. GPS Usage</h2>
        <p>
          TipLog uses your device&apos;s GPS to automatically detect your current country for currency and tipping customs. GPS data is used only to determine your location&mdash;it is never stored, logged, or transmitted. Your geographic location is processed entirely on your device.
        </p>

        <h2>5. Exchange Rate Data</h2>
        <p>
          TipLog connects to a free exchange rate API (open.er-api.com) to provide real-time currency conversion. Only the currency pair is sent in the request&mdash;no personal data, device ID, or location is transmitted. Exchange rates are cached locally for 6 hours to minimize network requests.
        </p>

        <h2>6. Advertising (Free Version)</h2>
        <p>
          The free version of TipLog displays banner advertisements provided by Google AdMob. Google may collect certain data for ad personalization, including device identifiers and usage data, in accordance with <a href="https://policies.google.com/privacy" className="text-[#3B82F6] hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>. You can opt out of personalized ads in your device settings. TipLog Pro (premium) removes all advertising.
        </p>

        <h2>7. In-App Purchases</h2>
        <p>
          TipLog offers a premium upgrade (TipLog Pro) through Apple App Store or Google Play Store. All payment processing is handled by Apple or Google&mdash;ByNeel does not collect or store any payment information. Your purchase status is stored locally on your device.
        </p>

        <h2>8. Export Features (PDF &amp; CSV)</h2>
        <p>
          You can export your expense history as PDF or CSV files for personal use. These files are created and saved entirely on your device. ByNeel does not access, store, or transmit any exported files.
        </p>

        <h2>9. Permissions</h2>
        <p>
          TipLog requests the following device permissions:
        </p>
        <ul>
          <li><strong>Location (GPS):</strong> Used only to detect your current country for automatic currency and tipping customs.</li>
          <li><strong>Internet:</strong> Used only for exchange rate updates and displaying advertisements (free version).</li>
          <li><strong>File storage:</strong> Required to export and save PDF/CSV files to your device.</li>
        </ul>
        <p>
          These permissions are used for the described purposes only. No personal data is transmitted to our servers.
        </p>

        <h2>10. Data Retention</h2>
        <p>
          Since all data is stored locally on your device, data retention is entirely under your control. Uninstalling TipLog removes all app data. You can also delete individual records within the app at any time.
        </p>

        <h2>11. Children&apos;s Privacy</h2>
        <p>
          TipLog does not knowingly collect information from children under 13. The app does not require any personal information to function.
        </p>

        <h2>12. Policy Updates</h2>
        <p>
          This privacy policy may be updated occasionally. Updates will be posted here with an updated &quot;Last updated&quot; date. Your continued use of TipLog indicates acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us at{' '}
          <a href="mailto:contact@byneel.com" className="text-[#3B82F6] hover:underline">contact@byneel.com</a>
        </p>
      </div>

      <div className="mt-12 text-center text-sm text-[#888]">
        <Link href="/" className="hover:text-[#EDEDED] transition-colors">Home</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/tiplog" className="hover:text-[#EDEDED] transition-colors">TipLog</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/tiplog/terms" className="hover:text-[#EDEDED] transition-colors">Terms of Use</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/privacy" className="hover:text-[#EDEDED] transition-colors">General Privacy Policy</Link>
      </div>
    </div>
  );
}
