import { useState } from "react";
import { login } from "../services/auth"
import "./modal.css";


function LoginModal({ onLogin, onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login(email, password);

            onLogin({
                email,
                token: data.access_token,
            });

            onClose();
        }   catch (error) {
            alert("Credenciales incorrectas")
        }
    };

    return (
        <div className="overlay">
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <h3>Iniciar Sesión</h3>

                    <input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button className="sesionModal" type="submit">
                            Iniciar Sesión
                    </button>

                    <button className="sesionModal" type="button"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;