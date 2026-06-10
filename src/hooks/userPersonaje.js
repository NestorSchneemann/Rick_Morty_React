import { useEffect, useState } from "react";


function usePersonaje(ids){

    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {

        const obtenerPersonaje = async () => {

            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`);

            const data = await respuesta.json();

            setPersonaje(Array.isArray(data) ? data : [data]);

        };

        obtenerPersonaje();

    }, [ids]);

    return personaje;

}

export default usePersonaje;