import React, { useEffect } from 'react';
import i18next from 'i18next';

import { Context, reducer, INITIAL_STATE, useSelector } from 'contexts';
import Routes from 'routes';
import I18n from 'components/I18n';
import withProvider from 'components/ProviderWrapper';

import styles from './styles.module.scss';

function App() {
  const language = useSelector(state => state.language);

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <div className={`${styles.appContainer} row center middle`}>
      <I18n />
      <Routes />
    </div>
  );
}

export default withProvider({ context: Context, reducer, initialState: INITIAL_STATE })(App);
