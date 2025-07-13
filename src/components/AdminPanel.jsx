import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiEye, FiEyeOff, FiSave, FiHome } = FiIcons;

const AdminPanel = () => {
  const { user, signIn, signOut } = useAuth();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { error } = await signIn(credentials.email, credentials.password);
      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-pearl-white dark:bg-deep-slate flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiLock} className="w-16 h-16 mx-auto mb-4 text-slate-blue dark:text-dusk-lavender" />
            <h1 className="font-serif text-2xl font-medium text-slate-blue dark:text-dusk-lavender mb-2">
              Admin Panel
            </h1>
            <p className="text-warm-gray dark:text-champagne">
              Sign in to manage your wedding website
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={credentials.email}
                onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                required
                className="form-input w-full"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-warm-gray dark:text-champagne font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  required
                  className="form-input w-full pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-warm-gray dark:text-champagne hover:text-slate-blue dark:hover:text-dusk-lavender"
                >
                  <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <a 
              href="/"
              className="text-slate-blue dark:text-dusk-lavender hover:underline inline-flex items-center gap-2"
            >
              <SafeIcon icon={FiHome} className="w-4 h-4" />
              Back to Wedding Site
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pearl-white dark:bg-deep-slate">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl font-medium text-slate-blue dark:text-dusk-lavender">
            Wedding Website Admin
          </h1>
          <div className="flex items-center gap-4">
            <a 
              href="/"
              className="text-slate-blue dark:text-dusk-lavender hover:underline inline-flex items-center gap-2"
            >
              <SafeIcon icon={FiHome} className="w-4 h-4" />
              View Site
            </a>
            <button
              onClick={handleLogout}
              className="btn-secondary"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Management */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="font-serif text-2xl font-medium text-slate-blue dark:text-dusk-lavender mb-6">
                Content Management
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-warm-gray dark:text-champagne font-medium mb-2">
                    Couple Names
                  </label>
                  <input
                    type="text"
                    defaultValue="Sarah & Michael"
                    className="form-input w-full"
                  />
                </div>

                <div>
                  <label className="block text-warm-gray dark:text-champagne font-medium mb-2">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    defaultValue="2024-09-15"
                    className="form-input w-full"
                  />
                </div>

                <div>
                  <label className="block text-warm-gray dark:text-champagne font-medium mb-2">
                    Wedding Quote
                  </label>
                  <textarea
                    rows="3"
                    defaultValue="Love renews. Always. In every season of our hearts, we find the courage to begin again, to trust again, to love deeper than we ever thought possible."
                    className="form-input w-full resize-none"
                  />
                </div>

                <div>
                  <label className="block text-warm-gray dark:text-champagne font-medium mb-2">
                    Venue Information
                  </label>
                  <input
                    type="text"
                    defaultValue="Riverside Gardens, 1234 Harmony Lane, Peaceful Valley, CA 90210"
                    className="form-input w-full"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <SafeIcon icon={FiSave} className="w-4 h-4" />
                  Save Changes
                </motion.button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="font-serif text-lg font-medium text-slate-blue dark:text-dusk-lavender mb-4">
                RSVP Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-warm-gray dark:text-champagne">Attending:</span>
                  <span className="font-medium text-slate-blue dark:text-dusk-lavender">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray dark:text-champagne">Not Attending:</span>
                  <span className="font-medium text-slate-blue dark:text-dusk-lavender">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray dark:text-champagne">Pending:</span>
                  <span className="font-medium text-slate-blue dark:text-dusk-lavender">8</span>
                </div>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-deep-slate/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="font-serif text-lg font-medium text-slate-blue dark:text-dusk-lavender mb-4">
                Recent Messages
              </h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-warm-gray dark:text-champagne">Jennifer & Tom</p>
                  <p className="text-warm-gray dark:text-champagne opacity-75">2 days ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-warm-gray dark:text-champagne">The Johnson Family</p>
                  <p className="text-warm-gray dark:text-champagne opacity-75">5 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;