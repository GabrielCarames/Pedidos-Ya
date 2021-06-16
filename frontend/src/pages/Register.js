import React, { Component } from 'react';
import '../css/pages/register/Register.css'
import Form from '../components/Form';


export default class Register extends Component {


  render () {
    return (
      <div className="Register-container">
        <div className="Register-outside">
          <h1>Registrate</h1>
          <h3>¿Ya tienes una cuenta? <a>Inicia sesión aquí</a></h3>
          <div className="SocialMedia-buttons">
            <button className="Facebook-button"><i className="fab fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;Facebook</button>
            <button className="Google-button"><i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;&nbsp;Google</button>
            <button className="Instagram-button"><i className="fab fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;Instagram</button>
          </div>
        </div>
        <div className="Register-inside">
          <h2>También puedes registrarte con teléfono</h2>
          <Form />
        </div>
      </div>
    );
  }
}
