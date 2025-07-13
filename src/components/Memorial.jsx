import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiStar } = FiIcons;

const Memorial = () => {
  const memorialPersons = [
    {
      name: "David Thompson",
      relation: "Sarah's First Husband",
      years: "1975 - 2019",
      message: "David was Sarah's first love and the father of Emma and Jacob. His kindness, humor, and dedication to family shaped the woman Sarah became. While he is deeply missed, we know he would be happy to see Sarah find love and happiness again. His memory lives on in his children and in the love Sarah learned from him.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Margaret Wilson",
      relation: "Michael's Mother",
      years: "1945 - 2021",
      message: "Margaret raised Michael to be the loving, compassionate man he is today. She always told him that love was the most important thing in life, and that it was never too late to find happiness. Though she never got to meet Sarah, we know she would have welcomed her with open arms and loved her children as her own grandchildren.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-dusk-lavender/10 to-champagne/10 dark:from-deep-slate/50 to-slate-blue/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiStar} className="w-16 h-16 mx-auto mb-6 text-slate-blue dark:text-dusk-lavender" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-blue dark:text-dusk-lavender mb-6">
            In Loving Memory
          </h2>
          <p className="text-lg text-warm-gray dark:text-champagne max-w-2xl mx-auto leading-relaxed">
            We carry the love and memories of those who shaped us into who we are today. 
            Though they cannot be with us in person, their spirit and love are woven into our story.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {memorialPersons.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-32 h-32 rounded-full object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-champagne dark:bg-dusk-lavender rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiHeart} className="w-4 h-4 text-slate-blue dark:text-deep-slate" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-serif text-2xl font-medium text-slate-blue dark:text-dusk-lavender mb-2">
                    {person.name}
                  </h3>
                  <p className="text-warm-gray dark:text-champagne font-medium mb-1">
                    {person.relation}
                  </p>
                  <p className="text-soft-clay dark:text-champagne text-sm mb-4">
                    {person.years}
                  </p>
                  <p className="text-warm-gray dark:text-champagne leading-relaxed">
                    {person.message}
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
          className="text-center mt-16"
        >
          <div className="bg-white/80 dark:bg-deep-slate/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-medium text-slate-blue dark:text-dusk-lavender mb-4">
              Love Never Ends
            </h3>
            <p className="text-warm-gray dark:text-champagne leading-relaxed text-lg mb-6">
              We believe that love doesn't end with death—it transforms and continues to guide us. 
              The love we learned from those we've lost has made us better partners, better parents, 
              and better people. They are with us in spirit as we celebrate this new beginning.
            </p>
            <blockquote className="text-slate-blue dark:text-dusk-lavender italic font-serif text-lg">
              "Those we love never go away. They walk beside us every day, 
              unseen, unheard, but always near, still loved, still missed, and very dear."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Memorial;