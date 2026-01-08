import { Link } from "react-router-dom";

/**
 * Componente que representa una tarjeta de producto de camiseta.
 * 
 * Muestra la información de una camiseta incluyendo imagen, nombre, descripción,
 * precio y categoría. La tarjeta es clickeable y redirige al detalle del producto.
 * 
 * @component
 * @param {Object} props - Las propiedades del componente
 * @param {number} props.id - Identificador único de la camiseta
 * @param {string} props.foto - URL de la imagen del producto
 * @param {string} props.nombre - Nombre de la camiseta
 * @param {string} props.descripcion - Descripción breve del producto
 * @param {number} props.precio - Precio del producto en euros
 * @param {string} props.categoria - Categoría a la que pertenece la camiseta
 * 
 * @returns {JSX.Element} Elemento de artículo con información de la camiseta
 * 
 * @example
 * <Camiseta
 *   id={1}
 *   foto="https://example.com/camiseta.jpg"
 *   nombre="Camiseta Azul"
 *   descripcion="Camiseta de algodón de alta calidad"
 *   precio={19.99}
 *   categoria="Casual"
 * />
 */
function Camiseta(props) {
  const { id, foto, nombre, descripcion, precio, categoria } = props;

  return (
    <article
      tabIndex="0"
      aria-label={`Camiseta ${nombre}`}
      className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition text-center"
    >
      <Link to={`/camiseta/${id}`} className="w-full">
        <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
          <img
            src={foto}
            alt={`Foto de ${nombre}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
      </Link>

      {/* Nombre */}
      <header>
        <h2 className="text-lg font-bold text-gray-900">{nombre}</h2>
      </header>

      {/* Descripción */}
      <p className="text-gray-600 text-sm">{descripcion}</p>

      {/* Precio */}
      <p className="text-gray-800 font-semibold">Precio: {precio}€</p>

      {/* Categoría */}
      <p className="text-gray-500 text-sm">{categoria}</p>
    </article>
  );
}

export default Camiseta;