import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../utils/data';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      id="products"
      className="py-24 bg-white"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            {t('products.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            {t('products.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={language === 'en' ? product.name : product.nameAr}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 flex items-end justify-start p-4 transition-opacity opacity-0 bg-gradient-to-t from-black/60 to-transparent hover:opacity-100">
                  <div className="text-lg font-medium text-white">
                    {language === 'en' ? product.category : product.category}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {language === 'en' ? product.name : product.nameAr}
                </h3>

                <p className="mb-4 text-gray-700 line-clamp-2">
                  {language === 'en' ? product.description : product.descriptionAr}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="inline-flex items-center px-4 py-2 text-white transition-colors rounded-md bg-rose-500 hover:bg-rose-600"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
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
