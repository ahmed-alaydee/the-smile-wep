import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import desktopBg from '../image/bahground-1.png';
import mobileBg from '../image/bacground-2.jpeg';
import { useMediaQuery } from 'react-responsive';

const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const backgroundImage = isMobile ? mobileBg : desktopBg;

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, descriptionRef.current, buttonRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + index * 200);
      }
    });
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white dark:text-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          The Smile Cosmetics {/* أو {t('hero.title')} لو كانت من الترجمة */}
        </h1>

        <p ref={subtitleRef} className="text-2xl md:text-3xl text-rose-200 mb-6 italic">
          {t('hero.subtitle')}
        </p>

        <p ref={descriptionRef} className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>

        <button
          ref={buttonRef}
          onClick={scrollToProducts}
          className="px-8 py-3 bg-rose-500 text-white rounded-full font-medium transform transition hover:bg-rose-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 shadow-lg"
        >
          {t('hero.cta')}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
