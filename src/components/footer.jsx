import { Link } from "react-router-dom";
import "./footer.css"

function Footer(){
    return(
        <ul className="footer">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/quienes_somos'>Quienes somos</Link>
            </li>
            <li>
                <Link to='/formulario'>Contáctanos</Link>
            </li>
            <li>
                <a href="/">Términos y Condiciones</a>
            </li>
        </ul>
    )
}

export default Footer;