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
        <div className="form-pagina">
            <form onSubmit={handleSubmit} className="form-card">

                <div className="form-heading">Formulario de Camisetas</div>
                <p className="form-intro">Rellena los datos con la información más completa posible para que la camiseta destaque en el catálogo.</p>

                <div className="form-group">
                    <label htmlFor="nombre" className="form-label">
                        Nombre completo de la camiseta
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        aria-invalid={!!error}
                        className="input-base form-field"
                        placeholder="Ej: Camiseta FC Barcelona 23/24"
                    />
                    <p className="form-texto-ayuda">Incluye equipo y temporada para facilitar la búsqueda.</p>
                </div>

                <div className="form-group">
                    <label htmlFor="descripcion" className="form-label">
                        Descripción detallada
                    </label>
                    <textarea
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="input-base form-field form-textarea"
                        placeholder="Ej: Camiseta oficial de la temporada 23/24, edición visitante con detalles dorados."
                    />
                    <p className="form-texto-ayuda">Cuenta brevemente características, colores y material.</p>
                </div>

                <div className="form-grid-form">
                    <div className="form-group">
                        <label htmlFor="precio" className="form-label">
                            Precio (€)
                        </label>
                        <input
                            id="precio"
                            type="number"
                            min="0"
                            step="0.01"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            className="input-base form-field"
                            placeholder="Ej: 59.99"
                        />
                        <p className="form-texto-ayuda">Añade un precio competitivo y realista.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="categoria" className="form-label">
                            Categoría / Liga
                        </label>
                        <select
                            id="categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            className="input-base form-field"
                        >
                            <option value="">Seleccionar Liga</option>
                            <option value="Liga Española">Liga Española</option>
                            <option value="Liga Inglesa">Liga Inglesa</option>
                            <option value="Liga Italiana">Liga Italiana</option>
                            <option value="Liga Alemana">Liga Alemana</option>
                            <option value="Liga Francesa">Liga Francesa</option>
                            <option value="Resto del Mundo">Resto del Mundo</option>
                        </select>
                        <p className="form-texto-ayuda">Elige la liga principal a la que pertenece la camiseta.</p>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="imagen" className="form-label">
                        URL de la imagen
                    </label>
                    <input
                        id="imagen"
                        type="url"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        className="input-base form-field"
                        placeholder="Ej: https://.../camiseta.png"
                    />
                    <p className="form-texto-ayuda">Introduce una URL válida para que la camiseta se muestre correctamente.</p>
                </div>

                {apiError && (
                    <p className="form-status-message error">
                        {apiError}
                    </p>
                )}
                {error && (
                    <p className="form-status-message error">
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