import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import PharmaciesSection from './components/PharmaciesSection';
import JobsSection from './components/JobsSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import ProductDetail from './components/ProductDetail';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen font-sans transition-colors duration-200 dark:bg-gray-900 dark:text-white">
        {selectedProduct !== null ? (
          <ProductDetail 
            productId={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        ) : (
          <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProductsSection onProductSelect={setSelectedProduct} />
            <PharmaciesSection />
            <JobsSection />
            <MapSection />
            <Footer />
          </>
        )}
      </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;