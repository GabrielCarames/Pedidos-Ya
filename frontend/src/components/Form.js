import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        console.log(JSON.stringify(form))
        await axios.post('http://localhost:3000/users/register', form)
        .then(res => {
            console.log("El usuario ha sido registrado correctamente") 
        })
        //Axios.post('http://localhost:3001/data/register', form)
        //alert("El formulario se ha enviado");
    };

    return (
        <form className="Register-form" onSubmit={handleSubmit}>
            <div className="Input-names">
                <input className="Name" placeholder="Nombres" type="text" name="names" onChange={handleChange}></input>
                <input className="Surname" placeholder="Apellidos" type="text" name="surnames" onChange={handleChange}></input>
            </div>
            <div className="Input-password">
                <input placeholder="Contraseña" type="password" name="password" onChange={handleChange} ></input>
            </div>
            <div className="Input-email">
                <input placeholder="Email" type="email" name="email" onChange={handleChange} ></input>
            </div>
            <div className="Input-number">
                <input placeholder="Número de celular" name="age" onChange={handleChange}></input>
            </div>
            <button type="submit" className="Register-button">Registrarme</button>
        </form>
      );
}