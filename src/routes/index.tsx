/* eslint-disable @typescript-eslint/naming-convention */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import ProtectedRoute from 'routes/protected';
import PublicRoute from 'routes/public';
import Loading from 'components/Spinner/components/loading';
import { ROUTES } from 'constants/index';

const Home = lazy(() => import('screens/Home'));
const Login = lazy(() => import('screens/Login'));
const SignUp = lazy(() => import('screens/SignUp'));

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <PublicRoute exact path={ROUTES.login} component={Login} />
          <ProtectedRoute exact path={ROUTES.home} component={Home} />
          <PublicRoute exact path={ROUTES.signUp} component={SignUp} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default Routes;
