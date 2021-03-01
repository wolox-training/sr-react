export const I18N_CONFIG = {
  key: {
    login: 'Login',
    signup: 'SignUp',
    home: 'Home'
  },
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

export const LOGIN_FIELDS = {
  email: { name: 'email', label: 'Correo electrónico', type: 'email' },
  password: { name: 'password', label: 'Contraseña', type: 'password' }
};

export const HOME_FIELDS = {
  logout: 'logout'
};

export const ERROR_MESSAGES = {
  firstName: 'errorName',
  lastName: 'errorLastname',
  email: 'errorEmail',
  password: 'errorPassword',
  confirmPassword: 'errorConfirmPassword',
  passwordMatch: 'errorPasswordMatch',
  emailMatch: 'emailMatch',
  signUpService: 'signUpService',
  loginService: 'loginService',
  booksList: 'bookList'
};

export const SUCCESS_MESSAGES = {
  userCreated: 'userCreated',
  userLogged: 'userLogged'
};

export const RESPONSE_STATUS = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403
};

export const ROUTES = {
  home: '/home',
  signUp: '/sign_up',
  login: '/'
};

export const AUTH_LOGIN_HEADERS = {
  accessToken: 'access-token',
  client: 'client',
  uid: 'uid'
};
