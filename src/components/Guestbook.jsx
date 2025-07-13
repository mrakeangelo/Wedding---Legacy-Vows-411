import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFeather, FiHeart, FiSend } = FiIcons;

const Guestbook = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Jennifer & Tom",
      message: "Sarah, watching you find love again has been such a beautiful journey. Michael, thank you for bringing such joy back into her life. We're so happy for both of you and excited to see your families become one. Congratulations!",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    },
    {
      id: 2,
      name: "The Johnson Family",
      message: "What a testament to the power of love and resilience! Your story gives hope to so many. We're honored to witness your new beginning and can't wait to celebrate with you. Here's to love, laughter, and beautiful blended families!",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      message: "As someone who also found love the second time around, I want you to know how inspiring your journey is. The way you've both honored your past while embracing your future is beautiful. Wishing you endless happiness!",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    name: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name.trim() && newMessage.message.trim()) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        timestamp: new Date()
      };
      setMessages(prev => [message, ...prev]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <section id="guestbook" className="section-spacing bg-pearl-white dark:bg-deep-slate">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiFeather} className="w-16 h-16 mx-auto mb-6 text-slate-blue dark:text-dusk-lavender" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-blue dark:text-dusk-lavender mb-6">
            Send Your Blessing for Our Next Chapter
          </h2>
          <p className="text-lg text-warm-gray dark:text-champagne max-w-2xl mx-auto leading-relaxed">
            Your words of love, support, and encouragement mean the world to us. 
            Please share your thoughts and blessings for our new beginning.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12"
          >
            <h3 className="font-serif text-2xl font-medium text-slate-blue dark:text-dusk-lavender mb-6 text-center">
              Leave a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="guestName" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="guestName"
                  name="name"
                  value={newMessage.name}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full"
                  placeholder="Your name or family name"
                />
              </div>
              <div>
                <label htmlFor="guestMessage" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="guestMessage"
                  name="message"
                  value={newMessage.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="form-input w-full resize-none"
                  placeholder="Share your thoughts, blessings, or well-wishes for Sarah and Michael..."
                />
              </div>
              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-3 inline-flex items-center gap-2"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  Send Blessing
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Messages Display */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-medium text-slate-blue dark:text-dusk-lavender text-center mb-8">
              Messages from Our Loved Ones
            </h3>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-deep-slate/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-blue/10 dark:bg-dusk-lavender/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiHeart} className="w-5 h-5 text-slate-blue dark:text-dusk-lavender" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-lg font-medium text-slate-blue dark:text-dusk-lavender">
                        {message.name}
                      </h4>
                      <span className="text-sm text-warm-gray dark:text-champagne">
                        {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-warm-gray dark:text-champagne leading-relaxed">
                      {message.message}
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
            className="text-center mt-12"
          >
            <div className="bg-champagne/20 dark:bg-dusk-lavender/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-serif text-xl font-medium text-slate-blue dark:text-dusk-lavender mb-4">
                Thank You for Your Love
              </h3>
              <p className="text-warm-gray dark:text-champagne leading-relaxed">
                Every message, every blessing, every word of encouragement fills our hearts with joy. 
                We are so grateful for the love and support of our family and friends as we begin 
                this beautiful new chapter together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;