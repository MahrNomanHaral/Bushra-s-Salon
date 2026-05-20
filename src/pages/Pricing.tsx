import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';

const priceGroups = [
  {
    category: "Hair Artistry",
    services: [
      { name: "Executive Haircut", price: "3,000", time: "45m" },
      { name: "Couture Styling", price: "2,500", time: "60m" },
      { name: "Signature Color", price: "10,000+", time: "120m" },
      { name: "Keratin Elite", price: "15,000+", time: "180m" }
    ]
  },
  {
    category: "Skin Therapy",
    services: [
      { name: "Clinical Hydra Facial", price: "8,000", time: "60m" },
      { name: "Luminous Skin Polish", price: "4,000", time: "45m" },
      { name: "Advanced Whitening", price: "6,000", time: "75m" },
      { name: "Consultation Facial", price: "3,500", time: "30m" }
    ]
  },
  {
    category: "Grooming & Spa",
    services: [
      { name: "Royal Manicure", price: "2,500", time: "40m" },
      { name: "Sovereign Pedicure", price: "3,500", time: "50m" },
      { name: "Luxury Body Massage", price: "5,000", time: "60m" },
      { name: "Elite Bridal Makeup", price: "Custom", time: "240m" }
    ]
  }
];

export default function Pricing() {
  return (
    <PageTransition>
      <Helmet>
        <title>Pricing & Packages</title>
        <meta name="description" content="View our transparent luxury pricing for hair, skin, and body treatments. Expert care and premium results at competitive luxury rates in Lahore." />
      </Helmet>
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-6 italic"
            >
              Investment in Beauty
            </motion.h1>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-luxury-black/60 font-light italic">
              Transparent luxury pricing for your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {priceGroups.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-luxury-beige p-10 border border-luxury-nude/50 flex flex-col"
              >
                <h2 className="text-2xl font-serif mb-10 text-center tracking-widest uppercase text-luxury-gold">{group.category}</h2>
                <div className="space-y-8 flex-1">
                  {group.services.map((s, i) => (
                    <div key={i} className="flex justify-between items-start border-b border-luxury-nude pb-4">
                      <div>
                        <h4 className="font-serif text-lg leading-tight mb-1">{s.name}</h4>
                        <span className="text-[10px] uppercase tracking-widest text-luxury-black/30 font-bold">{s.time}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold tracking-widest">PKR {s.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/booking" className="mt-12 text-center py-4 bg-luxury-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold transition-colors">
                  Reserve Session
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxury-cream text-center border-t border-luxury-nude">
        <p className="text-xs uppercase tracking-[0.5em] text-luxury-gold-muted mb-4 font-bold">Note</p>
        <p className="text-sm font-light text-luxury-black/60 max-w-2xl mx-auto italic">
          Prices may vary based on hair length, specific skin needs, and artisan level. Please confirm during your initial consultation.
        </p>
      </section>
    </PageTransition>
  );
}
