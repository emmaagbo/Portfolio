import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [focused, setFocused] = useState(null);

  // Couleurs cohérente
  const neonGreen = "text-green-400";
  const neonGreenBg = "bg-green-400";
  const neonGreenBorder = "border-green-400";
  const darkBg = "bg-black";
  const darkBgAlt = "bg-gray-900";
  const darkText = "text-gray-200";

  // Remplacez ces informations par vos propres informations EmailJS
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;  

  const validateForm = () => {
    let tempErrors = {};
    
    if (!formData.name.trim()) {
      tempErrors.name = "Veuillez saisir votre nom";
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Veuillez saisir votre email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Veuillez saisir un email valide";
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Veuillez saisir votre message";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Votre message doit contenir au moins 10 caractères";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      subject: ''
    });
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        // Préparation des paramètres pour EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'mahoukpegoemmanuel@gmail.com', // Votre email de destination
          subject: formData.subject || 'Nouveau message de contact',
          message: formData.message
        };

        // Envoi de l'email via EmailJS
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
        
        setIsSubmitted(true);
        
        // Reset form after 15 seconds
        setTimeout(() => {
          resetForm();
        }, 15000);
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={`min-h-screen ${darkBg} ${darkText} py-10 px-4 transition-all duration-300`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-5xl font-bold text-center mb-2 ${neonGreen}`}>
          Contactez-moi
        </h1>
        <p className="text-center mb-8 text-gray-400">Je vous répondrai dans les plus brefs délais</p>

        {isSubmitted ? (
          <div className={`${darkBgAlt} p-8 rounded-lg border ${neonGreenBorder} text-center transition-all duration-500 transform`}>
            <div className={`${neonGreen} text-5xl mb-4`}>✓</div>
            <h2 className="text-2xl font-bold text-white mb-2">Message envoyé avec succès!</h2>
            <p className="text-gray-400 mb-6">Merci de m'avoir contacté. Je vous répondrai dès que possible.</p>
            <button 
              onClick={resetForm}
              className={`${neonGreenBg} hover:bg-green-300 text-black font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300`}
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className={`${darkBgAlt} p-8 rounded-lg border ${neonGreenBorder} shadow-xl transition-all duration-300`}
          >
            {submitError && (
              <div className="bg-red-500 bg-opacity-20 border border-red-500 text-white p-4 rounded-lg mb-6">
                <p>{submitError}</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label 
                  htmlFor="name" 
                  className={`block text-lg font-semibold ${focused === 'name' ? neonGreen : 'text-white'} transition-colors duration-300`}
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className={`w-full mt-2 px-4 py-3 ${darkBg} border ${errors.name ? 'border-red-500' : focused === 'name' ? 'border-green-300' : neonGreenBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white transition-all duration-300`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="relative">
                <label 
                  htmlFor="email" 
                  className={`block text-lg font-semibold ${focused === 'email' ? neonGreen : 'text-white'} transition-colors duration-300`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`w-full mt-2 px-4 py-3 ${darkBg} border ${errors.email ? 'border-red-500' : focused === 'email' ? 'border-green-300' : neonGreenBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white transition-all duration-300`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label 
                htmlFor="subject" 
                className={`block text-lg font-semibold ${focused === 'subject' ? neonGreen : 'text-white'} transition-colors duration-300`}
              >
                Sujet (optionnel)
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
                className={`w-full mt-2 px-4 py-3 ${darkBg} border ${focused === 'subject' ? 'border-green-300' : neonGreenBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white transition-all duration-300`}
              />
            </div>

            <div className="mt-6">
              <label 
                htmlFor="message" 
                className={`block text-lg font-semibold ${focused === 'message' ? neonGreen : 'text-white'} transition-colors duration-300`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                rows="5"
                className={`w-full mt-2 px-4 py-3 ${darkBg} border ${errors.message ? 'border-red-500' : focused === 'message' ? 'border-green-300' : neonGreenBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white transition-all duration-300`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${neonGreenBg} hover:bg-green-300 text-black font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 relative overflow-hidden ${isSubmitting ? 'opacity-80' : ''}`}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer le message'
                )}
              </button>
            </div>

            <div className="mt-6 text-center text-gray-400 text-sm">
              En soumettant ce formulaire, vous acceptez que je vous contacte en retour
            </div>
          </form>
        )}

        <div className="mt-12 text-center">
          <h3 className={`text-xl font-bold mb-4 ${neonGreen}`}>Autres moyens de contact</h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className={`${neonGreen} text-2xl mb-2`}>✉</div>
              <p>mahoukpegoemmanuel@gmail.com</p>
            </div>
            <div className="text-center">
              <div className={`${neonGreen} text-2xl mb-2`}>☎</div>
              <p>+229 01 91 73 24 32</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;