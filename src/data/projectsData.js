// src/data/projectsData.js
import image1 from '../assets/projects-photo/image1.png'
import image2 from '../assets/projects-photo/image2.jpg'
import image3 from '../assets/projects-photo/image3.jpg'
import image4 from '../assets/projects-photo/image4.jpg'
import image5 from '../assets/projects-photo/image5.jpg'
import image6 from '../assets/projects-photo/image6.svg'


const sites = [
  {
    title: "E-commerce Platform",
    description: "Plateforme de commerce électronique complète avec panier, paiement et gestion des commandes.",
    image: image1,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    role: "Développeur Full Stack",
    challenges: "Optimisation des performances et sécurisation des paiements",
    githubLink: "https://github.com/emmanuel/ecommerce",
    liveLink: "https://ecommerce-project.com",
    featured: true
  },
  {
    title: "Portfolio Photography",
    description: "Site portfolio responsive pour photographe professionnel avec galerie dynamique.",
    image: image2,
    technologies: ["Vue.js", "Tailwind CSS", "Firebase"],
    role: "Développeur Frontend",
    challenges: "Animation fluide et optimisation des images",
    githubLink: "https://github.com/emmanuel/photo-portfolio",
    liveLink: "https://photo-portfolio.com",
    featured: false
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches avec fonctionnalités de collaboration en temps réel.",
    image: image3,
    technologies: ["React", "Redux", "Express", "Socket.io"],
    role: "Lead Developer",
    challenges: "Synchronisation en temps réel entre utilisateurs",
    githubLink: "https://github.com/emmanuel/task-app",
    liveLink: "https://task-management-app.com",
    featured: true
  },
  {
    title: "Blog CMS",
    description: "Système de gestion de contenu personnalisé pour blog avec éditeur WYSIWYG.",
    image: image4,
    technologies: ["Next.js", "GraphQL", "Prisma"],
    role: "Développeur Backend",
    challenges: "Création d'un système d'authentification robuste",
    githubLink: "https://github.com/emmanuel/blog-cms",
    liveLink: "#",
    featured: false
  },
  {
    title: "Fitness Tracker",
    description: "Application mobile de suivi de fitness avec visualisation des progrès.",
    image: image5,
    technologies: ["React Native", "TypeScript", "Firebase"],
    role: "Développeur Mobile",
    challenges: "Intégration de capteurs et graphiques de progression",
    githubLink: "https://github.com/emmanuel/fitness-tracker",
    liveLink: "https://fitness-tracker-app.com",
    featured: false
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord d'analyse de données pour entreprise avec visualisations interactives.",
    image: image6,
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    role: "Développeur Full Stack",
    challenges: "Traitement de grandes quantités de données en temps réel",
    githubLink: "https://github.com/emmanuel/analytics-dashboard",
    liveLink: "https://analytics-dashboard.com",
    featured: true
  }
];

export default sites;  