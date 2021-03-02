import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import i18next from 'i18next';

import InputText from 'components/Input';
import { email } from 'utils/inputValidations';
import {
  SIGNUP_BUTTONS,
  SIGNUP_FIELDS,
  SIGNUP_ERROR_MESSAGES,
  SIGNUP_SUCCESS_MESSAGES
} from 'constants/index';
import { User } from 'types/types';
import { useLazyRequest } from 'hooks/useRequest';
import UserService from 'services/UserService';
import Loading from 'components/Spinner/components/loading';
import { ROUTES } from 'constants/paths';
import wLogo from 'assets/wLogo.png';

import styles from './styles.module.scss';

function SignUp() {
  const history = useHistory();
  const [success, setSuccess] = useState<string>('');
  const { register, errors, handleSubmit, watch } = useForm<User>({
    mode: 'onChange',
    reValidateMode: 'onBlur'
  });
  const password = useRef({});
  password.current = watch('password', '');
  const [, loading, error, sendRequest] = useLazyRequest({
    request: UserService.createUser,
    withPostSuccess: () => {
      setSuccess(`${SIGNUP_SUCCESS_MESSAGES.userCreated}`);
      history.push(ROUTES.login);
    }
  });
  const onSubmit: SubmitHandler<User> = data => {
    data.locale = i18next.language;
    sendRequest(data);
  };

  return (
    <div className="row full-height center middle">
      <form
        className={`column center space-around ${styles.formContainer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        {loading && <Loading />}
        <img className={styles.formImage} src={wLogo} alt="wolox-logo" />
        <InputText
          {...SIGNUP_FIELDS.firstName}
          inputRef={register({
            required: SIGNUP_ERROR_MESSAGES.firstName
          })}
          errorMessage={errors.firstName?.message}
        />
        <InputText
          {...SIGNUP_FIELDS.lastName}
          inputRef={register({
            required: SIGNUP_ERROR_MESSAGES.lastName
          })}
          errorMessage={errors.lastName?.message}
        />
        <InputText
          {...SIGNUP_FIELDS.email}
          inputRef={register({
            required: SIGNUP_ERROR_MESSAGES.email,
            validate: value => email(SIGNUP_ERROR_MESSAGES.emailMatch)(value)
          })}
          errorMessage={errors.email?.message}
        />
        <InputText
          {...SIGNUP_FIELDS.password}
          inputRef={register({
            required: SIGNUP_ERROR_MESSAGES.password,
            minLength: 6
          })}
          errorMessage={errors.password?.message}
        />
        <InputText
          {...SIGNUP_FIELDS.confirmPassword}
          inputRef={register({
            required: SIGNUP_ERROR_MESSAGES.confirmPassword,
            minLength: 6,
            validate: value => value === password.current || SIGNUP_ERROR_MESSAGES.passwordMatch
          })}
          errorMessage={errors.confirmPassword?.message}
        />
        {error && (
          <span role="error" className={styles.error}>
            {i18next.t(`${SIGNUP_ERROR_MESSAGES.signUpService}`)}
          </span>
        )}
        {success && (
          <span role="success" className={styles.success}>
            {i18next.t(success)}
          </span>
        )}
        <button
          className={`${styles.submitButton} ${styles.formButton} m-bottom-5 full-width`}
          type="submit"
          aria-label="signup"
        >
          {i18next.t(`${SIGNUP_BUTTONS.signUp}`)}
        </button>
        <button
          className={`${styles.formButton} ${styles.secondaryButton} full-width`}
          type="button"
          aria-label="login"
          onClick={() => history.push(ROUTES.login)}
        >
          {i18next.t(`${SIGNUP_BUTTONS.login}`)}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
