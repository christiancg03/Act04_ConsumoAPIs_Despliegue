import { useState } from "react";
import { deleteProducto } from "../services/productosService";

export const useDeleteProducto = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const removeProducto = async (id) => {
        try {
            setLoading(true);
            setError(null);

            await deleteProducto(id);
            return true;
        } catch (err) {
            setError(err.message || "Error al borrar el producto");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { removeProducto, loading, error };
};