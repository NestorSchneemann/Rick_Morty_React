import { useEffect, useState } from "react";

function useFormularios() {

    const[list, setList] = useState([]); // para almacenar los datos
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Para almacenar errores

    useEffect(() => {
        const fetchFormularios = async () =>{ // Función asíncrona para obtener los datos
            setLoading(true); // Pasa a estado Cargando
            setError(null); // Limpia el registro de errores

            try{ // Intenta realizar la petición, en este caso, va a hacer el GET
                const respuesta = await fetch("http://127.0.0.1:8000/formularios", { // este link hace la petición URL
                    mode: "cors",
                    credentials: "include",
                });
            
                if (!respuesta.ok){
                    const text = await respuesta.text()
                    throw new Error(`Error ${respuesta.status}: ${text}`);
                }
            
                const data = await respuesta.json();
                setList(data);
            
            } catch (err) {
            console.error("Error al obtener datos:", err);
            setError(err.message);
            } finally {
                setLoading(false); // Vuelve a poner el botón en Enviar
            }
        };

        fetchFormularios(); // llama la funcion para obtener los datos al montar el componente

    }, []);
    
    return { list, loading, error };
}

export default useFormularios;