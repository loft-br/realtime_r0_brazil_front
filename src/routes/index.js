import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));

const Routes = () => (
  <Suspense fallback={() => <div>loading</div>}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
