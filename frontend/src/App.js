import './css/Header.css';
import './css/App.css';
import Header from './components/App/Header';
import Footer from './components/App/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Error404 from './pages/Error404';

function App() {

  return (
    <Router>
      <Header />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={Error404} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
