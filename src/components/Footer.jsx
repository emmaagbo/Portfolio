import { Github, Map, Facebook, Linkedin } from 'lucide-react';
import Logo from '../assets/logo-2.svg';
import { Link } from 'react-router-dom';

const theme = {
  neonGreen: "text-green-400", 
};

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-9 relative border-t border-gray-800 w-full">
      {/* Effet visuel */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-400/10 to-transparent opacity-30 pointer-events-none"></div>

      {/* Partie principale du footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="logo" className="h-12 sm:h-16 object-contain" />
        </Link>

        {/* Réseaux sociaux */}
        <div className="flex space-x-5">
          <a href="https://www.github.com/emmaagbo" target="_blank" rel="noopener noreferrer"
             className={`${theme.neonGreen} hover:text-green-300 transition`}>
            <Github size={24} />
          </a>
          <a href="https://maps.app.goo.gl/LsDjV9hS42aRZ6gF7" target="_blank" rel="noopener noreferrer"
             className={`${theme.neonGreen} hover:text-green-300 transition`}>
            <Map size={24} />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-mahoukp%C3%A9go-agbotoedo-50a6bb351" target="_blank" rel="noopener noreferrer"
             className={`${theme.neonGreen} hover:text-green-300 transition`}>
            <Linkedin size={24} />
          </a>
          <a href="https://www.facebook.com/@manu.tech.2024" target="_blank" rel="noopener noreferrer"
             className={`${theme.neonGreen} hover:text-green-300 transition`}>
            <Facebook size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-400 bg-gray-900 py-3">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} <span className="text-green-400">ManuTech</span>. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
