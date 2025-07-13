import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import OurJourney from './components/OurJourney';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import Vows from './components/Vows';
import Registry from './components/Registry';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import Memorial from './components/Memorial';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-pearl-white dark:bg-deep-slate transition-colors duration-300">
            <Routes>
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/" element={<MainSite />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

function MainSite() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <main>
        <Hero />
        <OurJourney />
        <WeddingInfo />
        <Gallery />
        <Vows />
        <Registry />
        <RSVP />
        <Guestbook />
        <Memorial />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;