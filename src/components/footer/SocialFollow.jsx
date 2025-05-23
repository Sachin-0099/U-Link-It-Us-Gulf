import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

import NewsletterForm from './NewsletterForm';
import SocialLink from './SocialLink';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SocialFollow = () => {
  const { t } = useTranslation();

  return (
    <motion.section variants={itemVariants} aria-label={t("Newsletter and social media section")}>
      <NewsletterForm />

      <nav className="mt-6" aria-label={t("Follow us on social media")}>
        <h4 className="text-md font-medium text-[#009000] dark:text-gray-300 mb-3">
          {t("Follow Us")}
        </h4>
        <div className="flex gap-3">
          <SocialLink
            href="https://www.facebook.com/"
            icon={Facebook}
            name="Facebook"
            title={t("Follow us on Facebook")}
          />
          <SocialLink
            href="https://twitter.com/"
            icon={Twitter}
            name="Twitter"
            title={t("Follow us on Twitter")}
          />
          <SocialLink
            href="https://www.youtube.com/"
            icon={Youtube}
            name="YouTube"
            title={t("Subscribe to our YouTube channel")}
          />
          <SocialLink
            href="https://www.linkedin.com/in/dhiraj-kumar-gupta-45b97730/"
            icon={Linkedin}
            name="LinkedIn"
            title={t("Connect with us on LinkedIn")}
          />
        </div>
      </nav>
    </motion.section>
  );
};

export default SocialFollow;
