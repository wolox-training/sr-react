/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';

const Home = lazy(() => import('screens/Home'));
const Login = lazy(() => import('screens/Login'));
const SignUp = lazy(() => import('screens/SignUp'));

const routes = [
  {
    path: '/sign_up',
    component: SignUp,
    exact: true,
    isPrivate: false
  },
  {
    path: '/',
    component: Login,
    exact: true,
    isPrivate: false
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    isPrivate: false
  }
];

export default routes;
