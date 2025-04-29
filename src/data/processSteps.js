import { Globe, Book, Zap, Send, Terminal} from 'lucide-react';


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

export default processSteps