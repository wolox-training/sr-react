import api from 'config/api';
import { LoginUser, User } from 'types/types';

const createUser = (data: User) => api.post('/users', data);

const loginUser = (data: LoginUser) => api.post('/users/sign_in', data);

const UserService = {
  createUser,
  loginUser
};

export default UserService;
