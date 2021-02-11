import React from 'react';
import { useForm } from 'react-hook-form';

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
  //   const onSubmit = (data: Inputs) => console.log(data);
  const onBlur = (): void => {
    const response = email('correo no válido')(getValues('email'));
    if (response) {
      setError('email', {
        message: response
      });
    }
  };

  return (
    <div className="row full-height center">
      <form
        className={`column full-height center space-around ${styles.formContainer} ${styles.formBackground}`}
      >
        <img className={styles.formImage} src={wLogo} alt="wolox-logo" />
        <div className="column full-width">
          <label className={`m-bottom-1 ${styles.formLabel}`}>Nombre</label>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            ref={register({ required: 'El nombre es requerido', maxLength: '10' })}
          />
          {errors.name?.message && <p className={styles.errorMessage}>{errors.name.message}</p>}
        </div>
        <div className="column full-width">
          <label className={`m-bottom-1 ${styles.formLabel}`}>Apellido</label>
          <input
            className={styles.formInput}
            type="text"
            name="lastName"
            ref={register({ required: 'El apellido es requerido', maxLength: '20' })}
          />
          {errors.lastName?.message && <p className={styles.errorMessage}>{errors.lastName.message}</p>}
        </div>
        <div className="column full-width">
          <label className={`m-bottom-1 ${styles.formLabel}`}>Email</label>
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
          <label className={`m-bottom-1 ${styles.formLabel}`}>Password</label>
          <input
            className={styles.formInput}
            type="password"
            name="password"
            ref={register({ required: 'La contraseña es requerida' })}
          />
          {errors.password?.message && <p className={styles.errorMessage}>{errors.password.message}</p>}
        </div>
        <div className="column full-width">
          <label className={`m-bottom-1 ${styles.formLabel}`}>Confirmación de Password</label>
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
          Sign Up
        </button>
        <div className={styles.formSeparator} />
        <button className={`${styles.formButton} ${styles.loginButton} full-width`} type="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default SignUp;
