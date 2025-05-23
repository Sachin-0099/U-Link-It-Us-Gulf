import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Link } from "lucide-react";
import { useTranslation } from 'react-i18next';

const OfficeInfo = ({ title, address, phone, email, website }) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="space-y-4"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      <h3 
        className="text-lg font-semibold text-[#009000] dark:text-white flex items-center gap-2"
        itemProp="name"
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          <MapPin className="w-5 h-5 text-[#009000]" />
        </motion.div>
        {title}
      </h3>

      <address 
        className="text-gray-500 dark:text-gray-400 not-italic space-y-2"
        itemProp="address" 
        itemScope 
        itemType="https://schema.org/PostalAddress"
      >
        <motion.p 
          whileHover={{ x: 5 }} 
          itemProp="streetAddress"
        >
          {address}
        </motion.p>

        <motion.a
          href={`tel:${phone}`}
          title={`Call ${phone}`}
          className="flex items-center gap-2 hover:text-[#009000] transition-colors"
          whileHover={{ x: 5 }}
          itemProp="telephone"
          aria-label={`Call ${phone}`}
        >
          <Phone className="w-4 h-4" />
          {phone}
        </motion.a>

        <motion.a
          href={`mailto:${email}`}
          title={`Email ${email}`}
          className="flex items-center gap-2 hover:text-[#009000] transition-colors"
          whileHover={{ x: 5 }}
          itemProp="email"
          aria-label={`Email ${email}`}
        >
          <Mail className="w-4 h-4" />
          {email}
        </motion.a>

        <motion.a
          href={website}
          title={`Visit ${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#009000] transition-colors"
          whileHover={{ x: 5 }}
          itemProp="url"
          aria-label={`Visit ${website}`}
        >
          <Link className="w-4 h-4" />
          {website}
        </motion.a>
      </address>
    </motion.div>
  );
};

export default OfficeInfo;
