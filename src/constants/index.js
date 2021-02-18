export const I18N_CONFIG = {
  key: 'SignUp',
  english: 'EN',
  spanish: 'ES'
};

export const SIGNUP_FIELDS = {
  firstName: { name: 'firstName', label: 'Nombre', type: 'text' },
  lastName: { name: 'lastName', label: 'Apellido', type: 'text' },
  email: { name: 'email', label: 'Correo electrónico', type: 'email' },
  password: { name: 'password', label: 'Contraseña', type: 'password' },
  confirmPassword: {
    name: 'confirmPassword',
    label: 'Confirmar contraseña',
    type: 'password'
  }
};

export const SIGNUP_BUTTONS = {
  signUp: 'signUp',
  login: 'login'
};

export const ERROR_MESSAGES = {
  firstName: 'errorName',
  lastName: 'errorLastname',
  email: 'errorEmail',
  password: 'errorPassword',
  confirmPassword: 'errorConfirmPassword',
  passwordMatch: 'errorPasswordMatch',
  emailMatch: 'emailMatch',
  signUpService: 'signUpService'
};
