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
      className="py-36 bg-gray-50 " dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000 ease-out"
      >
        <div className="lg:flex items-center gap-12">
          <div className="relative lg:w-1/2 mb-12 lg:mb-0 ">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                className="w-full h-120 object-cover transform transition-transform duration-500 hover:scale-105"
                src={testlogo}
                alt="About The Smile Cosmetics"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2  ">
            <div className="flex items-center mb-6">
              <Sparkles className="h-6 w-6 text-rose-500 mr-2" />
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900">
                {t('about.title')}
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                {t('about.description')}
              </p>
              
              <blockquote className="border-l-4 border-rose-300 pl-4 italic text-gray-700 my-6">
                {t('about.mission')}
              </blockquote>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
              
                
                <div className="bg-white p-4 rounded-lg shadow-md transform transition hover:scale-110">
                  <div className="font-bold text-2xl text-rose-500">15+</div>
                  <div className="text-gray-700">Partner Pharmacies</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-md transform transition hover:scale-105">
                  <div className="font-bold text-2xl text-rose-500">5+</div>
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