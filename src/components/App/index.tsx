import React, { useState } from 'react';
import i18next from 'i18next';

import SignUp from 'screens/SignUp/index';
import I18n from 'components/I18n/index';

import styles from './styles.module.scss';
import 'scss/application.scss';

function App() {
  const [language, setLanguage] = useState(i18next.language);

  return (
    <div className={`${styles.appContainer} row center middle`}>
      <I18n language={language} setLanguage={setLanguage} />
      <SignUp />
    </div>
  );
}

export default App;
