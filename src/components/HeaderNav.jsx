import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { FaGlobe, FaPhone } from 'react-icons/fa'; // Added FaPhone
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'ar');

  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);
  const languageMenuRef = useRef(null);
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isLanguageOpen && languageMenuRef.current) {
      gsap.fromTo(
        languageMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }
      );
    }
  }, [isLanguageOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLanguageOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const toggleLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLanguageOpen(false);
  };

  const navItems = ['Home', 'About-Us', 'Services', 'Portfolio', 'Blog'];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-8xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center" aria-label="Main navigation">
        {/* Logo */}
        <div className="w-32 md:w-60">
          <a href="/" aria-label="Ulink Home">
            <img src="/Images/Ulink.png" alt="Ulink Logo" className="w-full h-auto" loading="lazy" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-[#2b2b2b] font-medium">
          {navItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-[#009000] transition-transform duration-200 hover:scale-105">
              <Link to={`/${item.toLowerCase().replace(/ /g, '')}`}>{t(item)}</Link>
            </li>
          ))}
            <li>
            <a
              href="tel:8252404188"
              className="flex items-center gap-2 px-4 py-3 text-[#009000] border border-[#009000] rounded-md hover:bg-green-100 transition hover:scale-105"
            >
              <FaPhone size={18} />
              <span>{t('Call Us')}</span>
            </a>
          </li>
         
          <li>
            <Link to="/schedule" className="px-4 py-3 bg-[#009000] text-white rounded-md hover:bg-[#009000] transition font-semibold hover:scale-105 inline-block">
              {t('Schedule a Call')}
            </Link>
          </li>
        
          <li className="relative">
            <div 
              className="cursor-pointer hover:text-[#009000] transition-transform duration-200 hover:scale-105 flex items-center gap-3"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <FaGlobe className="text-[#009000]" size={30} />
              <span className="text-sm">{currentLanguage === 'ar' ? 'AR' : 'EN'}</span>
            </div>

            {isLanguageOpen && (
              <div ref={languageMenuRef} className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center ${
                      currentLanguage === lang.code ? 'bg-green-50 text-[#009000]' : ''
                    }`}
                    onClick={() => toggleLanguage(lang.code)}
                  >
                    <span className={lang.code === 'ar' ? 'text-right w-full' : ''}>
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-[#2b2b2b]" aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4 text-[#2b2b2b] font-medium">
          {navItems.map((item) => (
            <Link key={item} to={`/${item.toLowerCase().replace(/ /g, '')}`} className="block hover:text-[#009000] transition hover:translate-x-1">
              {t(item)}
            </Link>
          ))}

          <div className="relative" onClick={() => setIsLanguageOpen(!isLanguageOpen)}>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaGlobe className="text-[#009000]" />
            </div>

            {isLanguageOpen && (
              <div ref={languageMenuRef} className="mt-2 bg-white rounded-md shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      currentLanguage === lang.code ? 'bg-green-50 text-[#009000]' : ''
                    }`}
                    onClick={() => toggleLanguage(lang.code)}
                  >
                    {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <a
            href="tel:8252404188"
            className="block px-4 py-2 text-[#009000] border border-[#009000] rounded-md hover:bg-green-100 transition hover:scale-105 flex items-center gap-2"
          >
            <FaPhone size={16} />
            <span>{t('Call Us')}</span>
          </a>

          
          <Link to="/schedule" className="block px-4 py-2 bg-[#009000] text-white rounded-md hover:bg-[#009000] transition font-semibold hover:scale-105">
            {t('Schedule a Call')}
          </Link>
         
        </div>
      )}
    </header>
  );
}

export default Navbar;
