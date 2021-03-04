import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'contexts/UserContext';
import { Props } from 'types/types';
import { ROUTES } from 'constants/paths';

function PublicRoute({ component: Component, ...rest }: Props) {
  const isAuth = useSelector(state => state.isAuth);
  return (
    <Route {...rest} render={props => (isAuth ? <Redirect to={ROUTES.home} /> : <Component {...props} />)} />
  );
}

export default PublicRoute;
