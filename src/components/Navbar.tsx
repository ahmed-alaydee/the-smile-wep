import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md backdrop-blur-md bg-white/90' : 'bg-transparent'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <span className={`font-bold text-lg ${scrolled ? 'text-gray-900' : 'text-white'} ml-2`}>
                The Smile Cosmetics
              </span>
            </a>
          </div>

          <div className="items-center hidden space-x-4 md:flex">
            <button
              onClick={() => navigate('/')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                scrolled ? 'text-gray-800 hover:text-rose-500' : 'text-white hover:text-rose-200'
              } transition-colors`}
            >
              {t('Home')}
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                scrolled ? 'text-gray-800 hover:text-rose-500' : 'text-white hover:text-rose-200'
              } transition-colors`}
            >
              {t('nav.about')}
            </button>

            <button
              onClick={() => scrollToSection('products')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                scrolled ? 'text-gray-800 hover:text-rose-500' : 'text-white hover:text-rose-200'
              } transition-colors`}
            >
              {t('nav.products')}
            </button>

            <button
              onClick={() => scrollToSection('pharmacies')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                scrolled ? 'text-gray-800 hover:text-rose-500' : 'text-white hover:text-rose-200'
              } transition-colors`}
            >
              {t('nav.pharmacies')}
            </button>

            <button
              onClick={() => scrollToSection('jobs')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                scrolled ? 'text-gray-800 hover:text-rose-500' : 'text-white hover:text-rose-200'
              } transition-colors`}
            >
              {t('nav.jobs')}
            </button>

            <button
              onClick={toggleLanguage}
              className={`ml-4 px-3 py-1 rounded border ${
                scrolled
                  ? 'text-rose-500 border-rose-500 hover:bg-rose-500 hover:text-white'
                  : 'text-white border-white hover:bg-white hover:text-rose-500'
              } transition-colors`}
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-white rounded-b-lg shadow-lg md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => navigate('/')}
              className="block w-full px-3 py-2 text-base font-medium text-left text-gray-800 rounded-md hover:text-rose-500 hover:bg-gray-50"
            >
              {t('Home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full px-3 py-2 text-base font-medium text-left text-gray-800 rounded-md hover:text-rose-500 hover:bg-gray-50"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full px-3 py-2 text-base font-medium text-left text-gray-800 rounded-md hover:text-rose-500 hover:bg-gray-50"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => scrollToSection('pharmacies')}
              className="block w-full px-3 py-2 text-base font-medium text-left text-gray-800 rounded-md hover:text-rose-500 hover:bg-gray-50"
            >
              {t('nav.pharmacies')}
            </button>
            <button
              onClick={() => scrollToSection('jobs')}
              className="block w-full px-3 py-2 text-base font-medium text-left text-gray-800 rounded-md hover:text-rose-500 hover:bg-gray-50"
            >
              {t('nav.jobs')}
            </button>
            <button
              onClick={toggleLanguage}
              className="block w-full px-3 py-2 text-base font-medium text-left rounded-md text-rose-500 hover:bg-rose-50"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
