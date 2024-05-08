

const Main = () => {
    return (
        
        <div className="contenido">
            <h1>Usuarios</h1>
            <table>
                <tr>
                    <th>Nombre</th><th>Apellidos</th><th>Role</th><th>Accion</th>
                </tr>
                <tr>
                    <td>Laura</td><td>Gutierrez</td><td>Admin</td><td><a href="/">Ver detalles</a></td>
                </tr>
            </table>
        </div>
    )
}

export default Main
