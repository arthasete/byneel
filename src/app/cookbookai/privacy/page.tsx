'use client';

import Link from 'next/link';

export default function CookBookAIPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-[#888] mb-2">Last updated: February 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#EDEDED]">
        CookBook AI — Privacy Policy
      </h1>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-8 text-sm font-medium text-[#EDEDED]">
        CookBook AI stores all recipes locally on your device. No account is required, and we do not collect or store your personal data. API keys are encrypted, and camera/microphone are used only for local processing.
      </div>

      <div className="prose prose-invert prose-p:text-[#888] prose-li:text-[#888] prose-headings:text-[#EDEDED] max-w-none">
        <h2>1. Local Data Storage</h2>
        <p>
          All recipes, ingredients, notes, and cooking history are stored locally on your device in a SQLite database. This data never leaves your device and is never transmitted to ByNeel or any third-party server. You can delete any recipe or data at any time directly in the app.
        </p>

        <h2>2. No Account Required</h2>
        <p>
          CookBook AI does not require an account, login, or registration. We do not ask for your name, email, phone number, or any personal identification. No data is ever associated with your identity.
        </p>

        <h2>3. API Key Security</h2>
        <p>
          To use AI features, you may provide your own Google Gemini API key. This key is stored securely in your device's native keystore (iOS Keychain or Android Keystore) with encryption. Your API key is never transmitted to ByNeel and is not logged, stored, or backed up on any server. Your key is used exclusively to communicate with Google's API.
        </p>

        <h2>4. Camera Permission</h2>
        <p>
          CookBook AI requests camera access to enable photo scanning (OCR) of recipes from books or websites. Photos are processed entirely on your device using local machine learning models. We do not store, send, or analyze your photos. Photos are deleted after processing unless you explicitly save them within the app.
        </p>

        <h2>5. Microphone Permission</h2>
        <p>
          CookBook AI requests microphone access to enable voice dictation for ingredient and note input. Audio is sent directly to your device's built-in speech-to-text engine (not to ByNeel). We do not record, store, or transmit your voice. Voice processing is entirely local to your device.
        </p>

        <h2>6. Google Gemini API</h2>
        <p>
          When you use AI-powered features (recipe generation, ingredient suggestions, cooking tips), requests are sent directly from your device to Google's Gemini API. Google's privacy policy applies to these API calls. ByNeel does not receive, store, or analyze these requests. You control when and whether AI features are used. Note: only the free version uses AI; premium features operate locally without API calls.
        </p>

        <h2>7. Google AdMob (Free Version)</h2>
        <p>
          The free version of CookBook AI displays ads served by Google AdMob. AdMob may collect limited data (device identifiers, app usage) to serve personalized ads. ByNeel does not control or access this data. Google's AdMob privacy policy applies. You can upgrade to the premium version to remove ads entirely.
        </p>

        <h2>8. No Analytics or Tracking</h2>
        <p>
          We do not use analytics services, crash reporting, or any tracking technology to monitor how you use CookBook AI. We do not know how many recipes you save, which features you use, or any other usage information. Your app behavior is completely private.
        </p>

        <h2>9. Policy Updates</h2>
        <p>
          This privacy policy may be updated occasionally. Updates will be posted here with an updated "Last updated" date. Your continued use of CookBook AI indicates acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy or how CookBook AI handles your data, please contact us at{' '}
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
