import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';

const skinServices = [
  { name: "Signature Facial", desc: "Classic luxury facial for immediate glow.", price: "5,000" },
  { name: "Hydra Facial", desc: "Advanced vortex infusion skin therapy.", price: "8,000" },
  { name: "Skin Polish", desc: "Exfoliating treatment for silky smoothness.", price: "4,000" },
  { name: "Whitening Treatment", desc: "Brightening therapy for even skin tone.", price: "6,000" },
  { name: "Acne Treatment", desc: "Clinical solution for clear, calm skin.", price: "7,000" },
  { name: "Cleanup", desc: "Essential maintenance for healthy skin.", price: "3,500" },
  { name: "Anti-aging Treatment", desc: "Youth-reviving clinical facial therapy.", price: "12,000" },
  { name: "Skin Therapy", desc: "Customized treatment for specific skin needs.", price: "Varies" }
];

export default function SkinServices() {
  return (
    <PageTransition>
      <Helmet>
        <title>Advanced Clinical Skin Therapy</title>
        <meta name="description" content="Reveal your natural radiance with our advanced Hydra Facials, whitening treatments, and anti-aging therapies at Bushra's Salon Lahore." />
      </Helmet>
      <section className="pt-40 pb-20 bg-[#e3ded4] text-luxury-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2000" alt="Skin" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl md:text-8xl font-serif mb-6 italic text-luxury-black">Skin Therapy</motion.h1>
          <p className="max-w-2xl text-luxury-black/70 font-light text-lg">Harnessing advanced clinical techniques for timeless radiance.</p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16">
          {skinServices.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group border-b border-luxury-nude pb-10"
            >
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-2xl font-serif group-hover:text-luxury-gold transition-colors">{service.name}</h3>
                <span className="text-luxury-gold-muted font-medium tracking-widest text-sm uppercase">From {service.price} PKR</span>
              </div>
              <p className="text-sm text-luxury-black/50 font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-luxury-black text-white text-center">
        <h2 className="text-3xl font-serif mb-10 italic">Reveal Your Inner Glow</h2>
        <Link to="/booking" className="bg-luxury-gold text-white px-12 py-5 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
          Schedule Clinical Facial
        </Link>
      </section>
    </PageTransition>
  );
}
