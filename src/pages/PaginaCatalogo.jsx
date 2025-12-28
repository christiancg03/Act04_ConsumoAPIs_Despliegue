import { useState, useMemo } from "react";
import Camiseta from "../components/Camiseta";
import camisetas from "../data/camisetas";
import SearchBar from "../components/SearchBar";

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
              <p className="col-span-full text-center text-gray-600 p-4">
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