// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FeedbackForm from './components/FeedbackForm';
import Menu from './components/pages/Menu';
import Accommodation from './components/pages/Accommodation';
import ContactUs from './components/pages/ContactUs';

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
  </>
);

const App: React.FC = () => (
  <div className="max-w-6xl mx-auto font-sans">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/feedback" element={<FeedbackForm />} />
    </Routes>
    <Footer />
  </div>
);

export default App;