/* eslint-disable @typescript-eslint/naming-convention */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/protected';
import Loading from 'components/Spinner/components/loading';
import { Props } from 'types/types';

import routes from './routes';

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {routes.map(({ component, exact, isPrivate, path }: Props) => (
            <ProtectedRoute
              key={path}
              exact={exact}
              path={path}
              component={component}
              isPrivate={isPrivate}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default Routes;
