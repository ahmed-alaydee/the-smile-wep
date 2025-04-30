import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.pharmacies': 'Partner Pharmacies',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.jobs': 'Careers',
    
    // Hero
    'hero.title': 'The Smile Cosmetics',
    'hero.subtitle': 'Beauty with confidence',
    'hero.description': 'Premium cosmetics for the modern woman, crafted with care and quality ingredients.',
    'hero.cta': 'Explore Products',
    
    // About
    'about.title': 'About Us',
    'about.description': 'Our company started by importing hair care and beauty products, making a mark in markets like Saudi Arabia, Bahrain, and Turkey. With changes in the local import market, we saw an opportunity to expand and launched our first local production line in Egypt with five unique hair care products. All our products are licensed by the Egyptian Ministry of Health, and we aim to continue developing solutions for hair and skincare needs..',
    'about.mission': 'Our mission is to empower individuals to express themselves through beauty, while promoting confidence and self-love.',
    
    // Products
    'products.title': 'Our Products',
    'products.description': 'Discover our range of premium cosmetics, designed to enhance your natural beauty.',
    'products.viewDetails': 'View Details',
    'products.backToProducts': 'Back to Products',
    
    // Pharmacies
    'pharmacies.title': 'Partner Pharmacies',
    'pharmacies.description': 'Find our products in these trusted pharmacies across the country.',
    'pharmacies.branches': 'Branches',
    
    // Jobs
    'jobs.title': 'Join Our Team',
    'jobs.description': 'We\'re always looking for talented individuals to join our growing team.',
    'jobs.name': 'Full Name',
    'jobs.email': 'Email Address',
    'jobs.position': 'Position of Interest',
    'jobs.message': 'Tell us about yourself',
    'jobs.submit': 'Submit Application',
    'jobs.success': 'Your application has been submitted successfully!',
    
    // Footer
    'footer.address': 'Address',
    'footer.contact': 'Contact',
    'footer.links': 'Quick Links',
    'footer.subscribe': 'Subscribe to our newsletter',
    'footer.subscribeButton': 'Subscribe',
    'footer.copyright': '© 2025 The Smile Cosmetics. All rights reserved.',
  },
  ar: {
    // Navbar
    'nav.pharmacies': 'صيدليات شريكة',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.jobs': 'فرص عمل',
    
    // Hero
    'hero.title': 'ذا سمايل كوزمتكس',
    'hero.subtitle': 'الجمال بثقة',
    'hero.description': 'مستحضرات تجميل متميزة للمرأة العصرية، مصنوعة بعناية ومكونات عالية الجودة.',
    'hero.cta': 'استكشف المنتجات',
    
    // About
    'about.title': 'من نحن',
    'about.description': 'بدأت شركتنا في استيراد منتجات العناية بالشعر والجمال، ونجحت في أسواق مثل السعودية والبحرين وتركيا. مع التغيرات في سوق الاستيراد، قررنا توسيع أعمالنا وإطلاق أول خط إنتاج محلي في مصر، مع خمسة منتجات متميزة للعناية بالشعر. جميع منتجاتنا مرخصة من وزارة الصحة المصرية، ونهدف إلى تطوير منتجاتنا لتلبية احتياجات العملاء في مجال العناية بالشعر والبشرة.',
    
    'about.mission': 'مهمتنا هي تمكين الأفراد من التعبير عن أنفسهم من خلال الجمال، مع تعزيز الثقة وحب الذات.',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.description': 'اكتشف مجموعتنا من مستحضرات التجميل الفاخرة، المصممة لتعزيز جمالك الطبيعي.',
    'products.viewDetails': 'عرض التفاصيل',
    'products.backToProducts': 'العودة إلى المنتجات',
    
    // Pharmacies
    'pharmacies.title': 'صيدليات شريكة',
    'pharmacies.description': 'اعثر على منتجاتنا في هذه الصيدليات الموثوقة في جميع أنحاء البلاد.',
    'pharmacies.branches': 'الفروع',
    
    // Jobs
    'jobs.title': 'انضم إلى فريقنا',
    'jobs.description': 'نحن دائمًا نبحث عن أفراد موهوبين للانضمام إلى فريقنا المتنامي.',
    'jobs.name': 'الاسم الكامل',
    'jobs.email': 'البريد الإلكتروني',
    'jobs.position': 'المنصب المطلوب',
    'jobs.message': 'أخبرنا عن نفسك',
    'jobs.submit': 'تقديم الطلب',
    'jobs.success': 'تم تقديم طلبك بنجاح!',
    
    // Footer
    'footer.address': 'العنوان',
    'footer.contact': 'اتصل بنا',
    'footer.links': 'روابط سريعة',
    'footer.subscribe': 'اشترك في نشرتنا الإخبارية',
    'footer.subscribeButton': 'اشترك',
    'footer.copyright': '© 2025 ذا سمايل كوزمتكس. جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};