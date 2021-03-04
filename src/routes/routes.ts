/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';

const Home = lazy(() => import('screens/Home'));
const Login = lazy(() => import('screens/Login'));
const SignUp = lazy(() => import('screens/SignUp'));
const Book = lazy(() => import('screens/Home/screens/book'));

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
    isPrivate: true
  },
  {
    path: '/books/:id',
    component: Book,
    exact: true,
    isPrivate: true
  }
];

export default routes;
