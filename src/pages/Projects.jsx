import { useState, useEffect } from 'react';
import sites from '../data/projectsData'
import { Github, ExternalLink, Tag, Star, Award, Briefcase } from 'lucide-react';

// Note: Nous simulons l'import des données puisque nous n'avons pas accès au vrai fichier
// Dans votre code réel, utilisez:
// import sites from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Technologies uniques pour les filtres
  const allTechnologies = [...new Set(sites.flatMap(site => site.technologies))];
  
  useEffect(() => {
    setIsVisible(true);
    filterProjects('all');
  }, []);

  const filterProjects = (filterType) => {
    setFilter(filterType);
    
    if (filterType === 'all') {
      setVisibleProjects(sites);
    } else if (filterType === 'featured') {
      setVisibleProjects(sites.filter(site => site.featured));
    } else {
      setVisibleProjects(sites.filter(site => site.technologies.includes(filterType)));
    }
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Découvrez mon portfolio de projets qui démontre mes compétences en développement web et mobile,
            de la conception à la réalisation.
          </p>
          
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              onClick={() => filterProjects('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-green-500 text-gray-900' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              Tous
            </button>
            <button 
              onClick={() => filterProjects('featured')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'featured' ? 'bg-green-500 text-gray-900' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              <span className="flex items-center gap-1">
                <Star size={14} />
                Projets vedettes
              </span>
            </button>
            {allTechnologies.slice(0, 5).map((tech, index) => (
              <button 
                key={index}
                onClick={() => filterProjects(tech)} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === tech ? 'bg-green-500 text-gray-900' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/20 transition-all duration-500 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:scale-105`}
              style={{ transitionDelay: `${150 * (index % 3)}ms` }}
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 flex justify-between w-full">
                    <button
                      onClick={() => openProjectDetails(project)}
                      className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      Détails
                    </button>
                    <div className="flex space-x-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Github size={18} className="text-white" />
                      </a>
                      {project.liveLink !== "#" && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                        >
                          <ExternalLink size={18} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-green-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <Star size={12} className="mr-1" />
                    Vedette
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-400">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Model pour les détails du projet */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeProjectDetails}>
            <div 
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={closeProjectDetails}
                  className="absolute top-4 right-4 bg-gray-900/50 hover:bg-gray-900 p-2 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                {selectedProject.featured && (
                  <div className="absolute top-4 left-4 bg-green-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star size={16} className="mr-1" />
                    Projet vedette
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">{selectedProject.title}</h2>
                
                <p className="text-gray-300 mb-8">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Détails du projet</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-gray-700 p-2 rounded-full">
                          <Tag size={18} className="text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400">Technologies</h4>
                          <p className="text-white">{selectedProject.technologies.join(', ')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-gray-700 p-2 rounded-full">
                          <Briefcase size={18} className="text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400">Mon rôle</h4>
                          <p className="text-white">{selectedProject.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-gray-700 p-2 rounded-full">
                          <Award size={18} className="text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400">Défis</h4>
                          <p className="text-white">{selectedProject.challenges}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Fonctionnalités clés</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>Interface utilisateur responsive et intuitive</li>
                      <li>Performance optimisée pour une expérience fluide</li>
                      <li>Architecture robuste et évolutive</li>
                      <li>Tests automatisés pour garantir la qualité</li>
                      <li>Documentation détaillée pour faciliter la maintenance</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Github size={18} />
                    Voir le code
                  </a>
                  {selectedProject.liveLink !== "#" && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-gray-900 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Voir en ligne
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;