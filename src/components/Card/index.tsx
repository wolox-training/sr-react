import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from 'constants/paths';

import styles from './styles.module.scss';

interface CardProps {
  id: number;
  source: string;
  alt: string;
  title: string;
  subtitle: string;
}

function Card({ id, source = '', alt = 'no-image', title, subtitle }: CardProps) {
  return (
    <Link to={`${ROUTES.books}/${id}`} className={styles.cardContainer} aria-label="book link">
      <div className={styles.imageContainer}>
        <img className={styles.cardImage} src={source} alt={alt} />
      </div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardSubtitle}>{subtitle}</p>
    </Link>
  );
}

export default Card;
