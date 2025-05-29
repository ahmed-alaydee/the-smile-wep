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
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
            {t('jobs.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-500">
            {t('jobs.description')}
          </p>
        </div>

        {flashMessage && (
          <div className="p-4 mb-6 text-center text-green-600 bg-green-100 border border-green-300 rounded-lg shadow">
            {flashMessage}
          </div>
        )}

        <div className="overflow-hidden bg-white shadow-2xl rounded-2xl">
          <div className="p-8">
            {submitted ? (
              <div className="py-12 text-center animate-fade-in-up">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-green-600 bg-green-100 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
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
                <h3 className="text-2xl font-semibold text-gray-800">{t('jobs.success')}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                      {t('jobs.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black bg-white border border-gray-300 shadow-sm rounded-2xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                      {t('jobs.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black bg-white border border-gray-300 shadow-sm rounded-2xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                      {t('Phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black bg-white border border-gray-300 shadow-sm rounded-2xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block mb-1 text-sm font-medium text-gray-700">
                    {t('jobs.position')}
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black bg-white border border-gray-300 shadow-sm rounded-2xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  >
                    <option value="" disabled>
                      {t('position')}
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
                    {t('jobs.expectedSalary')}
                  </label>
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    placeholder="jobs expected salary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black bg-white border border-gray-300 shadow-sm rounded-2xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block mb-1 text-sm font-medium text-gray-700">
                    {t('jobs.experience')}
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    placeholder="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black bg-white border border-gray-300 shadow-sm rounded-2xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                    {t('jobs.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-black bg-white border border-gray-300 shadow-sm rounded-2xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all transform bg-rose-500 rounded-2xl hover:bg-rose-600 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                  >
                    <Send className="w-5 h-5 mr-2" />
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
