import api from 'config/api';
import { User } from 'types/types';

const createUser = (data: User) =>
  api.post('https://books-training-rails.herokuapp.com/api/v1', {
    user: {
      email: data.email,
      password: data.password,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      password_confirmation: data.confirmPassword,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      first_name: data.name,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      last_name: data.lastName,
      locale: data.locale
    }
  });

const UserService = {
  createUser
};

export default UserService;
