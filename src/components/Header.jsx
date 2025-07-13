import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon, FiMenu, FiX } = FiIcons;

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Our Journey', href: '#journey' },
    { name: 'Wedding Details', href: '#wedding' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Vows', href: '#vows' },
    { name: 'Registry', href: '#registry' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Guestbook', href: '#guestbook' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-pearl-white/90 dark:bg-deep-slate/90 backdrop-blur-sm border-b border-champagne/20 dark:border-dusk-lavender/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-serif text-xl font-medium text-slate-blue dark:text-dusk-lavender"
          >
            Legacy Vows
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-warm-gray dark:text-champagne hover:text-slate-blue dark:hover:text-dusk-lavender transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-champagne/20 dark:bg-dusk-lavender/20 text-slate-blue dark:text-dusk-lavender hover:bg-champagne/30 dark:hover:bg-dusk-lavender/30 transition-colors duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <SafeIcon icon={isDark ? FiSun : FiMoon} className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-champagne/20 dark:bg-dusk-lavender/20 text-slate-blue dark:text-dusk-lavender"
              aria-label="Toggle menu"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-champagne/20 dark:border-dusk-lavender/20"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-warm-gray dark:text-champagne hover:text-slate-blue dark:hover:text-dusk-lavender transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;