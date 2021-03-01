import api from 'config/api';
import { TipadoData, TipadoError } from 'types/types';

const getList = () => api.get<TipadoData, TipadoError>('/books');

const BooksService = {
  getList
};

export default BooksService;
