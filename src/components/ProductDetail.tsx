import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../utils/data';
import { X } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productId = parseInt(id || '', 10);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6 text-white bg-zinc-900">
        <div className="space-y-4 text-center">
          <p className="text-xl font-semibold">{t('products.notFound') || 'Product not found'}</p>
          <button
            onClick={() => navigate('/')}
            className="px-5 py-3 transition rounded-md bg-rose-500 hover:bg-rose-600"
          >
            {t('products.backToHome')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-4 text-white bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 lg:p-12"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="grid items-start grid-cols-1 gap-12 mt-20 lg:grid-cols-2">
        {/* Image Section with responsive thumbnail position */}
        <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-start">
          {/* Thumbnails */}
          <div className="flex flex-row justify-center gap-3 lg:flex-col">
            {product.thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                  activeImage === idx ? 'border-rose-500' : 'border-transparent'
                }`}
              >
                <img src={thumb} alt={`thumb-${idx}`} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full max-w-lg overflow-hidden shadow-lg bg-zinc-100 rounded-xl aspect-square">
            <img
              src={product.thumbnails[activeImage]}
              alt={language === 'en' ? product.name : product.nameAr}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-rose-200 text-rose-800">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold tracking-tight">
            {language === 'en' ? product.name : product.nameAr}
          </h1>

          <p className="text-lg leading-relaxed text-gray-300">
            {language === 'en' ? product.description : product.descriptionAr}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3 text-white transition rounded-md bg-rose-500 hover:bg-rose-600"
            >
              {t('products.backToProducts')}
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 text-white transition bg-gray-700 rounded-md hover:bg-gray-600"
            >
              {t('Back to Home')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
