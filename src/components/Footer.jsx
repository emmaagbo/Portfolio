import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import Logo from '../assets/logo-2.svg';
import { Link } from 'react-router-dom';

const theme = {
  neonGreen: "text-green-400",
};

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { id: "github", label: "GitHub", icon: Github, url: "https://github.com/emmaagbo" },
    { id: "linkedin", label: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/emmanuel-mahoukp%C3%A9go-agbotoedo-50a6bb351" },
    { id: "twitter", label: "Twitter", icon: Twitter, url: "https://www.twitter.com/EAgbotoedo" },
    { id: "email", label: "Email", icon: Mail, url: "mailto:mahoukpegoemmanuel@gmail.com" },
  ];

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-400 relative border-t border-gray-800 w-full">
      {/* Effet visuel en haut */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-400/10 to-transparent opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Colonne 1: À propos + logo */}
        <div>
          <Link to="/" className="flex items-center mb-4 space-x-2">
            <img src={Logo} alt="logo" className="h-12 sm:h-16 object-contain" />
            <span className="text-white text-xl font-semibold">ManuTech</span>
          </Link>
          <p className="mb-4">Développeur web passionné par la création d’expériences numériques fluides et impactantes.</p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.neonGreen} hover:text-green-300 transition`}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 2: Navigation */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Navigation</h3>
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3: Services */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition">Développement Front-end</li>
            <li className="hover:text-white transition">Développement Back-end</li>
            <li className="hover:text-white transition">UX/UI Design</li>
            <li className="hover:text-white transition">Responsive Design</li>
          </ul>
        </div>

        {/* Colonne 4: Contact */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
          <address className="not-italic space-y-2">
            <p>Porto-Novo, Bénin</p>
            <p>
              <a href="mailto:mahoukpegoemmanuel@gmail.com" className="hover:text-white transition">mahoukpegoemmanuel@gmail.com</a>
            </p>
            <p>
              <a href="tel:+2290191732432" className="hover:text-white transition">+229 01 91 73 24 32</a>
            </p>
          </address>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-green-400 bg-gray-900 py-4 flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          &copy; {currentYear} <span className="text-green-400">ManuTech</span>. Tous droits réservés.
        </p>
        <div className="mt-4 md:mt-0 flex gap-6 text-sm">
          <a href="#" className="hover:text-white flex items-center">
            Mentions légales <ExternalLink size={14} className="ml-1" />
          </a>
          <a href="#" className="hover:text-white flex items-center">
            Politique de confidentialité <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;