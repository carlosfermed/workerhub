import logo from '../assets/logo-acme.jpg'


const TitleMenu = () => {
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
        </>

    )
}

export default TitleMenu
