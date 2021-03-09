import React, { useEffect, useReducer } from 'react';
import i18next from 'i18next';

import api from 'config/api';
import { Context, reducer, INITIAL_STATE, actionCreators } from 'contexts/user';
import Routes from 'routes';
import I18n from 'components/I18n';
import LocalStorageService from 'services/LocalStorageService';
import { AUTH_LOGIN_HEADERS } from 'constants/index';

import styles from './styles.module.scss';

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    if (JSON.parse(LocalStorageService.getValue('session'))) {
      const { token, client, uid } = JSON.parse(LocalStorageService.getValue('session'));
      api.setHeaders({
        [AUTH_LOGIN_HEADERS.accessToken]: token,
        client,
        uid
      });
      dispatch(actionCreators.login(true));
    }
  }, [state.isAuth]);

  useEffect(() => {
    const lang: string = LocalStorageService.getValue('lang');
    if (lang) {
      dispatch(actionCreators.setLanguage(lang));
      i18next.changeLanguage(lang);
    }
  }, [state.language]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className={`${styles.appContainer} row center middle`}>
        <I18n />
        <Routes />
      </div>
    </Context.Provider>
  );
}

export default App;
