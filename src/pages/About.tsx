import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../constants';
import { PageTransition } from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>Our Story & Heritage</title>
        <meta name="description" content="Discover the legacy of Bushra's Salon. From our mission to our elite training center, learn how we've become Lahore's premier luxury beauty destination." />
      </Helmet>
      {/* Banner */}
      <section className="pt-40 pb-20 bg-luxury-beige text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-luxury-gold uppercase tracking-[0.4em] text-xs mb-6 block"
          >
            The Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8 italic"
          >
            Our Story
          </motion.h1>
          <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1542838634-b2585f096238?auto=format&fit=crop&q=80&w=1000" 
              alt="Artisan at work" 
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-luxury-black capitalize">Manifesting Excellence in Beauty</h2>
            <p className="text-luxury-black/70 font-light leading-relaxed mb-6">
              Founded under the vision of elite beauty standards, {BRAND.fullName} has grown to become a cornerstone of luxury in Lahore. We believe that beauty is an art form, and every client is a unique canvas.
            </p>
            <p className="text-luxury-black/70 font-light leading-relaxed mb-10">
              Our journey began with a simple mission: to provide a sanctuary where elegance meets expertise. Today, our training center empowers a new generation of stylists with the same philosophy of perfection.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-luxury-gold font-serif text-xl mb-2">Our Mission</h4>
                <p className="text-xs text-luxury-black/50 font-light leading-relaxed uppercase tracking-wider">To redefine luxury through personalized artistry and world-class service.</p>
              </div>
              <div>
                <h4 className="text-luxury-gold font-serif text-xl mb-2">Our Vision</h4>
                <p className="text-xs text-luxury-black/50 font-light leading-relaxed uppercase tracking-wider">To be the global benchmark for Pakistani luxury salon experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-luxury-beige">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl font-serif">Core Philosophies</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Honesty', desc: 'Transparent consultations and results-driven treatments.' },
            { title: 'Artistry', desc: 'Every service is performed with precision and creative flair.' },
            { title: 'Luxury', desc: 'Uncompromising quality in every touch, product, and interaction.' }
          ].map((v, i) => (
            <div key={i} className="bg-white p-12 text-center shadow-sm hover:shadow-xl transition-shadow duration-500">
              <span className="text-6xl font-serif text-luxury-gold/10 absolute -top-4 left-1/2 -translate-x-1/2 select-none">
                0{i+1}
              </span>
              <h3 className="text-2xl font-serif mb-4 relative z-10">{v.title}</h3>
              <p className="text-sm font-light text-luxury-black/60 leading-relaxed relative z-10">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Training Center info */}
      <section className="py-32 bg-luxury-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-4xl font-serif mb-8 text-luxury-gold italic">Training the Next Generation</h2>
            <p className="text-luxury-nude/60 font-light mb-8 leading-relaxed">
              Bushra's is not just a salon; it's a legacy. Our specialized training center offers professional courses in makeup, hair styling, and skincare for aspiring beauty experts.
            </p>
            <ul className="space-y-4 mb-10">
              {['Professional Makeup Artistry', 'Advanced Hair Design', 'Clinical Skincare Certification', 'Salon Management'].map((course, i) => (
                <li key={i} className="flex items-center gap-3 text-sm tracking-widest font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  {course.toUpperCase()}
                </li>
              ))}
            </ul>
            <a href={`tel:${BRAND.phone}`} className="inline-block border border-luxury-gold text-luxury-gold px-12 py-4 text-xs uppercase tracking-widest hover:bg-luxury-gold hover:text-white transition-all">
              Inquire About Courses
            </a>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=800" 
              alt="Training center" 
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
