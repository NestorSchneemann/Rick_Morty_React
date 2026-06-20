import { Link } from "react-router-dom";
import "./Navbar.css"
import LoginModal from "./loginModal";
import { useEffect, useState } from "react";


function Navbar() {

    const [showLogin, setShowLogin] = useState(false);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogin = (userData) => {
        setUser(userData)

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("access_token", userData.token);
    };

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return(
        <>
            <nav ClassName='navbar'>
                <Link className='navlink' to='/'>Home</Link>
                <Link className='navlink' to='/quienes_somos'>Quienes somos</Link>
                <Link className='navlink' to='/formulario'>Formulario</Link>
                <Link className='navlink' to='/registros'>Registros</Link>
                <Link className='navlink' to='/personaje'>Personajes</Link>
                { user ? (
                    <>
                        <span className="saludo">
                            Hola {user.email}
                        </span>

                        <button className="sesion" onClick={handleLogout}>
                            Cerrar Sesión
                        </button>
                    </>
                    ) : (
                        <button className="sesion"
                            onClick={() =>
                                setShowLogin(true)
                            }>
                                Iniciar Sesión
                        </button>
                    )
                }
            </nav>
            
            {showLogin && (
                <LoginModal
                    onLogin={handleLogin}
                    onClose={() =>
                        setShowLogin(false)
                    }
                />
            )}
        </>
    );
}

export default Navbar;