import { useState, useEffect } from 'react';
import axios from 'axios';

const useLocalFlashMessages = () => {
    const [LocalFlashMessage, setLocalFlashMessage] = useState();

    const handleMessages = async () => {
        setLocalFlashMessage(await axios.get('http://localhost:3000/localFlashMessages/'))
        console.log("soy mensaje loco", LocalFlashMessage)
        return LocalFlashMessage
    };
    return [
        LocalFlashMessage,
        handleMessages
    ]
}

export default useLocalFlashMessages