import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-[#1A1A1A] px-4">

      {/* Hero Section */}
      <section className="mb-16 py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#39FF14] mb-4">
          Salut, moi c'est Emmanuel
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#E5E5E5] mb-6">
          Développeur Web & Mobile
        </h2>
        <p className="text-[#E5E5E5] max-w-xl mb-8">
          Passionné par la création de sites web modernes, performants et d'applications mobiles intuitives.
        </p>
        <Link
          to="/about"
          className="bg-[#39FF14] hover:bg-[#32CD32] text-[#1A1A1A] font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          En savoir plus sur moi
        </Link>
      </section>

      {/* Projets Section */}
      <section className="mb-16 py-10 bg-[#1A1A1A]">
        <h2 className="text-3xl font-semibold text-[#39FF14] mb-4">Mes Projets</h2>
        <p className="text-[#E5E5E5] max-w-xl mb-8">
          Découvrez certains de mes projets récents, alliant innovation et performance.
        </p>
        <Link
          to="/projects"
          className="bg-[#39FF14] hover:bg-[#32CD32] text-[#1A1A1A] font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Voir mes projets
        </Link>
      </section>

      {/* Contact Section */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold text-[#39FF14] mb-4">Contactez-moi</h2>
        <p className="text-[#E5E5E5] max-w-xl mb-8">
          Si vous avez une question ou si vous souhaitez collaborer, n'hésitez pas à me contacter !
        </p>
        <Link
          to="/contact"
          className="bg-[#39FF14] hover:bg-[#32CD32] text-[#1A1A1A] font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Contactez-moi
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1A1A1A] text-center py-4 mt-10">
        <p className="text-[#E5E5E5] text-sm">
          © {new Date().getFullYear()} Emmanuel. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;
