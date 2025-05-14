import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import i18n from './i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';
import WhatsAppButton from './components/WhatsappButton';
import ServiceDetail from './components/ServiceDetail';

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
