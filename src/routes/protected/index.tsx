import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'contexts';
import { Props } from 'types/types';

function ProtectedRoute({ component: Component, ...rest }: Props) {
  const isAuth = useSelector(state => state.isAuth);
  return <Route {...rest} render={props => (isAuth ? <Component {...props} /> : <Redirect to="/" />)} />;
}

export default ProtectedRoute;
