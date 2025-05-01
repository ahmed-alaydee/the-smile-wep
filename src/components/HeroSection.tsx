import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import desktopBg from '../image/bahground-1.png';
import mobileBg from '../image/image-ditals/productall.jpeg';
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
      className="flex overflow-hidden relative justify-center items-center min-h-screen bg-white dark:text-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Main Content */}
   <div className="relative z-10 px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
  <h1
    ref={titleRef}
    className="mb-4 text-3xl sm:text-4xl md:text-6xl font-bold text-[#5A1F1F] md:text-white text-center font-playfair"
    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.15)', }}
  >
    The Smile Cosmetics {/* {t('hero.title')} */}
  </h1>

  <p
    ref={subtitleRef}
    className="mb-4 text-lg sm:text-xl md:text-3xl italic font-medium text-[#7A2E2E] md:text-rose-600 text-center"
  >
    {t('hero.subtitle')}
  </p>

  <p
    ref={descriptionRef}
    className="mx-auto mb-6 max-w-md text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-[#4A1D1D] md:text-rose-600 text-center md:max-w-2xl bg-white/70 md:bg-transparent px-4 py-2 md:px-0 md:py-0 rounded-xl md:rounded-none shadow-sm md:shadow-none"
  >
    {t('hero.description')}
  </p>

  <button
    ref={buttonRef}
    onClick={scrollToProducts}
    className="px-8 py-3 font-medium text-white bg-rose-500 rounded-full shadow-lg transition transform hover:bg-rose-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
  >
    {t('hero.cta')}
  </button>
</div>

    </div>
  );
};

export default HeroSection;
