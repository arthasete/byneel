'use client';

import Link from 'next/link';

export default function TipLogTermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-[#888] mb-2">Last updated: March 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#EDEDED]">
        TipLog &mdash; Terms of Use
      </h1>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-8 text-sm font-medium text-[#EDEDED]">
        By using TipLog, you agree to these terms. TipLog is provided &quot;as is&quot; without warranties. Tip calculations are informational only&mdash;always verify amounts before paying.
      </div>

      <div className="prose prose-invert prose-p:text-[#888] prose-li:text-[#888] prose-headings:text-[#EDEDED] max-w-none">
        <h2>1. License &amp; Use</h2>
        <p>
          TipLog is licensed to you for personal, non-commercial use. You may not reverse-engineer, decompile, or modify the app. You may not use TipLog for any illegal or harmful purpose.
        </p>

        <h2>2. Service Tiers</h2>
        <p>
          <strong>Free Tier:</strong> Full tip calculator with 51 countries, GPS detection, expense tracking, and limited exports. The free version displays banner advertisements.
        </p>
        <p>
          <strong>TipLog Pro:</strong> All free features plus ad-free experience, unlimited PDF/CSV exports, and premium badge. Available as a one-time purchase through Apple App Store or Google Play Store.
        </p>

        <h2>3. Tip Calculations</h2>
        <p>
          Tip calculations, suggested percentages, and country-specific tipping customs provided by TipLog are <strong>informational only</strong>. Tipping customs may vary by region, establishment, and context. Always verify the final amount before paying. ByNeel is not responsible for any disputes or errors arising from tip calculations.
        </p>

        <h2>4. Exchange Rates</h2>
        <p>
          Exchange rates provided by TipLog are sourced from third-party APIs and may not reflect real-time market rates. Rates are cached locally and updated periodically. ByNeel does not guarantee the accuracy of exchange rate data and is not responsible for any financial decisions based on these rates.
        </p>

        <h2>5. Advertising</h2>
        <p>
          The free version of TipLog displays advertisements provided by Google AdMob. Ad content is determined by Google and is not controlled by ByNeel. ByNeel is not responsible for the content of third-party advertisements.
        </p>

        <h2>6. In-App Purchases</h2>
        <p>
          TipLog Pro is available as a one-time purchase. All purchases are processed through Apple App Store or Google Play Store and are subject to their respective refund policies. ByNeel does not process payments directly.
        </p>

        <h2>7. Data &amp; Privacy</h2>
        <p>
          Your use of TipLog is also governed by our <Link href="/tiplog/privacy" className="text-[#3B82F6] hover:underline">Privacy Policy</Link>. All data is stored locally on your device. We do not collect personal information.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          TipLog, its design, code, and content are the intellectual property of ByNeel. You may not copy, distribute, or create derivative works based on TipLog without written permission.
        </p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>
          TipLog is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. ByNeel does not warrant that the app will be error-free, uninterrupted, or that calculations will always be accurate.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, ByNeel shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of TipLog, including but not limited to financial losses from incorrect tip calculations or exchange rate data.
        </p>

        <h2>11. Modifications</h2>
        <p>
          ByNeel reserves the right to modify these terms at any time. Updated terms will be posted here with a revised &quot;Last updated&quot; date. Continued use of TipLog after changes constitutes acceptance of the new terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These terms are governed by the laws of France. Any disputes shall be resolved in the courts of France.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, please contact us at{' '}
          <a href="mailto:contact@byneel.com" className="text-[#3B82F6] hover:underline">contact@byneel.com</a>
        </p>
      </div>

      <div className="mt-12 text-center text-sm text-[#888]">
        <Link href="/" className="hover:text-[#EDEDED] transition-colors">Home</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/tiplog" className="hover:text-[#EDEDED] transition-colors">TipLog</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/tiplog/privacy" className="hover:text-[#EDEDED] transition-colors">Privacy Policy</Link>
        <span className="mx-3">&middot;</span>
        <Link href="/terms" className="hover:text-[#EDEDED] transition-colors">General Terms</Link>
      </div>
    </div>
  );
}
