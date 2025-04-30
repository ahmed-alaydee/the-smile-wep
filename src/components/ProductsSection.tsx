import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../utils/data';
import { ShoppingBag } from 'lucide-react';


interface ProductsSectionProps {
  onProductSelect: (id: number) => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ onProductSelect }) => {
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
    <section id="products" className="py-24 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={product.image}
                  alt={language === 'en' ? product.name : product.nameAr}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <div className="text-white font-medium text-lg">
                    {language === 'en' ? product.category : product.category}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'en' ? product.name : product.nameAr}
                </h3>
                
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {language === 'en' ? product.description : product.descriptionAr}
                </p>
                
                <div className="flex justify-between items-center">
                  {/* <span className="text-rose-500 font-bold text-lg">
                    ${product.price}
                  </span> */}
                  
                  <button
                    onClick={() => onProductSelect(product.id)}
                    className="inline-flex items-center px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {t('Show Product')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;