import { useState } from "react";
import useFormulario from "../hooks/useFormulario";
import "./formulario.css"


function Formulario() {
    
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        edad: "",
        peso: "",
        genero:"",
    });

    const [submitData, setSubmitData] = useState(null); // Estado que activa el envío del formulario
    const {result, error, loading} = useFormulario(submitData); // Usa el hook par enviar datos cuando SubmitData cambia

    const handleChange = (event) => { // Función para actualizar los valores del fomulario
        const { name, value } = event.target; // Obtiene el nombre y valor de cada campo
        setForm((prevForm) => ({...prevForm, [name]: value})); // Actualiza solo el campo cambiado    
    };

    const handleSubmit = (event) => { // Función que maneja el envío del formulario
        event.preventDefault(); // Evita que el formulario recargue la página
        setSubmitData({ // Guarda los datos para que el hook los envíe
            ...form, // Copia todos los valores actuales del formulario
            edad: form.edad ? Number(form.edad) : null, // Convierte edad a numero o null
            peso: form.peso ? Number(form.peso) : null, // Convierte peso a numero o null
        });
    };

    return(
        <div className="formulario">
            <h2>Regístrate</h2>

            <form>
                <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    type="text"
                    placeholder="Nombre"
                    required
                />
                <input
                    name="apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    type="text"
                    placeholder="Apellido(s)"
                    required
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Correo electrónico"
                    required
                />
                <input
                    name="edad"
                    value={form.edad}
                    onChange={handleChange}
                    type="number"
                    placeholder="Edad"
                    min="0" // Evita valores negativos
                />
                <input
                    name="peso"
                    value={form.peso}
                    onChange={handleChange}
                    type="number"
                    placeholder="Peso (Kg)"
                    min="0" // Evita valores negativos
                    step="any" // Permite decimales
                />
                <input
                    name="genero"
                    value={form.genero}
                    onChange={handleChange}
                    type="text"
                    placeholder="Género (M/F)"
                    maxLength={1} // Limita a 1 caracter
                />

                <button type="submit" disabled={loading}> {/*boton de envío */}
                    {loading ? "Enviando..." : "Enviar"} {/* Cambia el texto mientras carga */}
                </button>
            </form>

            {error && <p className="error"></p>} {/* Muestra mensaje de error si existe */}
            {result && <p className="success">Formulario enviado. ID {result.id}</p>} {/* Muestra éxito si se recibió resultado */}
        </div>
    );
}

export default Formulario;