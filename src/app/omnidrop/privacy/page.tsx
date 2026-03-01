'use client';

import Link from 'next/link';

export default function OmniDropPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-[#888] mb-2">Last updated: February 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#EDEDED]">
        OmniDrop — Privacy Policy
      </h1>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-8 text-sm font-medium text-[#EDEDED]">
        OmniDrop is a peer-to-peer file transfer application that operates entirely on your local network. Your files never leave your device or network, and we collect no personal data.
      </div>

      <div className="prose prose-invert prose-p:text-[#888] prose-li:text-[#888] prose-headings:text-[#EDEDED] max-w-none">
        <h2>1. Data Collection</h2>
        <p>
          OmniDrop does not collect, transmit, or store any personal data about you. We do not have servers, accounts, or backend infrastructure. Your files and metadata remain on your device and local network only.
        </p>

        <h2>2. File Transfer</h2>
        <p>
          All file transfers occur directly between your devices via peer-to-peer (P2P) connection on your local network. Files are encrypted using AES-256-GCM encryption during transmission. OmniDrop has no access to your files at any point — they are not routed through our servers or any third-party service.
        </p>

        <h2>3. Transfer History</h2>
        <p>
          Transfer history (file names, dates, recipients) is stored locally on your device using SQLite. This history is never transmitted to any server or shared with ByNeel. You can delete this history at any time through the app settings.
        </p>

        <h2>4. Settings & Preferences</h2>
        <p>
          App settings, custom device names, and preferences are stored locally on your device using SharedPreferences (iOS Keychain, Android SharedPreferences). These settings never leave your device.
        </p>

        <h2>5. In-App Purchases</h2>
        <p>
          Premium subscription management is handled entirely by Apple (iOS) or Google Play (Android). When you purchase the premium version, payment information is processed by Apple or Google directly — ByNeel does not receive, store, or process your financial data. Your subscription status is verified locally on your device and is not tracked by us.
        </p>

        <h2>6. No Analytics or Tracking</h2>
        <p>
          We do not use analytics, crash reporting, or any tracking services. We do not know how many users have installed the app, when you use it, or what files you transfer. OmniDrop respects your complete privacy.
        </p>

        <h2>7. Permissions</h2>
        <p>
          OmniDrop requests the following device permissions:
        </p>
        <ul>
          <li><strong>Network access:</strong> Required for P2P file transfer on your local network.</li>
          <li><strong>NFC (mobile only):</strong> Optional — used to exchange device information when devices are tapped together.</li>
          <li><strong>File storage:</strong> Required to read and write files on your device.</li>
        </ul>
        <p>
          All permissions are used locally only. We do not transmit any permission-related data to our servers.
        </p>

        <h2>8. Policy Updates</h2>
        <p>
          This privacy policy may be updated occasionally to reflect changes in the app. Updates will be posted here with an updated "Last updated" date. Your continued use of OmniDrop indicates acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy or how OmniDrop handles your data, please contact us at{' '}
          <a href="mailto:contact@byneel.com" className="text-[#3B82F6] hover:underline">contact@byneel.com</a>
        </p>
      </div>

      <div className="mt-12 text-center text-sm text-[#888]">
        <Link href="/" className="hover:text-[#EDEDED] transition-colors">Home</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/omnidrop/terms" className="hover:text-[#EDEDED] transition-colors">Terms of Use</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/privacy" className="hover:text-[#EDEDED] transition-colors">General Privacy Policy</Link>
      </div>
    </div>
  );
}
