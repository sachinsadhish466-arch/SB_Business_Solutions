import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import ThemeProviders from '@/components/site/ThemeProviders';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563EB',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sbbusinesssolutions.com'),
  title: {
    default: 'SB Business Solutions | AI-Powered Digital Transformation & Business Consulting',
    template: '%s | SB Business Solutions',
  },
  description:
    'SB Business Solutions helps businesses transform digitally through AI-powered solutions, intelligent automation, websites, mobile apps, digital marketing, analytics, and strategic business consulting. Innovating Today. Empowering Tomorrow.',
  keywords: [
    'AI solutions', 'digital transformation', 'business consulting', 'web development', 'mobile app development',
    'AI chatbots', 'AI agents', 'automation', 'digital marketing', 'SEO services', 'data analytics',
    'ERP development', 'CRM development', 'business intelligence', 'SB Business Solutions',
  ],
  authors: [{ name: 'SB Business Solutions' }],
  creator: 'SB Business Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sbbusinesssolutions.com',
    siteName: 'SB Business Solutions',
    title: 'SB Business Solutions | AI-Powered Digital Transformation',
    description:
      'Your Digital Growth Partner. AI solutions, intelligent automation, web & mobile apps, digital marketing, analytics, and business consulting under one roof.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SB Business Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SB Business Solutions | AI-Powered Digital Transformation',
    description:
      'Your Digital Growth Partner. AI solutions, automation, web & mobile apps, marketing, analytics, and business consulting.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://sbbusinesssolutions.com' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SB Business Solutions',
  slogan: 'Innovating Today. Empowering Tomorrow.',
  description:
    'Digital Transformation and AI Solutions company helping startups, SMEs, and enterprises grow digitally.',
  founders: [{ '@type': 'Person', name: 'Edison M' }, { '@type': 'Person', name: 'Sachin S' }],
  employees: [
    { '@type': 'Person', name: 'Edison M', jobTitle: 'Founder & Managing Director' },
    { '@type': 'Person', name: 'Sachin S', jobTitle: 'CEO' },
    { '@type': 'Person', name: 'Shalini S', jobTitle: 'CTO' },
    { '@type': 'Person', name: 'Hari Shankar', jobTitle: 'Sales & Marketing Head' },
  ],
  email: 'sachinsadhish466@gmail.com',
  telephone: '+91 6369271486',
  url: 'https://sbbusinesssolutions.com',
  sameAs: [
    'https://facebook.com/sbbusinesssolutions',
    'https://instagram.com/sbbusinesssolutions',
    'https://linkedin.com/company/sbbusinesssolutions',
    'https://youtube.com/@sbbusinesssolutions',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-inter)' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
