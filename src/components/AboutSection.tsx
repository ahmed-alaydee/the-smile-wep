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
        className="px-4 mx-auto max-w-7xl opacity-0 transition-opacity duration-1000 ease-out sm:px-6 lg:px-8"
      >
        <div className="gap-12 items-center lg:flex">
          <div className="relative mb-12 lg:w-1/2 lg:mb-0">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-rose-100 rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob"></div>
            <div className="absolute right-4 -bottom-8 w-64 h-64 bg-pink-200 rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
            <div className="overflow-hidden relative rounded-lg shadow-xl">
              <img 
                className="object-cover w-full transition-transform duration-500 transform h-120 hover:scale-105"
                src={testlogo}
                alt="About The Smile Cosmetics"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <Sparkles className="mr-2 w-6 h-6 text-rose-500" />
              <h2 className="text-4xl font-bold text-gray-900 lg:text-4xl">
                {t('about.title')}
              </h2>
            </div>
            
            <div className="max-w-none prose prose-lg">
              <p className="mb-4 text-gray-700">
                {t('about.description')}
              </p>
              
              <blockquote className="pl-4 my-6 italic text-gray-700 border-l-4 border-rose-300">
                {t('about.mission')}
              </blockquote>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
              
                
                <div className="p-4 bg-white rounded-lg shadow-md transition transform hover:scale-110">
                  <div className="text-2xl font-bold text-rose-500">15+</div>
                  <div className="text-gray-700">Partner Pharmacies</div>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-md transition transform hover:scale-105">
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