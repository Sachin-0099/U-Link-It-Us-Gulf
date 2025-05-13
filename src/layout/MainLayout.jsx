// src/layout/MainLayout.jsx
import React from 'react';
import Navbar from '../components/HeaderNav';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Responsive padding to offset fixed navbar height */}
      <main className="flex-grow pt-24 md:pt-28 lg:pt-32 ">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

export default MainLayout;
