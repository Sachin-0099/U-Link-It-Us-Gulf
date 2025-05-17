import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBoxes, FaChartLine, FaClipboardCheck, FaStar, 
  FaShieldAlt, FaComments, FaRocket, FaChevronDown, FaChevronUp,
  FaCheck, FaHandshake, FaChartBar, FaHeadset, FaTools,FaLaptopCode,FaTruck
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState("services");
  const { t } = useTranslation();  // Translation hook

 const services = [
  {
    id: 1,
    title: t("Inventory Management"),
    description: t("Daily monitoring and synchronization across all portals to prevent stock-outs and ensure optimal inventory levels."),
    detailedDescription: [
      t("Real-time inventory tracking across all sales channels"),
      t("Automated replenishment alerts"),
      t("Seasonal demand forecasting"),
      t("Multi-warehouse synchronization"),
      t("Inventory health reporting")
    ],
    icon: <FaBoxes className="text-3xl" />
  },
  {
    id: 2,
    title: t("Sales Management"),
    description: t("Continuous tracking of product performance with dynamic strategies to maintain and boost sales rankings."),
    detailedDescription: [
      t("Competitor price monitoring"),
      t("Sales trend analysis"),
      t("Promotion strategy development"),
      t("Buy Box optimization"),
      t("Performance benchmarking")
    ],
    icon: <FaChartLine className="text-3xl" />
  },
  {
    id: 3,
    title: t("Order Management"),
    description: t("Timely processing of all orders to maintain excellent dispatch rates and account performance metrics."),
    detailedDescription: [
      t("Order processing automation"),
      t("Shipping optimization"),
      t("Return management"),
      t("Delivery performance tracking"),
      t("Customer notification system")
    ],
    icon: <FaClipboardCheck className="text-3xl" />
  },
  {
    id: 4,
    title: t("Reviews & Rating"),
    description: t("Proactive monitoring and resolution of customer feedback to maintain positive ratings and reviews."),
    detailedDescription: [
      t("Review monitoring dashboard"),
      t("Automated feedback requests"),
      t("Negative review response system"),
      t("Review analysis reporting"),
      t("Seller rating optimization")
    ],
    icon: <FaStar className="text-3xl" />
  },
  {
    id: 5,
    title: t("Account Health"),
    description: t("Comprehensive monitoring to ensure compliance with all platform policies and performance standards."),
    detailedDescription: [
      t("Policy compliance monitoring"),
      t("Performance metric tracking"),
      t("Account health alerts"),
      t("Violation resolution support"),
      t("Preventative strategy development")
    ],
    icon: <FaShieldAlt className="text-3xl" />
  },
  {
    id: 6,
    title: t("Buyer Communication"),
    description: t("24-hour response guarantee for all customer inquiries and issues."),
    detailedDescription: [
      t("Dedicated response team"),
      t("Standardized response templates"),
      t("Escalation protocol for complex issues"),
      t("Multilingual support available"),
      t("Customer satisfaction tracking")
    ],
    icon: <FaComments className="text-3xl" />
  },
  {
    id: 7,
    title: t("Sales Boost Program"),
    description: t("Our proprietary 3-step strategy combining listing enhancement, sponsored products, and review management."),
    detailedDescription: [
      t("Listing optimization audit"),
      t("Keyword strategy development"),
      t("Sponsored ad campaign management"),
      t("Conversion rate optimization"),
      t("Performance analytics dashboard")
    ],
    icon: <FaRocket className="text-3xl" />
  },
  {
    id: 8,
    title: t("IT Services"),
    description: t("Customized IT solutions designed to support the growth of your e-commerce business in the Gulf region."),
    detailedDescription: [
      t("E-commerce platform integration for local marketplaces"),
      t("Technical troubleshooting tailored to Gulf-specific needs"),
      t("API integrations and automation for regional platforms"),
      t("Security & data protection for Gulf-based e-commerce businesses"),
      t("Cloud computing solutions with Gulf data centers")
    ],
    icon: <FaLaptopCode className="text-3xl" />
  },
  {
    id: 9,
    title: t("Logistics Management"),
    description: t("Streamlining logistics operations to ensure timely deliveries and efficient supply chain management across the Gulf region."),
    detailedDescription: [
      t("Real-time tracking of shipments across Gulf countries"),
      t("Third-party logistics (3PL) integration in the Gulf"),
      t("Route optimization for deliveries within UAE, Saudi Arabia, and Qatar"),
      t("Customs clearance & import/export support specific to Gulf regulations"),
      t("Warehousing & distribution management across the GCC")
    ],
    icon: <FaTruck className="text-3xl" />
  }
  
    ];

    const features = [
      {
        title: t("Proven Results"),
        description: t("Average 45% sales increase for clients in first 6 months"),
        icon: <FaChartBar className="text-2xl" />
      },
      {
        title: t("Dedicated Team"),
        description: t("Your own account manager and support specialists"),
        icon: <FaHeadset className="text-2xl" />
      },
      {
        title: t("Advanced Tools"),
        description: t("Proprietary software and analytics dashboards"),
        icon: <FaTools className="text-2xl" />
      },
      {
        title: t("Flexible Plans"),
        description: t("Customizable service packages to fit your needs"),
        icon: <FaHandshake className="text-2xl" />
      }
      
    ];


  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const renderServicesTab = () => (
    <>
      {/* Key Features Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-16"
      >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-start p-4 bg-gray-50 rounded-lg transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex-shrink-0 bg-[#009000] rounded-lg p-3 text-white">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-1 text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-[#009000] rounded-lg p-3 text-white">
                    {service.icon}
                  </div>
                  <div className="ml-4 text-2xl font-bold text-gray-900">{service.id}</div>
                </div>
                <button 
                  onClick={() => toggleService(service.id)}
                  className="text-gray-400 hover:text-[#009000] transition-colors duration-200"
                  aria-label={expandedService === service.id ? "Collapse service details" : "Expand service details"}
                >
                  {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-base text-gray-600">{service.description}</p>
              
              <AnimatePresence>
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <h4 className="text-sm font-semibold text-[#009000] uppercase tracking-wide">
                    {t("Detailed Features")}
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {service.detailedDescription.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                          <span className="ml-3 text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );

  const renderProcessTab = () => (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {t("Our 4-Step Implementation Process")}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          {t("We follow a structured approach to ensure seamless onboarding and continuous optimization.")}
        </p>
      </div>

      <div className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <div className="space-y-12">
              { [
 
  {
    step: t("1"),
    title: t("Discovery & Analysis"),
    description: t("We conduct a comprehensive audit of your current seller account performance across Gulf marketplaces, analyzing key metrics and competitor positioning in the UAE, Saudi Arabia, Qatar, and beyond.")
  },
  {
    step: t("2"),
    title: t("Strategy Development"),
    description: t("Our team creates a customized management plan for your Gulf-based account, with tailored KPIs and optimization strategies aligned to local market demands and regional selling trends.")
  },
  {
    step: t("3"),
    title: t("Implementation"),
    description: t("We deploy our proven systems and processes across your seller account, ensuring smooth operations while maintaining transparent communication with you throughout the Gulf-focused campaign.")
  },
  {
    step: t("4"),
    title: t("Ongoing Optimization"),
    description: t("Continuous monitoring and adjustments are made to enhance your performance based on real-time data, feedback, and changes in Gulf market conditions.")
  }


]
.map((item) => (
                <div key={item.step} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#009000] text-white text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="bg-[#009000] bg-opacity-5 p-8 rounded-xl m-4">
              <img 
                src="/Images/implementation.avif" 
                alt="Implementation process visual"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );

  const renderResultsTab = () => (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {t("Trusted by Sellers Worldwide")}
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          
            {
              quote: t("U-Link Gulf transformed our Amazon business. Sales increased by 68% in the first quarter with their management."),
              author: t("Sarah Johnson"),
              position: t("CEO, Home Essentials Inc."),
              stats: t("68% sales increase")
            },
            {
              quote: t("Their inventory management system saved us from costly stockouts during peak season. Highly recommended!"),
              author: t("Michael Chen"),
              position: t("Operations Director, TechGadgets"),
              stats: t("100% inventory accuracy")
            },
            {
              quote: t("The dedicated support team responds faster than our in-house staff ever could. Truly 24/7 service."),
              author: t("David Rodriguez"),
              position: t("Founder, FashionForward"),
              stats: t("98% response rate under 2h")
            }
          
          
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg transition-all duration-200"
          >
            <div className="relative">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative text-gray-600 italic">{testimonial.quote}</p>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0 bg-[#009000] rounded-full p-1">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  {testimonial.author.charAt(0)}
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                <p className="mt-1 text-xs font-medium text-[#009000]">{testimonial.stats}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  return (
    <>
   <Helmet>
  <title>Our Services - U-Link Gulf | IT, E-commerce & Procurement Solutions</title>
  <meta
    name="description"
    content="Explore the wide range of services offered by U-Link Gulf — from IT consulting to e-commerce management and procurement solutions tailored to drive your business forward."
  />
</Helmet>

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab("services")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === "services" ? 'border-[#009000] text-[#009000]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              {t("Our Services")}
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === "process" ? 'border-[#009000] text-[#009000]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              {t("Our Process")}
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === "results" ? 'border-[#009000] text-[#009000]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              {t("Client Results")}
            </button>
          </nav>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-base font-semibold text-[#009000] tracking-wide uppercase">
              {t("Our Management System")}
            </h2>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              {t("Comprehensive Account Management Solution")}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            {t("Specialized in Account Management, IT Services, and Logistics for the Gulf—powered by technology, expertise, and trusted support to accelerate your marketplace growth.")}
            </p>
          </motion.div>

          {/* Tab Content */}
          {activeTab === "services" && renderServicesTab()}
          {activeTab === "process" && renderProcessTab()}
          {activeTab === "results" && renderResultsTab()}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 bg-[#009000] rounded-xl shadow-xl overflow-hidden"
          >
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">{t("Ready to transform your seller account?")}</span>
                    <span className="block text-white opacity-90">{t("Schedule a free consultation today.")}</span>
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg text-white opacity-80">
                    {t("Our experts will analyze your current performance and provide actionable recommendations.")}
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#b73235] bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    >
                      {t("Get Started")}
                    </a>
                  </div>
                  <div className="inline-flex rounded-md shadow">
                  <a
  href="#"
  className="inline-flex items-center justify-center px-8 py-3 border border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-[#009000] hover:bg-opacity-10 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-not-allowed"
  aria-disabled="true"
  title="Coming Soon"
>
{t("Request Demo")}
</a>



                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesPage;