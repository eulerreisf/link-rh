import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Containers
import Dashboard from 'containers/Dashboard';
import Signin from 'containers/Signin';
import Signup from 'containers/Signup';

const App = () =>
  < Router>
    <Switch>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route path='/'>
        <Signin />
      </Route>
    </Switch>
  </ Router>;

export default App;
