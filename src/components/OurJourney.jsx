import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiCalendar, FiHeart } = FiIcons;

const OurJourney = () => {
  const journeySteps = [
    {
      title: "Sarah's Path",
      subtitle: "A Journey of Healing",
      content: "After losing my beloved husband of 15 years, I thought my heart would never heal. Through grief counseling, the love of my children, and quiet moments of reflection, I slowly learned that love doesn't end—it transforms. I discovered that honoring my past doesn't mean I can't embrace a beautiful future.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: FiHeart,
      year: "2019-2022"
    },
    {
      title: "Michael's Journey",
      subtitle: "Finding Peace After Change",
      content: "My divorce was difficult, but it taught me invaluable lessons about communication, compromise, and what truly matters in a partnership. I spent time focusing on being the best father I could be to my two daughters and learning to trust again. Sometimes the end of one chapter is the beginning of something even more beautiful.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: FiMapPin,
      year: "2020-2023"
    },
    {
      title: "Our Meeting",
      subtitle: "When Hearts Recognize Home",
      content: "We met at a community volunteer event, both of us there with our children. There was no lightning bolt, no dramatic moment—just a gentle recognition that we understood each other's journey. Our friendship grew slowly, built on shared values, mutual respect, and the understanding that love the second time around is different—deeper, more intentional, more grateful.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: FiCalendar,
      year: "Spring 2023"
    }
  ];

  return (
    <section id="journey" className="section-spacing bg-pearl-white dark:bg-deep-slate">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-blue dark:text-dusk-lavender mb-6">
            Our Journey Here
          </h2>
          <p className="text-lg text-warm-gray dark:text-champagne max-w-2xl mx-auto leading-relaxed">
            Every love story is unique, but second chances at love carry a special kind of wisdom. 
            Here's how our paths led us to each other.
          </p>
        </motion.div>

        <div className="space-y-20">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-champagne dark:bg-dusk-lavender rounded-full flex items-center justify-center shadow-lg">
                    <SafeIcon icon={step.icon} className="w-8 h-8 text-slate-blue dark:text-deep-slate" />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="text-center lg:text-left">
                  <div className="text-sm font-medium text-soft-clay dark:text-champagne mb-2">
                    {step.year}
                  </div>
                  <h3 className="font-serif text-3xl font-medium text-slate-blue dark:text-dusk-lavender mb-2">
                    {step.title}
                  </h3>
                  <h4 className="text-xl text-warm-gray dark:text-champagne font-medium mb-4">
                    {step.subtitle}
                  </h4>
                </div>

                <p className="text-warm-gray dark:text-champagne leading-relaxed text-lg">
                  {step.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-champagne/10 dark:bg-dusk-lavender/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-medium text-slate-blue dark:text-dusk-lavender mb-4">
              A Love Built on Understanding
            </h3>
            <p className="text-warm-gray dark:text-champagne leading-relaxed text-lg">
              We know that blending families isn't always easy, but we're committed to creating 
              a home filled with love, respect, and patience. Our children—Emma (16), Jacob (14), 
              Sophie (12), and Lily (9)—are the heart of our new beginning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurJourney;