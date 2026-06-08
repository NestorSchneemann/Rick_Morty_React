import { useEffect, useState } from "react";

function useFormulario(formData) { // Define el custom hook que recibe los datos del formulario
    const [result, setResult] = useState(null); // almacena la respuesta del servidor
    const [error, setError] = useState(null); // almacena el mensaje de error si ocurre uno
    const [loading, setLoading] = useState(false); // indica si la petición está en curso

    useEffect(() => { // Efecto que se ejecuta si cambia formData
        if (!formData) return; // Si no hay datos, no hace nada

        const enviarFormulario = async () => { // Función asíncrona que enviá los datos
            setLoading(true); // Marca como cargando
            setError(null); // Resetea los errores registrados anteriormente

            try {
                const respuesta = await fetch("https://127.0.0.1:8000/formularios", { // Envía petición POST a la API
                    method: "POST",
                    mode: "cors",
                    credentials: "include", // Incluye cookies si existen
                    headers: {
                        "Content-Type": "application/json", // Indica que se envía JSON
                    },
                    body: JSON.stringify(formData), // Convierte los datos del formulario a JSON
                });

                if (!respuesta.ok) { // Si el servidor responde con un error
                    const texto = await respuesta.text(); // Intenta leer como texto primero
                    console.error("Error del servidor;", texto); // muestra el error en consola
                    throw new Error(`Error ${respuesta.status}: ${texto}`); // Lanza el error con el estado HTTP
                }

                const data = await respuesta.json(); // Lee la respuesta JSON exitosa
                setResult(data); // Guarda el resultado en el estado
            } catch (err) {
                console.error("Error al enviar:", err); // Muestra el error completo en consola
                setError(err.message); // Guarda el mensaje de error en el estado
            } finally {
                setLoading(false); // termina el estado de carga
            }
        };

        enviarFormulario(); // Ejecuta la función de envío
    }, [formData]); // Reejecuta el efecto cuando cambian los datos del formulario

    return { result, error, loading }; // Devuelve el resultado, el error y el estado de carga
}

export default useFormulario;