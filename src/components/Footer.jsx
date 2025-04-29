function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} ManuTech. Tous droits réservés.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/tonprofil" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition duration-300"
          >
            Facebook
          </a>

          <a
            href="https://www.linkedin.com/in/tonprofil"
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
