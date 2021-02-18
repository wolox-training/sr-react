import React, { InputHTMLAttributes } from 'react';

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
          {label}
        </label>
      )}
      <input className={styles.input} ref={inputRef} name={name} {...rest} />
      <p className={styles.error}>{errorMessage || ''}</p>
    </div>
  );
}

export default InputText;
