import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Register from '../pages/Register';
import Header from '../components/App/Header';

const Body = () => {
    return( 
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    )
}

export default Body;