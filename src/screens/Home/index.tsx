import React from 'react';
import i18next from 'i18next';

import { useDispatch, actionCreators } from 'contexts/UserContext';
import { HOME_FIELDS } from 'constants/index';
import LocalStorageService from 'services/LocalStorageService';
import logo from 'assets/wLogo.png';

import BookList from './components/book-list';
import styles from './styles.module.scss';

function Home() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    LocalStorageService.removeValue('session');
    dispatch(actionCreators.logout());
  };
  return (
    <div className="column">
      <nav className={styles.navContainer}>
        <img src={logo} alt="wolox-logo" className={styles.image} />
        <button aria-label="logout" className={styles.logoutBtn} type="button" onClick={handleLogout}>
          {i18next.t(`${HOME_FIELDS.logout}`)}
        </button>
      </nav>
      <BookList />
    </div>
  );
}

export default Home;
