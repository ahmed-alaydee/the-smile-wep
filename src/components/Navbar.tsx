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
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Sparkles className="h-8 w-8 text-rose-500" />
              <span className={`font-bold text-lg ${scrolled ? 'text-gray-900' : 'text-white'} ml-2`}>The Smile Cosmetics</span>
            </a>
            {/* <img src={logo} alt="logo" className='' style={{ width:'80px',height:'80px', borderRadius:'50%', }} /> */}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
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
              className="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-500" />}
            </button> */}

            <button
              onClick={toggleLanguage}
              className={`ml-4 px-3 py-1 rounded border ${
                scrolled 
                  ? 'border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-rose-500'
              } transition-colors`}
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-rose-500 hover:bg-gray-50 w-full text-left"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-rose-500 hover:bg-gray-50 w-full text-left"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => scrollToSection('pharmacies')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-rose-500 hover:bg-gray-50 w-full text-left"
            >
              {t('nav.pharmacies')}
            </button>
            <button
              onClick={() => scrollToSection('jobs')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-rose-500 hover:bg-gray-50 w-full text-left"
            >
              {t('nav.jobs')}
            </button>
            <button
              onClick={toggleLanguage}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-rose-500 hover:bg-rose-50"
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
