import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import logo from '../image/logo.jpeg';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer
      className="text-white bg-gradient-to-br from-rose-400 via-rose-500 to-pink-500"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo + Description + Social */}
          <div>
            <div className="flex items-center mb-6 space-x-3">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="text-xl font-extrabold tracking-wide">The Smile Cosmetics</span>
            </div>

            <p className="mb-6 text-sm text-white/80">
              Premium cosmetics for the modern woman, crafted with care and high-quality ingredients.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.instagram.com/thesmilecosmatics?igsh=MTJnMTg3aGF1MTFwZQ==" className="transition-transform hover:scale-110" >
                <Instagram className="w-5 h-5" target='_blank' />
              </a>
              <a href="https://www.facebook.com/share/1YD9C1QJ4s/" className="transition-transform hover:scale-110">
                <Facebook className="w-5 h-5"  target='_blank'/>
              </a>
             <a
  href="https://www.tiktok.com/@thesmile133?_t=ZS-8wlngwbedVJ&_r=1"
  className="transition-transform hover:scale-110"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaTiktok className="w-5 h-5" />
</a>
              <a href="https://wa.me/201103133750" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" >
                <FaWhatsapp className="w-5 h-5" target='_blank' />
              </a>
              <a href="tel:01103133750" className="transition-transform hover:scale-110">
                <Phone className="w-5 h-5" target='_blank' />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('footer.links')}</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#about" className="hover:text-white">{t('nav.about')}</a></li>
              <li><a href="#products" className="hover:text-white">{t('nav.products')}</a></li>
              <li><a href="#pharmacies" className="hover:text-white">{t('nav.pharmacies')}</a></li>
              <li><a href="#jobs" className="hover:text-white">{t('nav.jobs')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{t('footer.contact')}</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-white" />
                +201103133750
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-white" />
                Smileco425@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-white" />
               EL-Laselky Street, in front of the Technology Village, Maadi, Cairo.
              </li>
            </ul>
          </div>

          {/* Logo + Subscribe */}
          <div>
            {/* <h3 className="mb-4 text-lg font-bold">{t('footer.subscribe')}</h3> */}
            <div className="mb-4">
              <img
             
                src={logo}
                alt="logo"
                className="h-40 mx-auto border-4 border-white shadow-md w-52 rounded-2xl"
                
              />
            </div>
            <p className="text-sm text-center text-white/80">
              Beauty inspired by you, delivered with love.
            </p>
          </div>
        </div>

        <div className="pt-6 mt-10 text-sm text-center border-t border-white/20 text-white/80">
          © 2025 The Smile Cosmetics. Developed by <a href="mailto:ahmedalayde86@gmail.com" className="underline">ahmedalayde86@gmail.com</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
