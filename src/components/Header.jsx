import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      
      {/* Zona superior: logo + hamburguesa */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-heading-h3 text-(--colorprimary)">
          FUTBOL MANIAC
        </h1>

        {/* Botón hamburguesa (solo móvil) */}
        <button 
          className="sm:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Menú normal en escritorio */}
        <nav className="hidden sm:flex gap-6">
          <NavLink 
            to="/"
            className="text-gray-700 hover:text-(--colorprimary) font-medium"
          >
            Inicio
          </NavLink>

          <NavLink 
            to="/paginacatalogo"
            className="text-gray-700 hover:text-(--colorprimary) font-medium"
          >
            Catálogo
          </NavLink>

        </nav>
      </div>

      {/* Menú móvil controlado por el estado */}
      <nav className={`sm:hidden px-6 pb-4 flex flex-col gap-4 transition-all ${
        open ? "block" : "hidden"
      }`}>
        <NavLink 
          to="/"
          onClick={() => setOpen(false)}
          className="text-gray-700 hover:text-(--colorprimary) font-medium"
        >
          Inicio
        </NavLink>

        <NavLink 
          to="/interpretes"
          onClick={() => setOpen(false)}
          className="text-gray-700 hover:text-(--colorprimary) font-medium"
        >
          Catálogo
        </NavLink>

      </nav>

    </header>
  );
}

export default Header;