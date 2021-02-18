export const SIGNUP_FIELDS = {
  firstName: { name: 'name', label: 'Nombre', type: 'text', placeholder: '' },
  lastName: { name: 'lastName', label: 'Apellido', type: 'text', placeholder: '' },
  email: { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: '' },
  password: { name: 'password', label: 'Contraseña', type: 'password', placeholder: '' },
  confirmPassword: {
    name: 'confirmPassword',
    label: 'Confirmar contraseña',
    type: 'password',
    placeholder: ''
  }
};

export const ERROR_MESSAGES = {
  name: 'El nombre es requerido',
  lastName: 'El apellido es requerido',
  email: 'El correo es requerido',
  password: 'La contraseña es requerida',
  confirmPassword: 'La confirmación de contraseña es requerida',
  passwordMatch: 'Las contraseñas no coinciden',
  emailMatch: 'Ingrese un correo válido'
};
