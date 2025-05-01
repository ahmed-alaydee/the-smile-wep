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
  <section id="pharmacies" className="py-24 bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
  <div 
    ref={sectionRef}
    className="px-4 mx-auto max-w-7xl opacity-0 transition-opacity duration-1000 ease-out sm:px-6 lg:px-8"
  >
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
        {t('pharmacies.title')}
      </h2>
      <p className="mx-auto max-w-3xl text-xl text-gray-600">
        {t('pharmacies.description')}
      </p>
    </div>
    
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {pharmacies.map((pharmacy) => (
        <div 
          key={pharmacy.id}
          className="overflow-hidden bg-white rounded-lg shadow-lg transition duration-300 transform hover:shadow-xl hover:-translate-y-2"
        >
          <div className="overflow-hidden h-64"> {/* تم تعديل الارتفاع هنا */}
            <img 
              src={pharmacy.image} 
              alt={language === 'en' ? pharmacy.name : pharmacy.nameAr}
              className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
            />
          </div>
          
          <div className="p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              {language === 'en' ? pharmacy.name : pharmacy.nameAr}
            </h3>
            
            <div>
              <h4 className="mb-2 font-medium text-gray-700">
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