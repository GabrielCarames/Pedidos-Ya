import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {

    /*constructor(props) {
        super(props)
        this.state = {
            
        }
    }*/
    
    render () {
        return(
            <div className="Header-container">
                <div className="Header-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rappi_logo.svg/1200px-Rappi_logo.svg.png" alt="logo"></img>
                </div>
                <div className="Header-login-options">
                    <div className="Login-options-login">
                        <button className="Buttons-login"><h3>Ingresar</h3></button>
                    </div>
                    <div className="Login-options-register">
                        <button className="Buttons-register">
                            <Link className="navbar-item" to="/register"><h3>Registrarse</h3></Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}