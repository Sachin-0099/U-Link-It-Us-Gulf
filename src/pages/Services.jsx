import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBoxes, FaChartLine, FaClipboardCheck, FaStar, 
  FaShieldAlt, FaComments, FaRocket, FaChevronDown, FaChevronUp,
  FaCheck, FaHandshake, FaChartBar, FaHeadset, FaTools
} from "react-icons/fa";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState("services");

 const services = [
      {
        id: 1,
        title: "Inventory Management",
        description: "Daily monitoring and synchronization across all portals to prevent stock-outs and ensure optimal inventory levels.",
        detailedDescription: [
          "Real-time inventory tracking across all sales channels",
          "Automated replenishment alerts",
          "Seasonal demand forecasting",
          "Multi-warehouse synchronization",
          "Inventory health reporting"
        ],
        icon: <FaBoxes className="text-3xl" />
      },
      {
        id: 2,
        title: "Sales Management",
        description: "Continuous tracking of product performance with dynamic strategies to maintain and boost sales rankings.",
        detailedDescription: [
          "Competitor price monitoring",
          "Sales trend analysis",
          "Promotion strategy development",
          "Buy Box optimization",
          "Performance benchmarking"
        ],
        icon: <FaChartLine className="text-3xl" />
      },
      {
        id: 3,
        title: "Order Management",
        description: "Timely processing of all orders to maintain excellent dispatch rates and account performance metrics.",
        detailedDescription: [
          "Order processing automation",
          "Shipping optimization",
          "Return management",
          "Delivery performance tracking",
          "Customer notification system"
        ],
        icon: <FaClipboardCheck className="text-3xl" />
      },
      {
        id: 4,
        title: "Reviews & Rating",
        description: "Proactive monitoring and resolution of customer feedback to maintain positive ratings and reviews.",
        detailedDescription: [
          "Review monitoring dashboard",
          "Automated feedback requests",
          "Negative review response system",
          "Review analysis reporting",
          "Seller rating optimization"
        ],
        icon: <FaStar className="text-3xl" />
      },
      {
        id: 5,
        title: "Account Health",
        description: "Comprehensive monitoring to ensure compliance with all platform policies and performance standards.",
        detailedDescription: [
          "Policy compliance monitoring",
          "Performance metric tracking",
          "Account health alerts",
          "Violation resolution support",
          "Preventative strategy development"
        ],
        icon: <FaShieldAlt className="text-3xl" />
      },
      {
        id: 6,
        title: "Buyer Communication",
        description: "24-hour response guarantee for all customer inquiries and issues.",
        detailedDescription: [
          "Dedicated response team",
          "Standardized response templates",
          "Escalation protocol for complex issues",
          "Multilingual support available",
          "Customer satisfaction tracking"
        ],
        icon: <FaComments className="text-3xl" />
      },
      {
        id: 7,
        title: "Sales Boost Program",
        description: "Our proprietary 3-step strategy combining listing enhancement, sponsored products, and review management.",
        detailedDescription: [
          "Listing optimization audit",
          "Keyword strategy development",
          "Sponsored ad campaign management",
          "Conversion rate optimization",
          "Performance analytics dashboard"
        ],
        icon: <FaRocket className="text-3xl" />
      }
    ];

    const features = [
      {
        title: "Proven Results",
        description: "Average 45% sales increase for clients in first 6 months",
        icon: <FaChartBar className="text-2xl" />
      },
      {
        title: "Dedicated Team",
        description: "Your own account manager and support specialists",
        icon: <FaHeadset className="text-2xl" />
      },
      {
        title: "Advanced Tools",
        description: "Proprietary software and analytics dashboards",
        icon: <FaTools className="text-2xl" />
      },
      {
        title: "Flexible Plans",
        description: "Customizable service packages to fit your needs",
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
                    <div className="flex-shrink-0 bg-[#b73235] rounded-lg p-3 text-white">
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
                  <div className="flex-shrink-0 bg-[#b73235] rounded-lg p-3 text-white">
                    {service.icon}
                  </div>
                  <div className="ml-4 text-2xl font-bold text-gray-900">{service.id}</div>
                </div>
                <button 
                  onClick={() => toggleService(service.id)}
                  className="text-gray-400 hover:text-[#b73235] transition-colors duration-200"
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
                    <h4 className="text-sm font-semibold text-[#b73235] uppercase tracking-wide">
                      Detailed Features
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
          Our 4-Step Implementation Process
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          We follow a structured approach to ensure seamless onboarding and continuous optimization.
        </p>
      </div>

      <div className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Discovery & Analysis",
                  description: "We conduct a comprehensive audit of your current account status, performance metrics, and competitive landscape."
                },
                {
                  step: "2",
                  title: "Strategy Development",
                  description: "Our team creates a customized management plan with specific KPIs and optimization strategies."
                },
                {
                  step: "3",
                  title: "Implementation",
                  description: "We deploy our systems and processes while maintaining transparent communication throughout."
                },
                {
                  step: "4",
                  title: "Ongoing Optimization",
                  description: "Continuous monitoring and adjustment of strategies based on performance data and market changes."
                }
              ].map((item) => (
                <div key={item.step} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#b73235] text-white text-xl font-bold">
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
            <div className="bg-[#b73235] bg-opacity-5 p-8 rounded-xl">
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
          Trusted by Sellers Worldwide
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            quote: "U-Link transformed our Amazon business. Sales increased by 68% in the first quarter with their management.",
            author: "Sarah Johnson",
            position: "CEO, Home Essentials Inc.",
            stats: "68% sales increase"
          },
          {
            quote: "Their inventory management system saved us from costly stockouts during peak season. Highly recommended!",
            author: "Michael Chen",
            position: "Operations Director, TechGadgets",
            stats: "100% inventory accuracy"
          },
          {
            quote: "The dedicated support team responds faster than our in-house staff ever could. Truly 24/7 service.",
            author: "David Rodriguez",
            position: "Founder, FashionForward",
            stats: "98% response rate under 2h"
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
              <div className="flex-shrink-0 bg-[#b73235] rounded-full p-1">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  {testimonial.author.charAt(0)}
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                <p className="mt-1 text-xs font-medium text-[#b73235]">{testimonial.stats}</p>
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
  <title>Our Services - U-Link It Us | IT, E-commerce & Procurement Solutions</title>
  <meta
    name="description"
    content="Explore the wide range of services offered by U-Link It Us — from IT consulting to e-commerce management and procurement solutions tailored to drive your business forward."
  />
</Helmet>

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab("services")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === "services" ? 'border-[#b73235] text-[#b73235]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Our Services
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === "process" ? 'border-[#b73235] text-[#b73235]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Our Process
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === "results" ? 'border-[#b73235] text-[#b73235]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Client Results
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
            <h2 className="text-base font-semibold text-[#b73235] tracking-wide uppercase">
              Our  Management System
            </h2>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Comprehensive Account Management Solution
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              We provide end-to-end management of your seller account with our proven methodology that combines technology, expertise, and dedicated support to maximize your marketplace performance.
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
            className="mt-24 bg-[#b73235] rounded-xl shadow-xl overflow-hidden"
          >
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Ready to transform your seller account?</span>
                    <span className="block text-white opacity-90">Schedule a free consultation today.</span>
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg text-white opacity-80">
                    Our experts will analyze your current performance and provide actionable recommendations.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#b73235] bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="/demo"
                      className="inline-flex items-center justify-center px-8 py-3 border border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:bg-opacity-10 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    >
                      Request Demo
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