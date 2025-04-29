import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Award, Layers, Monitor, Smartphone, Cpu, Database, Settings, ChevronDown, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const [expandedSections, setExpandedSections] = useState({
    expertise: false,
    services: false,
    process: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Couleurs principales
  const neonGreen = "text-green-400"; // Couleur vert néon pour le texte
  const neonGreenBg = "bg-green-400"; // Fond vert néon
  const neonGreenBorder = "border-green-400"; // Bordure vert néon
  const darkBg = "bg-black"; // Fond noir
  const darkBgAlt = "bg-gray-900"; // Fond noir alternatif
  const darkText = "text-gray-200"; // Texte sur fond noir

  return (
    <div className={`min-h-screen ${darkBg} ${darkText} font-sans`}>
      {/* Hero section */}
      <div className={`${darkBgAlt} border-b border-gray-800`}>
        <div className="max-w-5xl mx-auto py-20 px-6">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${neonGreen}`}>À PROPOS</h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4 text-white">Développeur Senior</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Avec plus de 10 ans d'expérience dans la création d'applications web et mobiles performantes et innovantes. 
                Chez ManuTech, je mets mon expertise technique et ma vision stratégique au service de vos projets numériques.
              </p>
            </div>
            <div className={`md:w-1/3 ${darkBgAlt} p-6 rounded-lg border border-gray-800`}>
              <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 ${darkBg} rounded-full border ${neonGreenBorder}`}>
                <Code size={32} className={neonGreen} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">ManuTech</h3>
              <p className="text-center text-gray-400">Solutions de développement web et mobile sur mesure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <div className="mb-12">
              <h2 className={`text-2xl font-bold mb-6 border-b border-gray-800 pb-2 ${neonGreen}`}>Mon parcours</h2>
              <p className="text-gray-300 mb-4">
                Mon parcours dans le développement a débuté par une passion pour la résolution de problèmes complexes et s'est transformé en une carrière dédiée à l'excellence technique.
              </p>
              <p className="text-gray-300">
                Après avoir obtenu ma formation en informatique, j'ai travaillé sur des projets variés allant des startups aux grandes entreprises, ce qui m'a permis d'acquérir une compréhension approfondie des défis techniques et des besoins métier.
              </p>
            </div>

            <div className="mb-12">
              <h2 className={`text-2xl font-bold mb-6 border-b border-gray-800 pb-2 ${neonGreen}`}>Ma philosophie</h2>
              <p className="text-gray-300 mb-4">
                Je crois fermement que le code de qualité est un investissement, pas une dépense. Mon approche du développement repose sur trois piliers :
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className={`mt-1 ${darkBgAlt} p-2 rounded-full mr-4 border ${neonGreenBorder}`}>
                    <Award size={20} className={neonGreen} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Performance</h3>
                    <p className="text-gray-400">Des applications rapides, réactives et optimisées</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`mt-1 ${darkBgAlt} p-2 rounded-full mr-4 border ${neonGreenBorder}`}>
                    <Layers size={20} className={neonGreen} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Évolutivité</h3>
                    <p className="text-gray-400">Des solutions conçues pour s'adapter à votre croissance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`mt-1 ${darkBgAlt} p-2 rounded-full mr-4 border ${neonGreenBorder}`}>
                    <Settings size={20} className={neonGreen} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Maintenabilité</h3>
                    <p className="text-gray-400">Un code propre et documenté pour faciliter les évolutions futures</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className={`text-2xl font-bold mb-6 border-b border-gray-800 pb-2 ${neonGreen}`}>En dehors du code</h2>
              <p className="text-gray-300">
                Quand je ne suis pas en train de coder, je reste à l'affût des dernières avancées technologiques. Je participe régulièrement à des conférences tech et contribue à des projets open source pour garder mes compétences à jour et redonner à la communauté qui m'a tant appris.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="mb-8">
              <button 
                onClick={() => toggleSection('expertise')}
                className={`w-full flex justify-between items-center text-2xl font-bold mb-6 border-b border-gray-800 pb-2 focus:outline-none ${neonGreen}`}
              >
                <span>Expertise technique</span>
                {expandedSections.expertise ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
              </button>
              
              {expandedSections.expertise && (
                <div className="pl-2 space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="flex items-center text-lg font-semibold mb-2 text-white">
                      <Code size={18} className={`mr-2 ${neonGreen}`} />
                      Langages de programmation
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript/TypeScript', 'Python', 'PHP', 'Swift/Kotlin'].map(lang => (
                        <span key={lang} className={`px-3 py-1 ${darkBgAlt} text-gray-300 rounded-full text-sm border ${neonGreenBorder}`}>
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center text-lg font-semibold mb-2 text-white">
                      <Monitor size={18} className={`mr-2 ${neonGreen}`} />
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'React Native', 'Vue.js', 'Angular', 'HTML5/CSS3/SASS'].map(tech => (
                        <span key={tech} className={`px-3 py-1 ${darkBgAlt} text-gray-300 rounded-full text-sm border ${neonGreenBorder}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center text-lg font-semibold mb-2 text-white">
                      <Database size={18} className={`mr-2 ${neonGreen}`} />
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Django/Flask', 'Laravel', 'API RESTful', 'GraphQL'].map(tech => (
                        <span key={tech} className={`px-3 py-1 ${darkBgAlt} text-gray-300 rounded-full text-sm border ${neonGreenBorder}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center text-lg font-semibold mb-2 text-white">
                      <Cpu size={18} className={`mr-2 ${neonGreen}`} />
                      Devops & Outils
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Git/GitHub/GitLab', 'Docker', 'Kubernetes', 'AWS/Azure/GCP', 'CI/CD'].map(tool => (
                        <span key={tool} className={`px-3 py-1 ${darkBgAlt} text-gray-300 rounded-full text-sm border ${neonGreenBorder}`}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-8">
              <button 
                onClick={() => toggleSection('services')}
                className={`w-full flex justify-between items-center text-2xl font-bold mb-6 border-b border-gray-800 pb-2 focus:outline-none ${neonGreen}`}
              >
                <span>Services</span>
                {expandedSections.services ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
              </button>
              
              {expandedSections.services && (
                <div className="space-y-4 pl-2 animate-fadeIn">
                  <div className={`p-4 ${darkBgAlt} rounded-lg border border-gray-800`}>
                    <h3 className="flex items-center font-semibold mb-2 text-white">
                      <Monitor size={18} className={`mr-2 ${neonGreen}`} />
                      Développement d'applications web
                    </h3>
                    <p className="text-gray-400 text-sm">Sites vitrines, applications SaaS, plateformes e-commerce</p>
                  </div>
                  
                  <div className={`p-4 ${darkBgAlt} rounded-lg border border-gray-800`}>
                    <h3 className="flex items-center font-semibold mb-2 text-white">
                      <Smartphone size={18} className={`mr-2 ${neonGreen}`} />
                      Développement mobile
                    </h3>
                    <p className="text-gray-400 text-sm">Applications iOS et Android natives ou cross-platform</p>
                  </div>
                  
                  <div className={`p-4 ${darkBgAlt} rounded-lg border border-gray-800`}>
                    <h3 className="flex items-center font-semibold mb-2 text-white">
                      <Cpu size={18} className={`mr-2 ${neonGreen}`} />
                      Conseil technique
                    </h3>
                    <p className="text-gray-400 text-sm">Architecture logicielle, choix technologiques, revue de code</p>
                  </div>
                  
                  <div className={`p-4 ${darkBgAlt} rounded-lg border border-gray-800`}>
                    <h3 className="flex items-center font-semibold mb-2 text-white">
                      <Settings size={18} className={`mr-2 ${neonGreen}`} />
                      Optimisation de performance
                    </h3>
                    <p className="text-gray-400 text-sm">Audit et amélioration des applications existantes</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-8">
              <button 
                onClick={() => toggleSection('process')}
                className={`w-full flex justify-between items-center text-2xl font-bold mb-6 border-b border-gray-800 pb-2 focus:outline-none ${neonGreen}`}
              >
                <span>Mon processus</span>
                {expandedSections.process ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
              </button>
              
              {expandedSections.process && (
                <div className="pl-2 animate-fadeIn">
                  <ol className="relative border-l border-gray-800">
                    {[
                      { title: "Écoute et analyse", desc: "des besoins et objectifs" },
                      { title: "Proposition", desc: "de solutions adaptées" },
                      { title: "Développement", desc: "itératif avec des feedbacks réguliers" },
                      { title: "Tests rigoureux", desc: "pour garantir qualité et robustesse" },
                      { title: "Déploiement", desc: "et accompagnement post-lancement" }
                    ].map((step, index) => (
                      <li key={index} className="mb-6 ml-6">
                        <span className={`flex absolute -left-3 justify-center items-center w-6 h-6 ${darkBgAlt} rounded-full border ${neonGreenBorder}`}>
                          <span className={`text-sm font-medium ${neonGreen}`}>{index + 1}</span>
                        </span>
                        <h3 className="font-semibold text-white">{step.title}</h3>
                        <p className="text-sm text-gray-400">{step.desc}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`mt-12 py-8 px-6 ${darkBgAlt} rounded-lg text-center border ${neonGreenBorder}`}>
          <h2 className="text-2xl font-bold mb-4 text-white">Travaillons ensemble</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Vous avez un projet qui nécessite une expertise technique avancée ? Discutons de la façon dont je peux vous aider à transformer votre vision en réalité.
          </p>
          <Link to="/contact" className={`px-6 py-3 ${neonGreenBg} text-black font-medium rounded-lg hover:bg-green-300 transition duration-200`}>
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}