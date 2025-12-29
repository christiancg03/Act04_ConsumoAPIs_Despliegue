import { useState } from 'react';

function FormularioCamisetas(){
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (nombre.length < 8) {
            setError("Debes de indicar el nombre del equipo al que va a pertenecer esta camiseta");
            return;
        }
        if (descripcion.length < 20) {
            setError("Información insuficiente, mínimo 20 caracteres");
            return;
        }
        if (!precio || isNaN(precio) || precio <= 0) {
            setError("El precio debe ser un número válido mayor que 0");
            return;
        }
        if (!categoria) {
            setError("Debes de especificar a que liga pertenece la camiseta");
            return;
        }
        if (!imagen.startsWith("http")) {
            setError("La URL de la imagen debe de empezar por http");
            return;
        }
        setError("");

        const formData = {
            nombre,
            descripcion,
            precio,
            categoria,
            imagen,
        }

        console.log("Datos de la camiseta enviados: ", formData);

    };

    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">

                <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                    Formulario de Camisetas
                </div>

                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre:
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        aria-invalid={!!error}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        />
                </div>

                <div>
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                        Descripción:
                    </label>
                    <input 
                        id="descripcion"
                        type="text"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        />
                </div>

                <div>
                    <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-1">
                        Precio:
                    </label>
                    <input
                        id="precio" 
                        type="text"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" 
                        />
                </div>

                <div>
                    <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
                        Categoria:
                    </label>
                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" 
                        >
                        <option value="esp">Liga Española</option>
                        <option value="ing">Liga Inglesa</option>
                        <option value="ita">Liga Italiana</option>
                        <option value="ale">Liga Alemana</option>
                        <option value="fra">Liga Francesa</option>
                        <option value="res">Resto del Mundo</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="imagen" className="block text-sm font-medium text-gray-700 mb-1">
                        Imagen:
                    </label>
                    <input
                        id="imagen" 
                        type="url"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        />
                </div>

                {error && (
                    <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mb-4">
                        {error}
                    </p>
                )}

                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                    >
                        Enviar
                    </button>
                </div>

            </form>
        </div>
    );

}

export default FormularioCamisetas;