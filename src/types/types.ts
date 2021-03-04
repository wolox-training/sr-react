import { RouteComponentProps } from 'react-router';

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

export type RouterProps = RouteComponentProps;
