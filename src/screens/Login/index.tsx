import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import i18next from 'i18next';

import { ERROR_MESSAGES, I18N_CONFIG, LOGIN_FIELDS, SIGNUP_BUTTONS } from 'constants/index';
import InputText from 'components/Input';
import logo from 'assets/wLogo.png';
import { email } from 'utils/inputValidations';
import { LoginUser } from 'types/types';

import styles from './styles.module.scss';

function Login() {
  const { register, errors, handleSubmit } = useForm<LoginUser>();
  const onSubmit: SubmitHandler<LoginUser> = () => {
    // console.log(data);
  };
  return (
    <div className="row full-height center middle">
      <form
        className={`column center space-around ${styles.formContainer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <img className={styles.formImage} src={logo} alt="wolox-logo" />
        <InputText
          {...LOGIN_FIELDS.email}
          inputRef={register({
            required: ERROR_MESSAGES.email,
            validate: value => email(ERROR_MESSAGES.emailMatch)(value)
          })}
          errorMessage={errors.password?.message}
        />
        <InputText
          {...LOGIN_FIELDS.password}
          inputRef={register({
            required: ERROR_MESSAGES.password,
            minLength: 6
          })}
          errorMessage={errors.password?.message}
        />
        <button
          className={`${styles.formButton} ${styles.submitButton} m-bottom-5 full-width`}
          type="submit"
          aria-label="login"
        >
          {i18next.t(`${I18N_CONFIG.key}:${SIGNUP_BUTTONS.login}`)}
        </button>
        <button
          className={`${styles.formButton} ${styles.secondaryButton} full-width`}
          type="button"
          aria-label="signup"
        >
          {i18next.t(`${I18N_CONFIG.key}:${SIGNUP_BUTTONS.signUp}`)}
        </button>
      </form>
    </div>
  );
}

export default Login;
