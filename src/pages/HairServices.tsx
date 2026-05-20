import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const hairServices = [
  { name: "Hair Cut", desc: "Expert precision cutting for any style.", price: "3,000" },
  { name: "Hair Styling", desc: "Red carpet ready styling for special occasions.", price: "2,500" },
  { name: "Hair Color", desc: "Custom blended highlights and full color.", price: "10,000" },
  { name: "Hair Treatment", desc: "Deep conditioning for health and shine.", price: "4,000" },
  { name: "Keratin", desc: "Smooth, frizz-free hair for months.", price: "15,000" },
  { name: "Protein Treatment", desc: "Strengthening treatment for damaged hair.", price: "8,000" },
  { name: "Hair Spa", desc: "Ultimate relaxation and scalp therapy.", price: "5,000" },
  { name: "Bridal Hair Styling", desc: "High-end bridal look for your big day.", price: "8,000" }
];

export default function HairServices() {
  return (
    <PageTransition>
      <Helmet>
        <title>Luxury Hair Artistry & Styling</title>
        <meta name="description" content="Premium hair services in Lahore. Keratin treatments, expert coloring, bridal styling, and precision haircuts using global techniques." />
      </Helmet>
      <section className="pt-40 pb-20 bg-luxury-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=2000" alt="Hair" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl md:text-8xl font-serif mb-6 italic text-luxury-gold">Hair Artistry</motion.h1>
          <p className="max-w-2xl text-luxury-nude/70 font-light text-lg">Couture hair design and advanced clinical treatments.</p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16">
          {hairServices.map((service, idx) => (
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

      <section className="py-20 bg-luxury-beige text-center">
        <h2 className="text-3xl font-serif mb-10 italic">Experience Global Excellence</h2>
        <Link to="/booking" className="bg-luxury-black text-white px-12 py-5 uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors">
          Book Your Stylist
        </Link>
      </section>
    </PageTransition>
  );
}
