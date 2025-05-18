import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import your icon components
import { Facebook, Twitter, Youtube, Linkedin } from 'lucide-react'; // or your icon library
import NewsletterForm from './NewsletterForm';
import SocialLink from './SocialLink';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SocialFollow = () => {
  const { t } = useTranslation();

  return (
    <motion.div variants={itemVariants}>
      <NewsletterForm />

      <div className="mt-6">
        <h4 className="text-md font-medium text-[#009000] dark:text-gray-300 mb-3">
          {t("Follow Us")}
        </h4>
        <div className="flex gap-3">
          <SocialLink href="#" icon={Facebook} name="Facebook" />
          <SocialLink href="#" icon={Twitter} name="Twitter" />
          <SocialLink href="#" icon={Youtube} name="YouTube" />
          <SocialLink
            href="https://www.linkedin.com/in/dhiraj-kumar-gupta-45b97730/"
            icon={Linkedin}
            name="LinkedIn"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SocialFollow;
