// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customer from './Customer/';
import Admin from './Admin/';
import Dealer from './Dealer/';
import Login from './Customer/login.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={["/", "/about", "/services", "/contact"]} component={() => <Customer />} />
          <Route exact path="/admin" component={() => <Admin />} />
          <Route exact path="/dealer" component={() => <Dealer />} />
          <Route exact path="/login" component={() => <Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
