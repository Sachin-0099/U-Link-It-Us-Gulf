import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Link,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Phone,
  Copyright,
  ArrowUp,
} from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Interactive map component
const DubaiMap = () => {
  const [hovered, setHovered] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  return (
    <motion.div
      className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {mapLoaded && (
        <MapContainer
          center={[25.276987, 55.296249]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[25.276987, 55.296249]}>
            <Popup>Dubai</Popup>
          </Marker>
        </MapContainer>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={hovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <MapPin className="w-12 h-12 text-red-500 drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Animated map markers */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full"
        animate={{
          y: [0, -5, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </motion.div>
  );
};

// Social Link component
const SocialLink = ({ href, icon: Icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="relative">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 block p-2 rounded-full bg-white  shadow-md"
        whileHover={{
          scale: 1.2,
          rotate: [0, 10, -10, 0],
          backgroundColor: "#ef4444",
        }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        aria-label={name}
      >
        <Icon className="w-5 h-5 text-gray-700 hover:text-white " />
      </motion.a>

      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2  text-[#b73235] text-xs px-2 py-1 rounded whitespace-nowrap"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email.includes("@") || !email.includes(".")) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      emailRef.current.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with more realistic delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setEmail("");
      setMessage("");

      // Reset success message after 4 seconds
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 2000);
  };

  // Floating label effect
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#b73235] dark:text-white">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block"
        >
          NEWSLETTER
        </motion.span>
      </h3>

      <motion.p
        className="text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Subscribe to get updates on our latest offers and news.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative">
          Email Address
          <motion.input
            id="email"
            type="email"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className={`w-full px-4 pt-5 pb-2 rounded border ${
              shake ? "border-red-500" : "border-gray-300 dark:border-gray-700"
            } dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500`}
            animate={{
              x: shake ? [0, -10, 10, -10, 10, 0] : 0,
            }}
            transition={{
              duration: shake ? 0.5 : 0.3,
            }}
          />
        </div>

        <div className="relative">
          <motion.label
            htmlFor="message"
            className={`absolute left-4 transition-all duration-300 ${
              message
                ? "top-1 text-xs text-[#b73235] dark:text-red-400"
                : "top-3 text-gray-500"
            }`}
            initial={false}
            animate={{
              y: message ? -10 : 0,
              scale: message ? 0.9 : 1,
            }}
          >
            Your Message (optional)
          </motion.label>
          <motion.textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 pt-5 pb-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={3}
            onFocus={() => message === "" && setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        <motion.button
          type="submit"
          className={`w-full px-4 py-3 rounded-md text-white font-medium ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#b73235] to-[#e0474c] hover:from-[#a02a2d] hover:to-[#c93a3f]"
          } transition-all duration-300 relative overflow-hidden`}
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <motion.span
                className="absolute left-0 top-0 h-full bg-white opacity-20"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "linear" }}
              />
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </motion.span>
                Processing...
              </span>
            </>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </motion.span>
              Subscribe Now
            </span>
          )}
        </motion.button>

        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="text-center p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200"
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Thank you for subscribing! We've sent a confirmation to your
                email.
              </div>
              <motion.div
                className="h-1 bg-green-300 dark:bg-green-700 mt-2 rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>

      <motion.div
  className="flex items-center justify-center gap-4 mt-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <p className="text-sm text-gray-500 dark:text-gray-400">
    Or connect with:
  </p>
  <div className="flex gap-3">
    {[
      // {
      //   icon: Facebook,
      //   name: "Facebook",
      //   url: "https://www.facebook.com/yourpage",
      // },
      {
        icon: Twitter,
        name: "Twitter",
        url: "https://x.com/dhirajkgupta84",
      },
      // {
      //   icon: Instagram,
      //   name: "Instagram",
      //   url: "https://www.instagram.com/yourprofile",
      // },
      {
        icon: Linkedin,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhiraj-kumar-gupta-45b97730/",
      },
    ].map((social, index) => (
      <motion.a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#b73235] hover:text-white transition-colors duration-300"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 + index * 0.1 }}
      >
        <social.icon className="w-4 h-4" />
      </motion.a>
    ))}
  </div>
</motion.div>

    </div>
  );
};

const FooterSection = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToPage = (page) => {
    // Update these paths to match your actual page routes
    const routes = {
      home: "/",
      services: "/services",
      aboutus: "/aboutus",
      portfolio: "/portfolio",
     blog:"/blog"
    };
    
    if (routes[page]) {
      window.location.href = routes[page];
    } else {
      console.warn(`Route for ${page} not found`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!isMounted) return null;

  return (
    <footer
      ref={containerRef}
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-12 md:py-16 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* India Office */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-[#b73235] dark:text-white flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-5 h-5 text-[#b73235]" />
              </motion.div>
              Corporate Office
            </h3>
            <address className="text-gray-500 dark:text-gray-400 not-italic space-y-2">
              <motion.p whileHover={{ x: 5 }}>Uttam Nagar, New Delhi</motion.p>

              <motion.a
                href="tel:+918750518844"
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                +91-8750518844
              </motion.a>

              <motion.a
                href="mailto:dhiraj@ulinkitus.com"
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                dhiraj@ulinkitus.com
              </motion.a>

              <motion.a
                href="https://www.ulinkitus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Link className="w-4 h-4" />
                www.ulinkitus.com
              </motion.a>
            </address>
          </motion.div>

          {/* UAE Office */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-[#b73235] dark:text-white flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-5 h-5 text-[#b73235]" />
              </motion.div>
              UAE  Office
            </h3>
            <h4 className="text-md font-medium text-gray-600 dark:text-gray-300">
              Where to find us
            </h4>
            <DubaiMap />
            <div className="space-y-2 text-gray-500 dark:text-gray-400">
              <motion.p whileHover={{ x: 5 }}>
                P.O. Box: 624498, Street 13
              </motion.p>
              <motion.p whileHover={{ x: 5 }}>
                Umm Ramool, Dubai - U.A.E
              </motion.p>
              <motion.p whileHover={{ x: 5 }}>
                Dhiraj Kumar Gupta (Director): +91-8750518844, +971 58 586 8470
              </motion.p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-[#b73235] dark:text-white">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "About Us", id: "aboutus" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Blog", id: "blog" },
              ].map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{
                    x: 5,
                    color: "#ef4444",
                  }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer"
                >
                  <a 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage(link.id);
                    }}
                    className="block py-1 hover:text-[#b73235] transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <NewsletterForm />

            <div className="mt-6">
              <h4 className="text-md font-medium text-[#b73235] dark:text-gray-300 mb-3">
                Follow Us
              </h4>
              <div className="flex gap-3">
                <SocialLink href="#" icon={Facebook} name="Facebook" />
                <SocialLink href="#" icon={Twitter} name="Twitter" />
                <SocialLink href="#" icon={Youtube} name="YouTube" />
                <SocialLink href="https://www.linkedin.com/in/dhiraj-kumar-gupta-45b97730/" icon={Linkedin} name="LinkedIn" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-1"
        >
          <div className="flex items-center">
            <Copyright className="w-4 h-4 mr-1" />
            {currentYear} U-Link IT US. All rights reserved.
          </div>
          <div className="hidden sm:block mx-2">•</div>
          <div>Designed with ❤️ in Dubai</div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-br from-red-500 to-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Back to Top"
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </motion.div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default FooterSection;