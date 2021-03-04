import i18next from 'i18next';

i18next.addResources('es', 'Login', {
  email: 'Correo electrónico',
  password: 'Contraseña',
  login: 'Ingresa',
  signUp: 'Regístrate',
  loginService: 'Credenciales incorrectas',
  emailMatch: 'El formato de mail no es correcto',
  errorEmail: 'El email es requerido',
  errorPassword: 'La contraseña es requerida',
  userLogged: 'Ingreso exitoso'
});

i18next.addResources('en', 'Login', {
  email: 'Email',
  password: 'Password',
  login: 'Login',
  signUp: 'Sign Up',
  loginService: 'Bad credentials',
  emailMatch: 'Invalid email format',
  errorEmail: 'Email field is required',
  errorPassword: 'Password field is required',
  userLogged: 'Login success'
});
