import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../css/ShowFlashMessages.css';

const ShowFlashMessages = props => {
  const [visible, setVisible] = useState(true);
  const [FlashMessage, setFlashMessage] = useState();

  useEffect(() => {
    async function axiosData() { // la funcion esta no seq ue iondda, me la pedia react para no generar warnings amarillos
     const response = await axios.get('http://localhost:3000/localFlashMessages/')
      setFlashMessage(response.data)
    }
    axiosData()
  },[])

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);

  return FlashMessage ? (
    visible && 
      <div className="Flash-Message">
        <div className="Message-content">
          {FlashMessage}
        </div>
        <div className="Message-closeIcon">
          &times;
        </div>
      </div>
    ): <div />;
};

export default ShowFlashMessages;
