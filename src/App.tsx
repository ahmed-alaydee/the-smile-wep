import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import PharmaciesSection from './components/PharmaciesSection';
import JobsSection from './components/JobsSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen font-sans transition-colors duration-100 dark:bg-gray-900 dark:text-white">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <AboutSection />
                    <ProductsSection />
                    <PharmaciesSection />
                    <JobsSection />
                    <MapSection />
                    <Footer />
                  </>
                }
              />
              <Route path="/products/:id" element={<ProductDetail />} />
                    
              <Route path="/products" element={<ProductsSection />} />
              <Route path="/HeroSection" element={< HeroSection />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
