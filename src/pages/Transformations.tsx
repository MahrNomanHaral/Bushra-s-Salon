import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { TRANSFORMATIONS, BRAND } from '../constants';

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600',
];

export default function Transformations() {
  return (
    <PageTransition>
      <Helmet>
        <title>Client Transformations & Gallery</title>
        <meta name="description" content="Witness the real-life magic of Bushra's Salon. Browse our portfolio of before-and-after hair color, skin treatment, and bridal makeover results." />
      </Helmet>
      <section className="pt-40 pb-20 bg-luxury-beige text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-luxury-gold uppercase tracking-[0.4em] text-xs mb-6 block"
          >
            The Results
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8 italic"
          >
            Transformations
          </motion.h1>
          <p className="text-luxury-black/60 font-light leading-relaxed">Witness the artistry of our elite team through these real client results.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-32">
          {TRANSFORMATIONS.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <span className="text-luxury-gold text-xs uppercase tracking-widest mb-4 block font-bold">{t.category}</span>
                <h2 className="text-4xl font-serif mb-6">{t.title}</h2>
                <p className="text-luxury-black/50 font-light leading-relaxed">
                  A bespoke treatment tailored to enhance natural beauty and restore confidence. Every transformation is a signature of {BRAND.name}.
                </p>
              </div>
              
              <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-6">
                <div className="relative group flex-1">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={t.before} alt="Before" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-3 py-1 backdrop-blur-sm">Before</div>
                </div>
                
                <div className="relative group flex-1">
                  <div className="aspect-[4/5] overflow-hidden border-2 border-luxury-gold/20">
                    <img src={t.after} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute top-4 left-4 bg-luxury-gold text-white text-[10px] uppercase tracking-widest px-3 py-1 shadow-lg">After</div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Mock Grid for Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {GALLERY_IMAGES.map((src, i) => (
              <motion.div 
                key={src}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-luxury-nude overflow-hidden group"
              >
                <img 
                  src={src} 
                  alt="Gallery" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
