import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SocialLink = ({ href, icon: Icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="relative" role="listitem">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 block p-2 rounded-full bg-white shadow-md"
        whileHover={{
          scale: 1.2,
          rotate: [0, 10, -10, 0],
          backgroundColor: "#009000",
        }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        aria-label={`Visit our ${name} page`}
        title={name}
      >
        <Icon
          className="w-5 h-5 text-gray-700 hover:text-white"
          role="img"
          aria-hidden="true"
        />
      </motion.a>

      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#009000] text-xs px-2 py-1 rounded whitespace-nowrap bg-white shadow"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            aria-hidden="true"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SocialLink;
