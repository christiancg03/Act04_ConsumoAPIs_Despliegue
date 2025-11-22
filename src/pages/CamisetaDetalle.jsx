import { useParams, Link } from "react-router-dom";
import camisetas from "../data/camisetas";

function CamisetaDetalle() {
  const { id } = useParams();

  // Buscar la camiseta por su id
  const camiseta = camisetas.find(c => c.id == id);

  if (!camiseta) {
    return (
      <h1 className="text-center mt-10 text-red-600">
        Camiseta no encontrada
      </h1>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">

      {/* Botón para volver al catálogo */}
      <Link
        to="/"
        className="px-4 py-2 mt-6 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium transition"
      >
        Volver
      </Link>

      {/* Nombre */}
      <h1 className="text-3xl font-bold text-center mb-6">
        {camiseta.nombre}
      </h1>

      {/* Imagen */}
      <img
        src={camiseta.imagen}
        alt={camiseta.nombre}
        className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
      />

      {/* Datos */}
      <p className="mt-6 text-gray-700 text-lg">{camiseta.descripcion}</p>

      <p className="mt-4 text-lg">
        <strong>Precio:</strong> {camiseta.precio} €
      </p>

      <p className="text-lg">
        <strong>Categoría:</strong> {camiseta.categoria}
      </p>
    </div>
  );
}

export default CamisetaDetalle;