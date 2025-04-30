import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { pharmacies } from '../utils/data';
import { MapPin } from 'lucide-react';

const PharmaciesSection: React.FC = () => {
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
    <section id="pharmacies" className="py-24 bg-gray-50 " dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold  mb-4">
            {t('pharmacies.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pharmacies.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pharmacies.map((pharmacy) => (
            <div 
              key={pharmacy.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={pharmacy.image} 
                  alt={language === 'en' ? pharmacy.name : pharmacy.nameAr}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? pharmacy.name : pharmacy.nameAr}
                </h3>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    {t('pharmacies.branches')}:
                  </h4>
                  <ul className="space-y-2">
                    {pharmacy.branches.map((branch) => (
                      <li key={branch.id} className="flex items-start text-gray-600">
                        <MapPin className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2">
                          {language === 'en' ? branch.location : branch.locationAr}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmaciesSection;