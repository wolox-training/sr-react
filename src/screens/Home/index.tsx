import React from 'react';
import i18next from 'i18next';

import logo from 'assets/wLogo.png';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <nav className="">
        <img src={logo} className="" alt={i18next.t('Home:logoAlt') as string} />
        <p>logout</p>
      </nav>
    </div>
  );
}

export default Home;
