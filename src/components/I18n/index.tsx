import React, { Dispatch } from 'react';
import classNames from 'classnames/bind';
import i18next from 'i18next';

import { I18N_CONFIG } from 'constants/index';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  language?: string;
  setLanguage: Dispatch<string>;
}

function I18n({ language, setLanguage }: Props) {
  const changeLanguage = (lang: string): void => {
    i18next.changeLanguage(lang);
    setLanguage(lang);
  };
  const englishClass = cx({
    active: language === 'en'
  });
  const spanishClass = cx({
    active: language === 'es'
  });

  return (
    <div className={`${styles.languageContainer}`}>
      <button
        className={`${styles.languageButton} ${spanishClass} m-right-1`}
        type="button"
        onClick={() => changeLanguage('es')}
      >
        {I18N_CONFIG.spanish}
      </button>
      <button
        className={`${englishClass} ${styles.languageButton}`}
        type="button"
        onClick={() => changeLanguage('en')}
      >
        {I18N_CONFIG.english}
      </button>
    </div>
  );
}

export default I18n;
