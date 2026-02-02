import { useState } from "react";
import { createProducto } from "../services/productosService";

export function useCreateProducto() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addProducto = async (producto) => {
    try {
      setLoading(true);
      setError(null);
      await createProducto(producto);
      return true;
    } catch (err) {
      setError(err.message || "Error al crear el producto de la camiseta");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { addProducto, loading, error };
}