import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../css/ShowFlashMessages.css';

const ShowFlashMessages = props => {
  const [visible, setVisible] = useState(true);
  const [FlashMessage, setFlashMessage] = useState();

  useEffect(() => {
    async function axiosData() { // la funcion esta no seq ue iondda, me la pedia react para no generar warnings amarillos
     const response = await axios.get('/localFlashMessages/')
     if(response.data) {
      document.getElementById("root").style.gridTemplateRows = "2em 4em auto 10.7em";
      setFlashMessage(response.data)
      }
    }
    axiosData()
  },[])

  useEffect(() => {
    setTimeout(async () => {
      setVisible(false);
      document.getElementById("root").style.gridTemplateRows = "4em auto 10.7em";
      await axios.put('/localFlashMessages/removeflashmessage')
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
    ): "";
};

export default ShowFlashMessages;
