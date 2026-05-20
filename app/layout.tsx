import type { Metadata } from 'next';
import './globals.css';
import { BRAND } from '@/src/constants';

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    'Experience premium beauty at Bushra\'s Luxury Salon in Lahore. Expert hair styling, skincare, and bridal transformations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
