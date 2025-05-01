import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';
// import logo from '../image/logo.jpeg'

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
        scrolled 
          ? 'shadow-md backdrop-blur-md bg-white/90' 
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <span className={`font-bold text-lg ${scrolled ? 'text-gray-900' : 'text-white'} ml-2`}>The Smile Cosmetics</span>
            </a>
            {/* <img src={logo} alt="logo" className='' style={{ width:'80px',height:'80px', borderRadius:'50%', }} /> */}
          </div>
          
          <div className="hidden items-center space-x-4 md:flex">
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

            {/* Remove dark mode toggle */}
            {/* <button
              onClick={toggleTheme}
              className="p-2 ml-4 bg-gray-200 rounded-full transition-colors hover:bg-gray-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-blue-500" />}
            </button> */}

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
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
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
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="bg-white rounded-b-lg shadow-lg md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 w-full text-base font-medium text-left text-gray-800 rounded-md hover:text-rose-500 hover:bg-gray-50"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block px-3 py-2 w-full text-base font-medium text-left text-gray-800 rounded-md hover:text-rose-500 hover:bg-gray-50"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => scrollToSection('pharmacies')}
              className="block px-3 py-2 w-full text-base font-medium text-left text-gray-800 rounded-md hover:text-rose-500 hover:bg-gray-50"
            >
              {t('nav.pharmacies')}
            </button>
            <button
              onClick={() => scrollToSection('jobs')}
              className="block px-3 py-2 w-full text-base font-medium text-left text-gray-800 rounded-md hover:text-rose-500 hover:bg-gray-50"
            >
              {t('nav.jobs')}
            </button>
            <button
              onClick={toggleLanguage}
              className="block px-3 py-2 w-full text-base font-medium text-left text-rose-500 rounded-md hover:bg-rose-50"
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