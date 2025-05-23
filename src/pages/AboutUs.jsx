import React, { useState, useEffect } from 'react';
import { 
  FaGlobe, FaChartLine, FaShieldAlt, FaUsers, 
  FaLightbulb, FaHandshake, FaHistory, FaBoxes,
  FaNetworkWired, FaDatabase, FaSearchDollar, FaShippingFast
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
  






const AboutPage = () => {
  const { t } = useTranslation();  // Translation hook
  const partners = [
    {
      name: t("Amazon.ae Growth Partner"),
      logo: "/Images/amazonae.png",
      description: t("We facilitate entry and scale-up on Amazon UAE by supporting sellers with Arabic content localization, local fulfillment, and tailored marketing for Emirati audiences."),
      benefits: [
        t("Arabic product listing translation"),
        t("UAE-specific keyword research"),
        t("Local fulfillment and returns support"),
        t("Hyper-local advertising campaigns"),
        t("UAE customer behavior insights"),
        t("Compliance with UAE ecommerce laws"),
      ],
    },
    {
      name: t("Amazon.sa Growth Partner"),
      logo: "/Images/amazonsa1.png",
      description: t("Our team helps Indian sellers thrive in Saudi Arabia’s booming digital space through cultural targeting, KSA logistics, and platform-specific strategies."),
      benefits: [
        t("Saudi-focused product adaptation"),
        t("Cross-border to local delivery setup"),
        t("Campaign planning for Ramadan & national events"),
        t("Arabic UI/UX product enhancements"),
        t("KSA compliance and VAT registration"),
        t("Behavioral analytics for Saudi consumers"),
      ],
    },
    {
      name: t("noon Partner Network - MENA Region"),
      logo: "/Images/noon1.png",
      description: t("We collaborate with noon to drive seller success in the Gulf with product localization, Fulfilled by noon (FBN) logistics, and access to exclusive marketing channels."),
      benefits: [
        t("Arabic listing optimization"),
        t("noon FBN integration & onboarding"),
        t("Access to influencer marketing in GCC"),
        t("Participation in regional promotional events"),
        t("Local pricing and settlement support"),
        t("GCC-specific sales analytics"),
      ],
    },
    {
      name: t("U-Link Gulf eCommerce Expansion Partner"),
      logo: "/Images/Ulinkit.png",
      description: t("Ulinkit empowers Indian sellers with smart technology, logistics, and marketing strategies to succeed in the Gulf’s fast-growing digital marketplaces."),
      benefits: [
        t("Multi-platform Gulf marketplace integration"),
        t("Tailored catalog enhancement for Arabic-speaking buyers"),
        t("Cross-border and in-region logistics support"),
        t("Arabic customer service enablement"),
        t("AI-powered demand forecasting"),
        t("Local compliance and legal guidance"),
      ],
    },
    {
      name: t("DP World Logistics Partner - GCC Region"),
      logo: "/Images/Logo New.svg",
      description: t("DP World is our logistics backbone across the Gulf, offering fast, scalable, and customs-compliant shipping for ecommerce sellers targeting UAE, KSA, and beyond."),
      benefits: [
        t("Warehousing hubs across Gulf countries"),
        t("Smart cross-border logistics"),
        t("Streamlined customs and clearance solutions"),
        t("Regional courier and last-mile integration"),
        t("Supply chain visibility dashboards"),
        t("GCC trade documentation support"),
      ],
    },
    {
      name: t("Amazon SPN Partner (MENA Region Services)"),
      logo: "/Images/amazonspn.png",
      description: t("As part of Amazon's SPN program, we offer verified services tailored to the Gulf market—spanning cataloging, ads, and performance optimization."),
      benefits: [
        t("Arabic SPN-verified catalog creation"),
        t("Gulf-centric Sponsored Ads setup"),
        t("Professional imaging tailored to MENA consumers"),
        t("Localized training and certifications"),
        t("Automated sales reporting for Gulf accounts"),
        t("Account health support for Amazon.ae & .sa"),
      ],
    },
    {
      name: t("Souq Legacy Partner"),
      logo: "/Images/souq.png",
      description: t("We continue to support merchants who began their journey on Souq by offering seamless transition support to Amazon.ae and Amazon.sa platforms."),
      benefits: [
        t("Souq to Amazon catalog migration"),
        t("Legacy data optimization"),
        t("Customer feedback retention"),
        t("Sales tracking continuity"),
        t("Migration documentation and help"),
        t("Platform onboarding guidance"),
      ],
    },
    {
      name: t("Gulf Market VAT & Compliance Partner"),
      logo: "/Images/amazonco.png",
      description: t("We assist sellers in understanding and fulfilling VAT, invoicing, and product compliance requirements across GCC ecommerce platforms."),
      benefits: [
        t("UAE and KSA VAT registration help"),
        t("Product eligibility checks"),
        t("E-invoicing compliance systems"),
        t("Customs and regulatory support"),
        t("Translation of certificates and packaging"),
        t("Audit-prepared documentation kits"),
      ],
    },
    {
      name: t("Official Amazon Global Selling Partner"),
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      description: t("As an official Amazon Global Selling Partner, we enable sellers to expand into Amazon's global markets, including the Gulf, with region-aware strategies."),
      benefits: [
        t("Gulf store setup and compliance"),
        t("Amazon.ae and Amazon.sa growth planning"),
        t("Cross-border logistics with Gulf integration"),
        t("GCC marketplace health management"),
        t("Arabic keyword & content support"),
        t("Data-driven growth forecasting"),
      ],
    },
    {
      name: t("Tredling - B2B Gulf Export Channel"),
      logo: "/Images/tredling.png",
      description: t("Tredling supports Indian exporters entering B2B ecommerce across Gulf countries by simplifying trade, finance, and product placement strategies."),
      benefits: [
        t("Access to B2B buyer networks in the Gulf"),
        t("Support with Halal certifications & compliance"),
        t("Trade finance and credit risk solutions"),
        t("Localized sales kits for Arab buyers"),
        t("Real-time export visibility"),
        t("Gulf-region payment processing help"),
      ],
    },
  ];
  
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
    { id: 'about', title: t('About Us'), icon: <FaGlobe /> },
    { id: 'mission', title: t('Our Mission'), icon: <FaLightbulb /> },
    { id: 'vision', title: t('Our Vision'), icon: <FaChartLine /> },
    { id: 'experience', title: t('Our Experience'), icon: <FaHistory /> },
    { id: 'services', title: t('Our Services'), icon: <FaBoxes /> },
    { id: 'leadership', title: t('Leadership'), icon: <FaUsers /> },
    { id: 'partners', title: t('Global Partners'), icon: <FaHandshake /> },
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
  <title>About U-Link Gulf - IT, E-commerce, Logistics & Procurement Experts</title>
  
  <meta name="description" content="Explore U-Link Gulf – your trusted partner for IT, e-commerce, logistics, and procurement services tailored for businesses across the UAE, Saudi Arabia, and the global market." />
  
  <meta name="keywords" content="IT solutions Gulf, e-commerce UAE, Saudi logistics, procurement services, cross-border ecommerce, Amazon Gulf partner, Middle East business support" />
  
  <meta property="og:title" content="About U-Link Gulf - IT, E-commerce & Logistics Experts in the Middle East" />
  <meta property="og:description" content="Empowering Gulf businesses with advanced IT, e-commerce platforms, and logistics solutions. Serving the UAE, KSA, and global markets with 15+ years of expertise." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ulinkitus.com/about" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About U-Link Gulf | E-commerce & Logistics in the Middle East" />
  <meta name="twitter:description" content="U-Link Gulf specializes in IT, e-commerce, and cross-border logistics solutions for businesses in the Gulf region and beyond." />
  
  <link rel="canonical" href="https://www.ulinkitus.com/about" />
  
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "U-Link Gulf",
      "url": "https://www.ulinkitus.com",
      "logo": "https://www.ulinkitus.com/logo.png",
      "description": "Trusted provider of IT, e-commerce, logistics, and procurement services tailored for the Gulf region and international markets.",
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
        "https://x.com/dhirajkgupta84"
      ]
    })}
  </script>
