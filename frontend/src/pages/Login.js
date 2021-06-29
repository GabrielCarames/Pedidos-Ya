
import useFormHelper from '../hooks/useFormHelper';
import '../css/pages/register/Login.css'
import { useState } from 'react';

const Login = () => { 
    const [formType] = useState("login");
    const [handleChange, handleSubmit] = useFormHelper(formType)

    return (
      <div className="Login-container">
        <div className="Login-options">
          <h1>Iniciar sesión</h1>
          <h3>¿Aún no te has registrado?<br /> <a href="/#">Registrate aquí</a></h3>
          <div className="SocialMedia-buttons">
            <button className="Facebook-button"><i className="fab fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;Facebook</button>
            <button className="Google-button"><i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;&nbsp;Google</button>
            <button className="Instagram-button"><i className="fab fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;Instagram</button>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="Input-celnumber">
                <input className="Celnumber" placeholder="Escribe tu número" type="text" name="celnumber" onChange={handleChange}></input>
            </div>
            <button type="submit" className="Login-button">Iniciar sesión</button>
          </form>
        </div>
        <div className="Login-image">
      vegagrande
        </div>
      </div>
    );
}

export default Login