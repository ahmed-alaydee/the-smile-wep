import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { jobPositions } from '../utils/data';

const JobsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: '',
    expectedSalary: '',
    experience: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [flashMessage, setFlashMessage] = useState<string | null>(null); // حالة الرسالة

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.position || !formData.message || !formData.expectedSalary || !formData.experience) {
      alert("Please fill in all the fields.");
      return;
    }

    const serviceId = 'service_rauyvfr';
    const templateId = 'template_t806s3g';
    const userId = 'EoL61AA5rXrdP_Qk4';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      position: formData.position,
      message: formData.message,
      expectedSalary: formData.expectedSalary,
      experience: formData.experience,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setFlashMessage('Your message has been sent successfully!'); // عرض رسالة النجاح
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            position: '',
            message: '',
            expectedSalary: '',
            experience: '',
          });
          setFlashMessage(null); 
        }, 3000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setFlashMessage('There was an error sending your message. Please try again later.'); // عرض رسالة الخطأ
        setTimeout(() => {
          setFlashMessage(null); 
        }, 3000);
      });
  };

  return (
    <section 
      id="jobs" 
      className="py-24 bg-gray-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('jobs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('jobs.description')}
          </p>
        </div>

        {/* عرض رسالة flash هنا */}
        {flashMessage && (
          <div className="bg-green-100 text-green-600 p-4 rounded-md text-center mb-6">
            {flashMessage}
          </div>
        )}

        <div className="rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('jobs.success')}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('jobs.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('jobs.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-black"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('jobs.position')} *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-black"
                  >
                    <option value="" disabled>
                      {t('jobs.choosePosition')}
                    </option>
                    {jobPositions.map(pos => (
                      <option key={pos.value} value={pos.value} className="text-black">
                        {language === 'en' ? pos.label : pos.labelAr}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('jobs.expectedSalary')} *
                  </label>
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('jobs.experience')} *
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('jobs.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-black"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-rose-500 font-medium rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {t('jobs.submit')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
