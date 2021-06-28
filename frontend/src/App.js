import React, { useEffect } from 'react';
import './css/Header.css';
import Body from './components/Body';
import Footer from './components/App/Footer';
import ShowFlashMessages from './components/ShowFlashMessages';

function App() {
  
  useEffect(() => {
    console.log("soypetetE EL MAS PODEROSO DEL UNVIERSO HIJO DE RE MIL RE PUTA", localStorage.getItem('userlogged'))
  });

  return (
    <div className="Main">
      <main className="Main-body">
        <ShowFlashMessages delay="5000000" />
        <Body />
      </main>
      <footer className="Main-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
