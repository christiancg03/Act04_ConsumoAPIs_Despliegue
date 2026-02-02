import { Routes, Route, Navigate } from "react-router-dom";
import Catalogo from "./Catalogo";
import Home from "../pages/Home";
import CamisetaDetalle from "./CamisetaDetalle";
import PaginaCatalogo from "../pages/PaginaCatalogo";
import Admin from "../pages/Admin";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// Componente para rutas protegidas
const PrivateRoute = ({ children }) => {
    const { userLogged } = useContext(UserContext);
    if (!userLogged) return <Navigate to="/login" replace />;
    return children;
};


function Router() {
    return (
        <Routes>
            <Route element={<Catalogo />}>
                <Route path="/" element={<Home />} />
                <Route path="/inicio" element={<Navigate to="/" />} />
                <Route path="/camiseta/:id" element={<CamisetaDetalle />} />
                <Route path="/paginacatalogo" element={<PaginaCatalogo></PaginaCatalogo>}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>}></Route>
            </Route>

            {/* Ruta 404 */}
            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}

export default Router;