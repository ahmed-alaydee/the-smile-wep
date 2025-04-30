import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../utils/data';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductDetailProps {
  productId: number;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onClose }) => {
  const { t, language } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-lg w-full">
          <p>Product not found</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-md"
          >
            {t('products.backToProducts')}
          </button>
        </div>
      </div>
    );
  }

  const handlePrevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? product.thumbnails.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImage((prev) =>
      prev === product.thumbnails.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4 overflow-y-auto"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl my-8 max-h-screen overflow-y-auto">
        {/* Close Button */}
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-gray-900" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Images */}
          <div className="bg-gray-100 flex flex-col gap-4">
            <div className="relative w-full aspect-square sm:aspect-[4/3]">
              <img
                src={product.thumbnails[activeImage]}
                alt={language === 'en' ? product.name : product.nameAr}
                className="w-full h-full object-cover rounded-t-xl lg:rounded-none"
              />

              {/* Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5 text-gray-900" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white"
              >
                <ChevronRight className="h-5 w-5 text-gray-900" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 px-4 pb-4 flex-wrap">
              {product.thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 ${
                    activeImage === idx ? 'border-rose-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`${language === 'en' ? product.name : product.nameAr} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pt-8 p-6 sm:p-8 space-y-6">
            <span className="inline-block bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {language === 'en' ? product.name : product.nameAr}
            </h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {language === 'en' ? product.description : product.descriptionAr}
            </p>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="w-full py-3 px-6 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                {t('products.backToProducts')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
