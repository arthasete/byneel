import { HeroSection } from '@/components/sections/HeroSection';
import { TapSection } from '@/components/sections/TapSection';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { PlatformSection } from '@/components/sections/PlatformSection';
import { AboutSection } from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TapSection />
      <BentoGrid />
      <PlatformSection />
      <AboutSection />
    </>
  );
}
