import type { ReactNode } from 'react';
import Link from 'next/link';
import { BRAND } from '@/src/constants';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Transformations', href: '/transformations' },
  { name: 'Contact', href: '/contact' },
];

export function ServiceCategoryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-luxury-nude/40 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="group shrink-0">
            <span className="block font-serif text-xl sm:text-2xl tracking-[0.12em] text-luxury-black group-hover:text-luxury-gold transition-colors">
              {BRAND.name}
            </span>
            <span className="hidden sm:block text-[9px] uppercase tracking-[0.28em] text-luxury-black/45 mt-0.5">
              Salon & Training Center
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[11px] uppercase tracking-[0.14em] font-medium text-luxury-black/75 hover:text-luxury-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] font-semibold bg-luxury-black text-white hover:bg-luxury-gold hover:text-luxury-black transition-colors"
          >
            Book Appointment
          </Link>
        </nav>
      </header>

      <main className="flex-grow pt-0">{children}</main>

      <footer className="bg-luxury-black text-luxury-beige py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <div>
            <p className="font-serif text-lg tracking-widest">{BRAND.name.toUpperCase()}</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold mt-1">
              Salon & Training Center
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.2em] text-luxury-nude/60">
            <Link href="/hair-services" className="hover:text-luxury-gold transition-colors">
              Hair
            </Link>
            <Link href="/skin-services" className="hover:text-luxury-gold transition-colors">
              Skin
            </Link>
            <Link href="/beauty-body-services" className="hover:text-luxury-gold transition-colors">
              Beauty & Body
            </Link>
            <Link href="/booking" className="hover:text-luxury-gold transition-colors">
              Book
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
