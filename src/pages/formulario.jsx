import "./formulario.css"


function Formulario() {
    return(
        <div className="formulario">
            <h2>Déjanos tus comentarios</h2>
            <form>

                <input type="text" placeholder="Nombre"/>
                <input type="email" placeholder="Correo electrónico"/>
                <input type="text" placeholder="País"/>
                <textarea placeholder="Escribe tu mensaje"/>

                <button>Enviar</button>

            </form>

        </div>
    );
}

export default Formulario;