import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, Users, Sparkles, Check, Calendar, Clock, User, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, SERVICES, TESTIMONIALS } from '../constants';
import { PageTransition } from '../components/PageTransition';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{BRAND.tagline}</title>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover brightness-[0.45] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-luxury-black/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.6em] text-xs md:text-sm font-bold mb-8 block drop-shadow-lg">
              Est. in the Heart of Lahore
            </span>
            <h1 className="text-6xl md:text-9xl font-serif text-white mb-10 leading-[0.9] italic drop-shadow-2xl">
              Luxury Beauty,<br/>
              <span className="text-luxury-gold not-italic">Timeless Confidence</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
              <a 
                href="#book-now" 
                className="bg-luxury-gold text-white px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white hover:text-luxury-black transition-all duration-500 w-full md:w-auto shadow-2xl"
              >
                Reserve Your Glow
              </a>
              <Link 
                to="/services" 
                className="border border-white/30 backdrop-blur-md text-white px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white hover:text-luxury-black transition-all duration-500 w-full md:w-auto"
              >
                Our Collection
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/60 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">The Selection</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-none">Curated Luxury <br/><span className="italic text-luxury-gold-muted">Treatments</span></h2>
            </div>
            <Link to="/services" className="mt-8 md:mt-0 group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-luxury-gold pb-2 hover:text-luxury-gold transition-colors">
              All Specialties <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-luxury-beige/30 p-4 border border-luxury-nude/20 hover:border-luxury-gold/30 transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-luxury-gold transition-colors">{service.name}</h3>
                  <p className="text-luxury-black/50 text-xs mb-6 font-light uppercase tracking-widest">{service.category} therapy</p>
                  <p className="text-luxury-black/60 text-sm mb-8 line-clamp-2 italic">"{service.description}"</p>
                  <div className="flex justify-between items-center">
                    <span className="text-luxury-gold font-bold tracking-widest text-[11px] uppercase">{service.price}</span>
                    <Link to="/booking" className="text-[9px] uppercase tracking-[0.2em] font-bold border border-luxury-black/10 px-4 py-2 hover:bg-luxury-black hover:text-white transition-all">
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-luxury-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="z-10 relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=1000" 
                alt="Elite Artistry" 
                className="w-full aspect-[3/4] object-cover shadow-2xl contrast-125"
              />
              <div className="absolute -bottom-10 -right-10 bg-luxury-gold p-10 hidden md:block">
                <span className="text-white text-5xl font-serif">12+</span>
                <p className="text-white/80 text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">The Bushra Signature</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight italic">Beyond the <span className="text-luxury-gold not-italic">Mirror</span>.</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h4 className="text-luxury-gold font-serif text-2xl">Elite Craftsmanship</h4>
                  <p className="text-luxury-nude/50 text-sm font-light leading-relaxed">
                    Our artisans don't just follow trends—they set them. Each touch is a calculated move toward perfection.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-luxury-gold font-serif text-2xl">Global Standards</h4>
                  <p className="text-luxury-nude/50 text-sm font-light leading-relaxed">
                    We import the world's most exclusive clinical-grade products to the heart of Lahore.
                  </p>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-white/10 flex flex-wrap gap-12">
                {[
                  { icon: Users, label: 'Happy Clients', val: '15,000+' },
                  { icon: Sparkles, label: 'Experts', val: '25+' },
                  { icon: Star, label: 'Award Winning', val: 'Top 10' }
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <s.icon className="text-luxury-gold" size={24} />
                    <div>
                      <div className="text-white font-serif text-xl">{s.val}</div>
                      <div className="text-luxury-nude/30 text-[9px] uppercase tracking-widest">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book-now" className="py-32 bg-luxury-beige">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl overflow-hidden bg-white">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Quick Reservation</span>
              <h2 className="text-4xl font-serif mb-8 italic">The Luxury Waitlist</h2>
              <p className="text-luxury-black/60 text-sm font-light leading-relaxed mb-10">
                Secure your preferred time slot effortlessly. Our concierge will contact you within 30 minutes for confirmation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-luxury-black/70">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Phone size={14} className="text-luxury-gold" />
                  </div>
                  <span>{BRAND.phone}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-luxury-black/70">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Clock size={14} className="text-luxury-gold" />
                  </div>
                  <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-luxury-black p-12 md:p-16 text-white relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 flex items-center gap-2"><User size={12}/> Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light" 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 flex items-center gap-2"><Phone size={12}/> Phone</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light" 
                        placeholder="03XX XXXXXXX" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 flex items-center gap-2"><Calendar size={12}/> Date</label>
                        <input 
                          required
                          type="date" 
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light" 
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 flex items-center gap-2"><Clock size={12}/> Time</label>
                        <select 
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light appearance-none text-white"
                        >
                          <option value="" className="bg-luxury-black">Time</option>
                          {['10 AM', '12 PM', '2 PM', '4 PM', '6 PM'].map(t => <option key={t} value={t} className="bg-luxury-black">{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-luxury-gold text-white py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white hover:text-luxury-black transition-all duration-500 mt-8 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Requesting...' : 'Request Appointment'}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mb-6">
                      <Check size={32} />
                    </div>
                    <h3 className="text-3xl font-serif mb-4">Request Sent</h3>
                    <p className="text-white/60 text-sm font-light mb-8">We'll call you shortly for confirmation.</p>
                    <button onClick={() => setIsSuccess(false)} className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold border-b border-luxury-gold pb-1">
                      New Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Reviews */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic text-luxury-gold">Client Reflections</h2>
        </div>
        
        <div className="relative">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ 
              repeat: Infinity, 
              duration: 40, 
              ease: "linear" 
            }}
            className="flex gap-10 whitespace-nowrap px-10"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div 
                key={idx}
                className="w-[400px] p-12 bg-luxury-beige/30 border border-luxury-nude/30 inline-block shrink-0 whitespace-normal"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < t.rating ? "#d4af37" : "none"} color="#d4af37" />)}
                </div>
                <p className="text-lg font-serif italic mb-8 leading-relaxed text-luxury-black/80">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-luxury-gold" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-black">{t.name}</div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold-muted mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="h-[600px] w-full relative">
        <iframe 
          title="Bushra's Salon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.378943719003!2d74.3168864!3d31.513511799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919016335f67b57%3A0xc346ecb75431665a!2sBushra's%20Beauty%20Saloon%20%26%20Training%20Center!5e0!3m2!1sen!2s!4v1716124500000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          className="grayscale contrast-125 brightness-90 shadow-inner"
        />
        <div className="absolute top-10 left-10 hidden md:block bg-white/95 p-10 shadow-2xl backdrop-blur-md max-w-sm">
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="text-luxury-gold shrink-0" size={24} />
            <div>
              <h4 className="font-serif text-2xl mb-2 italic">Visit Us</h4>
              <p className="text-xs text-luxury-black/60 leading-relaxed tracking-wider">{BRAND.address}</p>
            </div>
          </div>
          <a 
            href="https://maps.app.goo.gl/YourGoogleMapsLink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-center bg-luxury-black text-white py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>
    </PageTransition>
  );
}

