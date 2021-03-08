import Home from 'screens/Home';
import SignUp from 'screens/SignUp';
import Login from 'screens/Login';

const routes = [
  {
    path: '/sign_up',
    component: SignUp,
    exact: true
  },
  {
    path: '/',
    component: Login,
    exact: true
  },
  {
    path: '/home',
    component: Home,
    exact: true
  }
];

export default routes;
