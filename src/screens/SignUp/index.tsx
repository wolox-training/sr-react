import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from 'components/Input';
import { email } from 'utils/inputValidations';
import {
  NAME,
  LAST_NAME,
  ERROR_NAME,
  ERROR_LAST_NAME,
  ERROR_EMAIL,
  EMAIL,
  PASSWORD,
  ERROR_PASSWORD,
  ERROR_CONFIRM_PASSWORD,
  CONFIRM_PASSWORD,
  ERROR_PASSWORD_MATCH,
  ERROR_EMAIL_MATCH
} from 'constants/index';
import { User } from 'types/types';

import wLogo from '../../assets/wLogo.png';

import styles from './styles.module.scss';

function SignUp() {
  const { register, errors, handleSubmit, watch } = useForm<User>({
    mode: 'onChange',
    reValidateMode: 'onBlur'
  });
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit: SubmitHandler<User> = data => {
    // integrate service
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className="row full-height center middle">
      <form
        className={`column full-height center space-around ${styles.formContainer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <img className={styles.formImage} src={wLogo} alt="wolox-logo" />
        <Input
          containerClass="column full-width"
          labelText={NAME}
          labelClass={`m-bottom-1 ${styles.formLabel}`}
          labelFor="input-name"
          className={styles.formInput}
          type="text"
          name="name"
          inputRef={register({
            required: ERROR_NAME
          })}
          errorKey={errors?.name}
          errorMessage={errors.name?.message}
          errorClass={styles.errorMessage}
        />
        <Input
          containerClass="column full-width"
          labelText={LAST_NAME}
          labelClass={`m-bottom-1 ${styles.formLabel}`}
          labelFor="input-last-name"
          className={styles.formInput}
          type="text"
          name="lastName"
          inputRef={register({
            required: ERROR_LAST_NAME
          })}
          errorKey={errors?.lastName}
          errorMessage={errors.lastName?.message}
          errorClass={styles.errorMessage}
        />
        <Input
          containerClass="column full-width"
          labelText={EMAIL}
          labelClass={`m-bottom-1 ${styles.formLabel}`}
          labelFor="input-email"
          className={styles.formInput}
          type="email"
          name="email"
          inputRef={register({
            required: ERROR_EMAIL,
            validate: value => email(ERROR_EMAIL_MATCH)(value)
          })}
          errorKey={errors?.email}
          errorMessage={errors.email?.message}
          errorClass={styles.errorMessage}
        />
        <Input
          containerClass="column full-width"
          labelText={PASSWORD}
          labelClass={`m-bottom-1 ${styles.formLabel}`}
          labelFor="input-password"
          className={styles.formInput}
          type="password"
          name="password"
          inputRef={register({
            required: ERROR_PASSWORD
          })}
          errorKey={errors?.password}
          errorMessage={errors.password?.message}
          errorClass={styles.errorMessage}
        />
        <Input
          containerClass="column full-width"
          labelText={CONFIRM_PASSWORD}
          labelClass={`m-bottom-1 ${styles.formLabel}`}
          labelFor="input-confirm-password"
          className={styles.formInput}
          type="password"
          name="confirmPassword"
          inputRef={register({
            required: ERROR_CONFIRM_PASSWORD,
            validate: value => value === password.current || ERROR_PASSWORD_MATCH
          })}
          errorKey={errors?.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          errorClass={styles.errorMessage}
        />
        <button className={`${styles.submitButton} ${styles.formButton} full-width`} type="submit">
          Sign Up
        </button>
        <button className={`${styles.formButton} ${styles.loginButton} full-width`} type="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default SignUp;
