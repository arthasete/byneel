'use client';

import Link from 'next/link';

export default function EarthPulsePrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm text-[#888] mb-2">Last updated: February 2026</p>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#EDEDED]">
        EarthPulse — Privacy Policy
      </h1>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-8 text-sm font-medium text-[#EDEDED]">
        EarthPulse monitors seismic and environmental events using your device sensors. All data is processed and stored locally. No account, no cloud transmission, no personal data collection.
      </div>

      <div className="prose prose-invert prose-p:text-[#888] prose-li:text-[#888] prose-headings:text-[#EDEDED] max-w-none">
        <h2>1. Local Sensor Processing</h2>
        <p>
          EarthPulse processes accelerometer, gyroscope, pressure, and other environmental sensor data entirely on your device. Sensor readings are analyzed locally using machine learning models to detect seismic events and environmental changes. Raw sensor data is never transmitted to any server or external service.
        </p>

        <h2>2. GPS for Event Geolocation</h2>
        <p>
          EarthPulse uses your device's GPS to record the geographic location of detected seismic and environmental events. GPS data is:
        </p>
        <ul>
          <li>Processed entirely on your device</li>
          <li>Stored locally in a SQLite database</li>
          <li>Never transmitted to ByNeel or any server</li>
          <li>Used only to create a local map of events detected on your device</li>
        </ul>

        <h2>3. Local Event Logging</h2>
        <p>
          All detected seismic events, environmental readings, and alerts are logged locally on your device in a SQLite database. Event logs include timestamps, sensor readings, and GPS coordinates. This data remains on your device and is never synced, backed up, or transmitted to any server. You can delete event logs at any time.
        </p>

        <h2>4. No Account Required</h2>
        <p>
          EarthPulse does not require an account, login, or registration. We do not ask for your name, email, phone number, or any personal identification. All sensor data and events are tied to your device only.
        </p>

        <h2>5. No Data Transmission</h2>
        <p>
          EarthPulse does not transmit any sensor readings, GPS coordinates, event data, or personal information to any server. The app is completely offline. No internet connection is required for core functionality (though optional network features, if enabled, may require connection).
        </p>

        <h2>6. Sensor Permissions</h2>
        <p>
          EarthPulse requests the following device permissions:
        </p>
        <ul>
          <li><strong>Accelerometer & Gyroscope:</strong> To detect ground motion and vibrations for seismic event detection.</li>
          <li><strong>Pressure & Humidity Sensors:</strong> To monitor environmental changes.</li>
          <li><strong>Location (GPS):</strong> To record the geographic location of detected events.</li>
        </ul>
        <p>
          All sensor data is processed locally only. We do not access or transmit any sensor readings to external services.
        </p>

        <h2>7. No Analytics or Tracking</h2>
        <p>
          We do not use analytics, crash reporting, or any tracking services. We do not know how many events you detect, where you are located, or any other usage information. Your sensor data and activity are completely private.
        </p>

        <h2>8. Policy Updates</h2>
        <p>
          This privacy policy may be updated occasionally. Updates will be posted here with an updated "Last updated" date. Your continued use of EarthPulse indicates acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy or how EarthPulse handles your data, please contact us at{' '}
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
