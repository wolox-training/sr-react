import React from 'react';

import styles from './styles.module.scss';

interface CardProps {
  source: string;
  alt: string;
  title: string;
  subtitle: string;
}

function Card({ source, alt, title, subtitle }: CardProps) {
  return (
    <div className={`${styles.cardContainer} column`}>
      <div className={styles.imageContainer}>
        <img className={styles.cardImage} src={source} alt={alt} />
      </div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardSubtitle}>{subtitle}</p>
    </div>
  );
}

export default Card;
