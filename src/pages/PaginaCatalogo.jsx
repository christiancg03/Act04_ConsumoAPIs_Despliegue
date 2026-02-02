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

import { useState, useMemo } from "react";
import Camiseta from "../components/Camiseta";
import SearchBar from "../components/SearchBar";
import { useProductos } from "../hooks/useProductos";
import { useDeleteProducto } from "../hooks/useDeleteProducto";

function PaginaCatalogo() {
  const [searchTerm, setSearchTerm] = useState("");

  const { productos, loading, error, setProductos } = useProductos();
  const { removeProducto, loading: deleting, error: deleteError } = useDeleteProducto();

  const camisetasFiltradas = useMemo(() => {
    if (!searchTerm) return productos;

    const search = searchTerm.toLowerCase();

    return productos.filter((c) =>
      c.nombre.toLowerCase().includes(search)
    );
  }, [searchTerm, productos]);

    const handleDelete = async (id) => {
      const ok = confirm("¿Seguro que quieres borrar esta camiseta?");
      if (!ok) return;

        const success = await removeProducto(id);

      if (success) {
        setProductos((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert("Error al borrar la camiseta");
      }
    };

  return (
    <div className="min-h-screen bg-linear-to-br bg-green-300 flex flex-col items-center justify-center p-8">
      <section className="w-full max-w7xl text-center">

        <h1 className="font-heading-h1 mb-4">
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

        {loading && <p className="body-text mt-6">Cargando camisetas...</p>}

        {error && (
          <p className="body-text-error text-red-700 mt-6">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
          {!loading && camisetasFiltradas.length > 0 ? (
            camisetasFiltradas.map((camiseta) => (
              <Camiseta
                key={camiseta.id}
                id={camiseta.id}
                nombre={camiseta.nombre}
                descripcion={camiseta.descripcion}
                precio={camiseta.precio}
                categoria={camiseta.categoria}
                foto={camiseta.foto}
                onDelete={handleDelete}
              />
            ))
          ) : (
            !loading && (
              <p
                className="col-span-full text-center body-text text-sm"
                role="alert"
                aria-live="polite"
              >
                No se encontraron camisetas con el término "{searchTerm}".
              </p>
            )
          )}
        </div>

      </section>
    </div>
  );
}

export default PaginaCatalogo;