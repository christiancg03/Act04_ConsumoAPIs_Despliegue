import { Routes, Route, Navigate } from "react-router-dom";
import Catalogo from "./Catalogo";
import Home from "../pages/Home";
import CamisetaDetalle from "./CamisetaDetalle";
import PaginaCatalogo from "../pages/PaginaCatalogo";
import Admin from "../pages/Admin";
import ErrorPage from "../pages/ErrorPage";

function Router() {
    return (
        <Routes>
            <Route element={<Catalogo />}>
                <Route path="/" element={<Home />} />
                <Route path="/inicio" element={<Navigate to="/" />} />
                <Route path="/camiseta/:id" element={<CamisetaDetalle />} />
                <Route path="/paginacatalogo" element={<PaginaCatalogo></PaginaCatalogo>}></Route>
                <Route path="/admin" element={<Admin />}></Route>
            </Route>

            {/* Ruta 404 */}
            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}

export default Router;