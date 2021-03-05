import { RouteProps } from 'react-router-dom';

export interface LoginUser {
  email: string;
  password: string;
}
export interface User extends LoginUser {
  firstName: string;
  lastName: string;
  confirmPassword: string;
  locale: string;
}

export interface Props extends RouteProps {
  component: React.ComponentType<RouteProps>;
  path: string;
  exact: boolean;
  isPrivate?: boolean;
}

export interface Session {
  token: string;
  client: string;
  uid: string;
}
export interface SuccessData {
  count: number;
  currentPage: number;
  nextPage: number | null;
  page: Page[];
  totalCount: number;
  totalPages: number;
}

export interface ErrorData {
  errors: string[];
}

export type Page = {
  author: string;
  createdAt: string;
  editor: string;
  genre: string;
  id: number;
  imageUrl: string;
  title: string;
  updatedAt: string;
  year: string;
};
