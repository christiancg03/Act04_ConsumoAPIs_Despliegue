import { Routes, Route, Navigate } from "react-router-dom";
import Catalogo from "./Catalogo";
import Home from "../pages/Home";
import CamisetaDetalle from "../pages/CamisetaDetalle";
import PaginaCatalogo from "../pages/PaginaCatalogo";

function Router(){
    return(
        <Routes>
            <Route element={<Catalogo/>}>
                <Route path="/" element={<Home />} />
                <Route path="/inicio" element={<Navigate to="/" />} />
                <Route path="/camiseta/:id" element={<CamisetaDetalle />} />
                <Route path="/paginacatalogo" element={<PaginaCatalogo></PaginaCatalogo>}></Route>
            </Route>

            <Route path="*" element={<Catalogo titulo="Ahí no hay magia..."></Catalogo>}
            />

        </Routes>
    )
}

export default Router;