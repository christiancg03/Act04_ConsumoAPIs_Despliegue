import espana from "../assets/espana.png";
import alemania from "../assets/alemania.png";
import inglaterra from "../assets/inglaterra.png";
import italia from "../assets/italia.png";
import francia from "../assets/francia.png";

function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-green-100 to-white py-16">

      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Bienvenido a la Tienda de Camisetas de Futbol Maniac
        </h1>

        <p className="text-lg text-gray-700">
          Descubre camisetas auténticas de las mejores ligas del mundo.
        </p>

        <a
          href="/PaginaCatalogo"
          className="inline-block mt-8 px-8 py-3 bg-green-600 text-white text-lg rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Ver Catálogo
        </a>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">

        <div className="flex flex-col items-center">
          <img src={espana} alt="España" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 text-gray-700 font-bold">Liga Española</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={francia} alt="Francia" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 text-gray-700 font-bold">Liga Francesa</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={inglaterra} alt="Inglaterra" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 text-gray-700 font-bold">Liga Inglesa</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={italia} alt="Italia" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 text-gray-700 font-bold">Liga Italiana</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={alemania} alt="Alemania" className="w-20 h-20 object-contain drop-shadow-md hover:scale-110 transition" />
          <p className="mt-3 text-gray-700 font-bold">Liga Alemana</p>
        </div>

      </div>

    </div>
  );
}

export default Home;