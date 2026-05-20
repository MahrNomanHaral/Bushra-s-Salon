import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { Mail, MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import { BRAND } from '../constants';

export default function Contact() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact & Directions</title>
        <meta name="description" content="Contact Bushra's Beauty Saloon & Training Center in Lahore. Find our address, phone number, and working hours. Get expert beauty advice today." />
      </Helmet>
      <section className="pt-40 pb-20 bg-luxury-beige">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-luxury-gold uppercase tracking-[0.4em] text-xs mb-6 block font-bold"
            >
              Contact Us
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-10 italic"
            >
              Get in Touch
            </motion.h1>
            
            <div className="space-y-10 mt-16">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Location</h4>
                  <p className="text-sm font-light text-luxury-black/60 leading-relaxed">{BRAND.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Phone</h4>
                  <p className="text-sm font-light text-luxury-black/60 leading-relaxed">{BRAND.phone}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Hours</h4>
                  <p className="text-sm font-light text-luxury-black/60 leading-relaxed mb-1">Weekdays: {BRAND.workingHours.weekdays}</p>
                  <p className="text-sm font-light text-luxury-black/60 leading-relaxed">Weekend: {BRAND.workingHours.weekend}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              <a 
                href={`https://wa.me/${BRAND.whatsapp}`} 
                className="flex items-center gap-3 bg-luxury-gold text-white px-8 py-4 rounded-sm text-xs uppercase tracking-widest hover:scale-105 transition-transform"
              >
                <MessageSquare size={18} /> WhatsApp
              </a>
              <a 
                href={`tel:${BRAND.phone}`} 
                className="flex items-center gap-3 border border-luxury-black text-luxury-black px-8 py-4 rounded-sm text-xs uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-all"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 shadow-2xl border border-luxury-nude"
          >
            <h3 className="font-serif text-3xl mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40">Full Name</label>
                  <input type="text" className="w-full border-b border-luxury-nude py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light" placeholder="Bushra" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40">Email</label>
                  <input type="email" className="w-full border-b border-luxury-nude py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light" placeholder="example@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40">Subject</label>
                <input type="text" className="w-full border-b border-luxury-nude py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light" placeholder="General Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40">Message</label>
                <textarea rows={4} className="w-full border border-luxury-nude p-4 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light resize-none px-0 border-x-0 border-t-0" placeholder="How Can we help you?" />
              </div>
              <button className="w-full bg-luxury-black text-white py-5 uppercase tracking-widest text-[10px] font-bold hover:bg-luxury-gold transition-colors mt-4 shadow-xl">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full grayscale contrast-125 brightness-110">
        <iframe 
          title="Bushra's Salon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.378943719003!2d74.3168864!3d31.513511799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919016335f67b57%3A0xc346ecb75431665a!2sBushra's%20Beauty%20Saloon%20%26%20Training%20Center!5e0!3m2!1sen!2s!4v1716124500000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </PageTransition>
  );
}
