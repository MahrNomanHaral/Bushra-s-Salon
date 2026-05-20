import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone, MessageSquare } from 'lucide-react';
import { BRAND } from '../constants';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Transformations', path: '/transformations' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Store', path: '/shop' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isOverHero = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          'transition-all duration-500 ease-out',
          isOverHero
            ? 'bg-gradient-to-b from-luxury-black/50 via-luxury-black/15 to-transparent border-b border-white/[0.06]'
            : 'bg-white/95 backdrop-blur-md border-b border-luxury-nude/40 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div
            className={cn(
              'flex items-center justify-between gap-4 transition-[padding] duration-500',
              isScrolled ? 'py-3' : 'py-4 md:py-5'
            )}
          >
            <Link
              to="/"
              className="group shrink-0 min-w-0"
              aria-label={`${BRAND.name} home`}
            >
              <span
                className={cn(
                  'block font-serif text-xl sm:text-2xl tracking-[0.12em] transition-colors duration-300',
                  isOverHero
                    ? 'text-white group-hover:text-luxury-gold'
                    : 'text-luxury-black group-hover:text-luxury-gold'
                )}
              >
                {BRAND.name}
              </span>
              <span
                className={cn(
                  'hidden sm:block text-[9px] uppercase tracking-[0.28em] font-medium mt-0.5 transition-colors',
                  isOverHero ? 'text-white/55' : 'text-luxury-black/45'
                )}
              >
                Salon & Training Center
              </span>
            </Link>

            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'relative px-3 py-2 text-[11px] uppercase tracking-[0.14em] font-medium transition-colors duration-300',
                      isOverHero
                        ? isActive
                          ? 'text-luxury-gold'
                          : 'text-white/85 hover:text-white'
                        : isActive
                          ? 'text-luxury-gold'
                          : 'text-luxury-black/75 hover:text-luxury-black'
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-luxury-gold" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className={cn(
                  'hidden md:inline-flex items-center gap-2 text-[11px] tracking-wide transition-colors',
                  isOverHero
                    ? 'text-white/70 hover:text-white'
                    : 'text-luxury-black/55 hover:text-luxury-gold'
                )}
              >
                <Phone size={14} strokeWidth={1.5} />
                <span className="hidden 2xl:inline">{BRAND.phone}</span>
              </a>
              <Link
                to="/booking"
                className={cn(
                  'inline-flex items-center justify-center px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] font-semibold transition-all duration-300',
                  isOverHero
                    ? 'bg-luxury-gold text-luxury-black hover:bg-white hover:text-luxury-black'
                    : 'bg-luxury-black text-white hover:bg-luxury-gold hover:text-luxury-black'
                )}
              >
                Book Appointment
              </Link>
            </div>

            <button
              type="button"
              className={cn(
                'lg:hidden p-2 -mr-1 transition-colors',
                isOverHero ? 'text-white' : 'text-luxury-black'
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-luxury-black/40 backdrop-blur-[2px] lg:hidden z-40"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-luxury-cream shadow-2xl lg:hidden z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-luxury-nude/50">
                <div>
                  <span className="font-serif text-xl tracking-wide text-luxury-black">
                    {BRAND.name}
                  </span>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-luxury-black/40 mt-0.5">
                    Salon & Training Center
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-luxury-black/60 hover:text-luxury-black"
                  aria-label="Close menu"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        className={cn(
                          'block py-3.5 text-sm uppercase tracking-[0.16em] font-medium border-b border-luxury-nude/60 transition-colors',
                          location.pathname === link.path
                            ? 'text-luxury-gold'
                            : 'text-luxury-black/80 hover:text-luxury-gold'
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <Link
                  to="/booking"
                  className="mt-8 block w-full text-center bg-luxury-black text-white py-4 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-300"
                >
                  Book Appointment
                </Link>

                <div className="flex items-center justify-center gap-8 pt-10">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luxury-black/50 hover:text-luxury-gold transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                    className="text-luxury-black/50 hover:text-luxury-gold transition-colors"
                    aria-label="Call salon"
                  >
                    <Phone size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href="#"
                    className="text-luxury-black/50 hover:text-luxury-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
