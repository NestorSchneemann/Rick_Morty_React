import { Link } from "react-router-dom";
import "./footer.css"

function Footer(){
    return(
        <ul className="footer">
            <li>
                <Link className="footlink" to='/'>Volver al Inicio</Link>
            </li>
            <li>
                <Link className="footlink" to='/quienes_somos'>About us</Link>
            </li>
            <li>
                <Link className="footlink" to='/formulario'>Contáctanos</Link>
            </li>
            <li>
                <a href="/">Términos y Condiciones</a>
            </li>
        </ul>
    )
}

export default Footer;