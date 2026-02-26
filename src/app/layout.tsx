import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ByNeel — Applications mobiles & Outils IA',
  description: 'ByNeel crée des applications mobiles et outils IA innovants pour iOS, Android et Desktop. Développement assisté par IA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <FloatingParticles />
        <Navbar />
        <main className="pt-16 relative z-[2]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
