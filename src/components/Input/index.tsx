import React, { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import i18next from 'i18next';

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
      <input className={styles.input} ref={inputRef} {...rest} />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}

export default InputText;
