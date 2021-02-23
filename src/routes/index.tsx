import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'screens/Login';
import SignUp from 'screens/SignUp';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/sign_up" component={SignUp} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
