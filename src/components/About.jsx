import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock } from "react-icons/fa";


const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTimelineItem, setActiveTimelineItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const timelineData = [
    {
      year: "2011",
      title: "Founded",
      description: "Started as data mining firm in 2011 providing Global business based data to various clients.",
      image: "/Images/Founded.avif",
    },
    {
      year: "2013",
      title: "IT Services",
      description: "Started developing IT tools & outsourced clients Global business promotion activities and backend proces",
      image: "/Images/It.avif",
    },
    {
      year: "2014",
      title: "Milestone Launches",
      description: "Global Partnered with amazon, for the seller onboarding program with more than 2 lac seller onboard.",
      image: "/Images/Enhancement.avif",
    },
    {
      year: "2016",
      title: "Product Assortment",
      description: "Started Global warehousing business with more than 300 storage facility in Dubai, India and USA.",
      image: "/Images/Product.avif",
    },
    {
      year: "2017",
      title: "RFQ & Credit Finance",
      description: "Introduced RFQ/Negotiations & Credit Finance.",
      image: "/Images/Rfq.webp",
    },
    {
      year: "2024",
      title: "Significant Growth",
      description: "So many registered users with an inventory of over a large million items.",
      image: "/Images/Growth.avif",
    },
  ];

  const services = [
    {
      title: "Quality Services",
      description: "At U-link IT US, we pride ourselves on our clear vision and strong execution capabilities. Our team is committed to delivering projects with precision, efficiency, and timeliness — ensuring top-notch quality and exceeding client expectations at every step.",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
      title: "Seller Services & Account Setup",
      description: "From smooth onboarding on Amazon and global marketplaces to complete account management and brand registry support, we handle every step of your e-commerce journey.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      title: "Order & Inventory Management",
      description: "Track orders from placement to delivery, manage returns and exchanges, and monitor real-time inventory across multiple locations with ease.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Shipping & Logistics Integration",
      description: "End-to-end fulfillment support including FBA, FBM, and third-party logistics, with real-time shipping tracking and label generation through courier integrations.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Marketing & Analytics",
      description: "Boost your visibility with SEO, Google Ads, and influencer marketing. Analyze performance using advanced dashboards, Google Analytics, and customer behavior tools.",
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    },
    {
      title: "E-commerce Platform Development",
      description: "We build responsive, scalable online storefronts using the latest frontend and backend technologies, integrated with CMS, payment gateways, and mobile optimization.",
      icon: "M9 5l7 7-7 7"
    }
  ];
  

  return (
    <div className="min-h-screen px-4 relative overflow-hidden pt-20">
      {/* Floating decorative elements */}
      <motion.div 
        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="hidden lg:block absolute top-1/4 left-10 w-16 h-16 rounded-full bg-[#b73235] bg-opacity-10"
      />
      <motion.div 
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="hidden lg:block absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-[#b73235] bg-opacity-5"
      />

      {/* Main content container */}
      <div className="max-w-7xl mx-auto">
        {/* Animated Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-6 text-[#b73235]'>
            U-Link IT US Helps You Find <span className="text-[#2c3e50]">The Best Talent</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ulinkit is a trusted eCommerce service provider helping businesses launch and scale on global marketplaces with expert support in account setup, brand registry, logistics, and growth strategy.
          </p>
        </motion.div>

        {/* Interactive Services Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-xl p-6 shadow-md cursor-pointer border-l-4 border-[#b73235]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#b73235] bg-opacity-10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#b73235]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
     
    </div>
  );
};

export default About;