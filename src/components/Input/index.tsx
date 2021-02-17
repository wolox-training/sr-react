import React, { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import i18next from 'i18next';

import { I18N_CONFIG } from 'constants/index';

import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<HTMLInputElement>;
  containerClass?: string;
  labelFor?: string;
  labelClass?: string;
  labelText?: string;
  errorClass?: string;
  errorMessage?: string;
  errorKey?: FieldError | undefined;
}

function InputText({ inputRef, labelText, errorMessage, name, ...rest }: Props) {
  return (
    <div className="column full-width">
      <label className={`m-bottom-1 ${styles.label}`} htmlFor={name}>
        {i18next.t(`${labelText}`)}
      </label>
      <input className={styles.input} ref={inputRef} name={name} {...rest} />
      <p className={styles.error}>{errorMessage ? i18next.t(`${I18N_CONFIG.key}:${errorMessage}`) : ''}</p>
    </div>
  );
}

export default InputText;
