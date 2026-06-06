import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){
    return(
        <nav ClassName='navbar'>
            <Link className='navlink' to='/'>Home</Link>
            <Link className='navlink' to='/quienes_somos'>Quienes somos</Link>
            <Link className='navlink' to='/formulario'>Formulario</Link>
            <Link className='navlink' to='/personaje'>Personajes</Link>
            
        </nav>
    )
}

export default Navbar;