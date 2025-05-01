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
    phone: '',
    position: '',
    message: '',
    expectedSalary: '',
    experience: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [flashMessage, setFlashMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.position ||
      !formData.message ||
      !formData.expectedSalary ||
      !formData.experience
    ) {
      alert('Please fill in all the fields.');
      return;
    }

    const serviceId = 'service_rauyvfr';
    const templateId = 'template_t806s3g';
    const userId = 'EoL61AA5rXrdP_Qk4';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      message: formData.message,
      expectedSalary: formData.expectedSalary,
      experience: formData.experience,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setFlashMessage('Your message has been sent successfully!');
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            position: '',
            message: '',
            expectedSalary: '',
            experience: '',
          });
          setFlashMessage(null);
        }, 3000);
      })
      .catch(err => {
        console.error('FAILED...', err);
        setFlashMessage('There was an error sending your message. Please try again later.');
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
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            {t('jobs.title')}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            {t('jobs.description')}
          </p>
        </div>

        {flashMessage && (
          <div className="p-4 mb-6 text-center text-green-600 bg-green-100 rounded-md">
            {flashMessage}
          </div>
        )}

        <div className="overflow-hidden rounded-lg shadow-xl">
          <div className="p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 text-green-600 bg-green-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {t('jobs.success')}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                      {t('jobs.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t('jobs.namePlaceholder') || 'Your full name'}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 w-full text-black rounded-md border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                      {t('jobs.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t('jobs.emailPlaceholder') || 'your@email.com'}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 w-full text-black rounded-md border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                      {t('jobs.phone')} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={t('jobs.phonePlaceholder') || '+1 234 567 890'}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 w-full text-black rounded-md border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block mb-1 text-sm font-medium text-gray-700">
                    {t('jobs.position')} *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 w-full text-black rounded-md border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
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
                  <label htmlFor="expectedSalary" className="block mb-1 text-sm font-medium text-gray-700">
                    {t('jobs.expectedSalary')} *
                  </label>
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    placeholder={t('jobs.expectedSalaryPlaceholder') || 'e.g. 5000 USD/month'}
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 w-full text-black rounded-md border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block mb-1 text-sm font-medium text-gray-700">
                    {t('jobs.experience')} *
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    placeholder={t('jobs.experiencePlaceholder') || 'e.g. 3 years in software development'}
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 w-full text-black rounded-md border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                    {t('jobs.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={t('jobs.messagePlaceholder') || 'Write your message here...'}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 w-full text-black rounded-md border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 font-medium bg-rose-500 rounded-md transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                  >
                    <Send className="mr-2 w-5 h-5" />
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
