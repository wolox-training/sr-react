/* eslint-disable @typescript-eslint/naming-convention */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/protected';
import PublicRoute from 'routes/public';
import Loading from 'components/Spinner/components/loading';
import { Props } from 'types/types';

import routes from './routes';

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {routes.map(({ component, exact, isPrivate, path }: Props) =>
            isPrivate ? (
              <ProtectedRoute key={path} exact={exact} path={path} component={component} />
            ) : (
              <PublicRoute key={path} exact={exact} path={path} component={component} />
            )
          )}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default Routes;
