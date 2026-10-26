import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://byneel.com'),
  title: 'ByNeel — AI-powered creative studio',
  description: 'Portfolio of ByNeel: apps, AI tools, games, motion design videos, AI images, 3D architecture and writing, all built with AI by one person.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          <FloatingParticles />
          <Navbar />
          <main className="pt-16 relative z-[2]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
