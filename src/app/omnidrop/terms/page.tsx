'use client';

import Link from 'next/link';

export default function OmniDropTermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-[#888] mb-2">Last updated: February 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#EDEDED]">
        OmniDrop — Terms of Use
      </h1>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-8 text-sm font-medium text-[#EDEDED]">
        By using OmniDrop, you agree to these terms. OmniDrop is provided "as is" without warranties. You are responsible for any content you transfer, and ByNeel is not liable for unauthorized access or network-related issues.
      </div>

      <div className="prose prose-invert prose-p:text-[#888] prose-li:text-[#888] prose-headings:text-[#EDEDED] max-w-none">
        <h2>1. License & Use</h2>
        <p>
          OmniDrop is licensed to you for personal, non-commercial use. You may not reverse-engineer, decompile, or modify the app. You may not use OmniDrop for any illegal or harmful purpose.
        </p>

        <h2>2. Service Tiers</h2>
        <p>
          <strong>Free Tier:</strong> Limited to 5 file transfers per day. Transfers expire after 7 days of transfer history.
        </p>
        <p>
          <strong>Premium Tier:</strong> Unlimited transfers. Full transfer history retention. Premium features unlock after purchase via Apple App Store or Google Play Store.
        </p>

        <h2>3. User Responsibility</h2>
        <p>
          You are solely responsible for all content you transfer using OmniDrop. You warrant that you have the legal right to transfer any files shared through the app. ByNeel does not review, monitor, or control the content you transfer and assumes no responsibility for its legality, accuracy, or appropriateness.
        </p>

        <h2>4. P2P Nature of the Service</h2>
        <p>
          OmniDrop operates as a peer-to-peer application. ByNeel does not store, transmit, or have access to your files or transfer data. Because files are transferred directly between your devices on your local network, ByNeel cannot intercede in disputes, recover lost files, or prevent unauthorized access to your device or network.
        </p>

        <h2>5. Subscription Terms</h2>
        <p>
          Premium subscriptions are managed through Apple App Store or Google Play Store. By purchasing a subscription, you agree to the respective app store's terms and payment policies. Refunds and subscription disputes are handled by Apple or Google, not ByNeel. Your subscription renews automatically unless you cancel it through your device settings or app store account.
        </p>

        <h2>6. No Warranty</h2>
        <p>
          OmniDrop is provided "as is" without any warranties, express or implied. We make no guarantee that the app will be error-free, uninterrupted, or secure. We do not warrant that file transfers will succeed, that your network is secure, or that encrypted files cannot be compromised.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          ByNeel is not liable for any direct, indirect, or consequential damages arising from your use of OmniDrop, including but not limited to: loss of files, unauthorized network access, failed transfers, or any disruptions to your network or devices. Your sole remedy is to discontinue use of the app.
        </p>

        <h2>8. Network Security</h2>
        <p>
          OmniDrop operates on your local network, which is your responsibility to secure. Use a trusted WiFi network and ensure your firewall is properly configured. Do not use OmniDrop on public or unsecured networks if you are transferring sensitive files.
        </p>

        <h2>9. Policy Updates</h2>
        <p>
          ByNeel may update these terms at any time. Updated terms will be posted here with a new "Last updated" date. Your continued use of OmniDrop indicates acceptance of updated terms.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about these terms, please contact us at{' '}
          <a href="mailto:contact@byneel.com" className="text-[#3B82F6] hover:underline">contact@byneel.com</a>
        </p>
      </div>

      <div className="mt-12 text-center text-sm text-[#888]">
        <Link href="/" className="hover:text-[#EDEDED] transition-colors">Home</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/omnidrop/privacy" className="hover:text-[#EDEDED] transition-colors">Privacy Policy</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/privacy" className="hover:text-[#EDEDED] transition-colors">General Privacy Policy</Link>
      </div>
    </div>
  );
}
