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
