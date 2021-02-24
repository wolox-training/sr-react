import React, { InputHTMLAttributes } from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputRef: React.Ref<HTMLInputElement>;
  label?: string;
  errorMessage?: string;
  i18nKey: string;
}

function InputText({ inputRef, label, errorMessage, name, i18nKey, ...rest }: Props) {
  return (
    <div className="column full-width">
      {label && (
        <label className={`m-bottom-1 ${styles.label}`} htmlFor={name}>
          {i18next.t(`${i18nKey}:${name}`)}
        </label>
      )}
      <input className={styles.input} ref={inputRef} id={name} name={name} {...rest} />
      <span role="alert" className={styles.error}>
        {errorMessage ? i18next.t(`${i18nKey}:${errorMessage}`) : ''}
      </span>
    </div>
  );
}

export default InputText;
