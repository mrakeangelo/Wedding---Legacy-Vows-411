import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMail, FiPhone } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-slate dark:bg-slate-blue text-champagne py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-serif text-xl font-medium text-dusk-lavender mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-dusk-lavender" />
                <a 
                  href="mailto:sarah.michael.wedding@email.com" 
                  className="hover:text-white transition-colors duration-200"
                >
                  sarah.michael.wedding@email.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-dusk-lavender" />
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-white transition-colors duration-200"
                >
                  (123) 456-7890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Wedding Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-serif text-xl font-medium text-dusk-lavender mb-4">
              Wedding Details
            </h3>
            <div className="space-y-2">
              <p className="font-medium">September 15, 2024</p>
              <p>4:00 PM Ceremony</p>
              <p>Riverside Gardens</p>
              <p className="text-sm">Peaceful Valley, CA</p>
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="font-serif text-xl font-medium text-dusk-lavender mb-4">
              With Gratitude
            </h3>
            <p className="leading-relaxed">
              Thank you for being part of our journey. Your love and support mean everything to us 
              as we begin this beautiful new chapter together.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-dusk-lavender/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <SafeIcon icon={FiHeart} className="w-5 h-5 text-dusk-lavender" />
              <span className="font-serif text-lg">Sarah & Michael</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <p className="text-sm mb-2">
                Legacy Vows – A Second Marriage Template by{' '}
                <a 
                  href="https://mrakeagency.com" 
                  className="text-dusk-lavender hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mrake Agency
                </a>
              </p>
              <p className="text-xs opacity-75">
                © {currentYear} All rights reserved
              </p>
            </motion.div>
          </div>
        </div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-dusk-lavender/20"
        >
          <blockquote className="font-serif text-lg italic text-dusk-lavender">
            "Love renews. Always."
          </blockquote>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;