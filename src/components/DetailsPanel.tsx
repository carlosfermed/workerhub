import { Link } from 'react-router-dom'
import TitleMenu from "./TitleMenu"
import { useState } from 'react';


const DetailsPanel = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [rol, setRol] = useState('');



    return (
        <>
            <TitleMenu />            
            <div className="contenido">            
                <Link to="/">
                    <button className='botonVolverAtras'>&lt; Back</button>
                </Link>
                <h1>Detalle Usuario</h1>
                <form action="">
                    <label htmlFor="nombre">Nombre</label><br/>
                    <input type="text" id="nombre" name="nombre" value={nombre} 
                        onChange={(event) => setNombre(event.target.value)} 
                        required 
                    />
                    <br/><br/>
                    <label htmlFor="apellido">Apellido</label><br/>
                    <input type="text" id="apellido" name="apellido" value={apellido} 
                        onChange={(event) => setApellido(event.target.value)} 
                        required 
                    />
                    <br/><br/>
                    <label htmlFor="rol">Role</label><br/>
                    <select id="rol" name="rol" value={rol} onChange={(event) => setRol(event.target.value)} required>
                        <option value="superadmin">Super Admin</option>
                        <option value="admin">Admin</option>
                        <option value="usuario">User</option>
                    </select>
                    <br/><br/>
                    <button type="submit" className='botonSave'>Save</button>
                </form>
            </div>
        </>
    )
}

export default DetailsPanel

