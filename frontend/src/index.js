import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import './css/App.css';
import App from './App';
import ShowFlashMessages from './components/ShowFlashMessages';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShowFlashMessages delay="3000" />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
