import './css/Header.css';
import Body from './components/Body';
import Footer from './components/App/Footer';



function App() {
  return (
    <div className="Main">
      <main className="Main-body">
        <Body />
      </main>
      <footer className="Main-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
