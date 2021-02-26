import React from 'react';
import i18next from 'i18next';
import { useHistory } from 'react-router';

import { useDispatch, actionCreators } from 'contexts';
import { I18N_CONFIG, HOME_FIELDS, ROUTES } from 'constants/index';
import logo from 'assets/wLogo.png';

import styles from './styles.module.scss';

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(actionCreators.logout());
    history.replace(ROUTES.login);
  };
  return (
    <nav className={styles.navContainer}>
      <img src={logo} alt="wolox-logo" className={styles.image} />
      <button aria-label="logout" className={styles.logoutBtn} type="button" onClick={handleLogout}>
        {i18next.t(`${I18N_CONFIG.key.home}:${HOME_FIELDS.logout}`)}
      </button>
    </nav>
  );
}

export default Home;
