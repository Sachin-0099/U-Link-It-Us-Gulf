import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();
  const [quickViewData, setQuickViewData] = useState(null);

  const services = [
    {
      id: t("marketplace-onboarding"),
      title: t("Marketplace Onboarding for GCC Sellers"),
      description: t("Seamlessly launch your business on platforms like Amazon UAE, Noon, and Carrefour GCC. We guide you through every step — from account setup to catalog creation — ensuring you're marketplace-ready across the Gulf region."),
      image: "/Images/AccountH.avif",
      color: "#4f46e5",
      features: [
        t("Precision implementation"),
        t("Quality assurance"),
        t("Continuous improvement"),
        t("Client-focused solutions")
      ]
    },
    {
      id: "cross-border-ecommerce",
      title: t("Cross-Border eCommerce Solutions in the Gulf"),
      description: t("Sell globally from the Gulf with zero hassle. Our end-to-end export services help businesses in UAE, Saudi Arabia, and other GCC countries access international markets, managing logistics, compliance, and payment processing."),
      image: "/Images/crossBorder.avif",
      color: "#10b981",
      features: [
        t("Comprehensive screening"),
        t("Skills assessment"),
        t("Cultural fit evaluation"),
        t("Industry-specific expertise")
      ]
    },
    {
      id: "inventory-management",
      title: t("Smart Inventory & Order Management for Gulf Sellers"),
      description: t("Stay on top of your stock and sales across marketplaces like Amazon.sa, Noon.com, and Carrefour UAE. Our dashboard supports real-time inventory tracking for sellers in the GCC region."),
      image: "/Images/Inventory & Order Management.avif",
      color: "#f59e0b",
      features: [
        t("Real-time tracking"),
        t("Automated stock alerts"),
        t("Multi-platform sync"),
        t("Detailed analytics")
      ]
    },
    {
      id: "last-mile-delivery",
      title: t("Gulf-Focused Last-Mile Delivery & Logistics"),
      description: t("Fast, reliable delivery within and beyond the Gulf. We offer integrated shipping services in the UAE, Saudi Arabia, and GCC countries — including COD, express shipping, and international fulfillment."),
      image: "/Images/Last-Mile Delivery & Logistics.avif",
      color: "#ef4444",
      features: [
        t("Flexible delivery options"),
        t("Real-time tracking"),
        t("Return handling"),
        t("Global reach")
      ]
    },
    {
      id: "digital-marketing",
      title: t("Digital Marketing & Growth Strategy for GCC"),
      description: t("Grow your online presence across the Gulf. We specialize in performance marketing, SEO for Arabic audiences, and high-conversion campaigns tailored to platforms popular in the UAE, KSA, and Qatar."),
      image: "/Images/Digital Marketing & Growth Strategy.avif",
      color: "#6366f1",
      features: [
        t("Performance-based marketing"),
        t("Brand awareness campaigns"),
        t("Influencer collaboration"),
        t("Conversion optimization")
      ]
    },
    {
      id: "product-cataloging",
      title: t("Product Cataloging & Photography for Gulf Marketplaces"),
      description: t("Make your listings stand out on Gulf eCommerce platforms. From professional shoots to Arabic content optimization, we help sellers in the UAE, Qatar, and Bahrain improve visibility and conversions."),
      image: "/Images/Product Cataloging & Photography  .avif",
      color: "#0ea5e9",
      features: [
        t("High-resolution product shoots"),
        t("SEO-optimized content"),
        t("Bulk catalog uploads"),
        t("Platform-specific templates")
      ]
    },
    {
      id: "It-services",
      title: t("IT Services & Infrastructure for Gulf Enterprises"),
      description: t("Empower your business in the GCC with robust IT solutions. From cloud hosting to software development, we provide secure, scalable tech services tailored for companies in UAE, KSA, and Oman."),
      image: "/Images/IT Services & Infrastructure.avif",
      color: "#3b82f6",
      features: [
        t("Cloud hosting & support"),
        t("Custom app development"),
        t("Security & compliance"),
        t("Tech infrastructure setup")
      ]
    },
    {
      id: "Logistics-management",
      title: t("Integrated Logistics Management for GCC Businesses"),
      description: t("Optimize logistics across the Gulf region. From warehousing in Dubai to delivery in Riyadh, our tech-enabled logistics service ensures efficiency throughout the supply chain."),
      image: "/Images/Last-Mile Delivery & Logistics.avif",
      color: "#8b5cf6",
      features: [
        t("Smart warehousing"),
        t("Route optimization"),
        t("Reverse logistics"),
        t("Carrier integration")
      ]
    },
    {
      id: "Brand-empowerment",
      title: t("Brand Empowerment Solutions for Gulf Markets"),
      description: t("Take control of your brand's image across the Gulf. We help you protect your brand, engage customers, and establish presence across platforms in Saudi Arabia, UAE, and the wider GCC."),
      image: "/Images/Brand Empowerment Solutions.avif",
      color: "#ec4899",
      features: [
        t("Brand protection tools"),
        t("Trademark & IP support"),
        t("Audience engagement"),
        t("Marketplace brand stores")
      ]
    },
    {
      id: "Global-reach",
      title: t("Global Reach Enablement from the Gulf"),
      description: t("Expand globally from your Gulf base. Our services localize your strategy for international markets while ensuring compliance and customer alignment from the UAE to the world."),
      image: "/Images/Global.avif",
      color: "#14b8a6",
      features: [
        t("Market localization"),
        t("International compliance"),
        t("Global payment gateways"),
        t("Cultural adaptation")
      ]
    },
    {
      id: "Branch-expansion",
      title: t("Branch Expansion Strategy Across the Gulf"),
      description: t("Thinking of opening new branches in Saudi Arabia, UAE, or Qatar? Our data-driven strategies help you choose the right location, build infrastructure, and scale efficiently across the Gulf."),
      image: "/Images/Branch Expansion Strategy.avif",
      color: "#f97316",
      features: [
        t("Location analytics"),
        t("Market demand forecasting"),
        t("Franchise models"),
        t("Operational planning")
      ]
    },
    {
      id: "customer-expectations",
      title: t("Customer Expectations Management in the Gulf"),
      description: t("Build long-lasting customer relationships in the Gulf region. We design feedback loops, support systems, and loyalty strategies for businesses in UAE, Bahrain, and Oman."),
      image: "/Images/Customer Expectations Management.avif",
      color: "#10b981",
      features: [
        t("Feedback management"),
        t("Retention campaigns"),
        t("Customer support setup"),
        t("Satisfaction tracking")
      ]
    },
    {
      id: "exhibition-business-setup",
      title: t("Exhibition and Business Setup Services in the Gulf"),
      description: t("Comprehensive support for your business and exhibition needs in Saudi Arabia and Dubai. From trade licenses to compliance, VAT accounting, and security solutions, we help you establish and run smoothly in these key markets."),
      image: "/Images/exhibition-business-setup.avif",
      color: "#2563eb",
      features: [
        t("Trade license for Saudi Arabia"),
        t("VAT account services"),
        t("Fire safety compliance"),
        t("Warehouse rental solutions"),
        t("Security camera installation"),
        t("Complete business setup with local compliance in UAE and Saudi Arabia")
      ]
    },
    {
      id: "trade-license-saudi",
      title: t("Trade License Services for Saudi Arabia"),
      description: t("Obtain and manage your trade license in Saudi Arabia efficiently with expert support ensuring full local compliance."),
      image: "/Images/trade-license-saudi.avif",
      color: "#2563eb",
      features: [
        t("License application assistance"),
        t("Document preparation"),
        t("Renewal and compliance checks")
      ]
    },
    {
      id: "vat-account-services",
      title: t("VAT Accounting Services in the Gulf"),
      description: t("Professional VAT registration and accounting services for businesses operating in Saudi Arabia and UAE, ensuring compliance with tax authorities."),
      image: "/Images/vat-account-services.avif",
      color: "#16a34a",
      features: [
        t("VAT registration support"),
        t("Periodic VAT filing"),
        t("Audit assistance"),
        t("Tax advisory")
      ]
    },
    {
      id: "fire-safety-compliance",
      title: t("Fire Safety Compliance Services"),
      description: t("Comprehensive fire safety audits and compliance services for your business premises in Saudi Arabia and Dubai, adhering to local regulations."),
      image: "/Images/fire-safety-compliance.avif",
      color: "#ef4444",
      features: [
        t("Fire risk assessments"),
        t("Safety equipment installation"),
        t("Regulatory compliance certification")
      ]
    },
    {
      id: "warehouse-rent",
      title: t("Warehouse Rental Solutions in the Gulf"),
      description: t("Find and manage warehouse spaces tailored to your business needs in Saudi Arabia and Dubai, with flexible lease terms and prime locations."),
      image: "/Images/warehouse-rent.avif",
      color: "#f59e0b",
      features: [
        t("Flexible lease agreements"),
        t("Strategic locations"),
        t("Secure and monitored facilities")
      ]
    },
    {
      id: "security-camera-installation",
      title: t("Security Camera Installation Services"),
      description: t("Professional installation and maintenance of security camera systems to ensure your business premises in Saudi Arabia and Dubai are safe and monitored."),
      image: "/Images/security-camera-installation.avif",
      color: "#8b5cf6",
      features: [
        t("Surveillance system design"),
        t("24/7 monitoring setup"),
        t("Maintenance and support")
      ]
    },
    {
      id: "complete-business-setup",
      title: t("Complete Business Setup with Local Compliance in UAE and Saudi Arabia"),
      description: t("End-to-end business setup services covering licensing, compliance, taxation, and operational support for companies in UAE and Saudi Arabia."),
      image: "/Images/complete-business-setup.avif",
      color: "#22d3ee",
      features: [
        t("Trade license acquisition"),
        t("Local compliance advisory"),
        t("Tax and VAT registration"),
        t("Operational setup assistance")
      ]
    }
  ];

  const openQuickView = (service) => {
    setQuickViewData(service);
  };

  const closeQuickView = () => {
    setQuickViewData(null);
  };

  return (
    <section className="services-section py-16 lg:py-24 px-4 sm:px-6 " aria-label={t("Our eCommerce Services")}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#009000] uppercase bg-[#009000]/10 rounded-full mb-4">
            {t("Our Solutions")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
            {t("Comprehensive")} <span className="text-[#009000]">{t("eCommerce Services")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("End-to-end solutions to launch, manage, and scale your online business across all major platforms")}
          </p>
        </motion.header>

        {/* Services Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.article 
              key={service.id}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full">
                {/* Service Image Banner - Clickable for Quick View */}
                <div 
                  className="relative h-48 w-full overflow-hidden cursor-pointer"
                  onClick={() => openQuickView(service)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
          
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 flex gap-3">
                <motion.button
                  onClick={() => openQuickView(service)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-3 px-4 rounded-lg font-medium transition-all border border-gray-300 bg-white text-gray-700"
                  aria-label={t("Learn more")}
                >
                  {t("Learn More")}
                </motion.button>
                <motion.button
                  whileHover={{ 
                    scale: 1.03, 
                    backgroundColor: service.color,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 px-4 rounded-lg font-semibold text-white transition-all"
                  style={{ backgroundColor: service.color }}
                  aria-label={`Get started with ${service.title}`}
                >
                  {t("Get Started")}
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Quick View Modal */}
        <AnimatePresence>
          {quickViewData && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeQuickView}
            >
              <motion.div 
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* Close Button */}
                  <button 
                    onClick={closeQuickView}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                    aria-label={t("Close quick view")}
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  {/* Quick View Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="lg:sticky lg:top-0 h-full">
                      <div className="h-64 lg:h-full w-full overflow-hidden">
                        <img
                          src={quickViewData.image}
                          alt={quickViewData.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 lg:p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{quickViewData.title}</h2>
                      
                      <p className="text-gray-600 mb-6">{quickViewData.description}</p>
                      
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        {t("Key Features")}
                      </h3>
                      
                      <ul className="space-y-3 mb-8">
                        {quickViewData.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg 
                              className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" 
                              style={{ color: quickViewData.color }} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                          whileHover={{ 
                            scale: 1.03, 
                            backgroundColor: quickViewData.color,
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all"
                          style={{ backgroundColor: quickViewData.color }}
                          aria-label={`Get started with ${quickViewData.title}`}
                        >
                          {t("Get Started")}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {t("Need a custom solution for your business?")}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            {t("Our team of eCommerce experts can tailor a package specifically for your business needs and growth goals")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:dhiraj@ulinkit.com?subject=Custom eCommerce Solution Inquiry">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0, 144, 0, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#009000] hover:bg-[#007700] text-white font-semibold py-3 px-8 rounded-lg text-base transition-all"
                aria-label={t("Contact our experts")}
              >
                {t("Contact Our Experts")}
              </motion.button>
            </a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled
              className="bg-white text-[#009000] font-semibold py-3 px-8 rounded-lg text-base border-2 border-[#009000] transition-all opacity-50 cursor-not-allowed"
              aria-label={t("Case studies (coming soon)")}
            >
              {t("Case Studies Coming Soon")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;