import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: "marketplace-onboarding",
    title: "Marketplace Onboarding for GCC Sellers",
    description: "Seamlessly launch your business on platforms like Amazon UAE, Noon, and Carrefour GCC. We guide you through every step — from account setup to catalog creation — ensuring you're marketplace-ready across the Gulf region.",
    image: "/Images/AccountH.avif",
    color: "#4f46e5",
    features: [
      "Precision implementation",
      "Quality assurance",
      "Continuous improvement",
      "Client-focused solutions"
    ],
    keywords: "Amazon seller setup, Noon onboarding, Gulf eCommerce integration, GCC marketplace support"
  },
  {
    id: "cross-border-ecommerce",
    title: "Cross-Border eCommerce Solutions in the Gulf",
    description: "Sell globally from the Gulf with zero hassle. Our end-to-end export services help businesses in UAE, Saudi Arabia, and other GCC countries access international markets, managing logistics, compliance, and payment processing.",
    image: "/Images/crossBorder.avif",
    color: "#10b981",
    features: [
      "Comprehensive screening",
      "Skills assessment",
      "Cultural fit evaluation",
      "Industry-specific expertise"
    ],
    keywords: "Gulf eCommerce export, cross-border selling GCC, international selling"
  },
  {
    id: "inventory-management",
    title: "Smart Inventory & Order Management for Gulf Sellers",
    description: "Stay on top of your stock and sales across marketplaces like Amazon.sa, Noon.com, and Carrefour UAE. Our dashboard supports real-time inventory tracking for sellers in the GCC region.",
    image: "/Images/Inventory & Order Management.avif",
    color: "#f59e0b",
    features: [
      "Real-time tracking",
      "Automated stock alerts",
      "Multi-platform sync",
      "Detailed analytics"
    ],
    keywords: "inventory management Gulf, order tracking KSA, multi-platform eCommerce UAE"
  },
  {
    id: "last-mile-delivery",
    title: "Gulf-Focused Last-Mile Delivery & Logistics",
    description: "Fast, reliable delivery within and beyond the Gulf. We offer integrated shipping services in the UAE, Saudi Arabia, and GCC countries — including COD, express shipping, and international fulfillment.",
    image: "/Images/Last-Mile Delivery & Logistics.avif",
    color: "#ef4444",
    features: [
      "Flexible delivery options",
      "Real-time tracking",
      "Return handling",
      "Global reach"
    ],
    keywords: "last-mile delivery UAE, eCommerce shipping GCC, COD logistics Saudi Arabia"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth Strategy for GCC",
    description: "Grow your online presence across the Gulf. We specialize in performance marketing, SEO for Arabic audiences, and high-conversion campaigns tailored to platforms popular in the UAE, KSA, and Qatar.",
    image: "/Images/Digital Marketing & Growth Strategy.avif",
    color: "#6366f1",
    features: [
      "Performance-based marketing",
      "Brand awareness campaigns",
      "Influencer collaboration",
      "Conversion optimization"
    ],
    keywords: "GCC digital marketing, SEO UAE, eCommerce ads Saudi Arabia"
  },
  {
    id: "product-cataloging",
    title: "Product Cataloging & Photography for Gulf Marketplaces",
    description: "Make your listings stand out on Gulf eCommerce platforms. From professional shoots to Arabic content optimization, we help sellers in the UAE, Qatar, and Bahrain improve visibility and conversions.",
    image: "/Images/Product Cataloging & Photography  .avif",
    color: "#0ea5e9",
    features: [
      "High-resolution product shoots",
      "SEO-optimized content",
      "Bulk catalog uploads",
      "Platform-specific templates"
    ],
    keywords: "product photography Gulf, eCommerce listings UAE, catalog management Saudi Arabia"
  },
  {
    id: "It-services",
    title: "IT Services & Infrastructure for Gulf Enterprises",
    description: "Empower your business in the GCC with robust IT solutions. From cloud hosting to software development, we provide secure, scalable tech services tailored for companies in UAE, KSA, and Oman.",
    image: "/Images/IT Services & Infrastructure.avif",
    color: "#3b82f6",
    features: [
      "Cloud hosting & support",
      "Custom app development",
      "Security & compliance",
      "Tech infrastructure setup"
    ],
    keywords: "Gulf IT solutions, UAE business infrastructure, cloud services KSA"
  },
  {
    id: "Logistics-management",
    title: "Integrated Logistics Management for GCC Businesses",
    description: "Optimize logistics across the Gulf region. From warehousing in Dubai to delivery in Riyadh, our tech-enabled logistics service ensures efficiency throughout the supply chain.",
    image: "/Images/Last-Mile Delivery & Logistics.avif",
    color: "#8b5cf6",
    features: [
      "Smart warehousing",
      "Route optimization",
      "Reverse logistics",
      "Carrier integration"
    ],
    keywords: "GCC logistics tech, supply chain optimization Gulf, smart shipping UAE"
  },
  {
    id: "Brand-empowerment",
    title: "Brand Empowerment Solutions for Gulf Markets",
    description: "Take control of your brand’s image across the Gulf. We help you protect your brand, engage customers, and establish presence across platforms in Saudi Arabia, UAE, and the wider GCC.",
    image: "/Images/Brand Empowerment Solutions.avif",
    color: "#ec4899",
    features: [
      "Brand protection tools",
      "Trademark & IP support",
      "Audience engagement",
      "Marketplace brand stores"
    ],
    keywords: "Gulf brand building, eCommerce branding UAE, brand protection KSA"
  },
  {
    id: "Global-reach",
    title: "Global Reach Enablement from the Gulf",
    description: "Expand globally from your Gulf base. Our services localize your strategy for international markets while ensuring compliance and customer alignment from the UAE to the world.",
    image: "/Images/Global.avif",
    color: "#14b8a6",
    features: [
      "Market localization",
      "International compliance",
      "Global payment gateways",
      "Cultural adaptation"
    ],
    keywords: "GCC global expansion, UAE eCommerce internationalization, cross-border strategy"
  },
  {
    id: "Branch-expansion",
    title: "Branch Expansion Strategy Across the Gulf",
    description: "Thinking of opening new branches in Saudi Arabia, UAE, or Qatar? Our data-driven strategies help you choose the right location, build infrastructure, and scale efficiently across the Gulf.",
    image: "/Images/Branch Expansion Strategy.avif",
    color: "#f97316",
    features: [
      "Location analytics",
      "Market demand forecasting",
      "Franchise models",
      "Operational planning"
    ],
    keywords: "business expansion GCC, branch growth UAE, franchise strategy Saudi Arabia"
  },
  {
    id: "customer-expectations",
    title: "Customer Expectations Management in the Gulf",
    description: "Build long-lasting customer relationships in the Gulf region. We design feedback loops, support systems, and loyalty strategies for businesses in UAE, Bahrain, and Oman.",
    image: "/Images/Customer Expectations Management.avif",
    color: "#10b981",
    features: [
      "Feedback management",
      "Retention campaigns",
      "Customer support setup",
      "Satisfaction tracking"
    ],
    keywords: "customer loyalty Gulf, client satisfaction UAE, support strategies GCC"
  }
];



