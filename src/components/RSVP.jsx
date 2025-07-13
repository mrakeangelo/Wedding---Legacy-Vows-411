import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiCheck, FiHeart } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: '',
    dietaryRestrictions: '',
    message: '',
    songRequest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        guests: '1',
        attendance: '',
        dietaryRestrictions: '',
        message: '',
        songRequest: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="section-spacing bg-gradient-to-br from-champagne/20 to-dusk-lavender/20 dark:from-deep-slate/50 to-slate-blue/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-12 shadow-xl">
              <SafeIcon icon={FiCheck} className="w-16 h-16 mx-auto mb-6 text-green-500" />
              <h2 className="font-serif text-3xl font-medium text-slate-blue dark:text-dusk-lavender mb-4">
                Thank You!
              </h2>
              <p className="text-warm-gray dark:text-champagne text-lg leading-relaxed">
                We've received your RSVP and are so excited to celebrate with you. 
                We'll be in touch with any additional details closer to the wedding date.
              </p>
              <div className="mt-8 p-6 bg-champagne/20 dark:bg-dusk-lavender/20 rounded-xl">
                <p className="text-slate-blue dark:text-dusk-lavender font-medium">
                  "Thank you for being part of our story. Your presence makes our joy complete."
                </p>
                <p className="text-warm-gray dark:text-champagne mt-2 italic">
                  — Sarah & Michael
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section-spacing bg-gradient-to-br from-champagne/20 to-dusk-lavender/20 dark:from-deep-slate/50 to-slate-blue/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiMail} className="w-16 h-16 mx-auto mb-6 text-slate-blue dark:text-dusk-lavender" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-blue dark:text-dusk-lavender mb-6">
            Please RSVP
          </h2>
          <p className="text-lg text-warm-gray dark:text-champagne max-w-2xl mx-auto leading-relaxed">
            We hope you can join us for our special day. Please let us know if you'll be able to attend 
            by August 15th, 2024.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guests" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="form-input w-full"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="attendance" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                    Will you attend? *
                  </label>
                  <select
                    id="attendance"
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full"
                  >
                    <option value="">Please select</option>
                    <option value="yes">Yes, I'll be there!</option>
                    <option value="no">Unfortunately, I can't attend</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="dietaryRestrictions" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                  Dietary Restrictions or Allergies
                </label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="form-input w-full"
                  placeholder="Please let us know about any dietary needs"
                />
              </div>

              <div>
                <label htmlFor="songRequest" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                  Song Request for Reception
                </label>
                <input
                  type="text"
                  id="songRequest"
                  name="songRequest"
                  value={formData.songRequest}
                  onChange={handleInputChange}
                  className="form-input w-full"
                  placeholder="Any special songs you'd like to hear?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                  Message of Support or Blessing
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="form-input w-full resize-none"
                  placeholder="We'd love to hear your thoughts, blessings, or well-wishes for our new chapter together..."
                />
              </div>

              <div className="text-center pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-3 text-lg"
                >
                  Send RSVP
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="bg-white/80 dark:bg-deep-slate/80 backdrop-blur-sm rounded-xl p-6">
              <SafeIcon icon={FiHeart} className="w-8 h-8 mx-auto mb-3 text-slate-blue dark:text-dusk-lavender" />
              <p className="text-warm-gray dark:text-champagne">
                Having trouble with the form? You can also RSVP by email at{' '}
                <a href="mailto:sarah.michael.wedding@email.com" className="text-slate-blue dark:text-dusk-lavender hover:underline">
                  sarah.michael.wedding@email.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;