import React from 'react';
import classNames from 'classnames/bind';

import LocalStorageService from 'services/LocalStorageService';
import { useSelector, useDispatch, actionCreators } from 'contexts';
import { I18N_CONFIG } from 'constants/index';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function I18n() {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const changeLanguage = (lang: string): void => {
    LocalStorageService.setValue('lang', lang);
    dispatch(actionCreators.setLanguage(lang));
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
