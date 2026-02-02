import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

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
  const { id, foto, nombre, descripcion, precio, categoria, onDelete } = props;
  const { userLogged } = useContext(UserContext);

  return (
    <Link to={`/camiseta/${id}`} className="w-full">
      <article
        tabIndex="0"
        aria-label={`Camiseta ${nombre}`}
        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition text-center"
      >
        <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
          <img
            src={foto}
            alt={`Foto de ${nombre}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Nombre */}
        <header>
          <h2 className="font-heading-h5">{nombre}</h2>
        </header>

        {/* Descripción */}
        <p className="body-text text-sm">{descripcion}</p>

        {/* Precio */}
        <p className="body-text-bold text-sm">Precio: {precio}€</p>

        {/* Categoría */}
        <p className="body-text text-sm">{categoria}</p>

        {userLogged && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onDelete(id);
          }}
          className="mt-2 px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Eliminar
        </button>
        )}

      </article>

    </Link>
  );
}

export default Camiseta;