import { useState } from 'react';
import axios from 'axios';

const useFormHelper = () => {
    const [form, setForm] = useState();

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(isNaN(form.celnumber)){
                console.log(form.celnumber)
                throw new Error("No puedes ingresar caracteres en tu número celular.")
            }
            
            try {
                e.preventDefault();
                await axios.post('http://localhost:3000/users/register', form
                    ).then(async function (response) {
                        console.log("antes de todo", response)
                        alert("Registro completado satisfactoriamente.")
                        window.location.href = "http://localhost:3001/";
                    });
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