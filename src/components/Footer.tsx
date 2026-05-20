import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { BRAND } from '../constants';

export function Footer() {
  return (
    <footer className="bg-luxury-black text-luxury-beige pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl tracking-widest leading-none">{BRAND.name.toUpperCase()}</span>
            <span className="text-[10px] tracking-[0.3em] font-light uppercase text-luxury-gold mt-1">
              SALON & TRAINING CENTER
            </span>
          </Link>
          <p className="text-luxury-nude/70 text-sm leading-relaxed font-light">
            Providing premium beauty experiences since our inception. We blend international standards with Pakistani luxury.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-luxury-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-luxury-gold transition-colors"><Facebook size={20} /></a>
            <a href={`https://wa.me/${BRAND.whatsapp}`} className="hover:text-luxury-gold transition-colors"><MessageSquare size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg tracking-wider mb-6 text-white italic">Explore</h4>
          <ul className="space-y-4 text-sm font-light text-luxury-nude/60">
            <li><Link to="/about" className="hover:text-luxury-gold transition-colors tracking-widest uppercase text-[11px]">Our Story</Link></li>
            <li><Link to="/services" className="hover:text-luxury-gold transition-colors tracking-widest uppercase text-[11px]">Expert Services</Link></li>
            <li><Link to="/transformations" className="hover:text-luxury-gold transition-colors tracking-widest uppercase text-[11px]">Transformations</Link></li>
            <li><Link to="/pricing" className="hover:text-luxury-gold transition-colors tracking-widest uppercase text-[11px]">Pricing Guide</Link></li>
            <li><Link to="/shop" className="hover:text-luxury-gold transition-colors tracking-widest uppercase text-[11px]">Luxury Shop</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-serif text-lg tracking-wider mb-6 text-white italic">Specialties</h4>
          <ul className="space-y-4 text-sm font-light text-luxury-nude/60">
            <li><Link to="/hair" className="hover:text-luxury-gold transition-colors tracking-widest uppercase text-[11px]">Hair Artistry</Link></li>
            <li><Link to="/skin" className="hover:text-luxury-gold transition-colors tracking-widest uppercase text-[11px]">Skin Therapy</Link></li>
            <li><Link to="/beauty-body" className="hover:text-luxury-gold transition-colors tracking-widest uppercase text-[11px]">Bridal & Spa</Link></li>
            <li><Link to="/booking" className="hover:text-luxury-gold transition-colors tracking-widest uppercase text-[11px]">Book Session</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-lg tracking-wider mb-6 text-white italic">Contact Us</h4>
          <div className="space-y-4 text-sm font-light text-luxury-nude/60">
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-luxury-gold shrink-0" />
              <span>{BRAND.address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-luxury-gold shrink-0" />
              <span>{BRAND.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-luxury-gold shrink-0" />
              <span>info@bushrasalon.pk</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] font-light uppercase text-luxury-nude/30">
        <p>&copy; {new Date().getFullYear()} {BRAND.name.toUpperCase()}. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Designed & Developed for Luxury</p>
      </div>
    </footer>
  );
}
