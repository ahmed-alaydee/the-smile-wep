import React, { useEffect, useRef } from 'react';

const MapSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          موقعنا على الخريطة
        </h2>

        <div
          ref={mapRef}
          className="relative overflow-hidden transition-all duration-1000 ease-out transform translate-y-10 border border-gray-200 shadow-2xl opacity-0 rounded-3xl backdrop-blur-xl bg-white/50"
          style={{ height: '500px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.3059427137187!2d31.288130784886626!3d29.97063638190922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU4JzE0LjMiTiAzMcKwMTcnMDkuNCJF!5e0!3m2!1sar!2seg!4v1745859492545!5m2!1sar!2seg&maptype=roadmap"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
