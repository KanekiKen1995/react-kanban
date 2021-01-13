import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home'
import Users from './Users/Users'
import DropDrap from './DropDrap/DropDrap'
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/dropDrap">DropDrap</Link>
            </li>
          </ul>
        </nav>
        {/* <IntlProvider> */}
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/dropDrap">
            <DropDrap />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* </IntlProvider> */}
      </div>
    </Router>
  );
}

export default App;
