import espana from "../assets/espana.png";
import alemania from "../assets/alemania.png";
import inglaterra from "../assets/inglaterra.png";
import italia from "../assets/italia.png";
import francia from "../assets/francia.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-green-100 to-white py-16">

      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="font-heading-h1 mb-4">
          Bienvenido a la Tienda de Camisetas de Futbol Maniac
        </h1>

        <p className="body-text">
          Descubre camisetas auténticas de las mejores ligas del mundo.
        </p>

        <Link
          to="/PaginaCatalogo"
          className="inline-block mt-8 btn-primary shadow-md"
        >
          Ver Catálogo
        </Link>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">

        <div className="flex flex-col items-center">
          <img src={espana} alt="Logo de la Liga Española" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 label-ligas">Liga Española</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={francia} alt="Logo de la Liga Francesa" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 label-ligas">Liga Francesa</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={inglaterra} alt="Logo de la Liga Inglesa" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 label-ligas">Liga Inglesa</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={italia} alt="Logo de la Liga Italiana" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 label-ligas">Liga Italiana</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={alemania} alt="Logo de la Liga Alemana" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 label-ligas">Liga Alemana</p>
        </div>

      </div>

    </div>
  );
}

export default Home;