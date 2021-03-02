import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'contexts';
import { Props } from 'types/types';
import { ROUTES } from 'constants/paths';

function PublicRoute({ component: Component, ...rest }: Props) {
  const isAuth = useSelector(state => state.isAuth);
  return (
    <Route
      {...rest}
      // eslint-disable-next-line no-negated-condition
      render={props => (!isAuth ? <Component {...props} /> : <Redirect to={ROUTES.home} />)}
    />
  );
}

export default PublicRoute;
