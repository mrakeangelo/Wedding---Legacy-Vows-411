import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGift, FiHeart, FiMapPin, FiHome } = FiIcons;

const Registry = () => {
  const registryItems = [
    {
      icon: FiHome,
      title: "Our New Home Fund",
      description: "Help us create a warm, welcoming space where our blended family can grow and make memories together.",
      link: "#",
      type: "fund"
    },
    {
      icon: FiMapPin,
      title: "Honeymoon Adventures",
      description: "A contribution toward our honeymoon in Tuscany, where we'll celebrate our new beginning in the Italian countryside.",
      link: "#",
      type: "fund"
    },
    {
      icon: FiHeart,
      title: "Family Experience Fund",
      description: "Help us create special memories with all four children—from camping trips to museum visits to family game nights.",
      link: "#",
      type: "fund"
    },
    {
      icon: FiGift,
      title: "Traditional Registry",
      description: "For those who prefer traditional gifts, we've created a registry with items to help us build our home together.",
      link: "#",
      type: "registry"
    }
  ];

  const charityOptions = [
    {
      name: "Grief Support Center",
      description: "Supporting families through loss and helping them heal",
      link: "#"
    },
    {
      name: "Children of Divorce Support",
      description: "Providing resources and counseling for children navigating family changes",
      link: "#"
    },
    {
      name: "Blended Family Network",
      description: "Creating resources and community for blended families",
      link: "#"
    }
  ];

  return (
    <section id="registry" className="section-spacing bg-pearl-white dark:bg-deep-slate">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiGift} className="w-16 h-16 mx-auto mb-6 text-slate-blue dark:text-dusk-lavender" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-blue dark:text-dusk-lavender mb-6">
            Our Legacy List
          </h2>
          <p className="text-lg text-warm-gray dark:text-champagne max-w-2xl mx-auto leading-relaxed">
            Your presence at our wedding is the greatest gift we could ask for. 
            If you'd like to contribute to our new chapter, here are some meaningful ways to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {registryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-deep-slate/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-slate-blue/10 dark:bg-dusk-lavender/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-blue/20 dark:group-hover:bg-dusk-lavender/20 transition-colors duration-300">
                  <SafeIcon icon={item.icon} className="w-8 h-8 text-slate-blue dark:text-dusk-lavender" />
                </div>
                <h3 className="font-serif text-xl font-medium text-slate-blue dark:text-dusk-lavender mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-gray dark:text-champagne leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              
              <div className="text-center">
                <button className="btn-primary w-full">
                  Contribute
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-champagne/20 to-dusk-lavender/20 dark:from-deep-slate/50 to-slate-blue/30 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-medium text-slate-blue dark:text-dusk-lavender mb-4">
              Give Back in Our Honor
            </h3>
            <p className="text-warm-gray dark:text-champagne leading-relaxed max-w-2xl mx-auto">
              If you'd prefer to make a donation in our honor, these organizations hold special meaning for us 
              as they support families going through transitions similar to our own journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {charityOptions.map((charity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-deep-slate/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-serif text-lg font-medium text-slate-blue dark:text-dusk-lavender mb-2">
                  {charity.name}
                </h4>
                <p className="text-warm-gray dark:text-champagne text-sm mb-4">
                  {charity.description}
                </p>
                <button className="btn-secondary text-sm">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-medium text-slate-blue dark:text-dusk-lavender mb-4">
              A Heartfelt Thank You
            </h3>
            <p className="text-warm-gray dark:text-champagne leading-relaxed">
              Whether you choose to give a gift, make a donation, or simply celebrate with us, 
              your love and support mean everything to us. We're so grateful to have you in our lives 
              as we begin this beautiful new chapter together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;