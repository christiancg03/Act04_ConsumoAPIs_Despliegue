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
        if (categoria.length < 7) {
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
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>

            </form>
        </div>
    );

}

export default FormularioCamisetas;