import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // Reduced parallax effect on mobile
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const FloatingSphere = () => (
    <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#b73235" 
        metalness={0.8}
        roughness={0.2}
        emissive="#b73235"
        emissiveIntensity={0.3}
      />
    </Sphere>
  );

  return (
    <section 
      ref={containerRef}
      className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden relative"
      aria-label="Hero Section"
    >
      {/* Floating 3D Sphere Background - Hidden on mobile */}
      <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 md:opacity-20 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
        </Canvas>
      </div>

      {/* Simplified grid pattern for mobile */}
      <motion.div 
        className="absolute inset-0 opacity-5 z-0 hidden sm:grid grid-cols-12 grid-rows-12"
        style={{ y }}
        aria-hidden="true"
      >
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-gray-300"></div>
        ))}
      </motion.div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8 sm:gap-16 relative z-10">
        {/* Left Section - Full width on mobile */}
        <motion.header 
          className="w-full md:w-1/2 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transforming <br className="hidden sm:block" /> Business Through <br className="hidden sm:block" />
            <motion.span 
              className="text-[#b73235] inline-block"
              animate={{ 
                textShadow: "0 0 10px rgba(183, 50, 53, 0.5)",
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2 
              }}
            >
              Technology
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            U-Link It Us offers comprehensive e-commerce and procurement solutions tailored to modern business needs.
          </motion.p>

          <motion.nav 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            aria-label="Call to action buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           <motion.button
      onClick={() => navigate("/contact")}  // Navigate to the contact page on click
      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(183, 50, 53, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#b73235] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg relative overflow-hidden text-sm sm:text-base"
      aria-label="Get a free consultation from Ulinkit"
    >
      <span className="relative z-10">Get FREE Consultation</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-[#b73235] to-[#e74c3c] opacity-0 hover:opacity-100 transition-opacity duration-300 z-0"
        aria-hidden="true"
      />
    </motion.button>
            
            <motion.button 
              onClick={() => navigate("/portfolio")}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#f8f9fa",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-gray-200 text-gray-800 font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center gap-2 shadow-sm text-sm sm:text-base"
              aria-label="View Ulinkit's portfolio"
            >
              View Portfolio 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </motion.button>
          </motion.nav>

          <motion.ul 
            className="flex justify-center sm:justify-start gap-4 sm:gap-6 text-gray-700 font-medium text-xs sm:text-sm"
            aria-label="Company strengths"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {["Innovative", "Precise", "Excellent"].map((item, index) => (
              <motion.li 
                key={item}
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className="text-[#b73235]"
                  animate={{ rotate: [0, 360] }}
                  transition={{ 
                    rotate: { 
                      duration: 0.5, 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      delay: index * 0.2 
                    } 
                  }}
                >
                  ✓
                </motion.span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.header>

        {/* Right Section - Full width on mobile, below text */}
        <motion.div 
          className="w-full md:w-1/2 relative mt-8 md:mt-0"
          aria-hidden="true"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: window.innerWidth < 768 ? 0 : y, opacity }}
        >
          <motion.div 
            className="hidden sm:block absolute -bottom-10 -left-10 w-full h-full bg-red-100 rounded-2xl z-0 shadow-2xl"
            animate={{
              rotate: [-4, 4, -4],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg sm:shadow-2xl border-2 border-white relative z-10"
            whileHover={{ scale: window.innerWidth >= 768 ? 1.02 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/Images/Hero.avif"
              alt="Digital transformation with e-commerce and procurement technology"
              className="w-full h-auto max-h-[400px] sm:max-h-none object-cover"
              loading="lazy"
            />
            {/* 3D Reflection Effect - Only on desktop */}
            {window.innerWidth >= 768 && (
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/30 to-transparent"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;