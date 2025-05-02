import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import photoReact from '../assets/photo-accueil.png'
import appli from '../assets/about-photo/appli.jpg';
import bord from '../assets/about-photo/bord.jpg';
import comm from '../assets/about-photo/e-comm.jpg';
import { Github, Linkedin, Mail, ChevronDown, Send} from 'lucide-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Hero Section avec Animation */}
      <section className="relative h-screen flex items-center justify-center px-4 m-12">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profil Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-55 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
              <img 
                src={photoReact} 
                alt="Emmanuel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Salut, moi c'est Emmanuel AGBOTOEDO Mahoukpégo
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Développeur Web & Mobile
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Passionné par la création de sites web modernes, performants et d'applications mobiles intuitives qui répondent aux besoins des utilisateurs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/about"
              className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
            >
              En savoir plus
            </Link>

            <Link
              to="/contact"
              className="bg-transparent inline-flex border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900 font-semibold py-3 px-4 rounded-lg transition duration-300"
            >
              <Send size={20} className="mr-2"/>
              Me contacter
            </Link>
          </div>

          {/* Icons reseaux sociaux */}
          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/emmaagbo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-mahoukp%C3%A9go-agbotoedo-50a6bb351" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mahoukpegoemmanuel@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-green-400" />
          </div>
        </div>
      </section>

      {/* Section Projects avec Cardre */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-green-400">Mes Projets</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Découvrez certains de mes projets récents, alliant innovation et performance pour créer des expériences utilisateur exceptionnelles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <img src={appli} alt="Projet 1" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Application Mobile</h3>
                <p className="text-gray-400 mb-4">Une application mobile intuitive développée avec React Native.</p>
                <a href="#" className="text-green-500 font-medium hover:text-green-400">Voir plus →</a>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <img src={comm} alt="Projet 2" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Site E-commerce</h3>
                <p className="text-gray-400 mb-4">Plateforme de vente en ligne avec panier et paiement sécurisé.</p>
                <a href="#" className="text-green-500 font-medium hover:text-green-400">Voir plus →</a>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <img src={bord} alt="Projet 3" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Tableau de Bord</h3>
                <p className="text-gray-400 mb-4">Interface admin intuitive pour la gestion de contenu.</p>
                <a href="#" className="text-green-500 font-medium hover:text-green-400">Voir plus →</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Voir tous mes projets
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-green-400">Contactez-moi</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Vous avez un projet en tête ou une opportunité de collaboration ? N'hésitez pas à me contacter pour en discuter !
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full md:w-auto bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center transition-transform hover:scale-105">
              <Mail size={32} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-400">oemmanuel@gmail.com</p>
            </div>
            
            <div className="w-full md:w-auto bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center transition-transform hover:scale-105">
              <Linkedin size={32} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/emmanuel</p>
            </div>
            
            <div className="w-full md:w-auto bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center transition-transform hover:scale-105">
              <Github size={32} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">GitHub</h3>
              <p className="text-gray-400">github.com/emmanuel</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;