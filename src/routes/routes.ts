/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';

import { ROUTES } from 'constants/paths';

const Home = lazy(() => import('screens/Home'));
const Login = lazy(() => import('screens/Login'));
const SignUp = lazy(() => import('screens/SignUp'));
const Book = lazy(() => import('screens/Home/screens/book'));

const routes = [
  {
    path: ROUTES.signUp,
    component: SignUp,
    exact: true,
    isPrivate: false
  },
  {
    path: ROUTES.login,
    component: Login,
    exact: true,
    isPrivate: false
  },
  {
    path: ROUTES.home,
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
