import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';

export default function Shop() {
  return (
    <PageTransition>
      <Helmet>
        <title>Luxury Beauty Boutique</title>
        <meta name="description" content="Our exclusive luxury beauty shop is coming soon. Stay tuned for premium products and essentials curated by Bushra's Salon." />
      </Helmet>
      <section className="min-h-screen flex items-center justify-center bg-luxury-black text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Products" 
            className="w-full h-full object-cover blur-md"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <span className="text-luxury-gold uppercase tracking-[0.6em] text-xs mb-8 block font-bold">The Boutique</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-10 italic">Coming Soon</h1>
            <div className="w-40 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl font-light text-luxury-nude/70 leading-relaxed mb-16 italic"
          >
            “Our luxury beauty store is currently being curated with premium products and exclusive essentials. Something beautiful is coming soon — stay connected for the grand launch.”
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email for early access" 
              className="flex-1 bg-white/5 border border-white/20 px-6 py-4 text-sm font-light text-white focus:outline-none focus:border-luxury-gold transition-colors backdrop-blur-sm"
            />
            <button className="bg-luxury-gold text-white px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white hover:text-black transition-all">
              Notify Me
            </button>
          </motion.form>
        </div>
      </section>
    </PageTransition>
  );
}
