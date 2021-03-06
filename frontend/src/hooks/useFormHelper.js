import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useFormHelper = (formType) => {
    const [form, setForm] = useState();
    const [type] = useState(formType)
    const { push } = useHistory();

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async function (e) {
        e.preventDefault();
        try {
            if(form.celnumber && isNaN(form.celnumber)){
                console.log("eh??", form)
                throw new Error("No puedes ingresar caracteres en tu número celular.")
            }
            try {
                if(type === "register") {
                    e.preventDefault();
                    try {
                        await axios.post('/users/register', form).then( (res) => {
                            localStorage.setItem('userLogged', res.config.data)
                            window.location.href = "/"
                        });
                    } catch (error) {
                        window.location.href = "/register"
                        console.log("Hubo un error con el registro: ", error)
                    }
                    
                }
                if(type === "login") { //HACER FUNCIONES DE LOS POSTS ASI NO REPETIR TANTO CODIGO
                    e.preventDefault();
                    try {
                        await axios.post('/users/login', form).then( (res)=> {
                            //por que no hay un if del data.auth?, porque en caso de que ingreses mal la contra, passportno se por que pero reconoce de alguna manera que esta mal y tira un error 401. por tanto no puedo ahcer otra cosa mas que usar el catch de abajo
                            localStorage.setItem('userLogged', res.config.data)
                            window.location.href = "/"
                        });
                    } catch (error) {
                        window.location.href = "/login"
                        console.log("Hubo un error con el ingreso: ", error)
                    }
                    
                }
                else {
                    e.preventDefault();
                    try {
                        await axios.post('/search/handleSearch', form).then( (res)=> {
                            console.log(form)
                            const searchData = res.data
                            push({
                                pathname: '/search',
                                state: {
                                    data: searchData, form
                                }
                            })
                            //window.location.href = "http://localhost:3001/search" + res.data
                        });
                    } catch (error) {
                        
                        console.log("Hubo un error con la busqueda: ", error)
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