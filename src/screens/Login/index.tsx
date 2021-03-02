import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import i18next from 'i18next';

import { LOGIN_ERROR_MESSAGES, LOGIN_FIELDS, LOGIN_BUTTONS, LOGIN_SUCCESS_MESSAGES } from 'constants/index';
import InputText from 'components/Input';
import Loading from 'components/Spinner/components/loading';
import { email } from 'utils/inputValidations';
import { LoginUser } from 'types/types';
import { useLazyRequest } from 'hooks/useRequest';
import UserService from 'services/UserService';
import { ROUTES } from 'constants/paths';
import LocalStorageService from 'services/LocalStorageService';
import logo from 'assets/wLogo.png';

import styles from './styles.module.scss';

function Login() {
  const history = useHistory();
  const [success, setSuccess] = useState<string>('');
  const { register, errors, handleSubmit } = useForm<LoginUser>({
    mode: 'onChange',
    reValidateMode: 'onBlur'
  });
  const [, loading, error, sendRequest] = useLazyRequest({
    request: UserService.loginUser,
    withPostSuccess: (data, headers) => {
      setSuccess(`${LOGIN_SUCCESS_MESSAGES.userLogged}`);
      const token = headers?.accessToken || '';
      LocalStorageService.setValue('token', token);
      history.push(ROUTES.home);
    }
  });
  const onSubmit: SubmitHandler<LoginUser> = data => {
    sendRequest(data);
  };
  return (
    <div className="row full-height center middle">
      <form
        className={`column center space-around ${styles.formContainer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        {loading && <Loading />}
        <img className={styles.formImage} src={logo} alt="wolox-logo" />
        <InputText
          {...LOGIN_FIELDS.email}
          inputRef={register({
            required: LOGIN_ERROR_MESSAGES.email,
            validate: value => email(LOGIN_ERROR_MESSAGES.emailMatch)(value)
          })}
          errorMessage={errors.email?.message}
        />
        <InputText
          {...LOGIN_FIELDS.password}
          inputRef={register({
            required: LOGIN_ERROR_MESSAGES.password,
            minLength: 6
          })}
          errorMessage={errors.password?.message}
        />
        {error && (
          <span role="error" className={styles.error}>
            {i18next.t(`${LOGIN_ERROR_MESSAGES.loginService}`)}
          </span>
        )}
        {success && (
          <span role="success" className={styles.success}>
            {i18next.t(success)}
          </span>
        )}
        <button
          className={`${styles.formButton} ${styles.submitButton} m-bottom-5 full-width`}
          type="submit"
          aria-label="login"
        >
          {i18next.t(`${LOGIN_BUTTONS.login}`)}
        </button>
        <button
          className={`${styles.formButton} ${styles.secondaryButton} full-width`}
          type="button"
          aria-label="signup"
          onClick={() => history.push(ROUTES.signUp)}
        >
          {i18next.t(`${LOGIN_BUTTONS.signUp}`)}
        </button>
      </form>
    </div>
  );
}

export default Login;
