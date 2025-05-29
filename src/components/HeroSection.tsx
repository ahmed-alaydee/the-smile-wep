import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import desktopBg from '../image/bahground-1.png';
import mobileBg from '../image/image-ditals/productall.jpeg';
import { useMediaQuery } from 'react-responsive';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const backgroundImage = isMobile ? mobileBg : desktopBg;

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-6 bg-black bg-opacity-60"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="z-10 max-w-3xl space-y-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-poppins drop-shadow-2xl font-(family-name:--my-font)">
          The Smile Cosmetics
        </h1>
        <p className="text-2xl italic font-semibold text-rose-300 drop-shadow-md">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl text-rose-200 drop-shadow-md">
          {t('hero.description')}
        </p>

        <button
          onClick={scrollToProducts}
          className="inline-flex items-center gap-3 px-8 py-4 mt-6 text-lg font-semibold transition duration-300 bg-white rounded-xl bg-opacity-20 backdrop-blur-md text-rose-400 hover:bg-opacity-40 hover:shadow-lg"
        >
          {t('hero.cta')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
