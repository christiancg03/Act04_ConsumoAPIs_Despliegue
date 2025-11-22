import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CamisetaDetalle from "./pages/CamisetaDetalle";
import ErrorPage from "./pages/ErrorPage";
import PaginaCatalogo from "./pages/PaginaCatalogo";

function App() {
  return (
    <>
      <Header />

      <Routes>

        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Página de Inicio */}
        <Route path="/inicio" element={<Navigate to="/" />} />

        {/* Página de detalles de la camiseta */}
        <Route path="/camiseta/:id" element={<CamisetaDetalle />} />

        {/* Página de catálogo completo de las camisetas */}
        <Route path="/paginacatalogo" element={<PaginaCatalogo></PaginaCatalogo>}></Route>

        {/* Página de error */}
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;