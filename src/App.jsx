import Catalogo from "./Catalogo";
import Camiseta from "./Camiseta";
// import camisetas from "./data/camisetas";
import camisetas from "./data/camisetas";

function App() {
  return (

    <Catalogo>
      <h1 className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]">
        Camisetas de Fútbol
      </h1>
      <p className="body-text">
        Nuestro Catálogo de camisetas de fútbol:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">

        {camisetas.map((camiseta, index) => (
          <Camiseta
            key={camiseta.id ?? index}
            nombre={camiseta.nombre}
            descripcion={camiseta.descripcion}
            precio={camiseta.precio}
            categoria={camiseta.categoria}
            foto={camiseta.imagen}
          />
        ))}

      </div>
    </Catalogo>
  )
}

export default App
