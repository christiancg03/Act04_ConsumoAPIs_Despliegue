import FormularioCamisetas from "../components/FormularioCamisetas";
import Informes from "../components/Informes";

function Admin() {
    return (
        <div
            className="min-h-screen bg-gray-50 flex flex-col items-center p-8"
            aria-labelledby="titulo-admin"
        >
            <header className="mb-8 text-center">
                <h1
                    id="titulo-admin"
                    className="font-heading-h1 mb-6 text-center"
                >
                    Panel de Administración
                </h1>

                <p className="body-text text-center">
                    Desde aquí puedes añadir nuevas camisetas al catálogo de la tienda.
                </p>
            </header>

            <section
                className="w-full max-w-4xl mb-8"
                aria-labelledby="titulo-formulario"
            >
                <FormularioCamisetas />
            </section>

            <section className="w-full max-w-6xl">
                <Informes />
            </section>
        </div>
    );
}

export default Admin;