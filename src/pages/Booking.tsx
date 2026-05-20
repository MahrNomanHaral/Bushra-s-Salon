import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { SERVICES, BRAND } from '../constants';
import { Check, Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Book Your Appointment</title>
        <meta name="description" content="Reserve your luxury beauty session at Bushra's Salon. Simple, fast online booking for hair, skin, and bridal treatments in Lahore." />
      </Helmet>
      <section className="pt-40 pb-20 bg-luxury-beige min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 text-black">
            <h1 className="text-4xl md:text-6xl font-serif mb-4 italic">Reserve Your Experience</h1>
            <p className="text-luxury-black/60 font-light">Select your preferred time and service for an elite transformation.</p>
          </div>

          <div className="bg-white p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* User Info */}
                    <div className="space-y-8">
                      <h3 className="font-serif text-xl border-b border-luxury-nude pb-2">Client Details</h3>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40 flex items-center gap-2">
                          <User size={12} /> Full Name
                        </label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full border-b border-luxury-nude py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light bg-transparent" 
                          placeholder="Your Name" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40 flex items-center gap-2">
                          <Phone size={12} /> Phone Number
                        </label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full border-b border-luxury-nude py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light bg-transparent" 
                          placeholder="03XX XXXXXXX" 
                        />
                      </div>
                    </div>

                    {/* Appointmnet Info */}
                    <div className="space-y-8">
                      <h3 className="font-serif text-xl border-b border-luxury-nude pb-2">Treatment Details</h3>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40 flex items-center gap-2">
                          Service Collection
                        </label>
                        <select 
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full border-b border-luxury-nude py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light bg-transparent appearance-none"
                        >
                          <option value="">Select Service</option>
                          {SERVICES.map(s => (
                            <option key={s.id} value={s.name}>{s.name}</option>
                          ))}
                          <optgroup label="Other">
                            <option value="Consultation">Consultation</option>
                          </optgroup>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40 flex items-center gap-2">
                            <Calendar size={12} /> Date
                          </label>
                          <input 
                            required
                            type="date" 
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                            className="w-full border-b border-luxury-nude py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light bg-transparent" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40 flex items-center gap-2">
                            <Clock size={12} /> Time
                          </label>
                          <select 
                            required
                            value={formData.time}
                            onChange={(e) => setFormData({...formData, time: e.target.value})}
                            className="w-full border-b border-luxury-nude py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light bg-transparent appearance-none"
                          >
                            <option value="">Select Time</option>
                            {['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'].map(t => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-10">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/40 flex items-center gap-2">
                      <MessageSquare size={12} /> Special Notes (Optional)
                    </label>
                    <textarea 
                      rows={3} 
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full border-b border-luxury-nude py-3 focus:outline-none focus:border-luxury-gold transition-colors text-sm font-light bg-transparent resize-none" 
                      placeholder="Tell us about any specific requirements or preferences..." 
                    />
                  </div>

                  <div className="pt-10 flex flex-col items-center">
                    <button 
                      disabled={isSubmitting}
                      className="group relative w-full md:w-auto bg-luxury-black text-white px-20 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-luxury-gold transition-all duration-500 overflow-hidden"
                    >
                      <span className={isSubmitting ? 'opacity-0' : 'opacity-100'}>
                        {isSubmitting ? 'Processing...' : 'Confirm Appointment'}
                      </span>
                      {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        </div>
                      )}
                    </button>
                    <p className="mt-6 text-[10px] text-luxury-black/30 text-center uppercase tracking-widest">
                      By confirming, you agree to our 24h cancellation policy.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-24 h-24 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-luxury-gold/20">
                    <Check size={48} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-serif mb-4 italic">Appointment Reserved</h2>
                  <p className="text-luxury-black/60 font-light mb-10 max-w-md mx-auto">
                    Thank you, {formData.name}. Your session for {formData.service} on {formData.date} at {formData.time} has been requested. We will contact you shortly to confirm.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="border border-luxury-black px-10 py-4 uppercase tracking-widest text-[10px] font-bold hover:bg-luxury-black hover:text-white transition-all"
                    >
                      Book Another
                    </button>
                    <a 
                      href={`https://wa.me/${BRAND.whatsapp}?text=Hi, I just booked an appointment for ${formData.service} on ${formData.date} at ${formData.time}. My name is ${formData.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-10 py-4 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <MessageSquare size={16} /> Confirm via WhatsApp
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Visual element */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-luxury-gold/5 -mb-32 -mr-32 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-luxury-gold/5 -mt-32 -ml-32 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
