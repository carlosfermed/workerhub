import { Link, useParams } from 'react-router-dom'
import TitleMenu from "./TitleMenu"
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    email: string;
    name: string;
    role_id: number;
    id: number;
}

interface Response<TipoDeDato> { 
    status: number, 
    data: { 
        data: TipoDeDato | null, 
        allCount: number, 
        filteredCount: number, 
        filteredIds: number[] 
    } 
}



const DetailsPanel = () => {

    const { userId } = useParams(); // Obtener el ID del usuario de los parámetros de la URL
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        role_id: 0
    });

    useEffect(() => {
        fetchData();
    }, [userId]); // Volver a cargar los datos cuando cambie el ID del usuario

    const fetchData = () => {
        console.log(userId);
        axios.get<Response<User>>(`https://dev.justnetsystems.com/pruebareact/api/users/${userId}`)
            .then(response => {
                const userData = response.data.data.data;
                if (userData) {
                    const { email, name, role_id, id } = userData;
                    const [nombre, apellido] = name.split(' ');     
                    setUserData({
                        nombre,
                        apellido,
                        role_id
                    });
                }
            })
            .catch(err => console.log(err));
    };

    const { nombre, apellido, role_id } = userData;

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
                    <input type="text" id="nombre" name="nombre" value={nombre} readOnly/>
                    <br/><br/>
                    <label htmlFor="apellido">Apellido</label><br/>
                    <input type="text" id="apellido" name="apellido" value={apellido} readOnly/>
                    <br/><br/>
                    <label htmlFor="rol">Role</label><br/>
                    <select id="rol" name="role_id" value={role_id} disabled>
                        <option value={1} >Super Admin</option>
                        <option value={2} >Admin</option>
                        <option value={3} >User</option>
                    </select>
                    <br/><br/>
                    <button type="submit" className='botonSave'>Save</button>
                </form>
            </div>
        </>
    );
}

export default DetailsPanel

