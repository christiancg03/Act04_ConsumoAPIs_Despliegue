function Footer() {
  return (
    <footer className="w-full primary-bg text-white py-4">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="body-text-footer text-white">© {new Date().getFullYear()} Futbol Maniac. Todos los derechos reservados.</p>
        <p className="body-text-footer text-white">Síguenos en redes: 
          <span className="ml-2 underline cursor-pointer">Facebook</span>, 
          <span className="ml-2 underline cursor-pointer">Instagram</span>, 
          <span className="ml-2 underline cursor-pointer">Twitter</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;