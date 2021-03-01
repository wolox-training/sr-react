import React, { InputHTMLAttributes } from 'react';
import i18next from 'i18next';

import { I18N_CONFIG } from 'constants/index';

import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  errorMessage?: string;
}

function InputText({ inputRef, label, errorMessage, name, ...rest }: Props) {
  return (
    <div className="column full-width">
      {label && (
        <label className={`m-bottom-1 ${styles.label}`} htmlFor={name}>
          {i18next.t(`${I18N_CONFIG.key}:${name}`)}
        </label>
      )}
      <input className={styles.input} ref={inputRef} id={name} name={name} {...rest} />
      <span role="alert" className={styles.error}>
        {errorMessage ? i18next.t(`${I18N_CONFIG.key}:${errorMessage}`) : ''}
      </span>
    </div>
  );
}

export default InputText;
