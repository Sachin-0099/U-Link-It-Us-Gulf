// src/layout/MainLayout.jsx
import React from 'react';
import Navbar from '../components/HeaderNav';
import FooterSection from '../components/footer/FooterSection';


function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Responsive padding to offset fixed navbar height */}
      <main className="flex-grow pt-24 md:pt-28 lg:pt-32 ">
        {children}
      </main>
      <FooterSection/>

    </div>
  );
}

export default MainLayout;
