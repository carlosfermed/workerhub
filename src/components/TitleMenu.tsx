import logo from '../assets/logo-acme.jpg';
import userImage from '../assets/user-image.jpg';


const TitleMenu = () => {
    return (
        <>
            <div className="imagen">
                <img src={logo} alt="Logo Acme" />
            </div>
            <div className="menu">
                <ul>
                    <li></li>
                    <li><img src={userImage} alt="user image" className='userImage'/><a href="#">Usuarios</a></li>
                </ul>
            </div>
        </>

    )
}

export default TitleMenu
