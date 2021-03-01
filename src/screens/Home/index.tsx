import React from 'react';
import i18next from 'i18next';
import { useHistory } from 'react-router';

import { useDispatch, actionCreators } from 'contexts';
import { I18N_CONFIG, HOME_FIELDS, ROUTES } from 'constants/index';
import logo from 'assets/wLogo.png';
import { useRequest } from 'hooks/useRequest';
import BooksService from 'services/BookService';
import Loading from 'components/Spinner/components/loading';

import BookList from './components/book-list';
import styles from './styles.module.scss';

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('session');
    dispatch(actionCreators.logout());
    history.replace(ROUTES.login);
  };
  const [, loading, error] = useRequest(
    {
      request: BooksService.getList,
      payload: {},
      withPostSuccess: data => {
        if (data?.page) {
          dispatch(actionCreators.getBooks(data.page));
        }
      }
    },
    []
  );
  return (
    <div className="column">
      <nav className={styles.navContainer}>
        <img src={logo} alt="wolox-logo" className={styles.image} />
        <button aria-label="logout" className={styles.logoutBtn} type="button" onClick={handleLogout}>
          {i18next.t(`${I18N_CONFIG.key.home}:${HOME_FIELDS.logout}`)}
        </button>
      </nav>
      {error && <p>Ha ocurrido un error obteniendo los libros</p>}
      {loading ? <Loading /> : <BookList />}
    </div>
  );
}

export default Home;
