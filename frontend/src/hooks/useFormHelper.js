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
        await axios.post('http://localhost:3000/users/register', form)
    };

    return[
        handleChange,
        handleSubmit
    ]
}

export default useFormHelper