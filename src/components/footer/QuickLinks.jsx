import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const QuickLinks = ({ navigateToPage }) => {
  const { t } = useTranslation();

  const links = [
    { name: t("Home"), id: "home" },
    { name: t("Services"), id: "services" },
    { name: t("About-Us"), id: "aboutus" },
    { name: t("Portfolio"), id: "portfolio" },
    { name: t("Blog"), id: "blog" }
  ];

  return (
    <motion.div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#009000] dark:text-white">
        {t("QUICK LINKS")}
      </h3>
      <ul className="space-y-2 text-gray-500 dark:text-gray-400">
        {links.map((link) => (
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
              className="block py-1 hover:text-[#009000] transition-colors"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default QuickLinks;