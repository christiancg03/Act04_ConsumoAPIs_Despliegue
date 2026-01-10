import FormularioCamisetas from "../components/FormularioCamisetas";

function Admin() {
    return (
        <div
            className="min-h-screen bg-gray-50 flex flex-col items-center p-8"
            aria-labelledby="titulo-admin"
        >
            {/* Título y descripción general de Admin */}
            <header className="mb-8 text-center">
                <h1
                    id="titulo-admin"
                    className="text-4xl font-bold text-gray-800 mb-2"
                >
                    Panel de Administración
                </h1>

                <p className="text-gray-600">
                    Desde aquí puedes añadir nuevas camisetas al catálogo de la tienda.
                </p>
            </header>

            {/* Sección del formulario */}
            <section
                className="w-full max-w-xl"
                aria-labelledby="titulo-formulario"
            >
                <FormularioCamisetas />
            </section>
        </div>
    );
}

export default Admin;