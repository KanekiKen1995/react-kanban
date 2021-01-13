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
import Menu from '../components/Menu/Menu'
function App() {
  return (
    <Router>
      <div>
        <Menu />
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
