import React from 'react';
import i18next from 'i18next';

import { I18N_CONFIG, SIGNUP_BUTTONS } from 'constants/index';

function Login() {
  return (
    <div>
      <p>{i18next.t(`${I18N_CONFIG.key}:${SIGNUP_BUTTONS.login}`)}</p>
    </div>
  );
}

export default Login;
