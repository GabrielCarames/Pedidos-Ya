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
                throw new Error("No puedes ingresar caracteres en tu número celular.")
            }
            try {
                if(type === "register") {
                    e.preventDefault();
                    try {
                        await axios.post('http://localhost:3000/users/register', form).then( (res) => {
                            localStorage.setItem('userLogged', res.config.data)
                            window.location.href = "http://localhost:3001/"
                        });
                    } catch (error) {
                        window.location.href = "http://localhost:3001/register"
                        console.log("Hubo un error con el registro: ", error)
                    }
                    
                }
                if(type === "login") {
                    e.preventDefault();
                    try {
                        await axios.post('http://localhost:3000/users/login', form).then( (res)=> {
                            //por que no hay un if del data.auth?, porque en caso de que ingreses mal la contra, passportno se por que pero reconoce de alguna manera que esta mal y tira un error 401. por tanto no puedo ahcer otra cosa mas que usar el catch de abajo
                            localStorage.setItem('userLogged', res.config.data)
                            window.location.href = "http://localhost:3001/"
                        });
                    } catch (error) {
                        window.location.href = "http://localhost:3001/login"
                        console.log("Hubo un error con el ingreso: ", error)
                    }
                    
                }
                
            } catch (error) {
                e.preventDefault();
                console.log("Hubo un error con el servidor: ", error)
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