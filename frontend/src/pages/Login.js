import React, { Component } from 'react';
import '../css/pages/register/Login.css'

export default class Login extends Component {
  render () {
    return (
      <div className="Login-container">
        <div className="Login-options">
          <h1>Iniciar sesión</h1>
          <h3>¿Aún no te has registrado?<br /> <a>Registrate aquí</a></h3>
          <div className="SocialMedia-buttons">
            <button className="Facebook-button"><i className="fab fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;Facebook</button>
            <button className="Google-button"><i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;&nbsp;Google</button>
            <button className="Instagram-button"><i className="fab fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;Instagram</button>
          </div>
          <form className="login-form">
            <div className="Input-celnumber">
                <input className="Celnumber" placeholder="Escribe tu número" type="text" name="celnumber"></input>
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
}
