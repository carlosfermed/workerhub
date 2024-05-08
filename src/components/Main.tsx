import { useEffect, useState } from "react";
import TitleMenu from "./TitleMenu";
import axios from "axios";

interface User {
    id: number;
    name: string;
    email: string;
    role_name: string;
}

interface Response<TipoDeDato> {
    status: number,
    data: {
        data: TipoDeDato[],
        page: number,
        nextPage: number | null,
        totalRecords: number,
        totalPages: number,
        totalWithoutFilter: number
    }
}

const Main = () => {

    const [userResponse, setUserResponse] = useState<Response<User[]>>({
        status: 0,
        data: {
            data: [],
            page: 0,
            nextPage: null,
            totalRecords: 0,
            totalPages: 0,
            totalWithoutFilter: 0
        }
    });

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get<Response<User[]>>("https://dev.justnetsystems.com/pruebareact/api/users")
            .then(response => {
                setUserResponse(response.data);
                console.log(userResponse.data.data); 
            })
            .catch(err => console.log(err));
    };

    const generarFilas = () => {

        const usuarios = userResponse.data.data.flat();

        return usuarios.map((user: User) => {
            
            const nombreCompleto = user.name;
            const partesNombre = nombreCompleto.split(' ');
            const nombre = partesNombre[0];
            const apellidos = partesNombre[1];
    
            return (
                <tr key={user.id}>
                    <td>{nombre}</td>
                    <td>{apellidos}</td>
                    <td>{user.role_name}</td>
                    <td><a href={`/details/${user.id}`}>Ver detalles</a></td>
                </tr>
            );
        });
    };

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
                        {generarFilas()}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Main
