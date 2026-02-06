import { useState } from 'react';
import { useCreateProducto } from '../hooks/createProducto';
import { useNavigate } from 'react-router-dom';

function FormularioCamisetas(){
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { addProducto, loading, error: apiError } = useCreateProducto();

    async function handleSubmit(e) {
        e.preventDefault();

        if (nombre.length < 10) {
            setError("Debes de indicar camiseta + nombre del equipo correspondiente.");
            return;
        }
        if (descripcion.length < 20) {
            setError("Información insuficiente, mínimo 20 caracteres.");
            return;
        }
        if (!precio || isNaN(precio) || precio <= 0) {
            setError("Precio inválido, debe ser un número válido mayor que 0.");
            return;
        }
        if (!categoria) {
            setError("Categoría no seleccionada. Debes de especificar a que liga pertenece la camiseta.");
            return;
        }
        if (!imagen.startsWith("http")) {
            setError("La imagen debe ser una URL y empezar por http.");
            return;
        }
        setError("");

        const productoAPI = {
            name: nombre,
            description: descripcion,
            price: Number(precio),
            category: categoria,
            photo: imagen,
        }
        
        const ok = await addProducto(productoAPI);

        if (ok) {
            alert("Camiseta añadida correctamente.");
            navigate("/paginacatalogo")
            setNombre("");
            setDescripcion("");
            setPrecio("");
            setCategoria("");
            setImagen("");
        }

    };

    return(
        <div className="flex justify-center items-center min-h-screen p-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">

                <div className="font-heading-h5 text-center mb-6 border-b border-primary pb-2">
                    Formulario de Camisetas
                </div>

                <div className="mb-6">
                    <label htmlFor="nombre" className="block body-text-bold mb-1">
                        Nombre:
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        aria-invalid={!!error}
                        className="input-base"
                        />
                </div>

                <div className="mb-6">
                    <label htmlFor="descripcion" className="block body-text-bold mb-1">
                        Descripción:
                    </label>
                    <input 
                        id="descripcion"
                        type="text"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="input-base"
                        />
                </div>

                <div className="mb-6">
                    <label htmlFor="precio" className="block body-text-bold mb-1">
                        Precio:
                    </label>
                    <input
                        id="precio" 
                        type="number"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        className="input-base"
                        />
                </div>

                <div className="mb-6">
                    <label htmlFor="categoria" className="block body-text-bold mb-1">
                        Categoria:
                    </label>
                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="input-base" 
                        >
                        <option value="">Seleccionar Liga</option>
                        <option value="Liga Española">Liga Española</option>
                        <option value="Liga Inglesa">Liga Inglesa</option>
                        <option value="Liga Italiana">Liga Italiana</option>
                        <option value="Liga Alemana">Liga Alemana</option>
                        <option value="Liga Francesa">Liga Francesa</option>
                        <option value="Resto del Mundo">Resto del Mundo</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="imagen" className="block body-text-bold mb-1">
                        Imagen:
                    </label>
                    <input
                        id="imagen" 
                        type="url"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        className="input-base"
                        />
                </div>

                {apiError && (
                    <p className="body-text-error text-red-700 bg-red-100 px-3 py-2 rounded-lg mb-4">
                        {apiError}
                    </p>
                )}
                {error && (
                    <p className="body-text-error text-red-700 bg-red-100 px-3 py-2 rounded-lg mb-4">
                        {error}
                    </p>
                )}

                <div>
                    <button
                        type="submit"
                        className="btn-primary-formulario"
                        disabled={loading}
                    >
                        {loading ? "Guardando..." : "Enviar"}
                    </button>
                </div>

            </form>
        </div>
    );

}

export default FormularioCamisetas;