import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { useProductos } from "../hooks/useProductos";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

function Informes() {
  const { productos, loading } = useProductos();

  const estadisticas = useMemo(() => {
    if (!productos.length) return null;

    const totalProductos = productos.length;
    const totalValor = productos.reduce((sum, p) => sum + p.precio, 0);
    const precioPromedio = totalValor / totalProductos;

    const productosPorCategoria = productos.reduce((acc, p) => {
      acc[p.categoria] = (acc[p.categoria] || 0) + 1;
      return acc;
    }, {});

    const dataCategoria = Object.entries(productosPorCategoria).map(([categoria, count]) => ({
      categoria,
      count
    }));

    const dataPrecio = productos.map(p => ({
      nombre: p.nombre.length > 10 ? p.nombre.substring(0, 10) + '...' : p.nombre,
      precio: p.precio
    }));

    return {
      totalProductos,
      totalValor: totalValor.toFixed(2),
      precioPromedio: precioPromedio.toFixed(2),
      dataCategoria,
      dataPrecio
    };
  }, [productos]);

  if (loading) return <p>Cargando informes...</p>;
  if (!estadisticas) return <p>No hay datos para mostrar.</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Informes del Catálogo</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Productos</h3>
          <p className="text-2xl">{estadisticas.totalProductos}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Valor Total (€)</h3>
          <p className="text-2xl">{estadisticas.totalValor}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Precio Promedio (€)</h3>
          <p className="text-2xl">{estadisticas.precioPromedio}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Productos por Categoría</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={estadisticas.dataCategoria}
              cx={200}
              cy={150}
              labelLine={false}
              label={({ categoria, percent }) => `${categoria} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
            >
              {estadisticas.dataCategoria.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Precios de Productos</h3>
          <BarChart width={400} height={300} data={estadisticas.dataPrecio}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="precio" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Informes;