/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'motion/react';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HairServices from './pages/HairServices';
import SkinServices from './pages/SkinServices';
import BeautyBodyServices from './pages/BeautyBodyServices';
import Transformations from './pages/Transformations';
import Pricing from './pages/Pricing';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

import { BRAND } from './constants';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Helmet 
            defaultTitle={`${BRAND.name} | ${BRAND.tagline}`}
            titleTemplate={`%s | ${BRAND.name}`}
          >
            <meta name="description" content="Experience premium beauty at Bushra's Luxury Salon in Lahore. Expert hair styling, skincare, and bridal transformations." />
            <meta name="keywords" content="Best salon in Lahore, Luxury salon Lahore, Bridal makeup Lahore, Facial services Lahore, Hair salon Lahore, Spa services Lahore" />
          </Helmet>
          
          <ScrollToTop />
          <Navbar />
          
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/hair-services" element={<HairServices />} />
                <Route path="/skin-services" element={<SkinServices />} />
                <Route path="/beauty-body-services" element={<BeautyBodyServices />} />
                <Route path="/hair" element={<Navigate to="/hair-services" replace />} />
                <Route path="/skin" element={<Navigate to="/skin-services" replace />} />
                <Route path="/beauty-body" element={<Navigate to="/beauty-body-services" replace />} />
                <Route path="/transformations" element={<Transformations />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
              </Routes>
            </AnimatePresence>
          </main>
          
          <Footer />
          <WhatsAppWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}
