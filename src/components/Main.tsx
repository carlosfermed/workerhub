import { useEffect, useState } from "react"
import TitleMenu from "./TitleMenu"

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

    const [userArray, setUserArray] = useState<Response<User[]>>({
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
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("https://dev.justnetsystems.com/pruebareact/api/users")
            .then(response => response.json())
            .then((data: Response<User[]>) => {
                setUserArray(data);
                console.log(userArray.data.data[0]); // Acceder a los datos aquí dentro
            })
            .catch(err => console.log(err))
    }

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
                            <td>Laura</td><td>Gutierrez</td><td>Admin</td><td><a href="/details">Ver detalles</a></td>{/*  href="/details/:id"  */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Main
