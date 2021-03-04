import api from 'config/api';
import { Page, TipadoData, TipadoError } from 'types/types';

const getList = () => api.get<TipadoData, TipadoError>('/books');

const getBookInfo = (id: string) => api.get<Page>(`/books/${id}`);

const BooksService = {
  getList,
  getBookInfo
};

export default BooksService;
