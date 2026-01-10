import { useState, useMemo } from "react";
import Camiseta from "../components/Camiseta";
import camisetas from "../data/camisetas";
import SearchBar from "../components/SearchBar";

/**
 * PaginaCatalogo Component
 * 
 * Displays a catalog of football shirts with search functionality.
 * 
 * @component
 * @returns {JSX.Element} A page displaying a filterable grid of football shirts
 * 
 * @description
 * This component renders a catalog page featuring:
 * - A search bar to filter shirts by name (case-insensitive)
 * - A responsive grid layout displaying filtered shirt cards
 * - A message when no results match the search term
 * - Uses memoization to optimize filtering performance
 * 
 * @example
 * return <PaginaCatalogo />
 * 
 * @requires useState - React hook for managing search state
 * @requires useMemo - React hook for memoizing filtered results
 * @requires SearchBar - Component for user input
 * @requires Camiseta - Component for individual shirt display
 */
function PaginaCatalogo() {

  const [searchTerm, setSearchTerm] = useState("");

  const camisetasFiltradas = useMemo(() => {
    if (!searchTerm) return camisetas;

    const search = searchTerm.toLowerCase();

    return camisetas.filter((c) =>
      c.nombre.toLowerCase().includes(search)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-linear-to-br bg-green-300 flex flex-col items-center justify-center p-8">
      <section className="w-full max-w7xl text-center">
        <div>
          <h1 className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]">
            Camisetas de Fútbol
          </h1>

          <p className="body-text">
            Nuestro Catálogo de camisetas de fútbol:
          </p>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Buscar camisetas por nombre..."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {camisetasFiltradas.length > 0 ? (
              camisetasFiltradas.map((camiseta) => (
                <Camiseta
                  key={camiseta.id}
                  id={camiseta.id}
                  nombre={camiseta.nombre}
                  descripcion={camiseta.descripcion}
                  precio={camiseta.precio}
                  categoria={camiseta.categoria}
                  foto={camiseta.imagen}
                />
              ))
            ) : (
              <p
                className="col-span-full text-center text-gray-600 p-4"
                role="alert"
                aria-live="polite"
              >
                No se encontraron camisetas con el término "{searchTerm}".
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaginaCatalogo;