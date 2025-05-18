import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Linkedin } from "lucide-react";

const NewsletterForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const emailRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      emailRef.current.focus();
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setEmail("");
      setMessage("");

      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#009000] dark:text-white">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block"
        >
          {t("NEWSLETTER")}
        </motion.span>
      </h3>

      <motion.p
        className="text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t("Subscribe to get updates on our latest offers and news")}
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
         <div className="relative">
                  {t("Email Address")}
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
                      shake ? "border-[#009000]" : "border-gray-300 dark:border-gray-700"
                    } dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#009000]`}
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
                        ? "top-1 text-xs text-[#009000] dark:text-[#009000]"
                        : "top-3 text-gray-500"
                    }`}
                    initial={false}
                    animate={{
                      y: message ? -10 : 0,
                      scale: message ? 0.9 : 1,
                    }}
                  >
                    {t("Your Message (optional)")}
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
                      : "bg-gradient-to-r from-[#007a00] to-[#00b300] hover:from-[#006600] hover:to-[#00cc00]"
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
                        {t("Processing...")}
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
                      {t("Subscribe Now")}
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
                        
                      {t("Thank you for subscribing! We've sent a confirmation to your email")}
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
          {t("Or connect with:")}
        </p>
        <div className="flex gap-3">
          {[
            {
              icon: Twitter,
              name: "Twitter",
              url: "https://x.com/dhirajkgupta84",
            },
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
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-[#009000] hover:text-white transition-colors duration-300"
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

export default NewsletterForm;