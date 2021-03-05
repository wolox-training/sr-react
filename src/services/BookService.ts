import api from 'config/api';
import { SuccessData, ErrorData } from 'types/types';

const getList = () => api.get<SuccessData, ErrorData>('/books');

const BooksService = {
  getList
};

export default BooksService;
