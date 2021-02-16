import React, { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import i18next from 'i18next';

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

function Input({
  inputRef,
  containerClass,
  labelClass,
  labelFor,
  labelText,
  errorKey,
  errorClass,
  errorMessage,
  ...rest
}: Props) {
  return (
    <div className={containerClass}>
      <label className={labelClass} htmlFor={labelFor}>
        {i18next.t(`${labelText}`)}
      </label>
      <input ref={inputRef} {...rest} />
      {errorKey && <p className={errorClass}>{errorMessage}</p>}
    </div>
  );
}

export default Input;
