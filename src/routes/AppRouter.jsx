import {BrowserRouter as Router, Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Home from '../pages/Home'
import Quienes_somos from '../pages/Quienes_somos'
import Formulario from "../pages/formulario"
import Personaje from "../pages/Personajes";
import Registros from '../pages/Registros'

function AppRouter(){
    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quienes_somos' element={<Quienes_somos />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/personaje" element={<Personaje />} />
            <Route path="/registros" element={<Registros />} />
            
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;