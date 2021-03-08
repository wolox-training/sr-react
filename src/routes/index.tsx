import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Props } from 'types/types';

import routes from './routes';

function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map(({ component, path, exact }: Props) => (
          <Route key={path} exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
}

export default Routes;