const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeKeyword, setActiveKeyword] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const filteredServices = activeKeyword
    ? services.filter(service => 
        service.keywords.toLowerCase().includes(activeKeyword.toLowerCase())
      )
    : services;

  return (
    <section className="services-section py-16 lg:py-24 px-4 sm:px-6" aria-label="Our eCommerce Services">
      <div className="max-w-9xl mx-auto">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#b73235] uppercase bg-[#b73235]/10 rounded-full mb-4">
            Our Solutions
          </span>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4 leading-tight"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Comprehensive <span className="text-[#b73235]">eCommerce Services</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions to launch, manage, and scale your online business across all major platforms
          </p>
        </motion.header>

        {/* Controls Section */}
        <div className="flex flex-col justify-center items-center mb-12 gap-4">
          {/* View Mode Toggle */}
          <div className="max-w-md flex items-center bg-white p-1 rounded-lg shadow-sm border border-gray-200 mb-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 text-sm font-medium rounded-md ${viewMode === 'grid' ? 'bg-[#b73235] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-6 py-2 text-sm font-medium rounded-md ${viewMode === 'list' ? 'bg-[#b73235] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              List View
            </button>
          </div>

          {/* Keyword Filter */}
          <div className="w-full">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveKeyword(null)}
                className={`px-3 py-1 text-xs sm:text-sm rounded-full font-medium transition-colors ${
                  !activeKeyword 
                    ? 'bg-[#b73235] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Services
              </button>
              {[...new Set(services.flatMap(service => service.keywords.split(', ')))].map(keyword => (
                <motion.button
                  key={keyword}
                  onClick={() => setActiveKeyword(activeKeyword === keyword ? null : keyword)}
                  className={`px-3 py-1 text-xs sm:text-sm rounded-full font-medium transition-colors ${
                    activeKeyword === keyword 
                      ? 'bg-[#b73235] text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {keyword}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.article 
                key={service.id}
                className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 bg-white ${
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
              >
                {/* Service Image Banner */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                   
                    <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                      {service.keywords.split(',')[0]}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>

                  <AnimatePresence>
                    <motion.p
                      layout
                      className={`text-gray-600 mb-6 ${expandedService === index ? '' : 'line-clamp-3'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </AnimatePresence>

                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-auto"
                      >
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start"
                              initial={{ x: -20 }}
                              animate={{ x: 0 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <svg 
                                className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" 
                                style={{ color: service.color }} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="mt-6 pt-4 border-t border-gray-200"
                    animate={{
                      opacity: expandedService === index ? 1 : 0,
                      height: expandedService === index ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.03, 
                        backgroundColor: service.color,
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all"
                      style={{ backgroundColor: service.color }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                </div>

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
        ) : (
          <div className="space-y-6">
            {filteredServices.map((service, index) => (
              <motion.article
                key={service.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  expandedService === index ? 'ring-2 ring-[#b73235]' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex">
                  {/* Service Image for List View */}
                  <div className="hidden md:block relative w-1/3 min-h-[200px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="w-full md:w-2/3 p-6 cursor-pointer">
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0 mt-1"
                        style={{
                          backgroundColor: `${service.color}10`,
                          color: service.color,
                        }}
                      >
                        {/* Optional icon can go here */}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                          <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                            {service.keywords.split(',')[0]}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start p-3 bg-gray-50 rounded-lg"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <svg 
                              className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" 
                              style={{ color: service.color }} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ 
                          scale: 1.02, 
                          backgroundColor: service.color,
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-6 py-3 px-6 rounded-lg font-semibold text-white transition-all"
                        style={{ backgroundColor: service.color }}
                      >
                        Get Started
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Need a custom solution for your business?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our team of eCommerce experts can tailor a package specifically for your business needs and growth goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:dhiraj@ulinkit.com?subject=Custom eCommerce Solution Inquiry">
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
  );
};

export default ServicesSection;