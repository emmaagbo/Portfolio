import {Code, Github, Map, Facebook, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom';

const theme = {
  neonGreen: "text-green-400", 
  neonPurple: "text-purple-400",
  neonGreenBg: "bg-green-400",
  neonGreenBorder: "border-green-400",
  darkBg: "bg-black",
  darkBgAlt: "bg-gray-900",
  darkText: "text-gray-200"
};
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-4 mt-9 relative mt-10 border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-green-400/10 to-transparent opacity-30"></div>
        <div className="relative max-w-7xl mx-auto py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
            <Link to="/" className="text-4xl font-bold text-green-400 flex">
              M<Code size={40} className={theme.neonGreen} />nu<span className="text-green-200">Tech</span>
              {/*<Code size={40} className={theme.neonGreen} />*/}
            </Link>
          </div>
          <p className="mb-4">
            © {new Date().getFullYear()} ManuTech. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.github.com/emmaagbo" className={`${theme.neonGreen} hover:text-green-300 transition-colors`}>
              <Github size={20} />
            </a>
            <a href="#" className={`${theme.neonGreen} hover:text-green-300 transition-colors`}>
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
    </footer>
  );
}

export default Footer;