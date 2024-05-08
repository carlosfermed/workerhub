import { useState } from 'react'
import logo from './assets/logo-acme.jpg'
import Main from './components/Main'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="imagen">
                <img src={logo} alt="Logo Acme" />
            </div>
            <div className="menu">
                <ul>
                    <li></li>
                    <li><a href="#">Usuarios</a></li>
                </ul>
            </div>
            <Main />
        </>
    )
}

export default App
