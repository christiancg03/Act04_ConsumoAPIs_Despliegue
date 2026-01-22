import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="font-heading-h1 text-primary mb-4">404</h1>
            <h2 className="font-heading-h2 mb-4">Página no encontrada</h2>
            <p className="body-text mb-6 text-center">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <Link 
                to="/" 
                className="btn-primary"
            >
                Volver al inicio
            </Link>
        </main>
    );
}

export default ErrorPage;