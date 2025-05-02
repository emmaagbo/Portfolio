import { Github, Map, Facebook, Linkedin } from 'lucide-react';
import Logo from '../assets/logo-2.svg';
import { Link } from 'react-router-dom';

const theme = {
  neonGreen: "text-green-400", 
  neonGreenBorder: "border-green-400",
  darkText: "text-gray-200"
};

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-9 relative border-t border-gray-800">
      {/* Effet visuel */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-400/10 to-transparent opacity-30"></div>

      {/* Partie supérieure du footer - hauteur automatique */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-4xl font-bold text-green-400 flex items-center">
            <img src={Logo} alt="logo" className="h-16" />
          </Link>
        </div>

        {/* Icônes sociales */}
        <div className="flex space-x-4">
          <a href="https://www.github.com/emmaagbo" className={`${theme.neonGreen} hover:text-green-300 transition-colors`}>
            <Github size={20} />
          </a>
          <a href="https://maps.app.goo.gl/LsDjV9hS42aRZ6gF7" className={`${theme.neonGreen} hover:text-green-300 transition-colors`}>
            <Map size={20} />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-mahoukp%C3%A9go-agbotoedo-50a6bb351" className={`${theme.neonGreen} hover:text-green-300 transition-colors`}>
            <Linkedin size={20} />
          </a>
          <a href="https://www.facebook.com/@manu.tech.2024" className={`${theme.neonGreen} hover:text-green-300 transition-colors`}>
            <Facebook size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 pt-3 border-t border-green-400 bg-gray-900">
        <p className="text-center text-sm py-2">
          © {new Date().getFullYear()} <span className="text-green-400">ManuTech</span>. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
