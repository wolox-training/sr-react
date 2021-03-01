import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import i18next from 'i18next';

import api from 'config/api';
import { actionCreators, useDispatch } from 'contexts';
import {
  ERROR_MESSAGES,
  I18N_CONFIG,
  LOGIN_FIELDS,
  ROUTES,
  SIGNUP_BUTTONS,
  SUCCESS_MESSAGES,
  AUTH_LOGIN_HEADERS
} from 'constants/index';
import InputText from 'components/Input';
import Loading from 'components/Spinner/components/loading';
import { email } from 'utils/inputValidations';
import { LoginUser } from 'types/types';
import { useLazyRequest } from 'hooks/useRequest';
import UserService from 'services/UserService';
import logo from 'assets/wLogo.png';

import styles from './styles.module.scss';

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [success, setSuccess] = useState<string>('');
  const { register, errors, handleSubmit } = useForm<LoginUser>({
    mode: 'onChange',
    reValidateMode: 'onBlur'
  });
  const [, loading, error, sendRequest] = useLazyRequest({
    request: UserService.loginUser,
    withPostSuccess: (data, headers) => {
      setSuccess(`${I18N_CONFIG.key.login}:${SUCCESS_MESSAGES.userLogged}`);
      const token = headers?.accessToken || '';
      const client = headers?.client || '';
      const uid = headers?.uid || '';
      localStorage.setItem('session', JSON.stringify({ token, client, uid }));
      api.setHeaders({
        [AUTH_LOGIN_HEADERS.accessToken]: token,
        [AUTH_LOGIN_HEADERS.client]: client,
        [AUTH_LOGIN_HEADERS.uid]: uid
      });
      dispatch(actionCreators.login(true));
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
            required: ERROR_MESSAGES.email,
            validate: value => email(ERROR_MESSAGES.emailMatch)(value)
          })}
          errorMessage={errors.email?.message}
          i18nKey={I18N_CONFIG.key.login}
        />
        <InputText
          {...LOGIN_FIELDS.password}
          inputRef={register({
            required: ERROR_MESSAGES.password,
            minLength: 6
          })}
          errorMessage={errors.password?.message}
          i18nKey={I18N_CONFIG.key.login}
        />
        {error && (
          <span role="error" className={styles.error}>
            {i18next.t(`${I18N_CONFIG.key.login}:${ERROR_MESSAGES.loginService}`)}
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
          {i18next.t(`${I18N_CONFIG.key.login}:${SIGNUP_BUTTONS.login}`)}
        </button>
        <button
          className={`${styles.formButton} ${styles.secondaryButton} full-width`}
          type="button"
          aria-label="signup"
          onClick={() => history.push('/sign_up')}
        >
          {i18next.t(`${I18N_CONFIG.key.login}:${SIGNUP_BUTTONS.signUp}`)}
        </button>
      </form>
    </div>
  );
}

export default Login;
