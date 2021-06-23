import './css/Header.css';
import Body from './components/Body';
import Footer from './components/App/Footer';
import useLocalFlashMessages from './hooks/useLocalFlashMessages';

function App() {
  const [LocalFlashMessage, handleMessages] = useLocalFlashMessages()
  console.log("papata", LocalFlashMessage)

  return (
    <div className="Main">
      <main className="Main-body">

        {LocalFlashMessage ? <div> HOLA SOY YO MAMA{LocalFlashMessage}</div> : <div>{handleMessages}</div>}
        <Body />
      </main>
      <footer className="Main-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
