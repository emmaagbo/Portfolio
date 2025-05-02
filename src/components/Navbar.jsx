import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/logo-2.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    isActive(path)
      ? 'text-green-400 bg-gray-900 px-3 py-2 rounded-md'
      : 'text-green-400 hover:text-green-200 hover:bg-gray-800 px-3 py-2 rounded-md transition';

  const mobileLinkClass = (path) =>
    isActive(path)
      ? 'block bg-gray-900 py-2 px-3 rounded-md text-green-400'
      : 'block text-green-400 hover:text-green-200 py-2 px-3';

  return (
    <nav className="bg-black shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-12 sm:h-16 object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className={linkClass('/')}>Accueil</Link>
            <Link to="/about" className={linkClass('/about')}>A-propos</Link>
            <Link to="/projects" className={linkClass('/projects')}>Projets</Link>
            <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-400 hover:text-green-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className={mobileLinkClass('/')}>Accueil</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={mobileLinkClass('/about')}>A-propos</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className={mobileLinkClass('/projects')}>Projets</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={mobileLinkClass('/contact')}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
