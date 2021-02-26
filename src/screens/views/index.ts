/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';

const Home = lazy(() => import('screens/Home'));
const Login = lazy(() => import('screens/Login'));
const SignUp = lazy(() => import('screens/SignUp'));

export default {
  Home,
  Login,
  SignUp
};
