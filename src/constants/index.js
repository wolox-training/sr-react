export const I18N_CONFIG = {
  english: 'EN',
  spanish: 'ES'
};

export const SIGNUP_FIELDS = {
  firstName: { name: 'firstName', label: 'SignUp:firstName', type: 'text' },
  lastName: { name: 'lastName', label: 'SignUp:lastName', type: 'text' },
  email: { name: 'email', label: 'SignUp:email', type: 'email' },
  password: { name: 'password', label: 'SignUp:password', type: 'password' },
  confirmPassword: {
    name: 'confirmPassword',
    label: 'SignUp:confirmPassword',
    type: 'password'
  }
};

export const SIGNUP_ERROR_MESSAGES = {
  firstName: 'SignUp:errorName',
  lastName: 'SignUp:errorLastname',
  email: 'SignUp:errorEmail',
  password: 'SignUp:errorPassword',
  confirmPassword: 'SignUp:errorConfirmPassword',
  passwordMatch: 'SignUp:errorPasswordMatch',
  emailMatch: 'SignUp:emailMatch',
  signUpService: 'SignUp:signUpService'
};

export const SIGNUP_BUTTONS = {
  signUp: 'SignUp:signUp',
  login: 'SignUp:login'
};

export const LOGIN_BUTTONS = {
  signUp: 'Login:signUp',
  login: 'Login:login'
};

export const LOGIN_FIELDS = {
  email: { name: 'email', label: 'Login:email', type: 'email' },
  password: { name: 'password', label: 'Login:password', type: 'password' }
};

export const LOGIN_ERROR_MESSAGES = {
  email: 'Login:errorEmail',
  password: 'Login:errorPassword',
  emailMatch: 'Login:emailMatch',
  loginService: 'Login:loginService'
};

export const LOGIN_SUCCESS_MESSAGES = {
  userLogged: 'Login:userLogged'
};

export const SIGNUP_SUCCESS_MESSAGES = {
  userCreated: 'SignUp:userCreated'
};

export const RESPONSE_STATUS = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403
};
