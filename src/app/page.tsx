import { HeroSection } from '@/components/sections/HeroSection';
import { TapSection } from '@/components/sections/TapSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { PlatformSection } from '@/components/sections/PlatformSection';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { AboutSection } from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <BentoGrid />
      <TechStackSection />
      <TapSection />
      <BlogPreview />
      <PlatformSection />
      <AboutSection />
    </>
  );
}
