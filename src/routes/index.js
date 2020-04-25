import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
