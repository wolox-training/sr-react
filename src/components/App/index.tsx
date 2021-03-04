import React, { useEffect } from 'react';
import i18next from 'i18next';

import { Context, reducer, INITIAL_STATE, useSelector, useDispatch, actionCreators } from 'contexts';
import Routes from 'routes';
import I18n from 'components/I18n';
import withProvider from 'components/ProviderWrapper';
import LocalStorageService from 'services/LocalStorageService';

import styles from './styles.module.scss';

function App() {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
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
  }, [language, dispatch]);

  return (
    <div className={`${styles.appContainer} row center middle`}>
      <I18n />
      <Routes />
    </div>
  );
}

export default withProvider({ context: Context, reducer, initialState: INITIAL_STATE })(App);
