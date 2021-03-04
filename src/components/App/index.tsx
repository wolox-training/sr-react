import React, { useEffect, useReducer } from 'react';
import i18next from 'i18next';

import { Context, reducer, INITIAL_STATE, actionCreators } from 'contexts/UserContext';
import Routes from 'routes';
import I18n from 'components/I18n';
import LocalStorageService from 'services/LocalStorageService';

import styles from './styles.module.scss';

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    const lang: string = LocalStorageService.getValue('lang');
    if (lang) {
      dispatch(actionCreators.setLanguage(lang));
      i18next.changeLanguage(lang);
    }
    if (LocalStorageService.getValue('token')) {
      dispatch(actionCreators.login(true));
    } else {
      dispatch(actionCreators.logout());
    }
  }, [state.language, dispatch]);

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
