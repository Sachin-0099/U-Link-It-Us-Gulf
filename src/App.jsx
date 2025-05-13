// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
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
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
