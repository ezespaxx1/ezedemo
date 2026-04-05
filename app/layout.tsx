import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

import { siteMeta } from '@/content/wedding-content';
import '../styles/globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  display: 'swap'
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    images: [{ url: siteMeta.ogImage }]
  },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${manrope.variable} bg-cream font-sans text-charcoal antialiased`}>
        {children}
      </body>
    </html>
  );
}
