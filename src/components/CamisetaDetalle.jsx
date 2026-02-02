import { useParams, useNavigate } from "react-router-dom";
import { useCamiseta } from "../hooks/useProducto";

function CamisetaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { camiseta, loading, error } = useCamiseta(id);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-600 font-bold">{error}</p>
    );

  if (!camiseta)
    return (
      <h1 className="text-center mt-20 text-2xl text-red-600 font-bold">
        Camiseta no encontrada
      </h1>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">

        <button className="btn-volver mb-6" onClick={() => navigate(-1)}>
          Volver
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">

          <h1 className="font-heading-h2 text-center mb-8">
            {camiseta.nombre}
          </h1>

          <div className="flex justify-center">
            <img
              src={camiseta.foto}
              alt={camiseta.nombre}
              className="w-64 rounded-xl shadow-md"
            />
          </div>

          <div className="mt-8 space-y-4 text-lg text-gray-700">
            <p className="body-text text-center">{camiseta.descripcion}</p>

            <p className="text-center body-text-bold">
              Precio: {camiseta.precio} €
            </p>

            <p className="text-center body-text-bold">
              Categoría: {camiseta.categoria}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CamisetaDetalle;