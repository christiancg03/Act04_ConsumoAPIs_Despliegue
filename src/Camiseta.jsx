function Camiseta(props) {
  const { foto, nombre, descripcion, precio, categoria } = props;

  return (
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

      <header>
        <h2 className="text-lg font-bold text-gray-900">{nombre}</h2>
      </header>

      <p className="text-gray-600 text-sm">{descripcion}</p>
      <p className="text-gray-800 font-semibold">Precio: {precio}€</p>
      <p className="text-gray-500 text-sm">{categoria}</p>
    </article>
  );
}

export default Camiseta;