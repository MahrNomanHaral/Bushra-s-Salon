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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center group">
          <span className="font-serif text-2xl md:text-3xl tracking-widest text-luxury-black group-hover:text-luxury-gold transition-colors">
            {BRAND.name.toUpperCase()}
          </span>
          <span className="text-[10px] tracking-[0.3em] font-light uppercase text-luxury-gold-muted">
            SALON & TRAINING CENTER
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-luxury-gold",
                location.pathname === link.path ? "text-luxury-gold" : "text-luxury-black"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-luxury-black text-luxury-beige px-6 py-2 text-sm uppercase tracking-widest hover:bg-luxury-gold transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-luxury-black p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg uppercase tracking-[0.2em] font-serif border-b border-luxury-beige pb-2",
                    location.pathname === link.path ? "text-luxury-gold font-semibold" : "text-luxury-black"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-luxury-gold text-white text-center py-4 rounded-sm tracking-[0.2em] uppercase font-bold"
              >
                Schedule Appointment
              </Link>
              
              <div className="flex justify-center space-x-6 pt-4">
                <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-luxury-gold">
                  <MessageSquare size={24} />
                </a>
                <a href={`tel:${BRAND.phone}`} className="text-luxury-gold">
                  <Phone size={24} />
                </a>
                <a href="#" className="text-luxury-gold">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
