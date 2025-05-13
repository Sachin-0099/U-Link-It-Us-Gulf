import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';

const MissionVisionSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const content = {
    mission: {
      title: "Our Mission",
      text: "Our mission is to provide our clients with best-in-class services, all under one roof. We are committed to delivering excellence through innovation, professionalism, and integrity in everything we do.",
      icon: <Target size={48} className="text-white" />,
      bgColor: "linear-gradient(135deg, #0066cc 0%, #00aaff 100%)",
      accentColor: "#0066cc",
      points: [
        "Deliver excellence through innovation",
        "Provide comprehensive solutions",
        "Become a trusted growth partner",
        "Exceed client expectations"
      ]
    },
    vision: {
      title: "Our Vision",
      text: "Our vision is to excel as the world's leading procurement and trading connectivity group. We aspire to set new benchmarks in global trade by creating a seamless, efficient, and trusted network.",
      icon: <Eye size={48} className="text-white" />,
      bgColor: "linear-gradient(135deg, #b73235 0%, #e74c3c 100%)",
      accentColor: "#b73235",
      points: [
        "Set global trade benchmarks",
        "Create seamless business networks",
        "Empower with unmatched opportunities",
        "Redefine industry standards"
      ]
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16  ">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold !text-gray-900  mb-4">
            Our <span className="text-[#b73235]">Core</span> Values
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Guiding principles that shape our company's culture and drive our success
          </p>
        </motion.div>

        <div className="flex flex-col">
          {/* Professional Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100  p-1 rounded-lg">
              {['mission', 'vision'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 ${
                    activeTab === tab 
                      ? 'text-white' 
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.span 
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#0066cc] to-[#b73235] rounded-md z-0"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab === 'mission' ? <Target size={20} /> : <Eye size={20} />}
                    {tab === 'mission' ? 'Mission' : 'Vision'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                background: content[activeTab].bgColor
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden max-w-4xl mx-auto"
            >
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white opacity-10"
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {content[activeTab].icon}
                </motion.div>

                <motion.h3
                  className="text-3xl font-bold text-white mb-6"
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {content[activeTab].title}
                </motion.h3>

                <motion.p
                  className="text-white/90 mb-8 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {content[activeTab].text}
                </motion.p>

                <ul className="space-y-4 mb-10">
                  {content[activeTab].points.map((point, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-white/90"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <motion.span
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5 + index * 0.1
                        }}
                      >
                        <ArrowRight size={20} className="mt-1 flex-shrink-0" />
                      </motion.span>
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <a href="/aboutus">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg flex items-center gap-2"
                  
                  >
                    Learn more
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                  </a>
                  
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;