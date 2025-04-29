function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-9">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} ManuTech. Tous droits réservés.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/@manu.tech.2024" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition duration-300"
          >
            Facebook
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuel-mahoukp%C3%A9go-agbotoedo-50a6bb351"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

{/** {/* Footer with gradient 
<div className="relative mt-16 border-t border-gray-800">
<div className="absolute inset-0 bg-gradient-to-t from-green-400/10 to-transparent opacity-30"></div>
<div className="relative max-w-5xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center">
  <div className="flex items-center mb-4 md:mb-0">
    <Code size={24} className={theme.neonGreen} />
    <span className="ml-2 text-white font-semibold">ManuTech</span>
  </div>
  <div className="flex space-x-4">
    <a href="#" className={`${theme.neonGreen} hover:text-green-300 transition-colors`}>
      <Github size={20} />
    </a>
    <a href="#" className={`${theme.neonGreen} hover:text-green-300 transition-colors`}>
      <Globe size={20} />
    </a>
  </div>
</div>
</div> */}