import React, { useEffect, useReducer } from 'react';
import i18next from 'i18next';

import { Context, reducer, INITIAL_STATE, actionCreators } from 'contexts/user';
import Routes from 'routes';
import I18n from 'components/I18n';
import LocalStorageService from 'services/LocalStorageService';

import styles from './styles.module.scss';

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    if (LocalStorageService.getValue('token')) {
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
