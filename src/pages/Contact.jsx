import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message envoyé !');
  };

  // Couleurs cohérentes avec About
  const neonGreen = "text-green-400";
  const neonGreenBg = "bg-green-400";
  const neonGreenBorder = "border-green-400";
  const darkBg = "bg-black";
  const darkBgAlt = "bg-gray-900";
  const darkText = "text-gray-200";

  return (
    <div className={`min-h-screen ${darkBg} ${darkText} py-10 px-4`}>
      <h1 className={`text-4xl font-bold text-center mb-8 ${neonGreen}`}>
        Contactez-moi
      </h1>

      <form
        onSubmit={handleSubmit}
        className={`max-w-4xl mx-auto ${darkBgAlt} p-8 rounded-lg border ${neonGreenBorder}`}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-white">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full mt-2 px-4 py-2 ${darkBg} border ${neonGreenBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white`}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full mt-2 px-4 py-2 ${darkBg} border ${neonGreenBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white`}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`w-full mt-2 px-4 py-2 ${darkBg} border ${neonGreenBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white`}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full ${neonGreenBg} hover:bg-green-300 text-black font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300`}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
