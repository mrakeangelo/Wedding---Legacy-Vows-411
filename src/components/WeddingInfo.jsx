import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiClock, FiHeart, FiUsers } = FiIcons;

const WeddingInfo = () => {
  const weddingDetails = [
    {
      icon: FiClock,
      title: "Ceremony",
      details: "4:00 PM",
      description: "Intimate ceremony with family and close friends"
    },
    {
      icon: FiMapPin,
      title: "Location",
      details: "Riverside Gardens",
      description: "1234 Harmony Lane, Peaceful Valley, CA 90210"
    },
    {
      icon: FiHeart,
      title: "Reception",
      details: "5:30 PM",
      description: "Dinner, dancing, and celebration"
    },
    {
      icon: FiUsers,
      title: "Dress Code",
      details: "Garden Elegant",
      description: "Semi-formal attire in soft, natural colors"
    }
  ];

  return (
    <section id="wedding" className="section-spacing bg-gradient-to-br from-champagne/20 to-dusk-lavender/20 dark:from-deep-slate to-slate-blue/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-blue dark:text-dusk-lavender mb-6">
            Wedding Details
          </h2>
          <p className="text-lg text-warm-gray dark:text-champagne max-w-2xl mx-auto leading-relaxed">
            Join us for an intimate celebration of love, family, and new beginnings. 
            Your presence is the greatest gift we could ask for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {weddingDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-deep-slate/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-blue/10 dark:bg-dusk-lavender/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={detail.icon} className="w-6 h-6 text-slate-blue dark:text-dusk-lavender" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium text-slate-blue dark:text-dusk-lavender mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-lg font-medium text-warm-gray dark:text-champagne mb-2">
                    {detail.details}
                  </p>
                  <p className="text-warm-gray dark:text-champagne">
                    {detail.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-medium text-slate-blue dark:text-dusk-lavender mb-4">
              A Note About Our Blended Family
            </h3>
            <p className="text-warm-gray dark:text-champagne leading-relaxed max-w-3xl mx-auto">
              We are so excited to celebrate with you as we unite not just as a couple, but as a family. 
              Our children will play special roles in our ceremony, and we welcome all the little ones 
              who will be joining us. This is a celebration of love in all its forms—romantic, 
              familial, and the chosen family we create with friends like you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="font-serif text-lg font-medium text-slate-blue dark:text-dusk-lavender mb-3">
                Parking & Accessibility
              </h4>
              <p className="text-warm-gray dark:text-champagne">
                Ample parking available on-site. The venue is fully wheelchair accessible. 
                Please let us know if you have any specific accessibility needs.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-lg font-medium text-slate-blue dark:text-dusk-lavender mb-3">
                Weather Plan
              </h4>
              <p className="text-warm-gray dark:text-champagne">
                Our ceremony will be held outdoors with a beautiful indoor backup plan. 
                We'll update you via email if weather requires us to move indoors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;