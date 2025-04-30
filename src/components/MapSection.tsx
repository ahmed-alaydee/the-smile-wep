import React, { useEffect, useRef } from 'react';

const MapSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // إعداد Intersection Observer لمتابعة العنصر عند ظهوره في الشاشة
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // عند ظهور العنصر، أضف تأثير التلاشي
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-96 overflow-hidden">
      <div
        ref={mapRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-out"
      >
        {/* تضمين خريطة جوجل بدون أي تأثيرات أو تدرج خلفي */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.3059427137187!2d31.288130784886626!3d29.97063638190922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU4JzE0LjMiTiAzMcKwMTcnMDkuNCJF!5e0!3m2!1sar!2seg!4v1745859492545!5m2!1sar!2seg&maptype=roadmap"
          width="100%"
          height="100%"
          style={{ border: '0', margin: 'auto' }} 
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
