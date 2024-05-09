import { Link, useParams } from 'react-router-dom';
import TitleMenu from "./TitleMenu";
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

    const { userId } = useParams(); 
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        role_id: 0,
        id: 0
    });

    useEffect(() => {
        if (userId) { 
            fetchData(parseInt(userId, 10));
        }
    }, []); 

    const fetchData = (id: number) => {
        axios.get<Response<User>>(`https://dev.justnetsystems.com/pruebareact/api/users/${id}`)
            .then(response => {
                const userData = response.data.data.data;
                if (userData) {
                    const { name, role_id, id } = userData;
                    const [nombre, apellido] = name.split(' '); // Se usa desestructuración para almacenar los datos a diferencia del método usado en Main.tsx
                    setUserData({
                        nombre,
                        apellido,
                        role_id,
                        id
                    });
                }
            })
            .catch(err => console.log(err));
    };

    const { nombre, apellido, role_id } = userData;

    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => { // https://stackoverflow.com/questions/40676343/typescript-input-onchange-event-target-value
        setUserData({...userData, nombre: event.target.value});
    };

    const handleApellidoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, apellido: event.target.value});
    };

    const handleRolChange = (event: React.ChangeEvent<HTMLSelectElement>) => { 
        setUserData({...userData, role_id: parseInt(event.target.value, 10)});
    };

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {  // https://stackoverflow.com/questions/45089866/specifying-onclick-event-type-with-typescript-and-react-konva
        event.preventDefault();
        alert(`Ha seleccionado información sobre ${userData.nombre} ${userData.apellido}.`)
    };

    const usuarioPrev = () => {fetchData(userData.id - 1)}

    const usuarioSiguiente = () => {fetchData(userData.id + 1)}

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
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange}/>
                    <br/><br/>
                    <label htmlFor="apellido">Apellido</label><br/>
                    <input type="text" id="apellido" name="apellido" value={apellido} onChange={handleApellidoChange}/>
                    <br/><br/>
                    <label htmlFor="rol">Role</label><br/>
                    <select id="rol" name="role_id" value={role_id} onChange={handleRolChange}>
                        <option value={1} >Super Admin</option>
                        <option value={2} >Admin</option>
                        <option value={3} >User</option>
                    </select>
                    <br/><br/>
                    <button type="submit" className='botonSave' onClick={handleSubmit}>Save</button>
                </form>
                <input type="button" className='botonSave botonNavegacion' value="Previo" onClick={() => usuarioPrev()}/>
                <input type="button" className='botonSave botonNavegacion' value="Siguiente" onClick={() => usuarioSiguiente()}/>
            </div>
        </>
    );
}

export default DetailsPanel

