// src/components/Projects.jsx
import React from 'react';
import sites from '../data/projectsData';

const Projects = () => {
  const neonGreen = "text-green-400";
  const neonGreenBorder = "border-green-400";
  const darkBg = "bg-black";
  const darkBgAlt = "bg-gray-900";
  const darkText = "text-gray-200";

  return (
    <section id="projects" className={`py-16 ${darkBg} ${darkText}`}>
      <div className="container mx-auto px-4">
        <h1 className={`text-3xl font-bold mb-10 text-center ${neonGreen}`}>Mes Projets</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site, index) => (
            <div key={index} className={`${darkBgAlt} shadow-md rounded-lg overflow-hidden border ${neonGreenBorder}`}>
              <img src={site.image} alt={site.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{site.title}</h3>
                <p className="text-gray-300 mb-4">{site.description}</p>
                <p className="text-sm text-gray-400 mb-2">
                  <strong className={neonGreen}>Technologies:</strong> {site.technologies.join(', ')}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <strong className={neonGreen}>Rôle:</strong> {site.role}
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  <strong className={neonGreen}>Défis:</strong> {site.challenges}
                </p>
                <div className="flex space-x-4">
                  <a href={site.githubLink} target="_blank" rel="noopener noreferrer" className={`${neonGreen} hover:underline`}>
                    Code
                  </a>
                  {site.liveLink !== "#" && (
                    <a href={site.liveLink} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
                      Voir en ligne
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
