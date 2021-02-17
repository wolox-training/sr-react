import api from 'config/api';
import { User } from 'types/types';

const createUser = (data: User) => api.post('https://books-training-rails.herokuapp.com/api/v1', data);

const UserService = {
  createUser
};

export default UserService;
