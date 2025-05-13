// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import MissionVisionSection from '../components/MissionVisionSection';

import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServiceSection';
import TeamSection from '../components/TeamSection';
import About from '../components/About';
import Journey from '../components/Journey';
import TeamShowcase from '../components/TeamShowCase';
import PartnerTestimonials from '../components/Testimonials';

function Home() {
  return (
    <div>
    <Hero/>
    <About/>
    <Journey/>
    <MissionVisionSection/>
  
   
    <ServicesSection/>
 
    <StatsSection/>
    <TeamShowcase/>
    <PartnerTestimonials/>

  
    </div>
  );
}

export default Home;
