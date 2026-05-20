import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';

const beautyServices = [
  { name: "Full Makeup", desc: "For weddings, parties, and corporate events.", price: "8,000" },
  { name: "Bridal Makeup", desc: "The ultimate signature bridal experience.", price: "Custom" },
  { name: "Waxing", desc: "Professional full-body hair removal.", price: "2,000" },
  { name: "Manicure", desc: "Elite nail care and hand massage.", price: "2,500" },
  { name: "Pedicure", desc: "Luxury foot therapy and aesthetic care.", price: "3,500" },
  { name: "Luxury Spa", desc: "Full body relaxation in a serene environment.", price: "6,000" },
  { name: "Body Massage", desc: "Therapeutic massage for mind and body.", price: "5,000" },
  { name: "Threading", desc: "Precise facial hair grooming.", price: "500" },
  { name: "Nail Art", desc: "Creative bespoke nail designs.", price: "1,500" }
];

export default function BeautyBodyServices() {
  return (
    <PageTransition>
      <Helmet>
        <title>Beauty, Body & Bridal Spa</title>
        <meta name="description" content="Indulge in luxury manicures, pedicures, body massages, and elite bridal makeup. The ultimate pampering experience in the heart of Lahore." />
      </Helmet>
      <section className="pt-40 pb-20 bg-[#fdfaf3] text-luxury-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=2000" alt="Beauty" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl md:text-8xl font-serif mb-6 italic text-luxury-black">Beauty & Body</motion.h1>
          <p className="max-w-2xl text-luxury-black/70 font-light text-lg">Indulge in the finest grooming rituals and transformative makeovers.</p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16">
          {beautyServices.map((service, idx) => (
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

      <section className="py-20 bg-luxury-gold text-white text-center">
        <h2 className="text-3xl font-serif mb-10 italic">Be The Star Of The Night</h2>
        <Link to="/booking" className="bg-luxury-black text-white px-12 py-5 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
          Book Your Session
        </Link>
      </section>
    </PageTransition>
  );
}
