import { Service, Testimonial, Transformation } from './types';

export const BRAND = {
  name: "Bushra's",
  fullName: "Bushra's Beauty Saloon & Training Center",
  tagline: "Luxury Beauty, Timeless Confidence",
  address: "Near Lahore Broast Bashir Street Number 8, Wahdat Rd, Karamabad Stop Rehmanpura Colony, Lahore, 52254",
  phone: "0321 4489719",
  whatsapp: "923214489719", // Format for link
  workingHours: {
    weekdays: "10:00 AM - 08:00 PM",
    weekend: "11:00 AM - 07:00 PM",
  }
};

export const SERVICES: Service[] = [
  // Hair
  {
    id: 'h1',
    name: "Luxury Hair Cut",
    description: "Expert styling and precision cutting for a fresh, sophisticated look.",
    price: "From 3,000 PKR",
    duration: "45 mins",
    category: 'hair',
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'h2',
    name: "Keratin Treatment",
    description: "Eliminate frizz and add brilliant shine with our premium keratin treatment.",
    price: "From 15,000 PKR",
    duration: "180 mins",
    category: 'hair',
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
  },
  // Skin
  {
    id: 's1',
    name: "Hydra Facial",
    description: "Multi-step treatment that cleanses, exfoliates, and extracts to clarify skin.",
    price: "From 8,000 PKR",
    duration: "60 mins",
    category: 'skin',
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 's2',
    name: "Whitening Therapy",
    description: "Advanced skin brightening treatment for an even, radiant complexion.",
    price: "From 6,000 PKR",
    duration: "75 mins",
    category: 'skin',
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
  },
  // Makeup/Body
  {
    id: 'm1',
    name: "Signature Bridal Makeup",
    description: "The ultimate luxury bridal experience for your most special day.",
    price: "Custom Quote",
    duration: "240 mins",
    category: 'makeup',
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Sara Ahmed",
    text: "The best salon experience I've had in Lahore. The staff is so professional and the environment is truly luxurious.",
    rating: 5,
    role: "Regular Client"
  },
  {
    id: '2',
    name: "Fatima Khan",
    text: "Their Hydra Facial is magic! My skin has never looked better. Highly recommend Bushra's for skincare.",
    rating: 5,
    role: "Happy Bride"
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 't1',
    title: "Signature Hair Color",
    before: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1519735817352-ad9a9962243d?auto=format&fit=crop&q=80&w=800",
    category: "Hair"
  }
];
