
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';


const services = [
  {
    id: "marketplace-onboarding",
    title: "Marketplace Onboarding",
    description: "Seamlessly launch your business on platforms like Amazon, Flipkart & Meesho. We guide you through every step — from account setup to catalog creation — ensuring you're marketplace-ready in no time.",
    icon: "⭐",   
    color: "#4f46e5",
    features: [
      "Precision implementation",
      "Quality assurance",
      "Continuous improvement",
      "Client-focused solutions"
    ],
    keywords: "Amazon seller setup, Flipkart onboarding, eCommerce marketplace integration"
  },
  {
    id: "cross-border-ecommerce",
    title: "Cross-Border eCommerce Solutions",
    description: "Sell globally with zero hassle. Our end-to-end export services help you take your products to international markets, managing logistics, compliance, and payment processing.",
    icon: "🌐",
    color: "#10b981",
    features: [
      "Comprehensive screening",
      "Skills assessment",
      "Cultural fit evaluation",
      "Industry-specific expertise"
    ],
    keywords: "international eCommerce, global selling, export eCommerce solutions"
  },
  {
    id: "inventory-management",
    title: "Inventory & Order Management",
    description: "Stay on top of your stock and sales — all in one place. With our smart dashboard, manage real-time inventory, streamline your order flow, and never miss a sale.",
    icon: "📦",
    color: "#f59e0b",
    features: [
      "Real-time tracking",
      "Automated stock alerts",
      "Multi-platform sync",
      "Detailed analytics"
    ],
    keywords: "eCommerce inventory management, order fulfillment, stock control"
  },
  {
    id: "last-mile-delivery",
    title: "Last-Mile Delivery & Logistics",
    description: "Fast, reliable delivery — anywhere in the world. We offer integrated shipping solutions, including COD, express delivery, and global fulfillment through trusted partners.",
    icon: "🚚",
    color: "#ef4444",
    features: [
      "Flexible delivery options",
      "Real-time tracking",
      "Return handling",
      "Global reach"
    ],
    keywords: "eCommerce shipping, last-mile delivery, logistics solutions"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth Strategy",
    description: "Grow your visibility. Grow your sales. We help you attract and retain customers through SEO, ads, influencer marketing, and high-converting campaigns.",
    icon: "📈",
    color: "#6366f1",
    features: [
      "Performance-based marketing",
      "Brand awareness campaigns",
      "Influencer collaboration",
      "Conversion optimization"
    ],
    keywords: "eCommerce marketing, online store SEO, digital advertising"
  },
  {
    id: "product-cataloging",
    title: "Product Cataloging & Photography",
    description: "Make your listings stand out. From professional photos to keyword-rich descriptions, we help craft listings that convert browsers into buyers.",
    icon: "📸",
    color: "#0ea5e9",
    features: [
      "High-resolution product shoots",
      "SEO-optimized content",
      "Bulk catalog uploads",
      "Platform-specific templates"
    ],
    keywords: "product photography, eCommerce listings, catalog management"
  }
];


