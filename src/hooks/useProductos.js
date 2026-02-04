import { useEffect, useState } from "react";
import { getProductos } from "../services/productosService";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (err) {
        setError(err.message || "Error cargando los productos");
      } finally {
        setLoading(false);
      }
    }

    fetchProductos();
  }, []);

  return { productos, loading, error, setProductos };
}