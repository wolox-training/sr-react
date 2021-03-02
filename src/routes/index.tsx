import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'screens/Login';
import SignUp from 'screens/SignUp';
import { ROUTES } from 'constants/paths';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.signUp} component={SignUp} />
        <Route path={ROUTES.login} component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
