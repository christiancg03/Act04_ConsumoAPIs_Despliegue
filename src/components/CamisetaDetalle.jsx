import { useParams, Link } from "react-router-dom";
import camisetas from "../data/camisetas";
import { useNavigate } from "react-router-dom";

/**
 * CamisetaDetalle Component
 * 
 * Displays detailed information about a specific t-shirt product.
 * Retrieves the t-shirt data based on the ID parameter from the URL.
 * 
 * @component
 * @returns {React.ReactElement} A detailed view of a t-shirt including:
 *   - Navigation back button
 *   - Product image
 *   - Product name, description, price, and category
 *   - Returns error message if t-shirt is not found
 * 
 * @example
 * // Usage within a route
 * <Route path="/camiseta/:id" element={<CamisetaDetalle />} />
 * 
 * @throws {Error} Displays error message if camiseta ID is not found in the data
 * 
 * @requires react-router-dom - useParams, useNavigate hooks
 * @requires camisetas - Array of t-shirt objects with properties: id, nombre, imagen, descripcion, precio, categoria
 */
function CamisetaDetalle({ camisetaProp }) {

  const params = useParams?.();
  const id = params?.id;
  const camiseta = camisetaProp || camisetas.find(c => c.id == id);
  // const camiseta = camisetas.find(c => c.id == id);

  let navegacion;
  try {
    navegacion = useNavigate();
  } catch {
    navegacion = null;
  }

  if (!camiseta) {
    return (
      <h1 className="text-center mt-20 text-2xl text-red-600 font-bold">
        Camiseta no encontrada
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">

      <div className="max-w-3xl mx-auto">

        {/* Botón volver */}
        <button className="inline-block mb-6 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium transition shadow-sm"
          onClick={() => navegacion(-1)}>Volver</button>

        {/* Contenido Principal de la camiseta */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">

          {/* Título */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            {camiseta.nombre}
          </h1>

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src={camiseta.imagen}
              alt={camiseta.nombre}
              className="w-64 rounded-xl shadow-md"
            />
          </div>

          {/* Información de la camiseta */}
          <div className="mt-8 space-y-4 text-lg text-gray-700">

            <p className="leading-relaxed text-center">
              {camiseta.descripcion}
            </p>

            <p className="text-center">
              <span className="font-bold">Precio:</span> {camiseta.precio} €
            </p>

            <p className="text-center">
              <span className="font-bold">Categoría:</span> {camiseta.categoria}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CamisetaDetalle;