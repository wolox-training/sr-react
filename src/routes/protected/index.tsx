import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'contexts';
import { Props } from 'types/types';
import { ROUTES } from 'constants/index';

function ProtectedRoute({ component: Component, ...rest }: Props) {
  const isAuth = useSelector(state => state.isAuth);
  return (
    <Route {...rest} render={props => (isAuth ? <Component {...props} /> : <Redirect to={ROUTES.login} />)} />
  );
}

export default ProtectedRoute;