const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeKeyword, setActiveKeyword] = useState(null);

  // Filter services based on active keyword
  const filteredServices = activeKeyword
    ? services.filter(service => 
        service.keywords.toLowerCase().includes(activeKeyword.toLowerCase())
      )
    : services;

  return (
    <>
         <Head>
        <title>Professional eCommerce Services | Marketplace Onboarding & Management</title>
        <meta name="description" content="Comprehensive eCommerce solutions including marketplace onboarding, global selling, inventory management, logistics, digital marketing, and product cataloging to grow your online business." />
        <meta name="keywords" content={services.map(service => service.keywords).join(', ')} />
        <meta property="og:title" content="Professional eCommerce Services | Marketplace Onboarding & Management" />
        <meta property="og:description" content="Comprehensive eCommerce solutions to help your business succeed online." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "eCommerce Solutions",
            "provider": {
              "@type": "Organization",
              "name": "U-Link Outsourcing Pvt Ltd"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "eCommerce Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "OfferCatalog",
                "itemListElement": {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                  }
                }
              }))
            }
          })}
        </script>
      </Head>


      <section className="services-section py-12 md:py-16 lg:py-20 px-4 sm:px-6 overflow-y-hidden " aria-label="Our eCommerce Services">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#b73235] uppercase">
              Our Solutions
            </span>
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Comprehensive <span className="text-[#b73235]">eCommerce Services</span>
            </motion.h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions to launch, manage, and scale your online business across all major platforms
            </p>
          </motion.header>

          {/* Keyword Filter (Mobile-friendly) */}
          <div className="mb-8 md:mb-12 overflow-x-auto">
            <div className="flex flex-nowrap md:flex-wrap gap-2 pb-2 md:justify-center">
              {services.flatMap(service => 
                service.keywords.split(', ').map(keyword => (
                  <motion.button
                    key={keyword}
                    className={`whitespace-nowrap px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium transition-colors ${
                      activeKeyword === keyword 
                        ? 'bg-[#b73235] text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveKeyword(activeKeyword === keyword ? null : keyword)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {keyword}
                  </motion.button>
                ))
              )}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.article 
                key={service.id}
                id={service.id}
                className={`service-card relative overflow-hidden rounded-xl md:rounded-2xl shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 bg-white border border-gray-100 ${
                  expandedService === index ? 'ring-2 ring-[#b73235]' : ''
                }`}
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                aria-labelledby={`service-title-${service.id}`}
              >
                {/* Service Card Content */}
                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                  {/* Service Header */}
                  <div className="relative mb-4 sm:mb-6 flex flex-col items-center">

                    {/* Top-right badge */}

                    <motion.span
                      className="absolute -top-[-20px] -right-[20px] sm:top-[-63px] sm:right-[-65px] z-10 text-xs font-medium px-2 py-1 rounded-full shadow-sm"
                      style={{
                        backgroundColor: `${service.color}20`,
                        color: service.color,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {service.keywords.split(',')[0]}
                    </motion.span>

                    {/* Service Icon */}
                    <motion.div
                      className="text-3xl sm:text-4xl p-3 sm:p-4 rounded-lg sm:rounded-xl mb-3 sm:mb-4 shadow-sm"
                      style={{
                        backgroundColor: `${service.color}10`,
                        color: service.color,
                      }}
                      animate={{
                        rotate: hoveredService === index ? [0, 10, -10, 0] : 0,
                        scale: hoveredService === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Service Title */}
                    <h2
                      id={`service-title-${service.id}`}
                      className="text-lg sm:text-xl font-bold text-gray-900 text-center"
                    >
                      {service.title}
                    </h2>
                  </div>

                  {/* Service Description */}
                  <AnimatePresence>
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: expandedService === index ? 1 : 0.8,
                        height: expandedService === index ? 'auto' : '4.5rem'
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 overflow-hidden"
                    >
                      {service.description}
                    </motion.div>
                  </AnimatePresence>

                  {/* Features List (shown when expanded) */}
                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-auto"
                      >
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                          Key Features
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {service.features.map((feature, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start text-sm sm:text-base"
                              initial={{ x: -20 }}
                              animate={{ x: 0 }}
                              transition={{ delay: 0.1 * i }}
                              whileHover={{ x: 5 }}
                            >
                              <svg 
                                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" 
                                style={{ color: service.color }} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200"
                    animate={{
                      opacity: expandedService === index ? 1 : 0,
                      height: expandedService === index ? 'auto' : 0,
                      marginTop: expandedService === index ? '1rem' : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.03, 
                        backgroundColor: service.color,
                        boxShadow: `0 4px 6px ${service.color}40`
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium sm:font-semibold text-white text-sm sm:text-base transition-all"
                      style={{ 
                        backgroundColor: service.color,
                        boxShadow: `0 2px 4px ${service.color}40`
                      }}
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                </div>

                {/* Decorative Bottom Border */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1"
                  style={{ backgroundColor: service.color }}
                  animate={{
                    width: hoveredService === index ? '100%' : '0%'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Need a custom solution for your business?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="mailto:dhiraj@ulinkit.com?subject=Need%20Help%20with%20Amazon%20Selling&body=Hi%20U-Link It Us%2C%0A%0AI%27m%20interested%20in%20your%20services%20for%20managing%20my%20seller%20account.%20Please%20get%20in%20touch%20with%20me.%0A%0AThanks%2C">
  <motion.button
    whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(183, 50, 53, 0.3)" }}
    whileTap={{ scale: 0.98 }}
    className="bg-[#b73235] hover:bg-[#9c2a2d] text-white font-semibold py-2 sm:py-3 px-6 rounded-lg text-base sm:text-lg transition-all"
  >
    Contact Our Experts
  </motion.button>
</a>


<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  disabled
  className="bg-white text-[#b73235] font-semibold py-2 sm:py-3 px-6 rounded-lg text-base sm:text-lg border border-[#b73235] transition-all opacity-50 cursor-not-allowed"
>
  Case Studies Coming Soon
</motion.button>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;