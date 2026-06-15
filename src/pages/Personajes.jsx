import usePersonaje from "../hooks/userPersonaje"
import "./Personajes.css";


function Personaje(){
    
    const personaje = usePersonaje([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    
    if (!personaje){
        return <h2>Cargando...</h2>
    }

    return(
        
        <div className="contenedor">
            <h1>Personajes principales</h1>
            <div className="contenedor-grid">
                {personaje.map((pj)=>(
                    <div className="card" key={personaje.id}>

                        <img src={pj.image} alt={pj.name} />
                        <h2>Nombre: {pj.name}</h2>
                        <ul>
                            <li><b>Estado:</b> {pj.status}</li>
                            <li><b>Origen:</b> {pj.origin.name}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Personaje;