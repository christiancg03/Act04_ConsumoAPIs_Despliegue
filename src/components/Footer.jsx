function Footer() {
  return (
    <footer className="w-full bg-green-600 text-white py-4">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="text-sm">© {new Date().getFullYear()} Tienda de Camisetas. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Síguenos en redes: 
          <span className="ml-2 underline cursor-pointer">Facebook</span>, 
          <span className="ml-2 underline cursor-pointer">Instagram</span>, 
          <span className="ml-2 underline cursor-pointer">Twitter</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;