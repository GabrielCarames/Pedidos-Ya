import React, { useState } from 'react';
import axios from 'axios';

export const FormHelper = () => {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        console.log("CHE FLACO SOS RE PUTO")
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    };

     const handleSubmit = async (e) => {
        console.log("CHE FLACO SOS RE PUTO")

        e.preventDefault();
        await axios.post('http://localhost:3000/users/register', form)
        .then(res => {
            console.log("El usuario ha sido registrado correctamente") 
        })
        //Axios.post('http://localhost:3001/data/register', form)
        //alert("El formulario se ha enviado");
    };
    return(
        handleChange,
        handleSubmit
    )
}