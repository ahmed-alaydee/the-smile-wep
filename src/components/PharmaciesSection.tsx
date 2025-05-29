import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { pharmacies } from '../utils/data';
import { MapPin } from 'lucide-react';
import {  mainPharmacy } from '../utils/data';

const PharmaciesSection: React.FC = () => {
  const { t, language } = useLanguage();

  // Main Pharmacy
 

  return (
    <section
      id="pharmacies"
      className="py-24 bg-gray-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            {t('pharmacies.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            {t('pharmacies.description')}
          </p>
        </div>

        {/* Main Pharmacy */}
     

{/* Main Pharmacy */}
<div className="max-w-6xl p-6 mx-auto mb-20 bg-white shadow-2xl rounded-2xl sm:p-8">
  {/* صورة بعرض كامل، وارتفاع يتغير حسب حجم الشاشة */}
  <div className="w-full h-64 mb-8 overflow-hidden rounded-2xl sm:h-80 md:h-96">
    <img
      src={mainPharmacy.image}
      alt={language === 'en' ? mainPharmacy.name : mainPharmacy.nameAr}
      className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
    />
  </div>

  {/* النص والمعلومات */}
  <div className="px-2 text-center md:text-left sm:px-6">
    <h3 className="mb-6 text-3xl font-extrabold tracking-wide text-gray-900 sm:text-4xl md:text-5xl">
      {language === 'en' ? mainPharmacy.name : mainPharmacy.nameAr}
    </h3>

    <h4 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl text-rose-600">
      {t('pharmacies.branches')}:
    </h4>

   <ul className="grid grid-cols-1 gap-6 px-4 overflow-y-auto text-gray-700 sm:grid-cols-2 md:grid-cols-4 max-h-52 sm:max-h-56 scrollbar-thin scrollbar-thumb-rose-400 scrollbar-track-gray-200">
  {mainPharmacy.branches.map((branch) => (
    <li
      key={branch.id}
      className="flex items-center gap-3 text-base font-medium sm:text-lg"
    >
      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-rose-500" />
      <span>{language === 'en' ? branch.location : branch.locationAr}</span>
    </li>
  ))}
</ul>

  </div>
</div>








        {/* Other Pharmacies */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pharmacies.map((pharmacy) => (
            <div
              key={pharmacy.id}
              className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
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
