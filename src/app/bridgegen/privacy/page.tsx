'use client';

import Link from 'next/link';

export default function BridgeGenPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-[#888] mb-2">Last updated: February 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#EDEDED]">
        BridgeGen — Privacy Policy
      </h1>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-8 text-sm font-medium text-[#EDEDED]">
        BridgeGen connects seniors and young people through local profiles and conversations. All data is stored locally on your device. No account, no cloud sync, no servers.
      </div>

      <div className="prose prose-invert prose-p:text-[#888] prose-li:text-[#888] prose-headings:text-[#EDEDED] max-w-none">
        <h2>1. Local-Only Profiles</h2>
        <p>
          All BridgeGen user profiles—including name, age, interests, bio, and profile photos—are stored locally on your device in a SQLite database. Profiles are never transmitted to ByNeel, any server, or any cloud service. You have complete control over what information you enter.
        </p>

        <h2>2. Local Messaging</h2>
        <p>
          All messages exchanged between users on BridgeGen are stored locally on your device. Messages are never sent to a server or transmitted over the internet (except via local network if device-to-device chat is enabled). You can delete any message at any time.
        </p>

        <h2>3. Connections & Matching</h2>
        <p>
          The BridgeGen matching algorithm runs entirely on your device. It analyzes local profiles to suggest compatible connections based on interests and age groups. No matching data is sent to any server. Connections are stored locally on your device.
        </p>

        <h2>4. Profile Photos</h2>
        <p>
          Profile photos are stored locally on your device only. Photos are never uploaded to any server or transmitted to ByNeel. If you delete your profile or account, photos are permanently deleted from your device.
        </p>

        <h2>5. No Account Required</h2>
        <p>
          BridgeGen does not require an account, login, or registration. Your profile is stored on your device and is not associated with any external service or account. You can create, edit, or delete your profile at any time.
        </p>

        <h2>6. No Cloud Sync (Currently)</h2>
        <p>
          BridgeGen does not currently offer cloud synchronization. All data is stored locally on your device and is not backed up to any server. If you uninstall the app or lose your device, your profiles, messages, and connections will be lost. Future versions may offer optional cloud sync with explicit opt-in.
        </p>

        <h2>7. No Analytics or Tracking</h2>
        <p>
          We do not use analytics, crash reporting, or any tracking services. We do not know how many profiles you create, who you connect with, or any other usage information. Your activity is completely private.
        </p>

        <h2>8. Permissions</h2>
        <p>
          BridgeGen requests the following device permissions:
        </p>
        <ul>
          <li><strong>Camera:</strong> To capture or upload a profile photo.</li>
          <li><strong>Photo library:</strong> To select a photo from your device as a profile picture.</li>
          <li><strong>File storage:</strong> To store profiles and messages locally.</li>
        </ul>
        <p>
          All permissions are used locally only. No data is transmitted to any server.
        </p>

        <h2>9. Policy Updates</h2>
        <p>
          This privacy policy may be updated occasionally. Updates will be posted here with an updated "Last updated" date. Your continued use of BridgeGen indicates acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy or how BridgeGen handles your data, please contact us at{' '}
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
