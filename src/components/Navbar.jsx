import { Link } from 'react-router-dom';
import { useState} from 'react';
import Logo from '../assets/logo-2.svg'
import {Code} from 'lucide-react';

const theme = {
  neonGreen: 'text-green-400'
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilter, setIsFilter] = useState('Acceuil')
  {/**useEffect(()=>{
    const nav =()=>
  }) */}

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex justify-between h-24 items-center">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-4xl font-bold text-green-400 flex">
              {/*<Logo className="h-10 w-10"/>*/}
              <img src={Logo} alt='logo' className="h-40"/>
              {/*<Code size={40} className={theme.neonGreen} />*/}
              {/**M<Code size={40} className={theme.neonGreen}/>nu<span className="text-green-200">Tech</span> */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center nom">
            <Link to="/" className="text-green-400 hover:text-green-200 transition translate-color">
              Accueil
            </Link>
            <Link to="/about" className="text-green-400 hover:text-green-200 transition">
              A-propos
            </Link>
            <Link to="/projects" className="text-green-400 hover:text-green-200 transition">
              Projets
            </Link>
            <Link to="/contact" className="text-green-400 hover:text-green-200 transition">
              Contact
            </Link>
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
        <div className="md:hidden bg-black px-4 pt-4 pb-2 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-green-400 hover:text-green-200">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-green-400 hover:text-green-200">
            About
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block text-green-400 hover:text-green-200">
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-green-400 hover:text-green-200">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