</Helmet>


      <div className="min-h-screen bg-white">
        {/* Hero Section with semantic h1 */}
        <section className="relative bg-[#009000] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007d00] to-[#009000] opacity-95"></div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t("Pioneering Global Business Solutions Since 2011")}
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
  {t("U-Link Gulf empowers businesses across the UAE, Saudi Arabia, and wider Gulf region with cutting-edge IT, e-commerce, logistics, and procurement solutions—driving growth through cross-border marketplace expansion, strategic partnerships, and regional expertise.")}
</p>

            </motion.div>
          </div>
        </section>

        {/* Navigation with aria labels */}
        <nav aria-label={t("About page sections")} className="sticky top-0 z-20 bg-white shadow-sm">
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
                className={`flex items-center px-5 py-3 rounded-md transition-all ${
                  activeSection === section.id
                    ? 'bg-[#009000] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#009000]'
                }`}
              >
                <span className="mr-2 text-sm" aria-hidden="true">{section.icon}</span>
                <span className="whitespace-nowrap text-sm font-medium">{t(section.title)}</span>
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
    <div className="w-12 h-1 bg-[#009000] mr-4"></div>
    <h2 className="text-2xl font-semibold text-gray-700">{t("OUR COMPANY")}</h2>
  </div>

  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
    {t("Redefining Business Solutions Since 2011")}
  </h3>

  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
    {t("U-Link Gulf leads digital innovation by delivering next-gen IT, e-commerce, logistics, and procurement solutions to businesses across the Gulf region and beyond.Our technology-driven approach and deep market knowledge enable clients to scale confidently in competitive markets.")} 
    
  </p>

  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
    {t("With over 15 years of industry experience, we specialize in cross-border commerce, regional marketplace entry, and full-service operational support—empowering brands to grow across the UAE, Saudi Arabia, and global markets with confidence.")}
    
  </p>

  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#009000]">
    <h4 className="text-xl font-semibold mb-4 text-gray-800">{t("Global Business Aggregator")}</h4>
    <p className="text-gray-600 mb-4">
      {t("From strategic expansion to fulfillment and compliance, U-Link Gulf serves as a trusted partner for businesses looking to grow in the USA, UK, UAE, Saudi Arabia,and other Gulf Cooperation Council (GCC) countries.")}
      
    </p>
    <ul className="grid grid-cols-2 gap-4">
      {['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'USA', 'UK'].map((country) => (
        <li key={country} className="flex items-center">
          <div className="w-2 h-2 bg-[#009000] rounded-full mr-2"></div>
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
                      alt="U-Link Gulf team collaborating in modern office" 
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </figure>
                  <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#009000]">
                    <div className="text-4xl font-bold text-[#009000] mb-1">
                      {isMounted ? yearsExperience : '0'}+
                    </div>
                    <div className="text-gray-600 font-medium">{t("Years of Excellence")}</div>
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
                      <FaLightbulb className="text-4xl text-[#009000]" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {t("Our Guiding Principles")}
                  </h2>
                  <div className="w-24 h-1 bg-[#009000] mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {t("To deliver unparalleled business solutions through innovation, quality, and client-centric services that drive sustainable growth.")}
                  </p>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
                  {
                   [
                    {
                      icon: <FaShieldAlt className="text-3xl text-[#009000]" />,
                      title: t('Quality Assurance'),
                      description:
                        t('We maintain the highest standards through continuous innovation, ensuring our services align with Gulf market expectations and global benchmarks.')
                    },
                    {
                      icon: <FaUsers className="text-3xl text-[#009000]" />,
                      title: t('Client Success'),
                      description:
                        t('We empower regional businesses with tailored, end-to-end solutions—designed to foster growth, streamline operations, and drive long-term success.')
                    },
                    {
                      icon: <FaNetworkWired className="text-3xl text-[#009000]" />,
                      title: t('Global Network'),
                      description:
                        t('Our global network and strategic partnerships—including our Amazon and noon collaborations—enable seamless cross-border eCommerce expansion across Gulf countries.')
                    }
                  
                  
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      whileHover={{ y: -8 }}
                      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#009000]"
                    >
                      <div className="text-[#009000] mb-5 flex justify-center">{item.icon}</div>
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
                className="bg-white rounded-3xl p-12 md:p-16"
                id="vision-tab"
                aria-labelledby="vision-btn"
                role="tabpanel"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div variants={fadeIn} className="mb-12">
                    <div className="inline-flex items-center justify-center bg-white p-4 rounded-full shadow-lg mb-6">
                      <FaChartLine className="text-4xl text-[#009000]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      {t("Our Vision for the Future")}
                    </h2>
                    <div className="w-24 h-1 bg-[#009000] mx-auto mb-6"></div>
                    <p className="text-2xl text-gray-700 font-medium leading-relaxed">
  {t("To lead the digital evolution of global procurement and trade by creating seamless, tech-driven connections between businesses across the Gulf and international markets.")}
</p>

                  </motion.div>

                  <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8 text-left">
                    {
                      [
                        {
                          title: t('SP-API & SPP Enablement'),
                          description: t('Accelerating the adoption of Amazon’s Selling Partner API and new SPP platform to automate seller workflows, compliance, and multi-country operations—especially for Gulf-based exporters.')
                        },
                        {
                          title: t('Business 2025 Vision'),
                          description: t('Executing a bold digital transformation roadmap that enhances operational efficiency, unlocks new Gulf markets, and positions businesses for global competitiveness.')
                        },
                        {
                          title: t('Universal Business Platform'),
                          description: t('Engineering a centralized ecosystem that connects stakeholders across procurement, logistics, e-commerce, and compliance within the Gulf and beyond.')
                        },
                        {
                          title: t('AI-Powered Business Intelligence'),
                          description: t('Deploying AI-driven analytics to empower sellers with predictive data, automated insights, and decision-making support tailored to Gulf market behaviors.')
                        },
                        {
                          title: t('Global Trade Automation'),
                          description: t('Digitizing and automating end-to-end trade processes—from customs documentation to FX and settlement—to simplify global exports from the Gulf.')
                        },
                        {
                          title: t('Seller Success Ecosystem'),
                          description: t('Providing Gulf-based sellers with a 360° growth framework that includes onboarding, advertising, compliance, and operational scale-up support.')
                        },
                        {
                          title: t('Cloud-First Architecture'),
                          description: t('Transitioning to a robust, secure cloud infrastructure to deliver scalable, always-on services across the Gulf and international markets.')
                        },
                        {
                          title: t('Multi-Marketplace Expansion'),
                          description: t('Expanding access to platforms beyond Amazon—including noon, Walmart, eBay, and localized Gulf B2B/B2C marketplaces—to maximize seller reach.')
                        },
                        {
                          title: t('End-to-End Logistics Innovation'),
                          description: t('Building a smart logistics network featuring bonded warehousing, regional fulfillment, real-time tracking, and last-mile partnerships across the GCC.')
                        }
                        
                      
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeIn}
                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-semibold mb-3 text-[#009000]">{item.title}</h3>
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
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#009000]">
                    <div className="text-2xl font-bold text-gray-800">{t('15+ Years')}</div>
                    <div className="text-gray-600">{t('Industry Leadership')}</div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-1 bg-[#009000] mr-4"></div>
                    <h2 className="text-2xl font-semibold text-gray-700">{t("OUR JOURNEY")}</h2>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                    {t("A Legacy of Innovation and Growth")}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
  {t('With over {yearsExperience} years of industry leadership, we\'ve achieved numerous milestones while continuously evolving our services. Our Business Vision 2025 initiative is setting new standards for global commerce.', { yearsExperience: isMounted ? yearsExperience : '15' })}
</p>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {t('Each project benefits from our extensive network and valuable industry connections, ensuring our clients receive unparalleled advantages in their markets.')}
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: <FaShieldAlt className="text-xl text-[#009000]" />,
                        title: t('Precision Execution'),
                        description: t('We combine strategic vision with operational excellence to deliver projects on time, every time.')
                      },
                      {
                        icon: <FaUsers className="text-xl text-[#009000]" />,
                        title: t('Expert Team'),
                        description: t('Our specialists bring deep expertise in e-commerce, supply chain management, and global trade.')
                      }
                      
                      
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-[#009000]/10 p-3 rounded-full mr-4 flex-shrink-0">
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
                    {t('Comprehensive Business Solutions')}
                  </h2>
                  <div className="w-24 h-1 bg-[#009000] mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('We offer end-to-end services designed to accelerate your business growth in the digital economy')}
                  </p>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
  
    {
      icon: <FaGlobe className="text-3xl" />,
      title: t("Global Expansion"),
      description: t(
        "Facilitating business growth in international markets including Gulf countries like Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain."
      ),
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: t("IT Infrastructure"),
      description: t(
        "Secure and scalable technology solutions with robust data protection."
      ),
    },
    {
      icon: <FaSearchDollar className="text-3xl" />,
      title: t("Market Intelligence"),
      description: t(
        "Comprehensive data collection and research to inform strategic decisions."
      ),
    },
    {
      icon: <FaBoxes className="text-3xl" />,
      title: t("Global Procurement"),
      description: t("End-to-end supply chain solutions for international markets."),
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: t("Seller Ecosystem"),
      description: t(
        "Management services for over 2.5 million sellers across diverse categories."
      ),
    },
    {
      icon: <FaShippingFast className="text-3xl" />,
      title: t("Logistics Network"),
      description: t("Efficient global distribution and fulfillment solutions."),
    },
  
  
]
.map((service, index) => (
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
                    {t('Visionary Leadership')}
                  </h2>
                  <div className="w-24 h-1 bg-[#009000] mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('Guided by experience and driven by innovation')}
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
                      <div className="uppercase tracking-wider text-sm text-[#009000] font-semibold mb-2">
                        {t("Founder & Managing Director")}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {t("Dhiraj Kumar Gupta")}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {t('A seasoned business strategist with over 15 years of experience, Mr. Gupta founded U-Link Gulf with a vision to bridge global business opportunities through technology. His expertise in consultancy and business advisory has been instrumental in shaping the company’s growth trajectory.')}
                      </p>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        
                        
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">{t('Leadership Attributes:')}</h4>
                        <ul className="space-y-3">
                          {[
  t("Strategic vision for digital transformation"),
  t("Deep expertise in global e-commerce ecosystems"),
  t("Proven track record in building strategic partnerships"),
  t("Commitment to innovation and operational excellence")
].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="bg-[#009000] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
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
        {t("Strategic Global Partnerships")}
      </h2>
      <div className="w-24 h-1 bg-[#009000] mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {t("Collaborating with industry leaders to deliver exceptional value")}
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
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">{t("Partnership Advantages:")}</h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {partner.benefits.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-[#009000] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
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
        <svg className="w-6 h-6 text-[#009000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={() => setActivePartner(prev => (prev === partners.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
        aria-label="Next partner"
      >
        <svg className="w-6 h-6 text-[#009000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActivePartner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${activePartner === index ? 'bg-[#009000]' : 'bg-gray-300 hover:bg-[#009000]/50'}`}
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
            region: t("North America"),
            description: t("Strategic alliances with leading technology and e-commerce firms across the United States"),
            countries: [t("USA"), t("Canada")]
          },
          {
            region: t("Europe"),
            description: t("Collaborations with procurement specialists and logistics providers throughout the UK and EU"),
            countries: [t("UK"), t("Germany"), t("France")]
          },
          {
            region: t("Gulf Countries"),
            description: t("Established network of trade partners and business aggregators in key Gulf markets"),
            countries: [t("UAE"), t("Saudi Arabia"), t("Qatar")]
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
        <section className="bg-[#009000] text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('By The Numbers')}</h2>
              <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
              <p className="text-xl max-w-2xl mx-auto">
                {t('Quantifying our impact and reach in the global business ecosystem')}
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
  label={t("Lakh Sellers")} 
  description={t("Networked across diverse product categories")} 
/>
<StatItem 
  number="15+" 
  label={t("Years Experience")} 
  description={t("Delivering business solutions since 2011")} 
/>
<StatItem 
  number="50+" 
  label={t("Experts")} 
  description={t("Dedicated professionals across our divisions")} 
/>
<StatItem 
  number="1000+" 
  label={t("Clients")} 
  description={t("Businesses empowered through our services")} 
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
              {t("Ready to Accelerate Your Business Growth?")}
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
              {t("Partner with U-Link Gulf for comprehensive IT, e-commerce, and procurement solutions tailored to your specific business requirements and market objectives.")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a href="/contact">
               <button className="bg-[#008000] hover:bg-[#006400] text-white font-semibold py-3 px-8 rounded-md text-lg transition-colors shadow-lg">
               {t("Contact Our Team")}
</button>

               </a>
              <a href="/services">
              <button className="bg-white hover:bg-gray-100 text-[#009000] font-semibold py-3 px-8 rounded-md text-lg transition-colors shadow-lg">
              {t("Explore Services")}
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
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#009000]"
    >
      <div className="text-[#009000] mb-5 flex justify-center">{icon}</div>
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
      <div className="text-3xl font-bold text-[#009000] mb-4 text-center">{region}</div>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <ul className="flex flex-wrap justify-center gap-2">
        {countries.map((country, index) => (
          <li key={index}>
            <span 
              className="bg-[#b73235]/10 text-[#009000] px-3 py-1 rounded-full text-sm font-medium"
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