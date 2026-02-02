import { useEffect, useState } from "react";
import { getProductoById } from "../services/productosService";

export const useCamiseta = (id) => {
    const [camiseta, setCamiseta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!id) return;

        const fetchCamiseta = async () => {
            try {
                setLoading(true);
                const data = await getProductoById(id);
                setCamiseta(data);
            } catch (e) {
                setError(e.message || "No se ha podido cargar la camiseta");
            }finally{
                setLoading(false);
            }
        };

        fetchCamiseta();

    }, [id]);

    return { camiseta, loading, error };

};