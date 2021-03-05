import api from 'config/api';
import { Page, SuccessData, ErrorData } from 'types/types';

const getList = () => api.get<SuccessData, ErrorData>('/books');

const getBookInfo = (id: string) => api.get<Page>(`/books/${id}`);

const BooksService = {
  getList,
  getBookInfo
};

export default BooksService;
