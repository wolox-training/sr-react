import React, { useRef, useState } from 'react';
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
  const [language, setLanguage] = useState(i18next.language);
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit: SubmitHandler<User> = data => {
    // integrate service
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const changeLanguage = (lang: string): void => {
    i18next.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className="row full-height center middle">
      <form
        className={`column full-height center space-around ${styles.formContainer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="full-width row center">
          <button
            className={`${styles.languageButton} ${language === 'es' ? styles.active : ''} m-right-1`}
            type="button"
            onClick={() => changeLanguage('es')}
          >
            {I18N_CONFIG.spanish}
          </button>
          <button
            className={`${styles.languageButton} ${language === 'en' ? styles.active : ''}`}
            type="button"
            onClick={() => changeLanguage('en')}
          >
            {I18N_CONFIG.english}
          </button>
        </div>
        <img
          className={styles.formImage}
          src={wLogo}
          alt={i18next.t(`${I18N_CONFIG}:${SIGNUP_FIELDS.logo}`) as string}
        />
        <InputText
          labelText={`${I18N_CONFIG.key}:${SIGNUP_FIELDS.name}`}
          labelClass={`m-bottom-1 ${styles.formLabel}`}
          type="text"
          name="name"
          inputRef={register({
            required: SIGNUP_FIELDS_ERRORS.name
          })}
          errorMessage={errors.name?.message}
        />
        <InputText
          labelText={`${I18N_CONFIG.key}:${SIGNUP_FIELDS.lastName}`}
          labelClass={`m-bottom-1 ${styles.formLabel}`}
          type="text"
          name="lastName"
          inputRef={register({
            required: SIGNUP_FIELDS_ERRORS.lastName
          })}
          errorMessage={errors.lastName?.message}
        />
        <InputText
          labelText={`${I18N_CONFIG.key}:${SIGNUP_FIELDS.email}`}
          labelClass={`m-bottom-1 ${styles.formLabel}`}
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
          labelClass={`m-bottom-1 ${styles.formLabel}`}
          type="password"
          name="password"
          inputRef={register({
            required: SIGNUP_FIELDS_ERRORS.password
          })}
          errorMessage={errors.password?.message}
        />
        <InputText
          labelText={`${I18N_CONFIG.key}:${SIGNUP_FIELDS.confirmPassword}`}
          labelClass={`m-bottom-1 ${styles.formLabel}`}
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
