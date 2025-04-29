import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Award, Layers, Monitor, Smartphone, Cpu, Database, Settings, Globe, Book, Zap, Send, Terminal} from 'lucide-react';

function About() {
  // State for expanded sections and animations
  const [expandedSections, setExpandedSections] = useState({
    expertise: false,
    services: false,
    process: false
  });
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('philosophy');

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.8;
        
        if (isInView) {
          setIsVisible(prev => ({ ...prev, [section.id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme colors
  const theme = {
    neonGreen: "text-green-400", 
    neonPurple: "text-purple-400",
    neonGreenBg: "bg-green-400",
    neonGreenBorder: "border-green-400",
    darkBg: "bg-black",
    darkBgAlt: "bg-gray-900",
    darkText: "text-gray-200"
  };

  // Technical skills data
  const skills = {
    languages: ['JavaScript/TypeScript', 'Python', 'PHP', 'Swift/Kotlin', 'Go'],
    frontend: ['React.js', 'React Native', 'Vue.js', 'Angular', 'HTML5/CSS3/SASS', 'TailwindCSS'],
    backend: ['Node.js', 'Django/Flask', 'Laravel', 'API RESTful', 'GraphQL', 'Microservices'],
    devops: ['Git/GitHub/GitLab', 'Docker', 'Kubernetes', 'AWS/Azure/GCP', 'CI/CD', 'Terraform']
  };

  // Services data
  const services = [
    {
      icon: <Monitor size={24} />,
      title: "Développement d'applications web",
      description: "Sites vitrines, applications SaaS, plateformes e-commerce avec des interfaces utilisateur modernes et réactives."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Développement mobile",
      description: "Applications iOS et Android natives ou cross-platform offrant une expérience utilisateur optimale."
    },
    {
      icon: <Cpu size={24} />,
      title: "Conseil technique",
      description: "Architecture logicielle, choix technologiques, revue de code et stratégie de développement."
    },
    {
      icon: <Settings size={24} />,
      title: "Optimisation de performance",
      description: "Audit, refactoring et amélioration des performances des applications existantes."
    }
  ];

  // Process steps
  const processSteps = [
    { 
      title: "Découverte", 
      desc: "Analyse approfondie de vos besoins, objectifs et contraintes",
      icon: <Globe size={20} />
    },
    { 
      title: "Planification", 
      desc: "Élaboration d'une stratégie technique et d'un calendrier précis",
      icon: <Book size={20} />
    },
    { 
      title: "Développement", 
      desc: "Création itérative avec des cycles de feedback réguliers",
      icon: <Terminal size={20} />
    },
    { 
      title: "Validation", 
      desc: "Tests rigoureux pour garantir qualité, sécurité et performances",
      icon: <Zap size={20} />
    },
    { 
      title: "Déploiement", 
      desc: "Mise en production et transfert de compétences",
      icon: <Send size={20} />
    }
  ];

  // Philosophy pillars
  const philosophyPillars = [
    {
      icon: <Award size={24} />,
      title: "Performance",
      description: "Des applications rapides, réactives et optimisées pour tous les utilisateurs et appareils."
    },
    {
      icon: <Layers size={24} />,
      title: "Évolutivité",
      description: "Des solutions modulaires conçues pour s'adapter à votre croissance et à l'évolution de vos besoins."
    },
    {
      icon: <Settings size={24} />,
      title: "Maintenabilité",
      description: "Un code propre, documenté et testé pour faciliter les évolutions futures et réduire la dette technique."
    }
  ];

  return (
    <div className={`min-h-screen ${theme.darkBg} ${theme.darkText} font-sans`}>
      {/* Hero section with parallax effect */}
      <div className={`relative overflow-hidden ${theme.darkBgAlt} border-b border-gray-800`}>
        <div className="absolute inset-0 z-0 grid grid-cols-8 grid-rows-8 opacity-10">
          {Array(64).fill().map((_, i) => (
            <div 
              key={i} 
              className="border border-green-400/30" 
              style={{
                boxShadow: i % 7 === 0 ? '0 0 15px rgba(74, 222, 128, 0.4)' : 'none'
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto py-24 px-6">
          <div className="flex flex-col items-start">
            <h1 className={`text-5xl md:text-7xl font-bold mb-2 ${theme.neonGreen} tracking-tight`} 
                style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.7)' }}>
              À PROPOS
            </h1>
            <div className="h-1 w-24 bg-green-400 mb-8 rounded-full shadow-lg" style={{ boxShadow: '0 0 15px rgba(74, 222, 128, 0.7)' }}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-semibold mb-4 text-white">Développeur Junior</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Avec une bonne expérience dans la création d'applications web et mobiles performantes et innovantes. Je transforme les idées complexes en solutions techniques élégantes.
                  Je suis passionné par l'optimisation des performances et l'expérience utilisateur.
                  Toujours curieux, j'aime apprendre de nouvelles technologies pour améliorer mes projets.
                </p>
              </div>
              
              <div className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800 flex flex-col items-center justify-center transform relative hover:scale-105 transition-all duration-300`}
                   style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}>
                <div className={`flex items-center justify-center w-20 h-20 mb-4 ${theme.darkBg} rounded-full border-2 ${theme.neonGreenBorder}`}
                     style={{ boxShadow: '0 0 15px rgba(74, 222, 128, 0.4)' }}>
                  <Code size={36} className={theme.neonGreen} />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-2 text-white">ManuTech</h3>
                <p className="text-center text-gray-400">Solutions de développement sur mesure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            {[
              { id: 'philosophy', label: 'Philosophie' },
              { id: 'expertise', label: 'Expertise' },
              { id: 'services', label: 'Services' },
              { id: 'process', label: 'Processus' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeTab === tab.id 
                    ? `${theme.neonGreen} border-green-400` 
                    : 'text-gray-400 border-transparent hover:text-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        {/* Philosophy Section */}
        <div id="philosophy" className={`animate-on-scroll ${activeTab === 'philosophy' ? 'block' : 'hidden'}`}>
          <div className="mb-12">
            <h2 className={`text-3xl font-bold mb-8 ${theme.neonGreen}`}>Ma philosophie</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl">
              Je crois fermement que le code de qualité est un investissement, pas une dépense. 
              Mon approche du développement repose sur trois piliers essentiels qui guident chacun 
              de mes projets depuis la conception jusqu'à la livraison.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {philosophyPillars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800 transform hover:translate-y-[-10px] transition-all duration-300`}
                  style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                >
                  <div className={`mb-4 ${theme.darkBg} p-3 rounded-full inline-block border ${theme.neonGreenBorder}`}
                       style={{ boxShadow: '0 0 10px rgba(74, 222, 128, 0.4)' }}>
                    <div className={theme.neonGreen}>{pillar.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-gray-400">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className={`text-3xl font-bold mb-8 ${theme.neonGreen}`}>Mon parcours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800`}>
                <h3 className="text-xl font-semibold text-white mb-4">Formation & Début</h3>
                <p className="text-gray-300 mb-3">
                  Mon parcours dans le développement a débuté par une passion pour la résolution de problèmes complexes
                  et s'est transformé en une carrière dédiée à l'excellence technique.
                </p>
                <p className="text-gray-400">
                  Après avoir obtenu ma formation en informatique, j'ai travaillé sur des projets variés
                  qui m'ont permis d'acquérir une vision globale du développement logiciel.
                </p>
              </div>
              
              <div className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800`}>
                <h3 className="text-xl font-semibold text-white mb-4">En dehors du code</h3>
                <p className="text-gray-300 mb-3">
                  Quand je ne suis pas en train de coder, je reste à l'affût des dernières avancées technologiques
                  pour maintenir mes compétences à jour.
                </p>
                <p className="text-gray-400">
                  Je participe régulièrement à des conférences tech et contribue à des projets open source
                  pour redonner à la communauté qui m'a tant appris.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div id="expertise" className={`animate-on-scroll ${activeTab === 'expertise' ? 'block' : 'hidden'}`}>
          <div className="mb-12">
            <h2 className={`text-3xl font-bold mb-8 ${theme.neonGreen}`}>Expertise technique</h2>
            
            <div className="space-y-10">
              <div className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800`}>
                <h3 className="flex items-center text-xl font-semibold mb-6 text-white">
                  <Code size={22} className={`mr-3 ${theme.neonGreen}`} />
                  Langages de programmation
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map(lang => (
                    <span 
                      key={lang} 
                      className={`px-4 py-2 ${theme.darkBg} text-gray-300 rounded-md text-sm border ${theme.neonGreenBorder} hover:bg-gray-800 transition-colors duration-300`}
                      style={{ boxShadow: '0 0 8px rgba(74, 222, 128, 0.2)' }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800`}>
                <h3 className="flex items-center text-xl font-semibold mb-6 text-white">
                  <Monitor size={22} className={`mr-3 ${theme.neonGreen}`} />
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map(tech => (
                    <span 
                      key={tech} 
                      className={`px-4 py-2 ${theme.darkBg} text-gray-300 rounded-md text-sm border ${theme.neonGreenBorder} hover:bg-gray-800 transition-colors duration-300`}
                      style={{ boxShadow: '0 0 8px rgba(74, 222, 128, 0.2)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800`}>
                <h3 className="flex items-center text-xl font-semibold mb-6 text-white">
                  <Database size={22} className={`mr-3 ${theme.neonGreen}`} />
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map(tech => (
                    <span 
                      key={tech} 
                      className={`px-4 py-2 ${theme.darkBg} text-gray-300 rounded-md text-sm border ${theme.neonGreenBorder} hover:bg-gray-800 transition-colors duration-300`}
                      style={{ boxShadow: '0 0 8px rgba(74, 222, 128, 0.2)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800`}>
                <h3 className="flex items-center text-xl font-semibold mb-6 text-white">
                  <Cpu size={22} className={`mr-3 ${theme.neonGreen}`} />
                  DevOps & Cloud
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.devops.map(tool => (
                    <span 
                      key={tool} 
                      className={`px-4 py-2 ${theme.darkBg} text-gray-300 rounded-md text-sm border ${theme.neonGreenBorder} hover:bg-gray-800 transition-colors duration-300`}
                      style={{ boxShadow: '0 0 8px rgba(74, 222, 128, 0.2)' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className={`animate-on-scroll ${activeTab === 'services' ? 'block' : 'hidden'}`}>
          <div className="mb-12">
            <h2 className={`text-3xl font-bold mb-8 ${theme.neonGreen}`}>Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800 transform hover:scale-[1.02] transition-all duration-300`}
                  style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)' }}
                >
                  <div className={`flex items-center mb-4`}>
                    <div 
                      className={`${theme.darkBg} p-3 rounded-full mr-4 border-2 ${theme.neonGreenBorder}`}
                      style={{ boxShadow: '0 0 10px rgba(74, 222, 128, 0.4)' }}
                    >
                      <div className={theme.neonGreen}>{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Approche personnalisée</h3>
              <p className="text-gray-300">
                Chaque projet est unique et mérite une approche sur mesure. Après une analyse approfondie 
                de vos besoins, je vous propose les solutions les plus adaptées pour atteindre vos objectifs 
                tout en respectant vos contraintes de temps et de budget.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div id="process" className={`animate-on-scroll ${activeTab === 'process' ? 'block' : 'hidden'}`}>
          <div className="mb-12">
            <h2 className={`text-3xl font-bold mb-8 ${theme.neonGreen}`}>Mon processus</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:translate-x-0 top-0 bottom-0 w-px bg-gray-800 md:mx-auto"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline node */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div 
                        className={`${theme.darkBg} flex items-center justify-center w-12 h-12 rounded-full border-2 ${theme.neonGreenBorder} z-10`}
                        style={{ boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)' }}
                      >
                        <div className={theme.neonGreen}>{step.icon}</div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                      <div 
                        className={`${theme.darkBgAlt} p-6 rounded-lg border border-gray-800`}
                        style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)' }}
                      >
                        <h3 className="text-xl font-semibold text-white mb-2">
                          <span className={`inline-block mr-2 ${theme.neonGreen}`}>{index + 1}.</span> {step.title}
                        </h3>
                        <p className="text-gray-400">{step.desc}</p>
                      </div>
                    </div>
                    
                    {/* Empty space for opposite side */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action with animation */}
        <div 
          className={`mt-16 py-10 px-8 ${theme.darkBgAlt} rounded-lg text-center border-2 ${theme.neonGreenBorder} animate-on-scroll transform hover:scale-[1.01] transition-all duration-500`}
          style={{ boxShadow: '0 0 30px rgba(74, 222, 128, 0.2)' }}
          id="cta-section"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Travaillons ensemble</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Vous avez un projet qui nécessite une expertise technique avancée ? 
            Discutons de la façon dont je peux vous aider à transformer votre vision en réalité.
          </p>
          <Link 
            to="/contact" 
            className={`inline-flex items-center px-8 py-3 ${theme.neonGreenBg} text-black font-medium rounded-lg hover:bg-green-300 transition duration-300 text-lg`}
          >
            <Send size={20} className="mr-2" />
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About