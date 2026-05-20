export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'hair' | 'skin' | 'body' | 'makeup';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  role?: string;
}

export interface Booking {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}

export interface Transformation {
  id: string;
  title: string;
  before: string;
  after: string;
  category: string;
}
