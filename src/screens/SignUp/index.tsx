import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import { email, validatePassCoincidence } from 'utils/inputValidations';

import wLogo from '../../assets/wLogo.png';

import 'scss/layout.scss';
import 'scss/components.scss';
import 'scss/margins.scss';
import styles from './styles.module.scss';

interface Inputs {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const { register, errors, getValues, setError } = useForm<Inputs>();
  const [language, setLanguage] = useState(i18next.language);
  // const onSubmit = (data: Inputs) => {};
  const onBlur = (): void => {
    const response = email('correo no válido')(getValues('email'));
    if (response) {
      setError('email', {
        message: response
      });
    }
  };

  const changeLanguage = (lang: string): void => {
    i18next.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className="row full-height center">
      <form
        className={`column full-height center space-around ${styles.formContainer} ${styles.formBackground}`}
        // onSubmit={handleSubmit(onSubmit)}
      >
        <div className="full-width row center">
          <button
            className={`${styles.languageButton} ${language === 'es' ? styles.active : ''} m-right-1`}
            type="button"
            onClick={() => changeLanguage('es')}
          >
            ES
          </button>
          <button
            className={`${styles.languageButton} ${language === 'en' ? styles.active : ''}`}
            type="button"
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
        </div>
        <img className={styles.formImage} src={wLogo} alt={i18next.t('SignUp:logoAlt') as string} />
        <div className="column full-width">
          <label className={`m-bottom-1 ${styles.formLabel}`}>{i18next.t('SignUp:name')}</label>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            ref={register({ required: 'El nombre es requerido', maxLength: '10' })}
          />
          {errors.name?.message && <p className={styles.errorMessage}>{errors.name.message}</p>}
        </div>
        <div className="column full-width">
          <label className={`m-bottom-1 ${styles.formLabel}`}>{i18next.t('SignUp:lastName')}</label>
          <input
            className={styles.formInput}
            type="text"
            name="lastName"
            ref={register({ required: 'El apellido es requerido', maxLength: '20' })}
          />
          {errors.lastName?.message && <p className={styles.errorMessage}>{errors.lastName.message}</p>}
        </div>
        <div className="column full-width">
          <label className={`m-bottom-1 ${styles.formLabel}`}>{i18next.t('SignUp:email')}</label>
          <input
            className={styles.formInput}
            type="email"
            name="email"
            ref={register({ required: 'El email es requerido' })}
            onBlur={onBlur}
          />
          {errors.email?.message && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>
        <div className="column full-width">
          <label className={`m-bottom-1 ${styles.formLabel}`}>{i18next.t('SignUp:password')}</label>
          <input
            className={styles.formInput}
            type="password"
            name="password"
            ref={register({ required: 'La contraseña es requerida' })}
          />
          {errors.password?.message && <p className={styles.errorMessage}>{errors.password.message}</p>}
        </div>
        <div className="column full-width">
          <label className={`m-bottom-1 ${styles.formLabel}`}>{i18next.t('SignUp:passwordConfirm')}</label>
          <input
            className={styles.formInput}
            type="password"
            name="confirmPassword"
            ref={register({ required: 'la confirmación de la password es requerida' })}
            onBlur={() => {
              const { password, confirmPassword } = getValues(['password', 'confirmPassword']);
              if (!validatePassCoincidence(password, confirmPassword)) {
                setError('confirmPassword', {
                  message: 'Las contraseñas no coinciden'
                });
              }
            }}
          />
          {errors.confirmPassword?.message && (
            <p className={styles.errorMessage}>{errors.confirmPassword.message}</p>
          )}
        </div>
        <button className={`${styles.submitButton} ${styles.formButton} full-width`} type="submit">
          {i18next.t('SignUp:signUp')}
        </button>
        <div className={styles.formSeparator} />
        <button className={`${styles.formButton} ${styles.loginButton} full-width`} type="button">
          {i18next.t('SignUp:login')}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
