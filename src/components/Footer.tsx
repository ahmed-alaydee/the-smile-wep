import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import logo from '../image/logo.jpeg'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer 
      className="text-black bg-white"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center mb-6">
              <Sparkles className="mr-2 w-6 h-6 text-rose-400" />
              <span className="text-lg font-bold">The Smile Cosmetics</span>
            </div>
            
            <p className="mb-6 text-gray-400">
              Premium cosmetics for the modern woman, crafted with care and quality ingredients.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/thesmile243?igsh=MTJnMTg3aGF1MTFwZQ==" className="text-gray-400 transition-colors hover:text-rose-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/1YD9C1QJ4s/" className="text-gray-400 transition-colors hover:text-rose-400">
                <Facebook className="w-5 h-5" />
              </a>
             
              <a href="https://www.tiktok.com/@the.smile441?_t=ZS-8vjOlqaarBg&_r=1" className="text-gray-400 transition-colors hover:text-rose-400">
                <FaTiktok className="w-5 h-5" />
              </a>
              
<a
  href="https://wa.me/201103133750"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 transition-colors hover:text-rose-400"
>
  <FaWhatsapp className="w-5 h-5" />
</a>
      
                      <a
  href="tel:+01103133750"
  className="text-gray-400 transition-colors hover:text-rose-400"
>
  <Phone className="w-5 h-5" />
</a>
                  
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-bold">
              {t('footer.links')}
            </h3>
            
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-gray-400 transition-colors hover:text-rose-400">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 transition-colors hover:text-rose-400">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#pharmacies" className="text-gray-400 transition-colors hover:text-rose-400">
                  {t('nav.pharmacies')}
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-gray-400 transition-colors hover:text-rose-400">
                  {t('nav.jobs')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-bold">
              {t('footer.contact')}
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-gray-400">+21103133750</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-gray-400">Smileco425@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-gray-400">
                  El-Aslaky Street, in front of the Technology Village, next to Telecom Club, Maadi, Cairo.
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-bold">
              {t('footer.subscribe')}
            </h3>
            
            <form className="mb-4">
         
                 <img src={logo} alt="logo" style={{ width: '100px', height:'95px',borderRadius: '20px' ,  marginLeft: '50px'   }}  />
            </form>
            
            <p className="text-sm text-gray-400">
              Premium cosmetics for the modern woman, crafted with care and quality ingredients.
            </p>
          </div>
        </div>
        
        <div className="px-4 py-6 border-t border-gray-800 sm:px-6 lg:px-8">
          <p className="text-sm text-center text-gray-400">
                       © 2025 The Smile Cosmetics. Developed by ahmedalayde86@gmail.com. All rights reserved.

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;