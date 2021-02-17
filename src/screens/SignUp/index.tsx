import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import i18next from 'i18next';

import InputText from 'components/Input';
import { email } from 'utils/inputValidations';
import { I18N_CONFIG, SIGNUP_BUTTONS, SIGNUP_FIELDS, SIGNUP_FIELDS_ERRORS } from 'constants/index';
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
        className={`column center space-around ${styles.formContainer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <img
          className={styles.formImage}
          src={wLogo}
          alt={i18next.t(`${I18N_CONFIG}:${SIGNUP_FIELDS.logo}`) as string}
        />
        <InputText
          labelText={`${I18N_CONFIG.key}:${SIGNUP_FIELDS.name}`}
          type="text"
          name="name"
          inputRef={register({
            required: SIGNUP_FIELDS_ERRORS.name
          })}
          errorMessage={errors.name?.message}
        />
        <InputText
          labelText={`${I18N_CONFIG.key}:${SIGNUP_FIELDS.lastName}`}
          type="text"
          name="lastName"
          inputRef={register({
            required: SIGNUP_FIELDS_ERRORS.lastName
          })}
          errorMessage={errors.lastName?.message}
        />
        <InputText
          labelText={`${I18N_CONFIG.key}:${SIGNUP_FIELDS.email}`}
          type="email"
          name="email"
          inputRef={register({
            required: SIGNUP_FIELDS_ERRORS.email,
            validate: value => email(SIGNUP_FIELDS_ERRORS.emailMatch)(value)
          })}
          errorMessage={errors.email?.message}
        />
        <InputText
          labelText={`${I18N_CONFIG.key}:${SIGNUP_FIELDS.password}`}
          type="password"
          name="password"
          inputRef={register({
            required: SIGNUP_FIELDS_ERRORS.password
          })}
          errorMessage={errors.password?.message}
        />
        <InputText
          labelText={`${I18N_CONFIG.key}:${SIGNUP_FIELDS.confirmPassword}`}
          type="password"
          name="confirmPassword"
          inputRef={register({
            required: SIGNUP_FIELDS_ERRORS.confirmPassword,
            validate: value => value === password.current || SIGNUP_FIELDS_ERRORS.passwordMatch
          })}
          errorMessage={errors.confirmPassword?.message}
        />
        <button className={`${styles.submitButton} ${styles.formButton} full-width`} type="submit">
          {i18next.t(`${I18N_CONFIG.key}:${SIGNUP_BUTTONS.signUp}`)}
        </button>
        <div className={styles.formSeparator} />
        <button className={`${styles.formButton} ${styles.loginButton} full-width`} type="button">
          {i18next.t(`${I18N_CONFIG.key}:${SIGNUP_BUTTONS.login}`)}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
