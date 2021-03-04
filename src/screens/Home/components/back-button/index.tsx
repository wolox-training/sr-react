import React from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import backArrow from 'assets/back-arrow.png';
import { BACK_BUTTON } from 'constants/index';

import styles from './styles.module.scss';

interface Props {
  path: string;
}

function BackButton({ path }: Props) {
  return (
    <Link className={`${styles.backBtn} row middle`} to={path}>
      <img className={styles.backArrow} src={backArrow} alt="back-arrow" /> {i18next.t(BACK_BUTTON.text)}
    </Link>
  );
}

export default BackButton;
