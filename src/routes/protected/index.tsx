import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'contexts/user';
import { Props } from 'types/types';
import { ROUTES } from 'constants/paths';

function ProtectedRoute({ component: Component, isPrivate, ...rest }: Props) {
  const isAuth = useSelector(state => state.isAuth);
  if (!isPrivate) {
    return (
      <Route
        {...rest}
        render={props => (isAuth ? <Redirect to={ROUTES.home} /> : <Component {...props} />)}
      />
    );
  }
  return (
    <Route {...rest} render={props => (isAuth ? <Component {...props} /> : <Redirect to={ROUTES.login} />)} />
  );
}

export default ProtectedRoute;
