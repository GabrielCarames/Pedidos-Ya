import './css/Header.css';
import Body from './components/Body';
import Footer from './components/App/Footer';
import ShowFlashMessages from './components/ShowFlashMessages';

function App() {
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
