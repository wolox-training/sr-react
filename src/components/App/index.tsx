import React, { useState } from 'react';
import i18next from 'i18next';

import Routes from 'routes';
import I18n from 'components/I18n';

import styles from './styles.module.scss';

function App() {
  const [language, setLanguage] = useState(i18next.language);

  return (
    <div className={`${styles.appContainer} row center middle`}>
      <I18n language={language} setLanguage={setLanguage} />
      <Routes />
    </div>
  );
}

export default App;
