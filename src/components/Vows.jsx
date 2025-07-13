import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiBook } = FiIcons;

const Vows = () => {
  const [activeVow, setActiveVow] = useState('sarah');

  const vows = {
    sarah: {
      name: "Sarah's Vows",
      content: `My dearest Michael,

When I lost David, I thought my heart would never heal. I thought love was something that happened once in a lifetime, and I had already used up my chance. But you taught me that love isn't finite—it's infinite, renewable, and more beautiful when it's chosen the second time around.

You didn't try to replace what I had lost. Instead, you honored my past while helping me build a future I never thought possible. You love my children as if they were your own, and you've shown me that a blended family isn't broken—it's beautifully whole.

I promise to love you not just for who you are, but for who you help me become. I promise to support your dreams, to laugh with you through the good times, and to hold your hand through the challenges. I promise to be a loving stepmother to Sophie and Lily, and to help you raise all four of our children with patience, wisdom, and endless love.

Most importantly, I promise to never take this second chance for granted. Every day with you is a gift, and I will cherish it always.

With all my love,
Sarah`,
      color: "text-dusk-lavender"
    },
    michael: {
      name: "Michael's Vows",
      content: `My beloved Sarah,

When my first marriage ended, I felt like a failure. I questioned everything about love, about commitment, about whether I was capable of being the partner someone deserved. But you showed me that sometimes we have to fall apart to find our way to something better.

You didn't just accept my daughters—you embraced them. You didn't just tolerate my past—you helped me heal from it. You showed me that love isn't about perfection; it's about choosing each other every single day, even when it's hard.

I promise to love you with the wisdom I've gained from my mistakes. I promise to communicate openly, to listen deeply, and to never take your love for granted. I promise to be the father Emma and Jacob deserve, and to love them as fiercely as I love my own daughters.

I promise to build a home with you that's filled with laughter, understanding, and grace. A home where all of our children feel safe, loved, and free to be themselves.

Thank you for showing me that second chances at love are even more beautiful than first ones, because they're built on a foundation of gratitude, wisdom, and hope.

Forever yours,
Michael`,
      color: "text-slate-blue"
    }
  };

  return (
    <section id="vows" className="section-spacing bg-gradient-to-br from-dusk-lavender/10 to-champagne/10 dark:from-deep-slate/50 to-slate-blue/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiBook} className="w-16 h-16 mx-auto mb-6 text-slate-blue dark:text-dusk-lavender" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-blue dark:text-dusk-lavender mb-6">
            Our Vows
          </h2>
          <p className="text-lg text-warm-gray dark:text-champagne max-w-2xl mx-auto leading-relaxed">
            The promises we make to each other, spoken from hearts that have learned 
            the true meaning of love through both loss and hope.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Vow Selection */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 dark:bg-deep-slate/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveVow('sarah')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeVow === 'sarah'
                    ? 'bg-dusk-lavender text-white shadow-lg'
                    : 'text-warm-gray dark:text-champagne hover:text-dusk-lavender'
                }`}
              >
                Sarah's Vows
              </button>
              <button
                onClick={() => setActiveVow('michael')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeVow === 'michael'
                    ? 'bg-slate-blue text-white shadow-lg'
                    : 'text-warm-gray dark:text-champagne hover:text-slate-blue'
                }`}
              >
                Michael's Vows
              </button>
            </div>
          </div>

          {/* Vow Content */}
          <motion.div
            key={activeVow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="text-center mb-8">
              <SafeIcon icon={FiHeart} className={`w-8 h-8 mx-auto mb-4 ${vows[activeVow].color}`} />
              <h3 className={`font-serif text-2xl font-medium ${vows[activeVow].color} mb-4`}>
                {vows[activeVow].name}
              </h3>
            </div>

            <div className="prose prose-lg max-w-none text-warm-gray dark:text-champagne">
              {vows[activeVow].content.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-champagne/20 dark:bg-dusk-lavender/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-medium text-slate-blue dark:text-dusk-lavender mb-4">
              "Love is not about finding the perfect person, but learning to see an imperfect person perfectly."
            </h3>
            <p className="text-warm-gray dark:text-champagne italic">
              — Sam Keen
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vows;