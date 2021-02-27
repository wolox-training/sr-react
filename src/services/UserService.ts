import api from 'config/api';
import { User } from 'types/types';

const createUser = (data: User) => api.post('/users', data);

const UserService = {
  createUser
};

export default UserService;
