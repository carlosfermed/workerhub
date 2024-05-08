import TitleMenu from "./TitleMenu"

const Main = () => {
    return (
        <>
            <TitleMenu />
            <div className="contenido">
                <h1>Usuarios</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th><th>Apellidos</th><th>Role</th><th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Laura</td><td>Gutierrez</td><td>Admin</td><td><a href="/details">Ver detalles</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Main
