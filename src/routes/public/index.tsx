import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'contexts';
import { Props } from 'types/types';

function Public({ component: Component, ...rest }: Props) {
  const isAuth = useSelector(state => state.isAuth);
  return (
    <Route
      {...rest}
      // eslint-disable-next-line no-negated-condition
      render={props => (!isAuth ? <Component {...props} /> : <Redirect to="/home" />)}
    />
  );
}

export default Public;
