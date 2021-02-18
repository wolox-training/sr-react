import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import InputText from 'components/Input';
import { email } from 'utils/inputValidations';
import { SIGNUP_FIELDS, ERROR_MESSAGES } from 'constants/index';
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
        <InputText
          {...SIGNUP_FIELDS.firstName}
          inputRef={register({
            required: ERROR_MESSAGES.name
          })}
          errorMessage={errors.name?.message}
        />
        <InputText
          {...SIGNUP_FIELDS.lastName}
          inputRef={register({
            required: ERROR_MESSAGES.lastName
          })}
          errorMessage={errors.lastName?.message}
        />
        <InputText
          {...SIGNUP_FIELDS.email}
          inputRef={register({
            required: ERROR_MESSAGES.email,
            validate: value => email(ERROR_MESSAGES.emailMatch)(value)
          })}
          errorMessage={errors.email?.message}
        />
        <InputText
          {...SIGNUP_FIELDS.password}
          inputRef={register({
            required: ERROR_MESSAGES.password
          })}
          errorMessage={errors.password?.message}
        />
        <InputText
          {...SIGNUP_FIELDS.confirmPassword}
          inputRef={register({
            required: ERROR_MESSAGES.confirmPassword,
            validate: value => value === password.current || ERROR_MESSAGES.passwordMatch
          })}
          errorMessage={errors.confirmPassword?.message}
        />
        <button className={`${styles.submitButton} ${styles.formButton} m-bottom-5 full-width`} type="submit">
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
