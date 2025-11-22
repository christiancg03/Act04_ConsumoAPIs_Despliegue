function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-10 text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a la Tienda de Camisetas</h1>
      <p className="text-lg text-gray-700">
        Descubre camisetas de tus equipos favoritos alrededor del mundo.
      </p>

      <a 
        href="/PaginaCatalogo"
        className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Ver Catálogo
      </a>
    </div>
  );
}

export default Home;
