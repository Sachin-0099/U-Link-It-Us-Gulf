import React, { useState, useEffect } from 'react';
import { 
  FaGlobe, FaChartLine, FaShieldAlt, FaUsers, 
  FaLightbulb, FaHandshake, FaHistory, FaBoxes,
  FaNetworkWired, FaDatabase, FaSearchDollar, FaShippingFast
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

const partners = [
  {
    name: "Official Amazon Global Selling Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    description:
      "As an official Amazon Global Selling Partner, we enable Indian brands to launch, manage, and scale their business across Amazon's international marketplaces with hands-on expertise and strategic support.",
    benefits: [
      "Global store setup and optimization",
      "Account health and policy compliance guidance",
      "Marketplace expansion roadmap",
      "Cross-border logistics consulting",
      "Amazon advertising strategy support",
      "Seller growth analytics & reporting",
    ],
  },
  {
    name: "Ulinkit eCommerce Expansion Partner",
    logo: "/Images/Ulinkit.png",
    description:
      "Ulinkit empowers Indian sellers with borderless growth opportunities by providing cutting-edge tools and services for seamless international commerce across various platforms.",
    benefits: [
      "Multi-marketplace integration",
      "Product catalog optimization",
      "Localized onboarding assistance",
      "AI-powered pricing intelligence",
      "Inventory and logistics coordination",
      "Dedicated account success managers",
    ],
  },
  {
    name: "Tredling eCommerce Expansion Partner",
    logo: "/Images/tredling.png",
    description:
      "Tredling connects exporters with top eCommerce markets, offering digital trade infrastructure that simplifies B2B and B2C global distribution.",
    benefits: [
      "Export compliance and documentation support",
      "Access to B2B buyer networks",
      "Integrated trade finance solutions",
      "Market-specific sales enablement",
      "International payment facilitation",
      "Real-time shipment visibility",
    ],
  },
  {
    name: "noon eCommerce Expansion Partner",
    logo: "/Images/noon1.png",
    description:
      "We work with noon to enable product localization, fulfillment, and brand marketing for Indian sellers targeting the Middle East's fastest-growing digital marketplace.",
    benefits: [
      "Product listing translation and localization",
      "Cross-border FBN (Fulfilled by noon) setup",
      "Regional influencer marketing tie-ups",
      "Noon promotional campaign access",
      "Local currency pricing and settlement",
      "Performance and conversion tracking",
    ],
  },
  {
    name: "Amazon SPN Partner (Service Provider Network)",
    logo: "/Images/amazonspn.png",
    description:
      "Through Amazon’s SPN program, we offer sellers verified solutions for cataloging, imaging, advertising, and operational support tailored to marketplace performance goals.",
    benefits: [
      "SPN-verified service portfolio",
      "Listing creation and enhancement",
      "Sponsored Ads campaign management",
      "High-conversion product imaging",
      "Training workshops and certifications",
      "Automated reporting and insights",
    ],
  },
  {
    name: "DP World Cross-Border Logistics Partner",
    logo: "/Images/Logo New.svg",
    description:
      "DP World is our strategic logistics partner providing fast, reliable, and scalable global shipping and fulfillment services designed for ecommerce exports.",
    benefits: [
      "Warehouse and fulfillment integration",
      "Customs clearance and compliance",
      "Bulk shipping consolidation",
      "Cross-border courier partnerships",
      "Smart inventory management",
      "End-to-end supply chain visibility",
    ],
  },
  {
    name: "Souq Legacy Marketplace Partner",
    logo: "/Images/souq.png",
    description:
      "As Souq transitions to Amazon, we continue to support merchants who originally launched on Souq with legacy migration, catalog updates, and account preservation strategies.",
    benefits: [
      "Account migration to Amazon.ae",
      "Listing and catalog data transfer",
      "Legacy product data optimization",
      "Continuity in sales performance tracking",
      "Migration support and documentation",
      "Customer review and rating transition",
    ],
  },
  {
    name: "Amazon.co.uk Marketplace Expansion Partner",
    logo: "/Images/amazonco.png",
    description:
      "We help Indian sellers expand into Amazon UK, with a full-stack solution for compliance, VAT registration, and localized fulfillment strategies.",
    benefits: [
      "UK VAT registration and support",
      "Product compliance documentation",
      "FBA UK and pan-EU fulfillment setup",
      "Currency exchange and remittance help",
      "Localized marketing assets",
      "Sales tax and invoicing automation",
    ],
  },
  {
    name: "Amazon.ae Growth Partner",
    logo: "/Images/amazonae.png",
    description:
      "We facilitate entry and scale-up on Amazon UAE with local compliance, logistics partnerships, and cultural alignment for product positioning.",
    benefits: [
      "Arabic content localization",
      "UAE-specific product keyword optimization",
      "Local fulfillment and returns support",
      "Hyper-local ad campaign setup",
      "UAE customer insights and feedback loops",
      "Local laws and customs compliance",
    ],
  },
  {
    name: "Amazon.sa Growth Partner",
    logo: "/Images/amazonsa1.png",
    description:
      "Our team empowers sellers to tap into Saudi Arabia’s rapidly growing digital economy with expert support for product-market fit, cultural targeting, and in-region fulfillment.",
    benefits: [
      "Saudi localization strategies",
      "Product eligibility checks and approval",
      "In-country delivery network setup",
      "Ramadan and cultural campaign planning",
      "End-user behavior analytics",
      "Customer support and SLA compliance",
    ],
  },
];



const AboutPage = () => {
  const [activePartner, setActivePartner] = useState(0);

const AutoRotateCarousel = ({ items, activeIndex, setActiveIndex, interval = 5000 }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval, setActiveIndex]);

  return null;
};
  const [activeSection, setActiveSection] = useState('about');
  const [yearsExperience, setYearsExperience] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const startYear = 2011;
    const currentYear = new Date().getFullYear();
    
    // Animate counter
    let timeout;
    if (yearsExperience < (currentYear - startYear)) {
      timeout = setTimeout(() => {
        setYearsExperience(prev => prev + 1);
      }, 100);
    }
    
    return () => clearTimeout(timeout);
  }, [yearsExperience]);

  const sections = [
    { id: 'about', title: 'About Us', icon: <FaGlobe /> },
    { id: 'mission', title: 'Our Mission', icon: <FaLightbulb /> },
    { id: 'vision', title: 'Our Vision', icon: <FaChartLine /> },
    { id: 'experience', title: 'Our Experience', icon: <FaHistory /> },
    { id: 'services', title: 'Our Services', icon: <FaBoxes /> },
    { id: 'leadership', title: 'Leadership', icon: <FaUsers /> },
    { id: 'partners', title: 'Global Partners', icon: <FaHandshake /> },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About U-Link It Us - Global IT, E-commerce & Procurement Solutions</title>
        <meta name="description" content="Discover U-Link It Us - a leader in global IT solutions, e-commerce platforms, and procurement services with 15+ years of experience serving businesses worldwide." />
        <meta name="keywords" content="IT solutions, e-commerce services, global procurement, business consulting, Amazon partner, digital transformation" />
        <meta property="og:title" content="About U-Link It Us - Global Business Solutions Provider" />
        <meta property="og:description" content="Leading provider of innovative IT, e-commerce, and procurement solutions with a global network spanning USA, UK, and Middle East markets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ulinkitus.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About U-Link It Us | Global Business Solutions" />
        <meta name="twitter:description" content="15+ years of excellence in delivering cutting-edge IT, e-commerce, and procurement solutions to businesses worldwide." />
        <link rel="canonical" href="https://www.ulinkitus.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "U-Link It Us",
            "url": "https://www.ulinkitus.com",
            "logo": "https://www.ulinkitus.com/logo.png",
            "description": "Global provider of IT solutions, e-commerce platforms, and procurement services",
            "foundingDate": "2011",
            "founder": {
              "@type": "Person",
              "name": "Dhiraj Kumar Gupta"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://www.linkedin.com/in/vineet-sharma-2663279/",
              "https://x.com/dhirajkgupta84",
             
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with semantic h1 */}
        <section className="relative bg-[#b73235] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a52a2d] to-[#d13a3d] opacity-95"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Pioneering Global Business Solutions Since 2011
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
                U-Link It Us is transforming industries through innovative IT, e-commerce, and procurement solutions across USA, UK, UAE and Middle East markets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Navigation with aria labels */}
        <nav aria-label="About page sections" className="sticky top-0 z-20 bg-white shadow-sm">
          <div className="container mx-auto px-6">
            <div className="flex justify-center overflow-x-auto py-4">
              <div className="flex space-x-1" role="tablist">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    role="tab"
                    aria-selected={activeSection === section.id}
                    aria-controls={`${section.id}-tab`}
                    id={`${section.id}-btn`}
                    className={`flex items-center px-5 py-3 rounded-md transition-all ${activeSection === section.id 
                      ? 'bg-[#b73235] text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-[#b73235]'}`}
                  >
                    <span className="mr-2 text-sm" aria-hidden="true">{section.icon}</span>
                    <span className="whitespace-nowrap text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Content Sections with proper heading hierarchy */}
        <main className="container mx-auto px-6 py-16">
          <AnimatePresence mode="wait">
            {/* About Us Section */}
            {activeSection === 'about' && (
              <motion.section
                key="about"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-16 items-center"
                id="about-tab"
                aria-labelledby="about-btn"
                role="tabpanel"
              >
                <motion.div variants={fadeIn}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-1 bg-[#b73235] mr-4"></div>
                    <h2 className="text-2xl font-semibold text-gray-700">OUR COMPANY</h2>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                    Redefining Business Solutions Since 2011
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    U-Link It Us stands at the forefront of India's digital transformation, delivering cutting-edge IT, e-commerce, 
                    and procurement solutions to businesses worldwide. Our relentless pursuit of excellence and passion for innovation 
                    drive us to create impactful solutions.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    With meticulous attention to detail and a commitment to quality, we empower businesses to thrive in the digital 
                    economy through our comprehensive suite of services and expert manpower.
                  </p>
                  
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#b73235]">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Global Business Aggregator</h4>
                    <p className="text-gray-600 mb-4">
                      We operate across international markets including the USA, UK, Middle East, and UAE and Other Gulf Countries serving as a strategic 
                      partner for businesses expanding globally.
                    </p>
                    <ul className="grid grid-cols-2 gap-4">
                      {['USA', 'UK', 'UAE', 'Other Gulf Countries'].map((country) => (
                        <li key={country} className="flex items-center">
                          <div className="w-2 h-2 bg-[#b73235] rounded-full mr-2"></div>
                          <span className="text-gray-700">{country}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="relative">
                  <figure className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img 
                      src="/Images/Order.avif" 
                      alt="U-Link It Us team collaborating in modern office" 
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </figure>
                  <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#b73235]">
                    <div className="text-4xl font-bold text-[#b73235] mb-1">
                      {isMounted ? yearsExperience : '0'}+
                    </div>
                    <div className="text-gray-600 font-medium">Years of Excellence</div>
                  </div>
                </motion.div>
              </motion.section>
            )}

            {/* Mission Section */}
            {activeSection === 'mission' && (
              <motion.section
                key="mission"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-5xl mx-auto text-center"
                id="mission-tab"
                aria-labelledby="mission-btn"
                role="tabpanel"
              >
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex justify-center mb-6">
                    <div className="bg-[#b73235]/10 p-4 rounded-full">
                      <FaLightbulb className="text-4xl text-[#b73235]" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our Guiding Principles
                  </h2>
                  <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    To deliver unparalleled business solutions through innovation, quality, and client-centric services that drive sustainable growth.
                  </p>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <FaShieldAlt className="text-3xl" />,
                      title: 'Quality Assurance',
                      description: 'Continuous innovation of tools and services to meet evolving industry standards and exceed client expectations.'
                    },
                    {
                      icon: <FaUsers className="text-3xl" />,
                      title: 'Client Success',
                      description: 'Tailored solutions designed to empower businesses with comprehensive, intuitive tools for digital transformation.'
                    },
                    {
                      icon: <FaNetworkWired className="text-3xl" />,
                      title: 'Global Network',
                      description: 'Strategic partnerships including our role as Amazon\'s channel partner for pan-India business development.'
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      whileHover={{ y: -8 }}
                      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#b73235]"
                    >
                      <div className="text-[#b73235] mb-5 flex justify-center">{item.icon}</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}

            {/* Vision Section */}
            {activeSection === 'vision' && (
              <motion.section
                key="vision"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 md:p-16"
                id="vision-tab"
                aria-labelledby="vision-btn"
                role="tabpanel"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div variants={fadeIn} className="mb-12">
                    <div className="inline-flex items-center justify-center bg-white p-4 rounded-full shadow-lg mb-6">
                      <FaChartLine className="text-4xl text-[#b73235]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      Our Vision for the Future
                    </h2>
                    <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6"></div>
                    <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                      To establish ourselves as the premier global connectivity platform for procurement and trading, 
                      revolutionizing how businesses interact worldwide.
                    </p>
                  </motion.div>

                  <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8 text-left">
                    {[
                      
                        {
                          title: 'SP-API & SPP ',
                          description: 'Driving the future of e-commerce by leveraging Amazon SP-API to automate operations, streamline seller management, and lead the transformation to the new Selling Partner Platform (SPP) era.'
                        },
                        {
                          title: 'Business 2025 Initiative',
                          description: 'Our strategic roadmap is transforming global business operations through digital innovation and expanded market access.'
                        },
                        {
                          title: 'Universal Business Platform',
                          description: 'Developing an integrated ecosystem that connects industry players worldwide with seamless communication tools.'
                        },
                       
                        {
                          title: 'AI-Powered Business Intelligence',
                          description: 'Implementing AI solutions to deliver predictive analytics, intelligent recommendations, and performance insights for global sellers.'
                        },
                        {
                          title: 'Global Trade Automation',
                          description: 'Building tools to automate procurement, compliance, and payment flows for cross-border trade.'
                        },
                        {
                          title: 'Seller Success Ecosystem',
                          description: 'Creating a full-service ecosystem that supports sellers from onboarding to growth with expert-driven, tech-supported solutions.'
                        },
                        {
                          title: 'Cloud-First Architecture',
                          description: 'Migrating core infrastructure to a scalable cloud environment to ensure speed, security, and global availability.'
                        },
                        {
                          title: 'Multi-Marketplace Expansion',
                          description: 'Expanding seller access to new marketplaces beyond Amazon, including Walmart, eBay, Noon, and regional B2B hubs.'
                        },
                        {
                          title: 'End-to-End Logistics Innovation',
                          description: 'Integrating smart warehousing, real-time tracking, and last-mile delivery partnerships into our logistics services.'
                        }
                      
                      
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeIn}
                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-semibold mb-3 text-[#b73235]">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <motion.section
                key="experience"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-16 items-center"
                id="experience-tab"
                aria-labelledby="experience-btn"
                role="tabpanel"
              >
                <motion.div variants={fadeIn} className="relative order-2 lg:order-1">
                  <figure className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Our experienced team at U-Link It Us headquarters" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </figure>
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#b73235]">
                    <div className="text-2xl font-bold text-gray-800">15+ Years</div>
                    <div className="text-gray-600">Industry Leadership</div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-1 bg-[#b73235] mr-4"></div>
                    <h2 className="text-2xl font-semibold text-gray-700">OUR JOURNEY</h2>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                    A Legacy of Innovation and Growth
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    With over {isMounted ? yearsExperience : '15'} years of industry leadership, we've achieved numerous milestones 
                    while continuously evolving our services. Our Business Vision 2025 initiative is setting new standards for 
                    global commerce.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Each project benefits from our extensive network and valuable industry connections, ensuring our clients 
                    receive unparalleled advantages in their markets.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: <FaShieldAlt className="text-xl text-[#b73235]" />,
                        title: 'Precision Execution',
                        description: 'We combine strategic vision with operational excellence to deliver projects on time, every time.'
                      },
                      {
                        icon: <FaUsers className="text-xl text-[#b73235]" />,
                        title: 'Expert Team',
                        description: 'Our specialists bring deep expertise in e-commerce, supply chain management, and global trade.'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-[#b73235]/10 p-3 rounded-full mr-4 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.section>
            )}

            {/* Services Section */}
            {activeSection === 'services' && (
              <motion.section
                key="services"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                id="services-tab"
                aria-labelledby="services-btn"
                role="tabpanel"
              >
                <motion.div variants={fadeIn} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Comprehensive Business Solutions
                  </h2>
                  <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We offer end-to-end services designed to accelerate your business growth in the digital economy
                  </p>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <FaGlobe className="text-3xl" />,
                      title: "Global Expansion",
                      description: "Facilitating business growth in international markets including USA, UK, and Middle East and Other Gulf Countries"
                    },
                    {
                      icon: <FaShieldAlt className="text-3xl" />,
                      title: "IT Infrastructure",
                      description: "Secure and scalable technology solutions with robust data protection"
                    },
                    {
                      icon: <FaSearchDollar className="text-3xl" />,
                      title: "Market Intelligence",
                      description: "Comprehensive data collection and research to inform strategic decisions"
                    },
                    {
                      icon: <FaBoxes className="text-3xl" />,
                      title: "Global Procurement",
                      description: "End-to-end supply chain solutions for international markets"
                    },
                    {
                      icon: <FaHandshake className="text-3xl" />,
                      title: "Seller Ecosystem",
                      description: "Management services for over 2.5 million sellers across diverse categories"
                    },
                    {
                      icon: <FaShippingFast className="text-3xl" />,
                      title: "Logistics Network",
                      description: "Efficient global distribution and fulfillment solutions"
                    }
                  ].map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </motion.div>
              </motion.section>
            )}

            {/* Leadership Section */}
            {activeSection === 'leadership' && (
              <motion.section
                key="leadership"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-5xl mx-auto"
                id="leadership-tab"
                aria-labelledby="leadership-btn"
                role="tabpanel"
              >
                <motion.div variants={fadeIn} className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Visionary Leadership
                  </h2>
                  <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Guided by experience and driven by innovation
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative">
                      <figure>
                        <img 
                          className="w-full h-full object-cover"
                          src="/Images/2.webp" 
                          alt="Dhiraj Kumar Gupta, Founder & Director of U-Link It Us" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r"></div>
                      </figure>
                    </div>
                    <div className="p-8 md:w-3/5">
                      <div className="uppercase tracking-wider text-sm text-[#b73235] font-semibold mb-2">
                        Founder & Managing Director
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Dhiraj Kumar Gupta
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        A seasoned business strategist with over 15 years of experience, Mr. Gupta founded U-Link It Us with a vision 
                        to bridge global business opportunities through technology. His expertise in consultancy and business advisory 
                        has been instrumental in shaping the company's growth trajectory.
                      </p>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Known for his dynamic leadership, Mr. Gupta has successfully navigated the company through market challenges 
                        while maintaining a forward-looking approach to emerging business technologies.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">Leadership Attributes:</h4>
                        <ul className="space-y-3">
                          {[
                            "Strategic vision for digital transformation",
                            "Deep expertise in global e-commerce ecosystems",
                            "Proven track record in building strategic partnerships",
                            "Commitment to innovation and operational excellence"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="bg-[#b73235] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.section>
            )}

            {/* Partners Section */}
            {/* Partners Section */}
{/* Partners Section - Auto-Sliding Carousel */}
{activeSection === 'partners' && (
  <motion.section
    key="partners"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    id="partners-tab"
    aria-labelledby="partners-btn"
    role="tabpanel"
  >
    <motion.div variants={fadeIn} className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Strategic Global Partnerships
      </h2>
      <div className="w-24 h-1 bg-[#b73235] mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Collaborating with industry leaders to deliver exceptional value
      </p>
    </motion.div>

    {/* Carousel Container */}
    <div className="relative max-w-4xl mx-auto overflow-hidden">
      {/* Carousel Track */}
      <div className="relative h-[600px]">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center px-4"
            initial={{ opacity: 0, x: index === 0 ? 0 : 100 }}
            animate={{ 
              opacity: activePartner === index ? 1 : 0,
              x: activePartner === index ? 0 : (index < activePartner ? -100 : 100)
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 p-6 rounded-full mb-8">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="h-12 max-w-[180px] object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-8 text-center leading-relaxed">
                  {partner.description}
                </p>
                <div className="w-full bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Partnership Advantages:</h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {partner.benefits.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-[#b73235] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                          <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => setActivePartner(prev => (prev === 0 ? partners.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
        aria-label="Previous partner"
      >
        <svg className="w-6 h-6 text-[#b73235]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={() => setActivePartner(prev => (prev === partners.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
        aria-label="Next partner"
      >
        <svg className="w-6 h-6 text-[#b73235]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActivePartner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${activePartner === index ? 'bg-[#b73235]' : 'bg-gray-300 hover:bg-[#b73235]/50'}`}
            aria-label={`Go to partner ${index + 1}`}
          />
        ))}
      </div>
    </div>

    {/* Auto-rotation effect (optional) */}
    <AutoRotateCarousel 
      items={partners} 
      activeIndex={activePartner}
      setActiveIndex={setActivePartner}
      interval={5000}
    />

    {/* Regional Partners Grid */}
    <motion.div 
      variants={staggerContainer} 
      className="grid md:grid-cols-3 gap-8 mt-16"
    >
      {[
        {
          region: "North America",
          description: "Strategic alliances with leading technology and e-commerce firms across the United States",
          countries: ["USA", "Canada"]
        },
        {
          region: "Europe",
          description: "Collaborations with procurement specialists and logistics providers throughout the UK and EU",
          countries: ["UK", "Germany", "France"]
        },
        {
          region: "Middle East",
          description: "Established network of trade partners and business aggregators in key Gulf markets",
          countries: ["UAE", "Saudi Arabia", "Qatar"]
        }
      ].map((item, index) => (
        <PartnerCard 
          key={index}
          region={item.region}
          description={item.description}
          countries={item.countries}
        />
      ))}
    </motion.div>
  </motion.section>
)}
          </AnimatePresence>
        </main>

        {/* Stats Section */}
        <section className="bg-[#b73235] text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">By The Numbers</h2>
              <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
              <p className="text-xl max-w-2xl mx-auto">
                Quantifying our impact and reach in the global business ecosystem
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-8"
            >
              <StatItem 
                number="25+" 
                label="Lakh Sellers" 
                description="Networked across diverse product categories" 
              />
              <StatItem 
                number="15+" 
                label="Years Experience" 
                description="Delivering business solutions since 2011" 
              />
              <StatItem 
                number="50+" 
                label="Experts" 
                description="Dedicated professionals across our divisions" 
              />
              <StatItem 
                number="1000+" 
                label="Clients" 
                description="Businesses empowered through our services" 
              />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Accelerate Your Business Growth?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Partner with U-Link It Us for comprehensive IT, e-commerce, and procurement solutions tailored to your 
                specific business requirements and market objectives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a href="/contact">
               <button className="bg-[#b73235] hover:bg-[#9c2a2d] text-white font-semibold py-3 px-8 rounded-md text-lg transition-colors shadow-lg">
                  Contact Our Team
                </button>
               </a>
              <a href="/services">
              <button className="bg-white hover:bg-gray-100 text-[#b73235] font-semibold py-3 px-8 rounded-md text-lg transition-colors shadow-lg">
                  Explore Services
                </button>
              </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

// Reusable Components
const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#b73235]"
    >
      <div className="text-[#b73235] mb-5 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

const PartnerCard = ({ region, description, countries }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="text-3xl font-bold text-[#b73235] mb-4 text-center">{region}</div>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <ul className="flex flex-wrap justify-center gap-2">
        {countries.map((country, index) => (
          <li key={index}>
            <span 
              className="bg-[#b73235]/10 text-[#b73235] px-3 py-1 rounded-full text-sm font-medium"
            >
              {country}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const StatItem = ({ number, label, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="text-center p-6"
    >
      <div className="text-5xl font-bold mb-2">{number}</div>
      <div className="text-xl font-medium mb-2">{label}</div>
      <div className="text-white/80 text-sm">{description}</div>
    </motion.div>
  );
};

export default AboutPage;