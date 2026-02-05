import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { userLogged, login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/admin");
    };

    if (userLogged) {
        return (
            <div className="login-container">
                <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md text-center border-t-4 border-primary">
                    <h2 className="font-heading-h2 mb-4 text-primary">¡Bienvenido!</h2>
                    <p className="body-text mb-6">Ya tienes una sesión activa en el panel de administración.</p>
                    <button 
                        onClick={() => navigate("/admin")}
                        className="btn-primary"
                    >
                        Ir al Panel Admin
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="login-container">
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md text-center">
                <div className="font-heading-h2 mb-6 border-b border-primary pb-4">
                    Área Login
                </div>
                
                <p className="body-text mb-8">
                    Para gestionar el catálogo de camisetas, por favor inicia sesión.
                </p>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleLogin}
                        className="btn-primary-formulario"
                    >
                        Iniciar Sesión
                    </button>
                    
                    <p className="body-text-peq">
                        * Solo pueden estar personas autorizadas.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;