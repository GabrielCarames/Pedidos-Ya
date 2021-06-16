import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Register from '../pages/Register';
import Error404 from '../pages/Error404';
import Header from '../components/App/Header';

const Body = () => {
    return( 
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/register" component={Register} />
                <Route path="*" component={Error404} />
            </Switch>
        </Router>
    )
}

export default Body;