import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import i18next from 'i18next';

import InputText from 'components/Input';
import { email } from 'utils/inputValidations';
import { I18N_CONFIG, SIGNUP_BUTTONS, SIGNUP_FIELDS, ERROR_MESSAGES } from 'constants/index';
import { User } from 'types/types';
// import UserService from 'services/UserService';
// import { useLazyRequest } from 'hooks/useRequest';

import wLogo from '../../assets/wLogo.png';

import styles from './styles.module.scss';

function SignUp() {
  const { register, errors, handleSubmit, watch } = useForm<User>({
    mode: 'onChange',
    reValidateMode: 'onBlur'
  });
  // const [state, loading, error, sendRequest] = useLazyRequest({
  //   request: UserService.createUser
  // });
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit: SubmitHandler<User> = data => {
    // integrate service
    // eslint-disable-next-line no-console
    data.locale = i18next.language;
    // const response = await UserService.createUser(data);
    // console.log('response=>', response);
  };

  return (
    <div className="row full-height center middle">
      <form
        className={`column center space-around ${styles.formContainer}`}
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
          {i18next.t(`${I18N_CONFIG.key}:${SIGNUP_BUTTONS.signUp}`)}
        </button>
        <button className={`${styles.formButton} ${styles.loginButton} full-width`} type="button">
          {i18next.t(`${I18N_CONFIG.key}:${SIGNUP_BUTTONS.login}`)}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
