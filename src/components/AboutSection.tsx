import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

// import imageapout from '../image/image-about.jpeg';
import testlogo  from '../image/abouttest.jpeg';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      className="py-36 bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div 
        ref={sectionRef}
        className="px-4 mx-auto transition-opacity duration-1000 ease-out opacity-0 max-w-7xl sm:px-6 lg:px-8"
      >
        <div className="items-center gap-12 lg:flex">
          <div className="relative mb-12 lg:w-1/2 lg:mb-0">
            <div className="absolute rounded-full -top-4 -left-4 w-72 h-72 bg-rose-100 opacity-70 mix-blend-multiply filter blur-2xl animate-blob"></div>
            <div className="absolute w-64 h-64 bg-pink-200 rounded-full right-4 -bottom-8 opacity-70 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                className="object-cover w-full transition-transform duration-500 transform h-120 hover:scale-105"
                src={testlogo}
                alt="About The Smile Cosmetics"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 mr-2 text-rose-500" />
              <h2 className="text-4xl font-bold text-gray-900 lg:text-4xl">
                {t('about.title')}
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4 font-medium text-gray-700">
                {t('about.description')}
              </p>
              
             <blockquote className="max-w-md py-4 pl-6 mx-auto text-lg italic leading-relaxed rounded-md shadow-sm border-l-5 border-rose-400 text-rose-600 lg:mx-0 bg-rose-50">
              {t('about.mission')}
            </blockquote>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
              
                
                <div className="p-4 transition transform bg-white rounded-lg shadow-md hover:scale-110">
                  <div className="text-2xl font-bold text-rose-500">15+</div>
                  <div className="text-gray-700">Partner Pharmacies</div>
                </div>
                
                <div className="p-4 transition transform bg-white rounded-lg shadow-md hover:scale-105">
                  <div className="text-2xl font-bold text-rose-500">5+</div>
                  <div className="text-gray-700">Years of Experience</div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;