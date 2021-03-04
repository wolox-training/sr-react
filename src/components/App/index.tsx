import React, { useEffect } from 'react';
import i18next from 'i18next';

import { Context, reducer, INITIAL_STATE, useSelector } from 'contexts';
import api from 'config/api';
import Routes from 'routes';
import I18n from 'components/I18n';
import withProvider from 'components/ProviderWrapper';
import LocalStorageService from 'services/LocalStorageService';
import { AUTH_LOGIN_HEADERS } from 'constants/index';

import styles from './styles.module.scss';

function App() {
  const [language, isAuth] = useSelector(state => [state.language, state.isAuth]);

  useEffect(() => {
    i18next.changeLanguage(language);
    if (isAuth) {
      const { token, client, uid } = JSON.parse(LocalStorageService.getValue('session'));
      api.setHeaders({
        [AUTH_LOGIN_HEADERS.accessToken]: token,
        client,
        uid
      });
    }
  }, [language, isAuth]);

  return (
    <div className={`${styles.appContainer} row center middle`}>
      <I18n />
      <Routes />
    </div>
  );
}

export default withProvider({ context: Context, reducer, initialState: INITIAL_STATE })(App);
