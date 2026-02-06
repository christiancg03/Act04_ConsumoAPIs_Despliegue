import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

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