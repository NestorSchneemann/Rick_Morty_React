import usePersonaje from "../hooks/userPersonaje"
import "./Personajes.css";


function Personaje(){
    
    const personaje = usePersonaje([1, 2, 3, 4, 5, 6, 7, 8]);
    
    if (!personaje){
        return <h2>Cargando...</h2>
    }

    return(
        
        <div className="contenedor">
            {personaje.map((pj)=>(
                <div key={personaje.id}>

                    <img src={pj.image} alt={pj.name} />
                    <h2>Nombre: {pj.name}</h2>
                    <ul>
                        <li><b>Estado:</b> {pj.status}</li>
                        <li><b>Origen:</b> {pj.origin.name}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Personaje;