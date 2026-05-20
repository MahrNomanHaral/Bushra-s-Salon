'use client';

import { motion } from 'motion/react';
import type { ServiceCategoryConfig } from '../data/serviceCategories';
import { cn } from '../lib/utils';

type ServiceCategoryPageProps = {
  config: ServiceCategoryConfig;
  bookingHref?: string;
};

const heroStyles = {
  black: {
    section: 'bg-luxury-black text-white',
    title: 'text-luxury-gold',
    subtitle: 'text-luxury-nude/70',
    image: 'grayscale opacity-30',
  },
  beige: {
    section: 'bg-[#e3ded4] text-luxury-black',
    title: 'text-luxury-black',
    subtitle: 'text-luxury-black/70',
    image: 'opacity-20',
  },
  cream: {
    section: 'bg-[#fdfaf3] text-luxury-black',
    title: 'text-luxury-black',
    subtitle: 'text-luxury-black/70',
    image: 'opacity-10',
  },
} as const;

const ctaStyles = {
  black: {
    section: 'bg-luxury-beige text-luxury-black',
    button: 'bg-luxury-black text-white hover:bg-luxury-gold hover:text-luxury-black',
  },
  beige: {
    section: 'bg-luxury-black text-white',
    button: 'bg-luxury-gold text-white hover:bg-white hover:text-luxury-black',
  },
  cream: {
    section: 'bg-luxury-gold text-white',
    button: 'bg-luxury-black text-white hover:bg-white hover:text-luxury-black',
  },
} as const;

export function ServiceCategoryPage({
  config,
  bookingHref = '/booking',
}: ServiceCategoryPageProps) {
  const hero = heroStyles[config.heroVariant];
  const cta = ctaStyles[config.heroVariant];

  return (
    <>
      <section
        className={cn(
          'pt-36 sm:pt-40 pb-16 sm:pb-20 relative overflow-hidden',
          hero.section
        )}
      >
        <div className="absolute inset-0">
          <img
            src={config.heroImage}
            alt=""
            className={cn('w-full h-full object-cover', hero.image)}
          />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.28em] text-luxury-gold mb-4 font-medium"
          >
            Bushra&apos;s Luxury Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className={cn(
              'text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-5 sm:mb-6 italic leading-[1.05]',
              hero.title
            )}
          >
            {config.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn('max-w-2xl font-light text-base sm:text-lg', hero.subtitle)}
          >
            {config.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif italic text-luxury-black mb-3">
              Curated Treatments
            </h2>
            <p className="text-sm text-luxury-black/50 font-light tracking-wide max-w-xl mx-auto">
              Artisan-crafted services with transparent pricing. All treatments include a
              personalized consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {config.services.map((service, idx) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col bg-luxury-cream border border-luxury-nude/80 p-6 sm:p-8 hover:border-luxury-gold/40 hover:shadow-[0_12px_40px_rgba(26,26,26,0.06)] transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl font-serif text-luxury-black group-hover:text-luxury-gold transition-colors duration-300">
                    {service.name}
                  </h3>
                  <span
                    className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-luxury-gold-muted font-semibold"
                    aria-hidden
                  >
                    ★
                  </span>
                </div>
                <p className="text-sm text-luxury-black/55 font-light leading-relaxed flex-grow mb-6">
                  {service.description}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-luxury-gold font-medium pt-4 border-t border-luxury-nude/60">
                  From {service.price} PKR
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={cn('py-16 sm:py-20 text-center', cta.section)}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif mb-8 sm:mb-10 italic">
            {config.ctaTitle}
          </h2>
          <a
            href={bookingHref}
            className={cn(
              'inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold transition-colors duration-300',
              cta.button
            )}
          >
            {config.ctaLabel}
          </a>
        </div>
      </section>
    </>
  );
}
