export type ServiceItem = {
  name: string;
  description: string;
  price: string;
};

export type ServiceCategoryConfig = {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroVariant: 'black' | 'beige' | 'cream';
  ctaTitle: string;
  ctaLabel: string;
  services: ServiceItem[];
};

export const ROUTES = {
  hairServices: '/hair-services',
  skinServices: '/skin-services',
  beautyBodyServices: '/beauty-body-services',
} as const;

export const HAIR_SERVICES_CATEGORY: ServiceCategoryConfig = {
  slug: ROUTES.hairServices,
  title: 'Hair Artistry',
  subtitle: 'Couture hair design and advanced clinical treatments tailored to your signature look.',
  metaTitle: 'Luxury Hair Artistry & Styling',
  metaDescription:
    'Premium hair services in Lahore. Keratin treatments, expert coloring, bridal styling, and precision haircuts using global techniques.',
  heroImage:
    'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=2000',
  heroVariant: 'black',
  ctaTitle: 'Experience Global Excellence',
  ctaLabel: 'Book Your Stylist',
  services: [
    { name: 'Hair Cut', description: 'Expert precision cutting for any style.', price: '3,000' },
    { name: 'Hair Styling', description: 'Red carpet ready styling for special occasions.', price: '2,500' },
    { name: 'Hair Color', description: 'Custom blended highlights and full color.', price: '10,000' },
    { name: 'Hair Treatment', description: 'Deep conditioning for health and shine.', price: '4,000' },
    { name: 'Keratin', description: 'Smooth, frizz-free hair for months.', price: '15,000' },
    { name: 'Protein Treatment', description: 'Strengthening treatment for damaged hair.', price: '8,000' },
    { name: 'Hair Spa', description: 'Ultimate relaxation and scalp therapy.', price: '5,000' },
    { name: 'Bridal Hair Styling', description: 'High-end bridal look for your big day.', price: '8,000' },
  ],
};

export const SKIN_SERVICES_CATEGORY: ServiceCategoryConfig = {
  slug: ROUTES.skinServices,
  title: 'Skin Therapy',
  subtitle: 'Harnessing advanced clinical techniques for timeless radiance and refined complexion.',
  metaTitle: 'Advanced Clinical Skin Therapy',
  metaDescription:
    'Reveal your natural radiance with Hydra Facials, whitening treatments, and anti-aging therapies at Bushra\'s Salon Lahore.',
  heroImage:
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2000',
  heroVariant: 'beige',
  ctaTitle: 'Reveal Your Inner Glow',
  ctaLabel: 'Schedule Clinical Facial',
  services: [
    { name: 'Signature Facial', description: 'Classic luxury facial for immediate glow.', price: '5,000' },
    { name: 'Hydra Facial', description: 'Advanced vortex infusion skin therapy.', price: '8,000' },
    { name: 'Skin Polish', description: 'Exfoliating treatment for silky smoothness.', price: '4,000' },
    { name: 'Whitening Treatment', description: 'Brightening therapy for even skin tone.', price: '6,000' },
    { name: 'Acne Treatment', description: 'Clinical solution for clear, calm skin.', price: '7,000' },
    { name: 'Cleanup', description: 'Essential maintenance for healthy skin.', price: '3,500' },
    { name: 'Anti-aging Treatment', description: 'Youth-reviving clinical facial therapy.', price: '12,000' },
    { name: 'Skin Therapy', description: 'Customized treatment for specific skin needs.', price: 'Varies' },
  ],
};

export const BEAUTY_BODY_SERVICES_CATEGORY: ServiceCategoryConfig = {
  slug: ROUTES.beautyBodyServices,
  title: 'Beauty & Body',
  subtitle: 'Indulge in the finest grooming rituals, spa therapies, and transformative makeovers.',
  metaTitle: 'Beauty, Body & Bridal Spa',
  metaDescription:
    'Luxury manicures, pedicures, body massages, and elite bridal makeup. The ultimate pampering experience in Lahore.',
  heroImage:
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=2000',
  heroVariant: 'cream',
  ctaTitle: 'Be The Star Of The Night',
  ctaLabel: 'Book Your Session',
  services: [
    { name: 'Full Makeup', description: 'For weddings, parties, and corporate events.', price: '8,000' },
    { name: 'Bridal Makeup', description: 'The ultimate signature bridal experience.', price: 'Custom' },
    { name: 'Waxing', description: 'Professional full-body hair removal.', price: '2,000' },
    { name: 'Manicure', description: 'Elite nail care and hand massage.', price: '2,500' },
    { name: 'Pedicure', description: 'Luxury foot therapy and aesthetic care.', price: '3,500' },
    { name: 'Luxury Spa', description: 'Full body relaxation in a serene environment.', price: '6,000' },
    { name: 'Body Massage', description: 'Therapeutic massage for mind and body.', price: '5,000' },
    { name: 'Threading', description: 'Precise facial hair grooming.', price: '500' },
    { name: 'Nail Art', description: 'Creative bespoke nail designs.', price: '1,500' },
  ],
};
