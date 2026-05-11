import { useState, useMemo, useRef } from "react";
import Camiseta from "../components/Camiseta";
import SearchBar from "../components/SearchBar";
import { useProductos } from "../hooks/useProductos";
import { useDeleteProducto } from "../hooks/useDeleteProducto";
import useVoiceRecognition from "../hooks/useVoiceRecognition";
import { Mic } from "lucide-react"; 

function PaginaCatalogo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const { productos, loading, error, setProductos } = useProductos();
  const { removeProducto } = useDeleteProducto();

  // 1. Inicializamos el hook de voz
  const voice = useVoiceRecognition((text) => setSearchTerm(text));

  // 2. Lógica para el Swipe Móvil
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;

    // Si el deslizamiento es mayor a 70px hacia la derecha
    if (diff > 70) {
      voice.startListening();
    }
    touchStartX.current = null;
  };

  const categorias = useMemo(() => {
    const cats = productos.map(p => p.categoria).filter(Boolean);
    return [...new Set(cats)];
  }, [productos]);

  const camisetasFiltradas = useMemo(() => {
    let filtered = productos;

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter((c) => c.nombre.toLowerCase().includes(search));
    }

    if (categoriaSeleccionada) {
      filtered = filtered.filter((c) => c.categoria === categoriaSeleccionada);
    }

    if (precioMin) {
      filtered = filtered.filter((c) => c.precio >= parseFloat(precioMin));
    }

    if (precioMax) {
      filtered = filtered.filter((c) => c.precio <= parseFloat(precioMax));
    }

    return filtered;
  }, [searchTerm, categoriaSeleccionada, precioMin, precioMax, productos]);

  const handleDelete = async (id) => {
    const ok = confirm("¿Seguro que quieres borrar esta camiseta?");
    if (!ok) return;
    const success = await removeProducto(id);
    if (success) {
      setProductos((prev) => prev.filter((p) => p.id !== id));
      alert("Camiseta eliminada con éxito");
    }
  };

  // Detectamos si es móvil para mostrar el mensaje del swipe
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-8">
      <section className="w-full max-w-7xl text-center">
        <h1 className="font-heading-h1 mb-4">Camisetas de Fútbol</h1>
        <p className="body-text mb-8">Nuestro Catálogo de camisetas de fútbol:</p>

        {/* CONTENEDOR NUI (Voz + Swipe) */}
        <div className="relative w-full max-w-lg mx-auto mb-10">
          <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="search-container-nui"
          >
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Buscar camisetas..."
              className={voice.isSupported ? "pr-12" : ""}
            />
            
            {/* Icono de Micrófono (Feedback Visual) */}
            {voice.isSupported && (
              <button
                onClick={voice.startListening}
                className={`btn-mic-nui ${voice.isListening ? 'active animate-pulse' : 'inactive'}`}
              >
                <Mic size={20} />
              </button>
            )}
          </div>

          {/* Mensaje de ayuda NUI*/}
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-2">
            {voice.isListening 
              ? "Escuchando ahora..." 
              : isMobile ? "→ Desliza a la derecha para buscar por voz" : "Haz clic en el micro para hablar"}
          </p>
        </div>

        {/* Filtros adicionales */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <select
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            className="px-4 py-2 border rounded"
          >
            <option value="">Todas las categorías</option>
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Precio mínimo"
            value={precioMin}
            onChange={(e) => setPrecioMin(e.target.value)}
            className="px-4 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Precio máximo"
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value)}
            className="px-4 py-2 border rounded"
          />
        </div>

        {loading && <p className="body-text mt-6">Cargando camisetas...</p>}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
          {!loading && camisetasFiltradas.length > 0 ? (
            camisetasFiltradas.map((camiseta) => (
              <Camiseta key={camiseta.id} {...camiseta} onDelete={handleDelete} />
            ))
          ) : (
            !loading && <p className="body-text">No se encontraron resultados.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default PaginaCatalogo;