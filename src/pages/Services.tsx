import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { ROUTES } from '../data/serviceCategories';

export default function Services() {
  const categories = [
    {
      title: 'Hair Services',
      path: ROUTES.hairServices,
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1000',
      description: 'Precision cutting, couture styling, and advanced color treatments tailored to your unique identity.'
    },
    {
      title: 'Skin Services',
      path: ROUTES.skinServices,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000',
      description: 'Clinical-grade facials and rejuvenating skin therapies designed to reveal your inner radiance.'
    },
    {
      title: 'Beauty & Body',
      path: ROUTES.beautyBodyServices,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000',
      description: 'Ultimate bridal makeovers, relaxing spa treatments, and professional grooming rituals.'
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Elite Beauty Services</title>
        <meta name="description" content="Explore our curated collection of luxury hair, skin, and body treatments. From precision cuts to advanced clinical facials in Lahore." />
      </Helmet>
      <section className="pt-40 pb-20 bg-luxury-beige">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6 italic"
          >
            Elite Experiences
          </motion.h1>
          <p className="max-w-2xl mx-auto text-luxury-black/60 font-light tracking-wide">
            Select a sanctuary of service to explore our artisan-crafted beauty treatments.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.path}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 px-8 py-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-serif tracking-widest uppercase text-sm">
                    View Treatments
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-serif mb-4 text-center">{cat.title}</h3>
              <p className="text-sm font-light text-luxury-black/60 leading-relaxed text-center mb-8 px-4">
                {cat.description}
              </p>
              <Link 
                to={cat.path} 
                className="mx-auto mt-auto border-b border-luxury-gold pb-1 text-[10px] uppercase tracking-[0.4em] font-bold hover:text-luxury-gold transition-colors"
              >
                Enter Collection
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Reminder */}
      <section className="py-20 bg-luxury-cream border-t border-luxury-nude text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-serif mb-8 italic">Unsure which treatment fits you?</h2>
          <Link to="/contact" className="text-luxury-black/70 hover:text-luxury-gold transition-colors underline underline-offset-8 decoration-luxury-gold/30">
            Schedule an expert consultation
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
