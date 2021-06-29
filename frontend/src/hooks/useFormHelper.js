import { useState } from 'react';
import axios from 'axios';

const useFormHelper = (formType) => {
    const [form, setForm] = useState();
    const [type] = useState(formType)

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async function (e) {
        e.preventDefault();
        try {
            if(isNaN(form.celnumber)){
                console.log(form.celnumber)
                throw new Error("No puedes ingresar caracteres en tu número celular.")
            }
            try {
                if(type === "register") {
                    e.preventDefault();
                    await axios.post('http://localhost:3000/users/register', form).then( (res) => {
                        localStorage.setItem('userLogged', res.config.data)
                        window.location.href = "http://localhost:3001/"
                    });
                }
                if(type === "login") {
                    e.preventDefault(); 
                    await axios.post('http://localhost:3000/users/login', form).then( (res)=>
                        console.log("que carajo es esto", res.data.auth),
                        alert("Logueo completado satisfactoriamente."),
                        window.location.href = "http://localhost:3001/"
                    );
                }
                
            } catch (error) {
                e.preventDefault();
                console.log("Hubo un error con el servidor", error)
            }
        } catch (error) {
            e.preventDefault();
            console.log("Ha ocurrido un error: ", error)
        }
        
    };

    return[
        handleChange,
        handleSubmit
    ]
}

export default useFormHelper