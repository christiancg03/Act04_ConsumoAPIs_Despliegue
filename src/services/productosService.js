import axios from "axios";

const API_URL = "http://localhost:5000/productos";

const mapProductoFromAPI = (p) => ({
  id: p._id,
  nombre: p.name,
  descripcion: p.description,
  precio: p.price,
  categoria: p.category,
  foto: p.photo,
});

// =========================
// Get All
// =========================
export const getProductos = async () => {
  try {
    const res = await axios.get(API_URL);

    const productos = res.data.data ?? res.data;

    return productos.map(mapProductoFromAPI);
  } catch (error) {
    console.error("Error al cargar productos:", error);
    throw new Error(
      error.response?.data?.message || "Error al cargar productos"
    );
  }
};

// =========================
// Get By ID
// =========================
export const getProductoById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);

    const producto = res.data.data ?? res.data;

    return mapProductoFromAPI(producto);
  } catch (error) {
    console.error(`Error al cargar producto ${id}:`, error);
    throw new Error(
      error.response?.data?.message || "Error al cargar producto"
    );
  }
};

// =========================
// Create
// =========================
export const createProducto = async (producto) => {
  try {
    const res = await axios.post(API_URL, producto);

    return res.data.data ?? res.data;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw new Error(
      error.response?.data?.message || "Error al crear producto"
    );
  }
};

// =========================
// Delete
// =========================
export const deleteProducto = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);

    if (res.status === 204) {
      return true;
    }

    return res.data.data || res.data;

  } catch (error) {
    console.error("Error al borrar producto:", error);

    throw new Error(
      error.response?.data?.message || "Error al borrar producto"
    );
  }
};