import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="text-6xl font-bold text-(--colorprimary) mb-4">404</h1>
            <h2 className="text-2xl font-heading-h2 mb-4">Página no encontrada</h2>
            <p className="text-gray-700 mb-6 text-center">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <Link 
                to="/" 
                className="px-6 py-3 bg-(--colorprimary) text-white rounded-lg hover:bg-(--colorprimary-hover) transition-colors"
            >
                Volver al inicio
            </Link>
        </main>
    );
}

export default ErrorPage;