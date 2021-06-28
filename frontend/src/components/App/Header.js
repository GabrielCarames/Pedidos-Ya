import { Link } from "react-router-dom";

const Header = () => {

    return(
        <div className="Header-container">
            <div className="Header-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rappi_logo.svg/1200px-Rappi_logo.svg.png" alt="logo"></img>
            </div>
            <div className="Header-login-options">
                <div className="Login-options-login">
                    <button className="Button-login">
                    <Link className="Buttons-login" to="/login"><h3>Ingresar</h3></Link>
                    </button>
                </div>
                <div className="Login-options-register">
                    <button className="Button-register">
                        <Link className="navbar-item" to="/register"><h3>Registrarse</h3></Link>
                    </button>
                </div>
            </div>
        </div>
    )
    
}
export default Header;