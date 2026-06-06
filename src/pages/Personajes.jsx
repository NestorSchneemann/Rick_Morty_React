import usePersonaje from "../hooks/userPersonaje"
import "./Personajes.css";


function Personaje(){
    
    const personaje = usePersonaje(349);
    
    if (!personaje){
        return <h2>Cargando...</h2>
    }

    return(
        
        <div className="contenedor">
            <div className="fila">
                <div className="personaje">
                    <img
                    src={personaje.image}
                    alt={personaje.name}
                    />

                    <h2>{personaje.name}</h2>
                    <p>{personaje.status}</p>
                    <p>{personaje.origin.name}</p>
                </div>
                <div className="personaje">
                    <img
                    src={personaje.image}
                    alt={personaje.name}
                    />

                    <h2>{personaje.name}</h2>
                    <p>{personaje.status}</p>
                    <p>{personaje.origin.name}</p>
                </div>
            </div>
            <div className="fila">
                <div className="personaje">
                    <img
                    src={personaje.image}
                    alt={personaje.name}
                    />

                    <h2>{personaje.name}</h2>
                    <p>{personaje.status}</p>
                    <p>{personaje.origin.name}</p>
                </div>
                <div className="personaje">
                    <img
                    src={personaje.image}
                    alt={personaje.name}
                    />

                    <h2>{personaje.name}</h2>
                    <p>{personaje.status}</p>
                    <p>{personaje.origin.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Personaje;