import useFormularios from "../hooks/useFormularios";
import './Registros.css'

function Registros(){
    const {list, loading, error} = useFormularios();

    return(
        <div className="registros-page">
        <h1>Registro de Formularios</h1>

        {loading && <p>Cargando...</p>};
        {error && <p>Error: {error}</p>};

        {loading && <p>cargando registros...</p>};
        {error && <p className="error">Error: {error}</p>}

        {!loading && !error && (
            <div className="tabla-container">
                {list.length > 0 ? (
                    <table className="tabla-formularios">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Edad</th>
                                <th>Peso</th>
                                <th>Genero</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={item.id ?? index}>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.email}</td>
                                    <td className="columna_pequeña">{item.edad}</td>
                                    <td className="columna_pequeña">{item.peso}</td>
                                    <td className="columna_pequeña">{item.genero}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No hay registros dsponibles</p>
                )}
            </div>
        )}
        </div>
    )

};

export default Registros